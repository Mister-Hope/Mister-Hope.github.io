"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[90239],{63590:(e,n,a)=>{a.r(n),a.d(n,{default:()=>i});var s=a(71534);const t=[(0,s.uE)('<h1 id="cut" tabindex="-1"><a class="header-anchor" href="#cut" aria-hidden="true">#</a> cut</h1><p><code>cut</code> 命令用于在命令行输出文本文件的指定位置的内容。</p><p>它的使用格式如下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cut</span> OPTION <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有指定文件名，将读取标准输入。</p><p><code>-b</code> 参数用来指定读取的字节。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出前三个字节</span>\n$ <span class="token function">cut</span> file1.txt -b1,2,3\n\n<span class="token comment"># 输出前十个字节</span>\n$ <span class="token function">cut</span> file1.txt -b1-10\n\n<span class="token comment"># 输出从第5个字节开始的所有字节</span>\n$ <span class="token function">cut</span> file1.txt -b5-\n\n<span class="token comment"># 输出前5个字节</span>\n$ <span class="token function">cut</span> file1.txt -b-5\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-c</code> 参数用来指定读取的字符，用法与 <code>-b</code> 一样。有的字符是多字节字符，这时候就应该用 <code>-c</code> 代替 <code>-b</code>。</p><p><code>-d</code> 参数用来指定分隔符，默认分隔符为制表符。</p><p><code>-f</code> 参数用来指定字段。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定每一行的分隔符为逗号，</span>\n<span class="token comment"># 输出第一和第三个字段</span>\n$ <span class="token function">cut</span> file1.txt -d, -f1,3\n\n<span class="token comment"># 输出第一、第二、第四和第五个字段</span>\n$ <span class="token function">cut</span> <span class="token parameter variable">-f</span> <span class="token number">1</span>-2,4-5 data.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11)],c={},i=(0,a(61935).Z)(c,[["render",function(e,n){return(0,s.wg)(),(0,s.iD)("div",null,t)}]])},61935:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}},91499:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-06485ef2","path":"/linux/bash/archives/commands/cut.html","title":"cut","lang":"zh-CN","frontmatter":{"summary":"cut cut 命令用于在命令行输出文本文件的指定位置的内容。 它的使用格式如下。 如果没有指定文件名，将读取标准输入。 -b 参数用来指定读取的字节。 -c 参数用来指定读取的字符，用法与 -b 一样。有的字符是多字节字符，这时候就应该用 -c 代替 -b。 -d 参数用来指定分隔符，默认分隔符为制表符。 -f 参数用来指定字段。","head":[["meta",{"property":"og:url","content":"https://mrhope.site/linux/bash/archives/commands/cut.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"cut"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2021-01-27T06:58:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2021-01-27T06:58:54.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1591204114000,"updatedTime":1611730734000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3}]},"readingTime":{"minutes":0.76,"words":229},"filePathRelative":"linux/bash/archives/commands/cut.md","localizedDate":"2020年6月3日"}')}}]);