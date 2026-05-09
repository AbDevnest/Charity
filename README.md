# CharityCare — React + Vite + Tailwind

Pixel-perfect React conversion of the original Bootstrap charity landing page.

## Quick Start

Open your terminal, `cd` into the `charity-react` folder, then run:

```bash
# Step 1 — copy images & install deps (one-time)
bash setup.sh

# Step 2 — start dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.

## Manual setup (if you prefer)

```bash
# Copy images
mkdir -p public/assets
cp -r ../assets/images public/assets/

# Install
npm install

# Dev server
npm run dev
```

## Project structure

```
charity-react/
├── public/
│   └── assets/images/      ← copied from parent project
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx     ← Swiper carousel
│   │   ├── Donation.jsx
│   │   ├── Events.jsx
│   │   ├── Team.jsx
│   │   ├── Testimonials.jsx ← custom slider
│   │   ├── FAQ.jsx          ← accordion
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css            ← all custom styles + Tailwind directives
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```
# Charity
