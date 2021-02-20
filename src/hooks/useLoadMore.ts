import { IGlobalState } from '@/store';

/*
 * @Author: your name
 * @Date: 2020-12-07 11:25:08
 * @LastEditTime: 2020-12-07 11:46:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edite
 * @FilePath: \vue3-demo\src\hooks\useLoadMore.ts
 */
import { onMounted, Ref, computed } from "vue";
import { Store } from 'vuex';
import _ from 'lodash';
export function useLoadMore(refreshEle: Ref<null | HTMLElement>, store: Store<IGlobalState>, type: string) {
    let ele:HTMLElement;
    function _loadMore() {
       // 获取可视区域的高度  卷去的高度  整个高度
       let containerHeight = ele.clientHeight;
       let scrollTop = ele.scrollTop;
       let scrollHeight = ele.scrollHeight;
       if(containerHeight + scrollHeight + 20 >= scrollHeight) {
           store.dispatch(type);
       } 
    }
    // 防抖
    onMounted(() => {
        ele = refreshEle.value as HTMLElement;
        ele.addEventListener('scroll', _.debounce(_loadMore, 200));
    })
    const isLoading = computed(() => {
        return store.state.home.lessons.loading;
    })
    const hasMore = computed(() => {
        return store.state.home.lessons.hasMore;
    })
    return {
        isLoading,
        hasMore
    }
}