/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        themegold: '#efda7a',
        themesub: '#38bdf8',
      },
      screens: {
        xlg: '1400px',
        lg: '1000px',
        md: '768px',
        sm: '300px',
        // 예시로 추가한 중간 크기
        // 다른 스크린 크기도 필요에 따라 추가할 수 있습니다.
      },
    },
  },
  plugins: [],
};
