import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,d as n,e as s,a as t,f as i,b as e}from"./app-S62fdHqc.js";const u={},r=n("p",null,"模块化的思路是将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。",-1),d=n("p",null,[s("模块只有通过 "),n("code",null,"module.exports"),s(" 或者 "),n("code",null,"exports"),s(" 才能对外暴露接口。")],-1),k=e(`<div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li><code>exports</code> 是 <code>module.exports</code> 的一个引用，因此在模块里边随意更改 <code>exports</code> 的指向会造成未知的错误。所以更推荐开发者采用 <code>module.exports</code> 来暴露模块接口，除非您已经清晰知道这两者的关系。</li><li>小程序目前不支持直接引入 <code>node_modules</code> , 开发者需要使用到 <code>node_modules</code> 时候建议拷贝出相关的代码到小程序的目录中，或者使用小程序支持的 npm 功能。</li></ul></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// common.js</span>
<span class="token keyword">const</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> !</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">sayGoodbye</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Goodbye </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> !</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>sayHello <span class="token operator">=</span> sayHello<span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>sayGoodbye <span class="token operator">=</span> sayGoodbye<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 在需要使用这些模块的文件中，使用 <code>require</code> 将公共代码引入</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> common <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;common.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">helloMINA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    common<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token string">&quot;MINA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">goodbyeMINA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    common<span class="token punctuation">.</span><span class="token function">sayGoodbye</span><span class="token punctuation">(</span><span class="token string">&quot;MINA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),m={id:"文件作用域",tabindex:"-1"},v={class:"header-anchor",href:"#文件作用域"},b=e(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>在 JavaScript 文件中声明的变量和函数只在该文件中有效；不同的文件中可以声明相同名字的变量和函数，不会互相影响。</p></div><p>通过全局函数 <code>getApp</code> 可以获取全局的应用实例，如果需要全局的数据可以在 <code>App()</code> 中设置，如:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// app.js</span>
<span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">globalData</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// a.js</span>
<span class="token comment">// The localValue can only be used in file a.js.</span>
<span class="token keyword">let</span> localValue <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// Get the app instance.</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Get the global data and change it.</span>
app<span class="token punctuation">.</span>globalData<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token comment">// b.js</span>
<span class="token comment">// You can redefine localValue in file b.js, without interference with the localValue in a.js.</span>
<span class="token keyword">let</span> localValue <span class="token operator">=</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// If a.js it run before b.js, now the globalData shoule be 2.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>globalData<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h2><h3 id="object-module" tabindex="-1"><a class="header-anchor" href="#object-module"><span>Object module</span></a></h3><p>当前模块对象</p><p>属性</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>exports</td><td>Object</td><td>模块向外暴露的对象，使用 require 引用该模块时可以获取</td></tr></tbody></table><h3 id="object-exports" tabindex="-1"><a class="header-anchor" href="#object-exports"><span>Object exports</span></a></h3><p>module.exports 的引用</p><h3 id="any-require-string-path" tabindex="-1"><a class="header-anchor" href="#any-require-string-path"><span>any require(string path)</span></a></h3><p>引入模块。返回模块通过 <code>module.exports</code> 或 <code>exports</code> 暴露的接口。</p><p>参数</p><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>path</td><td>string</td><td>需要引入模块文件相对于当前文件的相对路径，或 npm 模块名，或 npm 模块路径。不支持绝对路径</td></tr></tbody></table><p>示例代码</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// common.js</span>
<span class="token keyword">const</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> !</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">sayGoodbye</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Goodbye </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> !</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>sayHello <span class="token operator">=</span> sayHello<span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>sayGoodbye <span class="token operator">=</span> sayGoodbye<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> common <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;common.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">helloMINA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    common<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token string">&quot;MINA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">goodbyeMINA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    common<span class="token punctuation">.</span><span class="token function">sayGoodbye</span><span class="token punctuation">(</span><span class="token string">&quot;MINA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function h(g,y){const a=o("Badge");return c(),l("div",null,[n("p",null,[s("此部分是高效复用小程序代码的方式。"),t(a,{text:"重要",type:"error"})]),r,d,i(" more "),k,n("h2",m,[n("a",v,[n("span",null,[s("文件作用域 "),t(a,{text:"务必理解",type:"error"})])])]),b])}const j=p(u,[["render",h],["__file","module.html.vue"]]),_=JSON.parse('{"path":"/code/mini-app/guide/service/module.html","title":"模块化","lang":"zh-CN","frontmatter":{"date":"2020-10-09T00:00:00.000Z","title":"模块化","icon":"module","category":"小程序","description":"此部分是高效复用小程序代码的方式。 模块化的思路是将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。 模块只有通过 module.exports 或者 exports 才能对外暴露接口。 注意 exports 是 module.exports 的一个引用，因此在模块里边随意更改 exports 的指向会造成未知的错误。所以更推荐开发者采用 ...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/guide/service/module.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"模块化"}],["meta",{"property":"og:description","content":"此部分是高效复用小程序代码的方式。 模块化的思路是将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。 模块只有通过 module.exports 或者 exports 才能对外暴露接口。 注意 exports 是 module.exports 的一个引用，因此在模块里边随意更改 exports 的指向会造成未知的错误。所以更推荐开发者采用 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-10-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"模块化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-10-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"文件作用域","slug":"文件作用域","link":"#文件作用域","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Object module","slug":"object-module","link":"#object-module","children":[]},{"level":3,"title":"Object exports","slug":"object-exports","link":"#object-exports","children":[]},{"level":3,"title":"any require(string path)","slug":"any-require-string-path","link":"#any-require-string-path","children":[]}]}],"git":{"createdTime":1604856934000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.95,"words":586},"filePathRelative":"code/mini-app/guide/service/module.md","localizedDate":"2020年10月9日","excerpt":"<p>此部分是高效复用小程序代码的方式。</p>\\n<p>模块化的思路是将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。</p>\\n<p>模块只有通过 <code>module.exports</code> 或者 <code>exports</code> 才能对外暴露接口。</p>\\n","autoDesc":true}');export{j as comp,_ as data};
