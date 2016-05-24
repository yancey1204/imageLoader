var path = require ('path');

var TASK = process.env.npm_lifecycle_event;

//-----------------------
// PRODUCTION Settings |
//-----------------------
if (TASK === 'build') {
  module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
      path: path.join(__dirname, 'assets'),
      filename: 'bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['es2015'],
          },
        },
      ],
    },
  };
}
