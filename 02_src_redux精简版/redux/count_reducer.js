/*
    1. 该文件是用于创建一个为Count服务的reducer,reducer的本质是一个函数
    2. reducer函数会接到2个参数，分别为：之前的状态（preState)，动作对象（action）
*/

const initState = 0;
export default function countReducer(preState = initState, action) {
    console.log(preState);

    // 从action对象中中获取type, data
    const { type, data } = action
    // 根据type的值执行如何加工数据
    switch (type) {
        case 'increment':
            return preState + data;
        case 'decrement':
            return preState - data;
        default:
            return preState
    }
}