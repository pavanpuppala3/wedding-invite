# Wedding Invitation Website

A beautiful, responsive wedding invitation website with traditional Telugu elements.

## Features

✨ **Photo Gallery** - Showcase your memorable moments  
🗺️ **Google Maps Integration** - Easy venue location  
🎵 **Background Music** - Toggle wedding music on/off  
⏰ **Countdown Timer** - Live countdown to the big day  
📝 **RSVP Form** - Collect guest responses  
🇮🇳 **Telugu Language** - Traditional Telugu text and blessings

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `wedding-invitation` (or any name you prefer)
3. Keep it public
4. Don't initialize with README

### Step 2: Push Code to GitHub
```bash
cd d:\inviation
git init
git add .
git commit -m "Initial wedding invitation website"
git branch -M main
git remote add origin https://github.com/<your-username>/wedding-invitation.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://<your-username>.github.io/wedding-invitation/`

## Customization

### Update Wedding Details
Edit `index.html`:
- Line 17-19: Bride & Groom names
- Line 28: Wedding date
- Line 29: Wedding time
- Line 48: Venue address

### Update Countdown Date
Edit `script.js`:
- Line 2: Change date to your wedding date

### Add Your Photos
Replace placeholder images in `index.html` (lines 36-41):
1. Add your photos to the repository
2. Replace `src="https://via.placeholder.com/..."` with `src="photo1.jpg"`

### Add Google Maps Location
Edit `index.html` (line 51):
1. Go to [Google Maps](https://maps.google.com)
2. Search your venue
3. Click **Share** → **Embed a map**
4. Copy the iframe code
5. Replace the existing iframe

### Add Background Music
1. Add your music file (MP3 format) to the repository
2. Name it `wedding-music.mp3` or update line 10 in `index.html`

### Change Colors
Edit `styles.css`:
- Line 18: Hero gradient colors
- Line 95: Telugu text color
- Line 197: RSVP section gradient

## RSVP Data
RSVPs are stored in browser's localStorage. For production:
- Integrate with [Formspree](https://formspree.io)
- Use [Google Forms](https://forms.google.com)
- Connect to a backend service

## Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge

## License
Free to use for personal wedding invitations.

---

Made with ❤️ for your special day!
