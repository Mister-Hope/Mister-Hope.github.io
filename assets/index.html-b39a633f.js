import{_ as p,X as t,Y as e,$ as o,a0 as a,Z as c,a2 as l,a3 as n,C as u}from"./framework-a91f7991.js";const i={},r=n('<p>编程免不了要写配置文件，怎么写配置也是一门学问。</p><p>YAML 是专门用来写配置文件的语言，非常简洁和强大。</p><h2 id="yaml-介绍" tabindex="-1"><a class="header-anchor" href="#yaml-介绍" aria-hidden="true">#</a> yaml 介绍</h2><p>YAML 语言(发音 /ˈjæməl/ )的设计目标，就是方便人类读写。它实质上是一种通用的数据串行化格式。</p><p>YAML 的全称是 YAML Ain’t Markup Language。</p><p>它的基本语法规则如下。</p><ul><li>大小写敏感</li><li>使用缩进表示层级关系</li><li>缩进时不允许使用 Tab 键，只允许使用空格。</li><li>缩进的空格数目不重要，只要相同层级的元素左侧对齐即可</li></ul><p><code>#</code> 表示注释，从这个字符一直到行尾，都会被解析器忽略。</p><p>YAML 支持的数据结构有三种。</p><ul><li>对象: 键值对的集合，又称为映射(mapping)/ 哈希(hashes) / 字典(dictionary)</li><li>数组: 一组按次序排列的值，又称为序列(sequence) / 列表(list)</li><li>纯量(scalars): 单个的、不可再分的值</li></ul><h2 id="如何打开或编辑-yaml" tabindex="-1"><a class="header-anchor" href="#如何打开或编辑-yaml" aria-hidden="true">#</a> 如何打开或编辑 yaml</h2>',11),k=n(`<h2 id="数据结构介绍" tabindex="-1"><a class="header-anchor" href="#数据结构介绍" aria-hidden="true">#</a> 数据结构介绍</h2><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3><p>对象的一组键值对，使用冒号结构表示。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">animal</span><span class="token punctuation">:</span> pets
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">animal</span><span class="token operator">:</span> <span class="token string">&quot;pets&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Yaml 也允许另一种写法，将所有键值对写成一个行内对象。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">hash</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Steve<span class="token punctuation">,</span> <span class="token key atrule">foo</span><span class="token punctuation">:</span> bar <span class="token punctuation">}</span>
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Steve&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><p>一组连词线开头的行，构成一个数组。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> Cat
<span class="token punctuation">-</span> Dog
<span class="token punctuation">-</span> Goldfish
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&quot;Cat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Dog&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Goldfish&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p>数据结构的子成员是一个数组，则可以在该项下面缩进一个空格。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token punctuation">-</span> Cat
  <span class="token punctuation">-</span> Dog
  <span class="token punctuation">-</span> Goldfish
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;Cat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Dog&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Goldfish&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p>数组也可以采用行内表示法。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">animal</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>Cat<span class="token punctuation">,</span> Dog<span class="token punctuation">]</span>
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">animal</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Cat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Dog&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="复合结构" tabindex="-1"><a class="header-anchor" href="#复合结构" aria-hidden="true">#</a> 复合结构</h3><p>对象和数组可以结合使用，形成复合结构。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">languages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> Ruby
  <span class="token punctuation">-</span> Perl
  <span class="token punctuation">-</span> Python

<span class="token key atrule">websites</span><span class="token punctuation">:</span>
  <span class="token key atrule">YAML</span><span class="token punctuation">:</span> yaml.org
  <span class="token key atrule">Ruby</span><span class="token punctuation">:</span> ruby<span class="token punctuation">-</span>lang.org
  <span class="token key atrule">Python</span><span class="token punctuation">:</span> python.org
  <span class="token key atrule">Perl</span><span class="token punctuation">:</span> use.perl.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转为 JavaScript 如下。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">{</span>
  <span class="token key atrule">languages</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Ruby&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Perl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Python&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">websites</span><span class="token punctuation">:</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">YAML</span><span class="token punctuation">:</span> <span class="token string">&quot;yaml.org&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">Ruby</span><span class="token punctuation">:</span> <span class="token string">&quot;ruby-lang.org&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">Python</span><span class="token punctuation">:</span> <span class="token string">&quot;python.org&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">Perl</span><span class="token punctuation">:</span> <span class="token string">&quot;use.perl.org&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="纯量" tabindex="-1"><a class="header-anchor" href="#纯量" aria-hidden="true">#</a> 纯量</h3><p>纯量是最基本的、不可再分的值。以下数据类型都属于 JavaScript 的纯量。</p><ul><li>字符串</li><li>布尔值</li><li>整数</li><li>浮点数</li><li>Null</li><li>时间</li><li>日期</li></ul><p>数值直接以字面量的形式表示。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">12.30</span>
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">12.3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>布尔值用 <code>true</code> 和 <code>false</code> 表示。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">isSet</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">isSet</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>null</code> 用 <code>~</code> 表示。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">parent</span><span class="token punctuation">:</span> <span class="token null important">~</span>
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>时间采用 ISO8601 格式。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">iso8601</span><span class="token punctuation">:</span> <span class="token datetime number">2001-12-14t21:59:43.10-05:00</span>
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">iso8601</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&quot;2001-12-14t21:59:43.10-05:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>日期采用复合 iso8601 格式的年、月、日表示。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">1976-07-31</span>
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&quot;1976-07-31&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>YAML 允许使用两个感叹号，强制转换数据类型。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">e</span><span class="token punctuation">:</span> <span class="token tag">!!str</span> <span class="token number">123</span>
<span class="token key atrule">f</span><span class="token punctuation">:</span> <span class="token tag">!!str</span> <span class="token boolean important">true</span>
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">f</span><span class="token operator">:</span> <span class="token string">&#39;true&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3><p>字符串是最常见，也是最复杂的一种数据类型。</p><p>字符串默认不使用引号表示。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">str</span><span class="token punctuation">:</span> 这是一行字符串
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">str</span><span class="token operator">:</span> <span class="token string">&quot;这是一行字符串&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>如果字符串之中包含空格或特殊字符，需要放在引号之中。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">str</span><span class="token punctuation">:</span> <span class="token string">&quot;内容: 字符串&quot;</span>
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">str</span><span class="token operator">:</span> <span class="token string">&quot;内容: 字符串&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>单引号和双引号都可以使用，双引号不会对特殊字符转义。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">s1</span><span class="token punctuation">:</span> <span class="token string">&#39;内容\\n字符串&#39;</span>
<span class="token key atrule">s2</span><span class="token punctuation">:</span> <span class="token string">&quot;内容\\n字符串&quot;</span>
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">s1</span><span class="token operator">:</span> <span class="token string">&#39;内容\\\\n字符串&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">s2</span><span class="token operator">:</span> <span class="token string">&#39;内容\\n字符串&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><p>单引号之中如果还有单引号，必须连续使用两个单引号转义。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">str</span><span class="token punctuation">:</span> <span class="token string">&quot;labor&#39;s day&quot;</span>
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">str</span><span class="token operator">:</span> <span class="token string">&quot;labor&#39;s day&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>字符串可以写成多行，从第二行开始，必须有一个单空格缩进。换行符会被转为空格。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">str</span><span class="token punctuation">:</span> 这是一段
  多行
  字符串
</code></pre></div><p>转为 JavaScript 如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">str</span><span class="token operator">:</span> <span class="token string">&quot;这是一段 多行 字符串&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>多行字符串可以使用 <code>|</code> 保留换行符，也可以使用 <code>&gt;</code> 折叠换行。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">this</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
  Foo
  Bar</span>
<span class="token key atrule">that</span><span class="token punctuation">:</span> <span class="token punctuation">&gt;</span><span class="token scalar string">
  Foo
  Bar</span>
</code></pre></div><p>转为 JavaScript 代码如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token operator">:</span> <span class="token string">&#39;Foo\\nBar\\n&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">that</span><span class="token operator">:</span> <span class="token string">&#39;Foo Bar\\n&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><p><code>+</code> 表示保留文字块末尾的换行，<code>-</code> 表示删除字符串末尾的换行。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">s1</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
  Foo</span>

<span class="token key atrule">s2</span><span class="token punctuation">:</span> <span class="token punctuation">|</span>+
  Foo

<span class="token key atrule">s3</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
  Foo
</code></pre></div><p>转为 JavaScript 代码如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">s1</span><span class="token operator">:</span> <span class="token string">&#39;Foo\\n&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">s2</span><span class="token operator">:</span> <span class="token string">&#39;Foo\\n\\n\\n&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">s3</span><span class="token operator">:</span> <span class="token string">&#39;Foo&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><p>锚点 <code>&amp;</code> 和别名 <code>*</code>，可以用来引用。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">defaults</span><span class="token punctuation">:</span> <span class="token important">&amp;defaults</span>
  <span class="token key atrule">adapter</span><span class="token punctuation">:</span> postgres
  <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost

<span class="token key atrule">development</span><span class="token punctuation">:</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span> myapp_development
  <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*defaults</span>

<span class="token key atrule">test</span><span class="token punctuation">:</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span> myapp_test
  <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*defaults</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等同于下面的代码。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">defaults</span><span class="token punctuation">:</span>
  <span class="token key atrule">adapter</span><span class="token punctuation">:</span> postgres
  <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost

<span class="token key atrule">development</span><span class="token punctuation">:</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span> myapp_development
  <span class="token key atrule">adapter</span><span class="token punctuation">:</span> postgres
  <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost

<span class="token key atrule">test</span><span class="token punctuation">:</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span> myapp_test
  <span class="token key atrule">adapter</span><span class="token punctuation">:</span> postgres
  <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&amp;</code> 用来建立锚点(defaults)，<code>&lt;&lt;</code> 表示合并到当前数据，<code>*</code> 用来引用锚点。</p><p>下面是另一个例子。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token important">&amp;showell</span> Steve
<span class="token punctuation">-</span> Clark
<span class="token punctuation">-</span> Brian
<span class="token punctuation">-</span> Oren
<span class="token punctuation">-</span> <span class="token important">*showell</span>
</code></pre></div><p>转为 JavaScript 代码如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&quot;Steve&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Clark&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Brian&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Oren&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Steve&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="函数和正则表达式的转换" tabindex="-1"><a class="header-anchor" href="#函数和正则表达式的转换" aria-hidden="true">#</a> 函数和正则表达式的转换</h2><p>这是 JS-YAML 库特有的功能，可以把函数和正则表达式转为字符串。(官方 yaml 标准里不包含这个部分)</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># example.yml</span>

<span class="token key atrule">fn</span><span class="token punctuation">:</span> function () <span class="token punctuation">{</span> return 1 <span class="token punctuation">}</span>
<span class="token key atrule">reg</span><span class="token punctuation">:</span> /test/
</code></pre></div><p>解析上面的 yml 文件的代码如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> yaml <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;js-yaml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> doc <span class="token operator">=</span> yaml<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;./example.yml&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>从 JavaScript 对象还原到 yaml 文件的代码如下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> yaml <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;js-yaml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">reg</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">test</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;./example.yml&quot;</span><span class="token punctuation">,</span> yaml<span class="token punctuation">.</span><span class="token function">dump</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,102);function d(v,g){const s=u("RouterLink");return t(),e("div",null,[r,o("p",null,[a("推荐使用 VS Code，具体详见"),c(s,{to:"/software/vscode/simple.html"},{default:l(()=>[a("VS Code 简单介绍")]),_:1}),a("。")]),k])}const m=p(i,[["render",d],["__file","index.html.vue"]]);export{m as default};
