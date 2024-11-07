---
title: 第十二天
icon: pen-to-square
order: 12
category:
  - JavaScript
author: Yuan
date: 2024-10-30
---

## jquery
> 是js的一个轻量级框架，封装了js代码，比js代码量少，可以实现动画效果，ajax,表单验证等。

**安装：**`<script src="js/jquery-3.2.1.js"></script>`

### 基础语法：
```javascript
$('选择器').事件(function(){     })

// 文档就绪事件：
$(document).ready(function(){      })

$(function(){     })


// 选择器：
$('*')          // 获取全部标签
$('#id')        // ID选择器
$('.class')     // class选择器
$('div')        // 标签选择器
$('ul li')      // 后代元素选择器
$('ul>li')      // 子代元素选择器
$(this)         // 获取当前


// 事件：
click()         // 点击事件
change()        // 改变事件
keydown()       // 键盘按下
```













