// @ts-check
/**
 * @param {string} useHash
 */
module.exports = useHash => {
  return {
    js: useHash ? 'js/[name].[chunkhash:8].js' : 'js/[name].js',
    css: useHash ? 'css/[name].[chunkhash:8].css' : 'css/[name].css',
    font: useHash
      ? 'fonts/[path][name].[hash:8].[ext]'
      : 'fonts/[path][name].[ext]',
    image: useHash
      ? 'images/[path][name].[hash:8].[ext]'
      : 'images/[path][name].[ext]'
  }
}
