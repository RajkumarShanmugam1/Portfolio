# Rajkumar S Portfolio (Redesigned)

A modern, high-performance developer portfolio built with **React 18**, **Vite**, and **Framer Motion**.

## 🚀 Improvements & Features
- **Modern UI/UX**: Dark mode glassmorphism design system.
- **Tech Upgrade**: Migrated from CRA to **Vite** (~10x faster dev server).
- **Animations**: Fluid page transitions and staggered entrance animations using **Framer Motion**.
- **Content Port**: Fully synchronized with the latest content from the `HTML_CSS_JS` branch, including:
  - **Achievements**: 27 Hall of Fame and Acknowledgement entries with filtering.
  - **Blog**: 3 latest Medium posts.
  - **Resume**: Education, Experience, and Hobbies sections.
- **Functional Contact Form**: Integrated with **EmailJS** (requires API keys in `Contact.js`).
- **Responsive**: Fully tuned for Mobile, Tablet, and Desktop.

## 🛠️ Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Modern Design System)
- **Icons**: React Icons
- **Animation**: Framer Motion
- **Background**: @tsparticles/react (Stars animation)

## 🏃 Running Locally

1. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Run dev server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Configuration
- **Contact Form**: Update `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` in `src/component/MainBar/Contact.js` to enable the functional email form.
- **Particles**: Background settings can be adjusted in `src/component/Particlebf/index.jsx`.
