<template>
	<el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c64" active-text-color="#ffd04b" text-color="#fff" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
	  <h3>{{isCollapse ? '后台':'通用后台管理系统'}}</h3>
	  
	  <el-menu-item  @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
	    <i :class="'el-icon-'+item.icon"></i>
	    <span slot="title">{{item.lable}}</span>
	  </el-menu-item>
	  
	  
	  
	  
	  <el-submenu v-for="item in hasChildren" :index="item.path":key="item.path">
		  
	    <template slot="title">
	      <i :class="'el-icon-'+item.icon"></i>
	      <span slot="title">{{item.lable}}</span>
	    </template>
		
		
	    <el-menu-item-group v-for="subItem in item.childern" :key="subItem.path">
	      
	      <el-menu-item :index="subItem.path">{{subItem.lable}}</el-menu-item>
	      
	    </el-menu-item-group>
		
		
	    <!-- <el-menu-item-group title="分组2">
	      <el-menu-item index="1-3">选项3</el-menu-item>
	    </el-menu-item-group>
	    <el-submenu index="1-4">
	      <span slot="title">选项4</span>
	      <el-menu-item index="1-4-1">选项1</el-menu-item>
	    </el-submenu> -->
	  </el-submenu>
	  
	  
	</el-menu>
</template>

<script>
	 export default {
	    data() {
	      return {
	        // isCollapse: true,
			menu:[
				{
					path:'/',
					name:'home',
					lable:'首页',
					icon:'s-home',
					url:'Home/Home'
				},
				
				{
					path:'/mall',
					name:'mall',
					lable:'商品管理',
					icon:'video-play',
					url:'MallManage/MallManage'
				},
				{
					path:'/user',
					name:'user',
					lable:'用户',
					icon:'user',
					url:'UserManage/UserManage'
				},
				{
					path:'/order',
					lable:'其他',
					icon:'location',
					childern:[
						{
							path:'/page1',
							name:'page1',
							lable:'页面1',
							icon:'setting',
							url:'Other/PageOne'
						},
						{
							path:'/page2',
							name:'page2',
							lable:'页面2',
							icon:'setting',
							url:'Other/PageTwo'
						},
					]
				}
			]
	      };
	    },
	    methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      },
			clickMenu(itme){
				this.$router.push({
					name:itme.name
				})
			}
	    },
		computed:{
			noChildren(){
				return this.menu.filter(item => !item.childern)
			},
			hasChildren(){
				return this.menu.filter(item => item.childern)
			},
			//用于获取store中state tab中需要的属性
			isCollapse(){
				return this.$store.state.tab.isCollapse
			}
		}
	  }
</script>

<style lang="less" scoped>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
	    width: 200px;
	    min-height: 400px;
	  }
	  
	  .el-menu{
		  height: 100%;
		  border: none;
		  h3 {
			  color: #fff;
			  text-align: center;
			  line-height: 48px
		  }
	  }
</style>
