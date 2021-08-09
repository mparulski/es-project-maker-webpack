const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: 'web',
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|eot|ttf)$/i,
        type: 'asset/resource',
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.min.css"
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}
