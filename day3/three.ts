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
const countUps = (() => {
    let count = 0;
    function useCount(){
        return ++count
    }
    return useCount
})()
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

