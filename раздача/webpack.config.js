const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
    mode: "development",
    context: path.join(__dirname, "src"),
    entry: "./index.js",
    output:{
        path: path.join(__dirname, "dist"),
        filename: "boundle[id].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin()
    ],
    devServer:{
        port: 80
    },
    module:{
        rules:[
            {
                "test": /\.css$/,
                "use": ["style-loader","css-loader"]
            }
        ]
    }
}