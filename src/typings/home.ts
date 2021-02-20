/*
 * @Author: your name
 * @Date: 2020-12-04 11:18:22
 * @LastEditTime: 2020-12-04 11:29:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-demo\src\typings\home.ts
 */

export interface ISlider {
    url: string
}
export interface ILesson {
    title: string,
    video: string,
    poster: string, // 封面
    price: number,
    category?: string
}
export interface ILessons {
    hasMore: boolean, // 是否还有更多数据
    loading: boolean, // 默认没有正在加载
    offset: number,
    limit: number,
    list: ILesson[]
}
export interface IHomeState {
    currentCategory: CATEGORY_TYPES,
    sliders:ISlider[],
    lessons: ILessons
}
export enum CATEGORY_TYPES {
    ALL,
    REACT,
    VUE,
    NODE
}