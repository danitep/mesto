<<<<<<< HEAD
// postcss.config.js

// подключите плагины в файл
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  // подключите плагины к PostCSS
  plugins: [
    // подключите autoprefixer
    autoprefixer,
    // cssnano при подключении нужно передать объект опций
    // { preset: default } говорит о том, что нужно использовать
    // стандартные настройки минификации
    cssnano({ preset: 'default' })
  ]
=======
// postcss.config.js

// подключите плагины в файл
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  // подключите плагины к PostCSS
  plugins: [
    // подключите autoprefixer
    autoprefixer,
    // cssnano при подключении нужно передать объект опций
    // { preset: default } говорит о том, что нужно использовать
    // стандартные настройки минификации
    cssnano({ preset: 'default' })
  ]
>>>>>>> 31c43c63a8bce379037f5cb78baf8313db936ddb
};