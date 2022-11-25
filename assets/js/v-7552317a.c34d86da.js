"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[63423],{98507:(n,s,a)=>{a.r(s),a.d(s,{default:()=>y});var t=a(16492);const p=(0,t.uE)('<p>我们从一个简单的例子开始。</p><p>将以下代码复制到 <code>hello.ts</code> 中:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>然后执行</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>tsc hello.ts\n</code></pre></div><p>这时候会生成一个编译好的文件 <code>hello.js</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>TypeScript 中，使用 <code>:</code> 指定变量的类型，<code>:</code> 的前后有没有空格都可以。</p><p>上述例子中，我们用 <code>:</code> 指定 <code>person</code> 参数类型为 <code>string</code>。但是编译为 js 之后，并没有什么检查的代码被插入进来。</p><p><strong>TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。</strong></p>',10),o=(0,t._)("code",null,"let",-1),e=(0,t._)("code",null,"var",-1),c={href:"http://es6.ruanyifeng.com/#docs/let",target:"_blank",rel:"noopener noreferrer"},l=(0,t.uE)('<p>下面尝试把这段代码编译一下:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>编辑器中会提示错误，编译的时候也会出错:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>index.ts<span class="token punctuation">(</span><span class="token number">6,22</span><span class="token punctuation">)</span>: error TS2345: Argument of <span class="token builtin class-name">type</span> <span class="token string">&#39;number[]&#39;</span> is not assignable to parameter of <span class="token builtin class-name">type</span> <span class="token string">&#39;string&#39;</span><span class="token builtin class-name">.</span>\n</code></pre></div><p>但是还是生成了 js 文件:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>TypeScript 编译的时候即使报错了，还是会生成编译结果</strong>，我们仍然可以使用这个编译之后的文件。</p>',7),r=(0,t._)("code",null,"tsconfig.json",-1),u=(0,t._)("code",null,"noEmitOnError",-1),i=(0,t._)("code",null,"tsconfig.json",-1),k={href:"http://www.typescriptlang.org/docs/handbook/tsconfig-json.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html",target:"_blank",rel:"noopener noreferrer"},g={},y=(0,a(11164).Z)(g,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[p,(0,t._)("blockquote",null,[(0,t._)("p",null,[o,(0,t.Uk)(" 是 ES6 中的关键字，和 "),e,(0,t.Uk)(" 类似，用于定义一个局部变量，可以参阅 "),(0,t._)("a",c,[(0,t.Uk)("let 和 const 命令"),(0,t.Wm)(a)]),(0,t.Uk)("。")])]),l,(0,t._)("p",null,[(0,t.Uk)("如果要在报错的时候终止 js 文件的生成，可以在 "),r,(0,t.Uk)(" 中配置 "),u,(0,t.Uk)(" 即可。关于 "),i,(0,t.Uk)("，请参阅"),(0,t._)("a",k,[(0,t.Uk)("官方手册"),(0,t.Wm)(a)]),(0,t.Uk)("("),(0,t._)("a",d,[(0,t.Uk)("中文版"),(0,t.Wm)(a)]),(0,t.Uk)(")。")])])}]])},11164:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},12565:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-7552317a","path":"/code/language/typescript/intro/hello-typescript.html","title":"Hello TypeScript","lang":"zh-CN","frontmatter":{"title":"Hello TypeScript","icon":"creative","category":["TypeScript"],"tag":["快速上手"],"description":"我们从一个简单的例子开始。 将以下代码复制到 hello.ts 中: 然后执行 这时候会生成一个编译好的文件 hello.js: TypeScript 中，使用 : 指定变量的类型，: 的前后有没有空格都可以。 上述例子中，我们用 : 指定 person 参数类型为 string。但是编译为 js 之后，并没有什么检查的代码被插入进来。 TypeScr...","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/typescript/intro/hello-typescript.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Hello TypeScript"}],["meta",{"property":"og:description","content":"我们从一个简单的例子开始。 将以下代码复制到 hello.ts 中: 然后执行 这时候会生成一个编译好的文件 hello.js: TypeScript 中，使用 : 指定变量的类型，: 的前后有没有空格都可以。 上述例子中，我们用 : 指定 person 参数类型为 string。但是编译为 js 之后，并没有什么检查的代码被插入进来。 TypeScr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2}]},"readingTime":{"minutes":1.29,"words":386},"filePathRelative":"code/language/typescript/intro/hello-typescript.md","localizedDate":"2020年6月3日"}')}}]);