---
date: 2020-10-09
title: 事件
icon: activity
category: 小程序
---

## 什么是事件

- 事件是视图层到逻辑层的通讯方式。
- 事件可以将用户的行为反馈到逻辑层进行处理。
- 事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。
- 事件对象可以携带额外信息，如 `id`, `dataset`, `touches`。

## 事件的使用方式

在组件中绑定一个事件处理函数，如 `bindtap`，当用户点击该组件的时候会在该页面对应的 `Page` 中找到相应的事件处理函数。

```xml
<view id="tapTest" data-hi="WeChat" bindtap="tapName"> Click me! </view>
```

在相应的 `Page` 定义中写上相应的事件处理函数，参数是 `event`。

```js
Page({
  tapName(event) {
    console.log(event);
  },
});
```

可以看到 log 出来的信息大致如下:

```json
{
  "type": "tap",
  "timeStamp": 895,
  "target": {
    "id": "tapTest",
    "dataset": {
      "hi": "WeChat"
    }
  },
  "currentTarget": {
    "id": "tapTest",
    "dataset": {
      "hi": "WeChat"
    }
  },
  "detail": {
    "x": 53,
    "y": 14
  },
  "touches": [
    {
      "identifier": 0,
      "pageX": 53,
      "pageY": 14,
      "clientX": 53,
      "clientY": 14
    }
  ],
  "changedTouches": [
    {
      "identifier": 0,
      "pageX": 53,
      "pageY": 14,
      "clientX": 53,
      "clientY": 14
    }
  ]
}
```

## 使用 WXS 函数响应事件 <Badge type="warning" text="高级" />

高级用法，详见脚注[^wxs-event]。

[^wxs-event]:
    从基础库版本 2.4.4 开始，支持使用 WXS 函数绑定事件，WXS 函数接受 2 个参数，第一个是 `event`，在原有的 `event` 的基础上加了 `event.instance` 对象，第二个参数是 `ownerInstance`，和 `event.instance` 一样是一个 `ComponentDescriptor` 对象。具体使用如下:

    在组件中绑定和注册事件处理的 WXS 函数。

    ```xml
    <wxs module="wxs" src="./test.wxs"></wxs>
    <view id="tapTest" data-hi="WeChat" bindtap="{{wxs.tapName}}"> Click me! </view>
    ```

    ::: v-pre

    **绑定的 WXS 函数必须用 `{{}}` 括起来**

    :::

    `test.wxs` 文件实现 `tapName` 函数

    ```js
    const tapName = (event, ownerInstance) => {
      console.log("tap wechat", JSON.stringify(event));
    };

    module.exports = {
      tapName: tapName,
    };
    ```

    `ownerInstance` 包含了一些方法，可以设置组件的样式和 class，具体包含的方法以及为什么要用 WXS 函数响应事件，请点击查看 详情。

## 事件详解

### 事件分类 <Badge text="重要" type="error" />

事件分为冒泡事件和非冒泡事件:

- 冒泡事件: 当一个组件上的事件被触发后，该事件会向父节点传递。
- 非冒泡事件: 当一个组件上的事件被触发后，该事件不会向父节点传递。

WXML 的冒泡事件列表:

| 类型               | 触发条件                                                                                  | 最低版本 |
| ------------------ | ----------------------------------------------------------------------------------------- | -------- | ----- |
| touchstart         | 手指触摸动作开始                                                                          |          |
| touchmove          | 手指触摸后移动                                                                            |          |
| touchcancel        | 手指触摸动作被打断，如来电提醒，弹窗                                                      |          |
| touchend           | 手指触摸动作结束                                                                          |          |
| tap                | 手指触摸后马上离开                                                                        |          |
| longpress          | 手指触摸后，超过 350ms 再离开，如果指定了事件回调函数并触发了这个事件，tap 事件将不被触发 |          | 1.5.0 |
| longtap            | 手指触摸后，超过 350ms 再离开(推荐使用 longpress 事件代替)                                |          |
| transitionend      | 会在 WXSS transition 或 wx.createAnimation 动画结束后触发                                 |          |
| animationstart     | 会在一个 WXSS animation 动画开始时触发                                                    |          |
| animationiteration | 会在一个 WXSS animation 一次迭代结束时触发                                                |          |
| animationend       | 会在一个 WXSS animation 动画完成时触发                                                    |          |
| touchforcechange   | 在支持 3D Touch 的 iPhone 设备，重按时会触发                                              | 1.9.90   |

::: tip

除上表之外的其他组件自定义事件如无特殊声明都是非冒泡事件，如 form 的 `submit` 事件，input 的 `input` 事件，scroll-view 的 `scroll` 事件。(详见各个组件)

:::

### 普通事件绑定 <Badge text="重要" type="error" />

事件绑定的写法类似于组件的属性，如:

```xml
<view bindtap="handleTap">
  Click here!
</view>
```

如果用户点击这个 view ，则页面的 `handleTap` 会被调用。

事件绑定函数可以是一个数据绑定，如:

```xml
<view bindtap="{{ handlerName }}">
  Click here!
</view>
```

此时，页面的 `this.data.handlerName` 必须是一个字符串，指定事件处理函数名；如果它是个空字符串，则这个绑定会失效(可以利用这个特性来暂时禁用一些事件)。

::: info

自基础库版本 1.5.0 起，在大多数组件和自定义组件中， `bind` 后可以紧跟一个冒号，其含义不变，如 `bind:tap` 。基础库版本 2.8.1 起，在所有组件中开始提供这个支持。

:::

### 绑定并阻止事件冒泡 <Badge text="重要" type="error" />

除 `bind` 外，也可以用 `catch` 来绑定事件。与 `bind` 不同， `catch` 会阻止事件向上冒泡。

例如在下边这个例子中，点击 inner view 会先后调用 `handleTap3` 和 `handleTap2` (因为 tap 事件会冒泡到 middle view，而 middle view 阻止了 tap 事件冒泡，不再向父节点传递)，点击 middle view 会触发 `handleTap2`，点击 outer view 会触发 `handleTap1`。

```xml
<view id="outer" bindtap="handleTap1">
  outer view
  <view id="middle" catchtap="handleTap2">
    middle view
    <view id="inner" bindtap="handleTap3">
      inner view
    </view>
  </view>
</view>
```

### 互斥事件绑定 <Badge text="初学无需掌握" type="warn" />

自基础库版本 2.8.2 起，除 `bind` 和 `catch` 外，还可以使用 `mut-bind` 来绑定事件。一个 `mut-bind` 触发后，如果事件冒泡到其他节点上，其他节点上的 `mut-bind` 绑定函数不会被触发，但 `bind` 绑定函数和 `catch` 绑定函数依旧会被触发。

换而言之，所有 `mut-bind` 是“互斥”的，只会有其中一个绑定函数被触发。同时，它完全不影响 `bind` 和 `catch` 的绑定效果。

例如在下边这个例子中，点击 inner view 会先后调用 `handleTap3` 和 `handleTap2` ，点击 middle view 会调用 `handleTap2` 和 `handleTap1`。

```xml
<view id="outer" mut-bind:tap="handleTap1">
  outer view
  <view id="middle" bindtap="handleTap2">
    middle view
    <view id="inner" mut-bind:tap="handleTap3">
      inner view
    </view>
  </view>
</view>
```

### 事件的捕获阶段 <Badge text="初学无需掌握" type="warn" />

这是一个很重要的内容，但不适合初学者直接学习，建议先了解其他内容。具体内容见脚注[^capture]。

[^capture]:
    自基础库版本 1.5.0 起，触摸类事件支持捕获阶段。捕获阶段位于冒泡阶段之前，且在捕获阶段中，事件到达节点的顺序与冒泡阶段恰好相反。需要在捕获阶段监听事件时，可以采用 `capture-bind`、`capture-catch` 关键字，后者将中断捕获阶段和取消冒泡阶段。

    在下面的代码中，点击 inner view 会先后调用 `handleTap2`、`handleTap4`、`handleTap3`、`handleTap1`。

    ```xml
    <view id="outer" bind:touchstart="handleTap1" capture-bind:touchstart="handleTap2">
      outer view
      <view id="inner" bind:touchstart="handleTap3" capture-bind:touchstart="handleTap4">
        inner view
      </view>
    </view>
    ```

    如果将上面代码中的第一个 `capture-bind` 改为 `capture-catch`，将只触发 `handleTap2`。

    ```xml
    <view id="outer" bind:touchstart="handleTap1" capture-catch:touchstart="handleTap2">
      outer view
      <view id="inner" bind:touchstart="handleTap3" capture-bind:touchstart="handleTap4">
        inner view
      </view>
    </view>
    ```

### 事件对象 <Badge text="了解" /> <Badge text="文档" />

如无特殊说明，当组件触发事件时，逻辑层绑定该事件的处理函数会收到一个事件对象。

BaseEvent 基础事件对象属性列表:

| 属性          | 类型    | 说明                           | 基础库版本 |
| ------------- | ------- | ------------------------------ | ---------- |
| type          | String  | 事件类型                       |            |
| timeStamp     | Integer | 事件生成时的时间戳             |            |
| target        | Object  | 触发事件的组件的一些属性值集合 |            |
| currentTarget | Object  | 当前组件的一些属性值集合       |            |
| mark          | Object  | 事件标记数据                   | 2.7.1      |

::: warning

canvas 中的触摸事件不可冒泡，所以没有 `currentTarget`。

:::

#### CustomEvent

自定义事件对象属性列表(继承 BaseEvent):

| 属性   | 类型   | 说明       |
| ------ | ------ | ---------- |
| detail | Object | 额外的信息 |

#### TouchEvent

触摸事件对象属性列表(继承 BaseEvent):

| 属性           | 类型  | 说明                                         |
| -------------- | ----- | -------------------------------------------- |
| touches        | Array | 触摸事件，当前停留在屏幕中的触摸点信息的数组 |
| changedTouches | Array | 触摸事件，当前变化的触摸点信息的数组         |

#### type

代表事件的类型。

#### timeStamp

页面打开到触发事件所经过的毫秒数。

#### target

触发事件的源组件。

| 属性    | 类型   | 说明                                              |
| ------- | ------ | ------------------------------------------------- |
| id      | String | 事件源组件的 `id`                                 |
| dataset | Object | 事件源组件上由 `data-` 开头的自定义属性组成的集合 |

#### currentTarget

事件绑定的当前组件。

| 属性    | 类型   | 说明                                            |
| ------- | ------ | ----------------------------------------------- |
| id      | String | 当前组件的 `id`                                 |
| dataset | Object | 当前组件上由 `data-` 开头的自定义属性组成的集合 |

::: tip

`target` 和 `currentTarget` 可以参考上例中，点击 inner view `时，handleTap3` 收到的事件对象 `target` 和 `currentTarget` 都是 `inner，而` `handleTap2` 收到的事件对象 `target` 就是 `inner`，`currentTarget` 就是 `middle`。

:::

#### dataset

在组件节点中可以附加一些自定义数据。这样，在事件中可以获取这些自定义的节点数据，用于事件的逻辑处理。

在 WXML 中，这些自定义数据以 `data-` 开头，多个单词由连字符 `-` 连接。这种写法中，连字符写法会转换成驼峰写法，而大写字符会自动转成小写字符。如:

- `data-element-type`: 最终会呈现为 `event.currentTarget.dataset.elementType`
- `data-elementType`: 最终会呈现为 `event.currentTarget.dataset.elementtype`

::: details 例子

```xml
<view data-alpha-beta="1" data-alphaBeta="2" bindtap="bindViewTap"> DataSet Test </view>
```

```js
Page({
  bindViewTap(event) {
    event.currentTarget.dataset.alphaBeta === 1; // - 会转为驼峰写法
    event.currentTarget.dataset.alphabeta === 2; // 大写会转为小写
  },
});
```

:::

#### mark

在基础库版本 2.7.1 以上，可以使用 mark 来识别具体触发事件的 `target` 节点。此外， mark 还可以用于承载一些自定义数据(类似于 `dataset` )。

当事件触发时，事件冒泡路径上所有的 mark 会被合并，并返回给事件回调函数。(即使事件不是冒泡事件，也会 mark)

::: details 例子

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/boDQoKmu7M7G)

```xml
<view mark:myMark="last" bindtap="bindViewTap">
  <button mark:anotherMark="leaf" bindtap="bindButtonTap">按钮</button>
</view>
```

在上述 WXML 中，如果按钮被点击，将触发 `bindViewTap` 和 `bindButtonTap` 两个事件，事件携带的 `event.mark` 将包含 `myMark` 和 `anotherMark` 两项。

```js
Page({
  bindViewTap(e) {
    e.mark.myMark === "last"; // true
    e.mark.anotherMark === "leaf"; // true
  },
});
```

:::

`mark` 和 `dataset` 很相似，主要区别在于: `mark` 会包含从触发事件的节点到根节点上所有的 `mark`: 属性值；而 `dataset` 仅包含一个节点的 `data-` 属性值。

细节注意事项:

- 如果存在同名的 `mark` ，父节点的 `mark` 会被子节点覆盖。
- 在自定义组件中接收事件时， `mark` 不包含自定义组件外的节点的 `mark` 。
- 不同于 `dataset` ，节点的 `mark` 不会做连字符和大小写转换。

#### touches

touches 是一个数组，每个元素为一个 Touch 对象(canvas 触摸事件中携带的 touches 是 CanvasTouch 数组)。表示当前停留在屏幕上的触摸点。

#### Touch 对象

| 属性             | 类型   | 说明                                                                   |
| ---------------- | ------ | ---------------------------------------------------------------------- |
| identifier       | Number | 触摸点的标识符                                                         |
| pageX, pageY     | Number | 距离文档左上角的距离，文档的左上角为原点 ，横向为 X 轴，纵向为 Y 轴    |
| clientX, clientY | Number | 距离页面可显示区域(屏幕除去导航条)左上角距离，横向为 X 轴，纵向为 Y 轴 |

#### CanvasTouch 对象

| 属性       | 类型   | 说明                                                                       |
| ---------- | ------ | -------------------------------------------------------------------------- |
| identifier | Number | 触摸点的标识符                                                             |
| x, y       | Number | 距离 Canvas 左上角的距离，Canvas 的左上角为原点 ，横向为 X 轴，纵向为 Y 轴 |

#### changedTouches

`changedTouches` 数据格式同 `touches`。表示有变化的触摸点，如从无变有(`touchstart`)，位置变化(`touchmove`)，从有变无(`touchend`、`touchcancel`)。

#### detail

自定义事件所携带的数据，如表单组件的提交事件会携带用户的输入，媒体的错误事件会携带错误信息，详见组件定义中各个事件的定义。

点击事件的 `detail` 带有的 `x`, `y` 同 `pageX`, `pageY` 代表距离文档左上角的距离。
