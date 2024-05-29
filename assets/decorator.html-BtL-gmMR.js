import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as i,b as n}from"./app-C6d_tW6U.js";const e={},l=n(`<p>由于函数也是一个对象，而且函数对象可以被赋值给变量，所以，通过变量也能调用该函数。</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> now</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#D19A66;">...</span><span style="color:#005CC5;--shiki-dark:#56B6C2;">     print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;2021-3-15&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#D19A66;">...</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> f </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> now</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#24292E;--shiki-dark:#61AFEF;"> f</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#D19A66;">2021</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">3</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">15</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数对象有一个 <code>__name__</code> 属性，可以拿到函数的名字:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> now.</span><span style="color:#005CC5;--shiki-dark:#E06C75;">__name__</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">&#39;now&#39;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> f.</span><span style="color:#005CC5;--shiki-dark:#E06C75;">__name__</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">&#39;now&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，假设我们要增强 <code>now()</code> 函数的功能，比如，在函数调用前后自动打印日志，但又不希望修改 <code>now()</code> 函数的定义，这种在代码运行期间动态增加功能的方式，称之为“装饰器” (Decorator) 。</p><p>本质上，decorator 就是一个返回函数的高阶函数。所以，我们要定义一个能打印日志的 decorator，可以定义如下:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">func</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> wrapper</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">**</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">kw</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">        print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;call </span><span style="color:#005CC5;--shiki-dark:#D19A66;">%s</span><span style="color:#032F62;--shiki-dark:#98C379;">():&#39;</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> %</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> func.</span><span style="color:#005CC5;--shiki-dark:#E06C75;">__name__</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">return</span><span style="color:#24292E;--shiki-dark:#61AFEF;"> func</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">args,</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">**</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">kw)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> wrapper</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>观察上面的 <code>log</code>，因为它是一个 decorator，所以接受一个函数作为参数，并返回一个函数。我们要借助 Python 的 <code>@</code> 语法，把 decorator 置于函数的定义处:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">@log</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> now</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;2021-3-15&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用 <code>now()</code> 函数，不仅会运行 <code>now()</code> 函数本身，还会在运行 <code>now()</code> 函数前打印一行日志:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#24292E;--shiki-dark:#61AFEF;"> now</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">call </span><span style="color:#24292E;--shiki-dark:#61AFEF;">now</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#D19A66;">2021</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">3</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">15</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把 <code>@log</code> 放到 <code>now()</code> 函数的定义处，相当于执行了语句:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">now </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#61AFEF;"> log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(now)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于 <code>log()</code> 是一个 decorator，返回一个函数，所以，原来的 <code>now()</code> 函数仍然存在，只是现在同名的 <code>now</code> 变量指向了新的函数，于是调用 <code>now()</code> 将执行新函数，即在 <code>log()</code> 函数中返回的 <code>wrapper()</code> 函数。</p><p><code>wrapper()</code> 函数的参数定义是 <code>(*args, **kw)</code>，因此，<code>wrapper()</code> 函数可以接受任意参数的调用。在 <code>wrapper()</code> 函数内，首先打印日志，再紧接着调用原始函数。</p><p>如果 decorator 本身需要传入参数，那就需要编写一个返回 decorator 的高阶函数，写出来会更复杂。比如，要自定义 <code>log</code> 的文本:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">text</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> decorator</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">func</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">        def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> wrapper</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">**</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">kw</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">            print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;</span><span style="color:#005CC5;--shiki-dark:#D19A66;">%s</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> %s</span><span style="color:#032F62;--shiki-dark:#98C379;">():&#39;</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> %</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (text, func.</span><span style="color:#005CC5;--shiki-dark:#E06C75;">__name__</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">return</span><span style="color:#24292E;--shiki-dark:#61AFEF;"> func</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">args,</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">**</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">kw)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> wrapper</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> decorator</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 3 层嵌套的 decorator 用法如下:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">@log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;execute&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> now</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;2021-3-15&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#24292E;--shiki-dark:#61AFEF;"> now</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">execute </span><span style="color:#24292E;--shiki-dark:#61AFEF;">now</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#D19A66;">2021</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">3</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">15</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和两层嵌套的 decorator 相比，3 层嵌套的效果是这样的:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> now </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#61AFEF;"> log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;execute&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)(now)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们来剖析上面的语句，首先执行 <code>log(&#39;execute&#39;)</code>，返回的是 decorator 函数，再调用返回的函数，参数是 <code>now</code> 函数，返回值最终是 <code>wrapper</code> 函数。</p><p>以上两种 decorator 的定义都没有问题，但还差最后一步。因为我们讲了函数也是对象，它有 <code>__name__</code>等属性，但您去看经过 decorator 装饰之后的函数，它们的 <code>__name__</code> 已经从原来的 <code>&#39;now&#39;</code> 变成了 <code>&#39;wrapper&#39;</code>:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> now.</span><span style="color:#005CC5;--shiki-dark:#E06C75;">__name__</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">&#39;wrapper&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因为返回的那个 <code>wrapper()</code> 函数名字就是 <code>&#39;wrapper&#39;</code>，所以，需要把原始函数的 <code>__name__</code> 等属性复制到 <code>wrapper()</code> 函数中，否则，有些依赖函数签名的代码执行就会出错。</p><p>不需要编写 <code>wrapper.__name__ = func.__name__</code> 这样的代码，Python 内置的 <code>functools.wraps</code> 就是干这个事的，所以，一个完整的 decorator 的写法如下:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">import</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> functools</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">func</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    @functools</span><span style="color:#6F42C1;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">wraps</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#24292E;--shiki-dark:#61AFEF;">func</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> wrapper</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">**</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">kw</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">        print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;call </span><span style="color:#005CC5;--shiki-dark:#D19A66;">%s</span><span style="color:#032F62;--shiki-dark:#98C379;">():&#39;</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> %</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> func.</span><span style="color:#005CC5;--shiki-dark:#E06C75;">__name__</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">return</span><span style="color:#24292E;--shiki-dark:#61AFEF;"> func</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">args,</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">**</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">kw)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> wrapper</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者针对带参数的 decorator:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">import</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> functools</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">text</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> decorator</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">func</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">        @functools</span><span style="color:#6F42C1;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">wraps</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#24292E;--shiki-dark:#61AFEF;">func</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">        def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> wrapper</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">**</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">kw</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">            print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;</span><span style="color:#005CC5;--shiki-dark:#D19A66;">%s</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> %s</span><span style="color:#032F62;--shiki-dark:#98C379;">():&#39;</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> %</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (text, func.</span><span style="color:#005CC5;--shiki-dark:#E06C75;">__name__</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">return</span><span style="color:#24292E;--shiki-dark:#61AFEF;"> func</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">args,</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">**</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">kw)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> wrapper</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> decorator</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>import functools</code> 是导入 <code>functools</code> 模块。模块的概念稍候讲解。现在，只需记住在定义 <code>wrapper()</code> 的前面加上 <code>@functools.wraps(func)</code> 即可。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>在面向对象 (OOP) 的设计模式中，decorator 被称为装饰模式。OOP 的装饰模式需要通过继承和组合来实现，而 Python 除了能支持 OOP 的 decorator 外，直接从语法层次支持 decorator。Python 的 decorator 可以用函数实现，也可以用类实现。</p><p>decorator 可以增强函数的功能，定义起来虽然有点复杂，但使用起来非常灵活和方便。</p><p>请编写一个 decorator，能在函数调用的前后打印出 <code>&#39;begin call&#39;</code> 和 <code>&#39;end call&#39;</code> 的日志。</p><p>再思考一下能否写出一个 <code>@log</code> 的 decorator，使它既支持:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">@log</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> f</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    pass</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>又支持:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">@log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;execute&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> f</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    pass</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),r=[l];function o(p,d){return a(),i("div",null,r)}const k=s(e,[["render",o],["__file","decorator.html.vue"]]),h=JSON.parse('{"path":"/code/language/python/functional-programming/decorator.html","title":"装饰器","lang":"zh-CN","frontmatter":{"title":"装饰器","icon":"decorate","author":"廖雪峰","date":"2021-03-15T00:00:00.000Z","category":"Python","description":"由于函数也是一个对象，而且函数对象可以被赋值给变量，所以，通过变量也能调用该函数。 函数对象有一个 __name__ 属性，可以拿到函数的名字: 现在，假设我们要增强 now() 函数的功能，比如，在函数调用前后自动打印日志，但又不希望修改 now() 函数的定义，这种在代码运行期间动态增加功能的方式，称之为“装饰器” (Decorator) 。 本质...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/python/functional-programming/decorator.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"装饰器"}],["meta",{"property":"og:description","content":"由于函数也是一个对象，而且函数对象可以被赋值给变量，所以，通过变量也能调用该函数。 函数对象有一个 __name__ 属性，可以拿到函数的名字: 现在，假设我们要增强 now() 函数的功能，比如，在函数调用前后自动打印日志，但又不希望修改 now() 函数的定义，这种在代码运行期间动态增加功能的方式，称之为“装饰器” (Decorator) 。 本质..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2021-03-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"装饰器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-15T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1615823008000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":3.5,"words":1049},"filePathRelative":"code/language/python/functional-programming/decorator.md","localizedDate":"2021年3月15日","excerpt":"","autoDesc":true}');export{k as comp,h as data};
