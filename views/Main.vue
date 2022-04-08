<template>
	<el-container style="height: 100%;">
		
		
	  <el-aside width="auto">
		  <!-- 使用自己定义的组件 -->
		  <Common-aside></Common-aside>
	  </el-aside>
	  
	  <el-container>
	    <el-header>
			<Common-header></Common-header>
		</el-header>
	    <el-main>
			<router-view></router-view>
		</el-main>
	  </el-container>
	</el-container>
	
	
</template>
<script>
	//引入自定义的组件
	import CommonAside from '../src/components/CommonAside.vue'
	import CommonHeader from '../src/components/CommonHeader.vue'
	
	export default {
		name: 'Home',
		//调用组件
		components:{
			CommonAside,
			CommonHeader
		},
		data(){
			return{}
		}
	}
</script>
<style lang="less" scoped>
	.el-header{
		background-color: #333;
	}
	.el-main{
		padding-top : 0;
	}
	
</style>