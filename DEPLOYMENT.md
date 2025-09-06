# Deployment Guide

## Quick Start for GitHub Pages

1. **Update the homepage URL in package.json**
   ```json
   "homepage": "https://your-actual-username.github.io/portfolio"
   ```

2. **Install gh-pages package** (already added to package.json)
   ```bash
   npm install
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages in repository settings**
   - Go to your GitHub repository
   - Navigate to Settings > Pages
   - Select "gh-pages" branch as source
   - Your site will be live at: `https://your-username.github.io/portfolio`

## Alternative Deployment Options

### Netlify (Recommended for beginners)
1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `build` folder
4. Your site will be live instantly

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on every push
3. Get a custom domain and SSL certificate

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build and deploy: `npm run build && firebase deploy`

## Important Notes

- The project is configured for GitHub Pages deployment
- All personal information is already populated
- The contact form is functional (simulated submission)
- All social links are working
- CV download link is configured
- The site is fully responsive and optimized

## File Structure Ready for Deployment

```
portfolio/
├── .gitignore          # Git ignore rules
├── README.md           # Comprehensive documentation
├── package.json        # Dependencies and scripts
├── public/             # Static assets
├── src/                # Source code
└── build/              # Production build (after npm run build)
```

Your portfolio is now ready for deployment! 🚀
