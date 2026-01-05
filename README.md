# Strategy & Stack Website

A high-converting, dark-themed landing page for Strategy & Stack - a boutique growth & RevOps consulting collective. Built with Astro + React, optimized for Cloudflare Workers deployment.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

```bash
npm run build
```

### Preview (Cloudflare Workers locally)

```bash
npm run preview
```

## 📦 Deployment to Cloudflare

### Option 1: Cloudflare Pages (Recommended)

1. Push this repo to GitHub/GitLab
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
3. Click "Create a project" → Connect to Git
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 18 (or higher)
6. Click "Save and Deploy"

### Option 2: Direct Deploy via Wrangler

```bash
npm run deploy
```

This will build and deploy to Cloudflare Pages.

## ⚙️ Configuration

### Booking URL

Update the booking URL in `src/pages/index.astro`:

```javascript
const BOOKING_URL = "https://calendly.com/your-actual-link";
```

### Customization

- **Colors & Fonts:** Edit CSS variables in `src/layouts/Layout.astro`
- **Content:** Edit copy directly in component files under `src/components/`
- **Metrics:** Update numbers in `HeroSection.tsx` and `CaseStudiesSection.tsx`

## 🎨 Design System

### Colors
- **Primary Background:** `#0a0a0b` (near black)
- **Secondary Background:** `#111113`
- **Accent (Gold):** `#d4a853`
- **Text Primary:** `#fafafa`

### Fonts
- **Display:** Instrument Serif (elegant headings)
- **Body:** Syne (modern, geometric body text)

## 📁 Project Structure

```
├── src/
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── MechanismSection.tsx
│   │   ├── OffersSection.tsx
│   │   ├── CaseStudiesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FinalCTASection.tsx
│   │   └── Footer.tsx
│   ├── layouts/
│   │   └── Layout.astro  # Global styles & HTML structure
│   └── pages/
│       └── index.astro   # Main page composition
├── public/               # Static assets
├── astro.config.mjs      # Astro configuration
├── wrangler.toml         # Cloudflare Workers config
└── package.json
```

## 🔧 Tech Stack

- **Framework:** [Astro](https://astro.build) with React islands
- **Styling:** CSS Modules with CSS custom properties
- **Fonts:** Google Fonts (Instrument Serif, Syne)
- **Deployment:** Cloudflare Workers/Pages
- **Icons:** Inline SVGs (Heroicons style)

## 📝 License

Private - Strategy & Stack


