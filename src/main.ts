/*
 * @Author: your name
 * @Date: 2020-12-03 15:43:50
 * @LastEditTime: 2020-12-04 17:20:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-demo\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import './mock/index'

createApp(App).use(Vant).use(store).use(router).mount('#app')
