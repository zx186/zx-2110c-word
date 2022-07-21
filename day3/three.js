// 1  索引签名
// ！！！重点：绕开多余属性时，[]中间的内容，是可变的
// （1）eadonly
// interface Roles{
//     [id:number]:string
// }
// let Rols:Roles={
//     2:'23',
//     3:'434'
// }
// 如果不匹配的话会报错
// 2
// 数组模式
// let role:Roles=['23','13']
// role[0]='222'
// console.log(role[0]);
// 如果想成为不能更改的
// interface RoleInfo{
//     readonly [id:number]:string
// }
// const rose:RoleInfo={
//     0:'23'
// }
// rose[0]='as'
// 会报错只能读不能改
//接口继承
//这是一个公共的接口类型定义
// interface Vegettable{
//     color:string
// }
// interface Coo extends Vegettable{
//     lenght:number
// }
// interface Cee extends Vegettable{
//     Hif:number
// }
// let  ssAa:Coo={
//     color:'23',
//     lenght:23,
//     // 还不能缺少
// }
// let AAs:Cee={
//     color:'as',
//     Hif:21
// }
// 混合接口类型
/**不想被污染掉  放到闭包里,形成独立的作用yu*/
/**
 * 自调用函数
 */
//  let count = 0;
//  const countUp = () => count++;
// console.log(count);
var countUps = (function () {
    var count = 0;
    function useCount() {
        return ++count;
    }
    return useCount;
})();
console.log(countUps()); // 1
console.log(countUps()); // 2
//  const countUp = (() => {
//     let count = 0;
//     return () => {
//       return ++count;
//     };
//   })();
//   console.log(countUp()); // 1
//   console.log(countUp()); // 2


//js中手动添加对象属性
let obj = {}
obj.name = '小红'

// javascript
// let countUp = () => {
//     return ++countUp.count;
//   };
//   countUp.count = 0;
//   console.log(countUp()); // 1
//   console.log(countUp()); // 2


     /**
    * 混合接口
    * 1. 变量永久保存,不会被污染
    * 2. 变量只是内部使用
    * 3. 定义每个类型,方便维护
    */

    //   interface Counter {
    //     (): void; 
    //     count: number; 
    //   }
    //   const getCounter = (): Counter => {
    //     const c = () => { 
    //       c.count++;
    //     };
    //     c.count = 0; // 再给这个函数添加一个count属性初始值为0
    //     return c; // 最后返回这个函数对象
    //   };
    //   const counter: Counter = getCounter(); // 通过getCounter函数得到这个计数器
    //   counter();
    //   console.log(counter.count); // 1
    //   counter();
    //   console.log(counter.count); // 2