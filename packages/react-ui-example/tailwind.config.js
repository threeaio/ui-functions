/** @type {import('tailwindcss').Config} */

const isMonorepo = process.env.MONOREPO === 'true';

console.log('isMonorepo here', isMonorepo);

const paths = isMonorepo
  ? {
      content: "../react-ui/dist/**/*.{js,ts,jsx,tsx}",
      preset: "@threeaio/react-ui/tailwind-preset"
    }
  : {
      content: "node_modules/@threeaio/react-ui/dist/**/*.{js,ts,jsx,tsx}",
      preset: "@threeaio/react-ui/tailwind-preset"
    };

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    paths.content
  ],
  presets: [
    require(paths.preset)
  ]
} 