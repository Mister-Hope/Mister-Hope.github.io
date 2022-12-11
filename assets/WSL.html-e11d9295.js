import{ac as a,F as e,G as s,K as n,E as t,ae as d}from"./framework-729f259c.js";const r={},c=t("p",null,"WSL 可以直接在 Windows 系统上安装并运行 Linux。目前最新的版本是 WSL2。",-1),o=d(`<h2 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h2><p>Windows 上的功能有很大缺失。已知不能用 Snap。</p><h2 id="wsl-文件位置" tabindex="-1"><a class="header-anchor" href="#wsl-文件位置" aria-hidden="true">#</a> WSL 文件位置</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>C:\\Users\\%USERNAME%\\AppData\\Local\\Packages\\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\\LocalState\\rootfs
</code></pre></div><h2 id="重启-wsl" tabindex="-1"><a class="header-anchor" href="#重启-wsl" aria-hidden="true">#</a> 重启 WSL</h2><p>使用</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>net stop LxssManager
</code></pre></div><p>和</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>net start LxssManager
</code></pre></div>`,9);function i(l,h){return e(),s("div",null,[c,n(" more "),o])}const p=a(r,[["render",i],["__file","WSL.html.vue"]]);export{p as default};
