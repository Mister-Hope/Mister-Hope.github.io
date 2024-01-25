---
date: 2021-00-19
title: 框架接口
category: 小程序
---

`Component` 构造器用于创建自定义组件，接受一个 Object 类型的参数。

<!-- more -->

## 参数

| 定义段           | 类型         | 是否必填 | 描述                                                                                          | 最低版本 |
| ---------------- | ------------ | -------- | --------------------------------------------------------------------------------------------- | -------- |
| properties       | Object Map   | 否       | 组件的对外属性，是属性名到属性设置的映射表                                                    |          |
| data             | Object       | 否       | 组件的内部数据，和 properties 一同用于组件的模板渲染                                          |          |
| observers        | Object       | 否       | 组件数据字段监听器，用于监听 properties 和 data 的变化，参见 数据监听器                       | 2.6.1    |
| methods          | Object       | 否       | 组件的方法，包括事件响应函数和任意的自定义方法，关于事件响应函数的使用，参见 组件间通信与事件 |          |
| behaviors        | String Array | 否       | 类似于 mixins 和 traits 的组件间代码复用机制，参见 behaviors                                  |          |
| created          | Function     | 否       | 组件生命周期函数-在组件实例刚刚被创建时执行，注意此时不能调用 setData                         |          |
| attached         | Function     | 否       | 组件生命周期函数-在组件实例进入页面节点树时执行                                               |          |
| ready            | Function     | 否       | 组件生命周期函数-在组件布局完成后执行                                                         |          |
| moved            | Function     | 否       | 组件生命周期函数-在组件实例被移动到节点树另一个位置时执行                                     |          |
| detached         | Function     | 否       | 组件生命周期函数-在组件实例被从页面节点树移除时执行                                           |          |
| relations        | Object       | 否       | 组件间关系定义，参见 组件间关系                                                               |          |
| externalClasses  | String Array | 否       | 组件接受的外部样式类，参见 外部样式类                                                         |          |
| options          | Object Map   | 否       | 一些选项(文档中介绍相关特性时会涉及具体的选项设置，这里暂不列举)                              |          |
| lifetimes        | Object       | 否       | 组件生命周期声明对象，参见 组件生命周期                                                       | 2.2.3    |
| pageLifetimes    | Object       | 否       | 组件所在页面的生命周期声明对象，参见 组件生命周期                                             | 2.2.3    |
| definitionFilter | Function     | 否       | 定义段过滤器，用于自定义组件扩展，参见 自定义组件扩展                                         | 2.2.3    |

生成的组件实例可以在组件的方法、生命周期函数和属性 `observer` 中通过 `this` 访问。组件包含一些通用属性和方法。

| 属性名     | 类型   | 描述                                         |
| ---------- | ------ | -------------------------------------------- |
| is         | String | 组件的文件路径                               |
| id         | String | 节点 id                                      |
| dataset    | String | 节点 dataset                                 |
| data       | Object | 组件数据，包括内部数据和属性值               |
| properties | Object | 组件数据，包括内部数据和属性值(与 data 一致) |

| 方法名                       | 参数                                                                 | 描述                                                                                                                                 | 最低版本 |
| ---------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| setData                      | Object newData                                                       | 设置 data 并执行视图层渲染                                                                                                           |          |
| hasBehavior                  | Object behavior                                                      | 检查组件是否具有 behavior (检查时会递归检查被直接或间接引入的所有 behavior)                                                          |          |
| triggerEvent                 | String name, Object detail, Object options                           | 触发事件，参见 组件间通信与事件                                                                                                      |          |
| createSelectorQuery          |                                                                      | 创建一个 SelectorQuery 对象，选择器选取范围为这个组件实例内                                                                          |          |
| createIntersectionObserver   |                                                                      | 创建一个 IntersectionObserver 对象，选择器选取范围为这个组件实例内                                                                   |          |
| createMediaQueryObserver     |                                                                      | 创建一个 MediaQueryObserver 对象                                                                                                     | 2.11.1   |
| selectComponent              | String selector                                                      | 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象(会被 wx://component-export 影响)                                          |          |
| selectAllComponents          | String selector                                                      | 使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组(会被 wx://component-export 影响)                                  |          |
| selectOwnerComponent         |                                                                      | 选取当前组件节点所在的组件实例(即组件的引用者)，返回它的组件实例对象(会被 wx://component-export 影响)                                | 2.8.2    |
| getRelationNodes             | String relationKey                                                   | 获取这个关系所对应的所有关联节点，参见 组件间关系                                                                                    |          |
| groupSetData                 | Function callback                                                    | 立刻执行 callback ，其中的多个 setData 之间不会触发界面绘制(只有某些特殊场景中需要，如用于在不同组件同时 setData 时进行界面绘制同步) | 2.4.0    |
| getTabBar                    |                                                                      | 返回当前页面的 custom-tab-bar 的组件实例，详见自定义 tabBar                                                                          | 2.6.2    |
| getPageId                    |                                                                      | 返回页面标识符(一个字符串)，可以用来判断几个自定义组件实例是不是在同一个页面内                                                       | 2.7.1    |
| animate                      | String selector, Array keyframes, Number duration, Function callback | 执行关键帧动画，详见动画                                                                                                             | 2.9.0    |
| clearAnimation               | String selector, Object options, Function callback                   | 清除关键帧动画，详见动画                                                                                                             | 2.9.0    |
| setUpdatePerformanceListener | Object options, Function listener                                    | 清除关键帧动画，详见动画                                                                                                             | 2.12.0   |

::: details 代码示例

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/GqVTnvmq7g1m)

```js
Component({
  behaviors: [],

  // 属性定义(详情参见下文)
  properties: {
    myProperty: {
      // 属性名
      type: String,
      value: "",
    },
    myProperty2: String, // 简化的定义方式
  },

  data: {}, // 私有数据，可用于模板渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached() {},
    moved() {},
    detached() {},
  },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show() {},
    hide() {},
    resize() {},
  },

  methods: {
    onMyButtonTap() {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      });
    },
    // 内部方法建议以下划线开头
    _myPrivateMethod() {
      // 这里将 data.A[0].B 设为 'myPrivateData'
      this.setData({
        "A[0].B": "myPrivateData",
      });
    },
    _propertyChange(newVal, oldVal) {},
  },
});
```

:::

## properties 定义

| 定义段        | 类型     | 是否必填 | 描述                     | 最低版本 |
| ------------- | -------- | -------- | ------------------------ | -------- |
| type          |          | 是       | 属性的类型               |          |
| optionalTypes | Array    | 否       | 属性的类型(可以指定多个) | 2.6.5    |
| value         |          | 否       | 属性的初始值             |          |
| observer      | Function | 否       | 属性值变化时的回调函数   |          |

::: warning

新版本基础库中不推荐使用 `observer` 字段，而是使用 Component 构造器的 `observers` 字段代替，它更加强大且性能更好。

:::

::: details 代码示例

```js
Component({
  properties: {
    min: {
      type: Number,
      value: 0,
    },
    min: {
      type: Number,
      value: 0,
      observer(newVal, oldVal) {
        // 属性值变化时执行
      },
    },
    lastLeaf: {
      // 这个属性可以是 Number 、 String 、 Boolean 三种类型中的一种
      type: Number,
      optionalTypes: [String, Object],
      value: 0,
    },
  },
});
```

:::

属性的类型可以为 `String` `Number` `Boolean` `Object` `Array` 其一，也可以为 `null` 表示不限制类型。

::: tip

多数情况下，属性最好指定一个确切的类型。这样，在 WXML 中以字面量指定属性值时，值可以获得一个确切的类型，如:

```xml
<custom-comp min="1" max="5" />
```

此时，由于自定义组件的对应属性被规定为 `Number` 类型， min 和 max 会被赋值为 `1` 和 `5` ，而非 `"1"` 和 `"5"` ，即:

```js
this.data.min === 1; // true
this.data.max === 5; // true
```

:::

::: info

在 `properties` 定义段中，属性名采用驼峰写法(propertyName)；在 wxml 中，指定属性值时则对应使用连字符写法(component-tag-name property-name="attr value")，应用于数据绑定时采用驼峰写法(attr="")。

:::

### Bug & Tips

- 使用 `this.data` 可以获取内部数据和属性值；但直接修改它不会将变更应用到界面上，应使用 setData 修改。
- 生命周期函数无法在组件方法中通过 `this` 访问到。
- 属性名应避免以 `data` 开头，即不要命名成 `dataXyz` 这样的形式，因为在 WXML 中， `data-xyz=""` 会被作为节点 dataset 来处理，而不是组件属性。
- 在一个组件的定义和使用时，组件的属性名和 data 字段相互间都不能冲突(尽管它们位于不同的定义段中)。
- 从基础库 2.0.9 开始，对象类型的属性和 data 字段中可以包含函数类型的子字段，即可以通过对象类型的属性字段来传递函数。低于这一版本的基础库不支持这一特性。
- bug : 对于 type 为 Object 或 Array 的属性，如果通过该组件自身的 `this.setData` 来改变属性值的一个子字段，则依旧会触发属性 observer ，且 observer 接收到的 `newVal` 是变化的那个子字段的值，`oldVal` 为空， `changedPath` 包含子字段的字段名相关信息；目前推荐使用 `observers` 定义段代替。
