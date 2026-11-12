// Focus Mode Settings
let settings = {
    hideFeed: true,
    hideShorts: true,
    showQuotes: true
};

// সহীহ হাদিস ও অনুপ্রেরণামূলক বাণী (বাংলায়)
const HADITH_QUOTES = [
    {
        text: "মানুষের ইসলামের অন্যতম সৌন্দর্য হলো অনর্থক ও অপ্রয়োজনীয় বিষয় ত্যাগ করা।",
        source: "হাদিস: সুনান আত-তিরমিজি (২৩১৭)"
    },
    {
        text: "এমন দুটি নিয়ামত আছে, যে ব্যাপারে অধিকাংশ মানুষ ক্ষতিগ্রস্ত— একটি স্বাস্থ্য এবং অপরটি অবসর।",
        source: "হাদিস: সহীহ বুখারী (৬৪১২)"
    },
    {
        text: "নিশ্চয়ই সমস্ত কাজের ফলাফল নিয়তের ওপর নির্ভরশীল।",
        source: "হাদিস: সহীহ বুখারী (১)"
    },
    {
        text: "পাঁচটি বিষয়ের পূর্বে পাঁচটি বিষয়কে মূল্যায়ন করো: বার্ধক্যের পূর্বে যৌবনকে, অসুস্থতার পূর্বে সুস্থতাকে, দারিদ্র্যের পূর্বে সচ্ছলতাকে, ব্যস্ততার পূর্বে অবসরকে এবং মৃত্যুর পূর্বে জীবনকে।",
        source: "হাদিস: আল-মুস্তাদরাক (৭৮৪৮)"
    },
    {
        text: "সবল মুমিন দুর্বল মুমিনের চেয়ে উত্তম এবং আল্লাহর কাছে বেশি প্রিয়। যা তোমার উপকার করবে তা অর্জনে সচেষ্ট হও এবং আল্লাহর সাহায্য চাও, কখনো অলস বা হতাশ হয়ো না।",
        source: "হাদিস: সহীহ মুসলিম (২৬৬৪)"
    },
    {
        text: "যে ব্যক্তি জ্ঞান অর্জনের পথে বের হয়, আল্লাহ তার জন্য জান্নাতের পথ সহজ করে দেন।",
        source: "হাদিস: সহীহ মুসলিম (২৬৯৯)"
    },
    {
        text: "আল্লাহর কাছে সবচেয়ে প্রিয় আমল হলো যা নিয়মিত করা হয়, তা পরিমাণে অল্প হলেও।",
        source: "হাদিস: সহীহ বুখারী (৬৪৬৫)"
    },
    {
        text: "আল্লাহ ঐ বান্দার কাজ পছন্দ করেন, যে কোনো কাজ করলে তা নিখুঁত ও নিষ্ঠার সাথে সম্পাদন করে।",
        source: "হাদিস: শুআবুল ঈমান (৪৯২৯)"
    },
    {
        text: "নিজের হাতের উপার্জনের চেয়ে উত্তম খাবার কেউ কখনো খায়নি।",
        source: "হাদিস: সহীহ বুখারী (২০৭২)"
    },
    {
        text: "ধৈর্য হলো এক উজ্জ্বল আলোকবর্তিকা।",
        source: "হাদিস: সহীহ মুসলিম (২২৩)"
    },
    {
        text: "তুমি যদি আল্লাহর ওপর যথাযথ ভরসা (তাওয়াক্কুল) করতে, তবে তিনি পাখিদের যেভাবে রিজিক দেন তোমাদেরও সেভাবে রিজিক দিতেন— যারা সকালে খালি পেটে বের হয় এবং সন্ধ্যায় ভরা পেটে ফিরে আসে।",
        source: "হাদিস: সুনান আত-তিরমিজি (২৩৪৪)"
    },
    {
        text: "যে ব্যক্তি মানুষের উপকারে আসে, সে-ই মানুষের মধ্যে সর্বোত্তম।",
        source: "হাদিস: আল-মু'জামুল আওসাত (৫৭৮৭)"
    },
    {
        text: "সকালবেলা আমার উম্মতের কাজে বরকত দান করা হয়েছে।",
        source: "হাদিস: সুনান আবু দাউদ (২৬০৬)"
    },
    {
        text: "হে আল্লাহ! আমি আপনার কাছে অলসতা, অক্ষমতা, ভীরুতা ও দুশ্চিন্তা থেকে পানাহ চাই।",
        source: "হাদিস: সহীহ বুখারী (২৮৯৩)"
    },
    {
        text: "জ্ঞান অর্জন করা প্রত্যেক মুসলমানের ওপর আবশ্যক (ফরজ)।",
        source: "হাদিস: সুনান ইবনে মাজাহ (২২৪)"
    },
    {
        text: "তোমাদের মধ্যে সেই ব্যক্তিই উত্তম, যার চরিত্র ও আচরণ সর্বোত্তম।",
        source: "হাদিস: সহীহ বুখারী (৬০৩৫)"
    },
    {
        text: "মুমিনের প্রতিটি অবস্থাতেই কল্যাণ থাকে— সুখে সে শুকরিয়া আদায় করে, আর বিপদে ধৈর্য ধারণ করে।",
        source: "হাদিস: সহীহ মুসলিম (২৯৯৯)"
    },
    {
        text: "প্রকৃত বীর সে নয় যে কুস্তিতে অন্যকে পরাস্ত করে, বরং প্রকৃত বীর সে যে রাগের মুহূর্তে নিজেকে নিয়ন্ত্রণ করতে পারে।",
        source: "হাদিস: সহীহ বুখারী (৬১১৪)"
    },
    {
        text: "যে ব্যক্তি ধৈর্য ধারণের চেষ্টা করে, আল্লাহ তাকে ধৈর্যশীল বানিয়ে দেন। আর ধৈর্যের চেয়ে উত্তম ও প্রশস্ত দান কাউকে দেওয়া হয়নি।",
        source: "হাদিস: সহীহ বুখারী (১৪৬৯)"
    },
    {
        text: "সহজ করো, কঠিন করো না; সুসংবাদ দাও, মানুষকে দূরে ঠেলে দিয়ো না।",
        source: "হাদিস: সহীহ বুখারী (৬৯)"
    },
    {
        text: "দুনিয়াতে এমনভাবে জীবনযাপন করো, যেন তুমি একজন প্রবাসী মুসাফির বা পথিক।",
        source: "হাদিস: সহীহ বুখারী (৬৪১৬)"
    },
    {
        text: "আল্লাহ সুন্দর এবং তিনি সৌন্দর্যকে ভালোবাসেন।",
        source: "হাদিস: সহীহ মুসলিম (৯১)"
    },
    {
        text: "যে ব্যক্তি মানুষের কৃতজ্ঞতা প্রকাশ করে না, সে আল্লাহর প্রতিও কৃতজ্ঞ হতে পারে না।",
        source: "হাদিস: সুনান আবু দাউদ (৪৮১১)"
    },
    {
        text: "কোনো ব্যক্তি মারা গেলে তিনটি কাজ ছাড়া সব বন্ধ হয়ে যায়: সদকায়ে জারিয়া, উপকারী জ্ঞান, এবং নেক সন্তান যে তার জন্য দোয়া করে।",
        source: "হাদিস: সহীহ মুসলিম (১৬৩১)"
    },
    {
        text: "তোমাদের কেউ যেন কোনো সৎ কাজকে তুচ্ছ মনে না করে, এমনকি তা যদি তোমার ভাইয়ের সাথে হাস্যোজ্জ্বল মুখে দেখা করাও হয়।",
        source: "হাদিস: সহীহ মুসলিম (২৬২৬)"
    },
    {
        text: "মুমিনের ওপর যে কোনো ক্লান্তি, রোগ, শোক বা দুশ্চিন্তা— এমনকি একটি কাঁটার আঘাত এলেও আল্লাহ তার বিনিময়ে তার পাপ মার্জনা করেন।",
        source: "হাদিস: সহীহ বুখারী (৫৬৪১)"
    },
    {
        text: "উত্তম ও মিষ্টি কথা বলাও একটি সদকা (পুণ্য)।",
        source: "হাদিস: সহীহ বুখারী (২৯৮৯)"
    },
    {
        text: "পাপ থেকে আন্তরিকভাবে তওবাকারী ব্যক্তি এমন, যেন তার কোনো পাপই ছিল না।",
        source: "হাদিস: সুনান ইবনে মাজাহ (৪২৫০)"
    },
    {
        text: "লজ্জাশীলতা ও শালীনতা শুধুই কল্যাণ বয়ে নিয়ে আসে।",
        source: "হাদিস: সহীহ বুখারী (৬১১৭)"
    },
    {
        text: "পরের মুখাপেক্ষী না হয়ে আত্মমর্যাদা নিয়ে নিজ হাতে কাজ করা অন্যের কাছে হাত পাতার চেয়ে বহুগুণে উত্তম।",
        source: "হাদিস: সহীহ বুখারী (১৪৭১)"
    },
    {
        text: "আল্লাহ সেই ব্যক্তির মুখমণ্ডল উজ্জ্বল করুন, যে আমার কথা শুনে তা মনে রাখে এবং যথাযথভাবে অন্যের কাছে পৌঁছে দেয়।",
        source: "হাদিস: সুনান আত-তিরমিজি (২৬৫৭)"
    },
    {
        text: "তোমাদের মধ্যে সর্বোত্তম ব্যক্তি সে, যে নিজে কুরআন শেখে এবং অন্যকে শিক্ষা দেয়।",
        source: "হাদিস: সহীহ বুখারী (৫০২৭)"
    },
    {
        text: "জ্ঞানীর মর্যাদা একজন সাধারণ ইবাদতকারীর ওপর তেমনই, যেমন পূর্ণিমার চাঁদের মর্যাদা সমস্ত তারকার ওপর।",
        source: "হাদিস: সুনান আবু দাউদ (৩৬৪১)"
    },
    {
        text: "যে ব্যক্তি নিজের ক্রোধ সংবরণ করতে পারে, অথচ তা বাস্তবায়নের পূর্ণ ক্ষমতা তার ছিল— কিয়ামতের দিন আল্লাহ সমস্ত সৃষ্টির সামনে তাকে পুরস্কৃত করবেন।",
        source: "হাদিস: সুনান আবু দাউদ (৪৭৭৭)"
    },
    {
        text: "দোয়া ছাড়া আর কোনো কিছুই ভাগ্যকে পরিবর্তন করতে পারে না, আর নেক আমল ছাড়া আর কিছুই হায়াত বৃদ্ধি করতে পারে না।",
        source: "হাদিস: সুনান আত-তিরমিজি (২১৩৯)"
    }
];

// HTML ট্যাগে লাইভ ডাটা-অ্যাট্রিবিউট আপডেট করা যাতে CSS সরাসরি কাজ করে
function updateAttributes() {
    document.documentElement.setAttribute("data-hide-feed", settings.hideFeed ? "true" : "false");
    document.documentElement.setAttribute("data-hide-shorts", settings.hideShorts ? "true" : "false");
    document.documentElement.setAttribute("data-show-quotes", settings.showQuotes ? "true" : "false");
}

// ডিফল্টভাবে document_start-এ সেট করা
updateAttributes();

// স্টোরেজ থেকে ইউজারের সেটিংস লোড করা
chrome.storage.sync.get(["hideFeed", "hideShorts", "showQuotes"], (data) => {
    if (data.hideFeed !== undefined) settings.hideFeed = data.hideFeed;
    if (data.hideShorts !== undefined) settings.hideShorts = data.hideShorts;
    if (data.showQuotes !== undefined) settings.showQuotes = data.showQuotes;
    updateAttributes();
    applyFocusMode();
});

// পপআপ থেকে টগল অন/অফ করলে সাথে সাথে লাইভ পরিবর্তন হওয়া
chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "sync") {
        if (changes.hideFeed !== undefined) settings.hideFeed = changes.hideFeed.newValue;
        if (changes.hideShorts !== undefined) settings.hideShorts = changes.hideShorts.newValue;
        if (changes.showQuotes !== undefined) settings.showQuotes = changes.showQuotes.newValue;
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

let currentHadithIndex = -1;

function getDailyHadith() {
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    currentHadithIndex = dayOfYear % HADITH_QUOTES.length;
    return HADITH_QUOTES[currentHadithIndex];
}

function getRandomHadith() {
    let nextIndex;
    do {
        nextIndex = Math.floor(Math.random() * HADITH_QUOTES.length);
    } while (HADITH_QUOTES.length > 1 && nextIndex === currentHadithIndex);
    currentHadithIndex = nextIndex;
    return HADITH_QUOTES[currentHadithIndex];
}

function injectPlaceholder() {
    if (document.getElementById("yt-focus-welcome-card")) return;

    const browse = document.querySelector("ytd-browse[page-subtype='home']");
    if (browse) {
        const hadith = getDailyHadith();
        const card = document.createElement("div");
        card.id = "yt-focus-welcome-card";
        card.className = "yt-focus-placeholder";

        card.innerHTML = `
            <div class="yt-focus-badge">
                <span class="pulse-dot"></span>
                <span>ফোকাস স্পেস</span>
            </div>

            <div class="yt-focus-header">
                <h1 class="yt-focus-greeting">সময়ের সদ্ব্যবহার করুন</h1>
                <p class="yt-focus-subtext">অনর্থক বিষয় এড়িয়ে চলুন। যা প্রয়োজন তা ওপরের সার্চ বারে খুঁজুন।</p>
            </div>

            <!-- হাদিস ও ইসলামিক বাণী কার্ড -->
            <div class="yt-focus-quote-wrap" id="yt-focus-quote-wrap">
                <span class="yt-focus-quote-icon">❝</span>
                <p class="yt-focus-quote-text" id="yt-quote-text">${hadith.text}</p>
                <div class="yt-focus-quote-footer">
                    <span class="yt-focus-quote-author" id="yt-quote-author">— ${hadith.source}</span>
                    <button type="button" id="yt-focus-quote-refresh" title="আরেকটি হাদিস পড়ুন">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
                        </svg>
                        <span>পরবর্তী হাদিস</span>
                    </button>
                </div>
            </div>

            <!-- কীবোর্ড শর্টকাট গাইড -->
            <div class="yt-focus-search-hint">
                 কিবোর্ডে <kbd>/</kbd> চাপলে ওপরের সার্চ বারে সরাসরি কার্সর চলে যাবে
            </div>
        `;
        browse.prepend(card);

        // হাদিস রিফ্রেশ হ্যান্ডলার
        const refreshBtn = card.querySelector("#yt-focus-quote-refresh");
        if (refreshBtn) {
            refreshBtn.addEventListener("click", () => {
                const nextHadith = getRandomHadith();
                const qText = document.getElementById("yt-quote-text");
                const qAuthor = document.getElementById("yt-quote-author");
                if (qText && qAuthor) {
                    qText.textContent = nextHadith.text;
                    qAuthor.textContent = `— ${nextHadith.source}`;
                }
            });
        }
    }
}

function removePlaceholder() {
    const card = document.getElementById("yt-focus-welcome-card");
    if (card) card.remove();
}

// কিবোর্ড শর্টকাট '/' দিয়ে ওপরের মূল সার্চ বক্সে তাৎক্ষণিক ফোকাস
window.addEventListener("keydown", (e) => {
    const activeEl = document.activeElement;
    const isInputFocused = activeEl && (
        activeEl.tagName === "INPUT" ||
        activeEl.tagName === "TEXTAREA" ||
        activeEl.isContentEditable
    );

    if (e.key === "/" && !isInputFocused) {
        e.preventDefault();
        const topInput = document.querySelector("input#search, input.ytSearchboxComponentInput");
        if (topInput) {
            topInput.focus();
            topInput.select();
        }
    }

    if (e.key === "Escape") {
        if (activeEl && activeEl.tagName === "INPUT") {
            activeEl.blur();
        }
    }
});

// YouTube SPA নেভিগেশন হ্যান্ডলিং
window.addEventListener("yt-navigate-finish", applyFocusMode);
window.addEventListener("popstate", applyFocusMode);

// DOM পর্যবেক্ষণ করা
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
