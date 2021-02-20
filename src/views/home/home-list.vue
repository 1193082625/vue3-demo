<!--
 * @Author: your name
 * @Date: 2020-12-04 11:10:12
 * @LastEditTime: 2020-12-07 11:07:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-demo\src\views\home\home-list.vue
-->
<template>
    <div>
        <van-card v-for="ll in lessonList" :key="ll.id" :price="ll.price" :title="ll.title" :thumb="ll.poster">
            <template #tags>
                <van-tag plain type="danger">{{formatCategory(ll.category)}}</van-tag>
            </template>
        </van-card>
    </div> 
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ILesson } from '@/typings/home';
export default defineComponent({
    props: {
        lessonList: {
            type: Array as PropType<ILesson[]>
        }
    },
    setup() {
        function formatCategory(type:number) {
            let cateName = ['全部课程', 'React课程', 'Vue课程', 'Node课程']
            return cateName[type];
        }
        return {
            formatCategory
        }
    }
})
</script>

