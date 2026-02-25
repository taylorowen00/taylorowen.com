# Taylor Owen Personal Website

## Project Overview

Personal academic website for Taylor Owen, built with Next.js 15 (App Router) and statically exported for GitHub Pages hosting. The site showcases writing, podcasts, video, blog posts, and contact information.

## Tech Stack

- **Framework:** Next.js 15 with App Router (`output: 'export'` for static site generation)
- **Language:** TypeScript (strict mode, `@/*` path alias maps to `./src/*`)
- **Styling:** Inline styles + CSS custom properties in `globals.css` (gold theme). Tailwind CSS v4 is installed but used minimally.
- **Blog:** Markdown files with YAML frontmatter, parsed by `gray-matter` and rendered with `remark` + `remark-html`
- **React:** v19

## Project Structure

```
src/
  app/
    page.tsx          # Homepage (hero + latest blog posts)
    layout.tsx        # Root layout (Header + main)
    globals.css       # All CSS: variables, base styles, mobile responsive
    about/page.tsx
    blog/page.tsx     # Blog listing
    blog/[slug]/page.tsx  # Dynamic blog post pages
    contact/page.tsx
    podcast/page.tsx
    podcasts/page.tsx
    video/page.tsx
    writing/page.tsx  # Academic writing with filter chip categories
  components/
    Header.tsx        # Sticky header with nav, social icons, mobile hamburger menu
    Footer.tsx
    Accordion.tsx
  lib/
    blog.ts           # Blog utilities: getAllPosts(), getPostBySlug(), markdownToHtml()
content/
  blog/               # Markdown blog posts (YAML frontmatter: title, date, excerpt)
public/
  images/
```

## Key Commands

- `npm run dev` — Start dev server (port 3000)
- `npm run build` — Static export build
- `npm start` — Start production server
- `npm run lint` — Run Next.js linting

## Architecture Notes

- **Static Export:** `next.config.ts` sets `output: 'export'` and `images.unoptimized: true` for GitHub Pages compatibility.
- **Inline Styles + CSS Classes:** Most styling is inline. CSS classes are added to elements that need mobile responsive overrides (since media queries can't override inline styles). These classes use `!important` in `@media (max-width: 768px)` rules in `globals.css`.
- **Theme:** Gold theme with CSS custom properties (`--color-accent: #b08d57`, `--color-text: #1a1a1a`, etc.) defined in `:root`.
- **Fonts:** Headings use `Times New Roman` / Georgia serif stack. Body uses system sans-serif.
- **Header:** Sticky, with underline hover animation on nav links. Mobile breakpoint at 768px hides desktop nav/social icons and shows a hamburger menu with full-screen overlay.
- **Writing Page:** Uses `useState` to toggle between category sections (Books, Essays, Opinion, Journal Articles, Reports, Book Chapters) via filter chip buttons.
- **Blog Posts:** Stored as `.md` files in `content/blog/`. Frontmatter requires `title`, `date`, and `excerpt` fields. Posts are sorted by date descending.

## Mobile Responsive Classes

These CSS classes exist solely for mobile media query overrides:
- `.hero-section`, `.post-row`, `.post-date` — Homepage
- `.about-grid`, `.about-photo` — About page
- `.podcast-grid` — Podcasts page
- `.video-grid` — Video page
- `.blog-date-col`, `.blog-divider`, `.blog-content-col`, `.blog-date-mobile` — Blog page
- `.contact-name-grid` — Contact page
- `.footer-inner` — Footer
- `.desktop-nav`, `.desktop-social`, `.hamburger` — Header

## Adding a Blog Post

Create a new `.md` file in `content/blog/` with this format:

```markdown
---
title: "Post Title Here"
date: YYYY-MM-DD
excerpt: "A brief summary of the post."
---

Post body content in Markdown...
```

The post will automatically appear on the homepage (if among the 5 most recent) and on the blog listing page.
