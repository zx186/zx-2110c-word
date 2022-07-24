// // 1
// // // 数字类型
// // let num:number=2
// // // 布尔
// // let br:boolean=false
// // // 字符串
// // let zfc:string='12'
// // // 数组
// // let arr:number[]=[12]
// // let arr1:string[]=['12']
// // // 2
// // let arr2:Array<number>=[12]
// // let arr3:Array<string>=['23']
// // // 对象
// // let obj:{name:string,sex:false}
// // obj={name:'23',sex:false}

// // // undifind and null
// // let u:undefined=undefined
// // let n:null=null

// // 元祖
// let Ys:[string,Boolean]=['2',false]


// //枚举
// // enum Ssa{
// //     name='12',
// //     age=12,
// // }
// // let c:Ssa=Ssa.name
// // console.log(c);

// //any
// // let array:any[]=['23',12,false]

// // //void
// // function Any():void{
// //     console.log('void');
    
// // }

// // function Aay():string{
// //     console.log('23');
// //     return '23'
    
// // }
// // Aay()
// // Any()
// // void不需要写return      其他类型需要写

// // 返回never的函数必须存在无法达到的终点
// // function error(message: string): never {
// //     throw new Error(message);
// // }

// // // 推断的返回值类型为never
// // function fail() {
// //     return error("Something failed");
// // }
// // fail()

// //never 用来报错



// //交叉类型

// // interface Use{
// //     name:string,
// //     sex:boolean
// // }
// // interface Uss{
// //     age:number
// // }
// // type SSa=Use&Uss

// // let AAa:SSa={
// // name:'23',
// // sex:false,
// // age:23
// // }

// //联合类型
// // let Ass:string|number
// // Ass=12
// // Ass='23'

// //类型断言
// // let someValue: any;
// // someValue = 123;
// // someValue = "dddd";
// // let someValueLength = (<string>someValue).length
// // console.log(someValueLength);
// // let aas=(someValue as string).length

// //索引类型

// // interface AA{
// //     [id:number]:string
// // }
// // const SS:AA={
// //     0:'23',
// //     1:'ad'
// // }

// // const DD:AA={
// //     b:'12',
// //     a:'23'
// // }

// // const XX:AA=['as','22']
// // 为什么不报错呢，因为数组有下标，刚好符合  数字类型的 ，所以不报错


// //接口继承
// interface ss{
//         color:string
// }

// interface aa extends ss{
//     name:string
// }

// interface cc extends ss,aa{
//     age:string   
// }
// const ssa:cc={
//     color:'red',
//     name:'ad',
//     age:'as'
// }

// // 混合类型接口
// const Assa=(()=>{
//     let cunt=0
//     return ()=>{
//        return ++cunt
//     }
// })()

// console.log(Assa());
// console.log(Assa());
// console.log(Assa());

// //可选属性 ？
// // 可以赋值，也可以不赋值
// interface ssa{
//     color:string,
//     name:string,
//     age?:number
// }

// //new 新的请求http
// let ajax=new XMLHttpRequest()
// //method,url
// ajax.open('get','https:;//baidu.com')
// //发送数据
// ajax.send()
// //接受返回值，判断是否返回成功
// ajax.onreadystatechange=function(){
//     if(ajax.status===200&&ajax.readyState===4){
//         console.log('我是返回成功的值');
//     }
// }

// //用ts来进行封装
// /**
//  * 思路:1.有三个参数，用interface
//  *      2.有俩个枚举值，所以用enum
//  *      3.放在一个函数里面，进行接口和参数的校验
//  *             3.1函数需要传参，且参数是对象
//  */

// // interface Iparams{
// //     methods:string,
// //     url:string,
// //     data?:any
// // }
// // enum Status{
// //     Success=200,
// //     ReadyState=4
// // }
// // function getAjax(params:Iparams){
// //     let ajax=new XMLHttpRequest()
// //     ajax.open(params.methods,params.url)
// //     ajax.send(params.data)
// //     ajax.onreadystatechange=function(){
// //         if(ajax.status===Status.Success&&ajax.readyState===Status.ReadyState){
// //             console.log('可以用了');
            
// //         }
// //     }
// // }
// //为函数和函数参数定义类型
// // type
// // 1.类型别名

// // 不一样的点：
// /**
//  * 1.type是赋值，进行别名的修改
//  * 2.interface 声明一个类型
//  * 3.type 可以声明基础类型数据，interface只能声明对象
//  * 4.interface可以使用extends进行继承，但type不可以，因为是类型别名，属于复制的一种
//  * 5.interface可以重复声明，自动合并一起
//  * 6.type不可以重复声明
//  * 
//  * 
//  * 相同点：
//  *      1.type和interface都可以声明对象和类型
//  */


// //-------和interface的相同点
// type IParams={
//     methods:string,
//     url:string,
//     data?:any
// }

// enum Status{
//     Success=200,
//     ReadyState=4
// }

// function getAjax(params:IParams){
//     let ajax=new XMLHttpRequest()
//     ajax.open(params.methods,params.url)
//     ajax.send(params.data)
//     ajax.onreadystatechange=function(){
//         if(ajax.status===Status.Success&&ajax.readyState===Status.ReadyState){
//             console.log('我们可以用了');
            
//         }
//     }
// }

// //-----不同点，错误的写法
// // interface users:string 

// //type用来声明基础类型
// type user=string

// //接受一个字符串类型的数据，返回一个user类型（字符串类型）的数据
// function Input(str:user):user{
//     return str.slice(0,2)
// }
// //把返回结果赋值给userInput
// let userInput =Input('hellow')
// userInput='new'


// /**
//  * interface继承 extends
//  */

// //扩展接口
// interface Animal{
//     name:string
// }
// interface Bear extends Animal{
//     honey:boolean
// }
// //声明一个类型为Bear类型的对象。要求及腰name，也要有honey。shuomingyongextends扩展接口成功
// const bear:Bear={
//     name:'winie',
//     honey:true
// }
// console.log(bear.name);
// console.log(bear.honey);

// // 2
// // // 数字类型
// // let num:number=2
// // // 布尔
// // let br:boolean=false
// // // 字符串
// // let zfc:string='12'
// // // 数组
// // let arr:number[]=[12]
// // let arr1:string[]=['12']
// // // 2
// // let arr2:Array<number>=[12]
// // let arr3:Array<string>=['23']
// // // 对象
// // let obj:{name:string,sex:false}
// // obj={name:'23',sex:false}

// // // undifind and null
// // let u:undefined=undefined
// // let n:null=null

// // 元祖
// let Ys:[string,Boolean]=['2',false]


// //枚举
// // enum Ssa{
// //     name='12',
// //     age=12,
// // }
// // let c:Ssa=Ssa.name
// // console.log(c);

// //any
// // let array:any[]=['23',12,false]

// // //void
// // function Any():void{
// //     console.log('void');
    
// // }

// // function Aay():string{
// //     console.log('23');
// //     return '23'
    
// // }
// // Aay()
// // Any()
// // void不需要写return      其他类型需要写

// // 返回never的函数必须存在无法达到的终点
// // function error(message: string): never {
// //     throw new Error(message);
// // }

// // // 推断的返回值类型为never
// // function fail() {
// //     return error("Something failed");
// // }
// // fail()

// //never 用来报错



// //交叉类型

// // interface Use{
// //     name:string,
// //     sex:boolean
// // }
// // interface Uss{
// //     age:number
// // }
// // type SSa=Use&Uss

// // let AAa:SSa={
// // name:'23',
// // sex:false,
// // age:23
// // }

// //联合类型
// // let Ass:string|number
// // Ass=12
// // Ass='23'

// //类型断言
// // let someValue: any;
// // someValue = 123;
// // someValue = "dddd";
// // let someValueLength = (<string>someValue).length
// // console.log(someValueLength);
// // let aas=(someValue as string).length

// //索引类型

// // interface AA{
// //     [id:number]:string
// // }
// // const SS:AA={
// //     0:'23',
// //     1:'ad'
// // }

// // const DD:AA={
// //     b:'12',
// //     a:'23'
// // }

// // const XX:AA=['as','22']
// // 为什么不报错呢，因为数组有下标，刚好符合  数字类型的 ，所以不报错


// //接口继承
// interface ss{
//         color:string
// }

// interface aa extends ss{
//     name:string
// }

// interface cc extends ss,aa{
//     age:string   
// }
// const ssa:cc={
//     color:'red',
//     name:'ad',
//     age:'as'
// }

// // 混合类型接口
// const Assa=(()=>{
//     let cunt=0
//     return ()=>{
//        return ++cunt
//     }
// })()

// console.log(Assa());
// console.log(Assa());
// console.log(Assa());

// //可选属性 ？
// // 可以赋值，也可以不赋值
// interface ssa{
//     color:string,
//     name:string,
//     age?:number
// }

// //new 新的请求http
// let ajax=new XMLHttpRequest()
// //method,url
// ajax.open('get','https:;//baidu.com')
// //发送数据
// ajax.send()
// //接受返回值，判断是否返回成功
// ajax.onreadystatechange=function(){
//     if(ajax.status===200&&ajax.readyState===4){
//         console.log('我是返回成功的值');
//     }
// }

// //用ts来进行封装
// /**
//  * 思路:1.有三个参数，用interface
//  *      2.有俩个枚举值，所以用enum
//  *      3.放在一个函数里面，进行接口和参数的校验
//  *             3.1函数需要传参，且参数是对象
//  */

// // interface Iparams{
// //     methods:string,
// //     url:string,
// //     data?:any
// // }
// // enum Status{
// //     Success=200,
// //     ReadyState=4
// // }
// // function getAjax(params:Iparams){
// //     let ajax=new XMLHttpRequest()
// //     ajax.open(params.methods,params.url)
// //     ajax.send(params.data)
// //     ajax.onreadystatechange=function(){
// //         if(ajax.status===Status.Success&&ajax.readyState===Status.ReadyState){
// //             console.log('可以用了');
            
// //         }
// //     }
// // }
// //为函数和函数参数定义类型
// // type
// // 1.类型别名

// // 不一样的点：
// /**
//  * 1.type是赋值，进行别名的修改
//  * 2.interface 声明一个类型
//  * 3.type 可以声明基础类型数据，interface只能声明对象
//  * 4.interface可以使用extends进行继承，但type不可以，因为是类型别名，属于复制的一种
//  * 5.interface可以重复声明，自动合并一起
//  * 6.type不可以重复声明
//  * 
//  * 
//  * 相同点：
//  *      1.type和interface都可以声明对象和类型
//  */


// //-------和interface的相同点
// type IParams={
//     methods:string,
//     url:string,
//     data?:any
// }

// enum Status{
//     Success=200,
//     ReadyState=4
// }

// function getAjax(params:IParams){
//     let ajax=new XMLHttpRequest()
//     ajax.open(params.methods,params.url)
//     ajax.send(params.data)
//     ajax.onreadystatechange=function(){
//         if(ajax.status===Status.Success&&ajax.readyState===Status.ReadyState){
//             console.log('我们可以用了');
            
//         }
//     }
// }

// //-----不同点，错误的写法
// // interface users:string 

// //type用来声明基础类型
// type user=string

// //接受一个字符串类型的数据，返回一个user类型（字符串类型）的数据
// function Input(str:user):user{
//     return str.slice(0,2)
// }
// //把返回结果赋值给userInput
// let userInput =Input('hellow')
// userInput='new'


// /**
//  * interface继承 extends
//  */

// //扩展接口
// interface Animal{
//     name:string
// }
// interface Bear extends Animal{
//     honey:boolean
// }
// //声明一个类型为Bear类型的对象。要求及腰name，也要有honey。shuomingyongextends扩展接口成功
// const bear:Bear={
//     name:'winie',
//     honey:true
// }
// console.log(bear.name);
// console.log(bear.honey);


// // 3
// // // 数字类型
// // let num:number=2
// // // 布尔
// // let br:boolean=false
// // // 字符串
// // let zfc:string='12'
// // // 数组
// // let arr:number[]=[12]
// // let arr1:string[]=['12']
// // // 2
// // let arr2:Array<number>=[12]
// // let arr3:Array<string>=['23']
// // // 对象
// // let obj:{name:string,sex:false}
// // obj={name:'23',sex:false}

// // // undifind and null
// // let u:undefined=undefined
// // let n:null=null

// // 元祖
// let Ys:[string,Boolean]=['2',false]


// //枚举
// // enum Ssa{
// //     name='12',
// //     age=12,
// // }
// // let c:Ssa=Ssa.name
// // console.log(c);

// //any
// // let array:any[]=['23',12,false]

// // //void
// // function Any():void{
// //     console.log('void');
    
// // }

// // function Aay():string{
// //     console.log('23');
// //     return '23'
    
// // }
// // Aay()
// // Any()
// // void不需要写return      其他类型需要写

// // 返回never的函数必须存在无法达到的终点
// // function error(message: string): never {
// //     throw new Error(message);
// // }

// // // 推断的返回值类型为never
// // function fail() {
// //     return error("Something failed");
// // }
// // fail()

// //never 用来报错



// //交叉类型

// // interface Use{
// //     name:string,
// //     sex:boolean
// // }
// // interface Uss{
// //     age:number
// // }
// // type SSa=Use&Uss

// // let AAa:SSa={
// // name:'23',
// // sex:false,
// // age:23
// // }

// //联合类型
// // let Ass:string|number
// // Ass=12
// // Ass='23'

// //类型断言
// // let someValue: any;
// // someValue = 123;
// // someValue = "dddd";
// // let someValueLength = (<string>someValue).length
// // console.log(someValueLength);
// // let aas=(someValue as string).length

// //索引类型

// // interface AA{
// //     [id:number]:string
// // }
// // const SS:AA={
// //     0:'23',
// //     1:'ad'
// // }

// // const DD:AA={
// //     b:'12',
// //     a:'23'
// // }

// // const XX:AA=['as','22']
// // 为什么不报错呢，因为数组有下标，刚好符合  数字类型的 ，所以不报错


// //接口继承
// interface ss{
//         color:string
// }

// interface aa extends ss{
//     name:string
// }

// interface cc extends ss,aa{
//     age:string   
// }
// const ssa:cc={
//     color:'red',
//     name:'ad',
//     age:'as'
// }

// // 混合类型接口
// const Assa=(()=>{
//     let cunt=0
//     return ()=>{
//        return ++cunt
//     }
// })()

// console.log(Assa());
// console.log(Assa());
// console.log(Assa());

// //可选属性 ？
// // 可以赋值，也可以不赋值
// interface ssa{
//     color:string,
//     name:string,
//     age?:number
// }

// //new 新的请求http
// let ajax=new XMLHttpRequest()
// //method,url
// ajax.open('get','https:;//baidu.com')
// //发送数据
// ajax.send()
// //接受返回值，判断是否返回成功
// ajax.onreadystatechange=function(){
//     if(ajax.status===200&&ajax.readyState===4){
//         console.log('我是返回成功的值');
//     }
// }

// //用ts来进行封装
// /**
//  * 思路:1.有三个参数，用interface
//  *      2.有俩个枚举值，所以用enum
//  *      3.放在一个函数里面，进行接口和参数的校验
//  *             3.1函数需要传参，且参数是对象
//  */

// // interface Iparams{
// //     methods:string,
// //     url:string,
// //     data?:any
// // }
// // enum Status{
// //     Success=200,
// //     ReadyState=4
// // }
// // function getAjax(params:Iparams){
// //     let ajax=new XMLHttpRequest()
// //     ajax.open(params.methods,params.url)
// //     ajax.send(params.data)
// //     ajax.onreadystatechange=function(){
// //         if(ajax.status===Status.Success&&ajax.readyState===Status.ReadyState){
// //             console.log('可以用了');
            
// //         }
// //     }
// // }
// //为函数和函数参数定义类型
// // type
// // 1.类型别名

// // 不一样的点：
// /**
//  * 1.type是赋值，进行别名的修改
//  * 2.interface 声明一个类型
//  * 3.type 可以声明基础类型数据，interface只能声明对象
//  * 4.interface可以使用extends进行继承，但type不可以，因为是类型别名，属于复制的一种
//  * 5.interface可以重复声明，自动合并一起
//  * 6.type不可以重复声明
//  * 
//  * 
//  * 相同点：
//  *      1.type和interface都可以声明对象和类型
//  */


// //-------和interface的相同点
// type IParams={
//     methods:string,
//     url:string,
//     data?:any
// }

// enum Status{
//     Success=200,
//     ReadyState=4
// }

// function getAjax(params:IParams){
//     let ajax=new XMLHttpRequest()
//     ajax.open(params.methods,params.url)
//     ajax.send(params.data)
//     ajax.onreadystatechange=function(){
//         if(ajax.status===Status.Success&&ajax.readyState===Status.ReadyState){
//             console.log('我们可以用了');
            
//         }
//     }
// }

// //-----不同点，错误的写法
// // interface users:string 

// //type用来声明基础类型
// type user=string

// //接受一个字符串类型的数据，返回一个user类型（字符串类型）的数据
// function Input(str:user):user{
//     return str.slice(0,2)
// }
// //把返回结果赋值给userInput
// let userInput =Input('hellow')
// userInput='new'


// /**
//  * interface继承 extends
//  */

// //扩展接口
// interface Animal{
//     name:string
// }
// interface Bear extends Animal{
//     honey:boolean
// }
// //声明一个类型为Bear类型的对象。要求及腰name，也要有honey。shuomingyongextends扩展接口成功
// const bear:Bear={
//     name:'winie',
//     honey:true
// }
// console.log(bear.name);
// console.log(bear.honey);

