# Indian Sarbath Company Landing Page

A beautiful, modern landing page for Indian Sarbath Company - premium refreshing drinks created by three passionate friends.

## Features

- 🎥 **Fullscreen Video Background** - Immersive visual experience
- ✨ **Glassmorphism Header** - Modern, translucent navigation with backdrop blur
- 🎯 **Interactive Cursor Effects** - Engaging mouse cursor animations and trails  
- 🏃‍♂️ **Three Friends Animations** - Animated founder representations with floating effects
- 📱 **Responsive Design** - Works beautifully on all devices
- 🎨 **Modern Styling** - Built with Tailwind CSS and Framer Motion

## Tech Stack

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and interactions
- **React** - Component-based architecture

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/indiansarbath-landing.git
cd indiansarbath-landing
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or  
pnpm install
# or
bun install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main landing page
└── components/
    ├── Header.tsx         # Glassmorphism navigation header
    ├── HeroSection.tsx    # Main hero section with CTA
    ├── VideoBackground.tsx # Fullscreen video background
    └── CursorEffect.tsx   # Interactive cursor animations
```

## Customization

### Video Background
Replace the placeholder video source in `VideoBackground.tsx`:
```tsx
<source src="/videos/your-video.mp4" type="video/mp4" />
```

### Brand Colors
Update the gradient colors in `tailwind.config.ts` and component files to match your brand.

### Three Friends Animation
Customize the founder representations in `HeroSection.tsx` by updating the emoji icons and names.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

```bash
npm run build
```

Or deploy to any hosting service that supports Next.js.

## Performance

- Optimized for Core Web Vitals
- Lazy loading for images and components  
- Efficient animations with Framer Motion
- Responsive video loading

## Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Indian Sarbath Company - contact@indiansarbhathcompany.com

Project Link: https://github.com/yourusername/indiansarbath-landing