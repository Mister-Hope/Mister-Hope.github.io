import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,b as n}from"./app-C6d_tW6U.js";const i={},l=n(`<h1 id="管理工具" tabindex="-1"><a class="header-anchor" href="#管理工具"><span>管理工具</span></a></h1><h2 id="apt-get" tabindex="-1"><a class="header-anchor" href="#apt-get"><span>apt-get</span></a></h2><p><code>apt-get</code> 命令默认的源在国内访问很慢，可以考虑换源。</p><ul><li><p>获取软件包更新:</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">apt-get</span><span style="color:#032F62;--shiki-dark:#98C379;"> update</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>更新软件包:</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">apt-get</span><span style="color:#032F62;--shiki-dark:#98C379;"> update</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>其他命令<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p></li></ul><h2 id="snap" tabindex="-1"><a class="header-anchor" href="#snap"><span>Snap</span></a></h2><p>已经预装。</p><p>在中国大陆不建议使用 Snap</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>其他命令</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">apt-cache</span><span style="color:#032F62;--shiki-dark:#98C379;"> search</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> # ------(package 搜索包)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">apt-cache</span><span style="color:#032F62;--shiki-dark:#98C379;"> show</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> #------(package 获取包的相关信息，如说明、大小、版本等)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="color:#032F62;--shiki-dark:#98C379;"> install</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> # ------(package 安装包)sudo apt-get install # -----(package - - reinstall 重新安装包)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -f</span><span style="color:#032F62;--shiki-dark:#98C379;"> install</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> # -----(强制安装?#&quot;-f = --fix-missing&quot;当是修复安装吧...)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="color:#032F62;--shiki-dark:#98C379;"> remove</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> #-----(package 删除包)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="color:#032F62;--shiki-dark:#98C379;"> remove</span><span style="color:#032F62;--shiki-dark:#98C379;"> -</span><span style="color:#032F62;--shiki-dark:#98C379;"> -</span><span style="color:#032F62;--shiki-dark:#98C379;"> purge</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> # ------(package 删除包，包括删除配置文件等)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="color:#032F62;--shiki-dark:#98C379;"> autoremove</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --purge</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> # ----(package 删除包及其依赖的软件包+配置文件等(只对6.10有效，强烈推荐))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="color:#032F62;--shiki-dark:#98C379;"> update</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> #------更新源</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="color:#032F62;--shiki-dark:#98C379;"> upgrade</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> #------更新已安装的包</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="color:#032F62;--shiki-dark:#98C379;"> dist-upgrade</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> # ---------升级系统</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="color:#032F62;--shiki-dark:#98C379;"> dselect-upgrade</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> #------使用 dselect 升级</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">apt-cache</span><span style="color:#032F62;--shiki-dark:#98C379;"> depends</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> #-------(package 了解使用依赖)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">apt-cache</span><span style="color:#032F62;--shiki-dark:#98C379;"> rdepends</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> # ------(package 了解某个具体的依赖?#当是查看该包被哪些包依赖吧...)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="color:#032F62;--shiki-dark:#98C379;"> build-dep</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> # ------(package 安装相关的编译环境)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">apt-get</span><span style="color:#032F62;--shiki-dark:#98C379;"> source</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> #------(package 下载该包的源代码)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="color:#032F62;--shiki-dark:#98C379;"> clean</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="color:#032F62;--shiki-dark:#98C379;"> autoclean</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> # --------清理下载文件的存档 &amp;&amp; 只清理过时的包</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="color:#032F62;--shiki-dark:#98C379;"> check</span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> #-------检查是否有损坏的依赖</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></li></ol></section>`,9),t=[l];function p(o,r){return a(),e("div",null,t)}const k=s(i,[["render",p],["__file","manage.html.vue"]]),h=JSON.parse('{"path":"/linux/ubuntu/manage.html","title":"管理工具","lang":"zh-CN","frontmatter":{"icon":"tool","date":"2019-11-21T00:00:00.000Z","category":"Linux","description":"管理工具 apt-get apt-get 命令默认的源在国内访问很慢，可以考虑换源。 获取软件包更新: 更新软件包: 其他命令[1] Snap 已经预装。 在中国大陆不建议使用 Snap 其他命令 ↩︎","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/ubuntu/manage.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"管理工具"}],["meta",{"property":"og:description","content":"管理工具 apt-get apt-get 命令默认的源在国内访问很慢，可以考虑换源。 获取软件包更新: 更新软件包: 其他命令[1] Snap 已经预装。 在中国大陆不建议使用 Snap 其他命令 ↩︎"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2019-11-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"管理工具\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-21T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"apt-get","slug":"apt-get","link":"#apt-get","children":[]},{"level":2,"title":"Snap","slug":"snap","link":"#snap","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5}]},"readingTime":{"minutes":1.15,"words":344},"filePathRelative":"linux/ubuntu/manage.md","localizedDate":"2019年11月21日","excerpt":"","autoDesc":true}');export{k as comp,h as data};
