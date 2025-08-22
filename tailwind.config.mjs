/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,md,mdx,js,ts}"],
  theme: {
    extend: {
      colors: {
        slateDark: "#1E293B",
        slateLight: "#475569",
        moss: "#4F7D5C",
        mossLight: "#7BAF85",
        sand: "#F5F3EF",
        stone: "#D6D3D1",
      },
    },
  },
  plugins: [],
};
