# 🎯 YouTube Minimalist (Focus Mode)

[![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue?style=for-the-badge&logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-red?style=for-the-badge&logo=googlechrome&logoColor=white)](https://chrome.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/SRAKIB18/youtube-minimalist?style=for-the-badge)](https://github.com/SRAKIB18/youtube-minimalist/stargazers)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](https://github.com/SRAKIB18/youtube-minimalist/pulls)

> 🔗 **GitHub Repository:** [https://github.com/SRAKIB18/youtube-minimalist](https://github.com/SRAKIB18/youtube-minimalist)

A lightweight, distraction-free **Google Chrome Extension (Manifest V3)** that eliminates algorithmic rabbit holes on YouTube — hiding the homepage newsfeed, shorts, and reels, leaving behind only a clean, functional search bar.

---

## 🛑 Why YouTube Minimalist?

YouTube's homepage and endless Shorts feed are engineered to keep you hooked and scrolling for hours. **YouTube Minimalist** reclaims your attention:
- 🚫 **No Home Feed:** You won't get trapped by clickbait thumbnails or algorithmic video recommendations.
- 🚫 **No Shorts & Reels:** Shorts are hidden everywhere — navigation bar, search results, channel tabs, and watch pages.
- 🔍 **Intentional Searching:** The search bar remains fully active so you can search and watch only what you genuinely came for.
- ⚡ **Instant Toggle:** Need to check your subscriptions or feed? Turn it on or off in real-time from the extension popup with **zero page reloads**.

---

## 📸 Preview
![Preview](image.png)

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
2. The homepage feed, thumbnails, and Shorts buttons will disappear automatically!
3. Type anything into the search bar to search and watch videos intentionally.

---

## 🎮 How to Use

### 🎛️ Extension Popup Controls
Click the extension icon in your Chrome toolbar to open the control panel:
- **Hide Home Feed:** Toggle to show/hide the homepage video recommendations and category filter chips.
- **Hide Shorts & Reels:** Toggle to show/hide Shorts buttons, reels shelves, and channel Shorts tabs.
- **Instant Response:** Changes apply **instantly in real time** — no page refresh required!

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


## ⚙️ Technical Highlights

- **Zero Flicker:** CSS is injected at `document_start` and scoped to `html[data-hide-feed="true"]` and `html[data-hide-shorts="true"]`.
- **SPA Resilient:** Automatically handles YouTube's Polymer Single Page Application transitions using `yt-navigate-finish` and `popstate`.
- **Natural Search Focus:** Search box only focuses when clicked by you, preventing annoying auto-focus traps.
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
