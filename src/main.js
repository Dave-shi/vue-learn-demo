import Vue from 'vue'
import App from './App.vue'

//导入ElementUi的主要依赖(全局)
//import ElementUI from 'element-ui';

//按需导入ElementUi需要的组件
 import { Button,Radio } from 'element-ui';

//导入ElementUI的样式文件
import 'element-ui/lib/theme-chalk/index.css';

//引入路由管理
import router from '../router'

Vue.config.productionTip = false
//ElementUI注入
Vue.use(Button)
Vue.use(Radio)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
