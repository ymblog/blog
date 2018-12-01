(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{154:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("此文档的目的为：维护开发可维护且高效插件库和一些常用的js代码")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ymblog/plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码下载地址"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://ymblog.github.io/plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("预览插件地址"),a("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"自己开发的插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自己开发的插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 自己开发的插件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("插件请使用require来引用")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"轮播"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#轮播","aria-hidden":"true"}},[this._v("#")]),this._v(" 轮播")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('//引入slide.css\n//html\n<div class="slide" id="slide">\n    <ul>\n        <li><a href="javascript:;" style="background-image:url()"></a></li>\n        <li><a href="javascript:;" style="background-image:url()"></a></li>\n        <li><a href="javascript:;" style="background-image:url()"></a></li>\n    </ul>\n</div>\n//js(如require引入为slide)\nslide({\n\ttarget:document.getElementById(\'slide\'),\n    showArrow:true,\n    type:\'slide-x\',//type有三种：1、空或者slide（默认）2、slide-x 3、slide-z\n    autoPlay:5000//切换的时间单位ms\n});\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"弹窗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#弹窗","aria-hidden":"true"}},[this._v("#")]),this._v(" 弹窗")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("//引入l-dialog.css\n//js(如require引入为dialog)\n//简单弹窗\ndialog.layer({\n\ttype:'alert',\n\ttext:'信息弹窗'\n});\n//确认弹窗\ndialog.layer({\n\ttype:'confirm',\n\ttext:'删除成功',\n\tok:function(){\n\t\tdialog.layer({\n\t\t\ttype:'alert',\n\t\t\ttext:'删除成功'\n\t\t});\n\t}\n});\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"图片懒加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片懒加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 图片懒加载")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('//html\n<img class="lazyload" data-lazy="" src="">\n//js(如require引入为lazyload)\nlazyload();\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"图片上传预览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片上传预览","aria-hidden":"true"}},[this._v("#")]),this._v(" 图片上传预览")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('//html\n<input type="file" id="upload" class="upload" accept="image/*" multiple />\n//js(如require引入为upload)\nupload({\n    target:\'#upload\',\n    success:function(data){\n    }\n});\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"表单验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表单验证","aria-hidden":"true"}},[this._v("#")]),this._v(" 表单验证")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('//html\n<div class="form-item">\n    电话号码：\n    <input type="text" class="ui-input u-text" placeholder="输入电话号码" data-validate-text="电话号码" data-validate="required;mobile" />\n    <span class="ui-form-message"></span>\n</div>\n//js(如require引入为validator)\nvalidator({\n\ttarget:\'#form\'\n});\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"倒计时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#倒计时","aria-hidden":"true"}},[this._v("#")]),this._v(" 倒计时")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("//html\n<div class=\"timer\"></div>\n//js\ntimer({\n\ttarget:document.querySelector('.timer'),//使用js获取\n\ttime:300,//剩余的秒数 单位s\n\t//可选 选择默认即可不需要设置参数\n\t/*show:'hms',//hms为时分秒(默认) dhms为天时分秒 ms为分秒\n\ttype:1//1为00:00:000(默认) 2为00时00分00秒*/\n\t//callback:end//倒计时结束执行的函数(默认不执行)\n});\n")])])])}],!1,null,null,null);r.options.__file="solution.md";e.default=r.exports}}]);