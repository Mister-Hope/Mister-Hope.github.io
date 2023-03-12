import{_ as n,X as s,Y as e,a3 as a}from"./framework-a91f7991.js";const c={},t=a(`<h1 id="cut" tabindex="-1"><a class="header-anchor" href="#cut" aria-hidden="true">#</a> cut</h1><p><code>cut</code> 命令用于在命令行输出文本文件的指定位置的内容。</p><p>它的使用格式如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cut</span> OPTION <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span>
</code></pre></div><p>如果没有指定文件名，将读取标准输入。</p><p><code>-b</code> 参数用来指定读取的字节。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出前三个字节</span>
$ <span class="token function">cut</span> file1.txt -b1,2,3

<span class="token comment"># 输出前十个字节</span>
$ <span class="token function">cut</span> file1.txt -b1-10

<span class="token comment"># 输出从第5个字节开始的所有字节</span>
$ <span class="token function">cut</span> file1.txt -b5-

<span class="token comment"># 输出前5个字节</span>
$ <span class="token function">cut</span> file1.txt -b-5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-c</code> 参数用来指定读取的字符，用法与 <code>-b</code> 一样。有的字符是多字节字符，这时候就应该用 <code>-c</code> 代替 <code>-b</code>。</p><p><code>-d</code> 参数用来指定分隔符，默认分隔符为制表符。</p><p><code>-f</code> 参数用来指定字段。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定每一行的分隔符为逗号，</span>
<span class="token comment"># 输出第一和第三个字段</span>
$ <span class="token function">cut</span> file1.txt -d, -f1,3

<span class="token comment"># 输出第一、第二、第四和第五个字段</span>
$ <span class="token function">cut</span> <span class="token parameter variable">-f</span> <span class="token number">1</span>-2,4-5 data.txt
</code></pre></div>`,11),d=[t];function o(i,l){return s(),e("div",null,d)}const u=n(c,[["render",o],["__file","cut.html.vue"]]);export{u as default};
