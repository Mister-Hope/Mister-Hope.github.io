---
date: 2020-10-09
title: 小程序内索引
icon: search
category: 小程序
---

微信现已开放小程序内搜索，开发者可以通过 `sitemap.json` 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 `user-agent: mpcrawler` 及场景值: `1129`。需要注意的是，若小程序爬虫发现的页面数据和真实用户的呈现不一致，那么该页面将不会进入索引中。

小程序根目录下的 sitemap.json 文件用于配置小程序及其页面是否允许被微信索引，文件内容为一个 JSON 对象，如果没有 `sitemap.json` ，则默认为所有页面都允许被索引。

<!-- more -->

## 配置项

| 属性  | 类型     | 必填 | 描述         |
| ----- | -------- | ---- | ------------ |
| rules | Object[] | 是   | 索引规则列表 |

### rules

rules 配置项指定了索引规则，每项规则为一个 JSON 对象，属性如下所示:

| 属性     | 类型     | 必填 | 默认值      | 取值                   | 取值说明                                                                       |
| -------- | -------- | ---- | ----------- | ---------------------- | ------------------------------------------------------------------------------ |
| action   | string   | 否   | "allow"     | "allow"、"disallow"    | 命中该规则的页面是否能被索引                                                   |
| page     | string   | 是   |             | "\*"、页面的路径       | \* 表示所有页面，不能作为通配符使用                                            |
| params   | string[] | 否   | []          |                        | 当 page 字段指定的页面在被本规则匹配时可能使用的页面参数名称的列表(不含参数值) |
| matching | string   | 否   | "inclusive" | 参考 matching 取值说明 | 当 page 字段指定的页面在被本规则匹配时，此参数说明 params 匹配方式             |
| priority | Number   | 否   |             |                        | 优先级，值越大则规则越早被匹配，否则默认从上到下匹配                           |

### matching 取值说明

| 值        | 说明                                                   |
| --------- | ------------------------------------------------------ |
| exact     | 当小程序页面的参数列表等于 params 时，规则命中         |
| inclusive | 当小程序页面的参数列表包含 params 时，规则命中         |
| exclusive | 当小程序页面的参数列表与 params 交集为空时，规则命中   |
| partial   | 当小程序页面的参数列表与 params 交集不为空时，规则命中 |

### 配置示例

#### 示例 1

```json
{
  "rules": [
    {
      "action": "allow",
      "page": "path/to/page",
      "params": ["a", "b"],
      "matching": "exact"
    },
    {
      "action": "disallow",
      "page": "path/to/page"
    }
  ]
}
```

- `path/to/page?a=1&b=2` => 优先索引
- `path/to/page` => 不被索引
- `path/to/page?a=1` => 不被索引
- `path/to/page?a=1&b=2&c=3` => 不被索引
- 其他页面都会被索引

#### 示例 2

```json
{
  "rules": [
    {
      "action": "allow",
      "page": "path/to/page",
      "params": ["a", "b"],
      "matching": "inclusive"
    },
    {
      "action": "disallow",
      "page": "path/to/page"
    }
  ]
}
```

- `path/to/page?a=1&b=2` => 优先索引
- `path/to/page?a=1&b=2&c=3` => 优先索引
- `path/to/page` => 不被索引
- `path/to/page?a=1` => 不被索引
- 其他页面都会被索引

#### 示例 3

```json
{
  "rules": [
    {
      "action": "allow",
      "page": "path/to/page",
      "params": ["a", "b"],
      "matching": "exclusive"
    },
    {
      "action": "disallow",
      "page": "path/to/page"
    }
  ]
}
```

- `path/to/pag`e => 优先索引
- `path/to/page?c=3` => 优先索引
- `path/to/page?a=1` => 不被索引
- `path/to/page?a=1&b=2` => 不被索引
- 其他页面都会被索引

#### 示例 4

```json
{
  "rules": [
    {
      "action": "allow",
      "page": "path/to/page",
      "params": ["a", "b"],
      "matching": "partial"
    },
    {
      "action": "disallow",
      "page": "path/to/page"
    }
  ]
}
```

- `path/to/page?a=1` => 优先索引
- `path/to/page?a=1&b=2` => 优先索引
- `path/to/page` => 不被索引
- `path/to/page?c=3` => 不被索引
- 其他页面都会被索引

::: tip

没有 sitemap.json 则默认所有页面都能被索引

`{"action": "allow", "page": "*"}` 是优先级最低的默认规则，未显式指明 `"disallow"` 的都默认被索引

:::
