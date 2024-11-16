import { merge } from 'webpack-merge'
import TerserPlugin from 'terser-webpack-plugin'
import configCommon from './webpack.common.config.js'
const configProduction = {
    mode: 'production',
    optimization: {
        nodeEnv: 'production',
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        dead_code: true,
                        drop_console: true,
                        drop_debugger: true
                    }
                }
            })
        ]
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}
const config = merge(configCommon, configProduction)
export default config
