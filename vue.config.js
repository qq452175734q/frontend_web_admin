
const path=require('path')
const bodyParser=require('body-parser')
function resolve(dir){  //传入一个目录的相路路径，返回绝对路径
    return path.join(__dirname,dir)
}

const port = 8080;

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views',
				'router': '@/router',
				'store': '@/store',
			}
		}
	},
	
	publicPath: "/",		//通过的接口路由，比如'http://localhost:8080' + ('/login')
	  outputDir: "dist",
	  assetsDir: "static",
	  lintOnSave: process.env.NODE_ENV === "development",
	  productionSourceMap: false,
	  devServer: {		//dev环境（本地测试）下，代理配置
	    port,
	    open: true,
	    overlay: {
	      warnings: false,
	      errors: true
	    },
	    // 配置代理 （以接口 https://www.easy-mock.com/mock/5ce2a7854c85c12abefbae0b/api 说明）
	    proxy: {
	      "/api": {
	        // 以 “/api” 开头的 代理到 下边的 target 属性 的值 中
	        target: process.env.VUE_APP_URL,
	        changeOrigin: true, // 是否改变域名
	        ws: false,
	        pathRewrite: {
	          // 路径重写
	          "/api": "/api" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
	        }
	      }
	    }
	    // 下边这个， 如果你是本地自己mock 的话用after这个属性，线上环境一定要干掉
	    // after: require("./mock/mock-server.js")
	},
	
	chainWebpack(config){//用以配置规则之类的
		config.module.rule('svg') //找个配置rule规则里面的svg
		      .exclude.add(resolve('src/icons'))  //排除src/icons下的.svg文件
		      .end()
			 
		config.module.rule('icons') //配置rule规则里面新增的icons规则
		      .test(/\.svg$/)    //icons规则里匹配到.svg结尾的文件
		      .include.add(resolve('src/icons'))  //包含src/icons下的.svg文件
		      .end()
		      .use('svg-sprite-loader')
		      .loader('svg-sprite-loader')
		      .options({symbolId:'icon-[name]'})  //class名
		      .end()
	}
}