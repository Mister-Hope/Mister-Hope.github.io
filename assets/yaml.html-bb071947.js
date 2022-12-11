import{ac as n,F as e,G as s,K as o,ae as a}from"./framework-729f259c.js";const t={},c=a(`<p>YAML 是专门用来写配置文件的语言，非常简洁和强大。</p><h2 id="yaml-介绍" tabindex="-1"><a class="header-anchor" href="#yaml-介绍" aria-hidden="true">#</a> yaml 介绍</h2><p>YAML 语言(发音 /ˈjæməl/ )的设计目标，就是方便人类读写。</p><p>它的基本语法规则如下。</p><ul><li>大小写敏感</li><li>使用缩进表示层级关系</li><li>缩进时不允许使用 Tab 键，只允许使用空格。</li><li>缩进的空格数目不重要，只要相同层级的元素左侧对齐即可</li></ul><h2 id="yaml-中的值" tabindex="-1"><a class="header-anchor" href="#yaml-中的值" aria-hidden="true">#</a> yaml 中的值</h2><p>在编写小程序页面时，用到的值类型一共有五种:</p><ul><li><strong>string</strong>(字符串)</li><li><strong>number</strong>(数字)</li><li><strong>boolean</strong>(布尔值)</li><li><strong>array</strong>(数组)</li><li><strong>object</strong>(对象)</li></ul><h2 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> number</h2><p><strong>number</strong>，译为数字，代表可直接参与运算的数值。在 YAML 中，整数和小数均直接表示。</p><p><strong>例</strong>:</p><ul><li><code>5201314</code></li><li><code>-1</code></li><li><code>3.141592654</code></li></ul><div class="custom-container tip"><p class="custom-container-title">总结</p><p>遇到 <code>number</code> 类型的数据时，直接填入数字即可。</p></div><h2 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> boolean</h2><p><strong>boolean</strong>，译为布尔值，表示真假。只有两个可选值: <code>true</code> 和 <code>false</code>。</p><div class="custom-container tip"><p class="custom-container-title">总结</p><p>遇到 <code>boolean</code> 类型的数据时，直接填入 <code>true</code> 或 <code>false</code> 即可。</p></div><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h2><p><strong>string</strong>，译为字符串，用于表达文本。在 YAML 中，不与其他规则相冲突的字符串可直接表示。</p><p><strong>例</strong>:</p><ul><li><code>in东师，最全新生攻略</code></li></ul><h3 id="规则" tabindex="-1"><a class="header-anchor" href="#规则" aria-hidden="true">#</a> 规则</h3><p>由于字符串的内容是多样化的，如果字符串出现了 YAML 约定的格式或特殊字符，则需要使用引号引起。引起时两侧保持一致，单引号、双引号均可。</p><ul><li><p>特殊字符可使用转义符号表示，如回车可表示为 <code>\\n</code>，制表符 (Tab) 可表示为 <code>\\t</code></p><p>特别地，对于 <code>\\</code> 自己，需要表示为 <code>\\\\</code></p><p><strong>例</strong>:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>春眠不觉晓，
处处闻啼鸟。
</code></pre></div><p>可表示为</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>&quot;春眠不觉晓，\\n处处闻啼鸟。&quot;
</code></pre></div><!-- markdownlint-disable MD038 --></li><li><p>如果字符串含有特殊格式 (如对象键值对格式&quot;: &quot;、首位有空格、首尾有引号) 或命中了关键字如 <code>true</code>，需要放在双引号之中。</p><p>特别地，如果字符串两端或引起的内容内含有双引号，需要改用单引号，或在使用双引号的情况下将内部的双引号使用 <code>\\</code> 转义为 <code>\\&quot;</code>。</p><p><strong>例</strong>:</p><ul><li>关键字:</li></ul><p><code>3</code> 字符串需表达为 <code>&quot;3&quot;</code>，<code>true</code> 字符串需表达为 <code>&quot;true&quot;</code></p><ul><li><div class="language-text" data-ext="text"><pre class="language-text"><code> 前面有空格
</code></pre></div><p>需表示为</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>&quot; 前面有空格&quot;
</code></pre></div></li><li><p><code>注: 这很简单</code> 因命中对象键值对表示方法，需用表示为</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>&quot;注<span class="token punctuation">:</span> 这很简单&quot;
</code></pre></div></li><li><p><code>A saying goes: &quot;Great hopes make great man.&quot;</code> 因末尾出现双引号可使用单引号引起</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>&#39;A saying goes<span class="token punctuation">:</span> &quot;Great hopes make great man.&quot;&#39;
</code></pre></div></li></ul></li></ul>`,23),l=a(`<ul><li><p>如果字符串有多行，可以以 <code>|-</code> 开头，并另起一行开始正常换行书写，无需再包含双引号。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">|</span><span class="token punctuation">-</span>
这是一段文字。
这是新一段文字。
 1. 序号1，标号前有空格
 2. 序号2，标号前有空格
</code></pre></div></li></ul><div class="custom-container warning"><p class="custom-container-title">常见混淆点</p><ul><li><p><code>1</code> 是可以参加运算的数字；<code>&quot;1&quot;</code> 是表示内容的字符串；同理，<code>&quot;true&quot;</code> 表达 true 文本，而 <code>true</code> 是表示“真”的布尔值。</p></li><li><p>如果想要在字符串中表示回车，请输入 <code>\\n</code> 并使用引号引起字符串，或使用 <code>|-</code> 开头多行表示。</p></li></ul></div><h2 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> array</h2><p>Array 译为数组，它是一个内容的集合，每个数组的每一项叫一个元素(element)。每个元素(element)可以是其他的任何值类型。</p><p>一组连词线开头的行，构成一个数组。</p><p><strong>例</strong>:</p><ul><li><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> Cat
<span class="token punctuation">-</span> Dog
<span class="token punctuation">-</span> Goldfish
</code></pre></div></li><li><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token number">-5</span>
<span class="token punctuation">-</span> abc
<span class="token punctuation">-</span> <span class="token boolean important">true</span>
</code></pre></div><p>在此数组中第一项是数字 <code>-5</code>，第二项是字符串 <code>&quot;abc&quot;</code>，第三项是布尔值 <code>true</code>。</p><p>数组的元素也可以是接下来的 object，会在“嵌套”一节中演示。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">总结</p><p><strong>array</strong> 是一个包含若干 <strong>元素</strong> 的集合，其中<strong>元素</strong>可以是其他数据类型。</p></div><h2 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> object</h2><p><strong>object</strong> 译为对象(不是您想的那个对象)，它是一组“键-值”对集合。每个键(key)对应着一个值(value)，用冒号对应:</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">键1</span><span class="token punctuation">:</span> 值1
<span class="token key atrule">键2</span><span class="token punctuation">:</span> 值2
</code></pre></div><p>其中，键需要为有效的字符串，值可以是任何内容。</p><p><strong>例</strong>:</p><ul><li><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">a</span><span class="token punctuation">:</span> <span class="token number">1</span>
<span class="token key atrule">b</span><span class="token punctuation">:</span> <span class="token string">&quot;2&quot;</span>
<span class="token key atrule">c</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">d</span><span class="token punctuation">:</span> <span class="token string">&quot;false&quot;</span>
</code></pre></div><p>该对象有四项，分别是:</p><ul><li>值为数字 <code>1</code> 的 <code>a</code></li><li>值为字符串 <code>2</code> 的 <code>b</code></li><li>值为布尔值 真(<code>true</code>)的 <code>c</code></li><li>值为字符串 <code>false</code> 的 <code>d</code></li></ul></li><li><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">tag</span><span class="token punctuation">:</span> text
<span class="token key atrule">heading</span><span class="token punctuation">:</span> 校园卡说明
<span class="token key atrule">text</span><span class="token punctuation">:</span> 校园卡是东师的金融消费卡
</code></pre></div></li></ul><div class="custom-container tip"><p class="custom-container-title">总结</p><p><strong>object</strong>是一个拥有若干键值对的集合，其中值可以是其他数据类型。</p></div><h3 id="关于值的嵌套" tabindex="-1"><a class="header-anchor" href="#关于值的嵌套" aria-hidden="true">#</a> 关于值的嵌套</h3><p>由于 <strong>array</strong> 的元素和 <strong>object</strong> 的键值对中的值可以是五种值的任一个，故可以发生嵌套。</p><p>前文提到“YAML 使用缩进表示层级关系”。如果您想进行嵌套，为了表示从属关系，作为数组元素或对象键值的其他对象或数组，应进行缩进。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>需要特别注意，对象的每个键值对、数组的每个元素必须有相同的缩进，通常为两个空格。</p></div><p><strong>如</strong>:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">animal</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> dog
  <span class="token punctuation">-</span> cat
  <span class="token punctuation">-</span> fish

<span class="token key atrule">personal-info</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Mr.Hope
  <span class="token key atrule">gender</span><span class="token punctuation">:</span> male
  <span class="token key atrule">address</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">province</span><span class="token punctuation">:</span> Liao Ning
      <span class="token key atrule">city</span><span class="token punctuation">:</span> AnShan
    <span class="token punctuation">-</span> <span class="token key atrule">province</span><span class="token punctuation">:</span> Ji Lin
      <span class="token key atrule">city</span><span class="token punctuation">:</span> Changchun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就是一个对象，它有两个键 <code>animal</code> 和 <code>personal-info</code>，<code>animal</code> 键对应的值是一个数组，包含三个字符串 <code>dog</code>、<code>cat</code> 和 <code>fish</code>，而 <code>personal-info</code> 的值又是对象。该对象的 <code>address</code> 的值还是一个数组，数组的每个元素又是对象。</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>除了配置文件外，可以通过添加注释的方式添加说明文字。</p><p>YAML 中用<code>#</code> 表示注释，从这个字符一直到行尾，都会被解析器忽略。</p><p>如:</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 这一行会被忽略</span>
这一行会被当成一个字符串
</code></pre></div>`,27);function p(d,i){return e(),s("div",null,[c,o(" markdownlint-enable MD038 "),l])}const u=n(t,[["render",p],["__file","yaml.html.vue"]]);export{u as default};
