# 前端性能优化

## 内容与资源优化
更多优化方案参考:[传送门](https://juejin.im/post/5b0b7d74518825158e173a0c)
- 尽量减少HTTP请求数

	通过合并文件和雪碧图来减少请求数，一般使用gulp或者webpack即可
- 懒加载图片

	如果网站涉有多图片可以使用图片的懒加载，首屏图片也是渲染完dom再进行加载，提高访问速度，可以使用[lazysizes](https://github.com/aFarkas/lazysizes)，或者使用自己封装懒加载插件[传送门](https://github.com/ymblog/plugin/blob/master/js/lazyLoading.js)
 - 页面预加载

	可以使用svg或者图片设置布局灰色的预加载页面，先显示出布局轮廓如(简书)，大型单页面应用比较需要

 - 图片处理

	使用图片必须进行压缩(移动端图片最好使用3@)，压缩网站为:[compressjpeg](https://compressjpeg.com/zh/)（推荐）、[tinypng](https://tinypng.com/)。而且网站的图片尺寸需要设置合理，gulp或者webpack

    移动端使用宽度百分比，高度自动拉伸。使用如下优化，防止页面布局抖动
    ```
    .img-box{
      padding-bottom: xx%;//高度相对于图片宽度的比例
      height: 0;
      overflow: hidden;
      background: #f8f8f8;
    }
    ```
 - DNS Prefetch

 DNS Prefetch是一种DNS预解析技术，当我们浏览网页时，浏览器会在加载网页时对网页中的域名进行预解析并缓存，这样在浏览器加载网页中的链接时，就无需进行DNS解析，减少用户的等待时间，提高用户体验。
## css优化
 - 减小css的嵌套层数

    嵌套层数尽量控制在3层，这样有利于更快渲染。
 - 减小多余的css

	display: block 后不应该再使用 vertical-align。

	display: inline不再使用width、height、margin-top、padding-top、margin-bottom、padding-bottom
 - 动画性能优化

	在不需要兼容低版本浏览器情况下,使用 translate 取代 absolute 定位就会得到更好的 fps，动画会更顺滑。
 - 不滥用 Float
	
	Float在渲染时计算量比较大，尽量减少使用。替代方案使用inline-block和flex
 - 多利用硬件能力，如通过 3D 变形开启 GPU 加速

	-webkit-transform:transition3d(0,0,0)
 -  移动端兼容性的问题
    [传送门](/blog/css/)

## js优化
- 尽量减少DOM访问

	缓存已访问过的元素的索引
 - 事件委托

	多个子元素绑定一个事件，应该在父级使用绑定事件
 - 解绑事件

	一旦元素不需要再次执行事件，或者隐藏过渡掉可以解绑事件removeEventListener或者使用off，提高性能
```
function handler(e){
  //操作
  console.log(e)
}
ele.addEventListener('click', handler);//绑定
ele.removeEventListener('click', handler);//解绑
```
 - 使用id寻找dom更快

	滚动事件进行节流
 - 减少浏览器的回流和重绘

	改变元素的样式直接用class替换，不提倡使用多个dom.style除了改变颜色不然都会引起回流，引起浏览器flush队列的属性如各种scroll或者是offset的top和height，使用时保存在变量中，不能多次查询
 - 使用模块化开发减少全局变量，防止污染全局环境


## 高级优化-滚动节流

滚动函数的节流,不然在滚动期间一段距离执行很多次函数
```
function throttle(func, wait, mustRun) {
    var timeout,
        startTime = new Date();
    return function() {
        var context = this,
            args = arguments,
            curTime = new Date();
        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if(curTime - startTime >= mustRun){
            func.apply(context,args);
            startTime = curTime;
        // 没达到触发间隔，重新设定定时器
        }else{
            timeout = setTimeout(func, wait);
        }
    };
};
window.addEventListener('scroll',throttle(realFunc,500,1000));
功能就是如果在一段时间内 scroll 触发的间隔一直短于 500ms ，那么能保证事件我们希望调用的 handler 至少在 1000ms 内会触发一次
```