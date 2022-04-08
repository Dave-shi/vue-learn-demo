//管理控制模块中需要传输的属性文件

export default {
	//设定默认初始的状态值
	state:{
		isCollapse:false,
		
		
	},
	//实现方法
	mutations:{
		collapseMenu(state){
			state.isCollapse=!state.isCollapse
		}
	}
}