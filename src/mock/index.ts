/*
 * @Author: your name
 * @Date: 2020-12-04 17:10:24
 * @LastEditTime: 2020-12-04 17:11:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-demo\src\mock\index.ts
 */
import Mock from 'mockjs';
import sliders from './sliders';
import lessons from './lessons';
Mock.mock(/\/slider\/list/, 'get', sliders.getSliderList);
Mock.mock(/\/lesson\/list/, 'get', lessons.getLessonList);