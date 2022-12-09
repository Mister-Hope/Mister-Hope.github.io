"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[14779],{1328:(n,a,s)=>{s.r(a),s.d(a,{default:()=>i});var e=s(16492);const o=(0,e._)("p",null,"Nginx 是一个高性能的 HTTP 和反向代理服务器，也是一个 IMAP / POP3 / SMTP 代理服务器。其特点是占有内存少，并发能力强，稳定性高，并且 Nginx 也拥有友好灵活的配置。",-1),t=(0,e.uE)('<h2 id="启动-停止和重新加载配置" tabindex="-1"><a class="header-anchor" href="#启动-停止和重新加载配置" aria-hidden="true">#</a> 启动，停止和重新加载配置</h2><p>要启动 nginx，请运行可执行文件。一旦启动 nginx，就可以通过使用 <code>-s</code> 参数调用可执行文件来对其进行控制。使用以下语法:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> signal\n</code></pre></div><p>其中 <code>signal</code> 可能是以下之一:</p><ul><li>stop - 快速关机</li><li>quit — 正常关机</li><li>reload — 重新加载配置文件</li><li>reopen — 重新打开日志文件</li></ul><h2 id="配置文件的结构" tabindex="-1"><a class="header-anchor" href="#配置文件的结构" aria-hidden="true">#</a> 配置文件的结构</h2><p>Nginx 由受配置文件中指定的指令控制的模块组成。指令分为简单指令和块指令。一个简单的指令由名称和参数组成，这些名称和参数之间用空格分隔，并以分号(<code>;</code>)结尾。块指令的结构与简单指令的结构相同，但是它不以分号结尾，而是带有一组用括号 (<code>{</code> 和 <code>}</code>) 括起来的附加指令。如果一个块指令在括号内可以有其他指令，则称为 context (例如: <code>events</code>, <code>http</code>, <code>server</code> 和 <code>location</code>)。</p><p>放置在任何 context 外部的配置文件中的指令都被视为在 main context 中。<code>events</code> 和 <code>http</code> 指令位于 <code>main</code> context 中，<code>server</code> 位于 <code>http</code> 中, 并且 <code>location</code> 在 <code>server</code> 中</p><p><code>#</code> 号后的其余行被视为注释。</p><h2 id="提供静态内容" tabindex="-1"><a class="header-anchor" href="#提供静态内容" aria-hidden="true">#</a> 提供静态内容</h2><p>Web 服务器的一项重要任务是分发文件(例如图像或静态 HTML 页面)。您将实现一个示例，其中将根据请求从不同的本地目录提供文件: <code>/data/www</code> (可能包含 HTML 文件)和 <code>/data/images</code>(包含图像)。这将需要编辑配置文件，并在带有两个位置块的 http 块内设置服务器块。</p><p>首先，创建 <code>/data/www</code> 目录，并将包含任何文本内容的 <code>index.html</code> 文件放入其中，并创建 <code>/data/images</code> 目录并将一些图像放入其中。</p><p>接下来，打开配置文件。默认配置文件已经包含了服务器块的几个示例，大部分已被注释掉。现在，注释掉所有这些块并启动一个新的服务器块:</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>\n  <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>通常，配置文件可以包括几个服务器块，这些服务器块通过它们侦听的端口和服务器名称来区分。一旦 nginx 决定了哪个服务器处理请求，它就会根据服务器块内定义的 location 指令的参数测试请求标头中指定的 URI。</p><p>将以下位置块添加到服务器块:</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n  <span class="token directive"><span class="token keyword">root</span> /data/www</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>与请求中的 URI 相比，此位置块指定 “<code>/</code>” 前缀。对于匹配的请求，URI 将被添加到 root 指令中指定的路径，即 <code>/data/www</code>，以形成本地文件系统上所请求文件的路径。如果有多个匹配的位置块，nginx 将选择前缀最长的位置块。上面的位置块提供了最短的前缀，长度为 1，因此，只有在所有其他位置块均未提供匹配项时，才会使用该块。</p><p>接下来，添加第二个位置块:</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /images/</span> <span class="token punctuation">{</span>\n  <span class="token directive"><span class="token keyword">root</span> /data</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>这将匹配以 <code>/images/</code> 开头的请求(位置 <code>/</code> 也匹配此类请求，但前缀较短)。</p><p>服务器块的最终配置应如下所示:</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">root</span> /data/www</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token directive"><span class="token keyword">location</span> /images/</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">root</span> /data</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>这已经是服务器的工作配置，可以在标准端口 <code>80</code> 上侦听，并且可以在本地计算机上的 <code>http://localhost/</code> 上访问。响应以 <code>/images/</code> 开头的 URI 请求，服务器将从 <code>/data/images</code> 目录中发送文件。例如，为响应 <code>http://localhost/images/example.png</code> 请求，nginx 将发送文件 <code>/data/images/example.png</code>。如果该文件不存在，nginx 将发送一个注明 404 错误的响应。URI 不以 <code>/images/</code> 开头的请求将被映射到 <code>/data/www</code> 目录。例如，nginx 会响应 <code>http://localhost/some/example.html</code> 请求发送 <code>/data/www/some/example.html</code> 文件。</p><p>要应用新配置，请启动 nginx (如果尚未启动)，或通过执行以下命令向 nginx 的主进程发送 <code>reload</code> 信号:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reload\n</code></pre></div><p>如果某些东西无法按预期工作，则可以尝试在目录 <code>/usr/local/nginx/logs</code> 或目录 <code>/var/log/nginx</code> 中的 access.log 和 error.log 文件中找出原因。。</p><h2 id="设置简单的代理服务器" tabindex="-1"><a class="header-anchor" href="#设置简单的代理服务器" aria-hidden="true">#</a> 设置简单的代理服务器</h2><p>Nginx 的一种常用用法是将其设置为代理服务器，这意味着服务器可以接收请求，将请求传递给代理服务器，从请求中检索响应并将它们发送给客户端。</p><p>我们将配置一个基本的代理服务器，该服务器为图像请求和本地目录中的文件提供服务，并将所有其他请求发送到代理服务器。在此示例中，两个服务器都将在单个 nginx 实例上定义。</p><p>首先，通过向 nginx 的配置文件中添加另一个 <code>server</code> 块来定义代理服务器，其内容如下:</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">8080</span></span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">root</span> /data/up1</span><span class="token punctuation">;</span>\n\n  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>这将是一个简单的服务器，它在端口 8080 上侦听 (以前，自从使用标准端口 80 以来，未指定 listen 指令) 并将所有请求映射到本地文件系统的 <code>/data/up1</code> 目录中。创建此目录，并将 <code>index.html</code> 文件放入其中。请注意，根指令位于服务器上下文中。当选择用于服务请求的位置块不包括自己的根指令时，将使用这种根指令。</p><p>接下来，使用上一部分中的服务器配置并对其进行修改以使其成为代理服务器配置。在第一个位置块中，将 <code>proxy_pass</code> 指令与参数中指定的代理服务器的协议，名称和端口放在一起 (在本例中为 <code>http://localhost:8080</code> ):</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8080</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token directive"><span class="token keyword">location</span> /images/</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">root</span> /data</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>我们将修改第二个 location 块，该位置块当前将带有 <code>/images/</code> 前缀的请求映射到 <code>/data/images</code> 目录下的文件，以使其与具有典型文件扩展名的图像的请求相匹配。修改后的位置块如下所示:</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> ~ \\.(gif|jpg|png)$</span> <span class="token punctuation">{</span>\n  <span class="token directive"><span class="token keyword">root</span> /data/images</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>该参数是一个正则表达式，它匹配以 <code>.gif</code>，<code>.jpg</code> 或 <code>.png</code> 结尾的所有 URI。正则表达式应以 <code>~</code> 开头。相应的请求将被映射到 <code>/ data/images</code> 目录。</p><p>当 nginx 选择一个 <code>location</code> 块来服务请求时，它首先检查指定前缀的 <code>location</code> 指令，记住带有最长前缀的 <code>location</code>，然后检查正则表达式。如果存在与正则表达式匹配的内容，nginx 会选择该 “<code>location</code>”，否则，它将选择之前记住的位置。</p><p>代理服务器的最终配置如下所示:</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8080/</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token directive"><span class="token keyword">location</span> ~ \\.(gif|jpg|png)$</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">root</span> /data/images</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>该服务器将过滤以 <code>.gif</code>，<code>.jpg</code> 或 <code>.png</code> 结尾的请求，并将它们映射到目录 <code>/data/images</code>(通过将 URI 添加到根指令的参数)，并将所有其他请求传递给上面配置的代理服务器。</p><p>要应用新配置，请按照前面几节的说明将重载信号发送到 nginx。</p><p>还有许多其他指令可用于进一步配置代理连接。</p><h2 id="设置-fastcgi-代理" tabindex="-1"><a class="header-anchor" href="#设置-fastcgi-代理" aria-hidden="true">#</a> 设置 FastCGI 代理</h2><p>Nginx 可用于将请求路由到 FastCGI 服务器，该服务器运行使用各种框架和编程语言 (例如 PHP) 构建的应用程序。</p><p>与 FastCGI 服务器一起使用的最基本的 Nginx 配置包括使用 <code>fastcgi_pass</code> 指令而不是 <code>proxy_pass</code> 指令和 <code>fastcgi_param</code> 指令来设置传递给 FastCGI 服务器的参数。假设 FastCGI 服务器可以在 <code>localhost:9000</code> 上访问。以上一节中的代理配置为基础，用 <code>fastcgi_pass</code> 指令替换 <code>proxy_pass</code> 指令，并将参数更改为 <code>localhost:9000</code>。在 PHP 中， <code>SCRIPT_FILENAME</code> 参数用于确定脚本名称，而 <code>QUERY_STRING</code> 参数用于传递请求参数。配置的结果为:</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">fastcgi_pass</span>  localhost:9000</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">fastcgi_param</span> SCRIPT_FILENAME <span class="token variable">$document_root</span><span class="token variable">$fastcgi_script_name</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">fastcgi_param</span> QUERY_STRING    <span class="token variable">$query_string</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token directive"><span class="token keyword">location</span> ~ \\.(gif|jpg|png)$</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">root</span> /data/images</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这将设置一个服务器，该服务器将通过 FastCGI 协议将除静态图像请求以外的所有请求路由到运行在 <code>localhost:9000</code> 上的代理服务器。</p><h2 id="官方文档" tabindex="-1"><a class="header-anchor" href="#官方文档" aria-hidden="true">#</a> 官方文档</h2>',50),c={href:"https://docs.nginx.com/nginx/admin-guide/",target:"_blank",rel:"noopener noreferrer"},p={},i=(0,s(11164).Z)(p,[["render",function(n,a){const s=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[o,(0,e.kq)(" more "),t,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",c,[(0,e.Uk)("点击此处"),(0,e.Wm)(s)])])])])}]])},11164:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}},67680:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e=JSON.parse('{"key":"v-6eec2164","path":"/software/nginx.html","title":"Nginx","lang":"zh-CN","frontmatter":{"title":"Nginx","icon":"nginx","date":"2019-12-13T00:00:00.000Z","category":["服务器"],"description":"Nginx 是一个高性能的 HTTP 和反向代理服务器，也是一个 IMAP / POP3 / SMTP 代理服务器。其特点是占有内存少，并发能力强，稳定性高，并且 Nginx 也拥有友好灵活的配置。","head":[["meta",{"property":"og:url","content":"https://mrhope.site/software/nginx.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Nginx"}],["meta",{"property":"og:description","content":"Nginx 是一个高性能的 HTTP 和反向代理服务器，也是一个 IMAP / POP3 / SMTP 代理服务器。其特点是占有内存少，并发能力强，稳定性高，并且 Nginx 也拥有友好灵活的配置。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-12-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"<p>Nginx 是一个高性能的 HTTP 和反向代理服务器，也是一个 IMAP / POP3 / SMTP 代理服务器。其特点是占有内存少，并发能力强，稳定性高，并且 Nginx 也拥有友好灵活的配置。</p>\\n","headers":[{"level":2,"title":"启动，停止和重新加载配置","slug":"启动-停止和重新加载配置","link":"#启动-停止和重新加载配置","children":[]},{"level":2,"title":"配置文件的结构","slug":"配置文件的结构","link":"#配置文件的结构","children":[]},{"level":2,"title":"提供静态内容","slug":"提供静态内容","link":"#提供静态内容","children":[]},{"level":2,"title":"设置简单的代理服务器","slug":"设置简单的代理服务器","link":"#设置简单的代理服务器","children":[]},{"level":2,"title":"设置 FastCGI 代理","slug":"设置-fastcgi-代理","link":"#设置-fastcgi-代理","children":[]},{"level":2,"title":"官方文档","slug":"官方文档","link":"#官方文档","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5}]},"readingTime":{"minutes":6.99,"words":2097},"localizedDate":"2019年12月13日","filePathRelative":"software/nginx.md","autoDesc":true}')}}]);