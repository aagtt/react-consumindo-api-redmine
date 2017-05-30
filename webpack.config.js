var path = require("path");
module.exports = {
  entry: {
    app: ["./app/App.js"]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/public/", 
    filename: "bundle.js",
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }
    ]
  },
  devServer:{
    contentBase: './public',
    proxy:{
      '/api': {
        target: 'https://redmine.elotech.com.br',
        secure: false,
        pathRewrite: {'^/api': ''}
      }
    }
  }
}