---
title: Page 插件
icon: page
category: 小程序
---

::: tip

`page.ts` 是 Mr.Hope 本人自己编写的库，目前仅做个人使用。

:::

<!-- more -->

## 插件的引入

首先在 `ts` 文件头部引入 `page` 与 `wxpage`。

```ts
import $register from "wxpage";
import $page from "path/to/page";
```

## 函数

### resolvePage()

`(option: MPPage.PageLifeTimeOptions, page?: ComponentData[] | undefined, setGlobal?: boolean) => ComponentData[] | undefined`

**简介:**

- 性质: 同步函数

- 描述: 预处理 `page` 数据写入全局数据

- 用法: 在页面 `onNavigate` 时调用，

  | 参数      | 描述                               |
  | --------- | ---------------------------------- |
  | option    | 页面跳转参数                       |
  | page      | 页面数据                           |
  | setGlobal | 是否将处理后的数据写入到全局数据中 |

- 返回: 处理后的 page 配置

**案例:**

```ts
  onNavigate(option) {
    resolvePage(option);
  }
```

### setPage()

`({ option, ctx, handle }: SetPageOption, page?: ComponentData[] | undefined, preload?: boolean) => void`

**简介:**

- 描述: 设置本地界面数据，如果传入 `page` 参数，则根据 `handle` 的值决定是否在 `setData` 前处理 `page`。

  如果没有传入 `page`，则使用 `PageOption.data.page`。之后根据 `preload` 的值决定是否对页面链接进行预加载。

- 用法: 在页面 `onLoad` 时调用

- 性质: 同步函数

  | 参数                     | 描述             |
  | ------------------------ | ---------------- |
  | object                   | 配置对象         |
  | page                     | 页面数据         |
  | preload \[default:true\] | 是否预加载子页面 |

  `object` 参数:

  | 参数                     | 描述               |
  | ------------------------ | ------------------ |
  | option                   | 页面传参           |
  | ctx                      | 页面指针           |
  | handle \[default:false\] | 页面是否已经被处理 |

**案例:**

```ts
  onLoad(option: any) {
    setPage({ option, ctx: this });
  }
```

### setOnlinePage()

`(option: PageArg, ctx: any, preload?: boolean) => void`

**简介:**

- 描述: 设置在线界面数据

- 用法: 在页面 `onLoad` 时调用

- 性质: 同步函数

  | 参数                     | 描述             |
  | ------------------------ | ---------------- |
  | option                   | 页面跳转参数     |
  | ctx                      | 页面指针         |
  | preload \[default:true\] | 是否预加载子页面 |

**案例:**

```ts
  onLoad(res: any) {
    setOnlinePage(res, this);
  }
```

### popNotice()

`(aim: string) => void`

**简介:**

- 描述: 弹出通知

- 用法: 在页面 `onLoad` 时调用

- 性质: 同步函数

  | 参数 | 描述              |
  | ---- | ----------------- |
  | aim  | 当前界面的 aim 值 |

**案例:**

```ts
  onLoad(res: any) {
    popNotice('main');
  }
```

### setColor()

`(grey?: boolean) => { NavigationBarColor, BackGroundColor}`

**简介:**

- 描述: 设置胶囊与背景颜色

- 用法: 在页面 `onShow` 时调用

- 性质: 同步函数

  | 参数                   | 描述               |
  | ---------------------- | ------------------ |
  | grey \[default:false\] | 页面是否为灰色背景 |

**案例:**

```ts
  onShow() {
    if (this.data.page) {
      // 设置胶囊和背景颜色
      const { nc, bc } = setColor(this.data.page[0].grey);

      wx.setNavigationBarColor(nc);
      wx.setBackgroundColor(bc);
    }
  }
```

### changeNav()

`(option: WechatMiniprogram.Page.IPageScrollOption, ctx: any, headName?: string | undefined) => void`

**简介:**

- 描述: 导航栏动态改变

- 用法: 在页面 `onPageScroll` 时调用

- 性质: 同步函数

  | 参数     | 描述                             |
  | -------- | -------------------------------- |
  | option   | 组件参数                         |
  | ctx      | 页面指针                         |
  | headName | 导航栏配置对象在 `data` 中的名称 |

**案例:**

```ts
  onPageScroll(event) {
    changeNav(event, this);
  },
```
