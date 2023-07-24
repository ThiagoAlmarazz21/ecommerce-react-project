/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Background: '#222'
      },

      keyframes: {
        'slide-up': {
          '0%': {
            bottom: '-30em'
          },
          '100%': {
            bottom: '0'
          }
        },

        'slide-down': {
          '0%': {
            bottom: '0'
          },
          '100%': {
            bottom: '-40em'
          }
        },

        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },

        'slide-right': {
          '0%': {
            right: '-40em'
          },
          '100%': {
            right: '0'
          }
        },
        
        'slide-left': {
          '0%': {
            right: '0'
          },
          '100%': {
            right: '-40em'
          }
        },

        'jump-forward' : {
          '0%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.1)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },

        'jump-forward-iconcheck' : {
          '0%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.2)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        }

      },

      animation: {
        'slide-up': 'slide-up .5s',
        'fade': 'fade-in 1s',
        'slide-down': 'slide-down .5s',
        'slide-right': 'slide-right .5s',
        'slide-left': 'slide-left .5s',
        'jump-forward': 'jump-forward .5s',
        'jump-forward-iconcheck': 'jump-forward-iconcheck .8s'

      }


    },
  },
  plugins: [],
}

