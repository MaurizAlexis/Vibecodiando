/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000ff",
        panel: "#000000ff",
        accent: "#F5C518",
        muted: "#9CA3AF",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
}
