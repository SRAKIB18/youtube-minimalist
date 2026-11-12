# 🎯 YouTube Minimalist (Focus Mode)

[![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue?style=for-the-badge&logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-red?style=for-the-badge&logo=googlechrome&logoColor=white)](https://chrome.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/SRAKIB18/youtube-minimalist?style=for-the-badge)](https://github.com/SRAKIB18/youtube-minimalist/stargazers)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](https://github.com/SRAKIB18/youtube-minimalist/pulls)

> 🔗 **GitHub Repository:** [https://github.com/SRAKIB18/youtube-minimalist](https://github.com/SRAKIB18/youtube-minimalist)

A lightweight, distraction-free **Google Chrome Extension (Manifest V3)** that eliminates algorithmic rabbit holes on YouTube — replacing the chaotic home feed and infinite Shorts with a clean, Google-style centered search bar and daily motivational quotes.

---

## 🛑 Why YouTube Minimalist?

YouTube's homepage and endless Shorts feed are engineered to keep you hooked and scrolling for hours. **YouTube Minimalist** reclaims your attention:
- 🚫 **No Home Feed:** You won't get trapped by clickbait thumbnails or algorithmic video recommendations.
- 🚫 **No Shorts & Reels:** Shorts are hidden everywhere — navigation bar, search results, channel tabs, and watch pages.
- 🎬 **Watch Page Clean Mode (ওয়াচ পেজ ক্লিন মোড):**
  - **No Sidebar Clickbait:** Hides right-side recommended/related videos so you stay focused on what you're watching.
  - **No End-Screen Overlays:** Blocks annoying thumbnail cards blocking the final seconds of videos.
  - **Hidden Comments with Quick Toggle:** Comments are hidden by default; click the sleek inline button `"💬 কমেন্ট দেখুন"` anytime if you wish to read them.
  - **Auto-Disable Autoplay:** Prevents YouTube from automatically playing endless videos when one ends.
- 🔍 **Top Search Bar Preserved:** Only the top search bar is visible, keeping the interface minimal and distraction-free.
- 📖 **70+ Sahih Hadith Collection (বাংলায় ৭০+ সহীহ হাদিস):** Displays authentic, motivational Hadith on time management, hard work, patience, and intentional focus.
- ⏱️ **Auto-Rotating Hadith Timer (স্বয়ংক্রিয় পরিবর্তন):** Automatically rotates Hadiths every 5s, 10s, 15s, 30s, or 1m — customizable via popup with hover-pause protection!
- ⏳ **Time Manager & Daily Tracker (স্ক্রিন টাইম ট্র্যাকার):** Real-time daily YouTube watch time counter with progress bar and automatic midnight resets.
- 🔔 **Break Reminder Alert (বিরতি সতর্কবার্তা):** Configurable continuous-watch alerts (15m, 20m, 30m, 45m, 1h) with soft chime notifications to protect your eyes.
- ⌨️ **Quick Search Hotkey (`/`):** Press `/` on your keyboard anywhere on the page to focus the search bar immediately.
- ⚡ **Instant Live Toggle:** Need to check your subscriptions or feed? Turn it on or off in real-time from the extension popup with **zero page reloads**.

---

## 📥 Full Installation Guide (Step-by-Step)

Follow these simple steps to install and start using the extension on your Google Chrome browser:

### 1️⃣ Step 1: Clone the Repository
Open your computer terminal (**PowerShell**, **Command Prompt**, or **Git Bash**) and execute:

```bash
git clone https://github.com/SRAKIB18/youtube-minimalist.git
cd youtube-minimalist
```

> **Direct Link:** Visit [https://github.com/SRAKIB18/youtube-minimalist](https://github.com/SRAKIB18/youtube-minimalist), click the green **Code** button, select **Download ZIP**, and extract the contents to a folder on your computer.

---

### 2️⃣ Step 2: Open Chrome Extensions Page
1. Open **Google Chrome**.
2. Type or paste the following into the URL address bar at the top and hit **Enter**:
   ```text
   chrome://extensions/
   ```

---

### 3️⃣ Step 3: Enable Developer Mode
In the top-right corner of the Extensions page, switch the **Developer mode** toggle to **ON**.

---

### 4️⃣ Step 4: Load the Unpacked Extension
1. Click the **Load unpacked** button located in the top-left toolbar.
2. In the folder browser dialog, navigate to and select the folder you cloned:
   ```text
   youtube-minimalist
   ```
3. Click **Select Folder**.

---

### 5️⃣ Step 5: Pin the Extension (Recommended)
1. Click the **Extensions (puzzle piece 🧩)** icon in your Chrome toolbar.
2. Find **YouTube Minimalist (Focus Mode)**.
3. Click the **Pin (📌)** icon next to it so you can quickly access the settings popup anytime.

---

### 6️⃣ Step 6: Open YouTube & Enjoy
1. Visit **[https://www.youtube.com](https://www.youtube.com)**.
2. You will be greeted with the clean Google-style search bar and daily motivational quote!
3. Press **`/`** on your keyboard to instantly start searching.

---

## 🎮 How to Use

### 🎛️ Extension Popup Controls
Click the extension icon in your Chrome toolbar to open the control panel:
- **Hide Home Feed:** Toggle to show/hide the homepage video recommendations and category filter chips.
- **Hide Shorts & Reels:** Toggle to show/hide Shorts buttons, reels shelves, and channel Shorts tabs.
- **Hide Related Videos:** Toggle sidebar suggested videos and end-screen video overlay cards on watch pages.
- **Hide Comments:** Toggle the comments section under videos (also toggleable inline on the video page).
- **Disable Autoplay:** Prevents YouTube from automatically advancing to the next video when the current video ends.
- **Daily Hadith:** Toggle to show or hide the daily inspiring Hadith card on the homepage.
- **Auto-Rotate Interval:** Choose Hadith rotation frequency (5s, 10s, 15s, 30s, 1m, or Off).
- **Break Alert Interval:** Set healthy eye-rest break reminders (15m, 20m, 30m, 45m, 1h, or Off).
- **Instant Response:** All changes apply **instantly in real time** without refreshing the page!

### ⌨️ Keyboard Shortcuts
- Press **`/`** anywhere on YouTube to instantly focus and type in the search bar.
- Press **`Escape`** to dismiss and blur the search bar.

### 🔄 Smart Shorts-to-Video Redirection
If someone sends you a YouTube Shorts link (e.g. `https://www.youtube.com/shorts/<video_id>`), the extension automatically converts and opens it in YouTube's clean, standard video player (`https://www.youtube.com/watch?v=<video_id>`), protecting you from getting stuck in the infinite vertical scroll loop!

---

## 🔄 How to Update the Extension

When new improvements are pushed to this repository, update your local copy easily:

```bash
cd youtube-minimalist
git pull
```

Then:
1. Go back to `chrome://extensions/`.
2. Find **YouTube Minimalist (Focus Mode)**.
3. Click the **Reload (🔄)** icon on the card to apply the updates.

---

## 🗂️ Project Structure

```text
youtube-minimalist/
├── manifest.json   # Chrome Extension configuration & permissions (Manifest V3)
├── styles.css      # Scoped CSS injection for zero-flicker element hiding & Google-style UI
├── content.js      # Centered search bar, quote generator, hotkeys & SPA router
├── popup.html      # Minimalist toggle control UI
├── popup.css       # Clean modern popup design
├── popup.js        # Chrome storage sync logic
├── icon.png        # Minimalist extension icon (128x128 PNG)
├── LICENSE         # Open-source MIT License
└── README.md       # Complete documentation and setup guide
```

---

## ⚙️ Technical Highlights

- **Zero Flicker:** CSS is injected at `document_start` and scoped to `html[data-hide-feed="true"]` and `html[data-hide-shorts="true"]`.
- **SPA Resilient:** Automatically handles YouTube's Polymer Single Page Application transitions using `yt-navigate-finish` and `popstate`.
- **Natural Search Focus:** Search box does not steal focus automatically; focuses smoothly upon clicking or pressing the `/` hotkey.
- **Dark & Light Mode Adaptive:** Full support for YouTube's native light and dark palettes using CSS custom properties.
- **Privacy-First:** Operates 100% locally on your machine. No telemetry, no third-party APIs, and zero user tracking.

---

## 🛠️ Tech Stack

- **Platform:** Google Chrome Extensions (Manifest V3)
- **Languages:** JavaScript (ES6+), CSS3, HTML5
- **APIs:** `chrome.storage.sync`, `chrome.tabs`

---

## 🤝 Contributing

Contributions, feature ideas, and suggestions are always welcome!

- **Repository:** [https://github.com/SRAKIB18/youtube-minimalist](https://github.com/SRAKIB18/youtube-minimalist)
- **Fork Project:** [https://github.com/SRAKIB18/youtube-minimalist/fork](https://github.com/SRAKIB18/youtube-minimalist/fork)
- **Report Issues:** [https://github.com/SRAKIB18/youtube-minimalist/issues](https://github.com/SRAKIB18/youtube-minimalist/issues)
- **Pull Requests:** [https://github.com/SRAKIB18/youtube-minimalist/pulls](https://github.com/SRAKIB18/youtube-minimalist/pulls)

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.
