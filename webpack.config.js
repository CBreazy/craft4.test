const path = require('path');

module.exports = {
    mode: 'development', // Sets the development mode
    entry: './web/js/craft4.js', // Entry point for your JavaScript files
    output: {
        filename: 'bundle.js', // Name of the output bundle
        path: path.resolve(__dirname, './web/js/dist'), // Output directory
    },
    resolve: {
        modules: [
            'node_modules', // located at project root
            // ... other paths
        ],
    },
    watch: false,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};