/**
 * Color Constants
 * Centralized color definitions for use in React components and utilities
 */

// Primary Colors - Terracotta Scale
export const PRIMARY_COLORS = {
  50: '#F5EDE5',
  100: '#EDD9CC',
  200: '#E0BFA8',
  300: '#D4A584',
  400: '#C78B5F',
  500: '#A55D35', // Brand primary
  600: '#945228',
  700: '#7d451f',
  800: '#663916',
  900: '#4f2d0d',
  950: '#382008',
} as const;

// Earth Tone Palette
export const EARTH_COLORS = {
  tan: '#F0EDE5', // Cream Beige
  brown: '#6B4C3A', // Deep Rust Accent
  sage: '#5C7A68', // Sage Olive Green
  moss: '#3F6A5C', // Muted Teal Green
} as const;

// Accent Colors
export const ACCENT_COLORS = {
  sage: '#5C7A68', // Sage Olive Green
  ochre: '#C196AB', // Golden Olive/Ochre Highlight
} as const;

// Neutral Palette
export const NEUTRAL_COLORS = {
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
} as const;

// Semantic Colors
export const SEMANTIC_COLORS = {
  success: '#2D6A4F',
  warning: '#D4A574',
  error: '#A64253',
  info: '#3A5F70',
} as const;

// Text Colors
export const TEXT_COLORS = {
  primary: '#1F3E52', // Deep Navy
  secondary: '#3F6A5C', // Muted Teal
  tertiary: '#D9D2C7', // Soft Taupe
  inverse: '#FFFFFF', // White for dark backgrounds
} as const;

// Background Colors
export const BG_COLORS = {
  primary: '#FFFFFF',
  secondary: '#F0EDE5', // Cream Beige
  tertiary: '#D9D2C7', // Soft Taupe
  brand: '#A55D35', // Terracotta
} as const;

// Convenience exports
export const COLORS = {
  primary: PRIMARY_COLORS,
  earth: EARTH_COLORS,
  accent: ACCENT_COLORS,
  neutral: NEUTRAL_COLORS,
  semantic: SEMANTIC_COLORS,
  text: TEXT_COLORS,
  bg: BG_COLORS,
} as const;

// Type exports for TypeScript
export type PrimaryColor = keyof typeof PRIMARY_COLORS;
export type EarthColor = keyof typeof EARTH_COLORS;
export type AccentColor = keyof typeof ACCENT_COLORS;
export type NeutralColor = keyof typeof NEUTRAL_COLORS;
export type SemanticColor = keyof typeof SEMANTIC_COLORS;
export type TextColor = keyof typeof TEXT_COLORS;
export type BgColor = keyof typeof BG_COLORS;
