import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['col-span-2', 'row-span-2'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/img/hero.jpg')",
        about: "url('/assets/img/about.png')",
        testimonials: "url('/assets/img/testimonials.png')",
        product01: "url('/assets/img/product01.jpg')",
        product02: "url('/assets/img/product02.jpg')",
        product03: "url('/assets/img/product03.jpg')",
        product04: "url('/assets/img/product04.jpg')",
        product05: "url('/assets/img/product05.jpg')",
        product06: "url('/assets/img/product06.jpg')",
        customers: "url('/assets/img/customers.png')",
      },
      fontFamily: {
        title: ['var(--font-cormorant_garamond)'],
        body: ['var(--font-open_sans)'],
      },
    },
  },
  plugins: [],
};
export default config;
