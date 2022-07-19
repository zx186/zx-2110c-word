//作业问题:
// 1用俩种方式创建boolean类型的数组

// 2工厂模式创建对象 -- 
    // 构造函数创建对象

// 3将对象造个句子

// 4找一个数组中修改源数组的方式，找一下数组中哪些方式是可以使用的，哪些事不可以使用

// 5为什么类型断言左右是number

// 6函数有哪几种 --总结

// 7Status["Uploading"]=0





// let obj:{name:string,age:number}
// obj={name:'狗何',age:50}
// document.body.innerHTML=`
//     我的名字是${obj.name},年零 是：${obj.age}
// `

// 数字
// 1
// let num=1
// let num2=2
// let sum=num+num2
// console.log(sum);

// let num=3
// let num2=4
// 会报错不能将string分配给数字number类型
// num='3'
// let sum=num+num2

// 2
// let num=1;
// let num1=2
// let sum=num+num1
// console.log(sum);

// let num1=2
// let num2=3
// num1=23
// let sum=num1+num2
// 下面的num1 覆盖了上面的num1
// console.log(sum);

// 3
// let num1=2
// let num3=4
// let sum=num1+num3
// console.log(sum);

// let num=1
// let num1='23'
// 不能把number分配给string
// num1=23

// 布尔值分类
// 1
// let buer:boolean=false
// console.log(buer);
// 2
// let bu:boolean=true
// console.log(bu);
// 3
// let er:boolean=true
// console.log(er);

// 字符串类型
// 1
// let Name:string='你看'
// let age:number=12
// let he=`我的名字${Name}年龄${age}`
// document.body.innerHTML=he
// 2
// let nAme:string='小红'
// let age:number=23
// document.body.innerHTML=`名字${nAme}年龄${age}`
// 3
// let nn:string='小王'
// let age:number=12
// document.body.innerHTML=`name${nn}年龄${age}`


// 数组
// 1
// let arra=[]
// let arr=new Array()
// arr.push(12)

// let list:number[]=[12,2323,]
// let list1:string[]=['23','123']

// let list2:number[]=[1,2,3]
// // 添加进去了
// list2.push(4)
// let list3:string[]=['1','2']
// list3.unshift('3')

// let list4:Array<number>=[1,2,3]
// let list5:Array<string>=['1','23','2']
// console.log(list3);

// 2
// let arra=[]
// let arr=new Array()

// let list:number[]=[1,2]
// list.push(3)
// let list1:string[]=['12','23']
// list1.unshift('3')

// let list2:Array<number>=[1,23]
// let list3:Array<string>=['12','23']

// 3
// let ar=[]
// let arr=new Array()

// let list:number[]=[1,23,]
// let list1:string[]=['1','23']

// let list3:Array<number>=[1,34]
// list3.push(323)
// let list4:Array<string>=['1','32']

// undefined 和 null
// 1
// let u:undefined=undefined
// let n:null=null

// 2
// let u:undefined=undefined
// let n:null=null
// // 3
// let un:undefined=undefined
// let nm:null=null

// 对象
// 1
// let obj={}
// let obj1=new Object()
// let per={name:'23',age:12}

// let obj2:{name:string,age:number}
// obj2={name:'23',age:23}
// 2
// let obj={}
// let obj1=new Object()
// let per={name:'23',age:12}
// let list:{name:string,age:number}
// list={name:'23',age:23}
// 3
// let obj={}
// let obj1=new Object()
// let per={name:'23',age:12}
// let list:{name:string,age:number}
// list={name:'23',age:23}


//元组
// 1
// let arr:[string,number,boolean]=['何狗',38,false]

// for (let i = 0; i < arr.length; i++) {
   
//     document.body.innerHTML=`
// 我的名字是${arr[0]},享年：${arr[1]}
// `
// }
// 2
// let arr:[string,number,boolean]=['23',23,false]
//     document.body.innerHTML=`
// // 我的名字是${arr[0]},享年：${arr[1]}
// // `
// let tom:[string,number]
//   3
    // let arr:[string,number,boolean]=['何狗',38,false]

// for (let i = 0; i < arr.length; i++) {
   
//     document.body.innerHTML=`
// 我的名字是${arr[0]},享年：${arr[1]}
// `
// }





// 枚举
// 第一个要大写
// 内容每个第一个字母也大写
// 1
// enum Color{
//     Red=1,
//     Blue=2,
//     Green=3
// }
// let c=Color.Red
// document.body.innerHTML=`
// ${c}`

// 2
// enum Color{
//     Red=1,
//     Green=2,
//     Yellow=3
// }
// let c=Color.Green
// document.body.innerHTML=`${c}`

// 3
// enum De{
//     One=1,
//     Two=2,
//     Four=3
// }
// let aa=De.One
// document.body.innerHTML=`${aa}`


//any
// 可以是任意数据类型
// 1
// let aa:any;
// aa=123
// aa='123'
// // aa=false
// let ss:any[]=[12,'23',false]
// console.log(ss);
// 2
// let value:any
//     value=12
//     value='23'
//     // value=false
//     console.log(value);
    // 3
    // let value:any
    // value=false
    // value=23
    // value='ra'



    // void
    // void没有任意类型，用来定义函数
    // 1
    // function aler():void {
        // console.log('my name is void');
        
    // }
    // 如果有返回的数据类型就定义，不能定义为void
    // function alre():string{
        // console.log('my');
        // return 'mya'
    // }
      // 2
    //   function aler():void {
    //     console.log('my name is void');
        
    // }
    // // 如果有返回的数据类型就定义，不能定义为void
    // function alre():string{
    //     console.log('my');
    //     return 'm啊ya'
    // }
    // 3
      // 1
    //   function aler():void {
    //     console.log('my name is void');
        
    // }
    // // 如果有返回的数据类型就定义，不能定义为void
    // function alre():string{
    //     console.log('my');
    //     return 'mya'
    // }

    


//never
// 1
// function f1(message:string):never{
//     throw new Error(message)
// }

// // 推断的返回值类型为never
// function fail() {
//     return error("Something failed");
// }
// 2
// function error(message: string): never {
//     throw new Error(message);
// }

// // 推断的返回值类型为never
// function fail() {
//     return error("Something failed");
// }
// 3
// function error(message: string): never {
//     throw new Error(message);
// }

// // 推断的返回值类型为never
// function fail() {
//     return error("Something failed");
// }


// unknown
// 1
// let value:any
// console.log(value.name);
// console.log(value.toFixed);
// console.log(value.length);
// 2
// let value:any
// console.log(value.name);
// console.log(value.toFixed);
// console.log(value.length);
// 3
// let value:any
// console.log(value.name);
// console.log(value.toFixed);
// console.log(value.length);


