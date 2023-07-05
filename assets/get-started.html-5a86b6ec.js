import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as t,b as n,d as e,f as a}from"./app-27839578.js";const p={},c=a('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Vue Router 是 Vue 官方出品的路由组件，托管整个 Vue 项目路由。</p><h2 id="route-属性" tabindex="-1"><a class="header-anchor" href="#route-属性" aria-hidden="true">#</a> Route 属性</h2><p>在日常开发中，我们主要关注选项中的 <code>routes</code> 属性。<code>routes</code> 属性是一个数组，其每一个元素是一个对象，对象会包含 <code>path</code>，<code>component</code> 两个必填属性与 <code>meta</code> 和 <code>name</code> 两个可选属性。</p><ul><li><p><code>path</code>: 填入需要配置的网站页面的 <code>url</code></p></li><li><p><code>conponent</code>: 导入需要显示的 Vue 文件组件</p></li><li><p><code>name</code> (可选): 指定该组件与 <code>url</code> 的别名</p></li><li><p><code>meta</code> (可选): 该属性可以填入该界面的额外信息 (比如 <code>title</code>、<code>author</code> 等)</p></li></ul><p>也就是说，Vue 项目网站能够访问到的地址都能够被 <code>route</code> 数组中的某个元素的 <code>path</code> 值所匹配，此时页面展示的是该元素 <code>component</code> 属性对应的 vue 文件视图。</p><p>当希望在 Vue 项目中添加新的界面的时候，只需制作好其组件文件，并在 <code>route</code> 数组中添加新项，指定的带设定 <code>url</code> 路径为响应 vue 文件即可。</p><h2 id="载入-router" tabindex="-1"><a class="header-anchor" href="#载入-router" aria-hidden="true">#</a> 载入 Router</h2>',8),l={class:"MathJax",jax:"SVG",style:{position:"relative"}},i={style:{"vertical-align":"-0.452ex"},xmlns:"http://www.w3.org/2000/svg",width:"33.518ex",height:"2.149ex",role:"img",focusable:"false",viewBox:"0 -750 14815 950","aria-hidden":"true"},r=a('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(451,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"></path></g><g data-mml-node="mi" transform="translate(936,0)"><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(1508,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"></path></g><g data-mml-node="mi" transform="translate(1869,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"></path></g><g data-mml-node="mi" transform="translate(2335,0)"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(2786,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">的</text></g><g data-mml-node="mi" transform="translate(3786,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">形</text></g><g data-mml-node="mi" transform="translate(4786,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">式</text></g><g data-mml-node="mi" transform="translate(5786,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">访</text></g><g data-mml-node="mi" transform="translate(6786,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">问</text></g><g data-mml-node="mi" transform="translate(7786,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">它</text></g><g data-mml-node="mi" transform="translate(8786,0)"><text data-variant="italic" transform="scale(1,-1)" font-size="884px" font-family="serif" font-style="italic">，</text></g><g data-mml-node="mi" transform="translate(9786,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">并</text></g><g data-mml-node="mi" transform="translate(10786,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">且</text></g><g data-mml-node="mi" transform="translate(11786,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">以</text></g><g data-mml-node="mi" transform="translate(12786,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"></path></g><g data-mml-node="mi" transform="translate(13147,0)"><path data-c="210E" d="M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z"></path></g><g data-mml-node="mi" transform="translate(13723,0)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(14068,0)"><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"></path></g><g data-mml-node="mo" transform="translate(14537,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path></g></g></g>',1),u=[r],d=n("mjx-assistive-mml",{unselectable:"on",display:"inline"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mi",null,"r"),n("mi",null,"o"),n("mi",null,"u"),n("mi",null,"t"),n("mi",null,"e"),n("mi",null,"r"),n("mi",{mathvariant:"normal"},"的"),n("mi",{mathvariant:"normal"},"形"),n("mi",{mathvariant:"normal"},"式"),n("mi",{mathvariant:"normal"},"访"),n("mi",{mathvariant:"normal"},"问"),n("mi",{mathvariant:"normal"},"它"),n("mi",null,"，"),n("mi",{mathvariant:"normal"},"并"),n("mi",{mathvariant:"normal"},"且"),n("mi",{mathvariant:"normal"},"以"),n("mi",null,"t"),n("mi",null,"h"),n("mi",null,"i"),n("mi",null,"s"),n("mo",null,".")])],-1),m=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 1. 定义路由组件.</span>
<span class="token comment">// 也可以从其他文件导入</span>
<span class="token keyword">const</span> Home <span class="token operator">=</span> <span class="token punctuation">{</span> template<span class="token operator">:</span> <span class="token string">&quot;&lt;div&gt;Home&lt;/div&gt;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> About <span class="token operator">=</span> <span class="token punctuation">{</span> template<span class="token operator">:</span> <span class="token string">&quot;&lt;div&gt;About&lt;/div&gt;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 2. 定义一些路由</span>
<span class="token comment">// 每个路由都需要映射到一个组件。</span>
<span class="token comment">// 我们后面再讨论嵌套路由。</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> component<span class="token operator">:</span> Home <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span><span class="token punctuation">,</span> component<span class="token operator">:</span> About <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 3. 创建路由实例并传递 \`routes\` 配置</span>
<span class="token comment">// 你可以在这里输入更多的配置，但我们在这里</span>
<span class="token comment">// 暂时保持简单</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> VueRouter<span class="token punctuation">.</span><span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。</span>
  history<span class="token operator">:</span> VueRouter<span class="token punctuation">.</span><span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span> <span class="token comment">// \`routes: routes\` 的缩写</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 5. 创建并挂载根实例</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//确保 _use_ 路由实例使</span>
<span class="token comment">//整个应用支持路由。</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 现在，应用已经启动了！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导航" tabindex="-1"><a class="header-anchor" href="#导航" aria-hidden="true">#</a> 导航</h2><p>使用 Vue Router 进行界面间导航有两种方式。一种是通过在视图层定义，一种在脚本中定义。</p><h3 id="视图层" tabindex="-1"><a class="header-anchor" href="#视图层" aria-hidden="true">#</a> 视图层</h3><p>使用 <code>router-link</code> 标签进行导航。</p><p><code>router-link</code> 标签可以设置以下几个属性:</p><ul><li><p><code>to</code>: 填入想要导航的地址，可以是绝对路径也可以是相对路径。</p></li><li><p><code>tag</code>(可选): 控制 <code>router-link</code> 最终渲染的标签，默认渲染为 <code>a</code> 标签。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 点击导航至guide --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/guide<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 点击导航 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 点击导航至doc，此时router-link标签不再渲染为a标签，而是渲染为td标签。
    这是因为tr标签直接包含a标签是不合法的且不会显示 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/doc<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tab</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>td<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 点击导航 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="函数层" tabindex="-1"><a class="header-anchor" href="#函数层" aria-hidden="true">#</a> 函数层</h3><ul><li><p><code>router.push(location)</code>: 直接填入一个地址，将导航到这个新地址中。</p><blockquote><p>location 接受多种类型的格式:</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 字符串</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 对象</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;home&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 命名的路由</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 带查询参数，变成 /register?plan=private</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;register&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">plan</span><span class="token operator">:</span> <span class="token string">&quot;private&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>router.replace(location)</code>: 直接填入一个地址，将当前界面重定向到这个新地址中。它不会向 <code>history</code> 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 <code>history</code> 记录。</p><blockquote><p>location 的格式同上</p></blockquote></li><li><p><code>router.go(n)</code>: 填入一个整数，如果为正，则前进 <code>n</code> 步，反之后退。</p></li><li><p><code>router.back()</code>: 后退一步</p></li><li><p><code>router.forward()</code>: 前进一步</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在浏览器记录中前进一步，等同于 history.forward()</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 后退一步记录，等同于 history.back()</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 前进 3 步记录</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 如果 history 记录不够用，那就默默地失败呗</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>编程式导航对动态导航是十分有用的，比如需要根据不同人的名字导航到不同界面，这个时候就可以动态生成路由，再使用 <code>router.push</code> 函数导航到相应界面。</p>`,10);function k(Q,T){return s(),t("div",null,[c,n("p",null,[e("通过调用 app.use(router)，我们会触发第一次导航且可以在任意组件中以 this."),n("mjx-container",l,[(s(),t("svg",i,u)),d]),e("route 的形式访问当前路由：")]),m])}const g=o(p,[["render",k],["__file","get-started.html.vue"]]);export{g as default};
