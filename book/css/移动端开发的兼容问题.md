# 移动端开发的兼容问题
 - ios下input为type=button属性disabled设置true,会出现样式文字和背景异常问题。

解决方案:使用opacity=1来解决

 - 对非可点击元素如(label,span)监听click事件，部分ios版本下不会触发。

解决方案:css增加cursor:pointer就搞定了

 - 移动端1px边框

解决方案：比如按钮的box的class为btn
```
.btn:before{
  content:'';
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #ccc;
  width: 200%;
  height: 200%;
  box-sizing:border-box;
  -webkit-box-sizing:border-box;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: left top;
  transform-origin: left top;
}
```

 - input为fixed定位，在ios下input固定定位在顶部或者底部，在页面滚动一些距离后，点击input(弹出键盘)，input位置会出现在中间位置。

解决方案:内容列表框也是fixed定位,这样不会出现fixed错位的问题

 - 移动端字体小于12px使用四周边框或者背景色块，部分安卓文字偏上bug问题。

解决方案:可以使用整体放大1倍(width、height、font-size等等)再使用transform缩放,使用canvas在移动端会模糊也需要这样的解决方案

 - 在移动端图片上传图片兼容低端机的问题。

解决方案:input 加入属性 accept="image/*" multiple
 - 在h5嵌入app中，ios如果出现垂直滚动条时，手指滑动页面滚动之后，滚动很快停下来，好像踩着刹车在开车，有“滚动很吃力”的感觉。

解决方案:
```
self.webView.scrollView.decelerationRate = UIScrollViewDecelerationRateNormal;对webview设置了更低的“减速率”
```

 - 移动端click300ms延时响应 

解决方案:使用 Fastclick
```
window.addEventListener( "load", function() {
  FastClick.attach( document.body );
}, false );
```

 - 在安卓机上placeholder文字设置行高会偏上

解决方案:input有placeholder情况下不要设置行高

 - overflow:scroll，或者auto在iOS上滑动卡顿的问题

 解决方案:加入-webkit-overflow-scrolling:touch;


 - 移动端图片压缩预览上传的问题，可以参考我的一篇文章,[传送门](https://segmentfault.com/a/1190000006101416)

 - 移动端适配可以使用lib-flexible [传送门](https://github.com/amfe/lib-flexible)，使用rem来布局移动端有一个问题就是px的小数点的问题，不同的手机对于小数点处理方式不一样，有些是四舍五入，有些直接舍去掉，因此在自动生成雪碧图时候图标四周适当留2px的空间，防止图标被裁剪掉

### 其他更多兼容
更多参考：[传送门](https://github.com/jtyjty99999/mobileTech)