# 🌿 Sprout: An Evolving Digital Garden

Sprout is a modern, Git-powered digital garden built with **Astro** and **Tailwind CSS**.
 It treats thoughts as living documents, tracking their evolution over time through Git history.

Live at: [https://malcolmbastien.github.io/](https://malcolmbastien.github.io/)

## ✨ Key Features

- **🌱 Growth States:** Categorize your thoughts as **Seed**, **Sprout**, or **Tree** to reflect their maturity.
- **📜 Git Evolution Tracking:** Automatically extracts file history from Git to show a poetic timeline of how each post has grown.
- **🗺️ Content Map:** A virtual scrollbar on every post page that visualizes the structure (headers, callouts, paragraphs) and allows for quick navigation.
- **🍱 Bento Grid Homepage:** A dynamic, responsive layout that highlights more mature "Tree" posts.
- **🔍 Live Search & Filtering:** Instant client-side search and maturity-based filtering (Seeds/Sprouts/Trees).
- **📝 Semantic Callouts:** Rich support for GitHub-style alerts and custom garden callouts like `[!IDEA]`, `[!QUESTION]`, and `[!DRAFT]`.
- **🏗️ Drafting System:** Support for marking entire posts or specific blocks as in-progress with unique "under construction" styling.
- **🌓 Adaptive Themes:** Green-tinted light and dark modes with a persistent toggle.
- **📊 Activity Heatmap:** A GitHub-style contributions grid showing when you've been tending to your garden.

## 🚀 Getting Started

### Prerequisites
- Node.js (v20 or higher)
- Git

### Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/malcolmbastien/malcolmbastien.github.io.git
   cd malcolmbastien.github.io
   ```

### Local Development

1. **Install all required packages:**
   ```sh
   npm install
   ```
   *This command reads `package.json` and automatically installs Astro, Tailwind CSS, and all necessary plugins.*

2. **Start the development server:**
   ```sh
   npm run dev
   ```

3. **Open the garden:**
   Navigate to `http://localhost:4321` in your browser.

## ✍️ Creating New Posts

Posts are located in `src/content/posts/`. To create a new one, add a `.md` file:

```markdown
---
title: "My New Discovery"
status: "seed" # seed | sprout | tree
tags: ["learning", "webdev"]
summary: "A brief sentence describing this thought."
# publishedDate: 2026-01-08 (Optional - will fallback to Git creation date)
# draft: true (Optional - adds a WIP banner)
---

# My New Discovery

Your content here...

> [!IDEA]
> What if everything was a garden?
```

## 🛠️ Project Structure

- `src/content/`: Your blog posts and collection configuration.
- `src/components/`: Reusable UI elements (Heatmap, Content Map, Toggle, etc.).
- `src/layouts/`: Page wrappers (Main Layout and Post Layout).
- `src/lib/`: Backend utilities (Git history extraction and Remark plugins).
- `src/styles/`: Global Tailwind CSS and custom theme configurations.

## 🚢 Deployment

This project is configured for **GitHub Pages** via GitHub Actions. Any push to the `main` branch will automatically build and deploy the site.

---
*Happy gardening!* 🌿
