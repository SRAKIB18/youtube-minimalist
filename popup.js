const toggleFeed = document.getElementById("toggleFeed");
const toggleShorts = document.getElementById("toggleShorts");
const toggleRelated = document.getElementById("toggleRelated");
const toggleComments = document.getElementById("toggleComments");
const toggleNextBtn = document.getElementById("toggleNextBtn");
const toggleQuotes = document.getElementById("toggleQuotes");
const selectInterval = document.getElementById("selectInterval");
const selectBreakInterval = document.getElementById("selectBreakInterval");
const selectDailyLimit = document.getElementById("selectDailyLimit");
const selectTheme = document.getElementById("selectTheme");
const themeSegButtons = document.querySelectorAll(".theme-seg-btn");
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
const selectPomoWork = document.getElementById("selectPomoWork");
const selectPomoBreak = document.getElementById("selectPomoBreak");

let cachedDailyLimit = 120; // Default 2 hours
let cachedPomoWork = 25;    // Default 25 mins
let cachedPomoBreak = 5;     // Default 5 mins

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

function applyTheme(theme) {
  const effectiveTheme = theme || "system";
  document.documentElement.setAttribute("data-theme", effectiveTheme);

  if (selectTheme) {
    selectTheme.value = effectiveTheme;
  }

  themeSegButtons.forEach((btn) => {
    if (btn.getAttribute("data-theme") === effectiveTheme) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

const ICONS = {
  focus: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  break: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
  play: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
  pause: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`,
  warning: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-left:4px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
};

function getLocalDateString() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function updateTimeDisplay() {
  chrome.storage.local.get(["yt_today_seconds", "yt_session_seconds", "yt_today_date"], (res) => {
    const todayStr = getLocalDateString();
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
        if (dailyGoalText) dailyGoalText.innerHTML = `Limit Reached! ${ICONS.warning}`;
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
        if (pomoIcon) pomoIcon.innerHTML = ICONS.break;
        if (pomoModeLabel) pomoModeLabel.textContent = `Break Time (${cachedPomoBreak} মি:)`;
        if (pomoSwitchModeBtn) pomoSwitchModeBtn.innerHTML = `${ICONS.focus}<span>Focus</span>`;
      } else {
        pomoCard.classList.remove("pomo-break-mode");
        if (pomoIcon) pomoIcon.innerHTML = ICONS.focus;
        if (pomoModeLabel) pomoModeLabel.textContent = `Focus Session (${cachedPomoWork} মি:)`;
        if (pomoSwitchModeBtn) pomoSwitchModeBtn.innerHTML = `${ICONS.break}<span>Break</span>`;
      }
    }

    // Timer countdown calculation
    const defaultSec = mode === "break" ? (cachedPomoBreak * 60) : (cachedPomoWork * 60);
    let currentSeconds = data.pomo_remaining !== undefined ? data.pomo_remaining : defaultSec;

    if (state === "running" && data.pomo_target_time) {
      currentSeconds = Math.max(0, Math.round((data.pomo_target_time - Date.now()) / 1000));
      if (pomoToggleBtn) {
        pomoToggleBtn.innerHTML = `${ICONS.pause}<span>Pause</span>`;
        pomoToggleBtn.classList.add("is-running");
      }
    } else {
      if (pomoToggleBtn) {
        pomoToggleBtn.innerHTML = `${ICONS.play}<span>Start</span>`;
        pomoToggleBtn.classList.remove("is-running");
      }
    }

    if (pomoTimeDisplay) pomoTimeDisplay.textContent = formatTimer(currentSeconds);
  });
}

// সংরক্ষিত সেটিংস লোড করা
chrome.storage.sync.get([
  "theme",
  "hideFeed",
  "hideShorts",
  "hideRelated",
  "hideComments",
  "hideNextBtn",
  "showQuotes",
  "autoInterval",
  "breakInterval",
  "dailyLimit",
  "pomo_work_duration",
  "pomo_break_duration"
], (data) => {
  applyTheme(data.theme || "system");
  if (toggleFeed) toggleFeed.checked = data.hideFeed !== false;
  if (toggleShorts) toggleShorts.checked = data.hideShorts !== false;
  if (toggleRelated) toggleRelated.checked = data.hideRelated !== false;
  if (toggleComments) toggleComments.checked = data.hideComments !== false;
  if (toggleNextBtn) toggleNextBtn.checked = data.hideNextBtn !== false;
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
  if (selectPomoWork) {
    cachedPomoWork = data.pomo_work_duration !== undefined ? Number(data.pomo_work_duration) : 25;
    selectPomoWork.value = String(cachedPomoWork);
  }
  if (selectPomoBreak) {
    cachedPomoBreak = data.pomo_break_duration !== undefined ? Number(data.pomo_break_duration) : 5;
    selectPomoBreak.value = String(cachedPomoBreak);
  }
  updateBadge();
  updateTimeDisplay();
  updatePomodoroUI();
});

// লাইভ স্ক্রিন টাইম ও পোমোডোরো শুরু করা
setInterval(updatePomodoroUI, 1000);

// লাইভ স্ক্রিন টাইম ও সেটিংস আপডেট লিসেনার
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && changes.theme) {
    applyTheme(changes.theme.newValue);
  }
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

if (toggleNextBtn) {
  toggleNextBtn.addEventListener("change", () => {
    chrome.storage.sync.set({ hideNextBtn: toggleNextBtn.checked });
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

// Custom Pomodoro Durations
if (selectPomoWork) {
  selectPomoWork.addEventListener("change", () => {
    const val = parseInt(selectPomoWork.value, 10);
    cachedPomoWork = isNaN(val) ? 25 : val;
    chrome.storage.sync.set({ pomo_work_duration: cachedPomoWork });

    chrome.storage.local.get(["pomo_state", "pomo_mode"], (res) => {
      if ((res.pomo_state || "idle") !== "running" && (res.pomo_mode || "work") === "work") {
        chrome.storage.local.set({
          pomo_remaining: cachedPomoWork * 60,
          pomo_target_time: null
        }, updatePomodoroUI);
      } else {
        updatePomodoroUI();
      }
    });
  });
}

if (selectPomoBreak) {
  selectPomoBreak.addEventListener("change", () => {
    const val = parseInt(selectPomoBreak.value, 10);
    cachedPomoBreak = isNaN(val) ? 5 : val;
    chrome.storage.sync.set({ pomo_break_duration: cachedPomoBreak });

    chrome.storage.local.get(["pomo_state", "pomo_mode"], (res) => {
      if ((res.pomo_state || "idle") !== "running" && res.pomo_mode === "break") {
        chrome.storage.local.set({
          pomo_remaining: cachedPomoBreak * 60,
          pomo_target_time: null
        }, updatePomodoroUI);
      } else {
        updatePomodoroUI();
      }
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
        const defaultSec = mode === "break" ? (cachedPomoBreak * 60) : (cachedPomoWork * 60);
        const rem = res.pomo_remaining !== undefined && res.pomo_remaining > 0
          ? res.pomo_remaining
          : defaultSec;
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
      const rem = mode === "break" ? (cachedPomoBreak * 60) : (cachedPomoWork * 60);
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
      const rem = nextMode === "break" ? (cachedPomoBreak * 60) : (cachedPomoWork * 60);
      chrome.storage.local.set({
        pomo_mode: nextMode,
        pomo_state: "idle",
        pomo_remaining: rem,
        pomo_target_time: null
      }, updatePomodoroUI);
    });
  });
}

// Appearance Theme Controls
if (selectTheme) {
  selectTheme.addEventListener("change", () => {
    const val = selectTheme.value;
    applyTheme(val);
    chrome.storage.sync.set({ theme: val });
  });
}

themeSegButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.getAttribute("data-theme");
    applyTheme(val);
    chrome.storage.sync.set({ theme: val });
  });
});

