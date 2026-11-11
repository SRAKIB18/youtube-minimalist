// Focus Mode Settings
let settings = {
    hideFeed: true,
    hideShorts: true
};

// HTML ট্যাগে লাইভ ডাটা-অ্যাট্রিবিউট আপডেট করা যাতে CSS সরাসরি কাজ করে
function updateAttributes() {
    document.documentElement.setAttribute("data-hide-feed", settings.hideFeed ? "true" : "false");
    document.documentElement.setAttribute("data-hide-shorts", settings.hideShorts ? "true" : "false");
}

// ডিফল্টভাবে document_start-এ সেট করা (যাতে কোনো ফ্লিকার না হয়)
updateAttributes();

// স্টোরেজ থেকে ইউজারের সেটিংস লোড করা
chrome.storage.sync.get(["hideFeed", "hideShorts"], (data) => {
    if (data.hideFeed !== undefined) settings.hideFeed = data.hideFeed;
    if (data.hideShorts !== undefined) settings.hideShorts = data.hideShorts;
    updateAttributes();
    applyFocusMode();
});

// পপআপ থেকে টগল অন/অফ করলে সাথে সাথে লাইভ পরিবর্তন হওয়া
chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "sync") {
        if (changes.hideFeed !== undefined) settings.hideFeed = changes.hideFeed.newValue;
        if (changes.hideShorts !== undefined) settings.hideShorts = changes.hideShorts.newValue;
        updateAttributes();
        applyFocusMode();
    }
});

function applyFocusMode() {
    const isHomePage = window.location.pathname === "/" || window.location.pathname === "";

    // হোম ফিড টগল হ্যান্ডলিং
    if (isHomePage && settings.hideFeed) {
        injectPlaceholder();
    } else {
        removePlaceholder();
    }

    // শর্টস রিডাইরেক্ট হ্যান্ডলিং
    if (settings.hideShorts && window.location.pathname.startsWith("/shorts/")) {
        const videoId = window.location.pathname.split("/shorts/")[1]?.split("?")[0];
        if (videoId) {
            window.location.replace(`https://www.youtube.com/watch?v=${videoId}`);
        }
    }
}

function injectPlaceholder() {
    if (document.getElementById("yt-focus-welcome-card")) return;

    const browse = document.querySelector("ytd-browse[page-subtype='home']");
    if (browse) {
        const card = document.createElement("div");
        card.id = "yt-focus-welcome-card";
        card.className = "yt-focus-placeholder";
        card.innerHTML = `
            <div style="background: rgba(255, 0, 0, 0.08); padding: 18px; border-radius: 50%; margin-bottom: 16px; display: inline-flex;">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff0000" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>
            <h2>Focus Mode Active</h2>
            <p>হোম ফিড ও শর্টস বন্ধ রয়েছে। যা দেখতে চান, উপরের সার্চ বারে সরাসরি সার্চ করুন।</p>
        `;
        browse.prepend(card);
    }
}

function removePlaceholder() {
    const card = document.getElementById("yt-focus-welcome-card");
    if (card) card.remove();
}

// YouTube SPA নেভিগেশন হ্যান্ডলিং
window.addEventListener("yt-navigate-finish", applyFocusMode);
window.addEventListener("popstate", applyFocusMode);

// DOM পর্যবেক্ষণ করা (হোমপেজে ডাইনামিক রেন্ডারিং হ্যান্ডলিং)
const observer = new MutationObserver(() => {
    const isHomePage = window.location.pathname === "/" || window.location.pathname === "";
    if (isHomePage && settings.hideFeed) {
        injectPlaceholder();
    }
});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});

applyFocusMode();
