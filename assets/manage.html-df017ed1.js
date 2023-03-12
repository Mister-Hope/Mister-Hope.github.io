import{_ as n,X as s,Y as a,a3 as e}from"./framework-a91f7991.js";const t={},c=e(`<h1 id="管理工具" tabindex="-1"><a class="header-anchor" href="#管理工具" aria-hidden="true">#</a> 管理工具</h1><h2 id="apt-get" tabindex="-1"><a class="header-anchor" href="#apt-get" aria-hidden="true">#</a> apt-get</h2><p><code>apt-get</code> 命令默认的源在国内访问很慢，可以考虑换源。</p><ul><li><p>获取软件包更新:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
</code></pre></div></li><li><p>更新软件包:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
</code></pre></div></li><li><p>其他命令<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p></li></ul><h2 id="snap" tabindex="-1"><a class="header-anchor" href="#snap" aria-hidden="true">#</a> Snap</h2><p>已经预装。</p><p>在中国大陆不建议使用 Snap</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>其他命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-cache</span> search <span class="token comment"># ------(package 搜索包)</span>

<span class="token function">apt-cache</span> show <span class="token comment">#------(package 获取包的相关信息，如说明、大小、版本等)</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token comment"># ------(package 安装包)sudo apt-get install # -----(package - - reinstall 重新安装包)</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">-f</span> <span class="token function">install</span> <span class="token comment"># -----(强制安装?#&quot;-f = --fix-missing&quot;当是修复安装吧...)</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> remove <span class="token comment">#-----(package 删除包)</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> remove - - purge <span class="token comment"># ------(package 删除包，包括删除配置文件等)</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> autoremove <span class="token parameter variable">--purge</span> <span class="token comment"># ----(package 删除包及其依赖的软件包+配置文件等(只对6.10有效，强烈推荐))</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token comment">#------更新源</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> upgrade <span class="token comment">#------更新已安装的包</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> dist-upgrade <span class="token comment"># ---------升级系统</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> dselect-upgrade <span class="token comment">#------使用 dselect 升级</span>

<span class="token function">apt-cache</span> depends <span class="token comment">#-------(package 了解使用依赖)</span>

<span class="token function">apt-cache</span> rdepends <span class="token comment"># ------(package 了解某个具体的依赖?#当是查看该包被哪些包依赖吧...)</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> build-dep <span class="token comment"># ------(package 安装相关的编译环境)</span>

<span class="token function">apt-get</span> <span class="token builtin class-name">source</span> <span class="token comment">#------(package 下载该包的源代码)</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> clean <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt-get</span> autoclean <span class="token comment"># --------清理下载文件的存档 &amp;&amp; 只清理过时的包</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> check <span class="token comment">#-------检查是否有损坏的依赖</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></li></ol></section>`,9),o=[c];function p(i,l){return s(),a("div",null,o)}const u=n(t,[["render",p],["__file","manage.html.vue"]]);export{u as default};
