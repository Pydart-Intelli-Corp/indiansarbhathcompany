# 🚀 Firebase Deployment Guide for indiansarbhathcompany.com

## Prerequisites

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

## 🔥 Firebase Setup Steps

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Name it: `indiansarbath-com` (or your preferred name)
4. Follow the setup wizard

### Step 2: Initialize Firebase in Your Project
```bash
# Navigate to your project directory
cd d:\MY PROJECTS\Pydart\indiasarbathcompany

# Initialize Firebase
firebase init hosting
```

**During initialization, select:**
- ✅ Use an existing project: Select your created project
- ✅ Public directory: `out` (already configured)
- ✅ Configure as single-page app: `Yes`
- ✅ Set up automatic builds: `No`
- ✅ Overwrite index.html: `No`

### Step 3: Build and Deploy
```bash
# Build the Next.js project for static export
npm run build

# Deploy to Firebase
firebase deploy
```

## 🎯 Quick Deploy Command
After initial setup, use this single command:
```bash
npm run deploy
```

## 📁 Project Structure for Deployment
```
indiansarbath-landing/
├── out/                  # Generated static files (Firebase public folder)
├── public/
│   └── 19575-303404028.mp4  # Your video file
├── firebase.json         # Firebase configuration
├── .firebaserc          # Firebase project settings
└── next.config.js       # Next.js export configuration
```

## 🌐 Custom Domain Setup (Optional)

1. **In Firebase Console:**
   - Go to Hosting section
   - Click "Add custom domain"
   - Enter: `indiansarbhathcompany.com`
   - Follow DNS setup instructions

2. **DNS Configuration:**
   - Add A records pointing to Firebase IPs
   - Or add CNAME record pointing to your Firebase subdomain

## ⚡ Performance Optimizations

The firebase.json includes:
- ✅ Cache headers for static assets (1 year)
- ✅ Cache headers for video files
- ✅ SPA routing configuration
- ✅ Optimized for Next.js static export

## 🛠️ Troubleshooting

### Video Not Loading
- Ensure `19575-303404028.mp4` is in the `public/` folder
- Check file size (Firebase has limits)
- Verify video format compatibility

### Build Errors
- Run `npm run build` locally first
- Check for any TypeScript errors
- Ensure all dependencies are installed

### Deployment Fails
- Verify Firebase CLI is logged in: `firebase login`
- Check project selection: `firebase use --add`
- Ensure correct project ID in `.firebaserc`

## 📊 Deployment Status Commands

```bash
# Check deployment status
firebase hosting:channel:list

# View live site
firebase open hosting:site

# Check Firebase project info
firebase projects:list
```

## 🎉 Expected Result

After deployment, your site will be live at:
- **Firebase URL:** `https://your-project-id.web.app`
- **Custom domain:** `https://indiansarbhathcompany.com` (if configured)

The landing page will feature:
- ✅ Fullscreen video background with to-and-fro effect
- ✅ Glassmorphism header with navigation
- ✅ Interactive letter hover effects on "indiansarbhathcompany.com"
- ✅ Beautiful cursor interactions
- ✅ Under construction modals for all buttons
- ✅ Mobile-responsive design

## 🔄 Future Updates

To update the site:
```bash
# Make your changes, then:
npm run deploy
```

Firebase will automatically update your live site with the new version!