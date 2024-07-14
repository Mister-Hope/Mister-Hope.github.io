import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o,c as p,e as s,f as n,a as c,w as t,b as r}from"./app-DHOHoluL.js";const i={},d=s("h2",{id:"变量作用域",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#变量作用域"},[s("span",null,"变量作用域")])],-1),y=r(`<h2 id="函数作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域"><span>函数作用域</span></a></h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h3><p>作用域(scope)指的是变量存在的范围。在 ES5 的规范中，JavaScript 只有两种作用域: 一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。ES6 又新增了块级作用域，本教程不涉及。</p><p>对于顶层函数来说，函数外部声明的变量就是全局变量(global variable)，它可以在函数内部读取。</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9;"> v</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 1</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> f</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">v</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">f</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#616E88;">// 1</span></span></code></pre></div><p>上面的代码表明，函数 <code>f</code> 内部可以读取全局变量 <code>v</code>。</p><p>在函数内部定义的变量，外部无法读取，称为“局部变量”(local variable)。</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> f</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  let</span><span style="color:#D8DEE9;"> v</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 1</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">v</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // ReferenceError: v is not defined</span></span></code></pre></div><p>上面代码中，变量 <code>v</code> 在函数内部定义，所以是一个局部变量，函数之外就无法读取。</p><p>函数内部定义的变量，会在该作用域内覆盖同名全局变量。</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9;"> v</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 1</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> f</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  let</span><span style="color:#D8DEE9;"> v</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 2</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">  console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">v</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">f</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 2</span></span>
<span class="line"><span style="color:#D8DEE9;">v</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 1</span></span></code></pre></div><p>上面代码中，变量 <code>v</code> 同时在函数的外部和内部有定义。结果，在函数内部定义，局部变量 <code>v</code> 覆盖了全局变量 <code>v</code>。</p><p>注意，对于 <code>var</code> 命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量。</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">true</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#81A1C1;">  var</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 5</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 5</span></span></code></pre></div><p>上面代码中，变量 <code>x</code> 在条件判断区块之中声明，结果就是一个全局变量，可以在区块之外读取。</p><h3 id="函数内部的变量提升" tabindex="-1"><a class="header-anchor" href="#函数内部的变量提升"><span>函数内部的变量提升</span></a></h3><p>与全局作用域一样，函数作用域内部也会产生“变量提升”现象。<code>var</code> 命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> foo</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">x</span><span style="color:#81A1C1;"> &gt;</span><span style="color:#B48EAD;"> 100</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#81A1C1;">    var</span><span style="color:#D8DEE9;"> tmp</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> -</span><span style="color:#B48EAD;"> 100</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// 等同于</span></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> foo</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  var</span><span style="color:#D8DEE9;"> tmp</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">  if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">x</span><span style="color:#81A1C1;"> &gt;</span><span style="color:#B48EAD;"> 100</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9;">    tmp</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> -</span><span style="color:#B48EAD;"> 100</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数本身的作用域" tabindex="-1"><a class="header-anchor" href="#函数本身的作用域"><span>函数本身的作用域</span></a></h3><p>函数本身也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9;"> a</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 1</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#88C0D0;"> x</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> function</span><span style="color:#ECEFF4;"> ()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">a</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> f</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  var</span><span style="color:#D8DEE9;"> a</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 2</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#88C0D0;">  x</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">f</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，函数 <code>x</code> 是在函数 <code>f</code> 的外部声明的，所以它的作用域绑定外层，内部变量 <code>a</code> 不会到函数 <code>f</code> 体内取值，所以输出 <code>1</code>，而不是 <code>2</code>。</p><p>总之，函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域。</p><p>很容易犯错的一点是，如果函数 <code>A</code> 调用函数 <code>B</code>，却没考虑到函数 <code>B</code> 不会引用函数 <code>A</code> 的内部变量。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#88C0D0;"> x</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> function</span><span style="color:#ECEFF4;"> ()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">a</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> y</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">f</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  var</span><span style="color:#D8DEE9;"> a</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 2</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#88C0D0;">  f</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">y</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#616E88;">// ReferenceError: a is not defined</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码将函数 <code>x</code> 作为参数，传入函数 <code>y</code>。但是，函数 <code>x</code> 是在函数 <code>y</code> 体外声明的，作用域绑定外层，因此找不到函数 <code>y</code> 的内部变量 <code>a</code>，导致报错。</p><p>同样的，函数体内部声明的函数，作用域绑定函数体内部。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> foo</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  var</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 1</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">  function</span><span style="color:#88C0D0;"> bar</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">    console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span></span>
<span class="line"><span style="color:#81A1C1;">  return</span><span style="color:#D8DEE9;"> bar</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 2</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9;"> f</span><span style="color:#81A1C1;"> =</span><span style="color:#88C0D0;"> foo</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#88C0D0;">f</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，函数 <code>foo</code> 内部声明了一个函数 <code>bar</code>，<code>bar</code> 的作用域绑定 <code>foo</code>。当我们在 <code>foo</code> 外部取出 <code>bar</code> 执行时，变量 <code>x</code> 指向的是 <code>foo</code> 内部的 <code>x</code>，而不是 <code>foo</code> 外部的 <code>x</code>。正是这种机制，构成了下文要讲解的“闭包”现象。</p><h2 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间"><span>命名空间</span></a></h2><p>全局变量会绑定到 <code>window</code> 上，不同的 JavaScript 文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。</p><p>减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。例如:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">// 唯一的全局变量MYAPP:</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> MYAPP</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// 其他变量:</span></span>
<span class="line"><span style="color:#D8DEE9;">MYAPP</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">myapp</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">MYAPP</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">version</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 1.0</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// 其他函数:</span></span>
<span class="line"><span style="color:#D8DEE9;">MYAPP</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">foo</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> function</span><span style="color:#ECEFF4;"> ()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  return</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">foo</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把自己的代码全部放入唯一的命名空间 <code>MYAPP</code> 中，会大大减少全局变量冲突的可能。</p><p>许多著名的 JavaScript 库都是这么干的: jQuery，YUI，underscore 等等。</p>`,35);function E(v,C){const a=e("RouteLink");return o(),p("div",null,[d,s("p",null,[n("请看 "),c(a,{to:"/code/language/js/es6/let.html"},{default:t(()=>[n("let 命令")]),_:1})]),y])}const u=l(i,[["render",E],["__file","scope.html.vue"]]),m=JSON.parse('{"path":"/code/language/js/function/scope.html","title":"函数作用域","lang":"zh-CN","frontmatter":{"title":"函数作用域","icon":"locate","date":"2019-10-02T00:00:00.000Z","category":"JavaScript","description":"变量作用域 请看 函数作用域 定义 作用域(scope)指的是变量存在的范围。在 ES5 的规范中，JavaScript 只有两种作用域: 一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。ES6 又新增了块级作用域，本教程不涉及。 对于顶层函数来说，函数外部声明的变量就是全局变量(global ...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/js/function/scope.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"函数作用域"}],["meta",{"property":"og:description","content":"变量作用域 请看 函数作用域 定义 作用域(scope)指的是变量存在的范围。在 ES5 的规范中，JavaScript 只有两种作用域: 一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。ES6 又新增了块级作用域，本教程不涉及。 对于顶层函数来说，函数外部声明的变量就是全局变量(global ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2019-10-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数作用域\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-02T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"变量作用域","slug":"变量作用域","link":"#变量作用域","children":[]},{"level":2,"title":"函数作用域","slug":"函数作用域","link":"#函数作用域","children":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"函数内部的变量提升","slug":"函数内部的变量提升","link":"#函数内部的变量提升","children":[]},{"level":3,"title":"函数本身的作用域","slug":"函数本身的作用域","link":"#函数本身的作用域","children":[]}]},{"level":2,"title":"命名空间","slug":"命名空间","link":"#命名空间","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4}]},"readingTime":{"minutes":3.68,"words":1104},"filePathRelative":"code/language/js/function/scope.md","localizedDate":"2019年10月2日","excerpt":"","autoDesc":true}');export{u as comp,m as data};
