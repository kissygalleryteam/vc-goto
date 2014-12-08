## 综述

VcGoto是简单的滚动到任何位置比如返回顶部的组件。

![http://gtms02.alicdn.com/tps/i2/TB133zfGVXXXXbYXXXXDFelTVXX-520-200.png](http://gtms02.alicdn.com/tps/i2/TB133zfGVXXXXbYXXXXDFelTVXX-520-200.png)

## 初始化组件

返回顶部组件：
		
    S.use('kg/vc-goto/1.0.0/top,kg/vc-goto/1.0.0/top.css', function (S, GotoTop) {
        var gotoTop = new GotoTop();
        gotoTop.render();
    })
    
## 方法

### render() 运行组件

    var gotoTop = new GotoTop();
    gotoTop.render();    

### run() 触发动画滚动

    gotoTop.run()

## 通过tpl设置按钮模板

默认模板为：

    <div class="J_Top goto-top"><div class="top-bg"></div><span class="vc-iconfont top-icon">&#xe600;</span></div>
    
通过配置tpl参数可以调整结构：

    new GotoTop({tpl:"<div></div>"});
    
## 详细配置

属性名 | 类型|只读|默认值|说明
------------ | -------------| -------------| -------------| -------------
showPos | Number|N|0| 返回顶部按钮出现的位置，当为0时，默认取一屏视口高度，可以自由设置出现的高度
visible | Boolean|N|false| 控制按钮的显示，显示的时候会给目标元素增加top-show样式名
tpl | String|Y|| 返回顶部按钮的模板
scrollSpeed | Number|N|1| 滚动速度控制
showClass | String|N|'top-show'| 控制显影动画的class名
$target | NodeList|N|| 按钮目标元素，当指定$target时，默认不自动生成按钮结构



