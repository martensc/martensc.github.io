// postcss.config.js
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  map: isDev,
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
      sourcemap: isDev,
    }),
  ]
};
