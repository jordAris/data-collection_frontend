import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#356BB3",
        secondary: "#FBB601",
        third: "#FFF3CB",
        fourth: "#6896D3",
      },
      fontFamily: {
        h1: ["Lovelace Text"],
        h2: ["Catamaran"],
        h3: ["Montserrat"]
      },
    },
  },
  plugins: [],
}
export default config
