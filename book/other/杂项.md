# 其他
## sublime text3 推荐插件

1、打开sublime text 3，按ctrl+~或者菜单View > Show Console打开命令窗口。
2、复制以下代码，回车，安装Package Controller
``` 
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
 ```

3、按shift+control+p或者Preferences -> Package Control点击Package Controller:Install package即可进行安装插件

### 基础插件 ###
### emmet ###

可以让你更快更高效地编写HTML和CSS，节省你大量时间的插件（必备）
[emmet使用手册](http://www.w3cplus.com/tools/emmet-cheat-sheet.html)

我们使用vue自定义标签tab不能补全标签。解决方案:ctrl + e

```
或者自定义在key Bindings-user,比如ctrl+q
[
  {
        "keys": [
            "ctrl+q"
        ], 
        "args": {
            "action": "expand_abbreviation"
        }, 
        "command": "run_emmet_action", 
        "context": [
            {
                "key": "emmet_action_enabled.expand_abbreviation"
            }
        ]
    }
]
```

### less ###
支持less高亮

### AllAutocomplete ###
Sublime Text 默认的 Autocomplete 功能只考虑当前的文件，而 AllAutocomplete 插件会搜索所有打开的文件来寻找匹配的提示词

### DocBlockr ###
如果你遵循的编码的风格很严格，这款插件能够使你的任务更容易。DocBlokr 帮助你创造你的代码注释，通过解析功能，参数，变量，并且自动添加基本项目。


配置Preferences -> Package Settings -> DocBlockr->Settings –User中找到jsdocs_extra_tags修改jsdocs_extra_tags，可以额外添加注释的内容，我习惯使用{"jsdocs_extra_tags":["@author 某某{{date}}"]}

使用方法 /**回车即可
### JavaScript Completions ###
js代码提示，不解释效率快了很多

### vue插件 ###
### Vue Syntax Highlight ###
vue代码高亮
### vuejs snippets ###

## 百度地图
### 显示百度地图
文档:[传送门](http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/mark)
```
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=4qaWddT3Ght8qZeB05cdySGB"></script>
<script>
    var map = new BMap.Map("map");            
    var point = new BMap.Point(116.404, 39.915); 
    var marker = new BMap.Marker(point); 
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(true); 
    map.addOverlay(marker);                
</script>
```

### 去除百度地图的logo
.anchorBL{display:none;}

### 百度地图
 -  微信经纬度转换成百度地图经纬度
 [传送门](http://lbsyun.baidu.com/index.php?title=webapi/guide/changeposition)

### 获取经纬度
```
//不过pc端经纬度会有偏差
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=4qaWddT3Ght8qZeB05cdySGB"></script>
var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
        longitude = r.point.lng;
        latitude = r.point.lat;
    }
    else {
        弹窗函数({
            title: "",
            text: '定位失败,请重新定位',
            confirmButtonText:'确定',
            showConfirmButton: true
        });
    } 
},errorFuc(失败函数),{enableHighAccuracy: true}); 
```
### 位置定位跳转到百度地图
api:[传送门](http://lbsyun.baidu.com/index.php?title=webapi/direction-api)

## 支付
### 微信支付
#### pc端
1、前端只需向后台发ajax请求拿到code_url。

2、利用基于jquery类库的jquery.qrcode.js的 插件绘制二维码展示到页面中。

3、利用setInterval来请求接口，是否用户已经支付成功，可以设置超时支付。

#### 微信公众号
在微信中微信支付的参考文档:[传送门](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6)

### 支付宝支付
#### pc端和移动端使用
```
//直接跳转
https://excashier.alipay.com/standard/auth.htm?payOrderId=xxx
支付成功后台设置成功回调的url
```





