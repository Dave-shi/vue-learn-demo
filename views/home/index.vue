<template>
	<el-row class="home" :gutter="20" @click="getUserInfo">
		<el-col :span="8" style="margin-top: 20px;">
			<el-card shadow="hover">
				<div class="user">
					<img :src="userImg" class="img" style="width: 100px;height: 100px;border-radius: 50%;"/>
					<div class="userInfo" >
						<p class="name" >{{this.name}}</p>
						<p class="access">{{this.access}}</p>
						
					</div>
				</div>
				<div class="login-info">
					<p>上次登录的时间：<span  style="margin-left: 50px;">{{this.loginTime}}</span></p>
					<p>上次登录的地点：<span  style="margin-left: 50px;">{{this.loginAddress}}</span></p>
				</div>
			</el-card>
			<el-card style="margin-top: 20px;height: 460px;">
				<el-table :data="tableData">
					<el-table-column v-for="(val,key) in tableLabel" 
					:key="key"
					:prop="key"
					:label="val">
						
					</el-table-column>
				</el-table>
			</el-card>
		</el-col>
		
		
		<el-col :span="16" >
			<div class="num">
				<el-card class="oderTable" v-for="item in countData" :key="item.name":body-style="{display:'flex',padding:0}">
					<i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
					<div class="detail">
						<p class="numTxt">￥{{item.value}}</p>
						<p class="txt">{{item.name}}</p>
					</div>
				</el-card>
			</div>
			<el-card class="ecZx" style="height: 300px;"></el-card>
			<div class="graph">
				<el-card class="ec" style="margin-right: 50px;"></el-card>
				<el-card class="ec"></el-card>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	export default{
		created() {
			
		},
		data(){
			return{
				userImg:require('../../src/assets/image/user.jpg'),
				name:"",
				access:"",
				loginTime:"",
				loginAddress:"",
				
				tableData:[
					{
						name:'oppo',
						todayBuy:100,
						monthBuy:300,
						totalBuy:800
					},
					{
						name:'vivo',
						todayBuy:100,
						monthBuy:300,
						totalBuy:800
					},
					{
						name:'小米',
						todayBuy:100,
						monthBuy:300,
						totalBuy:800
					},
					{
						name:'华为',
						todayBuy:100,
						monthBuy:300,
						totalBuy:800
					},
					{
						name:'魅族',
						todayBuy:100,
						monthBuy:300,
						totalBuy:800
					},
					{
						name:'红米',
						todayBuy:100,
						monthBuy:300,
						totalBuy:800
					}
				],
				
				tableLabel:{
					name:'课程',
					todayBuy:'本日购买',
					monthBuy:'本月购买',
					totalBuy:'总购买'
				},
				countData:[
					{
						name:'今日订单',
						value:1234,
						icon:'success',
						color:'#2ec7c9'
					},
					{
						name:'今日收藏订单',
						value:210,
						icon:'star-on',
						color:'#ffb980'
					},
					{
						name:'今日未支付订单',
						value:1234,
						icon:'s-goods',
						color:'#5ab1ef'
					},
					{
						name:'本月支付订单',
						value:1234,
						icon:'success',
						color:'#2ec7c9'
					},
					{
						name:'本月收藏订单',
						value:210,
						icon:'star-on',
						color:'#ffb980'
					},
					{
						name:'本月未支付订单',
						value:1234,
						icon:'s-goods',
						color:'#5ab1ef'
					}
				]
				
				
			}
		},
		computed:{
			getUserInfo(){
				this.name = this.$store.state.userInfo.name
				this.access = this.$store.state.userInfo.access
				this.loginTime = this.$store.state.userInfo.loginTime
				this.loginAddress = this.$store.state.userInfo.loginAddress
				
				return {}
			}
		}
	}
</script>

<style lang="less" scoped>
	
	.userInfo{
		position: absolute;
		top:45px;
		left: 180px;
		// margin-right: 800px;
	}
	.login-info{
		width: 500px;
	}
	.icon{
		width: 80px;
		color: #fff;
		font-size: 30px;
		text-align: center;
		line-height: 75px
		
	}
	.oderTable{
		position: relative;
		width: 400px;
		float: left;
		height: 80px;
		border-radius: 5%;
		margin: 5px;
		
	}
	.numTxt{
		font-size: 25px;
		margin:10px;
		
		
	}
	.txt{
		font-size: 10px;
		margin: 10px;
		margin-left: 25px;
		color: #aaaaff;
	}
	.num{
		margin-top: 50px;
		width: 1500px;
	}
	.ecZx{
		margin: 10px;
	}
	.ec{
		display: inline-block;
		height: 260px;
		width: 400px;
	}
	
</style>
