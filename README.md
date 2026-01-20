# Ryuzen Website 🌙

A personal portfolio website built to showcase who I am, what I build, and what I’m currently learning.

This project is designed to be **simple, fast, and maintainable**, while still looking modern and professional.

---

## 🔗 Live Demo

- GitHub Pages: https://ryuzenink-cell.github.io/ryuzen-website/
- GitHub Profile: https://github.com/ryuzenink-cell

---

## ✨ Features

### ✅ Current
- **Home page** with introduction, skills, and live stats section
- **Projects page** with dynamic project cards (rendered via JavaScript)
- **Links Hub** (Linktree-style page)
- Clean UI with a consistent dark theme and reusable components
- Responsive layout (works on desktop and mobile)

### 🛠 Planned
- **Live projects data** powered by a `.NET Minimal API`
- **Visitor counter** (lightweight) with database persistence
- Basic SEO improvements:
  - meta description
  - Open Graph preview image
  - favicon

---

## 🧱 Tech Stack

### Frontend
- HTML5
- CSS3 (design tokens + reusable components)
- JavaScript (Vanilla)

### Hosting
- GitHub Pages (frontend)

### Backend (planned)
- C# / .NET Minimal API
- SQLite or PostgreSQL (depending on deployment)
- Hosted separately (Render/Railway/Fly.io)

---

## 📁 Project Structure

```txt
ryuzen-website/
├─ index.html
├─ projects.html
├─ links.html
├─ README.md
└─ assets/
   ├─ css/
   │  ├─ tokens.css        # Design tokens (colors, radius, shadows)
   │  ├─ base.css          # Base styles, layout, global rules
   │  └─ components.css    # Buttons, cards, tags, nav, etc.
   ├─ js/
   │  ├─ main.js           # Shared logic (year, global behavior)
   │  ├─ projects.js       # Projects page rendering
   │  └─ links.js          # Links hub rendering
   ├─ data/
   │  ├─ projects.json     # Projects data (mock / local)
   │  └─ links.json        # Links data (hub)
   └─ img/
      └─ logo.png          # Branding / profile image

