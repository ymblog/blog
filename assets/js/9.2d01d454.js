(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{159:function(t,e,n){"use strict";n.r(e);var s=n(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("更多优化方案参考:"),n("a",{attrs:{href:"https://juejin.im/post/5b0b7d74518825158e173a0c",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),n("OutboundLink")],1)]),t._v(" "),n("ul",[t._m(2),t._v(" "),n("li",[n("p",[t._v("懒加载图片")]),t._v(" "),n("p",[t._v("如果网站涉有多图片可以使用图片的懒加载，首屏图片也是渲染完dom再进行加载，提高访问速度，可以使用"),n("a",{attrs:{href:"https://github.com/aFarkas/lazysizes",target:"_blank",rel:"noopener noreferrer"}},[t._v("lazysizes"),n("OutboundLink")],1),t._v("，或者使用自己封装懒加载插件"),n("a",{attrs:{href:"https://github.com/ymblog/plugin/blob/master/js/lazyLoading.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),n("OutboundLink")],1)])]),t._v(" "),t._m(3),t._v(" "),n("li",[n("p",[t._v("图片处理")]),t._v(" "),n("p",[t._v("使用图片必须进行压缩(移动端图片最好使用3@)，压缩网站为:"),n("a",{attrs:{href:"https://compressjpeg.com/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("compressjpeg"),n("OutboundLink")],1),t._v("（推荐）、"),n("a",{attrs:{href:"https://tinypng.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tinypng"),n("OutboundLink")],1),t._v("。而且网站的图片尺寸需要设置合理，gulp或者webpack")]),t._v(" "),n("p",[t._v("移动端使用宽度百分比，高度自动拉伸。使用如下优化，防止页面布局抖动")]),t._v(" "),t._m(4)]),t._v(" "),t._m(5)]),t._v(" "),n("p",[t._v("DNS Prefetch是一种DNS预解析技术，当我们浏览网页时，浏览器会在加载网页时对网页中的域名进行预解析并缓存，这样在浏览器加载网页中的链接时，就无需进行DNS解析，减少用户的等待时间，提高用户体验。")]),t._v(" "),t._m(6),t._v(" "),n("ul",[t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),n("li",[n("p",[t._v("移动端兼容性的问题\n"),n("router-link",{attrs:{to:"/blog/css/"}},[t._v("传送门")])],1)])]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),n("p",[t._v("滚动函数的节流,不然在滚动期间一段距离执行很多次函数")]),t._v(" "),t._m(17)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"前端性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端性能优化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"内容与资源优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容与资源优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 内容与资源优化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("尽量减少HTTP请求数")]),this._v(" "),e("p",[this._v("通过合并文件和雪碧图来减少请求数，一般使用gulp或者webpack即可")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("页面预加载")]),this._v(" "),e("p",[this._v("可以使用svg或者图片设置布局灰色的预加载页面，先显示出布局轮廓如(简书)，大型单页面应用比较需要")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(".img-box{\n  padding-bottom: xx%;//高度相对于图片宽度的比例\n  height: 0;\n  overflow: hidden;\n  background: #f8f8f8;\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("DNS Prefetch")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"css优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css优化","aria-hidden":"true"}},[this._v("#")]),this._v(" css优化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("减小css的嵌套层数")]),this._v(" "),e("p",[this._v("嵌套层数尽量控制在3层，这样有利于更快渲染。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("减小多余的css")]),this._v(" "),e("p",[this._v("display: block 后不应该再使用 vertical-align。")]),this._v(" "),e("p",[this._v("display: inline不再使用width、height、margin-top、padding-top、margin-bottom、padding-bottom")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("动画性能优化")]),this._v(" "),e("p",[this._v("在不需要兼容低版本浏览器情况下,使用 translate 取代 absolute 定位就会得到更好的 fps，动画会更顺滑。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("不滥用 Float")]),this._v(" "),e("p",[this._v("Float在渲染时计算量比较大，尽量减少使用。替代方案使用inline-block和flex")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("多利用硬件能力，如通过 3D 变形开启 GPU 加速")]),this._v(" "),e("p",[this._v("-webkit-transform:transition3d(0,0,0)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"js优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js优化","aria-hidden":"true"}},[this._v("#")]),this._v(" js优化")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("p",[t._v("尽量减少DOM访问")]),t._v(" "),n("p",[t._v("缓存已访问过的元素的索引")])]),t._v(" "),n("li",[n("p",[t._v("事件委托")]),t._v(" "),n("p",[t._v("多个子元素绑定一个事件，应该在父级使用绑定事件")])]),t._v(" "),n("li",[n("p",[t._v("解绑事件")]),t._v(" "),n("p",[t._v("一旦元素不需要再次执行事件，或者隐藏过渡掉可以解绑事件removeEventListener或者使用off，提高性能")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("function handler(e){\n  //操作\n  console.log(e)\n}\nele.addEventListener('click', handler);//绑定\nele.removeEventListener('click', handler);//解绑\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("p",[t._v("使用id寻找dom更快")]),t._v(" "),n("p",[t._v("滚动事件进行节流")])]),t._v(" "),n("li",[n("p",[t._v("减少浏览器的回流和重绘")]),t._v(" "),n("p",[t._v("改变元素的样式直接用class替换，不提倡使用多个dom.style除了改变颜色不然都会引起回流，引起浏览器flush队列的属性如各种scroll或者是offset的top和height，使用时保存在变量中，不能多次查询")])]),t._v(" "),n("li",[n("p",[t._v("使用模块化开发减少全局变量，防止污染全局环境")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"高级优化-滚动节流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级优化-滚动节流","aria-hidden":"true"}},[this._v("#")]),this._v(" 高级优化-滚动节流")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("function throttle(func, wait, mustRun) {\n    var timeout,\n        startTime = new Date();\n    return function() {\n        var context = this,\n            args = arguments,\n            curTime = new Date();\n        clearTimeout(timeout);\n        // 如果达到了规定的触发时间间隔，触发 handler\n        if(curTime - startTime >= mustRun){\n            func.apply(context,args);\n            startTime = curTime;\n        // 没达到触发间隔，重新设定定时器\n        }else{\n            timeout = setTimeout(func, wait);\n        }\n    };\n};\nwindow.addEventListener('scroll',throttle(realFunc,500,1000));\n功能就是如果在一段时间内 scroll 触发的间隔一直短于 500ms ，那么能保证事件我们希望调用的 handler 至少在 1000ms 内会触发一次\n")])])])}],!1,null,null,null);r.options.__file="README.md";e.default=r.exports}}]);