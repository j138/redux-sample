module.exports = {
  entry: './src/index.jsx',
  output: {
    path: './',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    port: 8888,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
