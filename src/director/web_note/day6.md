---
title: 第六天
icon: pen-to-square
order: 6
category:
  - CSS
author: Yuan
date: 2024-10-16
---

## 盒子模型

所有html元素都可以看成盒子模型
**组成：**内容(width) + 边框(border) + 边距(margin, padding)

## 边框 border

书写：
- 四个方向：`border: 1px solid black;`
- 单个方向：`border-top: 1px solid black;`

## 边距(布局方式之一)

调整盒子与盒子之间的间距
外边距：margin
书写：
- 单个方向：`margin-top: 10px;`
- 四个方向：`margin: 10px;`

盒子左右居中：`margin: auto auto;`

调整内容到边框的间距
内边距: padding
书写：
- 单个方向：`padding-top: 10px;`
- 四个方向：`padding: 10px;`

## 浮动：float
会使元素向左或者向右移动，不能上下，其周围的元素会重新排列
书写：
- `float: left;`
- `float: right;`

**功能：**
1. 使元素向左或向右移动
2. 让元素由竖向变为横向
3. 脱离标准文档流：元素会浮起来，会造成元素覆盖

清除浮动：
1. 调整层面(治标不治本)
2. 给浮动元素外侧套一个盒子
3. `clear: both;`