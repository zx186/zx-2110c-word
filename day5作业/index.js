// // 数字类型
// let num:number=2
// // 布尔
// let br:boolean=false
// // 字符串
// let zfc:string='12'
// // 数组
// let arr:number[]=[12]
// let arr1:string[]=['12']
// // 2
// let arr2:Array<number>=[12]
// let arr3:Array<string>=['23']
// // 对象
// let obj:{name:string,sex:false}
// obj={name:'23',sex:false}
// // undifind and null
// let u:undefined=undefined
// let n:null=null
// 元祖
var Ys = ['2', false];
var ssa = {
    color: 'red',
    name: 'ad',
    age: 'as'
};
// 混合类型接口
var Assa = (function () {
    var cunt = 0;
    return function () {
        return ++cunt;
    };
})();
console.log(Assa());
console.log(Assa());
console.log(Assa());
//new 新的请求http
var ajax = new XMLHttpRequest();
//method,url
ajax.open('get', 'https:;//baidu.com');
//发送数据
ajax.send();
//接受返回值，判断是否返回成功
ajax.onreadystatechange = function () {
    if (ajax.status === 200 && ajax.readyState === 4) {
        console.log('我是返回成功的值');
    }
};
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["ReadyState"] = 4] = "ReadyState";
})(Status || (Status = {}));
function getAjax(params) {
    var ajax = new XMLHttpRequest();
    ajax.open(params.methods, params.url);
    ajax.send(params.data);
    ajax.onreadystatechange = function () {
        if (ajax.status === Status.Success && ajax.readyState === Status.ReadyState) {
            console.log('我们可以用了');
        }
    };
}
//接受一个字符串类型的数据，返回一个user类型（字符串类型）的数据
function Input(str) {
    return str.slice(0, 2);
}
//把返回结果赋值给userInput
var userInput = Input('hellow');
userInput = 'new';
//声明一个类型为Bear类型的对象。要求及腰name，也要有honey。shuomingyongextends扩展接口成功
var bear = {
    name: 'winie',
    honey: true
};
console.log(bear.name);
console.log(bear.honey);
