# Deployment Guide

## Deploy to Vercel (Recommended)

### Method 1: Deploy via Vercel Dashboard

1. Go to [Vercel](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import the repository: `Nafiz001/shabuj-university-finder`
5. Configure:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click "Deploy"

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Deploy to Netlify

1. Go to [Netlify](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select the repository
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Set the build plugin to: `@netlify/plugin-nextjs`
5. Click "Deploy site"

## Environment Variables

Currently, this project doesn't require any environment variables. If you need to add them in the future:

1. Copy `.env.example` to `.env.local`
2. Add your environment variables
3. In Vercel/Netlify dashboard, add the same variables under Settings → Environment Variables

## Post-Deployment Checklist

- ✅ Verify the home page loads correctly
- ✅ Test the universities listing page
- ✅ Test all filter combinations
- ✅ Test the compare feature with 2 universities
- ✅ Check mobile responsiveness
- ✅ Verify SEO metadata in page source
- ✅ Test performance with Lighthouse

## Troubleshooting

### Build Fails

- Ensure all dependencies are correctly listed in `package.json`
- Check build logs for specific errors
- Verify Node.js version is 18+

### 404 Errors

- Ensure all routes are properly configured
- Check that the App Router structure is correct

### Styling Issues

- Verify Tailwind CSS is properly configured
- Check `globals.css` is imported in `layout.tsx`

## Performance Optimization Tips

1. **Enable Vercel Analytics** for monitoring
2. **Use CDN** for static assets
3. **Enable image optimization** if adding images later
4. **Monitor Core Web Vitals** via Vercel or Google Search Console
