import{ac as o,F as s,G as n,E as t,R as e,M as r,ae as d,U as c}from"./framework-293293bc.js";const i="/assets/configure-debug-3401496e.gif",h="/assets/node-debug-a1225a50.gif",l="/assets/debug-data-inspection-15da3fc9.gif",_={},p=t("h2",{id:"配置调试器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#配置调试器","aria-hidden":"true"},"#"),e(" 配置调试器")],-1),u=t("code",null,"Ctrl + Shift + P",-1),g=t("strong",null,"调试: 打开 launch.json",-1),f=t("code",null,"launch.json",-1),m={href:"https://code.visualstudio.com/docs/editor/debugging",target:"_blank",rel:"noopener noreferrer"},b=d('<p><img src="'+i+'" alt="配置调试"></p><h2 id="断点并逐步执行" tabindex="-1"><a class="header-anchor" href="#断点并逐步执行" aria-hidden="true">#</a> 断点并逐步执行</h2><p>在行号旁边放置断点。使用 <strong>调试</strong> 小部件向前导航。</p><p><img src="'+h+'" alt="调试"></p><h2 id="数据检查" tabindex="-1"><a class="header-anchor" href="#数据检查" aria-hidden="true">#</a> 数据检查</h2><p>在 <strong>运行</strong> 面板和控制台中检查变量。</p><p><img src="'+l+'" alt="数据检查"></p><h2 id="内嵌值" tabindex="-1"><a class="header-anchor" href="#内嵌值" aria-hidden="true">#</a> 内嵌值</h2><p>您可以设置 <code>&quot;debug.inlineValues&quot;: true</code> 在调试器中内联查看变量值。此功能开销很大，并且可能会减慢步进速度，因此默认情况下禁用此功能。</p><h2 id="log-points" tabindex="-1"><a class="header-anchor" href="#log-points" aria-hidden="true">#</a> Log Points</h2><p>日志点的行为很像断点，但它们不会在命中时暂停调试器，而是在控制台中记录一条消息。日志点对于调试无法修改或暂停的生产服务器时注入日志特别有用。</p><p>使用左侧编辑器装订线中的 <strong>添加日志点</strong> 命令添加日志点，该日志点将显示为 🔸 形状的图标。日志消息是纯文本，但可以包含要在花括号(&#39;{}&#39;)中计算的表达式。</p>',12);function x(N,k){const a=c("ExternalLinkIcon");return s(),n("div",null,[p,t("p",null,[e("打开命令面板("),u,e(")，然后选择 "),g,e("，这将提示您选择与项目(Node.js，Python，C ++等)匹配的环境。这将生成一个 "),f,e(" 文件。Node.js 支持是内置的，其他环境要求安装适当的语言扩展。有关更多详细信息，请参见 "),t("a",m,[e("调试文档"),r(a)]),e("。")]),b])}const j=o(_,[["render",x],["__file","debug.html.vue"]]);export{j as default};
