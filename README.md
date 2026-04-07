# 🌌 Cosmic Explorer

An interactive, space-themed web application built with **Astro** and **React**.  
Explore planets, discover random space facts, view NASA’s Image of the Day, and calculate your weight on different planets.

---

## Project Overview

Cosmic Explorer is designed to make learning about space engaging and interactive.  
The app features:

- **Planets Page** – View cards for planets with interesting facts and images.  
- **Fact Generator** – Click a button to reveal random space facts.  
- **NASA Image of the Day** – Fetches the latest image and description using NASA’s APOD API.  
- **Planet Weight Calculator** – Enter your Earth weight and see your weight on any planet in our solar system.  

This combination of static pages and interactive widgets creates a fun, educational experience for users.

---

## Tech Stack

- **Astro** – Framework for building fast, content-focused websites.  
- **React** – Used for interactive components.  
- **CSS** – Custom styling for cosmic-themed UI.  
- **NASA APOD API** – Fetching the daily image of space.  

---

## Setup Instructions

1. **Clone the repository**  
```bash
git clone https://github.com/YOUR_USERNAME/cosmic-explorer.git
cd cosmic-explorer

2. **Install dependencies**  
```bash
npm install

3. **Run the development server**  
```bash
npm run dev

4. **Open your browser at http://localhost:4321
 to view the app.**  

5. **Build for production**  
```bash
npm run build
npm run preview

---

## Project Structure

/
├── public/               # Static assets like images
├── src/
│   ├── components/       # React/Astro components
│   └── pages/            # Astro pages
├── package.json
├── astro.config.mjs
└── tsconfig.json

---

## Pages Overview

| Page/Component            | Description                                                                               |
| :------------------------ | :---------------------------------------------------------------------------------------- |
| /index                    | Home page introducing the Cosmic Explorer app                                             |
| /planets                  | Displays cards for different planets                                                      |
| /mars                     | A detailed page about Mars with photos, facts and a video.                                |
| /factgenerator            | Interactive widget that shows a random space fact each time the user clicks a button.     |
| /weightcalculator         | Client-side calculator that converts Earth weight to weight on selected planets.          |
| /nasaimage                | Displays NASA’s Astronomy Picture of the Day using API integration.                       |

## Screenshots

**Home Page**

<img width="1879" height="810" alt="home-title" src="https://github.com/user-attachments/assets/9dd87bfe-dbb1-4904-898a-281f9cd14147" />
<img width="1881" height="721" alt="image" src="https://github.com/user-attachments/assets/a10cfae6-4929-437f-9490-18c28c97cbf7" />

**Planets**

<img width="1839" height="820" alt="image" src="https://github.com/user-attachments/assets/61e1a07d-bf05-4701-933c-90d3ce4da55d" />
<img width="1666" height="794" alt="image" src="https://github.com/user-attachments/assets/99314351-f3b8-4e68-ad0c-8b57f423f349" />

**Mars**



**Fact Generator**

**Weight Calculator**

**Nasa Image of the Day**



