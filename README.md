# Smart Home & Building Automation Specialist Portfolio

Premium interactive portfolio website for a Smart Home / Building Automation Specialist specializing in KNX, Loxone, and intelligent building systems.

## Quick Start

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

The static files will be generated in the `out/` folder.

### Deploy to GitHub Pages

**Option 1: Using npm script (requires gh-pages)**

```bash
npm run deploy
```

**Option 2: Manual deployment**

```bash
git subtree push --prefix out origin gh-pages
```

**Option 3: GitHub Actions (Automated)**

Push to `main` branch and the workflow will automatically deploy.

---

## Initial Page for GitHub Pages

**The initial page is `out/index.html`** - this is your homepage that loads when visitors access your GitHub Pages URL.

After deployment, your site structure will be:

```
https://yourusername.github.io/repository-name/
├── index.html          ← Homepage (initial page)
├── 404.html            ← Error page
├── _next/              ← App assets
├── cv/                 ← CV section
├── images/             ← Images
└── models/             ← 3D models
```

---

## Configuration for GitHub Pages

### For Project Pages (`username.github.io/repo-name`)

Update `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/your-repo-name', // Replace with your repo name
}
```

### For User/Organization Pages (`username.github.io`)

Keep `basePath: ''` in `next.config.js`.

---

## GitHub Pages Setup Steps

1. **Build the project**: `npm run build`
2. **Verify output**: Check the `out/` folder exists
3. **Deploy** using one of the methods above
4. **Configure Repository**:
   - Go to Settings → Pages
   - Select source: `gh-pages` branch or GitHub Actions
   - Save settings
5. **Access your site**: `https://yourusername.github.io/your-repo-name/`

---

## Tech Stack

- **Framework**: Next.js 14 (Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D**: Three.js, React Three Fiber, Drei
- **Animation**: Framer Motion, GSAP
- **Icons**: Lucide React

---

## Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # React components
│   ├── 3d/             # 3D components
│   ├── sections/       # Page sections
│   └── ui/             # UI components
├── data/               # Content data
└── styles/             # Global styles

public/                 # Static assets
out/                    # Build output (for GitHub Pages)
```

---

## Customization

See `GITHUB_PAGES_DEPLOYMENT.md` for detailed deployment instructions.

Edit content in `src/data/` to update:
- Personal information
- Projects
- Experience
- Skills
- Certifications

---

## License

Private - All rights reserved
