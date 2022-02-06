---
title: 快速上手
icon: state
category: Vue
tag:
  - Vuex
  - 快速上手
---

Vuex 是 Vue 官方出品的状态管理组件，是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

<!-- more -->

我们可以从下面一个简单的状态管理案例开始。

```js
new Vue({
  // state
  data() {
    return {
      count: 0,
    };
  },
  // view
  template: `<div>{{ count }}</div>`,
  // actions
  methods: {
    increment() {
      this.count++;
    },
  },
});
```

这个状态自管理应用包含以下几个部分:

- state: 驱动应用的数据源；
- view: 以声明方式将 state 映射到视图；
- actions: 响应在 view 上的用户输入导致的状态变化。

以下是一个表示“单向数据流”理念的简单示意:

![图片](https://vuex.vuejs.org/flow.png)

但是，当我们的应用遇到**多个组件共享状态**时，单向数据流的简洁性很容易被破坏:

- 多个视图依赖于同一状态。
- 来自不同视图的行为需要变更同一状态。

此时，我们就需要进行复杂的组件通信，这在开发中很不方便。

**所以此时**，我们就需要 **Vuex**!

## Vuex 介绍

每一个 Vuex 应用的核心就是 `store` (仓库)。“store”基本上就是一个容器，它包含着您的应用中大部分的状态 (`state`)。Vuex 和单纯的全局对象有以下两点不同:

Vuex 的状态存储是响应式的。当 Vue 组件从 `store` 中读取状态的时候，若 `store` 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

您不能直接改变 `store` 中的状态。改变 `store` 中的状态的唯一途径就是显式地提交 (commit) `mutation`。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

### 最简单的 Store

```js
const store = Vuex.createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

...

Vue.createApp({}).use(store).mount('#app')
```

现在，可以通过 `store.state` 来获取状态对象，以及通过 `store.commit` 方法触发状态变更:

```js
store.commit("increment");

console.log(store.state.count); // -> 1
```

此时，任何使用了 `store.state.count` 的组件都会得到对应的更新。

通过提交 mutation 的方式，而非直接改变 `store.state.count`，是因为我们想要更明确地追踪到状态的变化。这个简单的约定能够让您的意图更加明显，这样您在阅读代码的时候能更容易地解读应用内部的状态改变。

### Vuex 的意义

在引入 Vuex 之后，Vuex 会被全局挂载，这意味着访问任何一个组件的 `this.$store` 都会指向同一个——我们引入的 Vuex。

也就是说，我们可以在所有组件内使用 `this.$store.state` 来共享同一份数据，并在数据发生改变的时候得到更新。

::: info

在 setup 中，需要使用 useStore 函数来获取 store 对象。

:::

任何时候，提交一个 `mutation` 到 Vuex，会触发这份共享数据的变更，并通知全局的任何一个使用了变更数据的组件进行变更。

所以说 Vuex 通过在全局范围内的所有组件引入，使得全局共享了同一份数据，全局的任何组件都可以更新这份数据，同时一旦数据发生更新，全局任意使用了更新数据的组件也会立即的到更新通知并完成自身更新。

这份数据 (state) 就成为状态，而 Vuex 自身就成为了一个状态树。通过这种方式，全局的状态统一、状态共享与通信变得十分简单。

### State

State 即是全局共享的那一份数据。

每个使用了 State 组件一般只使用了全局 State 的少量数据，而且对其他部分的数据结构并不知情。

由于状态被全局共享，为了整个应用的稳定考虑，那么就不可能允许任何一个组件随意改变这个状态，否则一旦删除或改变了一些被其他组件使用的状态，就可能会造成其他组件异常。所以 State 是一份响应式的只读属性。

::: danger

直接改变 state 是严厉禁止的!!!!

:::

### Mutation

因为上面的安全缘故，State 被设置只读，那么最安全的方式就是预先设置好一系列改变方式，来有条理、安全地改变 State 的数据。

Mutation 就是这样是设置的。所有 Mutation 都是一个函数，可以给这个函数传递参数。当组件想要改变状态时，他们需要通过 `store.commit(<mutation函数名>, <参数>)` 的方式，来触发对应的 Mutation 函数，在 Mutation 函数执行的过程中，按照预先设置好的方法改变 State。

所以总之，Mutation 就是一系列设置好的函数，每个函数是一个改变 State 的方式，组件想要改变 State 状态的时候，就调用这些方法。这样就达到了，既可以让组件改变状态，又阻止了组件随意改变状态，保障了整颗状态树的稳定性。

### 更多

在 Vuex 中，还设置了 `Getter` 和 `Action` 两种概念。

#### Getter

Getter 是 State 的派生。

有时候我们不是直接使用 State 中的数据，而是需要从 `store` 中的 `state` 中派生出一些状态，也就是对 State 的数据进行一些处理再使用。

如果有多个组件需要用到此属性，我们要么复制这个函数，或者抽取到一个共享函数然后在多处导入它——无论哪种方式都不是很理想。

所以 Vuex 允许我们在 `store` 中定义 “`getter`” (可以认为是 `store` 的计算属性)。就像计算属性一样，`getter` 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

#### Action

有些时候，我们可能会需要连续改变 state，这就意味着我们要接连触发多个 mutation，但是如果 mutation 是异步的(比如包含了网络操作)，组件就不知道何时 mutation 会执行完进行 state 的改变，这个时候 `Action` 就被设计出来。

Action 类似于 `mutation`，不同在于:

- Action 提交的是 `mutation`，而不是直接变更状态。

- Action 可以包含任意异步操作。

所以，这样组件只需要调用 `Action`，把多次提交 `mutation` 的任务交给 Action，这样就完成了复杂 `mutation` 的提交。

---

更多详细的东西大家还是要看文档!

## Vuex 模块化

可以想象，随着整个网站架构的变大，网页数的扩张，状态树将会越来越庞大，可能有数十上百个 state 子项和同等数量级的 mutation。

所以自然，Vuex 也支持模块化。

每个子 vuex 包含了自身完整的 `state`、`mutation` 与 `action`，通过主 Vuex 的 `module` 属性引入，在使用时会把对应的项目注入自身的对应部分。

## Vuex 案例

- [点击此处](demo.md)

## 文档地址

文档地址: [Vuex 教程](https://vuex.vuejs.org/zh/)
