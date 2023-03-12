import{_ as s,X as a,Y as e,a1 as p,$ as n,a3 as t}from"./framework-a91f7991.js";const i={},o=n("p",null,"从小程序基础库版本 2.2.1 或以上、及开发者工具 1.02.1808300 或以上开始，小程序支持使用 npm 安装第三方包。",-1),c=n("p",null,"此文档要求开发者们对 npm 有一定的了解，因此不会再去介绍 npm 的基本功能。如若之前未接触过 npm，请翻阅官方 npm 文档进行学习。",-1),l=t(`<h2 id="使用-npm-包" tabindex="-1"><a class="header-anchor" href="#使用-npm-包" aria-hidden="true">#</a> 使用 npm 包</h2><ol><li><p>在小程序中执行命令安装 npm 包:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div><p>此处并没有强制要求 <code>node_modules</code> 必须在小程序根目录下(即 <code>project.config.js</code> 中的 <code>miniprogramRoot</code> 字段)，也可以存在于小程序根目录下的各个子目录中。但是不允许 <code>node_modules</code> 在小程序根目录外。</p></li><li><p>点击开发者工具中的菜单栏: 工具 --&gt; 构建 npm</p></li><li><p>勾选“使用 npm 模块”选项:</p></li><li><p>构建完成后即可使用 npm 包。</p></li></ol><p><strong>js 中引入 npm 包</strong>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> myPackage <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;packageName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> packageOther <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;packageName/other&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>使用 npm 包中的自定义组件:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;myPackage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;packageName&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;package-other&quot;</span><span class="token operator">:</span> <span class="token string">&quot;packageName/other&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>此处使用 npm 包时如果只引入包名，则默认寻找包名下的 <code>index.js</code> 文件或者 <code>index</code> 组件。</p></div><h2 id="发布-npm-包" tabindex="-1"><a class="header-anchor" href="#发布-npm-包" aria-hidden="true">#</a> 发布 npm 包</h2><h3 id="发布小程序-npm-包的约束" tabindex="-1"><a class="header-anchor" href="#发布小程序-npm-包的约束" aria-hidden="true">#</a> 发布小程序 npm 包的约束</h3><p>这里要发布的 npm 包是特指专为小程序定制的 npm 包(下称小程序 npm 包)。因为小程序自定义组件的特殊性，原有的 npm 包机制无法满足我们的需求，所以这里需要对小程序 npm 包做一些约束:</p><ol><li><p>小程序 npm 包要求根目录下必须有构建文件生成目录(默认为 miniprogram_dist 目录)，此目录可以通过在 package.json 文件中新增一个 miniprogram 字段来指定，比如:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;miniprogram-custom-component&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;miniprogram&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>小程序 npm 包里只有构建文件生成目录会被算入小程序包的占用空间，上传小程序代码时也只会上传该目录的代码。如果小程序 npm 包有一些测试、构建相关的代码请放到构建文件生成目录外。另外也可以使用 <code>.npmignore</code> 文件来避免将一些非业务代码文件发布到 npm 中。</p></li><li><p>测试、构建相关的依赖请放入 <code>devDependencies</code> 字段中避免被一起打包到小程序包中。</p></li></ol><h3 id="发布其他-npm-包的约束" tabindex="-1"><a class="header-anchor" href="#发布其他-npm-包的约束" aria-hidden="true">#</a> 发布其他 npm 包的约束</h3><p>如果是已经发布过的一些 npm 包，因为一些原因无法改造成小程序 npm 包的结构的话，也可以通过微调后被使用，但是请确保遵循以下几点:</p><ol><li><p>只支持纯 js 包，不支持自定义组件。</p></li><li><p>必须有入口文件，即需要保证 package.json 中的 main 字段是指向一个正确的入口，如果 package.json 中没有 main 字段，则以 npm 包根目录下的 index.js 作为入口文件。</p></li><li><p>测试、构建相关的依赖请放入 devDependencies 字段中避免被一起打包到小程序包中，这一点和小程序 npm 包的要求相同。</p></li><li><p>不支持依赖 c++ addon，不支持依赖 Node.js 的内置库:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> addon <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./addon.node&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不支持!</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不支持!</span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>对于一些纯 js 实现的 Node.js 内置库(如 path 模块)，可以通过额外安装其他开发者实现的 npm 包来支持。</p></div></li><li><p>使用 <code>require</code> 依赖的时候下列几种方式也是不允许的:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不允许将 require 赋值给其他变量后再使用，以下代码不会去解析出具体依赖</span>
<span class="token keyword">let</span> r<span class="token punctuation">;</span>
r <span class="token operator">=</span> require<span class="token punctuation">;</span>
<span class="token function">r</span><span class="token punctuation">(</span><span class="token string">&quot;testa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> r2 <span class="token operator">=</span> require<span class="token punctuation">;</span>
<span class="token function">r2</span><span class="token punctuation">(</span><span class="token string">&quot;testa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 不允许 require 一个变量，以下代码依赖运行时，无法解析出具体依赖</span>
<span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token string">&quot;testa&quot;</span><span class="token punctuation">;</span>
<span class="token function">require</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>小程序环境比较特殊，一些全局变量(如 window 对象)和构造器(如 Function 构造器)是无法使用的。</p></li></ol><h2 id="原理介绍" tabindex="-1"><a class="header-anchor" href="#原理介绍" aria-hidden="true">#</a> 原理介绍</h2><p>为了帮助大家更好的理解发布 npm 包中提到的各种要求，这里简单介绍一下原理:</p><ol><li><p>首先 <code>node_modules</code> 目录不会参与编译、上传和打包中，所以小程序想要使用 npm 包必须走一遍“构建 npm”的过程，在最外层的 <code>node_modules</code> 的同级目录下会生成一个 <code>miniprogram_npm</code> 目录，里面会存放构建打包后的 npm 包，也就是小程序真正使用的 npm 包。</p></li><li><p>构建打包分为两种: 小程序 npm 包会直接拷贝构建文件生成目录下的所有文件到 <code>miniprogram_npm</code> 中；其他 npm 包则会从入口 js 文件开始走一遍依赖分析和打包过程(类似 webpack)。</p></li><li><p>寻找 npm 包的过程和 npm 的实现类似，从依赖 npm 包的文件所在目录开始逐层往外找，直到找到可用的 npm 包或是小程序根目录为止。下面简单介绍下构建打包前后的目录情况，构建之前的结构:</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|--node_modules
|    |--testComp // 小程序 npm 包
|    |    |--package.json
|    |    |--src
|    |    |--miniprogram_dist
|    |         |-index.js
|    |         |-index.json
|    |         |-index.wxss
|    |         |-index.wxml
|    |--testa // 其他 npm 包
|         |--package.json
|         |--lib
|         |    |--entry.js
|         |--node_modules
|              |--testb
|                   |--package.json
|                   |--main.js
|--pages
|--app.js
|--app.wxss
|--app.json
|--project.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建之后的结构:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|--node_modules
|--miniprogram_npm
|    |--testComp // 小程序 npm 包
|    |    |-index.js
|    |    |-index.json
|    |    |-index.wxss
|    |    |-index.wxml
|    |--testa // 其他 npm 包
|         |--index.js // 打包后的文件
|         |--miniprogram_npm
|              |--testb
|                   |--index.js // 打包后的文件
|                   |--index.js.map
|--pages
|--app.js
|--app.wxss
|--app.json
|--project.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>打包生成的代码在同级目录下会生成 source map 文件，方便进行逆向调试。</p></div>`,21);function d(r,u){return a(),e("div",null,[o,c,p(" more "),l])}const v=s(i,[["render",d],["__file","npm.html.vue"]]);export{v as default};
