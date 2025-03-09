/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155'
        }
      }
    }
  },
  plugins: [],
  safelist: [
    'from-[#10B981]',
    'to-[#14B8A6]',
    'from-[#A855F7]',
    'to-[#EC4899]',
    'from-[#3B82F6]',
    'to-[#06B6D4]',
    'from-[#F59E0B]',
    'to-[#F97316]',
    'text-[#10B981]',
    'text-[#A855F7]',
    'text-[#3B82F6]',
    'text-[#F59E0B]'
  ]
}