//数字类型   log---下标     `````````````
// 1
// enum Status {
//     Uploading,
//     Success,
//     Falied
// }
// console.log(Status.Falied); //2
// console.log(Status['Falied']); //2
// console.log(Status.Success); //1
// 2
// enum Anmima{
//     Uploading,
//     Success,
//     Falied
// }
// console.log(Anmima.Uploading);
// console.log(Anmima['Falied']);
// console.log(Anmima.Success);
// 3
// enum Ash{
//     Fail,
//     Success,
//     One
// }
// console.log(Ash.Fail);
// console.log(Ash['One']);
// console.log(Ash.Success);
//指定索引值 --指定索引值就是跟着上一个索引+1       ```````````
// 1
// enum Anmima{
//     Pig=200,
//     Dog,
//     Cat=300,
//     Snake
// }
// console.log(Anmima.Pig);
// console.log(Anmima.Dog);
// console.log(Anmima.Cat);
// console.log(Anmima.Snake);
// 2
// enum Aa{
//     Pig=100,
//     Cat,
//     Dog=99,
//     SX
// }
// console.log(Aa.Pig);
// console.log(Aa.Cat);
// console.log(Aa.Dog);
// console.log(Aa.SX);
// 3
// enum Anmima{
//     Pig=200,
//     Dog,
//     Cat=300,
//     Snake
// }
// console.log(Anmima.Pig);
// console.log(Anmima.Dog);
// console.log(Anmima.Cat);
// console.log(Anmima.Snake);
// 计算值和常量          ````````` `````````等于后面必须有东西
//枚举成员必须有初始化表达式
// // 1
// const getvalue = ()=>{
//     return 1
// }
// enum Consts{
//     a=getvalue(),
//     b,
//     c,
// }
// console.log(Consts.a);
// console.log(Consts.b);
// console.log(Consts.c);
// 2
// const getll=()=>{
//     return 2
// }
// enum AS{
//     a=getll(),
//     b,
//     c
// }
// console.log(AS.a);
// console.log(AS.b);
// console.log(AS.c);
// 3
// const getvalue = ()=>{
//     return 1
// }
// enum Consts{
//     a=getvalue(),
//     b,
//     c,
// }
// console.log(Consts.a);
// console.log(Consts.b);
// console.log(Consts.c);
//反向映射 --                ````````````````log出来等号相反的
// 1
// enum State{
//     Success=200,
//     Notfound=404,
//     Error=500
// }
// console.log(State.Success);
// console.log(State[404]);
// console.log(State.Notfound);
// 2
// enum State{
//     Success=200,
//     Notfound=404,
//     Error=500
// }
// console.log(State.Success);
// console.log(State[404]);
// console.log(State.Notfound);
// 3
// enum State{
//     Success=200,
//     Notfound=404,
//     Error=500
// }
// console.log(State.Success);
// console.log(State[404]);
// console.log(State.Notfound);
//字符串枚举                    ················
// const getvalue=()=>{
//     return 0
// }
// const names='小名'
// enum Mess{
//     Error='eroror',
//     Success=200,
//     Clear=names
// }
// console.log(Mess.Error,'Error');
// console.log(Mess.Success);
// console.log(Mess['Clear']);
// 2
// const getvalue=()=>{
//     return 0
// }
// const names='小名'
// enum Mess{
//     Error='eroror',
//     Success=200,
//     Clear=names
// }
// console.log(Mess.Error,'Error');
// console.log(Mess.Success);
// console.log(Mess['Clear']);
// 3
// const getvalue=()=>{
//     return 0
// }
// const names='小名'
// enum Mess{
//     Error='eroror',
//     Success=200,
//     Clear=names
// }
// console.log(Mess.Error,'Error');
// console.log(Mess.Success);
// console.log(Mess['Clear']);
//异构枚举                `````````````````````````
// 1
// enum Resu{
//     Faild=0,
//     Success="Success"
// }
// 2
// enum Resu{
//     Faild=0,
//     Success="Success"
// }
// 3
// enum Resu{
//     Faild=0,
//     Success="Success"
// }
// 枚举成员类型         ``````````````````````````固定成员，别的成员不行
// 1
// enum AAS{
//     Dog=1,
//     Cat=2
// }
// interface Dog{
//     type:AAS.Dog
// }
// interface Cat{
//     type:AAS.Cat
// }
// let cat1:Cat={
//    type:AAS.Cat
// }
// let dog1:Dog={
//     type:AAS.Dog
// }
// 2
// enum AAS{
//     Dog=1,
//     Cat=2
// }
// interface Dog{
//     type:AAS.Dog
// }
// interface Cat{
//     type:AAS.Cat
// }
// let cat1:Cat={
//    type:AAS.Cat
// }
// let dog1:Dog={
//     type:AAS.Dog
// }
// 3
// enum AAS{
//     Dog=1,
//     Cat=2
// }
// interface Dog{
//     type:AAS.Dog
// }
// interface Cat{
//     type:AAS.Cat
// }
// let cat1:Cat={
//    type:AAS.Cat
// }
// let dog1:Dog={
//     type:AAS.Dog
// }
// 联合类型              ````````````````````
// 1
// enum Keys{
//     Off,
//     On
// }
// interface Light{
//     status:Keys
// }
// let light:Light={
//     status:Keys.Off
// }
// 2
// enum Keys{
//     Off,
//     On
// }
// interface Light{
//     status:Keys
// }
// let light:Light={
//     status:Keys.Off
// }
// 3
// enum Keys{
//     Off,
//     On
// }
// interface Light{
//     status:Keys
// }
// let light:Light={
//     status:Keys.Off
// }
// 运行时对象
var E;
(function (E) {
    E[E["A"] = 0] = "A";
    E[E["B"] = 1] = "B";
})(E || (E = {}));
var getIndex = function (enumObj) {
    return enumObj.C;
};
console.log(getIndex(E)); //0
var Ani;
(function (Ani) {
    Ani[Ani["Rabbit"] = 0] = "Rabbit";
    Ani[Ani["Pig"] = 1] = "Pig";
})(Ani || (Ani = {}));
var status45 = Ani.Pig;
var status47 = 0 /* Light.Off */;
console.log(status45, status47);
