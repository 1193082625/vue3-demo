<!--
 * @Author: your name
 * @Date: 2020-12-04 10:51:54
 * @LastEditTime: 2020-12-07 11:44:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-demo\src\views\home\index.vue
-->
<template>
    <div class="home">
        <!-- 首页头部 -->
        <HomeHeader :category="category" @setCurrentCategory="setCurrentCategory"></HomeHeader>
        <div class="home-container" ref="homeListEle">
            <!-- 轮播图 -->
            <div>
                <Suspense>
                    <template #default>
                        <HomeSwiper></HomeSwiper>
                    </template>
                    <template #fallback>
                        正在加载...
                    </template>
                </Suspense>
            </div>
            <!-- 列表 -->
            <HomeList :lessonList="lessonList"></HomeList>
            <div v-if="isLoading">正在加载...</div>
            <div v-if="!hasMore">我是有底线的...</div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted, ref } from 'vue'
import HomeHeader from './home-header.vue'
import HomeSwiper from './home-swiper.vue'
import HomeList from './home-list.vue'
import { Store, createStore, useStore } from 'vuex';
import { IGlobalState } from '@/store';
import { CATEGORY_TYPES } from '@/typings/home';
import * as Types from '@/store/action-types';
import { ElementNode } from '@vue/compiler-dom';
import { useLoadMore } from "@/hooks";
// 专门为修改分类使用的 options api
function useCatrgory(store: Store<IGlobalState>) {
    let category = computed(() => store.state.home.currentCategory); // vuex中的状态
    function setCurrentCategory(category:CATEGORY_TYPES) {
        store.commit(`home/${Types.SET_CATEGORY}`, category);
    }
    return {
        category,
        setCurrentCategory
    }
}
function useLessonList(store: Store<IGlobalState>) {
    const lessonList = computed(() => store.state.home.lessons.list);
    onMounted(() => { // 初始化加载 如果vuex中已经有数据了，就不用加载了(防止切换页面导致多次加载)
        if(lessonList.value.length == 0) {
            store.dispatch(`home/${Types.SET_LESSON_LIST}`)
        }
    })
    return {
        lessonList
    }
}
// 使用defineComponent是为了有更好的提示推断
export default defineComponent({
    components: {
        HomeHeader,
        HomeSwiper,
        HomeList
    },
    setup() {
        // 1、需要获取vuex中的分类状态，有个更改状态的功能
        let store = useStore<IGlobalState>();
        // 获取分类
        let { category, setCurrentCategory } = useCatrgory(store);
        // 获取课程
        let { lessonList } = useLessonList(store);

        // 获取真实dom
        const homeListEle = ref<null | HTMLElement>(null);
        const { isLoading, hasMore } = useLoadMore(homeListEle, store, `home/${Types.SET_LESSON_LIST}`);
        return {
            category,
            setCurrentCategory,
            lessonList,
            homeListEle,
            isLoading,
            hasMore
        }
    }
})
</script>
<style lang="less" scoped>
.home-container{
    position: absolute;
    top: 100px;
    bottom: 50px;
    width: 100%;
    overflow-y: scroll;
    z-index: 0;
}
</style>
