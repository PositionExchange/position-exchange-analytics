module.exports = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx}',
    // './components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C1C28',
        charade: 'rgba(120, 122, 145, 0.5)',
        secondary: '#302E4C',
        'txt-primary': '#F7F7F7',
        'txt-secondary': '#87859F',
        'gun-powder': '#3A3953',
        mineShaft: '#2D2D3D',
        'mineShaft-30': 'rgba(45, 45, 61, 0.3)',
      },
      maxHeight: {
        180: '11.25rem',
        120: '7.5rem',
      },
      height: {
        180: '11.25rem',
        150: '9.4rem',
        120: '7.5rem',
        400: '25rem',
      },
      width: {
        180: '11.25rem',
        150: '9.4rem',
        120: '7.5rem',
        400: '25rem',
      },
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}
