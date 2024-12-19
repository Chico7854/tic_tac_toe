const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/Game.js',
    output: {
        filename: 'Game.js',
        path: path.resolve(__dirname, 'assets', 'scripts')
    },
    publicPath: 'assets/scripts/'
};