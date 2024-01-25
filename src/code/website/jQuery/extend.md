---
title: 扩展
icon: plugin
date: 2019-11-05
category: jQuery
---

当我们使用 jQuery 对象的方法时，由于 jQuery 对象可以操作一组 DOM，而且支持链式操作，所以用起来非常方便。

但是 jQuery 内置的方法永远不可能满足所有的需求。比如，我们想要高亮显示某些 DOM 元素，用 jQuery 可以这么实现:

```js
$("span.hl").css("backgroundColor", "#fffceb").css("color", "#d85030");

$("p a.hl").css("backgroundColor", "#fffceb").css("color", "#d85030");
```

总是写重复代码可不好，万一以后还要修改字体就更麻烦了，能不能统一起来，写个 `highlight()` 方法?

```js
$("span.hl").highlight();

$("p a.hl").highlight();
```

答案是肯定的。我们可以扩展 jQuery 来实现自定义方法。将来如果要修改高亮的逻辑，只需修改一处扩展代码。这种方式也称为编写 jQuery 插件。

## 编写 jQuery 插件

给 jQuery 对象绑定一个新方法是通过扩展 `$.fn` 对象实现的。让我们来编写第一个扩展—— `highlight1()`:

```js
$.fn.highlight1 = function () {
  // this已绑定为当前jQuery对象:
  this.css("backgroundColor", "#fffceb").css("color", "#d85030");
  return this;
};
```

注意到函数内部的 `this` 在调用时被绑定为 jQuery 对象，所以函数内部代码可以正常调用所有 jQuery 对象的方法。

对于如下的 HTML 结构:

```html
<!-- HTML结构 -->
<div id="test-highlight1">
  <p>什么是<span>jQuery</span></p>
  <p><span>jQuery</span>是目前最流行的<span>JavaScript</span>库。</p>
</div>
```

来测试一下 `highlight1()` 的效果:

```js
"use strict";

$("#test-highlight1 span").highlight1();
```

细心的您可能发现了，为什么最后要 `return this` ;? 因为 jQuery 对象支持链式操作，我们自己写的扩展方法也要能继续链式下去:

```js
$("span.hl").highlight1().slideDown();
```

不然，用户调用的时候，就不得不把上面的代码拆成两行。

但是这个版本并不完美。有的用户希望高亮的颜色能自己来指定，怎么办?

我们可以给方法加个参数，让用户自己把参数用对象传进去。于是我们有了第二个版本的 `highlight2()`:

```js
$.fn.highlight2 = function (options) {
  // 要考虑到各种情况:
  // options为undefined
  // options只有部分key
  const bgcolor = (options && options.backgroundColor) || "#fffceb";
  const color = (options && options.color) || "#d85030";
  this.css("backgroundColor", bgcolor).css("color", color);
  return this;
};
```

对于如下 HTML 结构:

```html
<!-- HTML结构 -->
<div id="test-highlight2">
  <p>什么是<span>jQuery</span> <span>Plugin</span></p>
  <p>
    编写<span>jQuery</span>
    <span>Plugin</span>可以用来扩展<span>jQuery</span>的功能。
  </p>
</div>
```

来实测一下带参数的 `highlight2()`:

```js
"use strict";

$("#test-highlight2 span").highlight2({
  backgroundColor: "#00a8e6",
  color: "#ffffff",
});
```

对于默认值的处理，我们用了一个简单的 `&&` 和 `||` 短路操作符，总能得到一个有效的值。

另一种方法是使用 jQuery 提供的辅助方法 `$.extend(target, obj1, obj2, ...)`，它把多个 object 对象的属性合并到第一个 target 对象中，遇到同名属性，总是使用靠后的对象的值，也就是越往后优先级越高:

```js
// 把默认值和用户传入的options合并到对象{}中并返回:
const opts = $.extend(
  {},
  {
    backgroundColor: "#00a8e6",
    color: "#ffffff",
  },
  options,
);
```

紧接着用户对 `highlight2()` 提出了意见: 每次调用都需要传入自定义的设置，能不能让我自己设定一个缺省值，以后的调用统一使用无参数的 `highlight2()`?

也就是说，我们设定的默认值应该能允许用户修改。

那默认值放哪比较合适? 放全局变量肯定不合适，最佳地点是 `$.fn.highlight2` 这个函数对象本身。

于是最终版的 `highlight()` 终于诞生了:

```js
$.fn.highlight = function (options) {
  // 合并默认值和用户设定值:
  const opts = $.extend({}, $.fn.highlight.defaults, options);
  this.css("backgroundColor", opts.backgroundColor).css("color", opts.color);
  return this;
};

// 设定默认值:
$.fn.highlight.defaults = {
  color: "#d85030",
  backgroundColor: "#fff8de",
};
```

这次用户终于满意了。用户使用时，只需一次性设定默认值:

```js
$.fn.highlight.defaults.color = "#fff";
$.fn.highlight.defaults.backgroundColor = "#000";
```

然后就可以非常简单地调用 `highlight()` 了。

对如下的 HTML 结构:

```html
<!-- HTML结构 -->
<div id="test-highlight">
  <p>如何编写<span>jQuery</span> <span>Plugin</span></p>
  <p>
    编写<span>jQuery</span>
    <span>Plugin</span
    >，要设置<span>默认值</span>，并允许用户修改<span>默认值</span>，或者运行时传入<span>其他值</span>。
  </p>
</div>
```

实测一下修改默认值的效果:

```js
"use strict";

$.fn.highlight.defaults.color = "#659f13";
$.fn.highlight.defaults.backgroundColor = "#f2fae3";

$("#test-highlight p:first-child span").highlight();

$("#test-highlight p:last-child span").highlight({
  color: "#dd1144",
});
```

最终，我们得出编写一个 jQuery 插件的原则:

- 给 `$.fn` 绑定函数，实现插件的代码逻辑；
- 插件函数最后要 `return this` ;以支持链式调用；
- 插件函数要有默认值，绑定在 `$.fn.<pluginName>.defaults` 上；
- 用户在调用时可传入设定值以便覆盖默认值。

## 针对特定元素的扩展

我们知道 jQuery 对象的有些方法只能作用在特定 DOM 元素上，比如 `submit()` 方法只能针对 form。如果我们编写的扩展只能针对某些类型的 DOM 元素，应该怎么写?

还记得 jQuery 的选择器支持 `filter()` 方法来过滤吗? 我们可以借助这个方法来实现针对特定元素的扩展。

举个例子，现在我们要给所有指向外链的超链接加上跳转提示，怎么做?

先写出用户调用的代码:

```js
$("#main a").external();
```

然后按照上面的方法编写一个 `external` 扩展:

```js
$.fn.external = function () {
  // return返回的each()返回结果，支持链式调用:
  return this.filter("a").each(function () {
    // 注意: each()内部的回调函数的this绑定为DOM本身!
    const a = $(this);
    const url = a.attr("href");
    if (
      url &&
      (url.indexOf("http://") === 0 || url.indexOf("https://") === 0)
    ) {
      a.attr("href", "#0")
        .removeAttr("target")
        .append(' <i class="uk-icon-external-link"></i>')
        .click(function () {
          if (confirm("您确定要前往" + url + "? ")) {
            window.open(url);
          }
        });
    }
  });
};
```

对如下的 HTML 结构:

```html
<!-- HTML结构 -->
<div id="test-external">
  <p>如何学习<a href="https://jquery.com">jQuery</a>?</p>
  <p>
    首先，您要学习<a
      href="/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000"
      >JavaScript</a
    >，并了解基本的<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"
      >HTML</a
    >。
  </p>
</div>
```

实测外链效果:

```js
"use strict";

$("#test-external a").external();
```

## 小结

扩展 jQuery 对象的功能十分简单，但是我们要遵循 jQuery 的原则，编写的扩展方法能支持链式调用、具备默认值和过滤特定元素，使得扩展方法看上去和 jQuery 本身的方法没有什么区别。
