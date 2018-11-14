# html综合笔记

## 移动端搜索优化
需求:移动端键盘右下角按钮确定改为搜索而且可触发事件
```
//css
input[type=search] {
	-webkit-appearance: textfield;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button{
	display: none;
}
//html
input设置autocomplete="off"，可以将默认的删除符号删除。
外层加上form标签，并且设置action="javascript:return true;"，让ios的按钮显示搜索。
//js
$form.on('search',function(){});
```
## 
