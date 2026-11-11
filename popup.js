const toggleFeed = document.getElementById("toggleFeed");
const toggleShorts = document.getElementById("toggleShorts");
const badge = document.querySelector(".badge");

function updateBadge() {
  if (badge) {
    if (toggleFeed.checked || toggleShorts.checked) {
      badge.textContent = "ACTIVE";
      badge.style.background = "#10b981";
    } else {
      badge.textContent = "OFF";
      badge.style.background = "#9ca3af";
    }
  }
}

// সংরক্ষিত সেটিংস লোড করা
chrome.storage.sync.get(["hideFeed", "hideShorts"], (data) => {
  toggleFeed.checked = data.hideFeed !== false;
  toggleShorts.checked = data.hideShorts !== false;
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
