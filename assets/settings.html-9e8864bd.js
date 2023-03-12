import{_ as a,X as t,Y as o,$ as p,a0 as n,Z as e,a2 as l,a3 as c,C as r}from"./framework-a91f7991.js";const u={},i=c(`<p>将下面内容拷贝至 setting.json 以更改 VS Code 设置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// 编辑器配置</span>
  <span class="token property">&quot;editor.accessibilitySupport&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.bracketPairColorization.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.bracketPairColorization.independentColorPoolPerBracketType&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.cursorSmoothCaretAnimation&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.detectIndentation&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;Fira Code&#39;, Consolas, &#39;Courier New&#39;, monospace&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.formatOnPaste&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.guides.bracketPairs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.inlineSuggest.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;explorer.incrementalNaming&quot;</span><span class="token operator">:</span> <span class="token string">&quot;smart&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.mouseWheelZoom&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.rulers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.quickSuggestions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;strings&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;other&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.renderControlCharacters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.renderWhitespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;boundary&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.smoothScrolling&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.stickyScroll.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.suggestSelection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;first&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.wordWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.experimental.pasteActions.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// emmet 包含 wxml 视为 html</span>
  <span class="token property">&quot;emmet.includeLanguages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;wxml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;axml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xml&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;emmet.variables&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lang&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;charset&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UTF-8&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 文件相关</span>
  <span class="token property">&quot;explorer.confirmDelete&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;explorer.confirmDragAndDrop&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;explorer.fileNesting.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*.cjson&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;*.wxss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;*.wxs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;*.wxml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wxml&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.autoSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.eol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;**/.classpath&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/.project&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/.settings&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/.factorypath&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.maxMemoryForLargeFilesMB&quot;</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span>
  <span class="token comment">// 编辑器窗口设置</span>
  <span class="token property">&quot;window.closeWhenEmpty&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;window.commandCenter&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;window.dialogStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;window.newWindowDimensions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inherit&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;breadcrumbs.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 工作台设置</span>
  <span class="token property">&quot;workbench.activityBar.visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;One Dark Pro&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.commandPalette.preserveInput&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.editor.scrollToSwitchTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;material-icon-theme&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.startupEditor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;security.workspace.trust.untrustedFiles&quot;</span><span class="token operator">:</span> <span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span>

  <span class="token property">&quot;material-icon-theme.folders.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;global-components&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Global&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Node&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;about&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Command&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;intro&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Command&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Public&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;github&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GitHub&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;composables&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Include&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;service-worker&quot;</span><span class="token operator">:</span> <span class="token string">&quot;config&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vuex-store&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;demo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Examples&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;basic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Helper&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vuex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vuex-store&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;plugin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;router&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Routes&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;.vuepress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vuepress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;node-js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Node&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;React-components&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;workflows&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ci&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;guide&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;git&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Git&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mysql&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DataBase&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;software&quot;</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tool&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Tools&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vscode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VSCode&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;en&quot;</span><span class="token operator">:</span> <span class="token string">&quot;I18n&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;zh&quot;</span><span class="token operator">:</span> <span class="token string">&quot;I18n&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;typescript&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 提示设置</span>
  <span class="token property">&quot;vsintellicode.modify.editor.suggestSelection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;automaticallyOverrodeDefaultValue&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;problems.showCurrentInStatus&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 在线服务设置</span>
  <span class="token property">&quot;telemetry.telemetryLevel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 终端设置</span>
  <span class="token property">&quot;terminal.external.linuxExec&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bash&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.confirmOnExit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hasChildProcesses&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.copyOnSelection&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.enableBell&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.defaultProfile.windows&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PowerShell&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.defaultProfile.linux&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bash&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.env.linux&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;NODE_OPTIONS&quot;</span><span class="token operator">:</span> <span class="token string">&quot;--max_old_space_size=4096&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.env.windows&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;NODE_OPTIONS&quot;</span><span class="token operator">:</span> <span class="token string">&quot;--max_old_space_size=4096&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.profiles.windows&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;PowerShell&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PowerShell&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;overrideName&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;terminal-powershell&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;-NoLogo&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.shellIntegration.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.smoothScrolling&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.tabs.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// git</span>
  <span class="token property">&quot;diffEditor.ignoreTrimWhitespace&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;diffEditor.renderSideBySide&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;git.autofetch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;git.confirmSync&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;git.enableSmartCommit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;git.mergeEditor&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;merge-conflict.autoNavigateNextConflict.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// npm 设置</span>
  <span class="token property">&quot;npm.enableRunFromFolder&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm.packageManager&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pnpm&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm.scriptExplorerAction&quot;</span><span class="token operator">:</span> <span class="token string">&quot;run&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm-intellisense.importQuotes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm-intellisense.packageSubfoldersIntellisense&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm-intellisense.scanDevDependencies&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm-intellisense.showBuildInLibs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// 特定格式文件设置</span>
  <span class="token property">&quot;[cpp]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ms-vscode.cpptools&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[css]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[dart]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.formatOnType&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.selectionHighlight&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.suggest.snippetsPreventQuickSuggestions&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.suggestSelection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;recentlyUsed&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.tabCompletion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.wordBasedSuggestions&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[html]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[latex]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;James-Yu.latex-workshop&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[json]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[jsonc]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[matlab]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;files.encoding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gb2312&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[markdown]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[svelte]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;svelte.svelte-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[scss]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[typescript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[typescriptreact]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[xml]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DotJoshJohnson.xml&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[yaml]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// typescript 配置</span>
  <span class="token property">&quot;javascript.format.semicolons&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.referencesCodeLens.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.suggest.completeFunctionCalls&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.preferences.quoteStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;double&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.updateImportsOnFileMove.enabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.locale&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.enablePromptUseWorkspaceTsdk&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.format.semicolons&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.preferences.quoteStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;double&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.referencesCodeLens.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.suggest.completeFunctionCalls&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.updateImportsOnFileMove.enabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// php 设置</span>
  <span class="token property">&quot;php.validate.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;php.validate.run&quot;</span><span class="token operator">:</span> <span class="token string">&quot;onType&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// c++ 设置</span>
  <span class="token property">&quot;C_Cpp.default.cppStandard&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c++23&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 需要根据自己情况设置</span>
  <span class="token property">&quot;C_Cpp.default.includePath&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// &quot;C:/Program Files/mingw-w64/lib/gcc/x86_64-w64-mingw32/8.1.0/include&quot;,</span>
    <span class="token comment">// &quot;C:/Program Files/mingw-w64/lib/gcc/x86_64-w64-mingw32/8.1.0/include-fixed&quot;,</span>
    <span class="token comment">// &quot;C:/Program Files/mingw-w64/x86_64-w64-mingw32/include&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;C_Cpp.clang_format_fallbackStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Google&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// dart</span>
  <span class="token property">&quot;dart.debugSdkLibraries&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dart.openDevTools&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flutter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;java.jdt.ls.java.home&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c:\\\\Program Files\\\\Java\\\\jdk-18.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;python.languageServer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Pylance&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// css颜色提示配置</span>
  <span class="token property">&quot;colorInfo.fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;hex&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rgb&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;alpha&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-color-name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;preview&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;colorInfo.languages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sass&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scss&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;less&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// eslint</span>
  <span class="token property">&quot;eslint.packageManager&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pnpm&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typescriptreact&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// Git Lens 设置</span>
  <span class="token property">&quot;gitlens.defaultDateFormat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YYYY-MM-DD HH:mm&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gitlens.defaultDateShortFormat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YYYY-MM-DD&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gitlens.defaultTimeFormat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HH:mm&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gitlens.gitCommands.closeOnFocusOut&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gitlens.views.repositories.branches.layout&quot;</span><span class="token operator">:</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gitlens.advanced.messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;suppressCommitNotFoundWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;suppressRebaseSwitchToTextWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// markdown 设置</span>
  <span class="token property">&quot;markdown.extension.orderedList.marker&quot;</span><span class="token operator">:</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;markdown.validate.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;markdown.extension.print.imgToBase64&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// markdownlint 设置</span>
  <span class="token property">&quot;markdownlint.config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;MD003&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atx&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;MD004&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dash&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;MD013&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;MD024&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;allow_different_nesting&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;MD035&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;---&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 根据自己情况设置</span>
  <span class="token property">&quot;markdown-pdf.executablePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:/Users/mister-hope/AppData/Local/Google/Chrome/Application/chrome.exe&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// XML工具设置</span>
  <span class="token property">&quot;xmlTools.enforcePrettySelfClosingTagOnFormat&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;xmlTools.removeCommentsOnMinify&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 微信小程序</span>
  <span class="token property">&quot;minapp-vscode.disableAutoConfig&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;minapp-vscode.wxmlFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;minapp-vscode.prettier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">80</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// liveshare 设置</span>
  <span class="token property">&quot;liveshare.audio.joinCallBehavior&quot;</span><span class="token operator">:</span> <span class="token string">&quot;accept&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 项目管理器</span>
  <span class="token property">&quot;projectManager.sortList&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Saved&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;projectManager.ignoreProjectsWithinProjects&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;projectManager.any.ignoredFolders&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;out&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typings&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;__tests__&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;projectManager.git.baseFolders&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;C:/Projects/&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// TODO Highlight 配置</span>
  <span class="token property">&quot;todohighlight.keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;WARNING: &quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// stylelint 设置</span>
  <span class="token property">&quot;stylelint.packageManager&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pnpm&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// Java</span>
  <span class="token property">&quot;redhat.telemetry.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">// github copilot</span>
  <span class="token property">&quot;github.copilot.enable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;yaml&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;plaintext&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;markdown&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用鼠标在对应属性值上悬停时，VS Code 会自动给出属性的说明。</p>`,3);function k(d,v){const s=r("RouterLink");return t(),o("div",null,[p("p",null,[n("这是 Mr.Hope 个人使用的 VS Code 设置，部分设置是"),e(s,{to:"/software/vscode/extension.html"},{default:l(()=>[n("这里")]),_:1}),n("的插件配置")]),i])}const m=a(u,[["render",k],["__file","settings.html.vue"]]);export{m as default};
