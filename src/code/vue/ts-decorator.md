---
title: 在 Vue 中使用 Typescript
icon: typescript
category: 基础
tags:
  - TypeScript
---

## 使用 TypeScript 进行 Vue 开发

在使用 `Typescript` 进行 Vue2.X 版本开发时，需要引入 `vue-property-decorator` 这个包进行开发。

本质上就是写法上与 `js` 有所不同，而且需要额外注明变量的类型。

## 用法

有 7 个装饰器和 1 个功能(Mixin):

- @Emit
- @Inject
- @Model
- @Prop
- @Provide
- @Watch
- @Component(由 `vue-class-component` 提供)
- Mixins(mixins 由 `vue-class-component` 提供的辅助函数)

## @Prop() decorator

`prop` 属性的装饰器

```ts
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class YourComponent extends Vue {
  @Prop(Number) private readonly propA!: number;

  @Prop({ default: "default value" }) private readonly propB!: string;

  @Prop([String, Boolean]) private readonly propC!: string | boolean;
}
```

相当于

```js
export default {
  props: {
    propA: {
      type: Number,
    },
    propB: {
      default: "default value",
    },
    propC: {
      type: [String, Boolean],
    },
  },
};
```

需要在装饰器的参数中填入 `js` 写法中对应 prop 的值。

在后方使用 `private readonly` 标识符表示这是一个私有且只读的属性，它与 props 的性质相同。

在 prop 的名称后面使用 `!: <类型>` 再次声明该属性的定义类型。

注意:

每个 prop 的默认值需要定义为与上面显示的示例代码相同。

不支持以下的形式:

```ts
  @Prop() prop = 'default value'
```

## @Watch() decorator

`watch` 属性的装饰器。

```ts
import { Vue, Component, Watch } from "vue-property-decorator";

@Component
export default class YourComponent extends Vue {
  @Watch("child")
  onChildChanged(val: string, oldVal: string) {}

  @Watch("person", { immediate: true, deep: true })
  onPersonChanged1(val: Person, oldVal: Person) {}

  @Watch("person")
  onPersonChanged2(val: Person, oldVal: Person) {}
}
```

相当于

```js
export default {
  watch: {
    'child': [
      {
        handler: 'onChildChanged',
        immediate: false,
        deep: false
      }
    ],
    'person': [
      {
        handler: 'onPersonChanged1',
        immediate: true,
        deep: true
      },
      {
        handler: 'onPersonChanged2',
        immediate: false,
        deep: false
      }
    ]
  },
  methods: {
    onChildChanged(val, oldVal) { },
    onPersonChanged1(val, oldVal) { }
    onPersonChanged2(val, oldVal) { }
  }
}
```

主要使用以上两个装饰器。

---

以下装饰器很少使用:

## @Model() decorator

`model` 属性的装饰器

```ts
import { Vue, Component, Model } from "vue-property-decorator";

@Component
export default class YourComponent extends Vue {
  @Model("change", { type: Boolean }) readonly checked!: boolean;
}
```

相当于

```ts
export default {
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    checked: {
      type: Boolean,
    },
  },
};
```

## @Emit() decorator

由 `@Emit $emit` 返回值修饰的函数后跟其原始参数。如果返回值是 promise，则在发出之前将其解析。

如果未通过 event 参数提供事件的名称，则使用函数名称。在这种情况下， camelCase 名称将转换为 kebab-case。

```ts
import { Vue, Component, Emit } from "vue-property-decorator";

@Component
export default class YourComponent extends Vue {
  count = 0;

  @Emit()
  addToCount(n: number) {
    this.count += n;
  }

  @Emit("reset")
  resetCount() {
    this.count = 0;
  }

  @Emit()
  returnValue() {
    return 10;
  }

  @Emit()
  promise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(20);
      }, 0);
    });
  }
}
```

相当于

```js
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addToCount(n) {
      this.count += n;
      this.$emit("add-to-count", n);
    },
    resetCount() {
      this.count = 0;
      this.$emit("reset");
    },
    returnValue() {
      this.$emit("return-value", 10);
    },
    promise() {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(20);
        }, 0);
      });

      promise.then((value) => {
        this.$emit("promise", value);
      });
    },
  },
};
```

## @Provide() decorator

```ts
import { Component, Inject, Provide, Vue } from "vue-property-decorator";

const symbol = Symbol("baz");

@Component
export class MyComponent extends Vue {
  @Inject() readonly foo!: string;
  @Inject("bar") readonly bar!: string;
  @Inject({ from: "optional", default: "default" }) readonly optional!: string;
  @Inject(symbol) readonly baz!: string;

  @Provide() foo = "foo";
  @Provide("bar") baz = "bar";
}
```

相当于

```js
const symbol = Symbol("baz");

export const MyComponent = Vue.extend({
  inject: {
    foo: "foo",
    bar: "bar",
    optional: { from: "optional", default: "default" },
    [symbol]: symbol,
  },
  data() {
    return {
      foo: "foo",
      baz: "bar",
    };
  },
  provide() {
    return {
      foo: this.foo,
      bar: this.baz,
    };
  },
});
```

## TS 组件案例

- [点击此处](ts-demo.md)
