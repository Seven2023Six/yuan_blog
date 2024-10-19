---
title: 第三天
icon: pen-to-square
order: 3
category:
  - HTML
author: Yuan
date: 2024-10-16
---

## 超文本链接
行内标签：`<a></a>`    
路径：`href`
本地路径：`about.html`
外部路径：`http://www.baidu.com`

## 列表
- **有序列表：**`<ol>     <li>`
- **无序列表：**`<ul>     <li>`
- 自定义列表(了解)：`<dl>   <dt>    <dd>`

列表样式：`list-style`
行高：`line-height`
    1. 多行数据：调整行与行之间的间距
    2. 单行数据：内容的上下居中, 值跟height一致

## 行内与块级
行内标签：宽高不可控，不独占一行
`<b></b>    <i></i>    <a></a>    <span></span>`

块级标签：宽高可控，独占一行
`<div></div>    <p></p>    <h1></h1>`

转换成块级：`display: block;`
转换成行内：`display: inline;`
转换成行内块：宽高可控，不独占一行。 `display: inline-block;`

## table 表格
行：`<tr>`
列：`<td>`

*属性：*
  - 宽度：`width`
  - 高度：`height`
  - 边框：`border`
  - 行间距(调整单元格之间的间距)：`cellspacing`
  - 列间距(调整内容到边框的间距)：`cellpadding`
  - 对齐方式：`align`
  - 合并
    - 合并行：`rowspan`
    - 合并列：`colspan`

