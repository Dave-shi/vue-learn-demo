const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //编写时想写成驼峰式需要加上 lintOnSave:false 配置信息
  lintOnSave:false
})
