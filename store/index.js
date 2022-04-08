//Vuex中的基本配置文件
import Vue from "vue"
import Vuex from "vuex"
import tab from './page/tab.js'
import userInfo from './user/userInfo.js'


//将Vuex全局注入
Vue.use(Vuex)

//使用modules方式将不同模块的store进行引入  new Vuex.Store将Store对外暴露
export default new Vuex.Store({
	data(){return{}},
	//使用modules的方式引入
	modules:{
		//tab相当于一个记录信息的表格 用于记录中转信息的默认值和方法
		//其实就是把tab里面的代码写到下面
		tab,
		userInfo
	}
})