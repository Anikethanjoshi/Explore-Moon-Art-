# 🌙 Explore Moon Art - Immersive Ambient Audio Slider

A sleek, modern, and highly interactive landing page. Instead of a traditional sliding carousel, this project uses the visual weight of full-screen imagery and atmospheric audio to create an immersive experience.

![Project Preview](preview.gif)
[Screencast from 2026-03-30 19-14-56.webm](https://github.com/user-attachments/assets/68e200a2-a4d2-4bc6-b8cc-35a881380815)



![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🚀 How it Works (The Logic)

I wanted to build something that stands out from regular image sliders:
1. **Interactive Thumbnails:** The small UI cards on the right act as a clickable deck. 
2. **Full-Screen Projection:** Clicking a card or a dot grabs its specific background image and smoothly projects it across the *entire* screen.
3. **Smart Overlay:** I used a CSS `::before` pseudo-element to place a dark tint on the background. This ensures that the white header text is always readable, no matter how bright the background art is!

---

## 🛠️ Key Features

* ⚡ **Two-Way Sync:** Clicking a card activates its matching dot, and clicking a dot opens that specific card!
* 🎵 **Ambient Audio Engine:** Features an optional space-themed background track. It respects modern browser policies by requiring a user click to play.
* 🎭 **Glassmorphism UI:** The music button and control cards use a frosted-glass blur effect.

---

## 💻 How to Run This Project

1. Clone this repository to your local computer:
   ```bash
   git clone [https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git](https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git)
