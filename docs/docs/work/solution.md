# 自己开发的插件
此文档的目的为：维护开发可维护且高效插件库和一些常用的js代码

[代码下载地址](https://github.com/ymblog/plugin)、[预览插件地址](http://lktop.coding.me/ymblog/ym/plugin/)
>插件请使用require来引用
## 轮播
```
//引入slide.css
//html
<div class="slide" id="slide">
    <ul>
        <li><a href="javascript:;" style="background-image:url()"></a></li>
        <li><a href="javascript:;" style="background-image:url()"></a></li>
        <li><a href="javascript:;" style="background-image:url()"></a></li>
    </ul>
</div>
//js(如require引入为slide)
slide({
	target:document.getElementById('slide'),
    showArrow:true,
    type:'slide-x',//type有三种：1、空或者slide（默认）2、slide-x 3、slide-z
    autoPlay:5000//切换的时间单位ms
});
```
## 弹窗
```
//引入l-dialog.css
//js(如require引入为dialog)
//简单弹窗
dialog.layer({
	type:'alert',
	text:'信息弹窗'
});
//确认弹窗
dialog.layer({
	type:'confirm',
	text:'删除成功',
	ok:function(){
		dialog.layer({
			type:'alert',
			text:'删除成功'
		});
	}
});
```
## 图片懒加载
```
//html
<img class="lazyload" data-lazy="" src="">
//js(如require引入为lazyload)
lazyload();
```
## 图片上传预览
```
//html
<input type="file" id="upload" class="upload" accept="image/*" multiple />
//js(如require引入为upload)
upload({
    target:'#upload',
    success:function(data){
    }
});
```
## 表单验证
```
//html
<div class="form-item">
    电话号码：
    <input type="text" class="ui-input u-text" placeholder="输入电话号码" data-validate-text="电话号码" data-validate="required;mobile" />
    <span class="ui-form-message"></span>
</div>
//js(如require引入为validator)
validator({
	target:'#form'
});
```
## 倒计时
```
//html
<div class="timer"></div>
//js
timer({
	target:document.querySelector('.timer'),//使用js获取
	time:300,//剩余的秒数 单位s
	//可选 选择默认即可不需要设置参数
	/*show:'hms',//hms为时分秒(默认) dhms为天时分秒 ms为分秒
	type:1//1为00:00:000(默认) 2为00时00分00秒*/
	//callback:end//倒计时结束执行的函数(默认不执行)
});
```