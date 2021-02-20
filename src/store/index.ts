/*
 * @Author: your name
 * @Date: 2020-12-03 15:43:50
 * @LastEditTime: 2020-12-04 17:44:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-demo\src\store\index.ts
 */
import { IHomeState } from '@/typings/home'
import { createStore } from 'vuex'
import home from './modules/home'

export interface IGlobalState {
    home: IHomeState // 某个页面/模块可以在这里增加
}

const state = createStore<IGlobalState>({
    mutations: {
    },
    actions: {
    },
    modules: {
        home
    }
})
export default state;
