/*
 * @Author: your name
 * @Date: 2020-12-04 10:39:46
 * @LastEditTime: 2020-12-04 10:45:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-demo\typescript\泛型.ts
 */
// 泛型 用来在代码执行时传入的类型，未确定结果
function createArray<T>(len:number, val:T) {
    let result = [];
    for(let i=0; i<len; i++) {
        result.push(val);
    }
    return result;
}

let arr = createArray(1, 'fds');
// let arr = createArray<number>(1, 123);

// 多个泛型 元组的交换 [string, number] = [number, string]
const swap = <T,K>(tuple:[T,K]):[K,T] => {
    return [tuple[1], tuple[0]]
}
swap<number, number>([1, 2]);
export {}