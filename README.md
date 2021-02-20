1、创建vue3项目

```
vue create vue3-pro
// 选择对应的vue3版本即可
```

2、引入UI框架，此项目使用Vant 3.x版本

```
npm i vant@next -S

// 然后在main.ts中全局引入
import Vant from 'vant'
import 'vant/lib/index.css'
```

3、目录结构

* api 接口请求封装
* hooks 全局共用方法
* mock 模拟数据
* router 路由相关
* store 状态管理
* typings 项目相关页面接口定义
* views 视图

4、与vue2区别

* 由原来的实例化变为了函数调用，比如new vue  ——>  createApp，new router ——>  createRouter
* beforeCreate和create改为了setup，setup中不能直接使用this，而是通过context参数调用页面相关内容
* 新增了ref和reactive相关定义的proxy数据

* 使用vuex： 在页面中使用useStore()

* 渲染异步组件（即组件内有异步渲染）

* ```
  在父组件中使用Suspense，例如：
  <Suspense>
      <template #default>
          <HomeSwiper></HomeSwiper>
      </template>
      <template #fallback>
           正在加载...
      </template>
  </Suspense>
  ```

  