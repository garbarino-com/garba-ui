module.exports = {
  context: __dirname + "/app",
  entry: "./lib/garbaui.js",
  output: {
  path: __dirname + "/dist/components",
      filename: "garbaui.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|scss)$/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                }
            }
        ],
        exclude: /node_modules/,
      },
    ]
  }
};
