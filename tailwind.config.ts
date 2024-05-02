import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '100vh': '100vh',
        '50vh': '50vh',
        '600': '600px',
      },
      minWidth: {
        '600': '600px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      height: {
        'topic-banner-pc': '594px',
        'topic-banner-tablet': '310px',
        'topic-banner-mobile': '230px',
      },
      textShadow: {
        default: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      gridTemplateColumns: {
        '.65': '.65fr 1fr',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
