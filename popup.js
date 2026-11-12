const toggleFeed = document.getElementById("toggleFeed");
const toggleShorts = document.getElementById("toggleShorts");
const toggleRelated = document.getElementById("toggleRelated");
const toggleComments = document.getElementById("toggleComments");
const toggleAutoplay = document.getElementById("toggleAutoplay");
const toggleQuotes = document.getElementById("toggleQuotes");
const selectInterval = document.getElementById("selectInterval");
const selectBreakInterval = document.getElementById("selectBreakInterval");
const selectDailyLimit = document.getElementById("selectDailyLimit");
const statusPill = document.getElementById("statusBadge");

const todayTimeDisplay = document.getElementById("todayTimeDisplay");
const timeBarFill = document.getElementById("timeBarFill");
const sessionTimeText = document.getElementById("sessionTimeText");
const dailyGoalText = document.getElementById("dailyGoalText");

// Pomodoro Elements
const pomoCard = document.querySelector(".pomodoro-card");
const pomoIcon = document.getElementById("pomoIcon");
const pomoModeLabel = document.getElementById("pomoModeLabel");
const pomoTimeDisplay = document.getElementById("pomoTimeDisplay");
const pomoToggleBtn = document.getElementById("pomoToggleBtn");
const pomoResetBtn = document.getElementById("pomoResetBtn");
const pomoSwitchModeBtn = document.getElementById("pomoSwitchModeBtn");

let cachedDailyLimit = 120; // Default 2 hours

function formatDuration(seconds) {
  if (!seconds || seconds < 60) return "< 1m";
  const mins = Math.floor(seconds / 60);
  if (mins < 60) return `${mins}m`;
  const hours = Math.floor(mins / 60);
  const remMins = mins % 60;
  return remMins > 0 ? `${hours}h ${remMins}m` : `${hours}h`;
}

function formatTimer(seconds) {
  const m = Math.floor(Math.max(0, seconds) / 60);
  const s = Math.floor(Math.max(0, seconds) % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function updateTimeDisplay() {
  chrome.storage.local.get(["yt_today_seconds", "yt_session_seconds", "yt_today_date"], (res) => {
    const todayStr = new Date().toISOString().slice(0, 10);
    const todaySec = res.yt_today_date === todayStr ? (res.yt_today_seconds || 0) : 0;
    const sessionSec = res.yt_session_seconds || 0;

    if (todayTimeDisplay) todayTimeDisplay.textContent = formatDuration(todaySec);
    if (sessionTimeText) sessionTimeText.textContent = `Session: ${formatDuration(sessionSec)}`;

    const limitMin = cachedDailyLimit;
    const limitSec = limitMin > 0 ? (limitMin * 60) : 7200;

    if (dailyGoalText) {
      if (limitMin === 0) {
        dailyGoalText.textContent = "Target: Unlimited";
      } else {
        const h = Math.floor(limitMin / 60);
        const m = limitMin % 60;
        const limitStr = h > 0 ? (m > 0 ? `${h}h ${m}m` : `${h}h`) : `${m}m`;
        dailyGoalText.textContent = `Limit: ${limitStr}`;
      }
    }

    if (timeBarFill) {
      const pct = Math.min(100, Math.round((todaySec / limitSec) * 100));
      timeBarFill.style.width = pct + "%";
      if (limitMin > 0 && todaySec >= limitSec) {
        timeBarFill.style.background = "linear-gradient(90deg, #ef4444, #dc2626)";
        if (dailyGoalText) dailyGoalText.textContent = "Limit Reached! 🛑";
      } else if (pct >= 80) {
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

// Pomodoro UI Update
function updatePomodoroUI() {
  chrome.storage.local.get(["pomo_state", "pomo_mode", "pomo_remaining", "pomo_target_time"], (data) => {
    const mode = data.pomo_mode || "work";
    const state = data.pomo_state || "idle";

    // Mode appearance
    if (pomoCard) {
      if (mode === "break") {
        pomoCard.classList.add("pomo-break-mode");
        if (pomoIcon) pomoIcon.textContent = "☕";
        if (pomoModeLabel) pomoModeLabel.textContent = "Break Time (৫ মি:)";
        if (pomoSwitchModeBtn) pomoSwitchModeBtn.textContent = "🍅 Focus";
      } else {
        pomoCard.classList.remove("pomo-break-mode");
        if (pomoIcon) pomoIcon.textContent = "🍅";
        if (pomoModeLabel) pomoModeLabel.textContent = "Focus Session (২৫ মি:)";
        if (pomoSwitchModeBtn) pomoSwitchModeBtn.textContent = "☕ Break";
      }
    }

    // Timer countdown calculation
    let currentSeconds = data.pomo_remaining !== undefined ? data.pomo_remaining : (mode === "break" ? 300 : 1500);

    if (state === "running" && data.pomo_target_time) {
      currentSeconds = Math.max(0, Math.round((data.pomo_target_time - Date.now()) / 1000));
      if (pomoToggleBtn) {
        pomoToggleBtn.textContent = "⏸ Pause";
        pomoToggleBtn.classList.add("is-running");
      }
    } else {
      if (pomoToggleBtn) {
        pomoToggleBtn.textContent = "▶ Start";
        pomoToggleBtn.classList.remove("is-running");
      }
    }

    if (pomoTimeDisplay) pomoTimeDisplay.textContent = formatTimer(currentSeconds);
  });
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
  "breakInterval",
  "dailyLimit"
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
  if (selectDailyLimit) {
    cachedDailyLimit = data.dailyLimit !== undefined ? Number(data.dailyLimit) : 120;
    selectDailyLimit.value = String(cachedDailyLimit);
  }
  updateBadge();
  updateTimeDisplay();
});

// লাইভ স্ক্রিন টাইম ও পোমোডোরো শুরু করা
updatePomodoroUI();
setInterval(updatePomodoroUI, 1000);

// লাইভ স্ক্রিন টাইম আপডেট লিসেনার
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local") {
    if (changes.yt_today_seconds || changes.yt_session_seconds) {
      updateTimeDisplay();
    }
    if (changes.pomo_state || changes.pomo_mode || changes.pomo_remaining || changes.pomo_target_time) {
      updatePomodoroUI();
    }
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

if (selectDailyLimit) {
  selectDailyLimit.addEventListener("change", () => {
    const val = parseInt(selectDailyLimit.value, 10);
    cachedDailyLimit = isNaN(val) ? 120 : val;
    chrome.storage.sync.set({ dailyLimit: cachedDailyLimit }, () => {
      updateTimeDisplay();
    });
  });
}

// Pomodoro Actions
if (pomoToggleBtn) {
  pomoToggleBtn.addEventListener("click", () => {
    chrome.storage.local.get(["pomo_state", "pomo_mode", "pomo_remaining", "pomo_target_time"], (res) => {
      const state = res.pomo_state || "idle";
      const mode = res.pomo_mode || "work";

      if (state === "running") {
        // Pause timer
        const currentRem = Math.max(0, Math.round((res.pomo_target_time - Date.now()) / 1000));
        chrome.storage.local.set({
          pomo_state: "paused",
          pomo_remaining: currentRem,
          pomo_target_time: null
        }, updatePomodoroUI);
      } else {
        // Start or Resume timer
        const rem = res.pomo_remaining !== undefined && res.pomo_remaining > 0
          ? res.pomo_remaining
          : (mode === "break" ? 300 : 1500);
        const target = Date.now() + (rem * 1000);
        chrome.storage.local.set({
          pomo_state: "running",
          pomo_remaining: rem,
          pomo_target_time: target,
          pomo_mode: mode
        }, updatePomodoroUI);
      }
    });
  });
}

if (pomoResetBtn) {
  pomoResetBtn.addEventListener("click", () => {
    chrome.storage.local.get(["pomo_mode"], (res) => {
      const mode = res.pomo_mode || "work";
      const rem = mode === "break" ? 300 : 1500;
      chrome.storage.local.set({
        pomo_state: "idle",
        pomo_remaining: rem,
        pomo_target_time: null
      }, updatePomodoroUI);
    });
  });
}

if (pomoSwitchModeBtn) {
  pomoSwitchModeBtn.addEventListener("click", () => {
    chrome.storage.local.get(["pomo_mode"], (res) => {
      const nextMode = (res.pomo_mode || "work") === "work" ? "break" : "work";
      const rem = nextMode === "break" ? 300 : 1500;
      chrome.storage.local.set({
        pomo_mode: nextMode,
        pomo_state: "idle",
        pomo_remaining: rem,
        pomo_target_time: null
      }, updatePomodoroUI);
    });
  });
}
