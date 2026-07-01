import type { Config } from 'tailwindcss'

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
          50: '#e8eaf6',
          100: '#c5cbe9',
          200: '#9ea8d9',
          300: '#7285c9',
          400: '#4f6abd',
          500: '#042881',
          600: '#042374',
          700: '#031d63',
          800: '#021753',
          900: '#010e38',
          DEFAULT: '#042881',
        },
        secondary: {
          DEFAULT: '#0553DB',
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#1a75ff',
          500: '#0553DB',
          600: '#0442af',
          700: '#033183',
          800: '#022157',
          900: '#01102b',
        },
        orange: {
          DEFAULT: '#FA9A06',
          50: '#fef6e6',
          100: '#fde4b3',
          200: '#fcd180',
          300: '#fbbf4d',
          400: '#faac1a',
          500: '#FA9A06',
          600: '#c87b05',
          700: '#965c04',
          800: '#643d02',
          900: '#321f01',
        },
        gold: {
          DEFAULT: '#FDCB16',
          50: '#fff9e6',
          100: '#feefb3',
          200: '#fee580',
          300: '#fedb4d',
          400: '#fdd11a',
          500: '#FDCB16',
          600: '#caa212',
          700: '#987a0d',
          800: '#655109',
          900: '#332904',
        },
        red: {
          DEFAULT: '#8C0B1A',
          50: '#f2e6e8',
          100: '#d9b3b8',
          200: '#c08088',
          300: '#a74d58',
          400: '#8e1a28',
          500: '#8C0B1A',
          600: '#700915',
          700: '#540610',
          800: '#38040b',
          900: '#1c0205',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(250, 154, 6, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(250, 154, 6, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #042881 0%, #0553DB 50%, #042881 100%)',
      },
    },
  },
  plugins: [],
}
export default config
