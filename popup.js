const toggleFeed = document.getElementById("toggleFeed");
const toggleShorts = document.getElementById("toggleShorts");
const toggleRelated = document.getElementById("toggleRelated");
const toggleComments = document.getElementById("toggleComments");
const toggleAutoplay = document.getElementById("toggleAutoplay");
const toggleQuotes = document.getElementById("toggleQuotes");
const selectInterval = document.getElementById("selectInterval");
const selectBreakInterval = document.getElementById("selectBreakInterval");
const statusPill = document.getElementById("statusBadge");

const todayTimeDisplay = document.getElementById("todayTimeDisplay");
const timeBarFill = document.getElementById("timeBarFill");
const sessionTimeText = document.getElementById("sessionTimeText");

function formatDuration(seconds) {
  if (!seconds || seconds < 60) return "< 1m";
  const mins = Math.floor(seconds / 60);
  if (mins < 60) return `${mins}m`;
  const hours = Math.floor(mins / 60);
  const remMins = mins % 60;
  return remMins > 0 ? `${hours}h ${remMins}m` : `${hours}h`;
}

function updateTimeDisplay() {
  chrome.storage.local.get(["yt_today_seconds", "yt_session_seconds", "yt_today_date"], (res) => {
    const todayStr = new Date().toISOString().slice(0, 10);
    const todaySec = res.yt_today_date === todayStr ? (res.yt_today_seconds || 0) : 0;
    const sessionSec = res.yt_session_seconds || 0;

    if (todayTimeDisplay) todayTimeDisplay.textContent = formatDuration(todaySec);
    if (sessionTimeText) sessionTimeText.textContent = `Session: ${formatDuration(sessionSec)}`;

    if (timeBarFill) {
      const pct = Math.min(100, Math.round((todaySec / 7200) * 100)); // 2h target
      timeBarFill.style.width = pct + "%";
      if (pct >= 100) {
        timeBarFill.style.background = "linear-gradient(90deg, #ef4444, #dc2626)";
      } else if (pct >= 75) {
        timeBarFill.style.background = "linear-gradient(90deg, #f59e0b, #d97706)";
      } else {
        timeBarFill.style.background = "linear-gradient(90deg, #10b981, #059669)";
      }
    }
  });
}

function updateBadge() {
  if (statusPill) {
    const textEl = statusPill.querySelector(".status-text");
    const isAnyActive = (toggleFeed && toggleFeed.checked) ||
                        (toggleShorts && toggleShorts.checked) ||
                        (toggleRelated && toggleRelated.checked) ||
                        (toggleComments && toggleComments.checked);
    if (isAnyActive) {
      if (textEl) textEl.textContent = "ACTIVE";
      statusPill.classList.remove("inactive");
    } else {
      if (textEl) textEl.textContent = "PAUSED";
      statusPill.classList.add("inactive");
    }
  }
}

// সংরক্ষিত সেটিংস লোড করা
chrome.storage.sync.get([
  "hideFeed",
  "hideShorts",
  "hideRelated",
  "hideComments",
  "disableAutoplay",
  "showQuotes",
  "autoInterval",
  "breakInterval"
], (data) => {
  if (toggleFeed) toggleFeed.checked = data.hideFeed !== false;
  if (toggleShorts) toggleShorts.checked = data.hideShorts !== false;
  if (toggleRelated) toggleRelated.checked = data.hideRelated !== false;
  if (toggleComments) toggleComments.checked = data.hideComments !== false;
  if (toggleAutoplay) toggleAutoplay.checked = data.disableAutoplay !== false;
  if (toggleQuotes) toggleQuotes.checked = data.showQuotes !== false;
  if (selectInterval) {
    selectInterval.value = data.autoInterval !== undefined ? String(data.autoInterval) : "10";
  }
  if (selectBreakInterval) {
    selectBreakInterval.value = data.breakInterval !== undefined ? String(data.breakInterval) : "30";
  }
  updateBadge();
});

// স্ক্রিন টাইম লোড করা
updateTimeDisplay();

// লাইভ স্ক্রিন টাইম আপডেট লিসেনার
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && (changes.yt_today_seconds || changes.yt_session_seconds)) {
    updateTimeDisplay();
  }
});

// টগল ও সেটিংস ইভেন্টস
if (toggleFeed) {
  toggleFeed.addEventListener("change", () => {
    chrome.storage.sync.set({ hideFeed: toggleFeed.checked }, updateBadge);
  });
}

if (toggleShorts) {
  toggleShorts.addEventListener("change", () => {
    chrome.storage.sync.set({ hideShorts: toggleShorts.checked }, updateBadge);
  });
}

if (toggleRelated) {
  toggleRelated.addEventListener("change", () => {
    chrome.storage.sync.set({ hideRelated: toggleRelated.checked }, updateBadge);
  });
}

if (toggleComments) {
  toggleComments.addEventListener("change", () => {
    chrome.storage.sync.set({ hideComments: toggleComments.checked }, updateBadge);
  });
}

if (toggleAutoplay) {
  toggleAutoplay.addEventListener("change", () => {
    chrome.storage.sync.set({ disableAutoplay: toggleAutoplay.checked });
  });
}

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

if (selectBreakInterval) {
  selectBreakInterval.addEventListener("change", () => {
    const val = parseInt(selectBreakInterval.value, 10);
    chrome.storage.sync.set({ breakInterval: isNaN(val) ? 30 : val });
  });
}
