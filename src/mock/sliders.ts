/*
 * @Author: your name
 * @Date: 2020-12-04 17:11:01
 * @LastEditTime: 2020-12-04 17:42:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-demo\src\mock\sliders.ts
 */
import { ISlider } from '@/typings/home'
export default {
    getSliderList:() => ({
        err: 0,
        data: <ISlider[]>[
            {
                url: `http://beta-core.51yunxi.cn/Image/ShopPic/13/637401117172159138.jpg`
            },
            {
                url: `http://beta-core.51yunxi.cn/Image/ShopPic/13/637262739640865286.jpg`
            }
        ]
    })
}