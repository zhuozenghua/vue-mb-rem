# Vue 2.x + rem 实现移动端布局方式

如果和还不了解移动web布局方案,可以先看看这篇文章 [【移动web适配方案】]([https://www.jianshu.com/p/a4cb417d8ed4](https://www.jianshu.com/p/a4cb417d8ed4)
)
这篇文章涉及的[代码](https://github.com/zhuozenghua/vue-mb-rem)

#### 关于lib-flexible可伸缩布局方案
flexible方案是手淘经过多年的摸索和实战，总结出的一套移动端适配方案。早期的flexible的方案（lib-flexible）通过动态修改viewport的方式来设置视口，有点过于激进。出现了很多问题：`` 安卓端1像素问题 `` 、`` 不能与响应式兼容 `` 、`` 与ui框架搭配出现长度问题 `` 等等。最新版(amfe-lexible)已经不再修改 viewport ，而是统一使用理想视口。

***

#### 1.Vue 2.x + lib-flexible方式
这是一种过时的方案，这里就略过

***

#### 2.Vue 2.x + amfe-flexible方式
(1)安装amfe-flexible
```
$ npm install amfe-flexible --save
```
(2)在main.js中引入amfe-flexible
```
import 'amfe-flexible'
```
(3)viewport设置理想视口
```
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
```

(4)按照视觉稿布局（以750px为例）
把视觉稿分成100份来看待（为了以后兼容vh，vw单位）。每一份被称为一个单位a。同时，1rem单位认定为10a。拿750的视觉稿举例：
```
1a = 7.5px
1rem = 75px
```
因此，对于视觉稿上的元素的尺寸换算，只需要 `` 原始px值除以rem基准px `` 值即可。注意 `` 字体不使用rem单位 ``

> 在实际生产当中，如果每一次计算px转换rem都会影响开发效率

目前主要有两种方式来解决这个问题
（a）[CSSREM](https://github.com/flashlizi/cssrem)是一个CSS的px值转rem值的Sublime Text3自动完成插件。
（b）除了使用编辑器的插件之外，还可以使用CSS的处理器来帮助大家处理。比如说Sass、LESS以及PostCSS这样的处理器。
这里主要讲下使用PostCSS方式解决这个问题，这也是我常用的方式

>  如何在vue-cli中使用PostCSS方式解决这个问题?

这里介绍三款将px转换为rem插件
postcss-plugin-px2rem官方文档：[https://www.npmjs.com/package/postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem)
postcss-pxtorem官方文档：[https://www.npmjs.com/package/postcss-pxtorem](https://www.npmjs.com/package/postcss-pxtorem)
postcss-px2rem官方文档：[https://www.npmjs.com/package/postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem)

这三种插件postcss-pxtorem和 postcss-px2rem 类似，postcss-plugin-px2rem 这个插件 配置选项上有  exclude 属性，它可以配置 是否对 某个文件夹下的所有css文件不进行从px到rem的转换。我们可以利用这个特性，排除掉我们不要转换处理的文件夹。

> 在vue-cli2中使用postcss-pxtorem 时配置

首先安装postcss-pxtorem ``npm install postcss-pxtorem --save-dev``
找到.postcssrc.js文件配置postcss-pxtorem,在plugins对象下添加属性。
```
    "postcss-pxtorem": {
       "rootValue": 75,
       "propList": ['*','!font-size']
    },
```

> 在vue-cli3中使用postcss-pxtorem 时配置

这个看你的的选择，有可能在postcss.config.js文件或者package.json文件。配置方式和vue-cli2一样

最后就按照750px视觉稿直接用px开发！！！

![amfe-flexible.png](https://upload-images.jianshu.io/upload_images/8066565-20d88e829639a51f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


***

#### 3.Vue 2.x +amfe-flexible +使用ui框架方式
这种方式和Vue 2.x +amfe-flexible几乎一样。唯一的不同是，我们需要使用postcss-plugin-px2rem 进行px到rem转换。因为我们需要排除ui框架目录，避免ui变形。

找到.postcssrc.js文件配置postcss-plugin-px2rem,在plugins对象下添加属性。
```
    "postcss-plugin-px2rem":{
        "rootValue": 75,
        "propBlackList":['font-size'],
         exclude: /(node_module)/, 
    }

```

![mint+flexible.png](https://upload-images.jianshu.io/upload_images/8066565-ee0da54aa20a46eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
