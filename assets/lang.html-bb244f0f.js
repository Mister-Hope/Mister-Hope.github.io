import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c,f as n}from"./app-fdbfdf69.js";const o={},s=n(`<h1 id="语言切换" tabindex="-1"><a class="header-anchor" href="#语言切换" aria-hidden="true">#</a> 语言切换</h1><p>查看当前语言包: <code>locale -a</code></p><p>中文语言是: <code>zh_CN.utf8</code></p><h2 id="安装中文语言包" tabindex="-1"><a class="header-anchor" href="#安装中文语言包" aria-hidden="true">#</a> 安装中文语言包</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> language-pack-zh-hans
</code></pre></div><p>之后修改 <code>/etc/default/locale</code>，将 <code>LANG</code> 改为 <code>zh_CN.utf8</code></p>`,6),t=[s];function d(l,r){return a(),c("div",null,t)}const p=e(o,[["render",d],["__file","lang.html.vue"]]);export{p as default};
