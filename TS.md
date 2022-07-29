# TS 笔记

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
   // 字面量声明对象
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

  

### 十一，类型别名（ type ）

- 为函数和函数参数定义类型
- type 和 interface 的区别
  1. type是赋值,进行别名的修改 ,interface 声明一个类型
  2. type 可以声明基础类型数据, interface只能声明对象
  3. interface可以使用extends进行继承,但是type不可以,因为是类型别名,属于赋值的一种
  4. interface 可以重复声明,自动合并一起,type不可以重复声明

- 相同点

  1. type和interface都可以声明对象和类型

- ```typescript
  // type用来声明基础类型
  type user = string
  //接收一个字符串类型的数据，返回一个user类型(字符串类型)的数据
  function Input(str: user): user {
      return str.slice(0, 2)
  }
  //把返回结果赋值给userInput
  let userInput = Input('hello')
  //重新给其赋值一个字符串类型的值,没有报错,说明用type声明的字符串类型生效
  userInput = 'new'
  
  
  // type用来一个类似于接口的对象
  type IParams = {
      methods: string,
      url: string,
      data?: any
  }
  
  // interface继承type类型
  interface Animal{
      name:string
  }
  type Bear = {
      honey:boolean
  }
  
  interface Animal extends Bear {
      color: string
  }
  
  const bear:Animal={
      name:'winie',
      color: 'red',
      honey: true,
  }
  ```

- 可选属性 ?  type 的必选参数不能位于可选参数后

### 十二，泛型

1. ##### 泛型总结

2. 使用泛型来弥补使用any造成的类型信息缺失；当我们的类型是灵活任意的，又要准确使用类型信息时，就需要使用泛型来关联类型信息，其中离不开的是泛型变量；泛型变量可以是多个，且命名随意；如果需要对泛型变量的类型做进一步的限制，则需要用到我们最后讲的泛型约束；使用泛型约束通过`extends`关键字指定要符合的类型，从而满足更多场景的需求

- **泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性**, 使用标识符号 **<任意大写字母>**

  ```typescript
  const getArray = <T>(value: T, times: number = 5): T[] => {
    return new Array(times).fill(value);
  };
  // 我们在定义函数之前，使用`<>`符号定义了一个泛型变量 T，这个 T 在这次函数定义中就代表某一种类型，它可以是基础类型，也可以是联合类型等高级类型。定义了泛型变量之后，你在函数中任何需要指定类型的地方使用 T 都代表这一种类型。比如当我们传入 value 的类型为数值类型，那么返回的数组类型`T[]`就表示`number[]`。现在我们再来调用一下这个 getArray 函数
  getArray<number[]>([1, 2], 3).forEach(item => {
    console.log(item.length);
  });
  getArray<number>(2, 3).forEach(item => {
    console.log(item.length); // 类型“number”上不存在属性“length”
  });
  // 我们在调用 getArray 的时候，在方法名后面使用`<>`传入了我们的泛型变量 T 的类型`number[]`，那么在定义 getArray 函数时使用 T 指定类型的地方，都会使用`number[]`指定。但是你也可以省略这个`<number[]>`，TypeScript 会根据你传入函数的 value 值的类型进行推断
  ```

  

- 泛型变量

  1. 当我们使用泛型的时候，你必须在处理类型涉及到泛型的数据的时候，把这个数据当做任意类型来处理。这就意味着不是所有类型都能做的操作不能做，不是所有类型都能调用的方法不能调用。
  
     ```typescript
     const getLength = <T>(param: T): number => {
       return param.length; // error 类型“T”上不存在属性“length”
     };
     // 当我们获取一个类型为泛型的变量 param 的 length 属性值时，如果 param 的类型为数组 Array 或字符串 string 类型是没问题的，它们有 length 属性。但是如果此时传入的 param 是数值 number 类型，那这里就会有问题了。
     ```

- 泛型函数

  1. 我们可以定义一个泛型函数类型，给一个函数定义函数类型，现在我们可以使用泛型定义函数类型：

     ```typescript
     // 简单定义
     const getArray: <T>(arg: T, times: number) => T[] = (arg, times) => {
       return new Array(times).fill(arg);
     };
     // 使用类型别名定义
     type GetArray = <T>(arg: T, times: number) => T[];
     const getArray: GetArray = <T>(arg: T, times: number): T[] => {
       return new Array(times).fill(arg);
     };
     ```

  2. 使用接口的形式来定义泛型函数类型：

     ```typescript
     interface GetArray {
       <T>(arg: T, times: number): T[];
     }
     const getArray: GetArray = <T>(arg: T, times: number): T[] => {
       return new Array(times).fill(arg);
     };
     ```

  3. 还可以把接口中泛型变量提升到接口最外层，这样接口中所有属性和方法都能使用这个泛型变量了

     ```typescript
     interface GetArray<T> {
       (arg: T, times: number): T[];
       tag: T;
     }
     const getArray: GetArray<number> = <T>(arg: T, times: number): T[] => {
       // error 不能将类型“{ <T>(arg: T, times: number): T[]; tag: string; }”分配给类型“GetArray<number>”。
       // 属性“tag”的类型不兼容。
       return new Array(times).fill(arg);
     };
     getArray.tag = "a"; // 不能将类型“"a"”分配给类型“number”
     getArray("a", 1); // 不能将类型“"a"”分配给类型“number”
     
     // 上面例子中将泛型变量定义在接口最外层，所以不仅函数的类型中可以使用 T，在属性 tag 的定义中也可以使用。但在使用接口的时候，要在接口名后面明确传入一个类型，也就是这里的`GetArray<number>`，那么后面的 arg 和 tag 的类型都得是 number 类型。当然了，如果你还是希望 T 可以是任何类型，你可以把`GetArray<number>`换成`GetArray<any>`
     ```

     

- 泛型约束

  1. 当我们使用了泛型时，就意味着这个这个类型是任意类型。但在大多数情况下，我们的逻辑是对特定类型处理的。还记得我们前面讲泛型变量时举的那个例子——当访问一个泛型类型的参数的 length 属性时，会报错"类型“T”上不存在属性“length”"，是因为并不是所有类型都有 length 属性。

  2. 所以我们在这里应该对 T 有要求，那就是类型为 T 的值应该包含 length 属性。说到这个需求，你应该能想到接口的使用，我们可以使用接口定义一个对象必须有哪些属性：

     ```typescript
     interface ValueWithLength {
       length: number;
     }
     const v: ValueWithLength = {}; // error Property 'length' is missing in type '{}' but required in type 'ValueWithLength'
     ```

  3. 泛型约束就是使用一个类型和`extends`对泛型进行约束，之前的例子就可以改为下面这样：

     ```typescript
     interface ValueWithLength {
       length: number;
     }
     const getLength = <T extends ValueWithLength>(param: T): number => {
       return param.length;
     };
     getLength("abc"); // 3
     getLength([1, 2, 3]); // 3
     getLength({ length: 3 }); // 3
     getLength(123); // error 类型“123”的参数不能赋给类型“ValueWithLength”的参数
     
     // 这个例子中，泛型变量T受到约束。它必须满足接口*ValueWithLength*，也就是不管它是什么类型，但必须有一个length属性，且类型为数值类型。例子中后面四次调用getLength方法，传入了不同的值，传入字符串`"abc"`、数组`[1, 2, 3]`和一个包含length属性的对象`{ length: 3 }`都是可以的，但是传入数值`123`不行，因为它没有length属性。
     ```

     

- 在泛型约束中使用类型参数

  1. 当我们定义一个对象，想要对只能访问对象上存在的属性做要求时，该怎么办？先来看下这个需求是什么样子：

     ```typescript
     const getProps = (object, propName) => {
       return object[propName];
     };
     const obj = { a: "aa", b: "bb" };
     getProps(obj, "c"); // undefined
     ```

     当我们访问这个对象的’c’属性时，这个属性是没有的。这里我们需要用到索引类型`keyof`结合泛型来实现对这个问题的检查。索引类型在高级类型一节会详细讲解，这里你只要知道这个例子就可以了：

     ```typescript
     const getProp = <T, K extends keyof T>(object: T, propName: K) => {
       return object[propName];
     };
     const obj = { a: "aa", b: "bb" };
     getProp(obj, "c"); // 类型“"c"”的参数不能赋给类型“"a" | "b"”的参数
     ```

     这里我们使用让`K`来继承索引类型`keyof T`，你可以理解为`keyof T`相当于一个由泛型变量T的属性名构成的联合类型，在这里 K 就被约束为了只能是"a"或"b"，所以当我们传入字符串"c"想要获取对象*obj*的属性"c"时就会报错。

### 十三，类

- **总结: 就是对封装和修饰符有了一定的区别,继承之类的和js是相同的**

  - 传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员来讲就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从ECMAScript 2015，也就是ECMAScript 6开始，JavaScript程序员将能够使用基于类的面向对象的方式。 使用TypeScript，我们允许开发者现在就使用这些特性，并且编译后的JavaScript可以在所有主流浏览器和平台上运行，而不需要等到下个JavaScript版本。

  - TS中的类和ES6中的类的相同点和不同点

    ##### 			      相同点

    1. 都是采用extends语法进行继承

    2. 在constructor中都需要首先使用super(xxx)调用父类构造函数，然后才能给this进行赋值

    3. supper作为方法时指向父类构造函数，而作为对象且在普通方法中时指向父类的原型，在静态方法中时指向父类。

       ##### 不同点

       - TypeScript提供抽象类，抽象方法，和接口继承，具体使用请参考TypeScript官方文档。

       - TypeScript可以对类中属性或方法使用访问限定符。


1. ES6中类的定义

   ```javascript
   // 声明人的类
   class People {
   	   // 类的属性
          constructor(name, age) { // 构造器，实例化方法的时候触发
              this.name = name
              this.age = age
          }
          // 类的方法
          sport(){
              return this.name + '会运动'
          }
    }
   ```

   对类进行实例化

   ``` javascript
   let p = new People('小明',18)
   ```

   调用类的方法

   ```javascript
   console.log(p.sport()); //小明会运动
   ```

   获取类的属性

   ```javascript
   console.log(p.age); // 18
   ```

2. TS中类的定义

   ```typescript
   class People {
       name: string
       age: number
       constructor(name:string,age){
           this.name = name
           this.age = age
       }
       sport():string{
           return `${this.name}会运动`
       }
   }
   ```

   **注意在声明类的时候，需要对类的属性的数据类型进行约束**

   对类进行实例化

   ```typescript
   let p = new People('小明',18)
   // 注意声明类的时候约束name属性为string类型，age属性为数字类型；实例化的时候要严格按照类型传参
   ```

   调用类的方法

   ```typescript
   console.log(p.sport()); //小明会运动
   ```

   获取类的属性

   ```typescript
   console.log(p.age); // 18
   ```

- 类的继承

  1. ES5中的继承

     在ES5中继承可以通过原型链来实现继承

     声明一个动物的构造函数

     ```javascript
     function Animal(name){
          this.name = name
          this.run = ()=>{
             console.log(this.name + '会跑步');
          }
     }
     // 构造函数原型链上添加方法
     Animal.prototype.song = function(){
          console.log(`${this.name}会唱歌`);
     }
     ```

     - 原型链继承

       ```javascript
       function Dog(name){
       
       }
       Dog.prototype = Animal.prototype
       
       let d = new Dog('哈哈')
       d.song() // undefined会唱歌
       ```

     - 原型链加冒充对象的继承方式

       ```javascript
       function Dog(name){
          Animal.call(this,name)
       }
       
       let d = new Dog('哈士奇')
       
       console.log(d.name); // 哈士奇
       console.log(d.run()); // 哈士奇会跑步
       console.log(d.song()); // 报错： d.song is not a function
       // 不能继承原型链上的方法
       ```

     - 组合继承

       ```javascript
        function Dog(name){
           Animal.call(this,name)
        }
       Dog.prototype = Animal.prototype
       
       let d = new Dog('哈士奇')
       
       console.log(d.name);// 哈士奇
       d.run()// 哈士奇会跑步
       d.song()// 哈士奇会唱歌
       
       // 由于调用了两次父类，所以产生了两份实例
       ```

  2. ES6中的继承

     声明一个动物的类

     ```javascript
     class Animal {
        constructor(name){
           this.name = name
        }
        run(){
           console.log(`${this.name}会跑步`);
        }
     }
     ```

     声明 狗 类 继承动物类

     ```javascript
     class Dog extends Animal {
         constructor(name){
                     super(name)
         }
     }
     
     
     let d = new Dog('哈士奇')
     console.log(d.name); // 哈士奇
     d.run(); // 哈士奇会跑步
     ```

  3. TS中类的继承

     和ES6中的继承一样，只是添加了属性的数据类型

     ```typescript
     class Animal {
         name: string
         constructor(name){
             this.name = name
         }
         getName():string{
             return this.name
         }
     }
     
     class Dog extends Animal {
         constructor(name){
             super(name)
         }
     }
     
     let d = new Dog('哈士奇')
     console.log(d.name); // 哈士奇
     console.log(d.getName());// 哈士奇
     ```

  

- 类的修饰符

  - 定义属性的时候提供了三种修饰符

  1. public          公有，类里面、子类、类外面都可以访问 
  2. protected   保护类型 类里面、子类可以访问  类外面不可以访问
  3. private		私有类型 类里面可以访问，其他不行

  - 如果不加修饰符，默认是public

  1. 使用 public 修饰符，公有，类里面、子类、类外面都可以访问

     ```typescript
     class Animal {
         name: string
         constructor(name){
             this.name = name
         }
         getName():string{
             // 父类内部获取name属性
             return this.name
         }
     }
     // 实例化父类
     let a = new Animal('动物')
     // 父类外获取name属性
     console.log(a.name);
     
     // 声明 狗类 继承 动物类
     class Dog extends Animal {
         constructor(name){
             super(name)
         }
         run():string{
             // 子类内部获取name属性
             return this.name + '会运动'
         }
     }
     
     // 实例化子类
     let d = new Dog('哈士奇')
     // 子类 类外
     console.log(d.name);
     console.log(d.getName());
     ```

  2. 使用 protected 修饰符，类里面、子类可以访问  类外面不可以访问

     ```typescript
     class Animal {
         protected name: string
         constructor(name){
             this.name = name
         }
         getName():string{
             // 父类内部获取name属性
             return this.name
         }
     }
     // 实例化父类
     let a = new Animal('动物')
     // 父类外获取name属性
     console.log(a.name); // 编译报错 属性“name”受保护，只能在类“Animal”及其子类中访问。
     
     // 声明 狗类 继承 动物类
     class Dog extends Animal {
         constructor(name){
             super(name)
         }
         run():string{
             // 子类内部获取name属性
             return this.name + '会运动'
         }
     }
     
     // 实例化子类
     let d = new Dog('哈士奇')
     // 子类 类外
     console.log(d.name);  // 编译报错 属性“name”受保护，只能在类“Animal”及其子类中访问。
     console.log(d.getName());
     ```

     

  3. 使用 private 修饰符，类里面可以访问，其他不行

     ```typescript
     class Animal {
         private name: string
         constructor(name){
             this.name = name
         }
         getName():string{
             // 父类内部获取name属性
             return this.name
         }
     }
     // 实例化父类
     let a = new Animal('动物')
     // 父类外获取name属性
     console.log(a.name); // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
     
     // 声明 狗类 继承 动物类
     class Dog extends Animal {
         constructor(name){
             super(name)
         }
         run():string{
             // 子类内部获取name属性
             return this.name + '会运动' // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
         }
     }
     
     // 实例化子类
     let d = new Dog('哈士奇')
     // 子类 类外
     console.log(d.name); // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
     console.log(d.getName());
     
     ```

- 静态属性和静态方法

  1. 静态属性

     使用static修饰静态属性

     ```typescript
     class Animal {
         name:string
         static prop: string = '1'
         constructor(name:string){
             this.name = name
         }
         getName():string{
             return this.name
         }
     }
     
     console.log(Animal.prop); // 1
     
     let a = new Animal('小狗')
     
     console.log(a.prop); // 属性“prop”在类型“Animal”上不存在
     ```

     静态属性不能在实例上获取

  2. 静态方法

     ```typescript
     class Animal {
         name:string
         static prop: string = '1'
         constructor(name:string){
             this.name = name
         }
         getName():string{
             return this.name
         }
         static sayHello():string{
             return 'hello'
         }
     }
     // Animal.prop = 'haha'
     
     console.log(Animal.prop); // 1
     
     console.log(Animal.sayHello()); // hello
     
     let a = new Animal('小狗')
     
     console.log(a.prop); // 属性“prop”在类型“Animal”上不存在
     console.log(a.sayHello()); // 性“sayHello”在类型“Animal”上不存在
     ```

     静态方法不能在实例上获取

- 多态

  - 多态的定义

    父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现

  -  多态的实现

    1. 首先声明一个父类，父类中声明一个方法，不去实现

       ```typescript
       class Animal {
           name:string
           constructor(name:string){
               this.name = name
           }
           // 父类定义了一个方法，不去实现
           eat(){}
       }
       ```

    2. 声明一个类继承父类，并且实现 eat 方法

       ```typescript
       class Dog extends Animal{
           constructor(name:string){
               super(name)
           }
           eat():void{
               console.log(`${this.name}吃骨头`);
               
           }
       }
       ```

    3. 再声明一个类继承父类，并且实现 eat 方法

       ```typescript
       class Cat extends Animal{
           constructor(name:string){
               super(name)
           }
           eat():void{
               console.log(`${this.name}吃鱼`);
               
           }
       }
       ```

       我们可以看到，父类 Animal 内声明了 eat 方法；但是没有去实现，而是有继承他的子类 Dog 和 Cat 去实现，每个子类有不同的表现，这就是多态的实现

-  抽象类

  -  抽象类的定义

    提供其他类继承的基类，不能直接被实例化

  - 抽象类和抽象方法

    1. 定义抽象类的语法

       ```tsx
       abstract class 类名 {}
       ```

    2. 抽象类不能直接被实例化

       ```tsx
       abstract class Animal {
           name: string
           constructor(name:string){
               this.name = name
           }
           getName():string{
               return this.name
           }
       }
       
       let a = new Animal('小明') //报错  无法创建抽象类的实例。ts(2511)
       ```

       抽象类不能直接被实例化，只是提供其他类继承的一个基类

       ```ts
       abstract class Animal {
           name: string
           constructor(name:string){
               this.name = name
           }
           getName():string{
               return this.name
           }
       }
       // 狗类继承 动物类
       class Dog extends Animal {
           constructor(name:string){
               super(name)
           }
       }
       ```

    3. 抽象方法

       抽象方法的语法：

       ```ts
       abstract 方法名():{}
       ```

       - 抽象方法不能脱离抽象类使用ts

         ```typescript
         class Animal {
             name: string
             constructor(name:string){
                 this.name = name
             }
             abstract eat():string // 报错：抽象方法只能出现在抽象类中。
         }
         ```

         也就是说，抽象方法只能出现在抽象类中

         ```typescript
         abstract class Animal {
             name: string
             constructor(name:string){
                 this.name = name
             }
             abstract eat():string
         }
         ```

       - 抽象方法不能有具体体现

         ```typescript
         abstract class Animal {
             name: string
             constructor(name:string){
                 this.name = name
             }
             abstract eat():string{ // 报错：方法“eat”不能具有实现，因为它标记为抽象
                 return ''
             }
         }
         ```

         也就是说抽象方法不能有具体体现，只能在派生类中实现

       - 定义标准

         ```typescript
         abstract class Animal {
             name: string
             constructor(name:string){
                 this.name = name
             }
             abstract eat():string
         }
         
         // let a = new Animal('小明')
         
         
         class Dog extends Animal {
             constructor(name:string){
                 super(name)
             }
             // 派生类中具体实现抽象方法
             eat(): string {
                 return this.name
             }
         }
         ```

         使用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现且必须在派生类中实现
         抽象方法只能放在抽象类里面；也就是说**抽象类和抽象方法是定义标准的**

- 类类型接口

  -  接口约束类

    类类型接口，和抽象类很类似，是用来约束类的；也就是类中必须有哪些属性和方法

  1. 定义一个接口,约束必须有name属性和eat方法

     ```typescript
     interface IAnimal {
         name: string
         eat():string
     }
     ```

     使用接口约束类,

     语法:

     ```typescript
     class 类型 implements 接口名 {}
     ```

     使用上述接口约束类

     - [ ] 错误写法：不写方法

       ```typescript
       class Animal implements IAnimal { 
           name: string;
           constructor(name:string){
               this.name = name
           }
       }
       // 报错：类“Animal”错误实现接口“IAnimal”。类型 "Animal" 中缺少属性 "eat"，但类型 "IAnimal" 中需要该属性
       ```

       因为接口要求有eat方法

     - [ ] 错误写法：不写属性

       ```typescript
       class Animal implements IAnimal {
           eat(): string {
               return ''
           }
       }
       // 报错： 类“Animal”错误实现接口“IAnimal”。类型 "Animal" 中缺少属性 "name"，但类型 "IAnimal" 中需要该属性。
       ```

       因为接口要求有 name属性

     - [x] 正确的写法

       ```typescript
       class Animal implements IAnimal {
           name: string;
           constructor(name:string){
               this.name = name
           }
           eat(): string {
               return ''
           }
       }
       ```

       - 也就是说，使用接口约束类；约束了类必须具有哪些属性和方法

- 接口的继承

  - 接口继承的实现

    接口也可以实现继承

  1. 声明一个接口，要求有一个name属性

     ```typescript
     interface Ianimal {
         name: string
     }
     ```

  2. 声明一个接口继承上述接口

     接口继承语法：接口一继承接口二

     ```typescript
     interface 接口一 extends 接口二 {}
     ```

     ```typescript
     interface IPeople extends Ianimal {
         work():void
     }
     ```

     实现接口约束类

     ```typescript
     class Coder implements IPeople {
         name: string
         constructor(name){
             this.name = name
         }
         work(): void {
             
         }
     }
     ```

     我们可以发现，使用IPeople约束类的时候，类必须同时具有name属性和work方法

### 十四， unkonw

- 我们在实际使用中，如果有类型无法确定的情况，要尽量避免使用 any，因为 any 会丢失类型信息，一旦一个类型被指定为 any，那么在它上面进行任何操作都是合法的，所以会有意想不到的情况发生。因此如果遇到无法确定类型的情况，要先考虑使用 unknown。
- 它和 any 有相似的特点，就是制定一个类型是任意的，但是区别在于制定一个类型为 any 的话，可以在这个值上做任意操作，而 unknown 类型则不允许在没有类型断言或基于控制流的类型细化时对 unknown 类型的值做任何操作。

1. 任何类型的值都可以赋值给 unknown 类型

   ```typescript
   let value1: unknown;
   value1 = "a";
   value1 = 123;
   ```

2. 如果没有类型断言或基于控制流的类型细化时 unknown 不可以赋值给其它类型，此时它只能赋值给 unknown 和 any 类型：

   ```typescript
   let value2: unknown;
   let value3: string = value2; // error 不能将类型“unknown”分配给类型“string”
   value1 = value2;
   ```

3. 如果没有类型断言或基于控制流的类型细化，则不能在它上面进行任何操作：

   ```typescript
   let value4: unknown;
   value4 += 1; // error 对象的类型为 "unknown"
   ```

4. unknown 与任何其它类型组成的交叉类型，最后都等于其它类型：

   ```typescript
   type type1 = unknown & string; // type1 => string
   type type2 = number & unknown; // type2 => number
   type type3 = unknown & unknown; // type3 => unknown
   type type4 = unknown & string[]; // type4 => string[]
   ```

5. unknown 与任何其它类型组成的联合类型，都等于 unknown 类型，但只有any例外，unknown与any组成的联合类型等于any)：

   ```typescript
   type type5 = string | unknown; // type5 => unknown
   type type6 = any | unknown; // type6 => any
   type type7 = number[] | unknown; // type7 => unknown
   ```

6. never 类型是 unknown 的子类型：

   ```typescript
   type type8 = never extends unknown ? true : false; // type8 => true
   ```

7. keyof unknown 等于类型 never：

   ```typescript
   type type9 = keyof unknown; // type9 => never
   ```

8. 只能对 unknown 进行等或不等操作，不能进行其它操作：

   ```typescript
   value1 === value2;
   
   ```

9. unknown 类型的值不能访问其属性、作为函数调用和作为类创建实例：

   ```typescript
   let value5: unknown;
   value5.age; // error
   value5(); // error
   new value5(); // error
   ```

10. 使用映射类型时如果遍历的是 unknown 类型，则不会映射任何属性：

    ```typescript
    type Types<T> = { [P in keyof T]: number };
    type type10 = Types<any>; // type10 => { [x: string]: number }
    type type11 = Types<unknown>; // type10 => {}
    ```

    

