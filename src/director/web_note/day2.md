---
title: 第二天
icon: pen-to-square
order: 2
category:
  - HTML
author: Yuan
date: 2024-10-16
---

## 简介
层叠样式表
用来定义如何显示HTML元素
通常把样式存储在样式表中

## 样式书写方式
1. 行内样式(不推荐)：`style="color:red; font-size:20px;"`
2. 页内样式：`<style> .class{ } </style>`
3. 外链样式：`<link rel="stylesheet" href=URL type="text/css" />`

选择器
- 标签选择器：`p{ } h1{ }`
- 类选择器：`.class{ }`
- id选择器：`#id{ }`

**id和class区别:** class可以重复，id不可重复。

## 常用样式

### 文字
文本颜色：`color`
文本对齐方式：`text-align:[left | center | right]`
文本修饰：`text-decoration:[none]`
文字大小：`font-size`
文字粗细：`font-weight:[100-900]` 默认为400

### 背景
背景颜色：`background-color`
背景图片：`background-image`

