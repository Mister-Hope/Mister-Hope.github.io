import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,b as a}from"./app-r406UCC8.js";const t={},h=a(`<h1 id="命名管道" tabindex="-1"><a class="header-anchor" href="#命名管道"><span>命名管道</span></a></h1><p>在大多数类似 Unix 的操作系统中，有可能创建一种特殊类型的文件，叫做命名管道。命名管道用来在 两个进程之间建立连接，也可以像其它类型的文件一样使用。</p><p>命令管道的行为类似于文件，但实际上形成了先入先出(FIFO)的缓冲。和普通(未命令的)管道一样， 数据从一端进入，然后从另一端出现。通过命令管道，有可能像这样设置一些东西:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">process1</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> named_pipe</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>和</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">process2</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> named_pipe</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>表现出来就像这样:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">process1</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> process2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="设置一个命名管道" tabindex="-1"><a class="header-anchor" href="#设置一个命名管道"><span>设置一个命名管道</span></a></h2><p>使用 mkfifo 命令能够创建命令管道:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mkfifo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pipe1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -l</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pipe1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">prw-r--r--</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> me</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> me</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 2009-07-17</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 06:41</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pipe1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们使用 mkfifo 创建了一个名为 pipe1 的命名管道。使用 ls 命令，我们查看这个文件， 看到位于属性字段的第一个字母是 “p”，表明它是一个命名管道。</p><h2 id="使用命名管道" tabindex="-1"><a class="header-anchor" href="#使用命名管道"><span>使用命名管道</span></a></h2><p>为了演示命名管道是如何工作的，我们将需要两个终端窗口(或用两个虚拟控制台代替)。在第一个终端中，我们输入一个简单命令，并把命令的输出重定向到命名管道:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -l</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pipe1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们按下 Enter 按键之后，命令将会挂起。这是因为在管道的另一端没有任何接受数据。当这种现象发生的时候， 据说是管道阻塞了。一旦我们绑定一个进程到管道的另一端，该进程开始从管道中读取输入的时候，这种情况会消失。使用第二个终端窗口，我们输入这个命令。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pipe1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后产自第一个终端窗口的目录列表出现在第二个终端中，并作为来自 cat 命令的输出。在第一个终端 窗口中的 ls 命令一旦它不再阻塞，会成功地结束。</p>`,18),l=[h];function n(r,p){return e(),s("div",null,l)}const o=i(t,[["render",n],["__file","named-pipe.html.vue"]]),c=JSON.parse('{"path":"/linux/bash/archives/named-pipe.html","title":"命名管道","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","description":"命名管道 在大多数类似 Unix 的操作系统中，有可能创建一种特殊类型的文件，叫做命名管道。命名管道用来在 两个进程之间建立连接，也可以像其它类型的文件一样使用。 命令管道的行为类似于文件，但实际上形成了先入先出(FIFO)的缓冲。和普通(未命令的)管道一样， 数据从一端进入，然后从另一端出现。通过命令管道，有可能像这样设置一些东西: 和 表现出来就像...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/archives/named-pipe.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"命名管道"}],["meta",{"property":"og:description","content":"命名管道 在大多数类似 Unix 的操作系统中，有可能创建一种特殊类型的文件，叫做命名管道。命名管道用来在 两个进程之间建立连接，也可以像其它类型的文件一样使用。 命令管道的行为类似于文件，但实际上形成了先入先出(FIFO)的缓冲。和普通(未命令的)管道一样， 数据从一端进入，然后从另一端出现。通过命令管道，有可能像这样设置一些东西: 和 表现出来就像..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T05:21:25.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T05:21:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命名管道\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T05:21:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"设置一个命名管道","slug":"设置一个命名管道","link":"#设置一个命名管道","children":[]},{"level":2,"title":"使用命名管道","slug":"使用命名管道","link":"#使用命名管道","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1712467285000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.71,"words":513},"filePathRelative":"linux/bash/archives/named-pipe.md","localizedDate":"2020年6月4日","excerpt":"","autoDesc":true}');export{o as comp,c as data};
