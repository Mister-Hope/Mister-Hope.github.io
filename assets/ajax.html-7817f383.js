import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,e as c,b as s,d as n,a as l,f as u}from"./app-d1a44583.js";const i="/assets/js-cors-2d3d65b3.png",r={},k=s("p",null,"Ajax 不是 JavaScript 的规范，它只是一个哥们“发明”的缩写: Asynchronous JavaScript and XML，意思就是用 JavaScript 执行异步网络请求。",-1),d=u(`<p>如果仔细观察一个 Form 的提交，您就会发现，一旦用户点击 “Submit” 按钮，表单开始提交，浏览器就会刷新页面，然后在新页面里告诉您操作是成功了还是失败了。如果不幸由于网络太慢或者其他原因，就会得到一个 404 页面。</p><p>这就是 Web 的运作原理: 一次 HTTP 请求对应一个页面。</p><p>如果要让用户留在当前页面中，同时发出新的 HTTP 请求，就必须用 JavaScript 发送这个新请求，接收到数据后，再用 JavaScript 更新页面，这样一来，用户就感觉自己仍然停留在当前页面，但是数据却可以不断地更新。</p><p>最早大规模使用 Ajax 的就是 Gmail，Gmail 的页面在首次加载后，剩下的所有数据都依赖于 Ajax 来更新。</p><p>用 JavaScript 写一个完整的 Ajax 代码并不复杂，但是需要注意: Ajax 请求是异步执行的，也就是说，要通过回调函数获得响应。</p><p>在现代浏览器上写 Ajax 主要依靠 XMLHttpRequest 对象:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">success</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> textarea <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-response-text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  textarea<span class="token punctuation">.</span>value <span class="token operator">=</span> text<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">fail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> textarea <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-response-text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  textarea<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Error code: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 新建XMLHttpRequest对象</span>

request<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 状态发生变化时，函数被回调</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 成功完成</span>
    <span class="token comment">// 判断响应结果:</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span>
      <span class="token comment">// 成功，通过responseText拿到响应的文本:</span>
      <span class="token keyword">return</span> <span class="token function">success</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 失败，根据响应码判断失败原因:</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token function">fail</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// HTTP请求还在继续...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 发送请求:</span>
request<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/api/categories&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;请求已发送，请等待响应...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于低版本的 IE，需要换一个 ActiveXObject 对象:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">success</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> textarea <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-ie-response-text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  textarea<span class="token punctuation">.</span>value <span class="token operator">=</span> text<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">fail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> textarea <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-ie-response-text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  textarea<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Error code: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft.XMLHTTP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 新建Microsoft.XMLHTTP对象</span>

request<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 状态发生变化时，函数被回调</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 成功完成</span>
    <span class="token comment">// 判断响应结果:</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span>
      <span class="token comment">// 成功，通过responseText拿到响应的文本:</span>
      <span class="token keyword">return</span> <span class="token function">success</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 失败，根据响应码判断失败原因:</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token function">fail</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// HTTP请求还在继续...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 发送请求:</span>
request<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/api/categories&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;请求已发送，请等待响应...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您想把标准写法和 IE 写法混在一起，可以这么写:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> request<span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>XMLHttpRequest<span class="token punctuation">)</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft.XMLHTTP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>通过检测 <code>window</code> 对象是否有 <code>XMLHttpRequest</code> 属性来确定浏览器是否支持标准的 <code>XMLHttpRequest</code>。注意，不要根据浏览器的 <code>navigator.userAgent</code> 来检测浏览器是否支持某个 JavaScript 特性，一是因为这个字符串本身可以伪造，二是通过 IE 版本判断 JavaScript 特性将非常复杂。</p><p>当创建了 <code>XMLHttpRequest</code> 对象后，要先设置 <code>onreadystatechange</code> 的回调函数。在回调函数中，通常我们只需通过 <code>readyState === 4</code> 判断请求是否完成，如果已完成，再根据 <code>status === 200</code> 判断是否是一个成功的响应。</p><p><code>XMLHttpRequest</code> 对象的 <code>open()</code> 方法有 3 个参数，第一个参数指定是 GET 还是 POST，第二个参数指定 URL 地址，第三个参数指定是否使用异步，默认是 <code>true</code>，所以不用写。</p><div class="hint-container danger"><p class="hint-container-title">警告</p><p>千万不要把第三个参数指定为 <code>false</code>，否则浏览器将停止响应，直到 Ajax 请求完成。如果这个请求耗时 10 秒，那么 10 秒内您会发现浏览器处于“假死”状态。</p></div><p>最后调用 <code>send()</code> 方法才真正发送请求。GET 请求不需要参数，POST 请求需要把 body 部分以字符串或者 <code>FormData</code> 对象传进去。</p><h2 id="安全限制" tabindex="-1"><a class="header-anchor" href="#安全限制" aria-hidden="true">#</a> 安全限制</h2><p>上面代码的 URL 使用的是相对路径。如果您把它改为 <code>&#39;https://www.sina.com.cn/&#39;</code>，再运行，肯定报错。在 Chrome 的控制台里，还可以看到错误信息。</p><p>这是因为浏览器的同源策略导致的。默认情况下，JavaScript 在发送 Ajax 请求时，URL 的域名必须和当前页面完全一致。</p><p>完全一致的意思是，域名要相同 (www.example.com 和 example.com 不同)，协议要相同 (HTTP 和 HTTPS 不同)，端口号要相同(默认是 <code>:80</code> 端口，它和 <code>:8080</code> 就不同)。有的浏览器口子松一点，允许端口不同，大多数浏览器都会严格遵守这个限制。</p><p>那是不是用 JavaScript 无法请求外域(就是其他网站)的 URL 了呢? 方法还是有的，大概有这么几种:</p><p>一是通过 Flash 插件发送 HTTP 请求，这种方式可以绕过浏览器的安全限制，但必须安装 Flash，并且跟 Flash 交互。不过 Flash 用起来麻烦，而且现在用得也越来越少了。</p><p>二是通过在同源域名下架设一个代理服务器来转发，JavaScript 负责把请求发送到代理服务器 <code>/proxy?url=https://www.sina.com.cn</code></p><p>代理服务器再把结果返回，这样就遵守了浏览器的同源策略。这种方式麻烦之处在于需要服务器端额外做开发。</p><p>第三种方式称为 JSONP，它有个限制，只能用 GET 请求，并且要求返回 JavaScript。这种方式跨域实际上是利用了浏览器允许跨域引用 JavaScript 资源:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://example.com/abc.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>JSONP 通常以函数调用的形式返回，例如，返回 JavaScript 内容如下:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>这样一来，我们如果在页面中先准备好 <code>foo()</code> 函数，然后给页面动态加一个 <code>&lt;script&gt;</code> 节点，相当于动态读取外域的 JavaScript 资源，最后就等着接收回调了。</p><p>以 163 的股票查询 URL 为例，对于 <code>URL: https://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice</code>，您将得到如下返回:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">refreshPrice</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;0000001&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0000001&quot;</span><span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>因此我们需要首先在页面中准备好回调函数:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">refreshPrice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-jsonp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  p<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">当前价格: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">[</span><span class="token string">&quot;0000001&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">[</span><span class="token string">&quot;0000001&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>price<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">；</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">[</span><span class="token string">&quot;1399001&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">[</span><span class="token string">&quot;1399001&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>price<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>最后用 <code>getPrice()</code> 函数触发:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getPrice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> js <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> head <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;head&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  js<span class="token punctuation">.</span>src <span class="token operator">=</span>
    <span class="token string">&quot;https://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice&quot;</span><span class="token punctuation">;</span>
  head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>就完成了跨域加载数据。</p><h2 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h2><p>如果浏览器支持 HTML5，那么就可以一劳永逸地使用新的跨域策略: <strong>CORS</strong> 了。</p><p>CORS 全称 <code>Cross-Origin Resource Sharing</code>，是 HTML5 规范定义的如何跨域访问资源。</p><p>了解 CORS 前，我们先搞明白概念:</p><p><strong>Origin</strong> 表示本域，也就是浏览器当前页面的域。当 JavaScript 向外域 (如 sina.com) 发起请求后，浏览器收到响应后，首先检查 <code>Access-Control-Allow-Origin</code> 是否包含本域，如果是，则此次跨域请求成功，如果不是，则请求失败，JavaScript 将无法获取到响应的任何数据。</p><p>用一个图来表示就是:</p><p><img src="`+i+`" alt="js-cors" loading="lazy"></p><p>假设本域是 <code>my.com</code>，外域是 <code>sina.com</code>，只要响应头 <code>Access-Control-Allow-Origin</code> 为 <code>https://my.com</code>，或者是 <code>*</code>，本次请求就可以成功。</p><p>可见，跨域能否成功，取决于对方服务器是否愿意给您设置一个正确的 <code>Access-Control-Allow-Origin</code>，决定权始终在对方手中。</p><p>上面这种跨域请求，称之为“简单请求”。简单请求包括 <code>GET</code>、<code>HEAD</code> 和 <code>POST</code> ( POST 的 <code>Content-Type</code> 类型 仅限 <code>application/x-www-form-urlencoded、multipart/form-data和text/plain</code>)，并且不能出现任何自定义头(例如，X-Custom: 12345)，通常能满足 90% 的需求。</p><p>无论您是否需要用 JavaScript 通过 CORS 跨域请求资源，您都要了解 CORS 的原理。最新的浏览器全面支持 HTML5。在引用外域资源时，除了 JavaScript 和 CSS 外，都要验证 CORS。例如，当您引用了某个第三方 CDN 上的字体文件时:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* CSS */</span>
<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;FontAwesome&quot;</span><span class="token punctuation">;</span>
  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;https://cdn.com/fonts/fontawesome.ttf&quot;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;truetype&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>如果该 CDN 服务商未正确设置 <code>Access-Control-Allow-Origin</code>，那么浏览器无法加载字体资源。</p><p>对于 PUT、DELETE 以及其他类型如 <code>application/json</code> 的 POST 请求，在发送 Ajax 请求之前，浏览器会先发送一个 <code>OPTIONS</code> 请求(称为 preflighted 请求)到这个 URL 上，询问目标服务器是否接受:</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">OPTIONS</span> <span class="token request-target url">/path/to/resource</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">bar.com</span></span>
<span class="token header"><span class="token header-name keyword">Origin</span><span class="token punctuation">:</span> <span class="token header-value">https://my.com</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Request-Method</span><span class="token punctuation">:</span> <span class="token header-value">POST</span></span>
</code></pre></div><p>服务器必须响应并明确指出允许的 Method:</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Origin</span><span class="token punctuation">:</span> <span class="token header-value">https://my.com</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Methods</span><span class="token punctuation">:</span> <span class="token header-value">POST, GET, PUT, OPTIONS</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Max-Age</span><span class="token punctuation">:</span> <span class="token header-value">86400</span></span>
</code></pre></div><p>浏览器确认服务器响应的 <code>Access-Control-Allow-Methods</code> 头确实包含将要发送的 Ajax 请求的 Method，才会继续发送 AJAX，否则，抛出一个错误。</p><p>由于以 POST、PUT 方式传送 JSON 格式的数据在 REST 中很常见，所以要跨域正确处理 POST 和 PUT 请求，服务器端必须正确响应 OPTIONS 请求。</p>`,55),v={href:"https://www.w3.org/TR/cors/",target:"_blank",rel:"noopener noreferrer"};function m(g,b){const a=p("ExternalLinkIcon");return e(),o("div",null,[k,c(" more "),d,s("p",null,[n("需要深入了解 CORS 的童鞋请移步 "),s("a",v,[n("W3C 文档"),l(a)]),n("。")])])}const f=t(r,[["render",m],["__file","ajax.html.vue"]]);export{f as default};
