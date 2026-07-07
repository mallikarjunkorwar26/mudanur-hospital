/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0D9488',
          blueDark: '#115E59',
          teal: '#16A34A',
          bg: '#F2FBF8',
          wash: '#EAF8F5',
          surface: '#ECFDF5',
          ink: '#0F172A',
          mute: '#475569',
          line: '#D1E8E1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif']
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px'
      },
      boxShadow: {
        soft: '0 2px 6px -1px rgba(15, 23, 42, 0.06), 0 4px 16px -4px rgba(15, 23, 42, 0.06)',
        softLg: '0 6px 18px -4px rgba(15, 23, 42, 0.08), 0 10px 28px -8px rgba(15, 23, 42, 0.08)',
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 12px -2px rgba(15, 23, 42, 0.06)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        softPulse: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(37, 99, 235, 0.35)' },
          '50%': { boxShadow: '0 0 0 10px rgba(37, 99, 235, 0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out both',
        fadeUp: 'fadeUp 0.6s ease-out both',
        softPulse: 'softPulse 2.4s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
