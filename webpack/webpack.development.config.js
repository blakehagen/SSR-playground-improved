const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const distDir = path.join(__dirname, '../dist');
const srcDir = path.join(__dirname, '../src');

module.exports = [
    {
        name: 'client',
        target: 'web',
        entry: `${srcDir}/client.jsx`,
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'client.js',
            publicPath: '/dist/',
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules\/)/,
                    use: [
                        {
                            loader: 'babel-loader',
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                  modules: true,
                                  importLoaders: 2,
                                  localIdentName: '[name]--[local]--[hash:base64:5]',
                                  sourceMap: true
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    config: {
                                        path: `${__dirname}/../postcss/postcss.config.js`,
                                    }
                                }
                            }
                        ]
                    })
                },
            ],
        },
        plugins: [
            new ExtractTextPlugin({
                filename: 'styles.css',
                allChunks: true
            })
        ]
    },
    {
        name: 'server',
        target: 'node',
        entry: `${srcDir}/server.jsx`,
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'server.js',
            libraryTarget: 'commonjs2',
            publicPath: '/dist/',
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules\/)/,
                    use: [
                        {
                            loader: 'babel-loader',
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'isomorphic-style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                              modules: true,
                              importLoaders: 2,
                              localIdentName: '[name]--[local]--[hash:base64:5]',
                              sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: `${__dirname}/../postcss/postcss.config.js`,
                                }
                            }
                        }
                    ]
                }
            ],
        },
    }
];