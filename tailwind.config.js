/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          // core background shades
          purple: "#000",
          purpleMid: "#000",
          purpleLight: "#000",
        },
        accent: {
          orange: "#ff7a00",
          orangeSoft: "#ffb27a",
        },
        surface: {
          // glassy layers
          1: "rgba(255,255,255,0.02)",
          2: "rgba(255,255,255,0.04)",
          3: "rgba(255,255,255,0.06)",
        },
      },

      boxShadow: {
        // soft neon glow
        neon: "0 0 18px rgba(255,122,0,0.35)",
        neonSm: "0 0 12px rgba(255,122,0,0.18)",
      },

      backdropBlur: {
        xs: "2px",
      },

       fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        bounceSoft: "cubic-bezier(.2, .9, .2, 1)",
      },
    },
  },
  plugins: [],
}
