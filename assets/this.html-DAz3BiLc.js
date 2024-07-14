import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,b as l}from"./app-DHOHoluL.js";const e={},p=l(`<p>在一个对象中绑定函数，称为这个对象的方法。</p><p>在 JavaScript 中，对象的定义是这样的:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> xiaoming</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">小明</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  birth</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1990</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>但是，如果我们给 <code>xiaoming</code> 绑定一个函数，就可以做更多的事情。比如，写个 <code>age()</code> 方法，返回 <code>xiaoming</code> 的年龄:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> xiaoming</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">小明</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  birth</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1990</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  age</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">    const</span><span style="color:#D8DEE9;"> y</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> new</span><span style="color:#88C0D0;"> Date</span><span style="color:#D8DEE9FF;">()</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getFullYear</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#D8DEE9;"> y</span><span style="color:#81A1C1;"> -</span><span style="color:#81A1C1;"> this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">birth</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">xiaoming</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">age</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // function xiaoming.age()</span></span>
<span class="line"><span style="color:#D8DEE9;">xiaoming</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">age</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 今年调用是25,明年调用就变成26了</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> xiaoming</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  age</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#81A1C1;"> new</span><span style="color:#88C0D0;"> Date</span><span style="color:#D8DEE9FF;">()</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getFullYear</span><span style="color:#D8DEE9FF;">() </span><span style="color:#81A1C1;">-</span><span style="color:#81A1C1;"> this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">birth</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>是</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> xiaoming</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  age</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> function</span><span style="color:#ECEFF4;"> ()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#81A1C1;"> new</span><span style="color:#88C0D0;"> Date</span><span style="color:#D8DEE9FF;">()</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getFullYear</span><span style="color:#D8DEE9FF;">() </span><span style="color:#81A1C1;">-</span><span style="color:#81A1C1;"> this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">birth</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>的简写方式。</p></div><p>绑定到对象上的函数称为方法，和普通函数也没啥区别，但是它在内部使用了一个 <code>this</code> 关键字，这个东东是什么?</p><p>在一个方法内部，<code>this</code> 是一个特殊变量，它始终指向当前对象，也就是 <code>xiaoming</code> 这个变量。所以，<code>this.birth</code> 可以拿到 <code>xiaoming</code> 的 <code>birth</code> 属性。</p><p>让我们拆开写:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> getAge</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  return</span><span style="color:#81A1C1;"> new</span><span style="color:#88C0D0;"> Date</span><span style="color:#D8DEE9FF;">()</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getFullYear</span><span style="color:#D8DEE9FF;">() </span><span style="color:#81A1C1;">-</span><span style="color:#81A1C1;"> this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">birth</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> xiaoming</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">小明</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  birth</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1990</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  age</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9;"> getAge</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">xiaoming</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">age</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 25, 正常结果</span></span>
<span class="line"><span style="color:#88C0D0;">getAge</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // NaN</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单独调用函数 <code>getAge()</code> 怎么返回了 <code>NaN</code>? 请注意，我们已经进入到了 JavaScript 的一个大坑里。</p><p>JavaScript 的函数内部如果调用了 <code>this</code>，那么这个 <code>this</code> 到底指向谁?</p><p>答案是，视情况而定!</p><p>如果以对象的方法形式调用，比如 <code>xiaoming.age()</code>，该函数的 <code>this</code> 指向被调用的对象，也就是 <code>xiaoming</code>，这是符合我们预期的。</p><p>如果单独调用函数，比如 <code>getAge()</code>，此时，该函数的 <code>this</code> 指向全局对象，也就是 <code>window</code>。</p><p>坑爹啊!</p><p>更坑爹的是，如果这么写:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> fn</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> xiaoming</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">age</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 先拿到 xiaoming 的 page 函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">fn</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // NaN</span></span></code></pre></div><p>也是不行的! 要保证 <code>this</code> 指向正确，必须用 <code>obj.xxx()</code> 的形式调用!</p><p>由于这是一个巨大的设计错误，要想纠正可没那么简单。ECMA 决定，在 strict 模式下让函数的 <code>this</code> 指向 <code>undefined</code>，因此，在 strict 模式下，您会得到一个错误:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">use strict</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> xiaoming</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">小明</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  birth</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1990</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  age</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#81A1C1;"> new</span><span style="color:#88C0D0;"> Date</span><span style="color:#D8DEE9FF;">()</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getFullYear</span><span style="color:#D8DEE9FF;">() </span><span style="color:#81A1C1;">-</span><span style="color:#81A1C1;"> this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">birth</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> fn</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> xiaoming</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">age</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">fn</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // Uncaught TypeError: Cannot read property &#39;birth&#39; of undefined</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个决定只是让错误及时暴露出来，并没有解决 <code>this</code> 应该指向的正确位置。</p><p>有些时候，喜欢重构的您把方法重构了一下:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">use strict</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> xiaoming</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">小明</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  birth</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1990</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  age</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">    function</span><span style="color:#88C0D0;"> getAgeFromBirth</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">      return</span><span style="color:#81A1C1;"> new</span><span style="color:#88C0D0;"> Date</span><span style="color:#D8DEE9FF;">()</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getFullYear</span><span style="color:#D8DEE9FF;">() </span><span style="color:#81A1C1;">-</span><span style="color:#81A1C1;"> this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">birth</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#88C0D0;"> getAgeFromBirth</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">xiaoming</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">age</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // Uncaught TypeError: Cannot read property &#39;birth&#39; of undefined</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果又报错了! 原因是 <code>this</code> 指针只在 <code>age</code> 方法的函数内指向 <code>xiaoming</code>，在函数内部定义的函数，<code>this</code> 又指向 <code>undefined</code> 了! (在非 strict 模式下，它重新指向全局对象 <code>window</code>! )</p><p>修复的办法也不是没有，我们用一个 <code>that</code> 变量首先捕获 <code>this</code>:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">use strict</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> xiaoming</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">小明</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  birth</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1990</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  age</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">    const</span><span style="color:#D8DEE9;"> that</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> this;</span><span style="color:#616E88;"> // 在方法内部一开始就捕获 this</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">    function</span><span style="color:#88C0D0;"> getAgeFromBirth</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">      // 用that而不是this</span></span>
<span class="line"><span style="color:#81A1C1;">      return</span><span style="color:#81A1C1;"> new</span><span style="color:#88C0D0;"> Date</span><span style="color:#D8DEE9FF;">()</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getFullYear</span><span style="color:#D8DEE9FF;">() </span><span style="color:#81A1C1;">-</span><span style="color:#D8DEE9;"> that</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">birth</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#88C0D0;"> getAgeFromBirth</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">xiaoming</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">age</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 25</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 <code>const that = this;</code>，您就可以放心地在方法内部定义其他函数，而不是把所有语句都堆到一个方法中。</p><h2 id="apply" tabindex="-1"><a class="header-anchor" href="#apply"><span>apply</span></a></h2><p>虽然在一个独立的函数调用中，根据是否是 <code>strict</code> 模式，<code>this</code> 指向 <code>undefined</code> 或 <code>window</code>，不过，我们还是可以控制 <code>this</code> 的指向的!</p><p>要指定函数的 <code>this</code> 指向哪个对象，可以用函数本身的 <code>apply</code> 方法，它接收两个参数，第一个参数就是需要绑定的 <code>this</code> 变量，第二个参数是 <code>Array</code>，表示函数本身的参数。</p><p>用 <code>apply</code> 修复 <code>getAge()</code> 调用:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> getAge</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  return</span><span style="color:#81A1C1;"> new</span><span style="color:#88C0D0;"> Date</span><span style="color:#D8DEE9FF;">()</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getFullYear</span><span style="color:#D8DEE9FF;">() </span><span style="color:#81A1C1;">-</span><span style="color:#81A1C1;"> this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">birth</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> xiaoming</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">小明</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  birth</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 1990</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  age</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9;"> getAge</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">xiaoming</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">age</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 25</span></span>
<span class="line"><span style="color:#D8DEE9;">getAge</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">apply</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">xiaoming</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> [])</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 25, this指向xiaoming, 参数为空</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个与 <code>apply()</code> 类似的方法是 <code>call()</code>，唯一区别是:</p><p><code>apply()</code> 把参数打包成 <code>Array</code> 再传入；</p><p><code>call()</code> 把参数按顺序传入。</p><p>比如调用 <code>Math.max(3, 5, 4)</code>，分别用 <code>apply()</code> 和 <code>call()</code> 实现如下:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">Math</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">max</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">apply</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">null</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;"> 5</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;"> 4</span><span style="color:#D8DEE9FF;">])</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 5</span></span>
<span class="line"><span style="color:#D8DEE9;">Math</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">max</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">call</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">null</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;"> 3</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;"> 5</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;"> 4</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 5</span></span></code></pre></div><p>对普通函数调用，我们通常把 <code>this</code> 绑定为 null。</p><h2 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器"><span>装饰器</span></a></h2><p>利用 <code>apply()</code>，我们还可以动态改变函数的行为。</p><p>JavaScript 的所有对象都是动态的，即使内置的函数，我们也可以重新指向新的函数。</p><p>现在假定我们想统计一下代码一共调用了多少次 <code>parseInt()</code>，可以把所有的调用都找出来，然后手动加上 <code>count += 1</code>，不过这样做太傻了。最佳方案是用我们自己的函数替换掉默认的 <code>parseInt()</code>:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">use strict</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9;"> count</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 0</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> oldParseInt</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> parseInt</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 保存原函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">window</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">parseInt</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> function</span><span style="color:#ECEFF4;"> ()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  count</span><span style="color:#81A1C1;"> +=</span><span style="color:#B48EAD;"> 1</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">  return</span><span style="color:#D8DEE9;"> oldParseInt</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">apply</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">null</span><span style="color:#ECEFF4;">,</span><span style="color:#81A1C1;"> arguments</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 调用原函数</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// 测试:</span></span>
<span class="line"><span style="color:#88C0D0;">parseInt</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">10</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#88C0D0;">parseInt</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">20</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#88C0D0;">parseInt</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">30</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">\`</span><span style="color:#A3BE8C;">count = </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">count</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">\`</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),o=[p];function c(t,r){return n(),a("div",null,o)}const E=s(e,[["render",c],["__file","this.html.vue"]]),y=JSON.parse('{"path":"/code/language/js/function/this.html","title":"this 的指向","lang":"zh-CN","frontmatter":{"title":"this 的指向","icon":"context","date":"2019-10-03T00:00:00.000Z","category":"JavaScript","description":"在一个对象中绑定函数，称为这个对象的方法。 在 JavaScript 中，对象的定义是这样的: 但是，如果我们给 xiaoming 绑定一个函数，就可以做更多的事情。比如，写个 age() 方法，返回 xiaoming 的年龄: 提示 是 的简写方式。 绑定到对象上的函数称为方法，和普通函数也没啥区别，但是它在内部使用了一个 this 关键字，这个东东...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/js/function/this.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"this 的指向"}],["meta",{"property":"og:description","content":"在一个对象中绑定函数，称为这个对象的方法。 在 JavaScript 中，对象的定义是这样的: 但是，如果我们给 xiaoming 绑定一个函数，就可以做更多的事情。比如，写个 age() 方法，返回 xiaoming 的年龄: 提示 是 的简写方式。 绑定到对象上的函数称为方法，和普通函数也没啥区别，但是它在内部使用了一个 this 关键字，这个东东..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2019-10-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"this 的指向\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-03T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"apply","slug":"apply","link":"#apply","children":[]},{"level":2,"title":"装饰器","slug":"装饰器","link":"#装饰器","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5}]},"readingTime":{"minutes":3.91,"words":1174},"filePathRelative":"code/language/js/function/this.md","localizedDate":"2019年10月3日","excerpt":"","autoDesc":true}');export{E as comp,y as data};
