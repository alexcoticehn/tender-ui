import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'var(--font-primary)',
        accent: 'var(--font-accent)',
        alternate1: 'var(--font-alternate-1)',
        alternate2: 'var(--font-alternate-2)',
        mono: 'var(--font-mono)',
      },
    },
  },
  plugins: [],
};

export default config;
