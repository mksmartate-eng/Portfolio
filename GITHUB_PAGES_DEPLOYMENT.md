# GitHub Pages Deployment Guide

## Initial Page for GitHub Pages

The **`out/`** folder contains your built static site ready for GitHub Pages deployment.

### Key Files in `out/`:
- **`out/index.html`** - This is your initial/main page (homepage)
- `out/404.html` - Custom 404 error page
- `out/_next/` - Static assets (JS, CSS, images)
- `out/cv/` - CV download section
- `out/images/` - Image assets
- `out/models/` - 3D model files

---

## Deployment Options

### Option 1: Using `gh-pages` Package (Recommended)

```bash
# Install gh-pages as a dev dependency
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "next build && gh-pages -d out"
# "predeploy": "npm run build"

# Deploy to GitHub Pages
npm run deploy
```

### Option 2: Manual Deployment

```bash
# Build the project
npm run build

# The static files are now in the 'out' folder
# Push the 'out' folder contents to the 'gh-pages' branch

git subtree push --prefix out origin gh-pages
```

### Option 3: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
  
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## GitHub Pages Settings

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select:
   - **Deploy from a branch** → Select `gh-pages` branch and `/ (root)` folder
   - OR **GitHub Actions** (if using Option 3)
3. Save settings
4. Your site will be live at: `https://yourusername.github.io/repository-name/`

---

## Important Configuration Notes

### For Project Pages (`username.github.io/repo-name`):

Update `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/your-repo-name', // Replace with your actual repo name
}
```

### For User/Organization Pages (`username.github.io`):

Keep `basePath: ''` in `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '', // Empty for user/org pages
}
```

---

## Quick Start Commands

```bash
# 1. Build the project
npm run build

# 2. Verify the out folder exists
ls -la out/

# 3. Deploy using gh-pages
npx gh-pages -d out

# 4. Or manually push to gh-pages branch
git subtree push --prefix out origin gh-pages
```

---

## Troubleshooting

### 404 Errors on Refresh
- GitHub Pages handles this automatically with the `out/404.html` file

### Assets Not Loading
- Check if `basePath` matches your repository name
- Ensure all assets are in the `public/` folder before building

### Build Fails
- Run `npm run build` locally first to catch errors
- Check Node.js version compatibility (v18+)

---

## Your Site Structure After Deployment

```
https://yourusername.github.io/your-repo/
├── index.html          ← Homepage (initial page)
├── 404.html            ← Error page
├── _next/              ← App assets
├── cv/                 ← CV section
├── images/             ← Images
└── models/             ← 3D models
```

**The initial page that loads is `out/index.html`**, which becomes the root of your GitHub Pages site.
