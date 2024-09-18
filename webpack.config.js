const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/, // Rule for CSS files
                use: ['style-loader', 'css-loader'], // Process CSS with these loaders
            },
        ],
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
};
