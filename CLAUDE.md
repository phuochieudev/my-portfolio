# Senior Developer Portfolio Guidelines (2026 Edition)

## Project Overview
A high-performance, modern, accessible single-page portfolio application built to senior software engineer standards.
- **Design System:** Bento Grid Layout, Dark Mode native, Minimalist Developer Aesthetics.
- **Performance Goals:** 100 Lighthouse score (Performance, Accessibility, SEO, Best Practices).

## Tech Stack & Tooling
- **Framework:** React + Vite
- **Styling:** Tailwind CSS + Framer Motion (for buttery smooth animations)
- **Icons:** Lucide React (`lucide-react`)
- **Language:** TypeScript (Strict mode enabled)
- **Content Engine:** Centralized typed data standard (`src/data/portfolioData.ts`)

## Architecture & Code Standards
1. **Bento Grid Structure:** Use modern grid CSS (`grid-cols-1 md:grid-cols-3/4`) for main layout sections.
2. **Type Safety:** Define exact TypeScript interfaces for Projects, Work History, Skills, and Social Links.
3. **Data-Driven UI:** UI components MUST NOT hardcode any bio/project text. All content comes from `portfolioData.ts`.
4. **Interactive Polish:**
   - Add subtle hover effects, active states, and entrance animations using `framer-motion`.
   - External links MUST include `target="_blank" rel="noopener noreferrer"`.
   - Project cards MUST feature clean GitHub repository tags, direct live links, and dynamic tech-stack badges.

## Code Structure Reference