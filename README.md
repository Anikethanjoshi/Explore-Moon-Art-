# 🌙 Explore Moon Art - Dynamic Full-Screen Carousel

A sleek, modern, and immersive landing page experience featuring full-screen background image transitions driven by user interaction. This project ditches the traditional, boring slide-by-slide carousel in favor of an interactive "focal point" layout.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🚀 The Core Concept & Visual Logic

Instead of just sliding static cards horizontally, this project uses the visual weight of full-screen imagery to tell a story:
1. **The Hero UI** (Text and Call-to-Action) stays pinned and accessible in the foreground.
2. **The Dynamic Slider** at the right acts as an interactive deck of thumbnails.
3. When a user clicks a card or a dot, the script captures the selected image and instantly projects it across the **entire viewport background**.

### 🧠 How the Code Solves the "Overlay Problem"

A common issue with full-screen background sliders is that bright images can make white text impossible to read. To combat this and make the project production-ready:
* **The `::before` Pseudo-Element Trick:** I used CSS to put an absolute, 50% opacity dark overlay purely on the background wrapper. This guarantees high contrast for the text while keeping the beautiful background art visible.
* **The CSS Variable Link:** Instead of hardcoding image paths into JavaScript, I used inline CSS variables (`--img: url(...)`) directly in the HTML cards. This makes the project highly modular—to change an image, you only have to edit the HTML, not the script!

---

## 🛠️ Features

* ⚡ **Two-Way Synchronization:** Clicking a card activates its dot, and clicking a dot activates its corresponding card.
* 🎭 **Pure CSS Transitions:** Soft cubic-bezier easing gives the thumbnail cards and full-screen background fade a high-end, cinematic feel.
* 📱 **Fixed Content Layout:** Prevents the main heading from shifting around when users are interacting with the controls.

---

## 💻 How to Run This Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git](https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git)
