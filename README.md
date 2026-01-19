# Mark Voldeck Portfolio Site

Interactive 3D map portfolio centered on Lansing, MI. Click highlighted buildings to explore values, work, and collaboration interests.

## Quick Start

1. **Get a Mapbox token** (free tier is plenty):
   - Go to https://account.mapbox.com/
   - Create account or sign in
   - Copy your default public token

2. **Add your token**:
   - Open `app.js`
   - Replace `YOUR_MAPBOX_TOKEN` with your actual token

3. **Run locally**:
   ```bash
   # Simple Python server
   python -m http.server 8000
   
   # Or Node
   npx serve
   ```

4. **Open**: http://localhost:8000

## Structure

```
portfolio-site/
├── index.html      # Main HTML with desktop/mobile views
├── styles.css      # All styling
├── app.js          # Main app logic (Mapbox, interactions)
├── buildings.js    # Building coordinates & camera settings
├── content.js      # Sidebar HTML content
└── README.md       # This file
```

## Buildings

| Building | Content | Coordinates |
|----------|---------|-------------|
| Michigan State Capitol | What I Believe | -84.5553, 42.7336 |
| Downtown (Stadium area) | What I've Built | -84.5522, 42.7330 |
| The Fledge | Who I Want to Work With | -84.5605, 42.7270 |

## Customization

### Change building locations
Edit `BUILDINGS` object in `app.js`:
- `coordinates`: [longitude, latitude]
- `camera`: where camera flies when selected

### Update content
Edit `CONTENT` object in `app.js` - each building has an `html` property with the sidebar content.

### Styling
All styles in `styles.css`. Key variables at top:
- `--color-accent`: Main highlight color
- `--sidebar-width`: Sidebar panel width

## Deployment

Static files - deploy anywhere:
- **Vercel**: `vercel`
- **Netlify**: drag & drop folder
- **GitHub Pages**: push to `gh-pages` branch
- **Cloudflare Pages**: connect repo

## Mobile

On screens < 768px, shows a simplified single-page version with a note about the desktop experience.

## TODO

- [ ] Add actual demo links to projects
- [ ] Consider adding more buildings/content
- [ ] Add subtle ambient animation to map (slow rotation?)
- [ ] Add loading state while map initializes
