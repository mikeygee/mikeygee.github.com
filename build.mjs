import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { existsSync, mkdirSync, copyFileSync, readdirSync, statSync, rmSync } from 'fs';
import { join } from 'path';

// Import the main component
import Site from './src/pages/index.js';

const PUBLIC_DIR = './public';
const ASSETS_DIR = './assets';
const ASSETS_DEST = join(PUBLIC_DIR, 'assets');

// Create public directory if it doesn't exist
if (!existsSync(PUBLIC_DIR)) {
  mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Recursively copy assets with proper handling
const copyAssets = () => {
  if (existsSync(ASSETS_DEST)) {
    rmSync(ASSETS_DEST, { recursive: true, force: true });
  }

  if (existsSync(ASSETS_DIR)) {
    mkdirSync(ASSETS_DEST, { recursive: true });
    const copyDir = (src, dest) => {
      const files = readdirSync(src);
      files.forEach(file => {
        const srcPath = join(src, file);
        const destPath = join(dest, file);
        const stat = statSync(srcPath);

        if (stat.isDirectory()) {
          mkdirSync(destPath, { recursive: true });
          copyDir(srcPath, destPath);
        } else if (stat.isFile()) {
          copyFileSync(srcPath, destPath);
          // Get relative path for logging
          const rel = destPath.replace(PUBLIC_DIR + '/', '');
          console.log(`  ✓ ${rel}`);
        }
      });
    };

    copyDir(ASSETS_DIR, ASSETS_DEST);
    console.log(`✓ Assets copied to ${ASSETS_DEST}`);
  }
};

// Extract CSS and render HTML
const buildHTML = async () => {
  const sheet = new ServerStyleSheet();

  try {
    // Render the React component to static markup
    const markup = renderToStaticMarkup(
      sheet.collectStyles(React.createElement(Site))
    );

    // Get the CSS from styled-components
    const styleTags = sheet.getStyleTags();

    // Build index.html from the shell template, inject styles and jsx
    let template = Bun.file('./src/template.html');
    let templateStr = await template.text();
    templateStr = templateStr.replace('{{styles}}', styleTags).replace('{{body}}', markup);

    // Write the HTML file
    await Bun.write(join(PUBLIC_DIR, 'index.html'), templateStr);
    // Write CNAME file for github pages to work with my domain
    await Bun.write(join(PUBLIC_DIR, 'CNAME'), 'mikeygee.com');
    console.log('✓ Generated public/index.html');

  } catch (error) {
    console.error('Error building HTML:', error);
    throw error;
  } finally {
    sheet.seal();
  }
};

// Main build process
const build = async () => {
  const startTime = Date.now();
  console.log('\n🔨 Building site...\n');

  console.log('📦 Copying assets...');
  copyAssets();

  console.log('\n🎨 Rendering HTML...');
  await buildHTML();

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\n✅ Build complete! (${duration}s)\n`);
};

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
