import { ColorTokens, TypographyTokens } from '@glare-labs/tailwindcss-material-tokens'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,html,css}'
  ],
  theme: {
    extend: {},
    colors: {
      'transparent': 'transparent'
    },
    screens: {
      'compact': {
        max: '600px'
      },
      'medium': {
        min: '600px',
        max: '840px',
      },
      'expanded': {
        min: '840px',
        max: '1200px',
      },
      'large': {
        min: '1200px',
        max: '1600px',
      },
      'extra-large': {
        min: '1600px',
      },
    }
  },
  plugins: [
    ...ColorTokens.FullTokens,
    ...TypographyTokens.FullTokens,
  ],
}

