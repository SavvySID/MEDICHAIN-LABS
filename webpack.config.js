const path = require('path');

module.exports = {
  entry: './src/index.js', // specify the entry point of your app
  output: {
    filename: 'bundle.js', // the name of the output bundle
    path: path.resolve(__dirname, 'dist'), // the output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // handle .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // handle .css files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development', // or 'production' depending on your environment
};
