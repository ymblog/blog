# 第三方常用插件
此文档的目的为：总结使用过成熟插件(默认优先使用github的star多和issue少的插件)，降低使用其他插件不好维护和存在各种bug的成本以及改善多人协作的效率，如果有些插件有问题或者有更好的插件欢迎补充修改
## 通用篇
> 每个插件请使用cdn引入
### 图片懒加载
使用jquery_lazyload，参考：[官网](https://github.com/tuupola/jquery_lazyload)

### 轮播
使用swiper4.x，参考：[官网](http://www.swiper.com.cn/)
```
//html
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <a href="javascript:;">
                <img src="https://i.huim.com/zhuanti/nvwangjie/nwhb_m.png" />
            </a>
        </div>
        <div class="swiper-slide">
            <a href="javascript:;">
                <img src="https://i.huim.com/zhuanti/nvwangjie/nwhb_m.png" />
            </a>
        </div>
    </div>
    <div class="swiper-button-prev"><</div>
    <div class="swiper-button-next">></div>
    <div class="swiper-pagination"></div>
</div>
//js
var swiper = new Swiper('.swiper-container',{
    loop : true,
    pagination:{
        el:'.swiper-pagination',
        clickable:true
    },
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    autoplay:{
        disableOnInteraction:false,//用户操作swiper之后,自动播放不会停止
        delay:3000//3秒切换一次
    }
});
```
### 相册（图片滑动切换展示效果）
使用lightGallery，参考：[官网](https://github.com/sachinchoolur/lightGallery)

### 全屏滚动
使用fullPage，参考：[官网](https://github.com/alvarotrigo/fullPage.js)

### 复制内容到剪贴板
```
使用clipboard
<a class="btn" data-clipboard-text="xxxx">点击复制</a> 
var clipboard = new Clipboard('.btn'); 
clipboard.on('error', function(e) {}); 
clipboard.on('success', function(e) {});
```
### 图表
使用echarts4.x，参考：[官网](http://echarts.baidu.com/option.html#title)

### 瀑布流
使用waterfall,参考:[官网](http://raphamorim.io/waterfall.js)

## 移动端
### 图片上传预览压缩
使用localResizeIMG，参考:[官网](https://github.com/think2011/localResizeIMG)

### 上拉加载
使用better-scrol，参考:[官网](https://ustbhuangyi.github.io/better-scroll)

## pc端
### 文件和图片上传
使用Simple-Ajax-Uploader，参考:[官网](https://github.com/LPology/Simple-Ajax-Uploader)

### 日期
使用laydate，参考:[官网](https://www.layui.com/laydate)

### 图片上传裁剪
使用jcrop，参考:[官网](https://github.com/tapmodo/Jcrop/)

### 富文本编辑器
使用wangEditor，参考:[官网](http://www.wangeditor.com/)

## 其他
### 视差引擎
使用parallax，参考：[官网](https://github.com/wagerfield/parallax)

### 大转盘、老虎机、刮刮卡
使用game，参考：[官网](https://github.com/94cstyles/lottery)

### 魔幻线条
使用curvejs，参考：[官网](https://github.com/AlloyTeam/curvejs)

### 视频
使用video，参考：[官网](https://github.com/videojs/video.js)

### 更多
更多的插件可以参考：[传送门](https://juejin.im/post/5ba7d5dd5188255c6140cc9d)

