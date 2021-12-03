const path = require("path");
const SRC_DIR = path.join(__dirname, "client");
const DIST_DIR = path.join(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: path.join(SRC_DIR, "index.jsx"),
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
