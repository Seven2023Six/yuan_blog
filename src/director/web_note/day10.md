---
title: 第十天
icon: pen-to-square
order: 10
category:
  - JavaScript
author: Yuan
date: 2024-10-23
---

## DOM
> 文档对象模型，是W3C组织推荐的处理可扩展标记语言的标准编程接口，W3C定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容，样式，属性等

### DOM树
- 节点：网页中所有的内容都是节点(标签，属性，文本等)
- 文档：一个页面就是一个文档，DOM中用document表示
- 元素：页面中的所有标签都是元素，DOM中用element表示


### 获取页面的元素
1.根据ID获取
`document.getElementById('id')`

2.根据标签名获取
`document.getElementsByTagName('标签名')`

3.根据class获取
`document.getElementsByClassName('类名')`

4.通过选择器获取第一个元素
```js
document.querySelector('选择器')

document.querySelector('#id')
document.querySelector('.class')
document.querySelector('div')
document.querySelector('div>p')
```
5.通过选择器获取全部元素
`document.querySelectorAll('选择器')`

6.获取body元素
`document.body`

7.获取html元素
`document.documentElement`


### 操作元素
> 我们可以利用DOM操作元素来改变元素里的内容，样式，属性等。
```js
改变元素内容
innerText  不识别html标签，空格和换行不保留
innerHTML  识别html标签，空格和换行保留


操作元素属性
src alt title href width


操作元素样式
1.element.style
2.element.className
```
**注意：**
js里的样式书写要采用驼峰命名法书写：fontSize


### 事件操作
`onclick`    点击事件
`onchange`   改变事件
`onmouseover`   鼠标移进
`onmouseout`    鼠标移出
`onblur`        失去焦点
`onfocus`       获得焦点
`onload`        自动加载事件

事件绑定的方法
1. `<button  onclick='fun()'>按钮</button>`
2. `button.onclick=function(){}`

