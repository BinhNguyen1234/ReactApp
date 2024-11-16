import { merge } from 'webpack-merge'
import configCommon from './webpack.common.config.js'
const configLocal = {
    mode: 'development',
    devtool: 'eval-source-map'
}
const config = merge(configCommon, configLocal)

export default config
