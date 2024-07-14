import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,b as a}from"./app-DHOHoluL.js";const l="/assets/vscode-eslint-error-CiBI2_Dd.png",o="/assets/vscode-output-eslint-DWyZMUar.png",p={},t=a(`<p>TypeScript 的代码检查应当使用 ESLint + <code>typescript-eslint-parser</code>。</p><h2 id="什么是代码检查" tabindex="-1"><a class="header-anchor" href="#什么是代码检查"><span>什么是代码检查</span></a></h2><p>代码检查主要是用来发现代码错误、统一代码风格。</p><p>在 JavaScript 项目中，我们一般使用 ESLint 来进行代码检查。它通过插件化的特性极大的丰富了适用范围，搭配 <code>typescript-eslint-parser</code> 之后，甚至可以用来检查 TypeScript 代码。</p><h2 id="为什么需要代码检查" tabindex="-1"><a class="header-anchor" href="#为什么需要代码检查"><span>为什么需要代码检查</span></a></h2><p>有人会觉得，JavaScript 非常灵活，所以需要代码检查。而 TypeScript 已经能够在编译阶段检查出很多问题了，为什么还需要代码检查呢?</p><p>因为 TypeScript 关注的重心是类型的匹配，而不是代码风格。当团队的人员越来越多时，同样的逻辑不同的人写出来可能会有很大的区别:</p><ul><li>缩进应该是四个空格还是两个空格?</li><li>是否应该禁用 <code>var</code>?</li><li>接口名是否应该以 <code>I</code> 开头?</li><li>是否应该强制使用 <code>===</code> 而不是 <code>==</code>?</li></ul><p>这些问题 TypeScript 不会关注，但是却影响到多人协作开发时的效率、代码的可理解性以及可维护性。</p><p>下面来看一个具体的例子:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9;"> myName</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Tom</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">\`</span><span style="color:#A3BE8C;">My name is </span><span style="color:#ECEFF4;">\${</span><span style="color:#D8DEE9;">myNane</span><span style="color:#ECEFF4;">}\`</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">\`</span><span style="color:#A3BE8C;">My name is </span><span style="color:#ECEFF4;">\${</span><span style="color:#D8DEE9;">myName</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">toStrng</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;">}\`</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">\`</span><span style="color:#A3BE8C;">My name is </span><span style="color:#ECEFF4;">\${</span><span style="color:#D8DEE9;">myName</span><span style="color:#ECEFF4;">}\`</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// tsc 报错信息:</span></span>
<span class="line"><span style="color:#616E88;">//</span></span>
<span class="line"><span style="color:#616E88;">// index.ts(3,27): error TS2552: Cannot find name &#39;myNane&#39;. Did you mean &#39;myName&#39;?</span></span>
<span class="line"><span style="color:#616E88;">// index.ts(4,34): error TS2551: Property &#39;toStrng&#39; does not exist on type &#39;string&#39;. Did you mean &#39;toString&#39;?</span></span>
<span class="line"><span style="color:#616E88;">//</span></span>
<span class="line"><span style="color:#616E88;">//</span></span>
<span class="line"><span style="color:#616E88;">//</span></span>
<span class="line"><span style="color:#616E88;">// eslint 报错信息:</span></span>
<span class="line"><span style="color:#616E88;">//</span></span>
<span class="line"><span style="color:#616E88;">// /path/to/index.ts</span></span>
<span class="line"><span style="color:#616E88;">//   3:27  error  &#39;myNane&#39; is not defined         no-undef</span></span>
<span class="line"><span style="color:#616E88;">//   5:38  error  Missing semicolon               semi</span></span>
<span class="line"><span style="color:#616E88;">//</span></span>
<span class="line"><span style="color:#616E88;">// ✖ 2 problems (2 errors, 0 warnings)</span></span>
<span class="line"><span style="color:#616E88;">//   1 errors, 0 warnings potentially fixable with the \`--fix\` option.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>存在的问题</th><th><code>tsc</code> 是否报错</th><th><code>eslint</code> 是否报错</th></tr></thead><tbody><tr><td><code>myName</code> 被误写成了 <code>myNane</code></td><td>✅</td><td>✅</td></tr><tr><td><code>toString</code> 被误写成了 <code>toStrng</code></td><td>✅️</td><td>❌</td></tr><tr><td>少了一个分号</td><td>❌</td><td>✅</td></tr></tbody></table><p>上例中，由于 <code>eslint</code> 无法识别 <code>myName</code> 存在哪些方法，所以对于拼写错误的 <code>toString</code> 没有检查出来。</p><p>而代码风格的错误不影响编译，故少了一个分号的错误 <code>tsc</code> 没有检查出来。</p><p>对于未定义的变量 <code>myNane</code>，<code>tsc</code> 可以检测出来。<code>eslint</code> 需要能够独立于某个编译环境运行，所以能检测出此类错误，而对于 TypeScript 代码，这其实是一种冗余的检测了。</p><p>虽然发现代码错误比统一的代码风格更重要，但是当一个项目越来越庞大，开发人员也越来越多的时候，代码风格的约束还是必不可少的。</p><h2 id="在-typescript-中使用-eslint" tabindex="-1"><a class="header-anchor" href="#在-typescript-中使用-eslint"><span>在 TypeScript 中使用 ESLint</span></a></h2><h3 id="安装-eslint" tabindex="-1"><a class="header-anchor" href="#安装-eslint"><span>安装 ESLint</span></a></h3><p>ESLint 可以安装在当前项目中或全局环境下，因为代码检查是项目的重要组成部分，所以我们一般会将它安装在当前项目中。可以运行下面的脚本来安装:</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">npm</span><span style="color:#A3BE8C;"> install</span><span style="color:#A3BE8C;"> eslint</span><span style="color:#A3BE8C;"> --save-dev</span></span></code></pre></div><p>由于 ESLint 默认使用 <a href="https://github.com/eslint/espree" target="_blank" rel="noopener noreferrer">Espree</a> 进行语法解析，无法识别 TypeScript 的一些语法，故我们需要安装 <code>typescript-eslint-parser</code>，替代掉默认的解析器，别忘了同时安装 <code>typescript</code>:</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">npm</span><span style="color:#A3BE8C;"> install</span><span style="color:#A3BE8C;"> typescript</span><span style="color:#A3BE8C;"> typescript-eslint-parser</span><span style="color:#A3BE8C;"> --save-dev</span></span></code></pre></div><p>由于 <code>typescript-eslint-parser</code> 对一部分 ESLint 规则支持性不好，故我们需要安装 <code>eslint-plugin-typescript</code>，弥补一些支持性不好的规则。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">npm</span><span style="color:#A3BE8C;"> install</span><span style="color:#A3BE8C;"> eslint-plugin-typescript</span><span style="color:#A3BE8C;"> --save-dev</span></span></code></pre></div><h3 id="创建配置文件" tabindex="-1"><a class="header-anchor" href="#创建配置文件"><span>创建配置文件</span></a></h3><p>ESLint 需要一个配置文件来决定对哪些规则进行检查，配置文件的名称一般是 <code>.eslintrc.js</code> 或 <code>.eslintrc.json</code>。</p><p>当运行 ESLint 的时候检查一个文件的时候，它会首先尝试读取该文件的目录下的配置文件，然后再一级一级往上查找，将所找到的配置合并起来，作为当前被检查文件的配置。</p><p>我们在项目的根目录下创建一个 <code>.eslintrc.js</code>，内容如下:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#8FBCBB;">module</span><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">exports</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  parser</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">typescript-eslint-parser</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  plugins</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">typescript</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  rules</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外</span></span>
<span class="line"><span style="color:#88C0D0;">    eqeqeq</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> [</span></span>
<span class="line"><span style="color:#ECEFF4;">      &quot;</span><span style="color:#A3BE8C;">error</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">      &quot;</span><span style="color:#A3BE8C;">always</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">      {</span></span>
<span class="line"><span style="color:#88C0D0;">        null</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">ignore</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">      },</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    ]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#616E88;">    // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#A3BE8C;">typescript/class-name-casing</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">error</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上配置中，我们指定了两个规则，其中 <code>eqeqeq</code> 是 ESLint 原生的规则(它要求必须使用 <code>===</code> 或 <code>!==</code>，禁止使用 <code>==</code> 或 <code>!=</code>，与 <code>null</code> 比较时除外)，<code>typescript/class-name-casing</code> 是 <code>eslint-plugin-typescript</code> 为 ESLint 增加的规则(它要求类和接口的命名必须遵守帕斯卡命名法，比如 <code>PersianCat</code>)。</p><p>规则的取值一般是一个数组(上例中的 <code>eqeqeq</code>)，其中第一项是 <code>off</code>、<code>warn</code> 或 <code>error</code> 中的一个，表示关闭、警告和报错。后面的项都是该规则的其他配置。</p><p>如果没有其他配置的话，则可以将规则的取值简写为数组中的第一项(上例中的 <code>typescript/class-name-casing</code>)。</p><p>关闭、警告和报错的含义如下:</p><ul><li>关闭: 禁用此规则</li><li>警告: 代码检查时输出错误信息，但是不会影响到 exit code</li><li>报错: 发现错误时，不仅会输出错误信息，而且 exit code 将被设为 1(一般 exit code 不为 0 则表示执行出现错误)</li></ul><h3 id="检查一个-ts-文件" tabindex="-1"><a class="header-anchor" href="#检查一个-ts-文件"><span>检查一个 ts 文件</span></a></h3><p>创建了配置文件之后，我们来创建一个 ts 文件看看是否能用 ESLint 去检查它了。</p><p>创建一个新文件 <code>index.ts</code>，将以下内容复制进去:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">interface</span><span style="color:#8FBCBB;"> person</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  name</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;"> string</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  age</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;"> number</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9;"> tom</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;"> person</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Tom</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9;">  age</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;"> 25</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">tom</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">age</span><span style="color:#81A1C1;"> ==</span><span style="color:#B48EAD;"> 25</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9;">  console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">tom</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#81A1C1;"> +</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">is 25 years old.</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后执行以下命令:</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">./node_modules/.bin/eslint</span><span style="color:#A3BE8C;"> index.ts</span></span></code></pre></div><p>则会得到如下报错信息:</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">/path/to/index.ts</span></span>
<span class="line"><span style="color:#88C0D0;">   1:11</span><span style="color:#A3BE8C;">  error</span><span style="color:#A3BE8C;">  Interface</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">person</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> must</span><span style="color:#A3BE8C;"> be</span><span style="color:#A3BE8C;"> PascalCased</span><span style="color:#A3BE8C;">  typescript/class-name-casing</span></span>
<span class="line"><span style="color:#88C0D0;">  11:13</span><span style="color:#A3BE8C;">  error</span><span style="color:#A3BE8C;">  Expected</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">===</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> and</span><span style="color:#A3BE8C;"> instead</span><span style="color:#A3BE8C;"> saw</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">==</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">     eqeqeq</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">✖</span><span style="color:#B48EAD;"> 2</span><span style="color:#A3BE8C;"> problems</span><span style="color:#D8DEE9FF;"> (2 </span><span style="color:#A3BE8C;">errors,</span><span style="color:#B48EAD;"> 0</span><span style="color:#A3BE8C;"> warnings</span><span style="color:#D8DEE9FF;">)</span></span></code></pre></div><p>上面的结果显示，刚刚配置的两个规则都生效了: 接口 <code>person</code> 必须写成帕斯卡命名规范，<code>==</code> 必须写成 <code>===</code>。</p><p>需要注意的是，我们使用的是 <code>./node_modules/.bin/eslint</code>，而不是全局的 <code>eslint</code> 脚本，这是因为代码检查是项目的重要组成部分，所以我们一般会将它安装在当前项目中。</p><p>可是每次执行这么长一段脚本颇有不便，我们可以通过在 <code>package.json</code> 中添加一个 <code>script</code> 来创建一个 npm script 来简化这个步骤:</p><div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">scripts</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#8FBCBB;">eslint</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">eslint index.ts</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><p>这时只需执行 <code>npm run eslint</code> 即可。</p><h3 id="检查整个项目的-ts-文件" tabindex="-1"><a class="header-anchor" href="#检查整个项目的-ts-文件"><span>检查整个项目的 ts 文件</span></a></h3><p>我们的项目源文件一般是放在 <code>src</code> 目录下，所以需要将 <code>package.json</code> 中的 <code>eslint</code> 脚本改为对一个目录进行检查。由于 <code>eslint</code> 默认不会检查 <code>.ts</code> 后缀的文件，所以需要加上参数 <code>--ext .ts</code>:</p><div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">scripts</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#8FBCBB;">eslint</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">eslint src --ext .ts</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><p>此时执行 <code>npm run eslint</code> 即会检查 <code>src</code> 目录下的所有 <code>.ts</code> 后缀的文件。</p><h3 id="在-vs-code-中集成-eslint-检查" tabindex="-1"><a class="header-anchor" href="#在-vs-code-中集成-eslint-检查"><span>在 VS Code 中集成 ESLint 检查</span></a></h3><p>在编辑器中集成 ESLint 检查，可以在开发过程中就发现错误，极大的增加了开发效率。</p><p>要在 VS Code 中集成 ESLint 检查，我们需要先安装 ESLint 插件，点击「扩展」按钮，搜索 ESLint，然后安装即可。</p><p>VS Code 中的 ESLint 插件默认是不会检查 <code>.ts</code> 后缀的，需要在「文件 =&gt; 首选项 =&gt; 设置」中，添加以下配置:</p><div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">eslint.validate</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> [</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">javascript</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">javascriptreact</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">typescript</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><p>这时再打开一个 <code>.ts</code> 文件，将鼠标移到红色提示处，即可看到这样的报错信息了:</p><figure><img src="`+l+`" alt="VS Code ESLint 错误信息" tabindex="0" loading="lazy"><figcaption>VS Code ESLint 错误信息</figcaption></figure><h3 id="使用-alloyteam-的-eslint-配置" tabindex="-1"><a class="header-anchor" href="#使用-alloyteam-的-eslint-配置"><span>使用 AlloyTeam 的 ESLint 配置</span></a></h3><p>ESLint 原生的规则和 <code>eslint-plugin-typescript</code> 的规则太多了，而且原生的规则有一些在 TypeScript 中支持的不好，需要禁用掉。</p><p>这里我推荐使用 <a href="https://github.com/AlloyTeam/eslint-config-alloy#typescript" target="_blank" rel="noopener noreferrer">AlloyTeam ESLint 规则中的 TypeScript 版本</a>，它已经为我们提供了一套完善的配置规则。</p><p>安装:</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">npm</span><span style="color:#A3BE8C;"> install</span><span style="color:#A3BE8C;"> --save-dev</span><span style="color:#A3BE8C;"> eslint</span><span style="color:#A3BE8C;"> typescript</span><span style="color:#A3BE8C;"> typescript-eslint-parser</span><span style="color:#A3BE8C;"> eslint-plugin-typescript</span><span style="color:#A3BE8C;"> eslint-config-alloy</span></span></code></pre></div><p>在您的项目根目录下创建 <code>.eslintrc.js</code>，并将以下内容复制到文件中:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#8FBCBB;">module</span><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">exports</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  extends</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">eslint-config-alloy/typescript</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  globals</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // 这里填入您的项目需要的全局变量</span></span>
<span class="line"><span style="color:#616E88;">    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如:</span></span>
<span class="line"><span style="color:#616E88;">    //</span></span>
<span class="line"><span style="color:#616E88;">    // jQuery: false,</span></span>
<span class="line"><span style="color:#616E88;">    // $: false</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  rules</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // 这里填入您的项目需要的个性化配置，比如:</span></span>
<span class="line"><span style="color:#616E88;">    //</span></span>
<span class="line"><span style="color:#616E88;">    // // @fixable 一个缩进必须用两个空格替代</span></span>
<span class="line"><span style="color:#616E88;">    // &#39;indent&#39;: [</span></span>
<span class="line"><span style="color:#616E88;">    //     &#39;error&#39;,</span></span>
<span class="line"><span style="color:#616E88;">    //     2,</span></span>
<span class="line"><span style="color:#616E88;">    //     {</span></span>
<span class="line"><span style="color:#616E88;">    //         SwitchCase: 1,</span></span>
<span class="line"><span style="color:#616E88;">    //         flatTernaryExpressions: true</span></span>
<span class="line"><span style="color:#616E88;">    //     }</span></span>
<span class="line"><span style="color:#616E88;">    // ]</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-eslint-检查-tsx-文件" tabindex="-1"><a class="header-anchor" href="#使用-eslint-检查-tsx-文件"><span>使用 ESLint 检查 tsx 文件</span></a></h3><p>如果需要同时支持对 tsx 文件的检查，则需要对以上步骤做一些调整:</p><h4 id="安装-eslint-plugin-react" tabindex="-1"><a class="header-anchor" href="#安装-eslint-plugin-react"><span>安装 <code>eslint-plugin-react</code></span></a></h4><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">npm</span><span style="color:#A3BE8C;"> install</span><span style="color:#A3BE8C;"> --save-dev</span><span style="color:#A3BE8C;"> eslint-plugin-react</span></span></code></pre></div><h4 id="package-json-中的-scripts-eslint-添加-tsx-后缀" tabindex="-1"><a class="header-anchor" href="#package-json-中的-scripts-eslint-添加-tsx-后缀"><span>package.json 中的 <code>scripts.eslint</code> 添加 <code>.tsx</code> 后缀</span></a></h4><div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">scripts</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#8FBCBB;">eslint</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">eslint src --ext .ts,.tsx</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><h4 id="vs-code-的配置中新增-typescriptreact-检查" tabindex="-1"><a class="header-anchor" href="#vs-code-的配置中新增-typescriptreact-检查"><span>VS Code 的配置中新增 typescriptreact 检查</span></a></h4><div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">eslint.validate</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> [</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#A3BE8C;">javascript</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#A3BE8C;">javascriptreact</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#A3BE8C;">typescript</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#A3BE8C;">typescriptreact</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">  ]</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><h4 id="使用-alloyteam-eslint-规则中的-typescript-react-版本" tabindex="-1"><a class="header-anchor" href="#使用-alloyteam-eslint-规则中的-typescript-react-版本"><span>使用 AlloyTeam ESLint 规则中的 TypeScript React 版本</span></a></h4><p><a href="https://github.com/AlloyTeam/eslint-config-alloy#typescript-react" target="_blank" rel="noopener noreferrer">AlloyTeam ESLint 规则中的 TypeScript React 版本</a></p><h2 id="troubleshootings" tabindex="-1"><a class="header-anchor" href="#troubleshootings"><span>Troubleshootings</span></a></h2><h3 id="cannot-find-module-typescript-eslint-parser" tabindex="-1"><a class="header-anchor" href="#cannot-find-module-typescript-eslint-parser"><span>Cannot find module typescript-eslint-parser</span></a></h3><p>您运行的是全局的 eslint，需要改为运行 <code>./node_modules/.bin/eslint</code>。</p><h3 id="cannot-read-property-type-of-null" tabindex="-1"><a class="header-anchor" href="#cannot-read-property-type-of-null"><span>cannot read property type of null</span></a></h3><p>需要关闭 <code>eslint-plugin-react</code> 中的规则 <code>react/jsx-indent</code>。</p><p>如果仍然报错，多半是因为某些规则需要被关闭，可以使用「二分排错法」检查是哪个规则造成了错误。也欢迎<a href="https://github.com/AlloyTeam/eslint-config-alloy/issues/new" target="_blank" rel="noopener noreferrer">给 eslint-config-alloy 提 issue</a>。</p><h3 id="vs-code-没有显示出-eslint-的报错" tabindex="-1"><a class="header-anchor" href="#vs-code-没有显示出-eslint-的报错"><span>VS Code 没有显示出 ESLint 的报错</span></a></h3><ol><li>检查「文件 =&gt; 首选项 =&gt; 设置」中有没有配置正确</li><li>检查必要的 npm 包有没有安装</li><li>检查 <code>.eslintrc.js</code> 有没有配置</li><li>检查文件是不是在 <code>.eslintignore</code> 中</li></ol><p>如果以上步骤都不奏效，则可以在「文件 =&gt; 首选项 =&gt; 设置」中配置 <code>&quot;eslint.trace.server&quot;: &quot;messages&quot;</code>，按 <code>Ctrl</code>+<code>Shift</code>+<code>U</code> 打开输出面板，然后选择 ESLint 输出，查看具体错误。</p><figure><img src="`+o+`" alt="VS Code 的 ESLint 输出" tabindex="0" loading="lazy"><figcaption>VS Code 的 ESLint 输出</figcaption></figure><h3 id="为什么-eslint-无法检查出使用了未定义的变量-no-undef-规则为什么被关闭了" tabindex="-1"><a class="header-anchor" href="#为什么-eslint-无法检查出使用了未定义的变量-no-undef-规则为什么被关闭了"><span>为什么 ESLint 无法检查出使用了未定义的变量(<code>no-undef</code> 规则为什么被关闭了)</span></a></h3><p>因为 <code>typescript-eslint-parser</code> <a href="https://github.com/eslint/typescript-eslint-parser/issues/416" target="_blank" rel="noopener noreferrer">无法支持 <code>no-undef</code> 规则</a>。它针对正确的接口定义会报错。</p><p>所以我们一般会关闭 <code>no-undef</code> 规则。</p><h3 id="为什么有些定义了的变量-比如使用-enum-定义的变量-未使用-eslint-却没有报错" tabindex="-1"><a class="header-anchor" href="#为什么有些定义了的变量-比如使用-enum-定义的变量-未使用-eslint-却没有报错"><span>为什么有些定义了的变量(比如使用 <code>enum</code> 定义的变量)未使用，ESLint 却没有报错</span></a></h3><p>因为无法支持这种变量定义的检查。建议在 <code>tsconfig.json</code> 中添加以下配置，使 <code>tsc</code> 编译过程能够检查出定义了未使用的变量:</p><div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span><span style="color:#8FBCBB;">compilerOptions</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#8FBCBB;">noUnusedLocals</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> true</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#8FBCBB;">noUnusedParameters</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> true</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><h3 id="启用了-nounusedparameters-之后-只使用了第二个参数-但是又必须传入第一个参数-这就会报错了" tabindex="-1"><a class="header-anchor" href="#启用了-nounusedparameters-之后-只使用了第二个参数-但是又必须传入第一个参数-这就会报错了"><span>启用了 noUnusedParameters 之后，只使用了第二个参数，但是又必须传入第一个参数，这就会报错了</span></a></h3><p>第一个参数以下划线开头即可，参考 <a href="https://github.com/Microsoft/TypeScript/issues/9458" target="_blank" rel="noopener noreferrer">https://github.com/Microsoft/TypeScript/issues/9458</a></p>`,93),c=[t];function r(i,d){return n(),e("div",null,c)}const F=s(p,[["render",r],["__file","lint.html.vue"]]),u=JSON.parse('{"path":"/code/language/typescript/engineering/lint.html","title":"代码检查","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"代码检查","icon":"style","category":"TypeScript","description":"TypeScript 的代码检查应当使用 ESLint + typescript-eslint-parser。 什么是代码检查 代码检查主要是用来发现代码错误、统一代码风格。 在 JavaScript 项目中，我们一般使用 ESLint 来进行代码检查。它通过插件化的特性极大的丰富了适用范围，搭配 typescript-eslint-parser 之后...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/typescript/engineering/lint.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"代码检查"}],["meta",{"property":"og:description","content":"TypeScript 的代码检查应当使用 ESLint + typescript-eslint-parser。 什么是代码检查 代码检查主要是用来发现代码错误、统一代码风格。 在 JavaScript 项目中，我们一般使用 ESLint 来进行代码检查。它通过插件化的特性极大的丰富了适用范围，搭配 typescript-eslint-parser 之后..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码检查\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"什么是代码检查","slug":"什么是代码检查","link":"#什么是代码检查","children":[]},{"level":2,"title":"为什么需要代码检查","slug":"为什么需要代码检查","link":"#为什么需要代码检查","children":[]},{"level":2,"title":"在 TypeScript 中使用 ESLint","slug":"在-typescript-中使用-eslint","link":"#在-typescript-中使用-eslint","children":[{"level":3,"title":"安装 ESLint","slug":"安装-eslint","link":"#安装-eslint","children":[]},{"level":3,"title":"创建配置文件","slug":"创建配置文件","link":"#创建配置文件","children":[]},{"level":3,"title":"检查一个 ts 文件","slug":"检查一个-ts-文件","link":"#检查一个-ts-文件","children":[]},{"level":3,"title":"检查整个项目的 ts 文件","slug":"检查整个项目的-ts-文件","link":"#检查整个项目的-ts-文件","children":[]},{"level":3,"title":"在 VS Code 中集成 ESLint 检查","slug":"在-vs-code-中集成-eslint-检查","link":"#在-vs-code-中集成-eslint-检查","children":[]},{"level":3,"title":"使用 AlloyTeam 的 ESLint 配置","slug":"使用-alloyteam-的-eslint-配置","link":"#使用-alloyteam-的-eslint-配置","children":[]},{"level":3,"title":"使用 ESLint 检查 tsx 文件","slug":"使用-eslint-检查-tsx-文件","link":"#使用-eslint-检查-tsx-文件","children":[]}]},{"level":2,"title":"Troubleshootings","slug":"troubleshootings","link":"#troubleshootings","children":[{"level":3,"title":"Cannot find module typescript-eslint-parser","slug":"cannot-find-module-typescript-eslint-parser","link":"#cannot-find-module-typescript-eslint-parser","children":[]},{"level":3,"title":"cannot read property type of null","slug":"cannot-read-property-type-of-null","link":"#cannot-read-property-type-of-null","children":[]},{"level":3,"title":"VS Code 没有显示出 ESLint 的报错","slug":"vs-code-没有显示出-eslint-的报错","link":"#vs-code-没有显示出-eslint-的报错","children":[]},{"level":3,"title":"为什么 ESLint 无法检查出使用了未定义的变量(no-undef 规则为什么被关闭了)","slug":"为什么-eslint-无法检查出使用了未定义的变量-no-undef-规则为什么被关闭了","link":"#为什么-eslint-无法检查出使用了未定义的变量-no-undef-规则为什么被关闭了","children":[]},{"level":3,"title":"为什么有些定义了的变量(比如使用 enum 定义的变量)未使用，ESLint 却没有报错","slug":"为什么有些定义了的变量-比如使用-enum-定义的变量-未使用-eslint-却没有报错","link":"#为什么有些定义了的变量-比如使用-enum-定义的变量-未使用-eslint-却没有报错","children":[]},{"level":3,"title":"启用了 noUnusedParameters 之后，只使用了第二个参数，但是又必须传入第一个参数，这就会报错了","slug":"启用了-nounusedparameters-之后-只使用了第二个参数-但是又必须传入第一个参数-这就会报错了","link":"#启用了-nounusedparameters-之后-只使用了第二个参数-但是又必须传入第一个参数-这就会报错了","children":[]}]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":8.57,"words":2572},"filePathRelative":"code/language/typescript/engineering/lint.md","localizedDate":"2020年5月4日","excerpt":"","autoDesc":true}');export{F as comp,u as data};
