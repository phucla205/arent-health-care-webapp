/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: '#FFFFFF'
        },
        dark: {
          500: '#414141',
          600: '#2E2E2E'
        },
        primary: {
          300: '#FFCC21',
          400: '#FF963C',
          500: '#EA6C00'
        },
        secondary: {
          300: '#8FE9D0'
        },
        gray: {
          400: '#777777'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        noto: ['Noto Sans JP', 'sans-serif']
      },
      backgroundImage: {
        'primary-300/400': 'linear-gradient(360deg, #FFCC21 0%, #FF963C 100%)'
      }
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          padding: '0 0.5rem',
          '@screen md': {
            maxWidth: '960px',
            padding: '0rem'
          },
          '@screen xl': {
            maxWidth: '960px'
          }
        },
        '.hexagon': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '120px',
          height: '135px',
          cursor: 'pointer',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          background: 'linear-gradient(36deg, #ffcc21 8.26%, #ff963c 91.18%)',
        },
        '.exercise-scroll': {
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#777777',
            '-webkit-border-radius': '6px',
            borderRadius: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            '-webkit-border-radius': '6px',
            borderRadius: '6px',
            background: '#ffcc21',
          }
        }
      });
    },
    require('@tailwindcss/line-clamp')
  ]
};