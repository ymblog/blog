# javascript规范
## 通用约定
### 命名
变量、函数名、使用 Camel 命名法(首字母小写、后面首字母大写)

### 少使用全局变量
代码块使用!function(){}()包裹，不污染全局

### 每个页面基本模块js
```
var Module = function(){
  	this.init();
};
//初始化
Module.prototype.init = function(){
	this.fetchData();
	this.bindEvent();
};
// 绑定事件
Module.prototype.bindEvent = function(){

};
// 获取数据
Module.prototype.fetchData = function(){
};
new Module();
```
### 高效使用
推荐使用三元运算符、||、&&
可以可参考：[传送门](https://github.com/airbnb/javascript)

## jQuery(zepto)优化
### 保存jQuery 变量
存放 jQuery 对象的变量以 $ 开头

将 jQuery 选择器返回的对象缓存到本地变量中复用

### 使用id寻找dom
尽可能的使用 ID 选择器，因为它会调用浏览器原生方法 document.getElementById 查找元素,比class快

### dom操作
$('#xx').find('li') 速度优先于 $('#xx li') 尽可能不使用find直接绑定元素上

### 事件委托
```
不推荐 $('#list a').on('click', myClickHandler);
推荐 $('#list').on('click','a',myClickHandler);
```

### 链式写法
```
$("#myDiv").addClass("error").show();
```

### 其他
减少浏览器的回流和重绘，改变元素的样式直接用class替换，不提倡使用多个dom.style除了改变颜色不然都会引起回流，引起浏览器flush队列的属性如各种scroll或者是offset的top和height，使用时保存在变量中，不能多次查询



