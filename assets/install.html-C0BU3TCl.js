import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as e,b as n}from"./app-DHOHoluL.js";const a="/assets/cmd-Uu_Efc4I.png",p={},l=n('<p>要开始学习 Python 编程，首先就得把 Python 安装到您的电脑里。安装后，您会得到 Python 解释器(就是负责运行 Python 程序的)，一个命令行交互环境，还有一个简单的集成开发环境。本节将指导您如何安装 Python。</p><h2 id="在-mac-上安装-python" tabindex="-1"><a class="header-anchor" href="#在-mac-上安装-python"><span>在 Mac 上安装 Python</span></a></h2><p>如果您正在使用 Mac，系统是 OS X&gt;=10.9，那么系统自带的 Python 版本是 2.7。要安装最新的 Python 3.9，有两个方法:</p><p>方法一:从 Python 官网下载 Python 3.9 的安装程序，下载后双击运行并安装；</p><p>方法二:如果安装了 Homebrew，直接通过命令 brew install python3 安装即可。</p><h2 id="在-linux-上安装-python" tabindex="-1"><a class="header-anchor" href="#在-linux-上安装-python"><span>在 Linux 上安装 Python</span></a></h2><p>用 Linux 的人自行安装 Python 3 应该没有问题，否则，请换回 Windows 系统。</p><h2 id="在-windows-上安装-python" tabindex="-1"><a class="header-anchor" href="#在-windows-上安装-python"><span>在 Windows 上安装 Python</span></a></h2><p>首先，从 Python 的官方网站下载 Python 3.9 对应的 64 位安装程序，然后，运行下载的 exe 安装包。</p><blockquote><p>这年头应该没人用 32 位的系统了吧 😏</p></blockquote><p>特别要注意勾上 <code>Add Python 3.9 to PATH</code>，然后点 “Install Now” 即可完成安装。</p><h2 id="运行-python" tabindex="-1"><a class="header-anchor" href="#运行-python"><span>运行 Python</span></a></h2><p>安装成功后，打开命令提示符窗口，敲入 <code>python</code> 后，会出现两种情况:</p><p>情况一:</p><figure><img src="'+a+'" alt="示意图" tabindex="0" loading="lazy"><figcaption>示意图</figcaption></figure><p>看到上面的画面，就说明 Python 安装成功!</p><p>您看到提示符 <code>&gt;&gt;&gt;</code> 就表示我们已经在 Python 交互式环境中了，可以输入任何 Python 代码，回车后会立刻得到执行结果。现在，输入 <code>exit()</code> 并回车，就可以退出 Python 交互式环境(直接关掉命令行窗口也可以)。</p><p>情况二:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">&#39;python&#39;</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> not</span><span style="color:#A3BE8C;"> recognized</span><span style="color:#A3BE8C;"> as</span><span style="color:#A3BE8C;"> an</span><span style="color:#A3BE8C;"> internal</span><span style="color:#A3BE8C;"> or</span><span style="color:#A3BE8C;"> external</span><span style="color:#A3BE8C;"> command,</span><span style="color:#A3BE8C;"> operable</span><span style="color:#A3BE8C;"> program</span><span style="color:#A3BE8C;"> or</span><span style="color:#A3BE8C;"> batch</span><span style="color:#A3BE8C;"> file.</span></span></code></pre></div><p>这是因为 Windows 会根据一个 Path 的环境变量设定的路径去查找 python.exe，如果没找到，就会报错。如果在安装时漏掉了勾选 &quot;Add Python 3.9 to PATH&quot;，那就要手动把 python.exe 所在的路径添加到 Path 中。</p><p>如果您不知道怎么修改环境变量，建议把 Python 安装程序重新运行一遍，务必记得勾上 &quot;Add Python 3.9 to PATH&quot;。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>需要注意的是:</p><ul><li><p>在 Windows 上运行 Python 时，请先启动命令行，然后运行 <code>python</code>。</p></li><li><p>在 Mac 和 Linux 上运行 Python 时，请打开终端，然后运行 <code>python3</code>。</p></li></ul></div>',22),s=[l];function i(h,r){return o(),e("div",null,s)}const d=t(p,[["render",i],["__file","install.html.vue"]]),m=JSON.parse('{"path":"/code/language/python/intro/install.html","title":"安装 Python","lang":"zh-CN","frontmatter":{"title":"安装 Python","icon":"install","author":"廖雪峰","date":"2020-05-18T00:00:00.000Z","category":"Python","tag":["安装"],"description":"要开始学习 Python 编程，首先就得把 Python 安装到您的电脑里。安装后，您会得到 Python 解释器(就是负责运行 Python 程序的)，一个命令行交互环境，还有一个简单的集成开发环境。本节将指导您如何安装 Python。 在 Mac 上安装 Python 如果您正在使用 Mac，系统是 OS X>=10.9，那么系统自带的 Pytho...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/python/intro/install.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"安装 Python"}],["meta",{"property":"og:description","content":"要开始学习 Python 编程，首先就得把 Python 安装到您的电脑里。安装后，您会得到 Python 解释器(就是负责运行 Python 程序的)，一个命令行交互环境，还有一个简单的集成开发环境。本节将指导您如何安装 Python。 在 Mac 上安装 Python 如果您正在使用 Mac，系统是 OS X>=10.9，那么系统自带的 Pytho..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:tag","content":"安装"}],["meta",{"property":"article:published_time","content":"2020-05-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装 Python\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-18T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"在 Mac 上安装 Python","slug":"在-mac-上安装-python","link":"#在-mac-上安装-python","children":[]},{"level":2,"title":"在 Linux 上安装 Python","slug":"在-linux-上安装-python","link":"#在-linux-上安装-python","children":[]},{"level":2,"title":"在 Windows 上安装 Python","slug":"在-windows-上安装-python","link":"#在-windows-上安装-python","children":[]},{"level":2,"title":"运行 Python","slug":"运行-python","link":"#运行-python","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":1.97,"words":592},"filePathRelative":"code/language/python/intro/install.md","localizedDate":"2020年5月18日","excerpt":"","autoDesc":true}');export{d as comp,m as data};
