const { default: daisyui } = require("daisyui");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2563eb",

          secondary: "#1d4ed8",

          accent: "#38bdf8",

          neutral: "#231a2f",

          "base-100": "#f5f5f4",

          info: "#9ca3af",

          success: "#86efac",

          warning: "#fcd34d",

          error: "#e11d48",
        },
      },
    ], // 3 themes added from daisyui,
  },
};
