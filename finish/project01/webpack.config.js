const path = require('path');

module.exports = {
  entry: './src/app/app.module.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 3000, // configuring port for localserver
    contentBase: './src' // configuring from where content needs to be served
  }
};