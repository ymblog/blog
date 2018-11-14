# CSS规范
## 通用约定
### Class 和 ID
- 使用语义化、通用的命名方式,如“.lt-”前缀：通用布局、“.mod-”前缀：通用模块、“.fn-”前缀：常用功能样式、“.page-”前缀：页面级样式、“.ui-”前缀：通用ui
- 使用连字符 - 作为 ID、Class 名称界定符，不要驼峰命名法和下划线
- 避免选择器和 Class、ID 叠加使用，不使用！important

### 声明格式 
- 十六进制值应该全部小写和尽量简写，例如:#fff代替#ffffff
- 避免为 0 值指定单位,例如:用 margin: 0; 代替 margin: 0px;
- padding、margin和background等都缩写在一起
- 以分号;结尾

### 声明顺序
1. Display
2.	position, left, top, right etc.
3.	overflow, float, clear etc.
4.	margin, padding,height,width
5.	background, border etc
6. font, text

### 无需添加过多的浏览器厂商前缀
使用webpack和gulp可以自动加入

## 模块组织
任何超过很多行的CSS代码,都需要维护和管理，模块组织是通过规范，让你构建更健壮和可维护的CSS代码

### 组件
从组件的角度思考，将网站的模块都作为一个独立的组件

组件命名需要语义化，尽量使用两个单词更加具体，元素是组件中的元素,命名需要语义化。例如:
搜索框:.search-form，搜索框的按钮：.search-form .search-btn

### 继承
font-sise、color、line-height可以继承不要定义太多

## 性能优化
### 正确使用 Display 的属性

display: block 后不应该再使用 vertical-align

display: inline或者是行内元素不再使用width、height、margin-top、padding-top、margin-bottom、padding-bottom

### 动画性能优化
在不需要兼容低版本浏览器情况下,使用 translate 取代 absolute 定位就会得到更好的 fps，动画会更顺滑

### 提升CSS选择器性能
CSS 选择器是从右到左进行规则匹配。了解这个机制后，例子中看似高效的选择器在实际中的匹配开销是很高的。
1、如:.box a{} 在遍历页面中所有 a元素后还需向其上级遍历直到根节点,我们把最右边选择符称之为关键选择器

2、避免使用通用选择器*

3、避免使用多层标签选择器

### 不滥用 Float
Float在渲染时计算量比较大，尽量减少使用

代替方案使用inline-block、flex

### 多利用硬件能力，如通过 3D 变形开启 GPU 加速
-webkit-transform:transition3d(0,0,0)