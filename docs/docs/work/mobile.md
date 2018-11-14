# 移动端优化
## click的300ms延迟响应
使用FastClick(推荐)
```
window.addEventListener( "load", function() {
FastClick.attach( document.body );
}, false );
```
## 移动端适配
应用rem,使用[lib-flexible](https://github.com/amfe/lib-flexible),不过浏览器在处理小数像素的时候并不是全部舍入处理的,了浏览器小数像素的原理，使用雪碧图每个小图标四周留白2px空间

## 移动端兼容
参考:[自己项目总结](/docs/blog/css/)

