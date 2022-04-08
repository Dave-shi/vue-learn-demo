import Vue from 'vue'
import App from './App.vue'

//导入ElementUi的主要依赖(全局)
// import ElementUI from 'element-ui';

//按需导入ElementUi需要的组件
import { Button,Radio,Container,Aside,Header,Main,Menu,Submenu,MenuItem,MenuItemGroup,Dropdown,DropdownMenu,DropdownItem } from 'element-ui';

//导入ElementUI的样式文件
import 'element-ui/lib/theme-chalk/index.css';

//引入路由管理
import router from '../router'

import store from '../store'

Vue.config.productionTip = false


//ElementUI注入
Vue.use(Button)
Vue.use(Radio)

Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)



//把ElementUI所有的组件都注入（但是会增加占用的空间）
// Vue.use(ElementUI);

new Vue({
	//引入Vuex中的store用于组件间的相互通信
  store,
  router,
  render: h => h(App),
}).$mount('#app')
