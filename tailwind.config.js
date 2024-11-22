/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
<<<<<<< HEAD
    extend: {},
=======
    extend: {
      colors: {
        'custom-black': {
          DEFAULT: '#0A0A0A',
          50: '#1A1A1A',
          100: '#2A2A2A',
          200: '#3A3A3A',
        },
        'custom-orange': {
          DEFAULT: '#FF6B35',
          50: '#FFB800',
          100: '#FF9800',
          200: '#FF6B35',
          light: '#FFE0B2',
        },
        'custom-text': {
          DEFAULT: '#FFFFFF',
          muted: '#B0B0B0',
          dark: '#1A1A1A',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))',
        'page-gradient': 'radial-gradient(circle at top center, #1A1A1A 0%, #0A0A0A 100%)',
        'page-gradient-intense': 'linear-gradient(to bottom, rgba(26,26,26,0.8) 0%, rgba(10,10,10,1) 100%)',
        'card-gradient': 'linear-gradient(45deg, rgba(255,184,0,0.1) 0%, rgba(255,107,53,0.1) 100%)',
        'button-gradient': 'linear-gradient(45deg, #FFB800 0%, #FF6B35 100%)',
        'hover-gradient': 'linear-gradient(45deg, #FF9800 0%, #FF6B35 100%)',
      },
      backgroundColor: {
        'semi-transparent': 'rgba(10, 10, 10, 0.8)',
      },
      textColor: {
        'primary': '#FFFFFF',
        'secondary': '#E0E0E0',
        'muted': '#B0B0B0',
        'accent': '#FFB800',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
>>>>>>> a27dbe6688d1b56c400df5fcc62266b77dad7307
  },
  plugins: [],
};
