"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[21402],{82634:(n,s,a)=>{a.r(s),a.d(s,{default:()=>c});var e=a(71534);const t=(0,e._)("p",null,[(0,e._)("code",null,"dict"),(0,e.Uk)(" 和 "),(0,e._)("code",null,"set"),(0,e.Uk)(" 是 Python 中常用的数据结构。")],-1),p=(0,e.uE)('<h2 id="dict" tabindex="-1"><a class="header-anchor" href="#dict" aria-hidden="true">#</a> dict</h2><p>Python 内置了字典 dict 的支持，dict 全称 dictionary，在其他语言中也称为 map，使用 <code>键-值</code> (key-value)存储，具有极快的查找速度。</p><p>举个例子，假设要根据同学的名字查找对应的成绩，如果用 list 实现，需要两个 list:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>\nscores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">95</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>给定一个名字，要查找对应的成绩，就先要在 names 中找到对应的位置，再从 scores 取出对应的成绩，list 越长，耗时越长。</p><p>如果用 dict 实现，只需要一个 <code>名字-成绩</code> 的对照表，直接根据名字查找成绩，无论这个表有多大，查找速度都不会变慢。用 Python 写一个 dict 如下:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">:</span> <span class="token number">95</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">:</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">:</span> <span class="token number">85</span><span class="token punctuation">}</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d<span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">]</span>\n<span class="token number">95</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">dict 的速度优势</p><p>为什么 dict 查找速度这么快? 因为 dict 的实现原理和查字典是一样的。</p><p>假设字典包含了 1 万个汉字，我们要查某一个字，一个办法是把字典从第一页往后翻，直到找到我们想要的字为止，这种方法就是在 list 中查找元素的方法，list 越大，查找越慢。</p><p>第二种方法是先在字典的索引表里(比如部首表)查这个字对应的页码，然后直接翻到该页，找到这个字。无论找哪个字，这种查找速度都非常快，不会随着字典大小的增加而变慢。</p><p>dict 就是第二种实现方式，给定一个名字，比如 <code>&#39;Michael&#39;</code>，dict 在内部就可以直接计算出 <code>Michael</code> 对应的存放成绩的“页码”，也就是 <code>95</code> 这个数字存放的内存地址，直接取出来，所以速度非常快。</p></div><p>您可以猜到，这种 <code>key - value</code> 存储方式，在放进去的时候，必须根据 key 算出 value 的存放位置，这样，取的时候才能根据 key 直接拿到 value。</p><p>把数据放入 dict 的方法，除了初始化时指定外，还可以通过 key 放入:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d<span class="token punctuation">[</span><span class="token string">&#39;Adam&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">67</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d<span class="token punctuation">[</span><span class="token string">&#39;Adam&#39;</span><span class="token punctuation">]</span>\n<span class="token number">67</span>\n由于一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉<span class="token punctuation">:</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d<span class="token punctuation">[</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">90</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d<span class="token punctuation">[</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">]</span>\n<span class="token number">90</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d<span class="token punctuation">[</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">88</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d<span class="token punctuation">[</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">]</span>\n<span class="token number">88</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 key 不存在，dict 就会报错:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d<span class="token punctuation">[</span><span class="token string">&#39;Thomas&#39;</span><span class="token punctuation">]</span>\nTraceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>\n  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>\nKeyError<span class="token punctuation">:</span> <span class="token string">&#39;Thomas&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要避免 key 不存在的错误，有两种办法，一是通过 <code>in</code> 判断 key 是否存在:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;Thomas&#39;</span> <span class="token keyword">in</span> d\n<span class="token boolean">False</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>二是通过 dict 提供的 <code>get()</code> 方法，如果 key 不存在，可以返回 <code>None</code>，或者自己指定的 value:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;Thomas&#39;</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;Thomas&#39;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token operator">-</span><span class="token number">1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>返回 <code>None</code> 的时候 Python 的交互环境不显示结果。</p></div><p>要删除一个 key，用 <code>pop(key)</code> 方法，对应的 value 也会从 dict 中删除:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">)</span>\n<span class="token number">75</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d\n<span class="token punctuation">{</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">:</span> <span class="token number">95</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">:</span> <span class="token number">85</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请务必注意，dict 内部存放的顺序和 key 放入的顺序是没有关系的。</p><p>和 list 比较，dict 有以下几个特点:</p><ul><li>查找和插入的速度极快，不会随着 key 的增加而变慢；</li><li>需要占用大量的内存，内存浪费多。</li></ul><p>而 list 相反:</p><ul><li>查找和插入的时间随着元素的增加而增加；</li><li>占用空间小，浪费内存很少。</li></ul><p>所以，dict 是用空间来换取时间的一种方法。</p><p>dict 可以用在需要高速查找的很多地方，在 Python 代码中几乎无处不在，正确使用 dict 非常重要，需要牢记的第一条就是 dict 的 key 必须是<strong>不可变对象</strong>。</p><p>这是因为 dict 根据 key 来计算 value 的存储位置，如果每次计算相同的 key 得出的结果不同，那 dict 内部就完全混乱了。这个通过 key 计算位置的算法称为哈希算法(Hash)。</p><p>要保证 hash 的正确性，作为 key 的对象就不能变。在 Python 中，字符串、整数等都是不可变的，因此，可以放心地作为 key。而 list 是可变的，就不能作为 key:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> key <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;a list&#39;</span>\nTraceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>\n  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>\nTypeError<span class="token punctuation">:</span> unhashable <span class="token builtin">type</span><span class="token punctuation">:</span> <span class="token string">&#39;list&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于 dict 的补充内容请看脚注<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>。</p><h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h2><p>set 和 dict 类似，也是一组 key 的集合，但不存储 value。由于 key 不能重复，所以，在 set 中，没有重复的 key。</p><p>要创建一个 set，需要提供一个 list 作为输入集合:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s\n<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，传入的参数 <code>[1, 2, 3]</code> 是一个 list，而显示的 <code>{1, 2, 3}</code> 只是告诉您这个 set 内部有 1，2，3 这 3 个元素，显示的顺序也不表示 set 是有序的。。</p><p>重复元素在 set 中自动被过滤:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s\n<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>add(key)</code> 方法可以添加元素到 set 中，可以重复添加，但不会有效果:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s\n<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s\n<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>remove(key)</code> 方法可以删除元素:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s\n<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>set 可以看成数学意义上的无序和无重复元素的集合，因此，两个 set 可以做数学意义上的交集、并集等操作:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s1 <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s2 <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s1 <span class="token operator">&amp;</span> s2\n<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s1 <span class="token operator">|</span> s2\n<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>set 和 dict 的唯一区别仅在于没有存储对应的 value，但是，set 的原理和 dict 一样，所以，同样不可以放入可变对象，因为无法判断两个可变对象是否相等，也就无法保证 set 内部“不会有重复元素”。试试把 list 放入 set，看看是否会报错。</p><h2 id="不可变对象" tabindex="-1"><a class="header-anchor" href="#不可变对象" aria-hidden="true">#</a> 不可变对象</h2><p>上面我们讲了，str 是不变对象，而 list 是可变对象。</p><p>对于可变对象，比如 list，对 list 进行操作，list 内部的内容是会变化的，比如:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a\n<span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而对于不可变对象，比如 str，对 str 进行操作呢:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>\n<span class="token string">&#39;Abc&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a\n<span class="token string">&#39;abc&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然字符串有个 <code>replace()</code> 方法，也确实变出了 <code>&#39;Abc&#39;</code>，但变量 a 最后仍是 <code>&#39;abc&#39;</code>，应该怎么理解呢?</p><p>我们先把代码改成下面这样:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> b <span class="token operator">=</span> a<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> b\n<span class="token string">&#39;Abc&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a\n<span class="token string">&#39;abc&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要始终牢记的是，a 是变量，而 <code>&#39;abc&#39;</code> 才是字符串对象! 有些时候，我们经常说，对象 a 的内容是 <code>&#39;abc&#39;</code>，但其实是指，a 本身是一个变量，它指向的对象的内容才是 <code>&#39;abc&#39;</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>┌───┐                  ┌───────┐\n│ a │─────────────────&gt;│ &#39;abc&#39; │\n└───┘                  └───────┘\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们调用 <code>a.replace(&#39;a&#39;, &#39;A&#39;)</code> 时，实际上调用方法 <code>replace</code> 是作用在字符串对象 <code>&#39;abc&#39;</code> 上的，而这个方法虽然名字叫 replace，但却没有改变字符串 <code>&#39;abc&#39;</code> 的内容。相反，<code>replace</code> 方法创建了一个新字符串 <code>&#39;Abc&#39;</code> 并返回，如果我们用变量 b 指向该新字符串，就容易理解了，变量 a 仍指向原有的字符串 <code>&#39;abc&#39;</code>，但变量 b 却指向新字符串 <code>&#39;Abc&#39;</code> 了:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>┌───┐                  ┌───────┐\n│ a │─────────────────&gt;│ &#39;abc&#39; │\n└───┘                  └───────┘\n┌───┐                  ┌───────┐\n│ b │─────────────────&gt;│ &#39;Abc&#39; │\n└───┘                  └───────┘\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，对于不变对象来说，调用对象自身的任意方法，也不会改变该对象自身的内容。相反，这些方法会创建新的对象并返回，这样，就保证了不可变对象本身永远是不可变的。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>使用 key-value 存储结构的 dict 在 Python 中非常有用，选择不可变对象作为 key 很重要，最常用的 key 是字符串。</p><p>tuple 虽然是不变对象，但试试把 <code>(1, 2, 3)</code> 和 <code>(1, [2, 3])</code> 放入 dict 或 set 中，并解释结果。</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>补充内容</p><p>要理解 dict 的有关内容需要您理解哈希表(map)的相关基础知识，这个其实是《算法与数据结构》里面的内容。</p><ol><li><p>list 和 tuple 其实是用链表顺序存储的，也就是前一个元素中存储了下一个元素的位置，这样只要找到第一个元素的位置就可以顺藤摸瓜找到所有元素的位置，所以 list 的名字其实就是个指针，指向 list 的第一个元素的位置。list 的插入和删除等可以直接用链表的方式进行，比如我要在第 1 个元素和第 2 个元素中间插入一个元素，那么直接在链表的最后面(我们假设这个 list 只有两个元素，那么也就是在第 3 个元素的位置上)插入这个元素，然后把第一个元素指针指向这个元素(第 3 个位置)，然后再把新插入的元素的指针指向原来的第 2 个元素，这样插入操作就完成了。读取这个 list 的时候，先用 list 的名字(就是个指针，指向第 1 个元素的位置)找到第一个元素，然后用第 1 一个元素的指针找到第 2 个元素(位置 3)，然后用第 2 个元素的指针找到第 3 个元素(位置 2)，以此类推。所以 list 的顺序和内存中的实际顺序其实不一定完全对应。这种存储方式不会浪费内存，但查找起来特别费时间，因为要按照链表一个一个找下去，如果您的 list 特别大的话，那么要等好久才会找到结果。</p></li><li><p>dict 则为了快速查找使用了一种特别的方法，哈希表。哈希表采用哈希函数从 key 计算得到一个数字(哈希函数有个特点: 对于不同的 key，有很大的概率得到的哈希值也不同)，然后直接把 value 存储到这个数字所对应的地址上，比如 <code>key=&#39;ABC&#39;，value=10</code>，经过哈希函数得到 key 对应的哈希值为 <code>123</code>，那么就申请一个有 1000 个地址(从 0 到 999)的内存，然后把 <code>10</code> 存放在地址为 123 的地方。类似的，对于 <code>key=&#39;BCD&#39;，value=20</code>，得到 key 的哈希值为 <code>234</code>，那么就把 <code>20</code> 存放在地址为 234 的地方。对于这样的表查找起来是非常方便的。只要给出 key，计算得到哈希值，然后直接到对应的地址去找 value 就可以了。无论有几个元素，都可以直接找到 value，无需遍历整个表。不过虽然 dict 查找速度快，但内存浪费严重，您看我们只存储了两个元素，都要申请一个长度为 1000 的内存。</p></li><li><p>现在您知道为啥 key 要用不可变对象了吧? 因为不可变对象是常量，每次的哈希值算出来都是固定的，这样就不会出错。比如 <code>key=&#39;ABC&#39;，value=10</code>，存储地址为 123，假设我突发奇想，把 key 改成 <code>&#39;BCD&#39;</code>，那么当查找 <code>&#39;BCD&#39;</code> 的 value 的时候就会去 234 的地址找，但那里啥也没有，这就乱套了。</p></li></ol><p>对于不同的 key，有很大的概率得到的哈希值也不同。那么有很小的概率不同的 key 可以得到相同的哈希值了? 没错，比如对于我们的例子来说，哈希值只有 3 位，那么只要元素个数超过 1000，就一定会有至少两个 key 的哈希值相同(鸽笼原理)，这种情况叫“冲突”，设计哈希表的时候要采取办法减少冲突，实在冲突了也要想办法补救。不过这是编译器的事情，况且对于初学者的我们来说碰到的冲突的概率基本等于零，就不用操心了。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',64),o={},c=(0,a(61935).Z)(o,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e.kq)(" more "),p])}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},3119:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-13c3cbe8","path":"/code/language/python/guide/dict-and-set.html","title":"dict 和 set","lang":"zh-CN","frontmatter":{"title":"dict 和 set","icon":"map","author":"廖雪峰","date":"2020-05-25T00:00:00.000Z","category":["Python"],"summary":"dict 和 set 是 Python 中常用的数据结构。\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/python/guide/dict-and-set.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"dict 和 set"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"<p><code v-pre>dict</code> 和 <code v-pre>set</code> 是 Python 中常用的数据结构。</p>\\n","headers":[{"level":2,"title":"dict","slug":"dict","link":"#dict","children":[]},{"level":2,"title":"set","slug":"set","link":"#set","children":[]},{"level":2,"title":"不可变对象","slug":"不可变对象","link":"#不可变对象","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1604856355000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":9.76,"words":2929},"filePathRelative":"code/language/python/guide/dict-and-set.md","localizedDate":"2020年5月25日"}')}}]);