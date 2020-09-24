module.exports = {
    lintOnSave: false,
    // chainWebpack: config => {
    //     config.resolve.alias
    //         .set('api', path.resolve('./src/api/index.js'))
    //     config.plugin('provide').use(webpack.ProvidePlugin, [
    //         {
    //             api: 'api'
    //         }
    //     ])
    //     // https://testcarmng.sshhui.com
    // },
    productionSourceMap: false,
	devServer: {
		// 跨域请求：PROXY代理
		proxy:'https://testcarmng.sshhui.com/'
	}
}