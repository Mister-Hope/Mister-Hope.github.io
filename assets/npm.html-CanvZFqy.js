import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,d as e,e as s,b as l}from"./app-r406UCC8.js";const p={},t=s("p",null,"从小程序基础库版本 2.2.1 或以上、及开发者工具 1.02.1808300 或以上开始，小程序支持使用 npm 安装第三方包。",-1),h=s("p",null,"此文档要求开发者们对 npm 有一定的了解，因此不会再去介绍 npm 的基本功能。如若之前未接触过 npm，请翻阅官方 npm 文档进行学习。",-1),d=l(`<h2 id="使用-npm-包" tabindex="-1"><a class="header-anchor" href="#使用-npm-包"><span>使用 npm 包</span></a></h2><ol><li><p>在小程序中执行命令安装 npm 包:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>此处并没有强制要求 <code>node_modules</code> 必须在小程序根目录下(即 <code>project.config.js</code> 中的 <code>miniprogramRoot</code> 字段)，也可以存在于小程序根目录下的各个子目录中。但是不允许 <code>node_modules</code> 在小程序根目录外。</p></li><li><p>点击开发者工具中的菜单栏: 工具 --&gt; 构建 npm</p></li><li><p>勾选“使用 npm 模块”选项:</p></li><li><p>构建完成后即可使用 npm 包。</p></li></ol><p><strong>js 中引入 npm 包</strong>:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> myPackage</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;packageName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> packageOther</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;packageName/other&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 npm 包中的自定义组件:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  &quot;usingComponents&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;myPackage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;packageName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;package-other&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;packageName/other&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>此处使用 npm 包时如果只引入包名，则默认寻找包名下的 <code>index.js</code> 文件或者 <code>index</code> 组件。</p></div><h2 id="发布-npm-包" tabindex="-1"><a class="header-anchor" href="#发布-npm-包"><span>发布 npm 包</span></a></h2><h3 id="发布小程序-npm-包的约束" tabindex="-1"><a class="header-anchor" href="#发布小程序-npm-包的约束"><span>发布小程序 npm 包的约束</span></a></h3><p>这里要发布的 npm 包是特指专为小程序定制的 npm 包(下称小程序 npm 包)。因为小程序自定义组件的特殊性，原有的 npm 包机制无法满足我们的需求，所以这里需要对小程序 npm 包做一些约束:</p><ol><li><p>小程序 npm 包要求根目录下必须有构建文件生成目录(默认为 miniprogram_dist 目录)，此目录可以通过在 package.json 文件中新增一个 miniprogram 字段来指定，比如:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;miniprogram-custom-component&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;miniprogram&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;devDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;dependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>小程序 npm 包里只有构建文件生成目录会被算入小程序包的占用空间，上传小程序代码时也只会上传该目录的代码。如果小程序 npm 包有一些测试、构建相关的代码请放到构建文件生成目录外。另外也可以使用 <code>.npmignore</code> 文件来避免将一些非业务代码文件发布到 npm 中。</p></li><li><p>测试、构建相关的依赖请放入 <code>devDependencies</code> 字段中避免被一起打包到小程序包中。</p></li></ol><h3 id="发布其他-npm-包的约束" tabindex="-1"><a class="header-anchor" href="#发布其他-npm-包的约束"><span>发布其他 npm 包的约束</span></a></h3><p>如果是已经发布过的一些 npm 包，因为一些原因无法改造成小程序 npm 包的结构的话，也可以通过微调后被使用，但是请确保遵循以下几点:</p><ol><li><p>只支持纯 js 包，不支持自定义组件。</p></li><li><p>必须有入口文件，即需要保证 package.json 中的 main 字段是指向一个正确的入口，如果 package.json 中没有 main 字段，则以 npm 包根目录下的 index.js 作为入口文件。</p></li><li><p>测试、构建相关的依赖请放入 devDependencies 字段中避免被一起打包到小程序包中，这一点和小程序 npm 包的要求相同。</p></li><li><p>不支持依赖 c++ addon，不支持依赖 Node.js 的内置库:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> addon</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./addon.node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 不支持!</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> http</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;http&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 不支持!</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>对于一些纯 js 实现的 Node.js 内置库(如 path 模块)，可以通过额外安装其他开发者实现的 npm 包来支持。</p></div></li><li><p>使用 <code>require</code> 依赖的时候下列几种方式也是不允许的:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 不允许将 require 赋值给其他变量后再使用，以下代码不会去解析出具体依赖</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> r</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">r</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">r</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;testa&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> r2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">r2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;testa&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 不允许 require 一个变量，以下代码依赖运行时，无法解析出具体依赖</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> m</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;testa&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">m</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>小程序环境比较特殊，一些全局变量(如 window 对象)和构造器(如 Function 构造器)是无法使用的。</p></li></ol><h2 id="原理介绍" tabindex="-1"><a class="header-anchor" href="#原理介绍"><span>原理介绍</span></a></h2><p>为了帮助大家更好的理解发布 npm 包中提到的各种要求，这里简单介绍一下原理:</p><ol><li><p>首先 <code>node_modules</code> 目录不会参与编译、上传和打包中，所以小程序想要使用 npm 包必须走一遍“构建 npm”的过程，在最外层的 <code>node_modules</code> 的同级目录下会生成一个 <code>miniprogram_npm</code> 目录，里面会存放构建打包后的 npm 包，也就是小程序真正使用的 npm 包。</p></li><li><p>构建打包分为两种: 小程序 npm 包会直接拷贝构建文件生成目录下的所有文件到 <code>miniprogram_npm</code> 中；其他 npm 包则会从入口 js 文件开始走一遍依赖分析和打包过程(类似 webpack)。</p></li><li><p>寻找 npm 包的过程和 npm 的实现类似，从依赖 npm 包的文件所在目录开始逐层往外找，直到找到可用的 npm 包或是小程序根目录为止。下面简单介绍下构建打包前后的目录情况，构建之前的结构:</p></li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>|--node_modules</span></span>
<span class="line"><span>|    |--testComp // 小程序 npm 包</span></span>
<span class="line"><span>|    |    |--package.json</span></span>
<span class="line"><span>|    |    |--src</span></span>
<span class="line"><span>|    |    |--miniprogram_dist</span></span>
<span class="line"><span>|    |         |-index.js</span></span>
<span class="line"><span>|    |         |-index.json</span></span>
<span class="line"><span>|    |         |-index.wxss</span></span>
<span class="line"><span>|    |         |-index.wxml</span></span>
<span class="line"><span>|    |--testa // 其他 npm 包</span></span>
<span class="line"><span>|         |--package.json</span></span>
<span class="line"><span>|         |--lib</span></span>
<span class="line"><span>|         |    |--entry.js</span></span>
<span class="line"><span>|         |--node_modules</span></span>
<span class="line"><span>|              |--testb</span></span>
<span class="line"><span>|                   |--package.json</span></span>
<span class="line"><span>|                   |--main.js</span></span>
<span class="line"><span>|--pages</span></span>
<span class="line"><span>|--app.js</span></span>
<span class="line"><span>|--app.wxss</span></span>
<span class="line"><span>|--app.json</span></span>
<span class="line"><span>|--project.config.js</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建之后的结构:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>|--node_modules</span></span>
<span class="line"><span>|--miniprogram_npm</span></span>
<span class="line"><span>|    |--testComp // 小程序 npm 包</span></span>
<span class="line"><span>|    |    |-index.js</span></span>
<span class="line"><span>|    |    |-index.json</span></span>
<span class="line"><span>|    |    |-index.wxss</span></span>
<span class="line"><span>|    |    |-index.wxml</span></span>
<span class="line"><span>|    |--testa // 其他 npm 包</span></span>
<span class="line"><span>|         |--index.js // 打包后的文件</span></span>
<span class="line"><span>|         |--miniprogram_npm</span></span>
<span class="line"><span>|              |--testb</span></span>
<span class="line"><span>|                   |--index.js // 打包后的文件</span></span>
<span class="line"><span>|                   |--index.js.map</span></span>
<span class="line"><span>|--pages</span></span>
<span class="line"><span>|--app.js</span></span>
<span class="line"><span>|--app.wxss</span></span>
<span class="line"><span>|--app.json</span></span>
<span class="line"><span>|--project.config.js</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>打包生成的代码在同级目录下会生成 source map 文件，方便进行逆向调试。</p></div>`,21);function r(k,c){return n(),a("div",null,[t,h,e(" more "),d])}const g=i(p,[["render",r],["__file","npm.html.vue"]]),u=JSON.parse('{"path":"/code/mini-app/tools/npm.html","title":"npm 支持","lang":"zh-CN","frontmatter":{"date":"2020-10-09T00:00:00.000Z","title":"npm 支持","icon":"npm","category":"小程序","description":"从小程序基础库版本 2.2.1 或以上、及开发者工具 1.02.1808300 或以上开始，小程序支持使用 npm 安装第三方包。 此文档要求开发者们对 npm 有一定的了解，因此不会再去介绍 npm 的基本功能。如若之前未接触过 npm，请翻阅官方 npm 文档进行学习。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/tools/npm.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"npm 支持"}],["meta",{"property":"og:description","content":"从小程序基础库版本 2.2.1 或以上、及开发者工具 1.02.1808300 或以上开始，小程序支持使用 npm 安装第三方包。 此文档要求开发者们对 npm 有一定的了解，因此不会再去介绍 npm 的基本功能。如若之前未接触过 npm，请翻阅官方 npm 文档进行学习。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-10-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"npm 支持\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-10-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"使用 npm 包","slug":"使用-npm-包","link":"#使用-npm-包","children":[]},{"level":2,"title":"发布 npm 包","slug":"发布-npm-包","link":"#发布-npm-包","children":[{"level":3,"title":"发布小程序 npm 包的约束","slug":"发布小程序-npm-包的约束","link":"#发布小程序-npm-包的约束","children":[]},{"level":3,"title":"发布其他 npm 包的约束","slug":"发布其他-npm-包的约束","link":"#发布其他-npm-包的约束","children":[]}]},{"level":2,"title":"原理介绍","slug":"原理介绍","link":"#原理介绍","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":4.49,"words":1346},"filePathRelative":"code/mini-app/tools/npm.md","localizedDate":"2020年10月9日","excerpt":"<p>从小程序基础库版本 2.2.1 或以上、及开发者工具 1.02.1808300 或以上开始，小程序支持使用 npm 安装第三方包。</p>\\n<p>此文档要求开发者们对 npm 有一定的了解，因此不会再去介绍 npm 的基本功能。如若之前未接触过 npm，请翻阅官方 npm 文档进行学习。</p>\\n","autoDesc":true}');export{g as comp,u as data};
