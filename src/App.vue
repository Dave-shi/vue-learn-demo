//App.vue 是Vue项目的开始文件
<template>
  <div id="app">
	  
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld /> -->
	<router-view></router-view>
	
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  //选在在component中的组件，并传送
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
	html,body{
			margin: 0;
			padding: 0;
		}
	
#app {
	height: 100vh;
}
</style>
