const toggleFeed = document.getElementById("toggleFeed");
const toggleShorts = document.getElementById("toggleShorts");
const toggleQuotes = document.getElementById("toggleQuotes");
const selectInterval = document.getElementById("selectInterval");
const statusPill = document.getElementById("statusBadge");

function updateBadge() {
  if (statusPill) {
    const textEl = statusPill.querySelector(".status-text");
    if (toggleFeed.checked || toggleShorts.checked) {
      if (textEl) textEl.textContent = "ACTIVE";
      statusPill.classList.remove("inactive");
    } else {
      if (textEl) textEl.textContent = "PAUSED";
      statusPill.classList.add("inactive");
    }
  }
}

// সংরক্ষিত সেটিংস লোড করা
chrome.storage.sync.get(["hideFeed", "hideShorts", "showQuotes", "autoInterval"], (data) => {
  toggleFeed.checked = data.hideFeed !== false;
  toggleShorts.checked = data.hideShorts !== false;
  if (toggleQuotes) toggleQuotes.checked = data.showQuotes !== false;
  if (selectInterval) {
    selectInterval.value = data.autoInterval !== undefined ? String(data.autoInterval) : "10";
  }
  updateBadge();
});

// টগল পরিবর্তন হলে সেভ করা (লাইভ কাজ করবে, রিলোড ছাড়াই)
toggleFeed.addEventListener("change", () => {
  chrome.storage.sync.set({ hideFeed: toggleFeed.checked }, () => {
    updateBadge();
  });
});

toggleShorts.addEventListener("change", () => {
  chrome.storage.sync.set({ hideShorts: toggleShorts.checked }, () => {
    updateBadge();
  });
});

if (toggleQuotes) {
  toggleQuotes.addEventListener("change", () => {
    chrome.storage.sync.set({ showQuotes: toggleQuotes.checked });
  });
}

if (selectInterval) {
  selectInterval.addEventListener("change", () => {
    const val = parseInt(selectInterval.value, 10);
    chrome.storage.sync.set({ autoInterval: isNaN(val) ? 10 : val });
  });
}
