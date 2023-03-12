import{_ as n,X as s,Y as e,a3 as a}from"./framework-a91f7991.js";const i={},l=a(`<h1 id="nl" tabindex="-1"><a class="header-anchor" href="#nl" aria-hidden="true">#</a> nl</h1><p><code>nl</code> 命令用于显示行号。</p><p>下面是 <code>example.txt</code> 文件的内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Lorem ipsum
dolor sit amet,
consetetur
sadipscing elitr,
<span class="token function">sed</span> diam nonumy
eirmod tempor
invidunt ut labore
et dolore magna
aliquyam erat, <span class="token function">sed</span>
diam voluptua. At
vero eos et
accusam et justo
duo dolores et ea
rebum. Stet clita
kasd gubergren,
no sea takimata
sanctus est Lorem
ipsum dolor sit
amet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>nl</code> 命令让上面这段文本显示行号。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">nl</span> -s<span class="token string">&quot;. &quot;</span> example.txt
     <span class="token number">1</span>. Lorem ipsum
     <span class="token number">2</span>. dolor sit amet,
     <span class="token number">3</span>. consetetur
     <span class="token number">4</span>. sadipscing elitr,
     <span class="token number">5</span>. <span class="token function">sed</span> diam nonumy
     <span class="token number">6</span>. eirmod tempor
     <span class="token number">7</span>. invidunt ut labore
     <span class="token number">8</span>. et dolore magna
     <span class="token number">9</span>. aliquyam erat, <span class="token function">sed</span>
    <span class="token number">10</span>. diam voluptua. At
    <span class="token number">11</span>. vero eos et
    <span class="token number">12</span>. accusam et justo
    <span class="token number">13</span>. duo dolores et ea
    <span class="token number">14</span>. rebum. Stet clita
    <span class="token number">15</span>. kasd gubergren,
    <span class="token number">16</span>. no sea takimata
    <span class="token number">17</span>. sanctus est Lorem
    <span class="token number">18</span>. ipsum dolor sit
    <span class="token number">19</span>. amet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-s</code> 参数表示行号的后缀。</p>`,7),d=[l];function r(c,t){return s(),e("div",null,d)}const m=n(i,[["render",r],["__file","nl.html.vue"]]);export{m as default};
