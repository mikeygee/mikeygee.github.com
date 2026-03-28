This is the source for my personal web site <https://mikeygee.com>.

## Overview

A minimal static site using React and styled-components.

## Technology Stack

- **React** - Component-based templating
- **styled-components** - CSS-in-JS styling
- **react-icons** - Icon library
- **Bun** - JavaScript runtime and package manager
- **React DOM Server** - Server-side rendering to static HTML

## Building

### Install dependencies

```bash
bun install
```

### Build the static site

```bash
bun run build
```

This generates `public/index.html` with all styles inlined and assets copied to `public/assets/`.


## Project Structure

```
src/
  components/      - React components (Nav, Footer, About, Work)
  pages/           - Main page component (index.js)
  styles.js        - Global styles and design tokens
  utils.js         - Utility functions (markdown link parsing)
assets/            - static images and documents

build.mjs          - Custom build script
```

## How It Works

The `build.mjs` script:

1. Uses React's `renderToStaticMarkup()` to render components to HTML
2. Extracts CSS from styled-components using `ServerStyleSheet`
3. Copies static images to `public/images/`
4. Injects a minimal client-side script for smooth scrolling navigation
5. Generates a single `public/index.html` file

## Features

- 📦 Single HTML file output
- 🎨 Styled-components for component-scoped styling
- 📱 Responsive design with mobile breakpoints
- 📊 Self-hosted, no external dependencies at runtime

## Deployment

The `public/` directory is ready to deploy. The site is currently deployed to GitHub Pages at <https://mikeygee.com>.

To deploy:

```bash
bun run build
# Push the public/ directory to your hosting
# For github pages, use gh-pages module
bun run ghPages
```
