module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
        hoverColor2: "rgb(175, 231, 127)",
        newOrange: "rgb(235, 178, 108)",
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%': {
            boxShadow: '0 0 5px #00ffcc, 0 0 10px #00ffcc, 0 0 20px #00ffcc, 0 0 30px #00ffcc',
          },
          '50%': {
            boxShadow: '0 0 20px #00ffcc, 0 0 30px #00ffcc, 0 0 40px #00ffcc, 0 0 50px #00ffcc',
          },
          '100%': {
            boxShadow: '0 0 5px #00ffcc, 0 0 10px #00ffcc, 0 0 20px #00ffcc, 0 0 30px #00ffcc',
          },
        },
      },
      animation: {
        glow: 'glow 1.5s infinite',
      },
    },
  },
  plugins: [],
}
