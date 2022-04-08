<template>
	<header>
		<div class="l-content">
			<el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
			<h3 style="color: #fff;">首页</h3>
		</div>
		
		<div class="r-content">
		  <el-dropdown trigger="click" size="mini">
		  <span >
		    <img class="user" :src="userImg" >
		  </span>
		  <el-dropdown-menu slot="dropdown">
			  <!-- 在ElementUI中的dropdown-item实现点击事件需要 @click.native -->
		    <el-dropdown-item @click.native="openUser">个人中心</el-dropdown-item>
		    <el-dropdown-item>退出</el-dropdown-item>
		    
		  </el-dropdown-menu>
		</el-dropdown>
		</div>
		
	</header>
</template>

<script>
	export default{
		data(){
			return{
				userImg:require('../assets/image/user.jpg')
			}
		},
		methods:{
			handleMenu(){
				this.$store.commit('collapseMenu')
				
			},
			openUser(){
				this.$router.push({
					name:'user'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	
	  header{
		  display: flex;
		  height: 100%;
		  justify-content: space-between;
		  align-items: center;
	  }
	  .l-content{
		  display: flex;
		  align-items: center;
		  .el-button{
			  margin-right:20px ;
		  }
	  }
	  .r-content{
		  .user{
			  width: 40px;
			  height: 40px;
			  border-radius: 50%;
		  }
	  }
</style>
