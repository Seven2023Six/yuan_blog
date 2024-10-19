---
title: 第八天
icon: pen-to-square
order: 8
category:
  - CSS
author: Yuan
date: 2024-10-16
---

## css复合型选择器
1. 交集选择器
由两个选择器组成，第一个标签选择器，第二个类选择器，两个选择器之间不能有空格.
p.int{ }

2. 并集选择器
适合公共样式
div, p, int{ }

3. 后代元素选择器
查找所有复合条件的后代元素(全部)
div p {}

4. 子代元素选择器
查找所有符合条件的子代元素(第一层)
div>p{}

5. 兄弟元素选择器
查找紧跟其后的所有标签
.int~p{}

6. 相邻元素选择器
查找紧跟其后的第一个标签
.int+p{}

## 伪类
`:hover`    悬停
`:active`   按下

通过伪类查找元素
所有标签通用
`:first-child`     第一个标签
`:last-child`      最后一个标签
`:nth-child(n)`    查找第n个标签   
