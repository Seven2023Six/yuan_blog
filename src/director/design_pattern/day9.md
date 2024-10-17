---
title: 第九天
icon: pen-to-square
category:
  - JavaScript
author: Yuan
date: 2024-10-16
---

## JavaScript
> 简称js, 由网景公司研发，是互联网上最流行的脚本语言，
> 脚本语言就是浏览器上执行的语言。可以用来操作标签和样式，
> 制作动画，表单验证，连接后台，制作游戏等。

## 注释
- `<!-- HTML 注释 -->`
- `/* CSS 注释 */`
- `// JS 单行注释`
- `/* JS 多行注释 */`

**是否区分大小写**
- HTML 不区分大小写
- CSS 区分大小写
- JS 区分大小写

**书写：**
- `<script> code </script>`
- `<script src="link"></script>`

**注意：** JS 可以放在页面任意位置，但是要看加载顺序


## 变量
> 用于存储某些或某种数据的存储器。

**书写：**`let num = 10;`

**注意：**
1. 变量必须使用字母，下划线或美元符号组成。
2. 后面可以使用人一个字母数字下划线或美元符号。
3. 不能使用 JS 里的关键字和保留字。
4. 驼峰命名法，第一个单词首字母小写，其余单词首字母大写。

## 数据类型
> 计算机中，不同数据类型占用的存储空间不同，为了充分利用存储空间，于是定义不同数据类型

**基本数据类型：**
- Number
- Boolean
- String
- Null
- Undefined
- Symbol

**引用数据类型:**
- Function
- Object
- Array

## 流程控制
> 流程控制就是控制我们的代码，按照什么结构顺序来执行。

**结构：**
1. 顺序结构
2. 分支结构
3. 循环结构

### 分支
> 根据不用条件执行不同代码，得到不同结果。

```js
    // if...else语法
    if (true) {
        // coding...
    } else {
        // coding...
    }

    // if...else if...else语法
    if (true) {
        // coding...
    } else if {
        // coding...
    } else {
        // coding...
    }

    // switch 语句
    // 适合匹配特定值，范围性的使用 if 更合适
    switch(choice) {
        case 1:
            // coding...
            break;
        case 2:
            // coding...
            break;
        case 3:
            // coding...
            break;
    }

```

### 循环
> 重复执行某些代码

```js
    // for 循环
    for(初始变量; 循环条件; 循环迭代) {
        // code
    }

    // while 循环
    while(循环条件) {
        // code
    }

    // do...while 循环
    do {
        // code
    }while(循环条件)

    // 跳出当前循环
    continue;

    // 结束循环
    break；
```

### 函数
> 函数就是封装了一段可以重复调用的代码块。
> 作用：可以写一次代码，然后反复调用代码，实现模块化或组件化开发。

```js
    // 定义函数
    function funName2() {
        // code
    }

    function funName2(num1, num2) {
        // code
    }

    // 调用
    funName();
    // 1 和 2 为实参，num1 和 num2 为形参
    funName2(1, 2);

    // 返回值使用 return
    function add(num1, num2) {
        return num1 + num2;
    }

    let result = add(1, 2);
```