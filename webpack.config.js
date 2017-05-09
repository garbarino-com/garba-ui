module.exports = {

    context: __dirname + "/app",
    entry: "./lib/components/index.js",
    output: {
    path: __dirname + "/dist/components",
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.(js|scss)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ],
                exclude: /node_modules/,
            },
        ]
    }

};