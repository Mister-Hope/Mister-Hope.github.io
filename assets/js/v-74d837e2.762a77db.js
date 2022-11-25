"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[14195],{69948:(n,e,a)=>{a.r(e),a.d(e,{default:()=>p});var s=a(16492);const o=(0,s.uE)("<p>GitHub Actions 的配置文件叫做 <code>workflow</code> 文件，存放在代码仓库的 <code>.github/workflows</code> 目录。</p><p><code>workflow</code> 文件采用 <code>YAML</code> 格式，文件名可以任意取，但是后缀名统一为 <code>.yml</code>，比如<code>foo.yml</code>。</p><p>一个库可以有多个 <code>workflow</code> 文件。GitHub 只要发现 <code>.github/workflows</code> 目录里面有 <code>.yml</code> 文件，就会自动运行该文件。</p>",3),t=(0,s.uE)('<h2 id="常见字段" tabindex="-1"><a class="header-anchor" href="#常见字段" aria-hidden="true">#</a> 常见字段</h2><p><code>workflow</code> 文件的配置字段非常多。下面是一些基本字段。</p><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><p><code>name</code> 字段是 <code>workflow</code> 的名称。如果省略该字段，默认为当前 <code>workflow</code> 的文件名。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> GitHub Actions Demo\n</code></pre></div><h3 id="on" tabindex="-1"><a class="header-anchor" href="#on" aria-hidden="true">#</a> on</h3><p><code>on</code> 字段指定触发 <code>workflow</code> 的时机，通常是某些事件。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 指定 push 事件触发 workflow。</span>\n<span class="token key atrule">on</span><span class="token punctuation">:</span> push\n</code></pre></div><p><code>on</code> 字段也可以是事件的数组。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 指定 push 事件或 pull_request 事件都可以触发 workflow。</span>\n<span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">,</span> pull_request<span class="token punctuation">]</span>\n</code></pre></div><p>完整的事件列表，请查看官方文档。 除了代码库事件，GitHub Actions 也支持外部事件触发，或者定时运行。</p><h4 id="on-push-pull-request-tags-branches" tabindex="-1"><a class="header-anchor" href="#on-push-pull-request-tags-branches" aria-hidden="true">#</a> on.&lt;push|pull_request&gt;.&lt;tags|branches&gt;</h4><p>指定触发事件时，可以限定分支或标签。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 指定只有 main 分支发生 push 事件时，才会触发 workflow。</span>\n<span class="token key atrule">on</span><span class="token punctuation">:</span>\n  <span class="token key atrule">push</span><span class="token punctuation">:</span>\n    <span class="token key atrule">branches</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> main\n</code></pre></div><h3 id="jobs" tabindex="-1"><a class="header-anchor" href="#jobs" aria-hidden="true">#</a> jobs</h3><p><code>workflow</code> 文件的主体是 <code>jobs</code> 字段，表示要执行的一项或多项任务。</p><p><code>jobs</code> 字段里面，需要写出每一项任务的 <code>job_id</code>，具体名称自定义。</p><h4 id="jobs-job-id-name" tabindex="-1"><a class="header-anchor" href="#jobs-job-id-name" aria-hidden="true">#</a> jobs.&lt;job_id&gt;.name</h4><p><code>job_id</code> 里面的 <code>name</code> 字段是任务的说明(可填可不填)。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">my_first_job</span><span class="token punctuation">:</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> My first job\n  <span class="token key atrule">my_second_job</span><span class="token punctuation">:</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> My second job\n</code></pre></div><p>上面代码的 <code>jobs</code> 字段包含两项任务，<code>job_id</code> 分别是 <code>my_first_job</code> 和 <code>my_second_job</code>。</p><h4 id="jobs-job-id-needs" tabindex="-1"><a class="header-anchor" href="#jobs-job-id-needs" aria-hidden="true">#</a> jobs.&lt;job_id&gt;.needs</h4><p><code>needs</code> 字段指定当前任务的依赖关系，即运行顺序。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 这个 workflow 的运行顺序依次为: job1、job2、job3。</span>\n<span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">job1</span><span class="token punctuation">:</span>\n  <span class="token key atrule">job2</span><span class="token punctuation">:</span>\n    <span class="token key atrule">needs</span><span class="token punctuation">:</span> job1\n  <span class="token key atrule">job3</span><span class="token punctuation">:</span>\n    <span class="token key atrule">needs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>job1<span class="token punctuation">,</span> job2<span class="token punctuation">]</span>\n</code></pre></div><h4 id="jobs-job-id-runs-on" tabindex="-1"><a class="header-anchor" href="#jobs-job-id-runs-on" aria-hidden="true">#</a> jobs.&lt;job_id&gt;.runs-on</h4><p><code>runs-on</code> 字段指定运行所需要的虚拟机环境。 它是<strong>必填字段</strong>。目前可用的虚拟机如下。</p><p><code>ubuntu-latest</code>，<code>ubuntu-18.04</code> 或 <code>ubuntu-16.04</code></p><p><code>windows-latest</code>，<code>windows-2019</code> 或 <code>windows-2016</code></p><p><code>macOS-latest</code> 或 <code>macOS-10.14</code></p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 代码指定虚拟机环境为 ubuntu-18.04。</span>\n<span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span><span class="token number">18.04</span>\n</code></pre></div><h4 id="jobs-job-id-steps" tabindex="-1"><a class="header-anchor" href="#jobs-job-id-steps" aria-hidden="true">#</a> jobs.&lt;job_id&gt;.steps</h4><p><code>steps</code> 字段指定每个 <code>Job</code> 的运行步骤，可以包含一个或多个步骤。每个步骤都可以指定以下三个字段。</p><ul><li><code>jobs.&lt;job_id&gt;.steps.name</code>: 步骤名称。</li><li><code>jobs.&lt;job_id&gt;.steps.run</code>: 该步骤运行的命令或者 action。</li><li><code>jobs.&lt;job_id&gt;.steps.env</code>: 该步骤所需的环境变量。</li></ul><p>下面是一个完整的 <code>workflow</code> 文件的范例。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Greeting from Mona\n<span class="token key atrule">on</span><span class="token punctuation">:</span> push\n\n<span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">my-job</span><span class="token punctuation">:</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> My Job\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span> <span class="token comment"># steps 字段只包括一个步骤。该步骤先注入四个环境变量，然后执行一条 Bash 命令。</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Print a greeting\n        <span class="token key atrule">env</span><span class="token punctuation">:</span>\n          <span class="token key atrule">MY_VAR</span><span class="token punctuation">:</span> Hi there<span class="token tag">!</span> My name is\n          <span class="token key atrule">FIRST_NAME</span><span class="token punctuation">:</span> Mona\n          <span class="token key atrule">MIDDLE_NAME</span><span class="token punctuation">:</span> The\n          <span class="token key atrule">LAST_NAME</span><span class="token punctuation">:</span> Octocat\n        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n          echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="官方文档" tabindex="-1"><a class="header-anchor" href="#官方文档" aria-hidden="true">#</a> 官方文档</h2>',36),c={href:"https://docs.github.com/cn/actions/reference/workflow-syntax-for-github-actions",target:"_blank",rel:"noopener noreferrer"},l={},p=(0,a(11164).Z)(l,[["render",function(n,e){const a=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[o,(0,s.kq)(" more "),t,(0,s._)("p",null,[(0,s.Uk)("关于完整的工作流程语法，详见 "),(0,s._)("a",c,[(0,s.Uk)("GitHub 操作的工作流程语法"),(0,s.Wm)(a)])])])}]])},11164:(n,e)=>{e.Z=(n,e)=>{const a=n.__vccOpts||n;for(const[n,s]of e)a[n]=s;return a}},60046:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s=JSON.parse('{"key":"v-74d837e2","path":"/code/github/actions/config.html","title":"Action 配置","lang":"zh-CN","frontmatter":{"title":"Action 配置","icon":"config","date":"2021-02-18T00:00:00.000Z","category":["GitHub"],"tag":["action","workflow"],"description":"GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的 .github/workflows 目录。 workflow 文件采用 YAML 格式，文件名可以任意取，但是后缀名统一为 .yml，比如foo.yml。 一个库可以有多个 workflow 文件。GitHub 只要发现 .github/workflows 目录里面有 .yml 文件，就会自动运行该文件。","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/github/actions/config.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Action 配置"}],["meta",{"property":"og:description","content":"GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的 .github/workflows 目录。 workflow 文件采用 YAML 格式，文件名可以任意取，但是后缀名统一为 .yml，比如foo.yml。 一个库可以有多个 workflow 文件。GitHub 只要发现 .github/workflows 目录里面有 .yml 文件，就会自动运行该文件。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-03-31T03:20:18.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"action"}],["meta",{"property":"article:tag","content":"workflow"}],["meta",{"property":"article:published_time","content":"2021-02-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-03-31T03:20:18.000Z"}]]},"excerpt":"<p>GitHub Actions 的配置文件叫做 <code v-pre>workflow</code> 文件，存放在代码仓库的 <code v-pre>.github/workflows</code> 目录。</p>\\n<p><code v-pre>workflow</code> 文件采用 <code v-pre>YAML</code> 格式，文件名可以任意取，但是后缀名统一为 <code v-pre>.yml</code>，比如<code v-pre>foo.yml</code>。</p>\\n<p>一个库可以有多个 <code v-pre>workflow</code> 文件。GitHub 只要发现 <code v-pre>.github/workflows</code> 目录里面有 <code v-pre>.yml</code> 文件，就会自动运行该文件。</p>\\n","headers":[{"level":2,"title":"常见字段","slug":"常见字段","link":"#常见字段","children":[{"level":3,"title":"name","slug":"name","link":"#name","children":[]},{"level":3,"title":"on","slug":"on","link":"#on","children":[]},{"level":3,"title":"jobs","slug":"jobs","link":"#jobs","children":[]}]},{"level":2,"title":"官方文档","slug":"官方文档","link":"#官方文档","children":[]}],"git":{"createdTime":1613646054000,"updatedTime":1648696818000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5}]},"readingTime":{"minutes":2.4,"words":721},"filePathRelative":"code/github/actions/config.md","localizedDate":"2021年2月18日"}')}}]);