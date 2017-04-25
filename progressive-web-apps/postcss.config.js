const cssnano = require('cssnano');
const postcssNested = require('postcss-nested');
const cssnext = require('postcss-cssnext');
const postcssImport = require('postcss-import');

module.exports = {
  plugins: [
    postcssImport(),
    postcssNested(),
    cssnext(),
    cssnano({ autoprefixer: false }), // autoprefixer runs in cssnext
  ],
};
