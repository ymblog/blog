# HTML规范
## 通用约定 
### 关注点分离 
- js和css尽量做到合并和压缩
- 不推荐在元素上使用 style 属性
- 不推荐使用行内样式

### 标签 
- 自闭合（self-closing）标签，无需闭合 ( 例如： img input br hr)，其他需要闭合
- 尽量减少标签数量

### Class 与 ID
- class 应以功能或内容命名，不以表现形式命名
- class 与 id 单词字母小写，多个单词组成时，采用中划线-分隔
- 使用唯一的 id 作为 javascrit来获取dom,id获取dom速度更快

### 引号 
属性的定义，统一使用双引号

### 嵌套
按照规范行内元素尽量不要嵌套块级元素,a标签里面不能使用块级元素,要用的话，a标签css设置为块级

### 语义嵌套约束
- ul的直接子级必是li
- dd、dt用于dl下
- thead, tbody, tfoot,tr,td 用于table下

## 语义化
通常情况下，每个标签都是有语义的

此外语义化的 HTML 结构，有助于机器（搜索引擎）理解，另一方面多人协作时，能迅速了解开发者意图
| 标签 | 语义 |
| ------ | ------ 
| div | 壳 |
| p | 段落 |
| h1、h2、h3…… | 标题 |
| ul | 无序列表 |
| ol | 有序列表 |
| header | 头部 |
| footer | 底部 |
| section | 内容分块，内容及其标题组成 |
| aside | 侧边栏、广告 |
| article | 侧边栏、广告 |
| aside | 页面中独立的、完整的内容 |
| nav | 导航 |
| i | 图标(个人习惯) |

## HEAD
pc HEAD 模板
```
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>xxx</title>
	<meta name="description" content="不超过150个字符">
	<meta name="keywords" content="">
	<meta name="renderer" content="webkit">
	<meta name="applicable-device" content="pc">
	<link rel="shortcut icon" href="path/to/favicon.ico">
</head>
```
移动端 HEAD 模板
```
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
	<meta charset="utf-8">
	<title>xxx</title>
	<meta name="description" content="不超过150个字符">
	<meta name="keywords" content="">
	<meta name="applicable-device" content="mobile">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-touch-fullscreen" content="yes">
	<meta name="format-detection" content="telephone=no,email=no">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<!-- iOS 图标 -->
	<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png">
	<link rel="shortcut icon" href="path/to/favicon.ico">
</head>
```