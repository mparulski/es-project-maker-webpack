module.exports = {
    target: "web",
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        host: "localhost",
        hot: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|woff|eot|ttf)$/i,
                type: 'asset/inline',
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}