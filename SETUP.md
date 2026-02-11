# Jesus Village Linktree Setup Guide

This is a linktree-style website for Jesus Village Church (예수마을교회) built with Next.js, Tailwind CSS, and FSD architecture.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Naver Cloud Platform account for Maps API

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Naver Maps API

1. **Create a Naver Cloud Platform Account**
   - Visit: https://www.ncloud.com/
   - Sign up for an account if you don't have one

2. **Enable Maps Service**
   - Go to Console → AI·NAVER API → AI·NAVER API
   - Click "Application 등록" (Register Application)
   - Select "Maps" service
   - You'll receive a Client ID

3. **Set Environment Variables**
   - Copy the example environment file:
     ```bash
     cp .env.local.example .env.local
     ```
   - Edit `.env.local` and add your Naver Maps Client ID:
     ```
     NEXT_PUBLIC_NAVER_MAP_CLIENT_ID=your_actual_client_id_here
     ```

### 3. Add Church Avatar/Logo

Replace the placeholder file at `public/avatar.png` with your actual church logo or image:
- Recommended size: 256x256px or larger
- Format: PNG (with transparency if needed)
- The image will be displayed as a circle (120px diameter)

### 4. Update Content (Optional)

If you need to update the links or church information, edit:
```
src/shared/config/links.json
```

You can modify:
- Profile information (name, bio)
- Social media links
- Church address and map coordinates

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for Production

```bash
npm run build
npm start
```

## Project Structure (FSD Architecture)

```
src/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page
│
├── entities/              # Business entities
│   ├── link/             # Link entity
│   ├── map/              # Map entity
│   └── profile/          # Profile entity
│
├── features/             # Feature components
│   └── link-list/        # Link list feature
│
├── widgets/              # Page sections
│   ├── map/             # Map widget
│   └── profile/         # Profile widget
│
└── shared/              # Shared resources
    ├── config/          # Configuration (links.json)
    ├── lib/             # Utilities (icons)
    ├── types/           # TypeScript types
    └── ui/              # Shared UI components
```

## Features

- ✅ Responsive mobile-first design
- ✅ Dark mode support (follows system preference)
- ✅ Social media links (YouTube, Instagram)
- ✅ Interactive Naver Map
- ✅ TypeScript with strict mode
- ✅ ESLint configured
- ✅ Tailwind CSS v4

## Technology Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **React**: 19.2.3
- **Styling**: Tailwind CSS v4
- **TypeScript**: 5.x
- **Maps**: Naver Maps API
- **Architecture**: Feature-Sliced Design (FSD)

## Troubleshooting

### Map not showing

1. Check that you've set up `.env.local` with your Naver Maps Client ID
2. Verify the Client ID is correct in Naver Cloud Platform console
3. Check browser console for any error messages
4. Make sure the Maps service is enabled in your Naver Cloud Platform account

### Avatar not displaying

1. Make sure `public/avatar.png` exists and is a valid image file
2. The file should be at least 120x120px
3. Try clearing Next.js cache: `rm -rf .next` and rebuild

### Build errors

1. Run `npm run lint` to check for code issues
2. Run `npx tsc --noEmit` to check TypeScript errors
3. Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended): https://vercel.com
- **Netlify**: https://netlify.com
- Any Node.js hosting platform

Make sure to set the `NEXT_PUBLIC_NAVER_MAP_CLIENT_ID` environment variable in your deployment platform.

## License

This project was created for Jesus Village Church (예수마을교회).
