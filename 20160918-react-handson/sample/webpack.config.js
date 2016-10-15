module.exports = {
  entry: __dirname + "/src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "like-button.js"
  },
  module: {
    loaders: [
      {
        // exclude: /(node_modules|bower_components)/,
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  }
};
