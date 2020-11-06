---
title: Emmet 语法
icon: emmet
time: 2019-09-03
category: HTML
tags:
  - 快捷键
---

::: tip 简介
所有操作按下 “tab” 键即可瞬间完成
:::

Emmet 是一个快速创建 HTML 的方式，如果您想要成为一个高级 Web 开发者，为了工作效率，您应该掌握 Emmet 语法。

<!-- more -->

## 元素

1. 在编辑器中输入元素名称，即可自动补全生成 HTML 标签，即使不是标准的 HTML 标签。

1. 输入: `!` 或者 `html:5` 或者 `html:4s` 或者 `html:4t` 将自动补全 HTML 基本结构。

## 结构操作

1. 使用“`>`”生成子元素

   ::: tip 案例
   `div>ul>li`:

   ```html
   <div>
     <ul>
       <li></li>
     </ul>
   </div>
   ```

   :::

1. 使用“`+`”生成兄弟元素

   ::: tip 案例
   `div+p+bq`:

   ```html
   <div></div>
   <p></p>
   <blockquote></blockquote>
   ```

   :::

1. 使用“`^`”生成父元素

   ::: tip 案例
   `div+div>p>span+em^bq`:

   ```html
   <div></div>
   <div>
     <p><span></span><em></em></p>
     <blockquote></blockquote>
   </div>
   ```

   :::

1. 使用“`*`”生成多个相同元素

   ::: tip 案例
   `div>ul>li*5`:

   ```html
   <div>
     <ul>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
     </ul>
   </div>
   ```

   :::

1. 使用 “`()`” 将元素分组

   `+` 后面的元素与括号中的第一个元素属于兄弟关系

   ::: tip 案例
   `div>(header>ul>li*2)+footer>p`:

   ```html
   <div>
     <header>
       <ul>
         <li></li>
         <li></li>
       </ul>
     </header>
     <footer>
       <p></p>
     </footer>
   </div>
   ```

   :::

## 属性操作

1. ID 与 class: 元素与 `id` 属性值之间用 `#` 分隔，与 `class` 属性值之间用 `.` 分隔

   ::: tip 案例
   `div#header+div.page+div#footer.class1.class2.class3`:

   ```html
   <div id="header"></div>
   <div class="page"></div>
   <div id="footer" class="class1 class2 class3"></div>
   ```

   :::

1. 使用`[]`标记其他属性

   在 Emmet 中，无需输入引号，直接使用 `[属性1=值1 属性2=值2 ... ]` 即可。

   ::: tip 案例
   `td[title=hello colspan=3]`:

   ```html
   <td title="hello" colspan="3"></td>
   ```

   :::

1. 用 `$` 符号实现 `1` 到 `n` 的自动编号 (`*` 实现多个元素)

   ::: tip 案例
   `li.item$*3`:

   ```html
   <li class="item1"></li>
   <li class="item2"></li>
   <li class="item3"></li>
   ```

   :::

   可在 `$` 后添加 `@n` 修改编号的起始值为 `n`。

   ::: tip 案例
   `li.item$@3*3`:

   ```html
   <li class="item3"></li>
   <li class="item4"></li>
   <li class="item5"></li>
   ```

   :::

   可在 “`$`” 后添加 “`@-`” 修改编号的方向。

   ::: tip 案例
   `li.item$@-3*3`:

   ```html
   <li class="item5"></li>
   <li class="item4"></li>
   <li class="item3"></li>
   ```

   :::

1. 用 `{}` 添加文本内容

   ::: tip 案例
   `a[href=me.html]{click me}`:

   ```html
   <a href="me.html">click me</a>
   ```
