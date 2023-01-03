
const { mode } = require("webpack-nano/argv");
const {
    MiniHtmlWebpackPlugin,
} = require("mini-html-webpack-plugin");
const {WebpackPluginServe} = require("webpack-plugin-serve");

module.exports = {
    mode,
    entry: ["./src", "webpack-plugin-serve/client"],
    watch: mode === "development",
    plugins: [
        new MiniHtmlWebpackPlugin({
            context: {
                title: "Superhero Greeter"
            }
        }),
        new WebpackPluginServe({
            port: parseInt(process.env.PORT, 10) || 8080,
            static: "./dist",
            liveReload: true,
            waitForBuild: true,
        }),
    ]
}