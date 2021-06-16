module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    hot: true,
    port: 9000,
  },
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
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}
