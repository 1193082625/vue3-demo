<!--
 * @Author: your name
 * @Date: 2020-12-04 11:09:57
 * @LastEditTime: 2020-12-04 16:07:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-demo\src\views\home\home-header.vue
-->
<template>
    <div class="home-header">
        <img src="@/assets/logo.png" alt="">
        <!-- 以前的v-model = input + value -->
        <van-dropdown-menu>
            <van-dropdown-item :modelValue="category" :options="options" @change="change" />
        </van-dropdown-menu>
    </div>
</template>
<script lang="ts">
import { CATEGORY_TYPES } from '@/typings/home'
import { defineComponent, PropType, reactive, toRefs } from 'vue'
export default defineComponent({
    props: {
        category: {
            type:Number as PropType<CATEGORY_TYPES>
        }
    },
    emits: ['setCurrentCategory'], // 为了提示作用的
    setup(props, context) {
        let state = reactive({
            options: [
                {text: '全部课程', value: CATEGORY_TYPES.ALL},
                {text: 'REACT课程', value: CATEGORY_TYPES.REACT},
                {text: 'VUE课程', value: CATEGORY_TYPES.VUE},
                {text: 'NODE课程', value: CATEGORY_TYPES.NODE}
            ]
        })
        function change(value:CATEGORY_TYPES) {
            context.emit('setCurrentCategory', value);
        }
        return {
            ...toRefs(state),
            change
        }
    }
})
</script>
<style lang="less" scoped>
.home-header{
    height: 100px;
    background: #2a2a2a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    img{
        height: 50px;
    }
    /deep/.van-dropdown-menu__item{
        background: #2a2a2a;
    }
    /deep/.van-dropdown-menu__title{
        color: #ffffff;
    }
}
</style>

