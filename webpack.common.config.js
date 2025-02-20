import path from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import 'webpack-dev-server'
const _fileName = fileURLToPath(import.meta.url)
const _dirName = path.dirname(_fileName)
const configCommon = {
    entry: path.resolve(_dirName, 'src', 'index.tsx'),
    output: {
        path: path.resolve(_dirName, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(_dirName, 'src', 'app', 'index.html'),
            filename: 'index.html',
            publicPath: "/"
        }),
        new Dotenv(),
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin(),
        new webpack.ProvidePlugin({
            React: 'react',
            _: 'lodash'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
                exclude: ['/node_modules/'],
                sideEffects: true
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            importLoaders: 1
                        }
                    }, 
                    'postcss-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            '@': path.resolve(_dirName, 'src'),
            '@store': path.resolve(_dirName, 'src', 'store')
        }
    },
    devServer: {
        static: {
            directory: path.join(_dirName, 'dist')
        },
        historyApiFallback: true,
        open: true
    },
    optimization: {
        runtimeChunk: 'single'
    }
}

export default configCommon
