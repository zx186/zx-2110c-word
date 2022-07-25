# TypeScript 笔记

[TOC]



### 一，为什么使用 TS

- ```
  因为 JS 语言是一种动态语言，且在编写代码的过程当中编译器并不会报错，这导致后期维护十分困难，微软在 JS 的基础上进行拓展形成了 TypeScript
  ```

### 二，TS 的优点和缺点

- 优点

- - TypeScript 增加了代码的可读性和可维护性

    ```
    1、类型系统实际上是最好的文档，大部分的函数看看类型的定义就知道如何使用了。
    2、可以在编译阶段就发现大部分的错误，这总比在运行时出错好。
    3、增强了编译器和IDE的功能，包括代码补全，接口提示，跳转到定义，重构等。
    ```

  - TypeScript 非常包容

    ```
    1、Typescript是javascript的超集，.js文件可以直接重命名为.ts即可。
    2、即使不显示的定义类型，也能够自动做出类型推导。
    3、可以定义从简单到复杂的几乎一切类型。
    4、兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取。
    ```

  - TypeScript 拥有活跃的社区

    ```
    1、大部分第三方库都有提供给Typescript的类型定义文件
    2、大型开源编程软件,和多方人员合作
    ```

  - TypeScript 兼容性很强

    ```
    1、TypeScript会在编译时期去掉数据类型和特有语法，生成纯粹的 JavaScript 代码。由于最终在浏览器上运行的是 JavaScript 语言，所以 TypeScript 并不依赖于浏览器的支持，也并不会带来兼容问题，然后运行在浏览器、Node.js 等任何能运行 JavaScript 的环境中。
    2、TypeScript扩展了JavaScript的语法，所以任何现有的JavaScript程序可以运行在TypeScript环境中,因此我们可以在 ts 中继续写 js 的代码而不会报错,这意味着 JavaScript 项目能够渐进式的迁移到 TypeScript
    ```

  - TypeScript 拥抱最新的 ECMAScript 标准,与时俱进

    ```
    1、TypeScript 与标准同步发展，符合最新的 ECMAScript 标准（stage 3）
    ```

  - ypeScript 的编译步骤可以输出运行之前的错误

- 缺点
  - 有一定的学习成本，需要理解接口，泛型，类，枚举类型等前端工程师可能不是很熟悉的概念。
  - 短期内会增加开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，Typescript能够减少其维护成本。
  - 集成到构建流程需要的一些工作量。
  - 可能和一些库结合的不是很完美。

### 三，TS的安装

- npm 全局安装 TS

  ```
  npm install -g typescript
  ```

- 检查是否安装成功 ( 有版本号，说明安装成功 )

  ```
  tsc -v
  ```

- 创建 TS 文件，npm 编译代码 ( 结果会创建一个相同的 JS 文件 )

  ```
  tsc 文件名.ts
  ```

- 自动编译设置 ( 在存放 TS 的文件夹下打开终端 执行以下代码，会生成一个 json 文件 )

  ```
  tsc --init
  ```

- 在 VS code 终端--->选择运行任务--->输入 tsc 按下回车--->选择 tsc 监视

  

### 四，TS 的数据类型

1. 数字值类型（ number ）

   ```typescript
   let num:number=1;
   ```

2. 布尔值类型（ boolean ）

   ```typescript
   let bln:boolean=false;
   ```

3. 字符串类型（ string ）

   ```typescript
   let str:string='1'
   ```

4. 数组（ Array<元素类型> || 元素类型[ ] ）

   - 第一种

     ```typescript
     let arr:number[]=[1,2,3,4]
     let arr2:string[]=[1,2,3,4]
     ```

   - 第二种

     ```typescript
     let arr:Array<number>=[1,2,3,4]
     let arr2:Array<string>=[1,2,3,4]
     ```

5. 对象

   ```typescript
   let obj:{name:string,age:number}
   obj={name:'何润昊',age:19}
   ```

6. undefined 和 null 类型

   - null 和 undefined 有一些共同特点，在 JavaScript 中，undefined 和 null 是两个基本数据类型。在 TypeScript 中，这两者都有各自的类型即 undefined 和 null，也就是说它们既是实际的值，也是类型。

   ```typescript
   let u:undefined=undefined;
   let n:null=null
   ```

7. 元组 （Tuple）

   元组和数组的区别:

   ​	数组: 合并了相同类型的对象，长度不限制

   ​	元组（Tuple）: 合并了不同类型的对象,已知长度

   ```typescript
   // 定义 元组 它具有 string 和 number 
   let tup:[string,number]=['1'，1];
   // 当赋值 或 访问一个已知索引的元素时，会得到正确的类型
   let tup:[string,number];
   tup[0]='123';
   tup[1]=1;
   ```

8. 枚举（ enum ）

   ​	`enum`类型是对JavaScript标准数据类型的一个补充,使用枚举类型可以为一组数值赋予友好的名字。

   ```typescript
   // 当定义的变量越多，我们单独封装，会越好维护以后的项目，方便项目查看
   // 定义 枚举 的时候首字母大写
   // 枚举 与 对象 不同，枚举是用等于号来赋值的，枚举也是一个作用域代码块
   enum Color {
       Red=1,
       Blue=2,
       Green=3
   }
   ```

9. Any（ any ）

   ​	JavaScript 的类型是灵活的，程序有时也是多变的。有时，我们在编写代码的时候，并不能清楚地知道一个值到底是什么类型，这时就需要用到 any 类型，即任意类型。

   ```typescript
   let value:any;
   // 这个时候 value 可以是任意类型的变量
   value='123'
   value-123
   value=true
   // 我们也可以用 any 定义数组
   let arr:any[]=['123',123,true]
   // ***********不要滥用 any 如果任何值都指定为 any 那么 TypeScript 就失去了意义
   ```

10. void 类型

    ​	void 和 any 相反，any 是表示任意类型，void 是表示没有任何类型

    ​	在我们定义函数，函数没有返回值的时候用

    ```typescript
    function fun():void{
    	console.log('我是 void')
    }
    // 如果有返回值，那么就要根据返回值进行定义，就不能定义为 void
    function fun():string{
        return '我是 string'
    }
    // void 类型的变量只能赋值为 `undefined``**，**其他类型不能赋值给 void 类型的变量
    ```

    

11. never 类型

    1.  `never`类型表示的是那些永不存在的值的类型。
    2. `never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型， 变量也可能是 `never`类型。
    3. `never`类型是任何类型的子类型，也可以赋值给任何类型，然而，*没有*类型是`never`的子类型或可以赋值给`never`类型（除了`never`本身之外）。 即使 `any`也不可以赋值给`never`。
    4. 简单来说 `never` 就是用来抛出

    ```typescript
    // 返回 never 的函数必须存在无法到达的终点
    function error(message:string):never{
        throw new Error(message)
    }
    //推断的返回值类型为 never
    function fun(){
        return error('Something failed')
    }
    ```

12. unknown

    ​	也就是所谓的“**unknown相对于any是安全的**”。怎么理解呢？我们知道当一个值我们不能确定它的类型的时候，可以指定它是any类型；但是当指定了any类型之后，这个值基本上是“废”了，你可以随意对它进行属性方法的访问，不管有的还是没有的，可以把它当做任意类型的值来使用，这往往会产生问题，如下：

    ```typescript
    let value: any
    console.log(value.name)
    console.log(value.toFixed())
    console.log(value.length)
    ```

    ​	上面这些语句都不会报错，因为value是any类型，所以后面三个操作都有合法的情况，当value是一个对象时，访问name属性是没问题的；当value是数值类型的时候，调用它的toFixed方法没问题；当value是字符串或数组时获取它的length属性是没问题的。

    ​	而当你指定值为unknown类型的时候，如果没有通过基于控制流的类型断言来缩小范围的话，是不能对它进行任何操作的，关于类型断言，我们后面小节会讲到。总之这里你知道了，unknown类型的值不是可以随便操作的。

    ​	我们这里只是先来了解unknown和any的区别，unknown还有很多复杂的规则，但是涉及到很多后面才学到的知识，所以需要我们学习了高级类型之后才能再讲解。

### 五，接口（ interface ）

- 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约

  ```typescript
  interface parsion{
      name:string,
      age:number,
      sex:boolean
  }
  function getFullName({ name, age, sex }: parsion): string {
     return `My name ${name}, My age is ${age}, like smoke, ${sex}`
  }
  ```

  1. #### 索引类型

     - 我们可以使用接口描述索引的类型和通过索引得到的值的类型，比如一个数组`[‘a’, ‘b’]`，数字索引`0`对应的通过索引得到的值为`’a’`。我们可以同时给索引和值都设置类型

       ```typescript
       interface RoleDic {
         [id: number]: string;
       }
       const role1: RoleDic = {
         0: "super_admin",
         1: "admin"
       };
       const role2: RoleDic = {
         s: "super_admin",  // error 不能将类型"{ s: string; a: string; }"分配给类型"RoleDic"。
         a: "admin"
       };
       const role3: RoleDic = ["super_admin", "admin"];
       // 上面的例子中 role3 定义了一个数组，索引为数值类型，值为字符串类型。
       // 你也可以给索引设置`readonly`，从而防止索引返回值被修改。
       
       //这里有的点需要注意，你可以设置索引类型为 number。但是这样如果你将属性名设置为字符串类型，则会报错；但是如果你设置索引类型为字符串类型，那么即便你的属性名设置的是数值类型，也没问题。因为 JS 在访问属性值的时候，如果属性名是数值类型，会先将数值类型转为字符串，然后再去访问。
       ```

  2. #### 继承接口

     - 接口可以继承，这和类一样，这提高了接口的可复用性

     - 我们定义一个`Vegetables`接口，它会对`color`属性进行限制。再定义两个接口，一个为`Tomato`，一个为`Carrot`，这两个类都需要对`color`进行限制，而各自又有各自独有的属性限制，我们可以这样定义：

       ```typescript
       interface Vegetables {
         color: string;
       }
       interface Tomato {
         color: string;
         radius: number;
       }
       interface Carrot {
         color: string;
         length: number;
       }
       //
       //三个接口中都有对`color`的定义，但是这样写很繁琐，所以我们可以用继承来改写
       //
       interface Vegetables {
         color: string;
       }
       interface Tomato extends Vegetables {
         radius: number;
       }
       interface Carrot extends Vegetables {
         length: number;
       }
       const tomato: Tomato = {
         radius: 1.2 // error  Property 'color' is missing in type '{ radius: number; }'
       };
       // 上面定义的 `tomato` 变量因为缺少了从`Vegetables`接口继承来的 `color` 属性，从而报错
       const carrot: Carrot = {
         color: "orange",
         length: 20
       };
       //
       //一个接口可以被多个接口继承，同样，一个接口也可以继承多个接口，多个接口用逗号隔开。比如我们再定义一个`Food`接口，`Tomato` 也可以继承 `Food`
       //
       interface Vegetables {
         color: string;
       }
       interface Food {
         type: string;
       }
       interface Tomato extends Food, Vegetables {
         radius: number;
       }
       
       const tomato: Tomato = {
         type: "vegetables",
         color: "red",
         radius: 1.2
       };  // 在定义tomato变量时将继承过来的color和type属性同时声明
       ```

       

  3. ### 混合类型接口

     - JS 的类型是灵活的。在 JS 中，函数是对象类型。对象可以有属性，所以有时我们的一个对象，它既是一个函数，也包含一些属性。比如我们要实现一个计数器函数，比较直接的做法是定义一个函数和一个全局变量

       ```typescript
       let count = 0;
       const countUp = () => count++;
       
       // 但是这种方法需要在函数外面定义一个变量，更优一点的方法是使用闭包：(局部储存变量,并且不会被垃圾回收机制回收掉)
       // 以下是 javascript 格式
       
       const countUp = (() => {
         let count = 0;
         return () => {
           return ++count;
         };
       })();
       console.log(countUp()); // 1
       console.log(countUp()); // 2
       
       // 我们可以看到，我们把一个函数赋值给`countUp`，又给它绑定了一个属性`count`，我们的计数保存在这个 `count` 属性中。
       // 以下是 TypeScript 格式
       
       interface Counter {
         (): void; // 这里定义Counter这个结构必须包含一个函数，函数的要求是无参数，返回值为void，即无返回值
         count: number; // 而且这个结构还必须包含一个名为count、值的类型为number类型的属性
       }
       const getCounter = (): Counter => { // 这里定义一个函数用来返回这个计数器
         const c = () => { // 定义一个函数，逻辑和前面例子的一样
           c.count++;
         };
         c.count = 0; // 再给这个函数添加一个count属性初始值为0
         return c; // 最后返回这个函数对象
       };
       const counter: Counter = getCounter(); // 通过getCounter函数得到这个计数器
       counter();
       console.log(counter.count); // 1
       counter();
       console.log(counter.count); // 2
       // 上面的例子中，`getCounter`函数返回值类型为`Counter`，它是一个函数，无返回值，即返回值类型为`void`，它还包含一个属性`count`，属性返回值类型为`number`。
       ```

       

### 六，可选属性  ?

- 接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。

- 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个`?`符号。

  ```typescript
  interface parsion{
      name:string,
      age:number,
      sex:boolean,
      color?:string
      // ? 可选属性，可以进行赋值也可以不赋值
  }
  function getFullName({ name, age, sex }: parsion): string {
     return `My name ${name}, My age is ${age}, like smoke, ${sex}`
  }
  ```

  

### 七，类型断言

- 可以用来手动指定一个值的类型（ 有时候一个数据的值是多变的,并不是单一,这个时候我们就要告诉编译器,我知道我要什么,我自己检查了,不需要你检查.我自己定义他的类型 ）

  1. as  类型断言

     ```typescript
     let someName: any;
             someName = 123
             someName = '123'
             let someNameValueLength = (someName as string).length
     ```

  2. <> 类型断言

     ```typescript
     let someValue: any;
         someValue = 123;
         someValue = "dddd";
         let someValueLength = (<string>someValue).length
     ```

     

### 八，交叉类型  （ & ）

- 交叉类型就是取多个类型的并集，使用 & 符号定义，被&符链接的多个类型构成一个交叉类型，表示这个类型同时具备这几个连接起来的类型的特点

  ```typescript
  interface use {
          name: string,
          age: number
      }
      interface per {
          sex: number
      }
      type allInfo = use & per
      let persion: allInfo = {name: "xxxx",age: 1,sex:1}
  ```

  

### 九，联合类型 （ | ）

- 可以通过管道 (|) 将变量设置多种类型，赋值时可以根据设置的类型来赋值。

  ```typescript
  let allType: number | string 
      allType = 1;
      allType = "eddd"
  ```

  

### 十，只读属性 （readonly）

- 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用`readonly`来指定只读属性

  ```typescript
  interface Point {
      readonly x: number;
      readonly y: number;
  }
  //赋值后，x和y再也不能被改变了。
  ```

  

### 十一，类型别名

- 类型别名用来给一个类型起个新名字

  ```typescript
  interface AddFunc {
     (num1: number, num2: number): number
  }
  const add: AddFunc = (n1, n2) => n1 + n2;
  add(1, 2);
  ```

  

