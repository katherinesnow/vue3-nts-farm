import Vue from 'vue'

// 第三方插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 自定义插件使用
import { install as httpPlugin } from '@/config/http';

Vue.use(httpPlugin);
Vue.use(ElementUI)
console.log(ElementUI, '===ElementUI====')
// Vue.use(formCreate)
