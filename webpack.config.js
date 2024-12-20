const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/Game.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist/",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, ""), // Serve CSS and other static assets from the 'assets' folder
            publicPath: "", // These assets will be accessible under the /assets URL
        },
        hot: true, // Enable hot module replacement (if needed)
        open: true, // Automatically open the browser
        port: 8080, // Choose your port number
        devMiddleware: {
            writeToDisk: true, // Write the bundle to disk
        },
    },
};
