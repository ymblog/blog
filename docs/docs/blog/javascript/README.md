# 常用的es6记录
## 变量声明const和let
let：块级元素,不允许在相同作用域内，重复声明同一个变量
const：对象所指向的地址不能改变，而变量成员是可以修改的
## 解构赋值
```
let [a, b, c] = [1, 2, 3];
let { foo, bar } = { foo: "aaa", bar: "bbb" };

```
## Spread Operator 展开运算符
就是所谓的...
复制数组和合并数组

```
const arr1= [1, 2];
//复制数组
const arr2= [...arr1];(arr2改变不会影响arr1,深拷贝)
//合并数组
[...arr1,...arr2]
```
有时候我们想获取数组或者对象除了前几项或者除了某几项的其他项
```
//对象也是类似下面这样
let number = [1,2,3,4,5]
let  [first, ...rest] = number//2,3,4,5
```

## 字符串扩展
模板字符串：将表达式嵌入字符串中进行拼接。用${}来界定
```
var str = 'hello';
var result = `<div>${str} world</div>`;
```
padStart：用于头部补全，相对的padEnd为尾部补全
```
'1'.padStart(2, '0');用于日期的补全工作
```
## 数值扩展
用来判断一个数值是否为整数：Number.isInteger()
Math函数的扩展 Math.trunc 去除小数部分

## 数组扩展
Array.of()将一组值转换成数组
Math.max(...[14, 3, 77]),取得最大值

## 函数扩展
为函数的参数设置默认值

## 对象扩展
定义对象的函数可以省略冒号与 function 关键字
Object.assign()：进行浅复制和同名属性的替换(源对象某个属性的值是对象,如果改变会反映到目标对象)
Object.is()：比较两个值是否相等
Object.values(),Object.keys()通过value或者key生成的数组

## 箭头函数
使用“箭头”（=>）定义函数
函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象

## Promise
 - 避免了层层嵌套的回调函数,用于定时器、ajax中
 - Promise对象是一个构造函数，用来生成Promise实例，Promise 新建后立即执行，Promise实例的状态变为resolved，就会触发then方法绑定的回调函数
 - 接收的函数参数是同步执行的，但是then方法中的回调函数执行则是异步的

```
function result(value){
	return new Promise(function(resolve,reject){
		if(value){
			resolve('你成功了');
		}else{
			reject('你失败了');
		}
	});
}
result(true).then(function(value){
	console.log(value);
}).catch(function(value){
	console.log(value);
});
console.log('先输出');
```
## async

 - async函数返回一个Promise对象，可以使用then方法添加回调函数
 - await表示紧跟在后面的表达式需要等待结果(异步操作),拿到结果才能进入下一步,await只能出现在async函数中
 - await命令后面是一个Promise对象。如果不是，会被转成一个立即resolve的 Promise对象
 - async函数内部return语句返回的值，会成为then方法回调函数的参数

```
function timer(){
	return new Promise((resolve,reject)=>{
		setTimeout(resolve,1500);
	});
}
async function go(){
	await timer().then(()=>{console.log('timer')});
	console.log('go');
}
go();
```
## import 和 export
```
//导入
import people from './example'
// 导出默认, 有且只有一个默认
export default App

//导入全部并且设置别名
import * as example from "./example"
//n多个 export 导出很多模块

//导入部分
import {name, age} from './example'
//导出
export name;
export age;
```
## Symbol
新的原始数据类型，防止属性名冲突，可以接受一个字符串作为参数，表示对 Symbol 实例的描述。
```
let set = Symbol('set');
let a = {};
a[set] = 'hello';
```
注意：1、Symbol值作为对象属性名时，不能用点运算符。2、该属性不会出现在for...in、for...of循环中
