---
title: 第十一天
icon: pen-to-square
order: 11
category:
  - JavaScript
author: Yuan
date: 2024-10-30
---

## BOM
> BOM(BrowserObjectModel)是指浏览器对象模型，用于与浏览器进行交豆。
> BOM 提供了一组对象，使JavaScript能够访问和控制浏览器窗口。
> 和 DOM 不同，BOM 不局限于 HTML 文档的内容，而是更广泛的与浏览器有关的操作。

### 顶级对象，表示浏览器窗口。
- innerheight返回窗口的文档显示区的高度。
- innerwidth返回窗口的文档显示区的宽度。
- alert()显示带有一段消息和一个确认按钮的警告框。
- close() 关闭浏览器窗口。
- confrm()显示带有一段消息以及确认按钮和取消按钮的对话框。
- open()打开一个新的浏览器窗口或查找一个已命名的窗口。
- print()打印当前窗口的内容。
- prompt()显示可提示用户输入的对话框。

### 提供了当前 URL信息，并允许页面导航
- location.hash设置或返回从 # 开始的 URL。
- location.host设置或返回主机名和当前 URL的端口号。
- location.hostname设置或返回当前URL的主机名。
- location.href设置或返回完整的 URL。
- location.pathname设置或返回当前URL的路径部分
- location.port设置或返回当前 URL的端口号。
- location.protocol设置或返回当前 URL的协议。
- location.search设置或返回从 ? 开始的URL(查询部分)

### navigator
> 对象包含有关访问者浏览器的信息

- navigatorappCodeName  浏览器代号。
- navigatorappName      浏览器名称。
- navigatorappVersion   浏览器版本。

### screen
> 对象包含有关用户屏幕的信息。

- screen.width        显示器屏幕的宽度(以像素为单位)
- screen.height       显示器屏幕的高度(以像素为单位)
- screen.availWidth   可用的屏募宽度
- screen.availHeight  可用的屏幕高度


### setInterval()
> 间隔指定的毫秒数不停地执行指定的代码

- setTimeout()    在指定的毫秒数后执行指定代码。
- clearlnterval() 停止周期函数
- clearTimeout()  停止延迟函数
