# Tender Counselling UI Refactor Plan
## Comprehensive Multi-Phase Design System Implementation

---

## Executive Summary

This document outlines a systematic approach to transform the Tender Counselling website from its current state (coral/warm tan accents with hardcoded colors) to a cohesive Pacific Northwest-inspired design system. The refactor prioritizes establishing a design token foundation, modernizing the header and navigation, and progressively redesigning pages to reflect a warm, welcoming, grounded aesthetic aligned with neutral earth tones and dark greens.

**Current State:**
- Custom Tailwind 4.0 setup with OKLch color system
- Fixed header with gradient and inline color values
- 7 primary pages with varied layouts
- No centralized design tokens or component library

**Target State:**
- Comprehensive design token system (colors, typography, spacing, shadows, borders)
- Component library with consistent patterns
- Pacific Northwest aesthetic across all pages
- Fully responsive mobile-first design
- Accessibility-first approach (WCAG 2.1 AA)

**Estimated Total Timeline:** 8-12 weeks (depends on parallel execution)

---

## Design Decisions to Make

Before implementation, finalize these decisions:

### Color System
- [x] Primary color (Terracotta #A55D35)
- [x] Secondary color (complementary earth tones - mapped from palette)
- [x] Tertiary color (accent, Sage Olive #5C7A68 + Ochre #C196AB)
- [x] Neutral palette (navy/teal/cream/taupe backgrounds)
- [x] Success, warning, error colors (forest green, ochre, rose)
- [x] Opacity/transparency standards for overlays and states

### Typography
- [x] Primary font family (Montserrat - sans-serif)
- [x] Heading font scale (h1-h6 sizes in px)
- [x] Body text size (base: 16px)
- [x] Line height standards (1.5 for body, 1.2 for headings)
- [x] Font weights to use (200, 400, 600, 700)
- [x] Letter spacing for readability

### Spacing & Layout
- [x] Base spacing unit (4px scale implemented in Tailwind)
- [x] Container max-width (1280px)
- [x] Gutter width (responsive: 16px mobile, 24px tablet, 40px desktop)
- [x] Padding standards for different components
- [x] Margin collapse strategy (vertical spacing via space-y utilities)

### Components & Patterns
- [ ] Button styles (primary, secondary, tertiary, sizes)
- [ ] Card design (shadow, border, spacing)
- [ ] Form input styles (focus states, validation)
- [ ] Heading styles (with optional underlines/accents)
- [ ] Navigation link hover/active states

### Imagery & Visual Style
- [ ] Hero image treatment (overlay, blur, scale)
- [ ] Icon style (outline, solid, custom)
- [ ] Background patterns (if any)
- [ ] Subtle animations (micro-interactions)

### Responsive Breakpoints
- [ ] Mobile: 320px (confirm)
- [ ] Tablet: 768px (confirm)
- [ ] Desktop: 1024px (confirm)
- [ ] Large: 1280px (confirm)

---

## Phase 1: Design System & Foundations (Week 1-2)

### Objectives
- Establish centralized design tokens in Tailwind configuration
- Create OKLch color palette aligned with Pacific Northwest aesthetic
- Define typography scale and font families
- Set up spacing and sizing system
- Create reusable utility classes for common patterns
- Document all design decisions

### Files to Modify
- `tailwind.config.ts` (new file, if not present)
- `src/styles/globals.css` (expand theme variables)
- `tailwind.config.js` (add Tailwind 4.0 theme configuration)
- Create `src/styles/design-tokens.css` (new file)
- Create `src/lib/constants/colors.ts` (new file)
- Create `src/lib/constants/typography.ts` (new file)

### Implementation Details

#### Color Tokens (OKLch Format)
```
Primary Colors (Terracotta):
--color-primary-950: #382008; /* Darkest shade */
--color-primary-900: #4f2d0d;
--color-primary-800: #663916;
--color-primary-700: #7d451f;
--color-primary-600: #945228;
--color-primary-500: #A55D35; /* Primary brand - Terracotta */
--color-primary-400: #C78B5F;
--color-primary-300: #D4A584;
--color-primary-200: #E0BFA8;
--color-primary-100: #EDD9CC;
--color-primary-50: #F5EDE5;  /* Lightest tint */

Earth Tone Palette:
--color-earth-tan: #F0EDE5; /* Cream Beige */
--color-earth-brown: #6B4C3A; /* Deep Rust Accent */
--color-earth-sage: #5C7A68; /* Sage Olive Green */
--color-earth-moss: #3F6A5C; /* Muted Teal Green */

Neutral Palette:
--color-neutral-950: #1F3E52; /* Deep Navy - Teal */
--color-neutral-900: #3A5F70; /* Foggy Teal Blue */
--color-neutral-800: #2E4A3F; /* Deep Forest Green */
--color-neutral-700: #5C7A68; /* Sage Olive Green */
--color-neutral-600: #D9D2C7; /* Soft Taupe Beige */
--color-neutral-500: #E0BFA8; /* Mid-tone */
--color-neutral-400: #F0EDE5; /* Cream Beige */
--color-neutral-300: #F5EDE5; /* Light cream */
--color-neutral-200: #FAF7F3; /* Very light */
--color-neutral-100: #FDFCFB; /* Almost white */
--color-neutral-50: #FFFFFF; /* White */

Accent Colors:
--color-accent-sage: #5C7A68; /* Sage Olive Green */
--color-accent-ochre: #C196AB; /* Golden Olive/Ochre Highlight */

Semantic Colors:
--color-success: oklch(...); /* Green - to be defined */
--color-warning: oklch(...); /* Yellow/Orange - to be defined */
--color-error: oklch(...); /* Red - to be defined */
--color-info: oklch(...); /* Blue - to be defined */
```

#### Typography Tokens
- Heading font family: [USER TO SPECIFY]
- Body font family: [USER TO SPECIFY]
- Monospace font family: Geist Mono (keep)
- Font sizes: 12px, 14px, 16px, 18px, 20px, 24px, 32px, 40px, 48px
- Line heights: 1.2 (headings), 1.5 (body), 1.6 (relaxed)
- Font weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

#### Spacing System
- 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 56px, 64px
- Margin and padding use consistent units
- Gap utilities for flexbox/grid

#### Tailwind Configuration
Update `tailwind.config.ts` to include:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#F5EDE5',
        100: '#EDD9CC',
        200: '#E0BFA8',
        300: '#D4A584',
        400: '#C78B5F',
        500: '#A55D35',  // Terracotta - primary brand
        600: '#945228',
        700: '#7d451f',
        800: '#663916',
        900: '#4f2d0d',
        950: '#382008',
      },
      earth: {
        tan: '#F0EDE5',     // Cream Beige
        brown: '#6B4C3A',   // Deep Rust Accent
        sage: '#5C7A68',    // Sage Olive Green
        moss: '#3F6A5C',    // Muted Teal Green
      },
      accent: {
        sage: '#5C7A68',    // Sage Olive Green
        ochre: '#C196AB',   // Golden Olive/Ochre Highlight
      },
      neutral: {
        50: '#FFFFFF',
        100: '#FDFCFB',
        200: '#FAF7F3',
        300: '#F5EDE5',
        400: '#F0EDE5',
        500: '#E0BFA8',
        600: '#D9D2C7',
        700: '#5C7A68',
        800: '#2E4A3F',
        900: '#3A5F70',
        950: '#1F3E52',
      },
      success: '#2D6A4F',       // Forest green
      warning: '#D4A574',       // Warm ochre/gold
      error: '#A64253',         // Deep rose
      info: '#3A5F70',          // Foggy teal blue
    },
    fontFamily: {
      serif: '[USER SELECTED SERIF FONT], serif',
      sans: '[USER SELECTED SANS FONT], sans-serif',
      mono: 'Geist Mono, monospace',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '32px',
      '4xl': '40px',
      '5xl': '48px',
      '6xl': '56px',
    },
    spacing: {
      0: '0',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      8: '32px',
      10: '40px',
      12: '48px',
      16: '64px',
    },
    borderRadius: {
      none: '0',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      full: '9999px',
    },
    boxShadow: {
      none: 'none',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    },
  },
}
```

### Responsive Design Considerations
- Establish mobile-first approach in all components
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Base spacing for mobile, increased spacing at larger breakpoints
- Font sizes scale appropriately across devices

### Dependencies
- None (foundation phase has no dependencies)

### Success Criteria
- All design tokens documented in code comments
- Tailwind configuration compiles without errors
- Design decisions document completed
- Color palette accessible (contrast ratios ≥ 4.5:1 for text)
- Typography scales harmoniously across all sizes

---

## Phase 2: Header & Navigation Refactor (Week 1-2, parallel with Phase 1)

### Objectives
- Replace hardcoded color values with design tokens
- Improve mobile navigation UX
- Enhance accessibility (ARIA labels, focus states)
- Implement consistent hover/active states
- Create reusable navigation component patterns

### Files to Modify
- `src/components/header.tsx` (major refactor)
- Create `src/components/nav-link.tsx` (new component)
- Create `src/components/mobile-menu.tsx` (new component)
- `src/styles/globals.css` (add focus and transition utilities)

### Implementation Details

#### Header Structure
- Remove inline gradient background
- Replace with design token-based styling
- Implement semantic HTML: `<header><nav><ul><li>`

Key changes:
- Use `className="bg-primary-50 shadow-md"`
- Replace `hover:text-[#e2735b]` with `hover:text-primary-600`
- Replace all `border-2 border-primary` patterns
- Add focus states: `focus:outline-none focus:ring-2 focus:ring-primary-500`
- Add transition utilities: `transition-colors duration-200`

#### Mobile Navigation Improvements
- Smooth slide-in/out animation using Tailwind
- Backdrop blur effect: `backdrop-blur-sm`
- Touch-friendly tap targets (minimum 44x44px)
- Dismiss on link click (already implemented)
- Keyboard navigation support (Tab, Escape)

#### Navigation Link Component
`src/components/nav-link.tsx`
- Props: href, children, isActive, onClick
- Features:
  - Underline animation on hover
  - Color transition using tokens
  - Active state styling
  - Focus ring for keyboard navigation
  - Mobile-specific sizing

#### Active Link Styling
```tsx
className={clsx(
  'text-neutral-900 hover:text-primary-600 transition-colors',
  isActive && 'underline underline-offset-4 text-primary-600'
)}
```

### Tailwind Patterns
```css
/* Navigation link states */
.nav-link {
  @apply text-neutral-900 transition-colors duration-200;
}
.nav-link:hover {
  @apply text-primary-600;
}
.nav-link:focus {
  @apply outline-none ring-2 ring-primary-500 ring-offset-2;
}
.nav-link.active {
  @apply underline underline-offset-4 text-primary-600;
}

/* Mobile menu animations */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
```

### Responsive Design Considerations
- Desktop: Horizontal navbar with underline active states
- Tablet (768px): Hamburger menu activation point
- Mobile: Full-screen overlay menu with large touch targets
- Padding: Reduced on mobile (px-3), standard on desktop (px-8)
- Logo size: 40px mobile, 50px desktop

### Dependencies
- Depends on Phase 1 (design tokens must be defined)

### Success Criteria
- All hardcoded colors replaced with tokens
- Mobile menu animations smooth (60fps)
- WCAG 2.1 AA accessibility compliance
- Keyboard navigation fully functional
- No layout shift on mobile menu toggle
- Touch targets ≥ 44x44px
- Focus indicators visible on all interactive elements

---

## Phase 3: Home Page Redesign (Week 2-3)

### Objectives
- Create hero section aligned with Pacific Northwest aesthetic
- Redesign service overview cards with new color palette
- Implement consistent spacing and typography
- Add call-to-action section with better visual hierarchy
- Ensure mobile-first responsiveness

### Files to Modify
- `src/app/page.tsx` (major restructure)
- Create `src/components/hero-section.tsx` (new component)
- Create `src/components/service-card.tsx` (new component)
- Create `src/components/cta-section.tsx` (new component)
- Create `src/components/button.tsx` (new component)

### Implementation Details

#### Hero Section
`src/components/hero-section.tsx`

Features:
- Background image with overlay (dark green @ 40% opacity)
- Headline in serif font (h1)
- Subheading with warm description
- Primary CTA button (prominent)
- Secondary CTA button (link-style)

Layout:
- Mobile: Centered text, image below text
- Tablet: Text left 50%, image right 50%
- Desktop: Full-width with centered content overlay

Tailwind structure:
```tsx
<section className="relative w-full h-screen md:h-[600px] bg-cover bg-center">
  <div className="absolute inset-0 bg-primary-900/40"></div>
  <div className="relative z-10 flex items-center justify-center md:justify-start h-full px-4 md:px-8 lg:px-16">
    {/* Content */}
  </div>
</section>
```

#### Service Overview Cards
`src/components/service-card.tsx`

Features:
- Card component with subtle shadow (shadow-md)
- Icon or image at top (60px, earth tone background)
- Service name as h3 (serif)
- Brief description (2-3 lines)
- "Learn More" link (primary color, underline on hover)
- Hover effect: slight lift (transform: translateY(-2px)), shadow increase

Layout grid:
- Mobile: 1 column, full width cards
- Tablet: 2 columns, gap-6
- Desktop: 3 columns, gap-8

Colors:
- Background: neutral-50
- Border: neutral-200 (subtle)
- Icon bg: earth-tan or primary-100
- Text: neutral-900
- Hover shadow: primary-500/10

#### Call-to-Action Section
Styling:
- Background: primary-700 or earth-sage
- Text: white or neutral-50
- CTA button: secondary color (white/neutral-50 background)
- Heading: h2 in serif, bold

Layout:
- Mobile: Centered, full padding
- Desktop: Two-column (text left, visual right)

Pattern:
- Generous padding: py-16 md:py-24
- Max-width container: max-w-6xl
- Centered margin: mx-auto

#### Button Component
Create reusable button with variants:
- Primary: bg-primary-600, text-white, hover:bg-primary-700
- Secondary: bg-neutral-100, text-primary-600, hover:bg-neutral-200
- Tertiary: transparent, text-primary-600, underline on hover
- Sizes: sm (py-2 px-4), md (py-3 px-6), lg (py-4 px-8)
- Disabled state: opacity-50, cursor-not-allowed
- Focus: focus:ring-2 focus:ring-primary-500

### Responsive Design Considerations
- Hero height: 100vh on mobile (with overflow), 600px on desktop
- Card grid: Adjust from 1→2→3 columns
- Font sizes: Scale up heading sizes on larger screens
- Padding: Consistent mobile (px-4), expanded desktop (px-8)
- Image optimization: Use `next/image` with responsive srcSet

### Dependencies
- Depends on Phase 1 (design tokens)
- Depends on Phase 2 (header styling)

### Success Criteria
- Hero section visually compelling and on-brand
- Service cards display consistently across all breakpoints
- CTA section has strong visual hierarchy
- All images optimized with Next.js Image component
- Mobile scrolling smooth and performant
- Color contrast ratios meet WCAG AA (4.5:1 minimum)

---

## Phase 4: About Page Redesign (Week 3)

### Objectives
- Create compelling narrative layout about therapist/practice
- Introduce testimonials section (if available)
- Redesign team/bio section with consistent styling
- Add visual elements supporting Pacific Northwest aesthetic
- Improve readability with proper typography hierarchy

### Files to Modify
- `src/app/about/page.tsx` (major restructure)
- Create `src/components/bio-card.tsx` (new component)
- Create `src/components/testimonial-section.tsx` (new component)
- Create `src/components/about-hero.tsx` (new component)

### Implementation Details

#### About Hero Section
- Smaller than home hero (400-500px)
- Background: subtle gradient primary-50 to white
- Content: centered or left-aligned
- Subheading context for about page

#### Bio/Team Section
Layout:
- Mobile: Single column, image above text
- Desktop: Alternating image/text (image left, text right, then reverse)

Styling:
- Image: rounded-lg, shadow-lg, max-width 400px
- Text: serif h2, body text with warm tone
- Accent quote: italic, primary-700, border-left-4 border-primary-400

Pattern for team members:
```tsx
<div className="grid md:grid-cols-2 gap-8 md:gap-12">
  <div className="flex flex-col items-center md:items-start">
    <img className="rounded-lg shadow-lg mb-6 w-full md:w-400px" />
    <h3 className="text-2xl font-serif font-bold mb-4" />
    <p className="text-neutral-700 leading-relaxed" />
  </div>
</div>
```

#### Testimonials Section
If testimonials exist:
- Section heading: h2 serif, center-aligned
- Cards grid: 1 mobile, 2 tablet, 3 desktop
- Card content: Quote (italic), attribution (name/title)
- Background: neutral-50 or primary-50
- Border: subtle top border in primary color
- Rating stars: optional (gold color)

#### Values/Philosophy Section
- Bullet points or icon-based layout
- Each item:
  - Icon (24-32px, earth tone background)
  - Title (h4 serif)
  - Description (body text)
- Grid: 1 mobile, 2 tablet, 4 desktop
- Icon background: earth-tan, earth-sage, primary-100, earth-brown

### Responsive Design Considerations
- Image sizing: 100% width on mobile, max-width 400px on desktop
- Alternating layout: Stack on mobile, side-by-side on desktop
- Typography: Scale up headings and testimonial text
- Spacing: py-12 md:py-20 for sections
- Values grid: Adjust columns based on content count

### Dependencies
- Depends on Phase 1 (design tokens)
- Depends on Phase 2 (header styling)
- Depends on Phase 3 (button/card components)

### Success Criteria
- About page conveys warmth and professionalism
- Testimonials prominently featured and readable
- Images properly optimized and responsive
- Typography hierarchy clear and scannable
- All text readable on mobile (18px minimum for body)
- Consistent spacing throughout

---

## Phase 5: Services, Rates, and FAQs Pages Redesign (Week 3-4)

### Objectives
- Redesign Services page with detailed service cards and descriptions
- Create clear, accessible Rates/Pricing table
- Redesign FAQs with collapsible accordion components
- Implement consistent styling across all three pages
- Improve information architecture and scannability

### Files to Modify
- `src/app/services/page.tsx` (major restructure)
- `src/app/rates/page.tsx` (major restructure)
- `src/app/faqs/page.tsx` (major restructure)
- Create `src/components/accordion.tsx` (new component)
- Create `src/components/pricing-table.tsx` (new component)
- Create `src/components/service-detail-card.tsx` (new component)

### Implementation Details

#### Services Page
Layout:
- Hero section: h1 "Our Services", subheading
- Grid of service cards: 1 mobile, 2 tablet, 3 desktop
- Alternate detailed sections for each service

Service Detail Card:
- Title (h3 serif, primary color)
- Description (body text, 3-4 lines)
- Key benefits list (ul, checkmark icons)
- Icon: 64x64px, earth tone background
- Link: "Learn More" or CTA button
- Hover effect: slight lift (transform: translateY(-2px)), shadow increase
- Color scheme: Card bg neutral-50, heading primary-900, accent primary-600

Detailed Service Section:
- Full-width alternating layout (image, text)
- Image on left (desktop), above (mobile)
- Text includes: overview, who it's for, duration, benefits
- CTA button at bottom

#### Rates/Pricing Page
Table structure:
```tsx
<table className="w-full border-collapse">
  <thead>
    <tr className="border-b-2 border-primary-600">
      <th className="text-left py-4 px-4 font-serif font-bold" />
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-neutral-200">
      <td className="py-4 px-4 text-neutral-900" />
    </tr>
  </tbody>
</table>
```

Styling:
- Header background: primary-50 or primary-100
- Row striping: alternate neutral-50 and white
- Borders: subtle neutral-200
- Text: body size, neutral-900
- Highlight: important rates in primary-600 (bold)
- Responsive: Horizontal scroll on mobile, full table on desktop (wrap in `overflow-x-auto`)

Additional sections:
- Payment methods: Icons and text
- Insurance info: Clear explanations, links
- Sliding scale note: Emphasized with primary color
- Contact CTA: Link to contact page

#### FAQs Page
Accordion Component:
- Props: items (array of {question, answer})
- State: expanded item index

Styling:
- Container: max-width-2xl, center on page
- Item: border-b border-neutral-200, py-6
- Question: h4 serif, font-bold, cursor-pointer
- On hover: text-primary-600, transition-colors
- Icon: chevron-down, rotate on expand, transition-transform
- Answer: mt-4, text-neutral-700, leading-relaxed
- Smooth height animation: max-height transition

Layout:
```tsx
<div className="space-y-4">
  {items.map((item, index) => (
    <div className="border-b border-neutral-200 py-6">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
      >
        <h3 className="text-lg font-serif font-bold">{item.question}</h3>
        <ChevronDown className={`transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`} />
      </button>
      {expandedIndex === index && (
        <p className="mt-4 text-neutral-700">{item.answer}</p>
      )}
    </div>
  ))}
</div>
```

Categories (if multiple FAQ sections):
- Buttons/tabs to filter by category
- Active tab: primary-600, bold underline
- Inactive tab: neutral-600, hover to primary-400

#### Pricing Cards (Alternative to Table)
If using cards instead of table:
- Three-column layout (desktop)
- Card: border-2, rounded-lg, p-8
- Price: h2 serif, primary-600, bold
- Features: ul, checkmark icons
- CTA button: primary or secondary
- Highlighted plan: border color primary-600, shadow-lg

### Responsive Design Considerations
- Services: Card layout adjusts 1→2→3
- Rates table: Horizontal scroll on mobile (use `overflow-x-auto` wrapper)
- FAQs: Full-width content with max-width container (max-w-2xl)
- Spacing: Consistent py-12 md:py-20 for sections
- Font sizes: Larger headings on desktop, readable on mobile

### Dependencies
- Depends on Phase 1 (design tokens)
- Depends on Phase 2 (header styling)
- Depends on Phase 3 (button/card components)

### Success Criteria
- Services clearly presented with benefits visible
- Rates accessible and easy to scan/compare
- FAQs searchable or well-organized by category
- Accordion animations smooth (no janky height changes)
- Pricing table responsive without horizontal scroll (or with graceful degradation)
- All interactive elements have clear focus states
- Mobile users can access all information without frustration

---

## Phase 6: EMDR Page Redesign (Week 4)

### Objectives
- Create compelling EMDR education page
- Explain therapeutic approach with clear visuals
- Build trust with science-backed information
- Implement visual aids for technique explanation
- Improve engagement and clarity

### Files to Modify
- `src/app/emdr/page.tsx` (major restructure)
- Create `src/components/step-card.tsx` (new component)
- Create `src/components/info-block.tsx` (new component)
- Create `src/components/emdr-hero.tsx` (new component)

### Implementation Details

#### EMDR Hero Section
Design:
- Background: subtle gradient primary-50 to white
- Headline: h1 "EMDR Therapy", serif, primary-900
- Subheading: warm description, primary-700
- Call-to-action button

Layout:
- Mobile: Full-width, centered text
- Desktop: Could include side image if available
- Padding: py-12 md:py-20

#### How EMDR Works Section
Visual process flow options:
- Option 1: Numbered steps with cards (1→2→3→4)
- Option 2: Timeline layout
- Option 3: Circle/circular flow diagram (CSS only)

Step Card Component:
- Number: h2, primary-600, serif bold
- Title: h3 serif
- Description: body text, 2-3 lines
- Icon: optional visual aid
- Color: background primary-50, border-left-4 border-primary-600

Grid: 1 mobile, 2 tablet, 4 desktop
Spacing: gap-6 md:gap-8
Arrow between steps: hidden on mobile, visible desktop

```tsx
<div className="grid md:grid-cols-4 gap-6">
  {steps.map((step, index) => (
    <div className="relative">
      <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
        <div className="text-3xl font-serif font-bold text-primary-600 mb-2">{index + 1}</div>
        <h3 className="text-lg font-serif font-bold mb-2">{step.title}</h3>
        <p className="text-neutral-700">{step.description}</p>
      </div>
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-1/2 -right-8 w-6 h-0.5 bg-primary-300" />
      )}
    </div>
  ))}
</div>
```

#### Benefits Section
- Grid: 1 mobile, 2 tablet, 3 desktop
- Icon + Title + Description per benefit
- Icons: checkmark, lightbulb, heart, etc. (earth tone)

Card styling:
- Background: neutral-50
- Icon background: earth-tan or primary-100
- Text: neutral-900
- Border: subtle neutral-200

#### Evidence/Research Section
Content:
- Statistics with icons: "X% of patients see improvement"
- Scientific foundation: Brief explanation
- Research sources: Links or citations
- Quote: Testimonial or expert perspective

Styling:
- Large numbers: h2 serif, primary-600
- Supporting text: neutral-700
- Section background: primary-50
- Padding: py-12 md:py-20

#### FAQ Section (EMDR-Specific)
- Accordion similar to main FAQs page
- Common EMDR questions
- Integration with Rates page for pricing info

### Responsive Design Considerations
- Step flow: Arrows hidden on mobile, visible on tablet/desktop
- Icons: Slightly larger on desktop (48px vs 32px)
- Section padding: Consistent py-12 md:py-20
- Text: Readable sizes on all devices
- Layout: Single-column mobile, multi-column desktop

### Dependencies
- Depends on Phase 1 (design tokens)
- Depends on Phase 2 (header styling)
- Depends on Phase 3 (button/card components)

### Success Criteria
- EMDR process clearly explained and visually engaging
- Educational content supports therapeutic trust-building
- Animations smooth and not distracting
- Mobile users can follow step-by-step explanation
- Research/evidence section credible and accessible
- Clear path to scheduling/contact from page

---

## Phase 7: Contact Page Redesign (Week 4)

### Objectives
- Create welcoming contact page with multiple engagement options
- Implement accessible form with proper validation
- Display contact information clearly
- Add map integration (if applicable)
- Build trust with transparency and responsiveness

### Files to Modify
- `src/app/contact/page.tsx` (major restructure)
- Create `src/components/contact-form.tsx` (new component)
- Create `src/components/contact-info-block.tsx` (new component)
- Create `src/components/map-embed.tsx` (new component, optional)

### Implementation Details

#### Contact Hero Section
- Similar to other page heroes
- Headline: "Get in Touch"
- Subheading: Warm, reassuring message
- Padding: py-12 md:py-16

#### Contact Methods Grid
- Three-column layout (desktop): phone, email, address
- Mobile: Stacked single column

Card structure:
- Icon: 48px, earth tone background
- Title: h3 serif, primary-900
- Content: Link or text, neutral-700
- Hover effect: bg color change, text color change

Colors:
- Background: neutral-50 or primary-50
- Icon bg: earth-tan, earth-sage, or earth-brown
- Borders: subtle
- Links: primary-600, hover primary-700

```tsx
<div className="grid md:grid-cols-3 gap-6">
  {contacts.map(contact => (
    <div className="bg-primary-50 rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-earth-tan p-4 rounded-lg">{contact.icon}</div>
      </div>
      <h3 className="text-lg font-serif font-bold mb-2">{contact.title}</h3>
      <a href={contact.link} className="text-primary-600 hover:text-primary-700">
        {contact.value}
      </a>
    </div>
  ))}
</div>
```

#### Contact Form
HTML5 form with validation

Fields:
- Name (text input)
- Email (email input)
- Phone (tel input, optional)
- Subject (text input)
- Message (textarea)
- Checkbox: Consent/privacy agreement
- Submit button

Styling:
- Input background: white
- Input border: border-2 border-neutral-200
- Input focus: border-primary-600, ring-2 ring-primary-500/10
- Label: font-serif, font-semibold, text-neutral-900
- Error text: text-error, text-sm
- Helper text: text-neutral-600, text-sm
- Button: primary variant, full-width on mobile
- Label spacing: mb-2
- Input spacing: mb-4
- Form spacing: space-y-6

```tsx
<form className="space-y-6" onSubmit={handleSubmit}>
  <div>
    <label className="block text-sm font-semibold text-neutral-900 mb-2">
      Your Name
    </label>
    <input
      type="text"
      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-600 focus:ring-2 focus:ring-primary-500/10"
      required
    />
  </div>
  {/* Other fields */}
  <button className="w-full md:w-auto bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors">
    Send Message
  </button>
</form>
```

#### Map Integration (Optional)
- Embedded Google Map or similar
- Container: rounded-lg overflow-hidden, shadow-md
- Height: 400px mobile, 500px desktop
- Border: subtle neutral-200

```tsx
<div className="rounded-lg overflow-hidden shadow-md h-96 md:h-[500px]">
  <iframe
    src="[MAP_EMBED_URL]"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  />
</div>
```

#### Response Message Section
- Reassurance section below form
- Heading: "What to Expect"
- 3-4 bullet points
- Warm, professional tone
- Expected response time
- Privacy assurance

Styling:
- Background: primary-50
- Icon: checkmark or envelope
- Text: neutral-700
- Padding: p-6, rounded-lg, border-l-4 border-primary-600

### Responsive Design Considerations
- Form: Full-width on mobile, max-w-2xl on desktop
- Contact info grid: Stacked mobile, 2-3 columns tablet/desktop
- Map: 100% width, min-height 300px mobile, 500px desktop
- Button: Full-width on mobile, auto width on desktop
- Spacing: Consistent py-12 md:py-20 for sections

### Dependencies
- Depends on Phase 1 (design tokens)
- Depends on Phase 2 (header styling)
- Depends on Phase 3 (button/card components)

### Success Criteria
- Contact information easily accessible
- Form accessible (proper labels, error messages, focus states)
- Submission handling functional (email integration or service)
- Mobile form UX smooth (no horizontal scrolling)
- Map responsive and properly embedded
- Clear privacy/consent messaging
- All form validations work correctly

---

## Phase 8: Cross-Browser Testing & Optimization (Week 5)

### Objectives
- Validate design across all major browsers and devices
- Optimize performance (Core Web Vitals)
- Ensure accessibility compliance (WCAG 2.1 AA)
- Fix responsive design issues
- Optimize images and assets
- Test form submissions and interactions

### Testing Domains

#### Browser Compatibility
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest, macOS & iOS)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

#### Device Testing
- Desktop: 1440px, 1920px, 2560px
- Tablet: iPad (768px), iPad Pro (1024px)
- Mobile: iPhone SE (375px), iPhone 14 Pro (390px), Android (360px)

#### Accessibility Audit
- Color contrast (minimum 4.5:1 for text)
- Keyboard navigation (Tab, Enter, Escape)
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Focus indicators visible on all interactive elements
- Form labels properly associated with inputs
- ARIA labels where necessary
- Alt text for all images
- Proper heading hierarchy (h1→h6)
- No missing language attributes
- Semantic HTML usage

#### Performance Optimization
- Core Web Vitals (LCP, FID, CLS)
- Page load time < 3 seconds (3G connection)
- Image optimization (next/image with proper sizes)
- Code splitting (dynamic imports for large components)
- CSS purging (Tailwind unused styles removal)
- Font loading strategy (font-display: swap)
- Minified production builds
- CSS-in-JS eliminated (using Tailwind)
- Third-party script optimization
- Service Worker (optional, for PWA features)

### Files to Audit
- All component files for accessibility
- `next.config.ts` for performance
- `tailwind.config.ts` for optimization settings
- Images in `public/images/` for sizing
- Form components for validation and error handling

### Testing Checklist
- [ ] All pages load without console errors
- [ ] No layout shifts on load (CLS < 0.1)
- [ ] All images display properly on all devices
- [ ] Forms submit and handle responses
- [ ] Mobile menu opens/closes smoothly
- [ ] Navigation links work on all pages
- [ ] Hover states render correctly (no mobile issues)
- [ ] Print styles work (media: print)
- [ ] Keyboard navigation fully functional
- [ ] Focus rings visible on all interactive elements
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Responsive breakpoints work as intended
- [ ] No horizontal scroll on any page at any breakpoint
- [ ] Footer visible and functional
- [ ] External links open correctly
- [ ] Social media links (if present) work

### Performance Targets
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
- First Contentful Paint (FCP): < 1.8s
- Time to Interactive (TTI): < 3.8s

### Browser-Specific Fixes
Document any issues found:
- [ ] Safari-specific CSS issues
- [ ] Firefox rendering differences
- [ ] Mobile Safari viewport issues
- [ ] Android Chrome compatibility
- [ ] Focus ring styling differences
- [ ] Font rendering variations

### Dependencies
- Depends on all previous phases (1-7)

### Success Criteria
- All pages render correctly on all tested browsers/devices
- WCAG 2.1 AA accessibility compliance achieved
- Core Web Vitals in "Good" range
- No console errors in production
- Form interactions fully functional
- No layout shifts or unexpected behavior
- Performance benchmarks met

---

## Implementation Timeline Estimates

### Sequential Approach (Conservative)

| Phase | Duration | Start | End |
|-------|----------|-------|-----|
| 1: Design System | 1-2 weeks | Week 1 | Week 2 |
| 2: Header & Nav | 1-2 weeks | Week 2 | Week 3 |
| 3: Home Page | 1-2 weeks | Week 3 | Week 4 |
| 4: About Page | 1 week | Week 4 | Week 5 |
| 5: Services/Rates/FAQs | 1-2 weeks | Week 5 | Week 6 |
| 6: EMDR Page | 1 week | Week 6 | Week 7 |
| 7: Contact Page | 1 week | Week 7 | Week 8 |
| 8: Testing & Optimization | 1 week | Week 8 | Week 9 |
| **Total** | **8-9 weeks** | | |

### Parallel Approach (Optimized)

| Timeline | Activities | Duration |
|----------|------------|----------|
| Weeks 1-2 | Phase 1 (Design System) + Phase 2 (Header) | 2 weeks |
| Weeks 2-3 | Phase 3 (Home Page) + Phase 4 (About Page) | 1-2 weeks |
| Weeks 3-4 | Phase 5 (Services/Rates/FAQs) | 1-2 weeks |
| Week 4 | Phase 6 (EMDR) + Phase 7 (Contact) | 1 week |
| Week 5 | Phase 8 (Testing & Optimization) | 1 week |
| **Total** | **Compressed Timeline** | **5-6 weeks** |

### Phase-by-Phase Time Breakdown
- **Phase 1:** 10-15 hours (design decisions, configuration, documentation)
- **Phase 2:** 8-12 hours (component refactor, mobile improvements)
- **Phase 3:** 12-16 hours (hero, cards, CTAs, responsive testing)
- **Phase 4:** 8-12 hours (layout restructure, bio sections, testimonials)
- **Phase 5:** 12-16 hours (three pages, table, accordion, grid layouts)
- **Phase 6:** 8-12 hours (process flow, cards, evidence section)
- **Phase 7:** 8-12 hours (form component, contact blocks, validation)
- **Phase 8:** 10-15 hours (testing, bug fixes, optimization)
- **Total:** 76-112 hours (2-3 weeks full-time work)

### Dependencies & Scheduling Notes
- Phase 1 (Design System) must complete before other phases can start
- Phase 2 (Header) can start immediately after Phase 1 begins
- Phases 3-7 (page redesigns) can proceed in parallel once Phase 1 completes
- Phase 8 (Testing) should follow all other phases but can start on earlier phases
- Design decisions must be finalized before Phase 1 starts
- Image assets should be prepared before page redesigns begin

---

## Success Metrics

### Design System Metrics
- [ ] 100% of hardcoded colors replaced with design tokens
- [ ] Typography scale applied consistently across all pages
- [ ] Spacing follows 8px grid system
- [ ] Component library documented with examples
- [ ] Zero color accessibility violations
- [ ] Design tokens documented in code comments

### User Experience Metrics
- [ ] Mobile navigation usability score: 95%+
- [ ] Form completion rate: target-dependent
- [ ] Page load time: < 3 seconds (3G)
- [ ] User engagement: scroll depth improvement
- [ ] Bounce rate: reduction of 10%+
- [ ] Session duration: increase of 20%+

### Accessibility Metrics
- [ ] WCAG 2.1 AA compliance: 100% pass rate
- [ ] Keyboard navigation: fully functional
- [ ] Screen reader compatibility: tested on 3+ readers
- [ ] Color contrast: 100% of text meets 4.5:1 minimum
- [ ] Focus indicators: visible on all interactive elements
- [ ] Form accessibility: proper labels, error messages

### Performance Metrics
- [ ] Largest Contentful Paint (LCP): < 2.5s
- [ ] Cumulative Layout Shift (CLS): < 0.1
- [ ] First Input Delay (FID): < 100ms
- [ ] Total page size: < 2MB (compressed)
- [ ] Lighthouse score: 90+ (all categories)
- [ ] Time to Interactive: < 3.8s

### Browser Compatibility Metrics
- [ ] Chrome: Latest (100%)
- [ ] Safari: Latest (100%)
- [ ] Firefox: Latest (100%)
- [ ] Edge: Latest (100%)
- [ ] Mobile Safari: Latest (100%)
- [ ] Mobile Chrome: Latest (100%)

### Responsive Design Metrics
- [ ] Mobile (320px): All pages fully functional
- [ ] Tablet (768px): All pages properly laid out
- [ ] Desktop (1024px+): Full feature set available
- [ ] Zero horizontal scrolling on any device
- [ ] Touch targets: ≥44x44px on mobile
- [ ] Readable text sizes: ≥16px on mobile

### Content Metrics
- [ ] Heading hierarchy: Proper h1→h6 structure
- [ ] Line length: 50-75 characters (optimal readability)
- [ ] Line height: 1.5+ for body text
- [ ] Font sizes: Semantic sizing with proper scaling
- [ ] Color contrast: Text over backgrounds meets WCAG AA
- [ ] Image alt text: 100% coverage

### Stakeholder Metrics
- [ ] Design approval: All phases reviewed and approved
- [ ] Brand alignment: Design reflects Pacific Northwest aesthetic
- [ ] Client satisfaction: 95%+ approval rating
- [ ] Future maintainability: Codebase documented and organized
- [ ] Extensibility: Design system ready for future features
- [ ] Performance: Meets business SLA requirements

---

## Post-Refactor Maintenance

### Regular Updates (Monthly)
- Review analytics for user engagement
- Monitor Core Web Vitals
- Check accessibility compliance
- Update component library if needed
- Audit broken links/forms
- Update testimonials/reviews

### Quarterly Reviews (Every 3 Months)
- Conduct user testing on new design
- Review accessibility compliance (full audit)
- Analyze performance metrics
- Gather stakeholder feedback
- Plan Phase 2 enhancements (nautical elements)
- Review analytics trends

### Annual Audit (Yearly)
- Full WCAG 2.1 compliance review
- Security audit (forms, data handling)
- Performance optimization pass
- Design system expansion (if needed)
- Browser compatibility updates
- Plan for next design iteration

---

## Phase 2 Future: Subtle Nautical Elements (Post-Launch)

### Future Considerations (Not in Scope)
- Subtle wave patterns in backgrounds
- Nautical color accents (navy, teal)
- Ocean-inspired illustrations
- Wave dividers between sections
- Anchor or sailing iconography
- Coastal photography integration
- Watercolor backgrounds
- Lighthouse or beacon illustrations

### Phase 2 Will Include
- Design token additions (new accent colors)
- Component updates (wave dividers, patterns)
- Image library expansion
- Animation additions (wave scrolling effects)
- Optional theme toggle (light/dark with nautical twist)

---

## Appendix: File Organization Structure

```
src/
├── app/
│   ├── layout.tsx (updated)
│   ├── page.tsx (REFACTORED - Phase 3)
│   ├── about/
│   │   └── page.tsx (REFACTORED - Phase 4)
│   ├── contact/
│   │   └── page.tsx (REFACTORED - Phase 7)
│   ├── emdr/
│   │   └── page.tsx (REFACTORED - Phase 6)
│   ├── faqs/
│   │   └── page.tsx (REFACTORED - Phase 5)
│   ├── rates/
│   │   └── page.tsx (REFACTORED - Phase 5)
│   └── services/
│       └── page.tsx (REFACTORED - Phase 5)
├── components/
│   ├── about-hero.tsx (NEW - Phase 4)
│   ├── accordion.tsx (NEW - Phase 5)
│   ├── bio-card.tsx (NEW - Phase 4)
│   ├── bookingLink.tsx (REVIEW)
│   ├── button.tsx (NEW - Phase 1, reusable)
│   ├── card.tsx (NEW - Phase 1, base component)
│   ├── contact-form.tsx (NEW - Phase 7)
│   ├── contact-info-block.tsx (NEW - Phase 7)
│   ├── cta-section.tsx (NEW - Phase 3)
│   ├── emdr-hero.tsx (NEW - Phase 6)
│   ├── footer.tsx (REFACTORED - Phase 1)
│   ├── header.tsx (REFACTORED - Phase 2)
│   ├── hero-section.tsx (NEW - Phase 3)
│   ├── info-block.tsx (NEW - Phase 6)
│   ├── map-embed.tsx (NEW - Phase 7)
│   ├── mobile-menu.tsx (NEW - Phase 2)
│   ├── nav-link.tsx (NEW - Phase 2)
│   ├── pricing-table.tsx (NEW - Phase 5)
│   ├── service-card.tsx (NEW - Phase 3)
│   ├── service-detail-card.tsx (NEW - Phase 5)
│   ├── step-card.tsx (NEW - Phase 6)
│   └── testimonial-section.tsx (NEW - Phase 4)
├── lib/
│   ├── constants/
│   │   ├── colors.ts (NEW - Phase 1)
│   │   └── typography.ts (NEW - Phase 1)
│   └── utils.ts (REVIEW)
└── styles/
    ├── design-tokens.css (NEW - Phase 1)
    └── globals.css (REFACTORED - Phase 1)
```

---

## Implementation Checklist

### Pre-Implementation
- [ ] Finalize all design decisions (colors, typography, spacing)
- [ ] Create design assets (hero images, icons, illustrations)
- [ ] Prepare content updates (copy for redesigned sections)
- [ ] Set up analytics tracking (Google Analytics, heat maps)
- [ ] Document current metrics (baseline for comparison)
- [ ] Create git branch for refactor work

### Phase 1 Checklist
- [x] Define all color tokens in hex format (Ticket 1 - deployed)
- [x] Define typography scale (Ticket 2 - deployed)
- [x] Set up Tailwind configuration with new tokens (Tickets 1-4 - deployed)
- [x] Create design-tokens.css file (Ticket 1 - deployed)
- [x] Create color constants file (Ticket 6 - deployed)
- [x] Create typography constants file (Ticket 7 - deployed)
- [x] Update globals.css with new theme variables (Ticket 3 - deployed)
- [x] Spacing and layout system (Ticket 3 - deployed)
- [x] Border radius and box shadow scales (Ticket 4 - deployed)
- [x] Container max-width configuration (Ticket 4 - deployed)
- [ ] Create reusable button component (Phase 1 - pending)
- [ ] Create reusable card component (Phase 1 - pending)
- [x] Document all design decisions (✅ All tickets documented)
- [ ] Get stakeholder approval (⏳ Pending)

### Phase 2 Checklist
- [ ] Refactor header component with new tokens
- [ ] Create nav-link component
- [ ] Create mobile-menu component
- [ ] Update all hardcoded colors to tokens
- [ ] Add focus states and keyboard navigation
- [ ] Test on mobile devices
- [ ] Validate accessibility
- [ ] Get stakeholder approval

### Phase 3 Checklist
- [ ] Create hero-section component
- [ ] Create service-card component
- [ ] Create cta-section component
- [ ] Refactor home page layout
- [ ] Optimize hero images
- [ ] Test responsive behavior
- [ ] Validate accessibility
- [ ] Get stakeholder approval

### Phases 4-7 Checklist (Per Page)
- [ ] Restructure page layout
- [ ] Create required components
- [ ] Apply design system styles
- [ ] Optimize images and assets
- [ ] Test responsive behavior
- [ ] Validate accessibility
- [ ] Test forms and interactions
- [ ] Get stakeholder approval

### Phase 8 Checklist
- [ ] Test on Chrome (latest)
- [ ] Test on Firefox (latest)
- [ ] Test on Safari (latest)
- [ ] Test on Edge (latest)
- [ ] Test on mobile Safari (iOS)
- [ ] Test on mobile Chrome (Android)
- [ ] Run full accessibility audit
- [ ] Run Lighthouse audit
- [ ] Optimize images and assets
- [ ] Check Core Web Vitals
- [ ] Verify all forms work
- [ ] Fix any bugs found
- [ ] Get final approval

### Post-Implementation
- [ ] Deploy to staging for final review
- [ ] Create migration guide for team
- [ ] Update documentation
- [ ] Monitor analytics for changes
- [ ] Plan Phase 2 (nautical elements)
- [ ] Schedule quarterly reviews

---

## Notes & Considerations

### Color Accessibility
- All text colors must have minimum 4.5:1 contrast ratio against backgrounds
- Use WebAIM contrast checker to validate combinations
- Consider colorblind-friendly palette (avoid red-green dependency)
- Test color combinations in actual design mockups

### Typography Accessibility
- Body text: minimum 16px on mobile
- Line height: minimum 1.5 for readability
- Line length: 50-75 characters for optimal scanning
- Font weights: avoid using very light weights (< 400) for body text
- Ensure proper hierarchy for screen reader navigation

### Responsive Design Best Practices
- Mobile-first approach: base styles for mobile, enhance with media queries
- Touch targets: minimum 44x44px for interactive elements
- Avoid hover-only interactions (not available on mobile)
- Test on real devices, not just browser dev tools
- Consider landscape orientation on mobile devices
- Account for safe areas (notches, rounded corners on modern phones)

### Performance Optimization
- Use `next/image` for all images with proper sizing
- Implement lazy loading for below-the-fold images
- Minimize CSS and JavaScript
- Use CSS Grid for complex layouts (better performance than flexbox)
- Consider CSS containment for component isolation
- Implement CSS Grid for form layouts

### Version Control
- Create feature branches for each phase
- Use descriptive commit messages
- Review code before merging to main
- Tag releases with version numbers (v1.0.0, v1.1.0, etc.)
- Maintain changelog for tracking changes

### Documentation
- Add comments to complex Tailwind class combinations
- Document component props and usage
- Create README for design system
- Update main project README with design system info
- Create style guide/design tokens reference

---

## Success Story: Expected Outcomes

### Visual Transformation
- From: Coral accents, fragmented color use, dated aesthetic
- To: Cohesive earth tone palette, warm greens, Pacific Northwest warmth
- Impact: Professional, welcoming, trustworthy brand perception

### User Experience Improvement
- Faster page loads (optimized images, code splitting)
- Better mobile experience (touch-friendly, responsive)
- Clearer information architecture (proper hierarchy)
- Improved navigation (header refactor, better links)
- More accessible (WCAG 2.1 AA compliance)

### Business Impact
- Increased trust through professional design
- Improved conversion rates (clear CTAs, better UX)
- Reduced bounce rate (engaging pages, performance)
- Better SEO through structured markup and performance
- Foundation for future features (design system ready)

### Team Benefits
- Reusable component library for faster development
- Design token system for consistency
- Documented processes and standards
- Easier maintenance and updates
- Scalable architecture for growth

---

## Ticket Tracking

### Ticket 1: Finalize Color Palette ✅ COMPLETE

**Completed:** February 11, 2026

**Deliverables:**
- [x] Chosen primary color: Terracotta (#A55D35)
- [x] Created full Terracotta scale (11 shades: primary-50 through primary-950)
- [x] Tested WCAG AA contrast ratios on critical combinations
- [x] Mapped 10 earth tone colors from palette
- [x] Defined neutral palette (navy/teal/cream/taupe)
- [x] Established button text strategy (white text on Terracotta)
- [x] Established body text color (Deep Navy #1F3E52 on light backgrounds)
- [x] Defined semantic colors (success, warning, error, info)
- [x] Created `/tailwind.config.ts` with full color theme
- [x] Created `/src/styles/design-tokens.css` with CSS variables
- [x] Created `/src/lib/constants/colors.ts` with TypeScript constants

**Files Created:**
1. `tailwind.config.ts` - Tailwind theme configuration with all color tokens, typography, spacing, shadows
2. `src/styles/design-tokens.css` - CSS custom properties for colors and semantic utilities
3. `src/lib/constants/colors.ts` - TypeScript constants for programmatic color access

**Status:** Ready for next phase. Color system is production-ready and can be applied to components.

---

### Ticket 2: Typography System ✅ COMPLETE

**Completed:** February 12, 2026

**Deliverables:**
- [x] Selected primary font: Montserrat (weights: 200, 300, 400, 500, 600, 700, 800, 900)
- [x] Selected accent font: Nothing You Could Do (weight: 400)
- [x] Selected alternate fonts: Quicksand, Shadows Into Light Two
- [x] Defined heading scale (h1: 48px → h6: 18px)
- [x] Defined body text: 16px, line-height 1.6
- [x] Defined additional sizes: small (14px), caption (12px)
- [x] Set font weights: 200 (Extralight), 400 (Regular), 600 (Semibold), 700 (Bold)
- [x] Added letter spacing standards
- [x] Created `/src/lib/constants/typography.ts` with TypeScript constants
- [x] Updated `/src/styles/design-tokens.css` with typography CSS variables
- [x] Updated `/tailwind.config.ts` with font family configuration
- [x] Added Google Fonts imports to `src/app/layout.tsx`

**Font Strategy:**
- **Montserrat:** Primary font for all headings and body text
  - H1-H2: Weight 200 (Extralight), -0.02em letter-spacing
  - H3-H4: Weight 400 (Regular)
  - H5-H6: Weight 600 (Semibold)
  - Body: Weight 400, 1.6 line-height
- **Nothing You Could Do:** Accent/special emphasis (testimonials, quotes)
- **Quicksand:** Alternate modern sans-serif option
- **Shadows Into Light Two:** Alternate decorative/handwriting font
- **Geist Mono:** Code/technical content

**Files Created/Modified:**
1. `src/lib/constants/typography.ts` - Typography constants and type definitions
2. `src/styles/design-tokens.css` - CSS variables for typography
3. `tailwind.config.ts` - Font family extensions
4. `src/app/layout.tsx` - Google Fonts integration

**Status:** Ready for next phase. Typography system fully integrated and ready for component implementation.

---

### Ticket 3: Spacing & Layout System ✅ COMPLETE

**Completed:** February 12, 2026

**Deliverables:**
- [x] Confirmed 4px base spacing unit (already implemented in Tailwind)
- [x] Set container max-width: 1280px (centered on larger screens)
- [x] Defined responsive gutter widths:
  - Mobile (< 640px): 16px padding (px-4)
  - Tablet (640-1024px): 24px padding (md:px-6)
  - Desktop (1024px+): 40px padding (lg:px-10)
  - **Implemented in `src/styles/globals.css` (body padding)**
- [x] Set component padding standards:
  - Hero sections: py-16 (64px) or py-20 (80px)
  - Content sections: py-12 (48px) or py-16 (64px)
  - Cards: p-6 (24px)
  - Buttons: px-4 py-3 (16px horizontal, 12px vertical)
  - Section gaps: space-y-12 or space-y-16
- [x] Defined margin collapse strategy using Tailwind space-y utilities
- [x] Confirmed default Tailwind responsive breakpoints (sm, md, lg, xl)
- [x] Added container max-width to `tailwind.config.ts`

**Spacing Scale (4px base unit):**
- 1: 4px
- 2: 8px
- 3: 12px
- 4: 16px
- 5: 20px
- 6: 24px
- 8: 32px
- 10: 40px
- 12: 48px
- 16: 64px

**Design System Complete:**
All four foundational tickets are now complete:
1. ✅ Ticket 1: Color Palette
2. ✅ Ticket 2: Typography System
3. ✅ Ticket 3: Spacing & Layout System
4. ✅ Ticket 4: Tailwind Configuration

---

### Ticket 4: Tailwind Configuration Complete ✅ COMPLETE

**Completed:** February 12, 2026

**Deliverables:**
- [x] Container max-width: 1280px configured
- [x] Border radius scale: 4px, 8px, 12px, 16px, full
- [x] Box shadows: Warm rust-tinted (using Deep Rust Accent #6B4C3A)
  - sm: 5% opacity
  - md/lg/xl: 10% opacity
- [x] All Tailwind theme values complete and aligned with design system
- [x] Updated globals.css theme colors to match new palette
- [x] Added full-width utility class for full-bleed sections
---

## Future Review: TypeScript Constant Files Necessity

**Status:** To Be Reviewed in Phase 3+  
**Files in Question:**
- `src/lib/constants/colors.ts` — TypeScript color constant definitions
- `src/lib/constants/typography.ts` — TypeScript typography constant definitions

**Context:**
Phase 1 created both TypeScript constant files and Tailwind configuration entries with identical values. This creates redundancy:
- **Colors:** Defined in both `tailwind.config.ts` theme AND `colors.ts` constants
- **Typography:** Defined in both `tailwind.config.ts` fontWeight AND `typography.ts` constants

**Observation:** Currently, all styling is done via Tailwind utilities (classNames). The TypeScript constants may not be used.

**Action Item:** After Phase 3 (component refactoring), audit actual usage:
- If only using Tailwind utilities in `className` → Consider removing TypeScript constants (single source of truth)
- If using programmatic styling (style objects, library integrations) → Keep both with clear documentation
- If mixed usage → Establish pattern for when to use which approach

**Decision for Now:** Keep both files. Will assess necessity after components are built and patterns are clear.