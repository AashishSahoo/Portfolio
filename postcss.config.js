export default {
    plugins: [
      (await import('@tailwindcss/postcss')).default,
      (await import('autoprefixer')).default,
    ],
  };
  