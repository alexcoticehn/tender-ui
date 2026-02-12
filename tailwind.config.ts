import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5EDE5',
          100: '#EDD9CC',
          200: '#E0BFA8',
          300: '#D4A584',
          400: '#C78B5F',
          500: '#A55D35', // Terracotta - primary brand
          600: '#945228',
          700: '#7d451f',
          800: '#663916',
          900: '#4f2d0d',
          950: '#382008',
        },
        earth: {
          tan: '#F0EDE5', // Cream Beige
          brown: '#6B4C3A', // Deep Rust Accent
          sage: '#5C7A68', // Sage Olive Green
          moss: '#3F6A5C', // Muted Teal Green
        },
        accent: {
          sage: '#5C7A68', // Sage Olive Green
          ochre: '#C196AB', // Golden Olive/Ochre Highlight
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
        success: '#2D6A4F',
        warning: '#D4A574',
        error: '#A64253',
        info: '#3A5F70',
      },
      fontFamily: {
        serif: 'var(--font-serif, serif)',
        sans: 'var(--font-sans, sans-serif)',
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
      opacity: {
        0: '0',
        5: '0.05', // Subtle backgrounds
        10: '0.1', // Delicate overlays
        20: '0.2', // Light overlays
        25: '0.25', // Quarter opacity
        30: '0.3', // Hover states
        40: '0.4', // Active states
        50: '0.5', // Medium opacity
        60: '0.6', // Disabled states
        70: '0.7', // Dark overlays
        75: '0.75', // Three-quarter opacity
        80: '0.8', // Modal backdrops
        90: '0.9', // Nearly opaque
        95: '0.95', // Almost opaque
        100: '1', // Fully opaque
      },
    },
  },
  plugins: [],
};

export default config;
