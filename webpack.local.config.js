import { merge } from 'webpack-merge'
import configCommon from './webpack.common.config.js'
const configLocal = {
    mode: 'development',
    devtool: 'eval-source-map'
}
const config = mergeWithRules({
    module: {
        rules: {
            test: 'match',
            use: {
                loader: 'match',
                options: 'replace'
            }
        }
    }
})(configCommon, configLocal)

export default config
