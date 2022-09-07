"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1857],{6420:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var t=a(7875);const e=(0,t._)("p",null,[(0,t.Uk)("在 JavaScript 中，"),(0,t._)("code",null,"Date"),(0,t.Uk)(" 对象用来表示日期和时间。")],-1),p=(0,t.uE)('<p>要获取系统当前时间，用:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nnow<span class="token punctuation">;</span> <span class="token comment">// Wed Jun 24 2015 19:49:22 GMT+0800 (CST)</span>\nnow<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2015, 年份</span>\nnow<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5, 月份，注意月份范围是0~11，5表示六月</span>\nnow<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 24, 表示24号</span>\nnow<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3, 表示星期三</span>\nnow<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 19, 24小时制</span>\nnow<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 49, 分钟</span>\nnow<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 22, 秒</span>\nnow<span class="token punctuation">.</span><span class="token function">getMilliseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 875, 毫秒数</span>\nnow<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1435146562875, 以number形式表示的时间戳</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，当前时间是浏览器从本机操作系统获取的时间，所以不一定准确，因为用户可以把当前时间设定为任何值。</p><p>如果要创建一个指定日期和时间的 <code>Date</code> 对象，可以用:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2015</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nd<span class="token punctuation">;</span> <span class="token comment">// Fri Jun 19 2015 20:15:30 GMT+0800 (CST)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),c=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"提示"),(0,t._)("p",null,[(0,t.Uk)("您可能观察到了一个非常非常坑爹的地方，就是 JavaScript 的月份范围用整数表示是 "),(0,t._)("span",{class:"katex"},[(0,t._)("span",{class:"katex-mathml"},[(0,t._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,t._)("semantics",null,[(0,t._)("mrow",null,[(0,t._)("mn",null,"0"),(0,t._)("mo",null,"−"),(0,t._)("mn",null,"11")]),(0,t._)("annotation",{encoding:"application/x-tex"},"0 - 11")])])]),(0,t._)("span",{class:"katex-html","aria-hidden":"true"},[(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,t._)("span",{class:"mord"},"0"),(0,t._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,t._)("span",{class:"mbin"},"−"),(0,t._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"0.6444em"}}),(0,t._)("span",{class:"mord"},"11")])])]),(0,t.Uk)("，"),(0,t._)("code",null,"0"),(0,t.Uk)(" 表示一月，"),(0,t._)("code",null,"1"),(0,t.Uk)(" 表示二月…….")]),(0,t._)("p",null,[(0,t.Uk)("JavaScript 的 Date 对象月份值从 0 开始，牢记 "),(0,t._)("code",null,"0"),(0,t.Uk)(" = 1 月，"),(0,t._)("code",null,"1"),(0,t.Uk)(" = 2 月，"),(0,t._)("code",null,"2"),(0,t.Uk)(" = 3 月，……，"),(0,t._)("code",null,"11"),(0,t.Uk)(" = 12 月。")])],-1),o=(0,t.uE)('<p>第二种创建一个指定日期和时间的方法是解析一个符合 ISO 8601 格式的字符串:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> d <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;2015-06-24T19:49:22.875+08:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nd<span class="token punctuation">;</span> <span class="token comment">// 1435146562875</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但它返回的不是 <code>Date</code> 对象，而是一个时间戳。不过有时间戳就可以很容易地把它转换为一个 <code>Date</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">1435146562875</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nd<span class="token punctuation">;</span> <span class="token comment">// Wed Jun 24 2015 19:49:22 GMT+0800 (CST)</span>\nd<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),l=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"提示"),(0,t._)("p",null,[(0,t.Uk)("使用 "),(0,t._)("code",null,"Date.parse()"),(0,t.Uk)(" 时传入的字符串使用实际月份 "),(0,t._)("code",null,"01~12"),(0,t.Uk)("，转换为 Date 对象后 "),(0,t._)("code",null,"getMonth()"),(0,t.Uk)(" 获取的月份值为 "),(0,t._)("span",{class:"katex"},[(0,t._)("span",{class:"katex-mathml"},[(0,t._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,t._)("semantics",null,[(0,t._)("mrow",null,[(0,t._)("mn",null,"0"),(0,t._)("mo",null,"−"),(0,t._)("mn",null,"11")]),(0,t._)("annotation",{encoding:"application/x-tex"},"0 - 11")])])]),(0,t._)("span",{class:"katex-html","aria-hidden":"true"},[(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,t._)("span",{class:"mord"},"0"),(0,t._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,t._)("span",{class:"mbin"},"−"),(0,t._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"0.6444em"}}),(0,t._)("span",{class:"mord"},"11")])])]),(0,t.Uk)("。")])],-1),i=(0,t.uE)('<h2 id="时区" tabindex="-1"><a class="header-anchor" href="#时区" aria-hidden="true">#</a> 时区</h2><p>Date 对象表示的时间总是按浏览器所在时区显示的，不过我们既可以显示本地时间，也可以显示调整后的 UTC 时间:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">1435146562875</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nd<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;2015/6/24 下午7:49:22&#39;，本地时间(北京时区+8:00)，显示的字符串与操作系统设定的格式有关</span>\nd<span class="token punctuation">.</span><span class="token function">toUTCString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;Wed, 24 Jun 2015 11:49:22 GMT&#39;，UTC时间，与本地时间相差8小时</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么在 JavaScript 中如何进行时区转换呢? 实际上，只要我们传递的是一个 number 类型的时间戳，我们就不用关心时区转换。任何浏览器都可以把一个时间戳正确转换为本地时间。</p><p>时间戳是个什么东西? 时间戳是一个自增的整数，它表示从 1970 年 1 月 1 日 零时整的 GMT 时区开始的那一刻，到现在的毫秒数。假设浏览器所在电脑的时间是准确的，那么世界上无论哪个时区的电脑，它们此刻产生的时间戳数字都是一样的，所以，时间戳可以精确地表示一个时刻，并且与时区无关。</p><p>所以，我们只需要传递时间戳，或者把时间戳从数据库里读出来，再让 JavaScript 自动转换为当地时间就可以了。</p><p>要获取当前时间戳，可以用:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>Date<span class="token punctuation">.</span>now<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 老版本 IE 没有 now() 方法</span>\n<span class="token keyword">else</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',8),u={},r=(0,a(61935).Z)(u,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,[e,(0,t.kq)(" more "),p,c,o,l,i])}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},10698:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-50d58ef3","path":"/code/language/js/object/date.html","title":"Date","lang":"zh-CN","frontmatter":{"title":"Date","icon":"date","date":"2019-10-11T00:00:00.000Z","category":["JavaScript"],"summary":"在 JavaScript 中，Date 对象用来表示日期和时间。\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/object/date.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Date"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-10-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"<p>在 JavaScript 中，<code v-pre>Date</code> 对象用来表示日期和时间。</p>\\n","headers":[{"level":2,"title":"时区","slug":"时区","link":"#时区","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":6}]},"readingTime":{"minutes":2.64,"words":792},"filePathRelative":"code/language/js/object/date.md","localizedDate":"2019年10月11日"}')}}]);