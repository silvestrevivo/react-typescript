const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node-module/
      }
    ]
  },
  devtool: 'source-map',
  watch: true,
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  }
}
