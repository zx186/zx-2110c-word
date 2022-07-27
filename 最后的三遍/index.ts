
//1。Interface声明可以被覆盖
// interface Info{
//     name:string
// }
// interface Info{
//     age:number
// }
// let info:Info
// info={//类型 "{ name: string; }" 中缺少属性 "age"，但类型 "Info" 中需要该属性。
//     name:'listson'
// }

// info={
//     name:'23',
//     age:23
// }

//2.type智能声明一次，不能被覆盖
// type Info={ //标识符“Info”重复。  type只能声明一次
//     name:string
// }
// type Info={
//     age:number
// }
// // 2
// //Interface声明可以被覆盖
// interface aa{
//     name:string
// }
// interface aa{
//     age:number
// }
// let bb:aa
// bb={
//     name:'23',
//     age:23
// }
// //interface可以叠加

// //type只能声明一次
// type Info={
//     name:string
// }
// // type Info={  //重复了会报错
//     // age:number
// // }

// 3
//Interface声明可以被覆盖
// interface aa{
//     name:string
// }
// interface aa{
//     age:number
// }
// let bb:aa
// bb={
//     name:'23',
//     age:23
// }
//interface可以叠加

//type只能声明一次
// type Info={
//     name:string
// }
// type Info={  //重复了会报错
    // age:number
// }

// 1
//装饰器组合
// @setName @setAge target
// @setName
// @setAge
// target
//下面俩个装饰器工厂为例：
// function setName(){
//     console.log('get setName');
//     return function(target){
//         console.log('setName');
//     }
// }
// function setAge(){
//     console.log('get setAge');
//     return function(target){
//         console.log('setAge'); 
//     }
// }
// @setName
// @setAge
// class Test{}

// function addName(constructor: { new (): any }) {
//     constructor.prototype.name = "lison";
//   }
//   @addName
//   class A {}
//   const a = new A();
//   console.log(a.name); // error 类型“A”上不存在属性“name”

//   function addName(constructor: { new (): any }) {
//     constructor.prototype.name = "lison";
//   }
//   @addName
//   class A {}
//   interface A {
//     name: string;
//   }
//   const a = new A();
//   console.log(a.name); // "lison"
  
//   function classDecorator<T extends { new (...args: any[]): {} }>(target: T) {
//     return class extends target {
//       newProperty = "new property";
//       hello = "override";
//     };
//   }
//   @classDecorator
//   class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//       this.hello = m;
//     }
//   }
//   console.log(new Greeter("world"));

//   function classDecorator(target: any): any {
//     return class {
//       newProperty = "new property";
//       hello = "override";
//     };
//   }
//   @classDecorator
//   class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//       this.hello = m;
//     }
//   }
//   console.log(new Greeter("world"));


//   //方法装饰器
//   var obj = {};
// Object.defineProperty(obj, "name", {
//   value: "lison",
//   writable: false,
//   configurable: true,
//   enumerable: true
// });
// console.log(obj);
// // { name: 'lison' }
// obj.name = "test";
// console.log(obj);
// // { name: 'lison' }
// for (let key in obj) {
//   console.log(key);
// }
// // 'name'
// Object.defineProperty(obj, "name", {
//   enumerable: false
// });
// for (let key in obj) {
//   console.log(key);
// }
// // 什么都没打印
// Object.defineProperty(obj, "name", {
//   writable: true
// });
// obj.name = "test";
// console.log(obj);
// // { name: 'test' }
// Object.defineProperty(obj, "name", {
//   configurable: false
// });
// Object.defineProperty(obj, "name", {
//   writable: false
// });
// // error Cannot redefine property: name


// function enumerable(bool: boolean) {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       console.log(target); // { getAge: f, constructor: f }
//       descriptor.enumerable = bool;
//     };
//   }
//   class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//       return this.age;
//     }
//   }
//   const info = new Info(18);
//   console.log(info);
//   // { age: 18 }
//   for (let propertyName in info) {
//     console.log(propertyName);
//   }
//   // "age"

//   function enumerable(bool: boolean): any {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       return {
//         value: function() {
//           return "not age";
//         },
//         enumerable: bool
//       };
//     };
//   }
//   class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//       return this.age;
//     }
//   }
//   const info = new Info();
//   console.log(info.getAge()); // "not age"

//   //访问器装饰器
//   function enumerable(bool: boolean) {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       descriptor.enumerable = bool;
//     };
//   }
//   class Info {
//     private _name: string;
//     constructor(name: string) {
//       this._name = name;
//     }
//     @enumerable(false)
//     get name() {
//       return this._name;
//     }
//     @enumerable(false) // error 不能向多个同名的 get/set 访问器应用修饰器
//     set name(name) {
//       this._name = name;
//     }
//   }

//   //属性装饰器
//   function printPropertyName(target: any, propertyName: string) {
//     console.log(propertyName);
//   }
//   class Info {
//     @printPropertyName
//     name: string;
//     @printPropertyName
//     age: number;
//   }

// //参数装饰器

// function required(target: any, propertName: string, index: number) {
//   console.log(`修饰的是${propertName}的第${index + 1}个参数`);
// }
// class Info {
//   name: string = "lison";
//   age: number = 18;
//   getInfo(prefix: string, @required infoType: string): any {
//     return prefix + " " + this[infoType];
//   }
// }
// interface Info {
//   [key: string]: string | number | Function;
// }
// const info = new Info();
// info.getInfo("hihi", "age"); // 修饰的是getInfo的第2个参数



// 2
// function addName(constructor: { new (): any }) {
//     constructor.prototype.name = "lison";
//   }
//   @addName
//   class A {}
//   const a = new A();
//   console.log(a.name); // error 类型“A”上不存在属性“name”

//   function addName(constructor: { new (): any }) {
//     constructor.prototype.name = "lison";
//   }
//   @addName
//   class A {}
//   interface A {
//     name: string;
//   }
//   const a = new A();
//   console.log(a.name); // "lison"
  
//   function classDecorator<T extends { new (...args: any[]): {} }>(target: T) {
//     return class extends target {
//       newProperty = "new property";
//       hello = "override";
//     };
//   }
//   @classDecorator
//   class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//       this.hello = m;
//     }
//   }
//   console.log(new Greeter("world"));

//   function classDecorator(target: any): any {
//     return class {
//       newProperty = "new property";
//       hello = "override";
//     };
//   }
//   @classDecorator
//   class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//       this.hello = m;
//     }
//   }
//   console.log(new Greeter("world"));


//   //方法装饰器
//   var obj = {};
// Object.defineProperty(obj, "name", {
//   value: "lison",
//   writable: false,
//   configurable: true,
//   enumerable: true
// });
// console.log(obj);
// // { name: 'lison' }
// obj.name = "test";
// console.log(obj);
// // { name: 'lison' }
// for (let key in obj) {
//   console.log(key);
// }
// // 'name'
// Object.defineProperty(obj, "name", {
//   enumerable: false
// });
// for (let key in obj) {
//   console.log(key);
// }
// // 什么都没打印
// Object.defineProperty(obj, "name", {
//   writable: true
// });
// obj.name = "test";
// console.log(obj);
// // { name: 'test' }
// Object.defineProperty(obj, "name", {
//   configurable: false
// });
// Object.defineProperty(obj, "name", {
//   writable: false
// });
// // error Cannot redefine property: name


// function enumerable(bool: boolean) {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       console.log(target); // { getAge: f, constructor: f }
//       descriptor.enumerable = bool;
//     };
//   }
//   class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//       return this.age;
//     }
//   }
//   const info = new Info(18);
//   console.log(info);
//   // { age: 18 }
//   for (let propertyName in info) {
//     console.log(propertyName);
//   }
//   // "age"

//   function enumerable(bool: boolean): any {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       return {
//         value: function() {
//           return "not age";
//         },
//         enumerable: bool
//       };
//     };
//   }
//   class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//       return this.age;
//     }
//   }
//   const info = new Info();
//   console.log(info.getAge()); // "not age"

//   //访问器装饰器
//   function enumerable(bool: boolean) {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       descriptor.enumerable = bool;
//     };
//   }
//   class Info {
//     private _name: string;
//     constructor(name: string) {
//       this._name = name;
//     }
//     @enumerable(false)
//     get name() {
//       return this._name;
//     }
//     @enumerable(false) // error 不能向多个同名的 get/set 访问器应用修饰器
//     set name(name) {
//       this._name = name;
//     }
//   }

//   //属性装饰器
//   function printPropertyName(target: any, propertyName: string) {
//     console.log(propertyName);
//   }
//   class Info {
//     @printPropertyName
//     name: string;
//     @printPropertyName
//     age: number;
//   }

// //参数装饰器

// function required(target: any, propertName: string, index: number) {
//   console.log(`修饰的是${propertName}的第${index + 1}个参数`);
// }
// class Info {
//   name: string = "lison";
//   age: number = 18;
//   getInfo(prefix: string, @required infoType: string): any {
//     return prefix + " " + this[infoType];
//   }
// }
// interface Info {
//   [key: string]: string | number | Function;
// }
// const info = new Info();
// info.getInfo("hihi", "age"); // 修饰的是getInfo的第2个参数



// 3
// function addName(constructor: { new (): any }) {
//     constructor.prototype.name = "lison";
//   }
//   @addName
//   class A {}
//   const a = new A();
//   console.log(a.name); // error 类型“A”上不存在属性“name”

//   function addName(constructor: { new (): any }) {
//     constructor.prototype.name = "lison";
//   }
//   @addName
//   class A {}
//   interface A {
//     name: string;
//   }
//   const a = new A();
//   console.log(a.name); // "lison"
  
//   function classDecorator<T extends { new (...args: any[]): {} }>(target: T) {
//     return class extends target {
//       newProperty = "new property";
//       hello = "override";
//     };
//   }
//   @classDecorator
//   class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//       this.hello = m;
//     }
//   }
//   console.log(new Greeter("world"));

//   function classDecorator(target: any): any {
//     return class {
//       newProperty = "new property";
//       hello = "override";
//     };
//   }
//   @classDecorator
//   class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//       this.hello = m;
//     }
//   }
//   console.log(new Greeter("world"));


//   //方法装饰器
//   var obj = {};
// Object.defineProperty(obj, "name", {
//   value: "lison",
//   writable: false,
//   configurable: true,
//   enumerable: true
// });
// console.log(obj);
// // { name: 'lison' }
// obj.name = "test";
// console.log(obj);
// // { name: 'lison' }
// for (let key in obj) {
//   console.log(key);
// }
// // 'name'
// Object.defineProperty(obj, "name", {
//   enumerable: false
// });
// for (let key in obj) {
//   console.log(key);
// }
// // 什么都没打印
// Object.defineProperty(obj, "name", {
//   writable: true
// });
// obj.name = "test";
// console.log(obj);
// // { name: 'test' }
// Object.defineProperty(obj, "name", {
//   configurable: false
// });
// Object.defineProperty(obj, "name", {
//   writable: false
// });
// // error Cannot redefine property: name


// function enumerable(bool: boolean) {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       console.log(target); // { getAge: f, constructor: f }
//       descriptor.enumerable = bool;
//     };
//   }
//   class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//       return this.age;
//     }
//   }
//   const info = new Info(18);
//   console.log(info);
//   // { age: 18 }
//   for (let propertyName in info) {
//     console.log(propertyName);
//   }
//   // "age"

//   function enumerable(bool: boolean): any {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       return {
//         value: function() {
//           return "not age";
//         },
//         enumerable: bool
//       };
//     };
//   }
//   class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//       return this.age;
//     }
//   }
//   const info = new Info();
//   console.log(info.getAge()); // "not age"

//   //访问器装饰器
//   function enumerable(bool: boolean) {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       descriptor.enumerable = bool;
//     };
//   }
//   class Info {
//     private _name: string;
//     constructor(name: string) {
//       this._name = name;
//     }
//     @enumerable(false)
//     get name() {
//       return this._name;
//     }
//     @enumerable(false) // error 不能向多个同名的 get/set 访问器应用修饰器
//     set name(name) {
//       this._name = name;
//     }
//   }

//   //属性装饰器
//   function printPropertyName(target: any, propertyName: string) {
//     console.log(propertyName);
//   }
//   class Info {
//     @printPropertyName
//     name: string;
//     @printPropertyName
//     age: number;
//   }

// //参数装饰器

// function required(target: any, propertName: string, index: number) {
//   console.log(`修饰的是${propertName}的第${index + 1}个参数`);
// }
// class Info {
//   name: string = "lison";
//   age: number = 18;
//   getInfo(prefix: string, @required infoType: string): any {
//     return prefix + " " + this[infoType];
//   }
// }
// interface Info {
//   [key: string]: string | number | Function;
// }
// const info = new Info();
// info.getInfo("hihi", "age"); // 修饰的是getInfo的第2个参数