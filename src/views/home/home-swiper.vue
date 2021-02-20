<!--
 * @Author: your name
 * @Date: 2020-12-04 11:10:06
 * @LastEditTime: 2020-12-04 17:43:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-demo\src\views\home\home-swiper.vue
-->
<template>
    <van-swipe v-if="sliderList.length">
        <van-swipe-item v-for="l in sliderList" :key="l.url">
            <img :src="l.url" alt="" style="width: 100%;height:120px;display:block;background:#ccc;">
        </van-swipe-item>
    </van-swipe>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex';
import { IGlobalState } from '@/store';
import * as Types from '@/store/action-types';
// 正常来说数据应该在父组件获取，通过属性传递到当前组件
export default defineComponent({
    async setup() {
        let store = useStore<IGlobalState>();
        let sliderList = computed(() => store.state.home.sliders);
        if(sliderList.value.length == 0) {
            // 缓存 如果数据没有获取过才获取
            await store.dispatch(`home/${Types.SET_SLIDER_LIST}`);
        }
        return {
            sliderList
        }
    }
})
</script>
