// postcss.config.js
module.exports = {
  map: true,
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
      sourcemap: true,
    }),
  ]
};
