module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    hot: 'only',
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.ts$|\.tsx$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|eot|ttf)$/i,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}
