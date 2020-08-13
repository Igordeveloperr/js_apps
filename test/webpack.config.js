const path = require("path"),
      HtmlWebpackPlugin = require("html-webpack-plugin"),
      {CleanWebpackPlugin} = require("clean-webpack-plugin"); 

module.exports = {
    mode: "development",
    context: path.join(__dirname, "src"),
    entry: "./index.js",
    output:{
        path: path.join(__dirname, "dist"),
        filename: "boundle[id].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),

        new CleanWebpackPlugin(),
    ],
    devServer:{
        port: 2000
    },

    module:{
        rules:[
            {
                "test": /\.css$/,
                "use": ["style-loader", "css-loader"]
            }
        ]
    }
};