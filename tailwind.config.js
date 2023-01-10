/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,vue}'],
  // 白名單
  safelist: ['bg-red-500', 'text-3xl', 'lg:text-4xl', 'h-[627px]'],
  darkMode: 'class', // 'media自動' or 'class手動'
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.2rem',
          // sm: '1.5rem',
          // lg: '2rem',
        },
      },
      spacing: {
        'main-span': '72px',
      },
      colors: {
        'fb-bg': '#18191a',
        'fb-header': '#242526',
        'fb-input': '#3a3b3c',
        'fb-popover': '#3e4042',
        'fb-active': '#323436',
        'fb-card': '#242526',
        fb: '#2e89ff',
      },
    },
  },
  daisyui: {
    logs: false,
    darkTheme: 'light', //  預設亮模式
    themes: [
      {
        light: {
          neutral: '#191D24', // 基本
          primary: '#570DF8',
          secondary: '#D926A9',
          accent: '#1FB2A6', // thirdly
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
          'base-100': '#ffffff', // 底色
        },
      },
      {
        dark: {
          'base-100': '#242424', // 底色
        },
      },
    ],
  },
  plugins: [require('daisyui')], // 以插件的方式引入
};
