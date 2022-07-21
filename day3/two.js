// 1索引签名
// ！！！重点: 绕开多余属性时，[]中间的nearing，是可变的
//（1）.eadonly
// interface Rolec{
//     [id:number]:string
// }
var getCounter = function () {
    var c = function () {
        c.count++;
    };
    c.count = 0;
    return c;
};
var counter = getCounter();
counter();
console.log(counter.count);
counter();
console.log(counter.count);
