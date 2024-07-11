module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sen', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        black: "#000000",
        darkGray: "#2E2E2E",
        white: "#FFFFFF",
        lightGray: "#D3D3D3",
        teal: "#00BFA6",
        orange: "#ff8a58",
        purple: "#800080",
        green: "rgb(82, 178, 155)",
        blue: "rgb(96, 155, 255)",
        rose: "rgb(233, 93, 144)",
        yellow: "rgb(235, 179, 85)",
        hoverColor: "rgb(117, 251, 253)",
        hoverColor2: "rgb(104, 196, 94)",
        newOrange: "rgb(235, 178, 108)",
        darkGrey2: '#181822',
        lightGrey2: '#8C8B90',
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        drawLine: {
          '0%': { height: '0' },
          '100%': { height: '100%' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-100%)' },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 1s ease-out',
        fadeInRight: 'fadeInRight 1s ease-out',
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeInDelayed: 'fadeIn 0.5s 0.5s ease-out forwards',
        fadeInDelayed2: 'fadeIn 0.5s 1s ease-out forwards',
        drawLine: 'drawLine 1.5s ease-out forwards',
        slideDown: 'slideDown 0.5s ease-out forwards',
        slideUp: 'slideUp 0.5s ease-in forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
