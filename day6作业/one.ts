//泛形1 
/**
 * any类型，表达一个值为任意类型的时候，指定他的类型为any，
 * 
 * 
 * new Array()  创建数组的长度
 * .fill，填充数组的方法，将数据填充到其中，分别以不同的数据类型进行填充
 * 
 */
// const getArray=(value:any,times:number=5):any[]=>{
//     return new Array(times).fill(value)
// }

// getArray([1],2).forEach(item=>{
//     console.log(item.length);
    
// })

// getArray(2,3).forEach(item=>{
//     console.log(item.length);   //error
    
// })
//简单使用
// const getArray=<T>(value:Text,times:number=5):T[]=>{
//     return new Array(times).fill(value)
// }
//         // 括号里右边的三是循环左边数组length的次数，左边数组的length，就是循环三次2，2是数组有俩个下标
// getArray<number[]>([1,2],3).forEach(item=>{
//     console.log(item.length);
// })
// getArray<number>([2],3).forEach(item=>{
//     console.log(item.length); //undifinde
//     //类型“number”上不存在属性“length”。
// })

// getArray(2,3).forEach(item=>{
//     console.log(item.length);   //error  因为需要的是数组不是数字类型2
    
// })

//泛形变量
// const getLength=<T>(param:T):number=>{    
//     return  param.length     //类型“T”上不存在属性“length”。
// }  

// const getArray=<T,U>(param1:Text,param2:U,times:number):[T,U][]=>{
//     return new Array(times).fill([param1,param2])
// }
// getArray(1,'a',3).forEach(item=>{
//     console.log(item[0].length); 
//     console.log(item[1].toFixed(2));
    
    
// })


// 泛形甘薯类型
// const getArray:<T>(arg:T,times:number)=>T[]=(arg,times)=>{
//     return new Array(times).fill(arg)
// }
// type GetArray=<T>(arg:T,times:number)=>T[]
// const getArray:GetArray=<T>(arg:Text,times:number):T[]=>{
//     return new Array(times).fill(arg)
// }

//  简单定义
// const getArray: <T>(arg: T, times: number) => T[] = (arg, times) => {
//     return new Array(times).fill(arg);
//   };
//   // ex2: 使用类型别名
//   type GetArray = <T>(arg: T, times: number) => T[];
//   const getArray: GetArray = <T>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg);
//   }

// interface GetArray {
//     <T>(arg: T, times: number): T[];
//   }
//   const getArray: GetArray = <T>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg);
//   };

//泛形约束
// interface ValueWithLength {
//     length: number;
//   }
//   const v: ValueWithLength = {}; // error Property 'length' is missing in type '{}' but required in type 'ValueWithLength'
  
  
//   interface ValueWithLength {
//     length: number;
//   }
//   const getLength = <T extends ValueWithLength>(param: T): number => {
//     return param.length;
//   };
//   getLength("abc"); // 3
//   getLength([1, 2, 3]); // 3
//   getLength({ length: 3 }); // 3
//   getLength(123); // error 类型“123”的参数不能赋给类型“ValueWithLength”的参数

//泛形约束中使用参数类型
// const getProps = (object, propName) => {
//     return object[propName];
//   };
//   const obj = { a: "aa", b: "bb" };
//   getProps(obj, "c"); // undefined

//   const getProp = <T, K extends keyof T>(object: T, propName: K) => {
//     return object[propName];
//   };
//   const obj = { a: "aa", b: "bb" };
//   getProp(obj, "c"); // 类型“"c"”的参数不能赋给类型“"a" | "b"”的参数






//泛形2
/**
 * any类型，表达一个值为任意类型的时候，指定他的类型为any，
 * 
 * 
 * new Array()  创建数组的长度
 * .fill，填充数组的方法，将数据填充到其中，分别以不同的数据类型进行填充
 * 
 */
// const getArray=(value:any,times:number=5):any[]=>{
//     return new Array(times).fill(value)
// }

// getArray([1],2).forEach(item=>{
//     console.log(item.length);
    
// })

// getArray(2,3).forEach(item=>{
//     console.log(item.length);   //error
    
// })
//简单使用
// const getArray=<T>(value:Text,times:number=5):T[]=>{
//     return new Array(times).fill(value)
// }
//         // 括号里右边的三是循环左边数组length的次数，左边数组的length，就是循环三次2，2是数组有俩个下标
// getArray<number[]>([1,2],3).forEach(item=>{
//     console.log(item.length);
// })
// getArray<number>([2],3).forEach(item=>{
//     console.log(item.length); //undifinde
//     //类型“number”上不存在属性“length”。
// })

// getArray(2,3).forEach(item=>{
//     console.log(item.length);   //error  因为需要的是数组不是数字类型2
    
// })

//泛形变量
// const getLength=<T>(param:T):number=>{    
//     return  param.length     //类型“T”上不存在属性“length”。
// }  

// const getArray=<T,U>(param1:Text,param2:U,times:number):[T,U][]=>{
//     return new Array(times).fill([param1,param2])
// }
// getArray(1,'a',3).forEach(item=>{
//     console.log(item[0].length); 
//     console.log(item[1].toFixed(2));
    
    
// })


// 泛形甘薯类型
// const getArray:<T>(arg:T,times:number)=>T[]=(arg,times)=>{
//     return new Array(times).fill(arg)
// }
// type GetArray=<T>(arg:T,times:number)=>T[]
// const getArray:GetArray=<T>(arg:Text,times:number):T[]=>{
//     return new Array(times).fill(arg)
// }

//  简单定义
// const getArray: <T>(arg: T, times: number) => T[] = (arg, times) => {
//     return new Array(times).fill(arg);
//   };
//   // ex2: 使用类型别名
//   type GetArray = <T>(arg: T, times: number) => T[];
//   const getArray: GetArray = <T>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg);
//   }

// interface GetArray {
//     <T>(arg: T, times: number): T[];
//   }
//   const getArray: GetArray = <T>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg);
//   };

//泛形约束
// interface ValueWithLength {
//     length: number;
//   }
//   const v: ValueWithLength = {}; // error Property 'length' is missing in type '{}' but required in type 'ValueWithLength'
  
  
//   interface ValueWithLength {
//     length: number;
//   }
//   const getLength = <T extends ValueWithLength>(param: T): number => {
//     return param.length;
//   };
//   getLength("abc"); // 3
//   getLength([1, 2, 3]); // 3
//   getLength({ length: 3 }); // 3
//   getLength(123); // error 类型“123”的参数不能赋给类型“ValueWithLength”的参数

//泛形约束中使用参数类型
// const getProps = (object, propName) => {
//     return object[propName];
//   };
//   const obj = { a: "aa", b: "bb" };
//   getProps(obj, "c"); // undefined

//   const getProp = <T, K extends keyof T>(object: T, propName: K) => {
//     return object[propName];
//   };
//   const obj = { a: "aa", b: "bb" };
//   getProp(obj, "c"); // 类型“"c"”的参数不能赋给类型“"a" | "b"”的参数










//泛形3
/**
 * any类型，表达一个值为任意类型的时候，指定他的类型为any，
 * 
 * 
 * new Array()  创建数组的长度
 * .fill，填充数组的方法，将数据填充到其中，分别以不同的数据类型进行填充
 * 
 */
// const getArray=(value:any,times:number=5):any[]=>{
//     return new Array(times).fill(value)
// }

// getArray([1],2).forEach(item=>{
//     console.log(item.length);
    
// })

// getArray(2,3).forEach(item=>{
//     console.log(item.length);   //error
    
// })
//简单使用
// const getArray=<T>(value:Text,times:number=5):T[]=>{
//     return new Array(times).fill(value)
// }
//         // 括号里右边的三是循环左边数组length的次数，左边数组的length，就是循环三次2，2是数组有俩个下标
// getArray<number[]>([1,2],3).forEach(item=>{
//     console.log(item.length);
// })
// getArray<number>([2],3).forEach(item=>{
//     console.log(item.length); //undifinde
//     //类型“number”上不存在属性“length”。
// })

// getArray(2,3).forEach(item=>{
//     console.log(item.length);   //error  因为需要的是数组不是数字类型2
    
// })

//泛形变量
// const getLength=<T>(param:T):number=>{    
//     return  param.length     //类型“T”上不存在属性“length”。
// }  

// const getArray=<T,U>(param1:Text,param2:U,times:number):[T,U][]=>{
//     return new Array(times).fill([param1,param2])
// }
// getArray(1,'a',3).forEach(item=>{
//     console.log(item[0].length); 
//     console.log(item[1].toFixed(2));
    
    
// })


// 泛形甘薯类型
// const getArray:<T>(arg:T,times:number)=>T[]=(arg,times)=>{
//     return new Array(times).fill(arg)
// }
// type GetArray=<T>(arg:T,times:number)=>T[]
// const getArray:GetArray=<T>(arg:Text,times:number):T[]=>{
//     return new Array(times).fill(arg)
// }

//  简单定义
// const getArray: <T>(arg: T, times: number) => T[] = (arg, times) => {
//     return new Array(times).fill(arg);
//   };
//   // ex2: 使用类型别名
//   type GetArray = <T>(arg: T, times: number) => T[];
//   const getArray: GetArray = <T>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg);
//   }

// interface GetArray {
//     <T>(arg: T, times: number): T[];
//   }
//   const getArray: GetArray = <T>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg);
//   };

//泛形约束
// interface ValueWithLength {
//     length: number;
//   }
//   const v: ValueWithLength = {}; // error Property 'length' is missing in type '{}' but required in type 'ValueWithLength'
  
  
//   interface ValueWithLength {
//     length: number;
//   }
//   const getLength = <T extends ValueWithLength>(param: T): number => {
//     return param.length;
//   };
//   getLength("abc"); // 3
//   getLength([1, 2, 3]); // 3
//   getLength({ length: 3 }); // 3
//   getLength(123); // error 类型“123”的参数不能赋给类型“ValueWithLength”的参数

//泛形约束中使用参数类型
// const getProps = (object, propName) => {
//     return object[propName];
//   };
//   const obj = { a: "aa", b: "bb" };
//   getProps(obj, "c"); // undefined

//   const getProp = <T, K extends keyof T>(object: T, propName: K) => {
//     return object[propName];
//   };
//   const obj = { a: "aa", b: "bb" };
//   getProp(obj, "c"); // 类型“"c"”的参数不能赋给类型“"a" | "b"”的参数