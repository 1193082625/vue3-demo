/*
 * @Author: your name
 * @Date: 2020-12-04 16:30:55
 * @LastEditTime: 2020-12-07 10:17:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-demo\src\api\home.ts
 */
import { CATEGORY_TYPES } from '@/typings/home';
import axios from '.';

// 声明获取轮播图的接口
export function getSliders<T>() {
    return axios.get<T, T>('/slider/list');
}

// 获取课程
export function getLessons<T>(category: CATEGORY_TYPES, offset:number = 0, limit:number = 5) {
    return axios.get<T, T>(`lesson/list?category=${category}&offset=${offset}&limit=${limit}`);
}