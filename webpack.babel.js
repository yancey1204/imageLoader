import webpack from 'webpack';
import path from 'path';

const TASK = process.env.npm_lifecycle_event;
//-----------------------
// DEVELOPMENT Settings |
//-----------------------
if (TASK === 'start' || TASK === 'watch' || !TASK) {
  module.exports = {
    devServer: {
      contentBase: '.',
      historyApiFallback: true,
      host: process.env.HOST,
      port: process.env.PORT || 3000,
      hot: true,
      noInfo: true,
      stats: { colors: true },
    },
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      path.join(__dirname, 'src', 'index'),
    ],
    output: {
      path: './assets',
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
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ],
  };
}
