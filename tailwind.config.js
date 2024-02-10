// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation:{
//         scale:"scaleBackground 2s infinite alternate"
//       },
//       keyframes:{
//         scaleBackground: {
//           "0% ":{
//             transform: "scale(1)"
//           },
//           "100%": {
//             transform: "scale(1.25)"
//           }
//         },
//       },
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config}*/
const tailwindConfig = {
  mode:"jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        scaleBackground: "scaleBackground 15s infinite alternate"
      },
      keyframes: {
        scaleBackground: {
          "0%": {
            transform: "scale(1)",
            animationTimingFunction: "ease-in-out", 
          },
          "100%": {
            transform: "scale(1.13)",
            animationTimingFunction: "ease-in-out", 
          },
        },
      },
      
    },
  },
  plugins: [],
}

export default tailwindConfig;
