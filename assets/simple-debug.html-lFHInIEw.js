import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o,c as p,d as l,e as a,a as c,w as r,b as n}from"./app-S62fdHqc.js";const i={},u=n(`<p>这里是开发前应当了解的内容，阅读时长大约为五分钟。</p><h2 id="json-文件中合法的值有哪些" tabindex="-1"><a class="header-anchor" href="#json-文件中合法的值有哪些"><span>json 文件中合法的值有哪些</span></a></h2><p>合法的值大家编辑用到的一共有五种: <strong>number</strong>(数字)、<strong>boolean</strong>(布尔值)、<strong>string</strong>(字符串)、<strong>array</strong>(数组)和<strong>object</strong>(对象)。</p><h2 id="json-介绍" tabindex="-1"><a class="header-anchor" href="#json-介绍"><span>json 介绍</span></a></h2><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象"><span>对象</span></a></h3><p>对象的一组键值对，使用冒号结构表示。</p><div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">animal</span><span class="token punctuation">:</span> pets
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">animal</span><span class="token operator">:</span> <span class="token string">&quot;pets&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Yaml 也允许另一种写法，将所有键值对写成一个行内对象。</p><div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">hash</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Steve<span class="token punctuation">,</span> <span class="token key atrule">foo</span><span class="token punctuation">:</span> bar <span class="token punctuation">}</span>
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Steve&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h3><p>一组连词线开头的行，构成一个数组。</p><div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> Cat
<span class="token punctuation">-</span> Dog
<span class="token punctuation">-</span> Goldfish
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&quot;Cat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Dog&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Goldfish&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p>数据结构的子成员是一个数组，则可以在该项下面缩进一个空格。</p><div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token punctuation">-</span> Cat
  <span class="token punctuation">-</span> Dog
  <span class="token punctuation">-</span> Goldfish
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;Cat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Dog&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Goldfish&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p>数组也可以采用行内表示法。</p><div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">animal</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>Cat<span class="token punctuation">,</span> Dog<span class="token punctuation">]</span>
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">animal</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Cat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Dog&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="复合结构" tabindex="-1"><a class="header-anchor" href="#复合结构"><span>复合结构</span></a></h3><p>对象和数组可以结合使用，形成复合结构。</p><div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">languages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> Ruby
  <span class="token punctuation">-</span> Perl
  <span class="token punctuation">-</span> Python
<span class="token key atrule">websites</span><span class="token punctuation">:</span>
  <span class="token key atrule">YAML</span><span class="token punctuation">:</span> yaml.org
  <span class="token key atrule">Ruby</span><span class="token punctuation">:</span> ruby<span class="token punctuation">-</span>lang.org
  <span class="token key atrule">Python</span><span class="token punctuation">:</span> python.org
  <span class="token key atrule">Perl</span><span class="token punctuation">:</span> use.perl.org
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">{</span>
  <span class="token key atrule">languages</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Ruby&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Perl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Python&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">websites</span><span class="token punctuation">:</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">YAML</span><span class="token punctuation">:</span> <span class="token string">&quot;yaml.org&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">Ruby</span><span class="token punctuation">:</span> <span class="token string">&quot;ruby-lang.org&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">Python</span><span class="token punctuation">:</span> <span class="token string">&quot;python.org&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">Perl</span><span class="token punctuation">:</span> <span class="token string">&quot;use.perl.org&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="纯量" tabindex="-1"><a class="header-anchor" href="#纯量"><span>纯量</span></a></h3><p>纯量是最基本的、不可再分的值。以下数据类型都属于 JavaScript 的纯量。</p><ul><li>字符串</li><li>布尔值</li><li>整数</li><li>浮点数</li><li>Null</li><li>时间</li><li>日期</li></ul><p>数值直接以字面量的形式表示。</p><div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">12.30</span>
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">12.3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>布尔值用 <code>true</code> 和 <code>false</code> 表示。</p><div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">isSet</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">isSet</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="如何打开或编辑-json" tabindex="-1"><a class="header-anchor" href="#如何打开或编辑-json"><span>如何打开或编辑 json</span></a></h3>`,43),d=n(`<h3 id="json-中的值" tabindex="-1"><a class="header-anchor" href="#json-中的值"><span>json 中的值</span></a></h3><p>合法的值大家编辑用到的一共有五种:</p><ul><li><strong>number</strong>(数字)</li><li><strong>boolean</strong>(布尔值)</li><li><strong>string</strong>(字符串)</li><li><strong>array</strong>(数组)</li><li><strong>object</strong>(对象)</li></ul><h3 id="什么是number" tabindex="-1"><a class="header-anchor" href="#什么是number"><span>什么是<strong>number</strong></span></a></h3><p><strong>number</strong>是可以直接参与运算数值，整数和小数直接表示</p><p><strong>例</strong>:</p><ul><li><code>5201314</code></li><li><code>-1</code></li><li><code>3.141592654</code></li></ul><p><strong>总结:</strong> 想要表达具体的数量使用数字，直接表示即可。</p><h3 id="什么是boolean" tabindex="-1"><a class="header-anchor" href="#什么是boolean"><span>什么是<strong>boolean</strong></span></a></h3><p><strong>boolean</strong>是布尔值，表示真假。只有两个: <code>true</code> 和 <code>false</code>。</p><h3 id="什么是string" tabindex="-1"><a class="header-anchor" href="#什么是string"><span>什么是<strong>string</strong></span></a></h3><p><strong>string</strong>是字符串，用于表达一串文本。在文本内容外面套上英文双引号 <code>&quot;</code> 即可表示<strong>string</strong>。</p><p><strong>例</strong>:</p><ul><li><code>&quot;Mr.Hope is handsome&quot;</code></li><li><code>&quot;春眠不觉晓，处处闻啼鸟&quot;</code></li><li><code>&quot;A saying goes: \\&quot;Great hopes make great man.\\&quot;&quot;</code></li></ul><p><strong>请注意:</strong> <code>1</code> 是 <strong>number</strong>，可以参加运算；<code>&quot;1&quot;</code> 是<strong>string</strong>，字符串内容为 1；同理，<code>&quot;true&quot;</code> 是<strong>string</strong>，<code>true</code> 才是表示“真”的 <strong>boolean</strong>。</p><p><strong>其他注意事项:</strong> 如果想要在字符串中表示回车，请输入 <code>\\n</code>。</p><h3 id="什么是array" tabindex="-1"><a class="header-anchor" href="#什么是array"><span>什么是<strong>array</strong></span></a></h3><p>Array 中文名叫数组，它是用 <code>[</code> <code>]</code> 包括起来的、用英文逗号(comma)分隔开的内容的集合，每个项叫数组(array)的一个元素(element)。每个元素(element)可以是其他的任何值类型。</p><p><strong>例</strong>:</p><ul><li><code>[1, 2, 3]</code></li><li><code>[-5, &quot;abc&quot;, true]</code> (在此数组中第一项是数字 <code>-5</code>，第二项是字符串 <code>&quot;abc&quot;</code>，第三项是布尔值 <code>true</code>，该数组是合法的，数组的元素也可以是接下来的 object)</li><li><code>[&quot;小程序必火&quot;, &quot;666&quot;, &quot;Mr.Hope有点帅&quot;]</code></li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li><code>[1,2,3,]</code> 是非法的，因为最后多了一个逗号导致格式不正确</li><li><code>[1,2,3</code> 也是非法的，因为没有结束标识符 <code>]</code> 导致格式不正确</li></ul></div><p><strong>总结</strong>:</p><p><strong>array</strong> 是一个包含若干 <strong>元素</strong> 的集合，用 <code>[</code> <code>]</code> 表示，每一个 <strong>元素</strong> 之间需要用 <strong>英文逗号</strong> 隔开，即 <code>array = [element1 , element2 , ...]</code>，其中<strong>元素</strong>可以是其他数据类型。</p><h3 id="什么是object" tabindex="-1"><a class="header-anchor" href="#什么是object"><span>什么是<strong>object</strong></span></a></h3><p><strong>object</strong> 中文名叫对象(不是您想的那个对象)，它是用 <code>{</code> <code>}</code> 包括起来的用逗号分隔开的一堆属性(property)的集合，每个属性(property)是一个不可重复的字符串，对应着一个值(value)，用冒号对应。该值(value)可以是任何内容。</p><p><strong>例</strong>:</p><ul><li><p><code>{&quot;a&quot;:1,&quot;b&quot;:&quot;2&quot;,&quot;c&quot;:true,&quot;d&quot;:&quot;false&quot;}</code></p><p>该对象有四项，分别是:</p><ul><li>值为数字 <code>1</code> 的 <code>a</code></li><li>值为字符串 <code>2</code> 的 <code>b</code></li><li>值为布尔值 真(<code>true</code>)的 <code>c</code></li><li>值为字符串 <code>false</code> 的 <code>d</code></li></ul></li><li><p><code>{&quot;tag&quot;:&quot;p&quot;,&quot;head&quot;:&quot;校园卡说明&quot;,&quot;text&quot;:&quot;校园卡是东师的金融消费卡&quot;}</code>。</p></li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li><code>{a:1,b:2}</code> 是非法的，因为属性不是一个字符串</li><li><code>{&quot;a&quot;:1,&quot;a&quot;:2}</code> 是非法的，因为属性 <code>a</code> 出现了两次无法确定其值</li><li><code>{a:1,b:2,}</code>、<code>a:1,b:2}</code> 是非法的，因为格式不正确。</li></ul></div><p><strong>总结</strong>:</p><p><strong>object</strong>是一个拥有若干<strong>property</strong>的集合，用 <code>{</code> <code>}</code> 表示，每一个<strong>property</strong>都是不可重复的<strong>string</strong>，而每个<strong>property</strong>对应着一个<strong>value</strong>即 <code>object = { property1 : value1 , proprety2 : value2 , ... }</code>，其中<strong>value</strong>可以是其他数据类型。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>使用 VS Code 可以格式化<strong>object</strong>，可以使<strong>object</strong>更易于阅读。</p><p>如:</p><p><code>{&quot;tag&quot;:&quot;p&quot;,&quot;head&quot;:&quot;校园卡说明&quot;,&quot;text&quot;:&quot;校园卡是东师的金融消费卡&quot;}</code></p><p>可以格式化为:</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;heading&quot;</span><span class="token operator">:</span> <span class="token string">&quot;校园卡说明&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;校园卡是东师的金融消费卡&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div></div><h3 id="关于值的嵌套" tabindex="-1"><a class="header-anchor" href="#关于值的嵌套"><span>关于值的嵌套</span></a></h3><p>由于<strong>array</strong>的<strong>element</strong>和 <strong>object</strong> 的<strong>value</strong>可以是五种值的任一个，故可以发生嵌套。</p><p><strong>如</strong>:</p><p><code>[{&quot;a&quot;:&quot;Mr.Hope&quot;},{&quot;b&quot;:&quot;Ms.Hope&quot;}]</code></p><p>就是一个数组: <code>[ element1 , element2 ]</code>，而该数组的<strong>element1</strong>是<strong>object</strong><code>{ &quot;a&quot; : &quot;Mr.Hope&quot; }</code>，<strong>element2</strong>是<strong>object</strong><code>{ &quot;b&quot; : &quot;Ms.Hope&quot; }</code></p>`,36);function g(k,m){const s=e("RouteLink");return o(),p("div",null,[u,l("p",null,[a("推荐使用 VS Code，具体详见"),c(s,{to:"/software/vscode/simple.html"},{default:r(()=>[a("VS Code 简单介绍")]),_:1}),a("。")]),d])}const q=t(i,[["render",g],["__file","simple-debug.html.vue"]]),v=JSON.parse('{"path":"/code/mini-app/framework/simple-debug.html","title":"小程序简易开发指南","lang":"zh-CN","frontmatter":{"date":"2020-10-09T00:00:00.000Z","title":"小程序简易开发指南","icon":"creative","category":"小程序","description":"这里是开发前应当了解的内容，阅读时长大约为五分钟。 json 文件中合法的值有哪些 合法的值大家编辑用到的一共有五种: number(数字)、boolean(布尔值)、string(字符串)、array(数组)和object(对象)。 json 介绍 对象 对象的一组键值对，使用冒号结构表示。 转为 JavaScript 如下。 Yaml 也允许另一种...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/framework/simple-debug.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"小程序简易开发指南"}],["meta",{"property":"og:description","content":"这里是开发前应当了解的内容，阅读时长大约为五分钟。 json 文件中合法的值有哪些 合法的值大家编辑用到的一共有五种: number(数字)、boolean(布尔值)、string(字符串)、array(数组)和object(对象)。 json 介绍 对象 对象的一组键值对，使用冒号结构表示。 转为 JavaScript 如下。 Yaml 也允许另一种..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-10-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"小程序简易开发指南\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-10-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"json 文件中合法的值有哪些","slug":"json-文件中合法的值有哪些","link":"#json-文件中合法的值有哪些","children":[]},{"level":2,"title":"json 介绍","slug":"json-介绍","link":"#json-介绍","children":[{"level":3,"title":"对象","slug":"对象","link":"#对象","children":[]},{"level":3,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":3,"title":"复合结构","slug":"复合结构","link":"#复合结构","children":[]},{"level":3,"title":"纯量","slug":"纯量","link":"#纯量","children":[]},{"level":3,"title":"如何打开或编辑 json","slug":"如何打开或编辑-json","link":"#如何打开或编辑-json","children":[]},{"level":3,"title":"json 中的值","slug":"json-中的值","link":"#json-中的值","children":[]},{"level":3,"title":"什么是number","slug":"什么是number","link":"#什么是number","children":[]},{"level":3,"title":"什么是boolean","slug":"什么是boolean","link":"#什么是boolean","children":[]},{"level":3,"title":"什么是string","slug":"什么是string","link":"#什么是string","children":[]},{"level":3,"title":"什么是array","slug":"什么是array","link":"#什么是array","children":[]},{"level":3,"title":"什么是object","slug":"什么是object","link":"#什么是object","children":[]},{"level":3,"title":"关于值的嵌套","slug":"关于值的嵌套","link":"#关于值的嵌套","children":[]}]}],"git":{"createdTime":1604856934000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":6},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":4.27,"words":1280},"filePathRelative":"code/mini-app/framework/simple-debug.md","localizedDate":"2020年10月9日","excerpt":"","autoDesc":true}');export{q as comp,v as data};
