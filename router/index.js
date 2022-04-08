//导入最基本的Vue依赖
import Vue from "vue"
//导入VueRouter的依赖
import VueRouter from 'vue-router'

//可以全局引入vue 也可以按需引入vue
import Main from '../views/Main.vue'


//全局引入VueRouter
Vue.use(VueRouter)

//路由接收的数据 主要接收一个数组
const routes=[
	//数组中第一个对象  首先是路径为根路径 name可要可不要 然后接收组件component(可以是一个vue页面，也可以是按需引入)
	{
		path : '/',
		name : 'Home',
		//直接引入一个Vue
		component :Main,
		//局部引入一个vue
		// component : () -> import('../views/home.vue')
		children:[
			{
				path:'/home',
				name:'home',
				component:()=>import('../views/home')
			},
			{
				path:'/user',
				name:'user',
				component : ()=> import('../views/user')
			},
			{
				path:'/manage',
				name:'mall',
				component : ()=> import('../views/manage')
			}
		]
	}
]


//对路由进行相关的配置
const router = new VueRouter({
	//mode 路由的匹配模式
	mode:'history',
	routes
})
//向外展示出路由
export default router