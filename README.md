# OneaUI
a mini program ui library
## 此库主要包含三个功能（后期持续更新）：1.左滑删除 2.图片预加载 3.加载动画
### 加载动画效果图
![image](https://github.com/jianghurong/OneaUI/blob/master/gif/loading.gif)
### 左滑删除效果图（滑动距离小于删除按钮一半宽度会自动隐藏，大于一般宽度会自动弹出）
![image](https://github.com/jianghurong/OneaUI/blob/master/gif/leftslip.gif)
### 图片懒加载效果图
![image](https://github.com/jianghurong/OneaUI/blob/master/gif/imageLazyload.gif)<br>
ps：加载动画用了component中的loading组件，在别的页面引用为：
``` html
<include  wx:if="{{!isloading}}" src="../../component/loading/loading.wxml" />
```
左滑删除公共方法已封装到util.js中直接在页面引用，然后在要调用的页面调用
``` javascrpit
let util = require('../../utils/util.js')
```
图片预加载引入代码
``` javascript
<import src="../../img-loader/img-loader.wxml"/>
<template is="img-loader" data="{{ imgLoadList }}"></template>
```


