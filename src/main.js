import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lib-flexible'

import { Loading } from 'element-ui'
import { Message } from 'element-ui'

import Vant from '../node_modules/vant/lib/vant'
import '../node_modules/vant/lib/index.css'
Vue.use(Vant)

import {
  Area,
  ActionSheet,
  Popup,
  Cell,
  Toast,
  Calendar,
  Lazyload,
  Notify,
  ShareSheet,
} from 'vant'
Vue.use(Area)
  .use(ActionSheet)
  .use(Popup)
  .use(Cell)
  .use(Toast)
  .use(Calendar)
  .use(Lazyload)
  .use(Notify)
  .use(ShareSheet)

import ElementUI from '../node_modules/element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

/* import axios from 'axios'
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8' */

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
