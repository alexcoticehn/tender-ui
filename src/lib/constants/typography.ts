/**
 * Typography Constants
 * Font families, sizes, weights, and line heights
 */

// Font Families
export const FONTS = {
  primary: "'Montserrat', sans-serif",
  accent: "'Nothing You Could Do', cursive",
  alternate1: "'Quicksand', sans-serif",
  alternate2: "'Shadows Into Light Two', cursive",
  mono: "'Geist Mono', monospace",
} as const;

// Font Weights
export const FONT_WEIGHTS = {
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

// Typography Scale
export const TYPOGRAPHY = {
  // Headings
  h1: {
    fontSize: '48px',
    lineHeight: '1.2',
    fontWeight: FONT_WEIGHTS.extralight,
    letterSpacing: '-0.02em',
    fontFamily: FONTS.primary,
  },
  h2: {
    fontSize: '40px',
    lineHeight: '1.2',
    fontWeight: FONT_WEIGHTS.extralight,
    letterSpacing: '-0.02em',
    fontFamily: FONTS.primary,
  },
  h3: {
    fontSize: '32px',
    lineHeight: '1.3',
    fontWeight: FONT_WEIGHTS.regular,
    letterSpacing: '-0.01em',
    fontFamily: FONTS.primary,
  },
  h4: {
    fontSize: '24px',
    lineHeight: '1.3',
    fontWeight: FONT_WEIGHTS.regular,
    letterSpacing: '0em',
    fontFamily: FONTS.primary,
  },
  h5: {
    fontSize: '20px',
    lineHeight: '1.4',
    fontWeight: FONT_WEIGHTS.semibold,
    letterSpacing: '0em',
    fontFamily: FONTS.primary,
  },
  h6: {
    fontSize: '18px',
    lineHeight: '1.4',
    fontWeight: FONT_WEIGHTS.semibold,
    letterSpacing: '0.01em',
    fontFamily: FONTS.primary,
  },

  // Body Text
  body: {
    fontSize: '16px',
    lineHeight: '1.6',
    fontWeight: FONT_WEIGHTS.regular,
    letterSpacing: '0em',
    fontFamily: FONTS.primary,
  },
  small: {
    fontSize: '14px',
    lineHeight: '1.5',
    fontWeight: FONT_WEIGHTS.regular,
    letterSpacing: '0.01em',
    fontFamily: FONTS.primary,
  },
  caption: {
    fontSize: '12px',
    lineHeight: '1.4',
    fontWeight: FONT_WEIGHTS.regular,
    letterSpacing: '0.02em',
    fontFamily: FONTS.primary,
  },

  // Accent/Special Text
  accent: {
    fontSize: '20px',
    lineHeight: '1.4',
    fontWeight: FONT_WEIGHTS.regular,
    letterSpacing: '0em',
    fontFamily: FONTS.accent,
  },

  // Code/Monospace
  mono: {
    fontSize: '14px',
    lineHeight: '1.5',
    fontWeight: FONT_WEIGHTS.regular,
    letterSpacing: '0em',
    fontFamily: FONTS.mono,
  },
} as const;

// Convenience export for CSS
export const typographyClasses = {
  h1: 'text-5xl font-extralight leading-tight tracking-tighter',
  h2: 'text-4xl font-extralight leading-tight tracking-tighter',
  h3: 'text-3xl font-normal leading-snug tracking-tight',
  h4: 'text-2xl font-normal leading-snug',
  h5: 'text-xl font-semibold leading-relaxed',
  h6: 'text-lg font-semibold leading-relaxed tracking-wide',
  body: 'text-base font-normal leading-relaxed',
  small: 'text-sm font-normal leading-normal tracking-wide',
  caption: 'text-xs font-normal leading-relaxed tracking-widest',
  accent: 'text-xl font-normal leading-relaxed',
} as const;

// Type exports
export type TypographyKey = keyof typeof TYPOGRAPHY;
export type FontFamily = keyof typeof FONTS;
export type FontWeight = keyof typeof FONT_WEIGHTS;
