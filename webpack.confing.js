module.exports = {
  // 다른 설정들...
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                path: "./postcss.config.js"
              }
            }
          },
          "sass-loader"
        ]
      }
    ]
  }
};
