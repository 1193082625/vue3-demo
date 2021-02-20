<!--
 * @Author: your name
 * @Date: 2020-12-03 15:43:50
 * @LastEditTime: 2020-12-07 11:11:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-demo\src\App.vue
-->
<template>
    <div>
        <router-view/>
        <van-tabbar route>
            <van-tabbar-item to="/" icon="home-o">Home</van-tabbar-item>
            <van-tabbar-item to="/mine" icon="orders-o">Mine</van-tabbar-item>
            <van-tabbar-item to="profile" icon="manager-o">profile</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
