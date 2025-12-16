# Shace Landing Page - Nuxt.js

A modern landing page for Shace, built with Nuxt.js, Vue 3, and Tailwind CSS.

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Development Server

Start the development server on `http://localhost:3006`:

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Generate Static Site (for GitHub Pages)

```bash
npm run generate
```

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed GitHub Pages deployment instructions.

## Project Structure

```
shace-landing-page/
├── assets/
│   └── css/
│       └── main.css          # Global styles and Tailwind CSS
├── components/
│   ├── ui/                   # UI components (Button, Sheet, etc.)
│   ├── AnimatedSection.vue   # Scroll animation wrapper
│   ├── BentoCard.vue         # Bento grid card component
│   ├── BentoSection.vue       # Features section
│   ├── CTASection.vue         # Call-to-action section
│   ├── DashboardPreview.vue   # Hero dashboard preview
│   ├── FAQSection.vue         # FAQ accordion section
│   ├── FooterSection.vue      # Footer with links
│   ├── Header.vue             # Navigation header
│   ├── HeroSection.vue        # Hero section with header
│   ├── LargeTestimonial.vue   # Large testimonial card
│   ├── PricingSection.vue     # Pricing plans section
│   ├── SocialProof.vue       # Company logos section
│   ├── TestimonialCard.vue    # Individual testimonial card
│   └── TestimonialGridSection.vue # Testimonials grid
├── composables/
│   └── useCn.ts              # Utility for className merging
├── layouts/
│   └── default.vue           # Default layout with Header
├── pages/
│   ├── index.vue             # Home page
│   ├── privacy-policy.vue    # Privacy policy page
│   ├── terms-and-conditions.vue # Terms and conditions page
│   └── cancellation-policy.vue # Cancellation policy page
├── public/                    # Static assets (images, logos, etc.)
├── app.vue                    # Main app component
├── error.vue                  # Custom error page
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── package.json              # Dependencies and scripts
```

## Features

- ✅ Fully responsive design
- ✅ Tailwind CSS styling
- ✅ Scroll animations
- ✅ Mobile navigation menu
- ✅ FAQ accordion
- ✅ Pricing toggle (Monthly/Annual)
- ✅ All sections from original Next.js version

## Differences from Next.js Version

- Uses Vue 3 Composition API instead of React
- Simplified SVG backgrounds (can be enhanced later)
- Uses Nuxt Image optimization (can be configured)
- No Radix UI dependencies (simplified components)

## Notes

- The project uses Nuxt 3 with TypeScript support
- Tailwind CSS is configured with the same theme variables as the original
- All public assets have been copied from the original project
- Components maintain the same styling and structure as the original

## Customization

You can customize colors and styling in:
- `assets/css/main.css` - CSS variables and global styles
- `tailwind.config.js` - Tailwind theme configuration

