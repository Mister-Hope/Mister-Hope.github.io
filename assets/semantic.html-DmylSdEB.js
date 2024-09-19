import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as a,o as c}from"./app-BGIrljxn.js";const i={};function n(l,e){return c(),o("div",null,e[0]||(e[0]=[a(`<h2 id="semantic" tabindex="-1"><a class="header-anchor" href="#semantic"><span>Semantic</span></a></h2><p>对于一个大型项目，几千个 commit 是很常见的，这些 commit 部分是项目维护者提交的 commit，部分是一些热心的开发者通过 PR 贡献的。</p><p>无论是对于项目维护者，还是想要贡献代码的热心开发者来说，一个简洁明了的 commit 描述都是必不可少的。也就是说我们需要用尽可能简短的备注信息，备注每一个 commit 的作用，以便大家查看。所以我们需要一种规范的，语义化的备注格式，很快由知名项目牵头，全球接收并统一了一种语义化的备注格式，这就是 semantic 规范的来源。</p><h2 id="优势" tabindex="-1"><a class="header-anchor" href="#优势"><span>优势</span></a></h2><p>当一个仓库所有的 commit 信息都是用标准的 semantic 格式时，用户可以很方便的理解每一个 commit 的作用。</p><p>同时，semantic 支持直接将某个提交或 PR 与特定 issue 链接，并自动关闭或引用这些 issue。</p><p>通过一些第三方工具，大家可以基于这些备注信息进行过滤查找，更新日志生成等操作。</p><h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>格式</span></a></h2><div class="language-text" data-highlighter="shiki" data-ext="text" data-title="text" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;footer&gt;</span></span></code></pre></div><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header"><span>header</span></a></h3><p>第一行被称为 <code>header</code>，它必须只有一行，包括三个字段: <code>&lt;type&gt;</code>(必需)、<code>&lt;scope&gt;</code>(可选)和 <code>&lt;subject&gt;</code>(必需)</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3><p>commit 的类型。</p><p>规范中规定了如下类型:</p><ul><li><code>feat</code>: feature, 新增功能</li><li><code>fix</code> : bug fix, 修复 bug</li><li><code>docs</code>: documentation, 仅仅修改了文档，如 <code>README.md</code></li><li><code>style</code>: style, 仅仅是对格式进行修改，如逗号、缩进、空格等，不改变代码逻辑</li><li><code>refactor</code>: refactor, 代码重构，一般更改了源文件或测试文件，但没有新增功能或修复 bug</li><li><code>perf</code>: performance, 优化相关，如提升性能、用户体验等</li><li><code>test</code>: test, 测试用例，包括单元测试，集成测试</li><li><code>chore</code>: chore, 对于库的其他内容的改变，一般不涉及到源文件或测试文件，比如更改 CI 设置，提升仓库以来等</li><li><code>revert</code>: 版本回滚</li></ul><h3 id="scope" tabindex="-1"><a class="header-anchor" href="#scope"><span>scope</span></a></h3><p>用于说明 commit 影响的范围，比如: <code>views</code> , <code>component</code>, <code>utils</code>, <code>test</code>。这个是由项目的内容与结构决定的。</p><h3 id="subject" tabindex="-1"><a class="header-anchor" href="#subject"><span>subject</span></a></h3><p>commit 目的的简短描述，最好小于 50 字符，一般不超过 65 个字符，最长不超过 80 字符。</p><p>当 subject 限制的字符数无法详细说明此 commit 的变动时，将 commit 的具体变动放置在 body 中</p><h3 id="body" tabindex="-1"><a class="header-anchor" href="#body"><span>body</span></a></h3><p>对本次 commit 修改内容的具体描述，可以分为多行。<code>body</code> 是可选的，而且 <code>body</code> 可以有多行。</p><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer"><span>footer</span></a></h3><p>可选的，前面有一空行。可以添加一些备注，一般放置 <code>BREAKING CHANGE</code>(一些破坏性的变动) 或修复的 bug(涉及的 issue)的链接。</p><h2 id="semantic-commit-与-changelog-生成" tabindex="-1"><a class="header-anchor" href="#semantic-commit-与-changelog-生成"><span>Semantic commit 与 Changelog 生成</span></a></h2><p>不同语言环境都有很多种工具来帮助您创建一个 semantic commit 或者自动生成 changelog。</p><div class="hint-container tip"><p class="hint-container-title">案例</p><p>Node.js 环境下可以使用:</p><ul><li><p><a href="https://github.com/commitizen/cz-conventional-changelog" target="_blank" rel="noopener noreferrer"><code>cz-conventional-changelog</code></a> 提供 <code>git cz</code> 命令辅助创建 semantic commit。</p></li><li><p><a href="https://github.com/conventional-changelog/conventional-changelog" target="_blank" rel="noopener noreferrer"><code>conventional-changelog-cli</code></a> 来快速生成更新日志，如 <a href="https://github.com/Mister-Hope/vuepress-theme-hope/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer">vuepress-theme-hope 的更改日志</a></p></li></ul></div>`,27)]))}const p=t(i,[["render",n],["__file","semantic.html.vue"]]),m=JSON.parse('{"path":"/code/github/semantic.html","title":"语义化提交","lang":"zh-CN","frontmatter":{"date":"2021-01-18T00:00:00.000Z","title":"语义化提交","icon":"semantic","category":"GitHub","order":3,"description":"Semantic 对于一个大型项目，几千个 commit 是很常见的，这些 commit 部分是项目维护者提交的 commit，部分是一些热心的开发者通过 PR 贡献的。 无论是对于项目维护者，还是想要贡献代码的热心开发者来说，一个简洁明了的 commit 描述都是必不可少的。也就是说我们需要用尽可能简短的备注信息，备注每一个 commit 的作用，以...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/github/semantic.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"语义化提交"}],["meta",{"property":"og:description","content":"Semantic 对于一个大型项目，几千个 commit 是很常见的，这些 commit 部分是项目维护者提交的 commit，部分是一些热心的开发者通过 PR 贡献的。 无论是对于项目维护者，还是想要贡献代码的热心开发者来说，一个简洁明了的 commit 描述都是必不可少的。也就是说我们需要用尽可能简短的备注信息，备注每一个 commit 的作用，以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2021-01-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"语义化提交\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"Semantic","slug":"semantic","link":"#semantic","children":[]},{"level":2,"title":"优势","slug":"优势","link":"#优势","children":[]},{"level":2,"title":"格式","slug":"格式","link":"#格式","children":[{"level":3,"title":"header","slug":"header","link":"#header","children":[]},{"level":3,"title":"type","slug":"type","link":"#type","children":[]},{"level":3,"title":"scope","slug":"scope","link":"#scope","children":[]},{"level":3,"title":"subject","slug":"subject","link":"#subject","children":[]},{"level":3,"title":"body","slug":"body","link":"#body","children":[]},{"level":3,"title":"footer","slug":"footer","link":"#footer","children":[]}]},{"level":2,"title":"Semantic commit 与 Changelog 生成","slug":"semantic-commit-与-changelog-生成","link":"#semantic-commit-与-changelog-生成","children":[]}],"git":{"createdTime":1606721764000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":2.62,"words":787},"filePathRelative":"code/github/semantic.md","localizedDate":"2021年1月18日","excerpt":"","autoDesc":true}');export{p as comp,m as data};
