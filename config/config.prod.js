import { pluginConf } from './commons/pluginsConf';
import { routerConf } from './commons/routerConf';
import { aliasConf } from './commons/aliasConf';
// ref: https://umijs.org/config/
export default {
  hash: true,
  publicPath:'/static/dist/',
  treeShaking: true,
  plugins: pluginConf,
  routes: routerConf,
  alias: aliasConf,
  cssLoaderOptions:{
    localIdentName:'[local]'
  },
  // extraBabelPlugins: [
  //   [
  //     'react-css-modules',
  //     {
  //       'exclude': 'node_modules',
  //       'generateScopedName': '[name]__[local]___[hash:base64:5]',
  //       'filetypes': {
  //         '.less': {
  //           'syntax': 'postcss-less',
  //         },
  //       },
  //     },
  //   ],
  // ]
};
