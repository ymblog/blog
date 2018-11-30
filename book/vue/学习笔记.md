# vue.js学习记录
## vue实例
### 生命周期
**beforeCreate**：不能访问this.$el和this.$data，用于初始化非响应式变量

**created**：可以访问this.$data，不能访问到this.$el属性，this.$refs内容，用于ajax请求

**beforeMount**：this.$el和this.$data都初始化了，挂载前this.$el的值为'虚拟'的元素节点，比较少使用

**mounted**：'虚拟'的Dom节点被真实的Dom节点替换，用于获取VNode信息和操作，this.$refs可以访问

**beforeupdate**：响应式数据更新时调用，发生在虚拟DOM打补丁之前

**updated**：虚拟 DOM 重新渲染和打补丁之后调用，组件DOM已经更新，data数据变化时只会触发update

**beforeDestroy**：实例销毁之前调用。这一步，实例仍然完全可用，this仍能获取到实例，用于销毁定时器、解绑全局事件、销毁插件对象等操作

**destroyed**：实例销毁后调用，调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁
## 指令
指令带有 v- 前缀的特殊属性
### v-html
解释：更新DOM对象的textContent,为了输出真正的 HTML
还有v-on、v-bind、v-model、v-for、v-if、v-else、v-else-if不展开说明
注意:v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级
v-if和v-show的区别：v-show适合非常频繁地切换

### 修饰符
事件修饰符:

    .stop 阻止冒泡，调用 event.stopPropagation()
    .prevent 阻止默认行为，调用 event.preventDefault()
    .once事件只触发一次

按键修饰符:
@keyup.enter……
表单修饰符:
.lazy、.number、.trim

### key
推荐：使用 v-for 的时候提供 key 属性，以获得性能提升
说明：使用 key，VUE会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素,vue会复用已有元素，使用两个input切换会共用，需要使用key让其独立
## Class 与 Style 绑定
表达式的类型：字符串、数组、对象（重点）

```
//1
<div v-bind:class="{ active: true }"></div> ===> 解析后
<div class="active"></div>
//2
<div v-bind:class="[{ active: true }, errorClass]"></div> ===>解析后
<div class="active text-danger"></div>
```
## 组件
### prop
定义组件名kebab-case或者PascalCase(自己使用)

```
//使用prop来传值,子级定义属性:
props:['content','value']
进行验证，type类型有：Number、String、Boolean、Array、Object
propA: {
     type: Number,
     default: 100
 }
```
注意:组件父级<comp some-prop="1"></comp>1为字符串，使用:some-prop="1"，1为数字
### 通过事件向父级组件发送消息
推荐始终使用 kebab-case 的事件名
$emit方法并传入事件的名字，来向父级组件触发一个事件
```
//子级
<template>
	<div class="header" @click="$emit('say-event')">点击我</div>
</template>
//父级
<template>
	<Header :content="content" @say-event="sayHanle"></Header>
</template>
<script>
	import Header from '@/components/header';
    export default{
    methods:{
			sayHanle(){
				console.log(222);
			}
		}
	}
</script>
```
### 动态组件-is

    //currentTabComponent改变，组件也随之改变
    <component v-bind:is="currentTabComponent"></component>

## 插槽-slot
说明：通过<slot></slot> 标签指定内容展示区域
```
//子级定义
<template>
	<div class="header">
		<slot name="title"></slot>
		<slot name="desc"></slot>
	</div>
</template>
//父级
<Header>
	<p slot="desc" class="desc">我的描述</p>
</Header>
```
## 自定义指令
作用：进行DOM操作

```
//全局定义
Vue.directive('focus', {
	inserted: function (el) {
        el.focus()
	}
}
```
钩子函数
bind：指令第一次绑定到元素时调用
inserted：被绑定元素插入父节点时调用
unbind：只调用一次，指令与元素解绑时调用
## 过滤器
作用：文本数据格式化

```
//全局过滤器
<div>{{ dateStr | date }}</div>
<div>{{ dateStr | date('YYYY-MM-DD hh:mm:ss') }}</div>

<script>
Vue.filter('date', function(value, format) {
    // value 要过滤的字符串内容，比如：dateStr
    // format 过滤器的参数，比如：'YYYY-MM-DD hh:mm:ss'
})
</script>
//局部过滤器
filters: {
    filterName: function(value, format) {}
}
```
## 监视数据变化-watch
作用：当表达式的值发生变化后，会调用对应的回调函数完成响应的监视操作

```
watch:{
	info:function(val,oldVal){
		 console.log('当前值为：' + val, '旧值为：' + oldVal)
	}
}

```

