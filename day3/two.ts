// 1索引签名
// ！！！重点: 绕开多余属性时，[]中间的nearing，是可变的
//（1）.eadonly
// interface Rolec{
//     [id:number]:string
// }

// let role:Rolec={
//     0:'super_admin',
//     1:'admin'
// }

// let copeRolec : Rolec={
//     //不能将类型“{ A: string; C: string; }”分配给类型“Rolec”。
// //   对象文字可以只指定已知属性，并且“'A'”不在类型“Rolec”中。
//     'A':'super_admin',
//     'C':'admin'
// }

//数组模式
// let roleArray:Rolec=['super_admin','admin']
//     roleArray[0]='站着上课'
//     // 想要东西不可或更改，只有查看权限 --readonly
//     interface RoleInfo{
//         readonly [id:number]:string
//     }
//     // 类型“RoleInfo”中的索引签名仅允许读取。
//     const roleCHange:RoleInfo={
//         0:'super_admin'
//     }
//     roleCHange[0]='admin'
//     const obj={
//         123:'a',
//         '123':'b' //对象文本不能具有多个名称相同的属性。
//     }
//     console.log(obj);
    

//接口继承
// extends

// interface Vegettable{
//     color:string
// }
// interface Tomato extends Vegettable{
//     radius:number
// }
// interface Carrd extends Vegettable{
//     length:number
// }


// // 类型{}缺少类型“Tomato中的以下属性：radius，color
// let useTomato :Tomato={
//     radius:13,
//     color:'red'
// }

// let ussue: Carrd={
//     length:23,
//     color:'23'
// }


// 混合接口类型
// 不想被污染 放到闭包里，形成独立的作用域

// 自调用函数

// let count =0
// const countUp=()=>count++
// console.log(count);

// const countUps=(()=>{
//     let count=0
//     function usEe(){
//         return count++
//     }
//     return usEe
// })()
// console.log(countUps());
// console.log(countUps());


// const countUp=(()=>{
//     let count=0
//     return ()=>{
//         return count++
//     }
// })()
// console.log(countUp());
// console.log(countUp());


// js中手动添加对象属性
// let obj={}
// obj.name='小红'

// let countUp=()=>{
//     return ++countUp.count

// }
// countUp.count=2;
// console.log(countUp());
// console.log(countUp());


// 混合接口
/**
 * 1 变量永久保存，不会被污染
 * 2 变量只是内部使用
 * 3 定义每个类型，方便维护
 * 
 */

interface Counter{
    ():void
    count:number
}
const getCounter=():Counter=>{
    const c=()=>{
        c.count++
    }
    c.count=0
    return c
}

const counter:Counter=getCounter()
counter()
console.log(counter.count);
counter()
console.log(counter.count);