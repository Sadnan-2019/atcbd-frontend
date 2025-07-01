// module.exports = {
//   content: ["./src/**/*.{html,js,jsx}"],

//   theme: {
//     extend: {},
//   },
//   daisyui: {
//     themes: [
//       {
//         mytheme: {
//           primary: "#3346d3",
//           secondary: "#0287D0",
//           accent: "#3A4256",
//           neutral: "#3d4451",
//           "base-100": "#ffffff",
//         },
//       },
//     ],
//   },
//   plugins: [require("daisyui")],
// };



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3B82F6",     // Tailwind blue-500
          "secondary": "#10B981",   // Tailwind emerald-500
          "accent": "#F59E0B",      // Tailwind amber-500
          "neutral": "#3D4451",     // Default DaisyUI neutral
          "base-100": "#FFFFFF",    // White background
          "info": "#0EA5E9",        // Sky-500
          "success": "#22C55E",     // Green-500
          "warning": "#FACC15",     // Yellow-400
          "error": "#EF4444",       // Red-500

          // Optional extra shades
          "primary-focus": "#2563EB",     // Blue-600
          "secondary-focus": "#059669",   // Emerald-600
          "accent-focus": "#D97706",      // Amber-600
        },
      },
    ],
    darkTheme: "mytheme", // optional: same theme for dark mode fallback
  },
  plugins: [require("daisyui")],
};
