const path = require('path');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'js/main.min.js',
    path: path.resolve(__dirname, 'demo/'),
  },
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
  plugins: [
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'pwa-demo',
        filepath: './demo/service-worker.js',
        runtimeCaching: [{
          urlPattern: /[.]jpg$/,
          handler: 'cacheFirst'
        }],
        staticFileGlobs: [
          'demo/js/main.min.js',
          'demo/css/main.css',
          'demo/pwa/**.*',
        ],
        stripPrefix: 'demo/',
      }
    ),
  ],
};
