import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c as d,f as c,d as t,e as a,a as i,b as n}from"./app-S62fdHqc.js";const r={},l=t("p",null,[t("code",null,"Component"),a(" 构造器用于创建自定义组件，接受一个 Object 类型的参数。")],-1),u=n('<h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><table><thead><tr><th>定义段</th><th>类型</th><th>是否必填</th><th>描述</th><th>最低版本</th></tr></thead><tbody><tr><td>properties</td><td>Object Map</td><td>否</td><td>组件的对外属性，是属性名到属性设置的映射表</td><td></td></tr><tr><td>data</td><td>Object</td><td>否</td><td>组件的内部数据，和 properties 一同用于组件的模板渲染</td><td></td></tr><tr><td>observers</td><td>Object</td><td>否</td><td>组件数据字段监听器，用于监听 properties 和 data 的变化，参见 数据监听器</td><td>2.6.1</td></tr><tr><td>methods</td><td>Object</td><td>否</td><td>组件的方法，包括事件响应函数和任意的自定义方法，关于事件响应函数的使用，参见 组件间通信与事件</td><td></td></tr><tr><td>behaviors</td><td>String Array</td><td>否</td><td>类似于 mixins 和 traits 的组件间代码复用机制，参见 behaviors</td><td></td></tr><tr><td>created</td><td>Function</td><td>否</td><td>组件生命周期函数-在组件实例刚刚被创建时执行，注意此时不能调用 setData</td><td></td></tr><tr><td>attached</td><td>Function</td><td>否</td><td>组件生命周期函数-在组件实例进入页面节点树时执行</td><td></td></tr><tr><td>ready</td><td>Function</td><td>否</td><td>组件生命周期函数-在组件布局完成后执行</td><td></td></tr><tr><td>moved</td><td>Function</td><td>否</td><td>组件生命周期函数-在组件实例被移动到节点树另一个位置时执行</td><td></td></tr><tr><td>detached</td><td>Function</td><td>否</td><td>组件生命周期函数-在组件实例被从页面节点树移除时执行</td><td></td></tr><tr><td>relations</td><td>Object</td><td>否</td><td>组件间关系定义，参见 组件间关系</td><td></td></tr><tr><td>externalClasses</td><td>String Array</td><td>否</td><td>组件接受的外部样式类，参见 外部样式类</td><td></td></tr><tr><td>options</td><td>Object Map</td><td>否</td><td>一些选项(文档中介绍相关特性时会涉及具体的选项设置，这里暂不列举)</td><td></td></tr><tr><td>lifetimes</td><td>Object</td><td>否</td><td>组件生命周期声明对象，参见 组件生命周期</td><td>2.2.3</td></tr><tr><td>pageLifetimes</td><td>Object</td><td>否</td><td>组件所在页面的生命周期声明对象，参见 组件生命周期</td><td>2.2.3</td></tr><tr><td>definitionFilter</td><td>Function</td><td>否</td><td>定义段过滤器，用于自定义组件扩展，参见 自定义组件扩展</td><td>2.2.3</td></tr></tbody></table><p>生成的组件实例可以在组件的方法、生命周期函数和属性 <code>observer</code> 中通过 <code>this</code> 访问。组件包含一些通用属性和方法。</p><table><thead><tr><th>属性名</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>is</td><td>String</td><td>组件的文件路径</td></tr><tr><td>id</td><td>String</td><td>节点 id</td></tr><tr><td>dataset</td><td>String</td><td>节点 dataset</td></tr><tr><td>data</td><td>Object</td><td>组件数据，包括内部数据和属性值</td></tr><tr><td>properties</td><td>Object</td><td>组件数据，包括内部数据和属性值(与 data 一致)</td></tr></tbody></table><table><thead><tr><th>方法名</th><th>参数</th><th>描述</th><th>最低版本</th></tr></thead><tbody><tr><td>setData</td><td>Object newData</td><td>设置 data 并执行视图层渲染</td><td></td></tr><tr><td>hasBehavior</td><td>Object behavior</td><td>检查组件是否具有 behavior (检查时会递归检查被直接或间接引入的所有 behavior)</td><td></td></tr><tr><td>triggerEvent</td><td>String name, Object detail, Object options</td><td>触发事件，参见 组件间通信与事件</td><td></td></tr><tr><td>createSelectorQuery</td><td></td><td>创建一个 SelectorQuery 对象，选择器选取范围为这个组件实例内</td><td></td></tr><tr><td>createIntersectionObserver</td><td></td><td>创建一个 IntersectionObserver 对象，选择器选取范围为这个组件实例内</td><td></td></tr><tr><td>createMediaQueryObserver</td><td></td><td>创建一个 MediaQueryObserver 对象</td><td>2.11.1</td></tr><tr><td>selectComponent</td><td>String selector</td><td>使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象(会被 wx://component-export 影响)</td><td></td></tr><tr><td>selectAllComponents</td><td>String selector</td><td>使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组(会被 wx://component-export 影响)</td><td></td></tr><tr><td>selectOwnerComponent</td><td></td><td>选取当前组件节点所在的组件实例(即组件的引用者)，返回它的组件实例对象(会被 wx://component-export 影响)</td><td>2.8.2</td></tr><tr><td>getRelationNodes</td><td>String relationKey</td><td>获取这个关系所对应的所有关联节点，参见 组件间关系</td><td></td></tr><tr><td>groupSetData</td><td>Function callback</td><td>立刻执行 callback ，其中的多个 setData 之间不会触发界面绘制(只有某些特殊场景中需要，如用于在不同组件同时 setData 时进行界面绘制同步)</td><td>2.4.0</td></tr><tr><td>getTabBar</td><td></td><td>返回当前页面的 custom-tab-bar 的组件实例，详见自定义 tabBar</td><td>2.6.2</td></tr><tr><td>getPageId</td><td></td><td>返回页面标识符(一个字符串)，可以用来判断几个自定义组件实例是不是在同一个页面内</td><td>2.7.1</td></tr><tr><td>animate</td><td>String selector, Array keyframes, Number duration, Function callback</td><td>执行关键帧动画，详见动画</td><td>2.9.0</td></tr><tr><td>clearAnimation</td><td>String selector, Object options, Function callback</td><td>清除关键帧动画，详见动画</td><td>2.9.0</td></tr><tr><td>setUpdatePerformanceListener</td><td>Object options, Function listener</td><td>清除关键帧动画，详见动画</td><td>2.12.0</td></tr></tbody></table>',5),m={class:"hint-container details"},k=t("summary",null,"代码示例",-1),v={href:"https://developers.weixin.qq.com/s/GqVTnvmq7g1m",target:"_blank",rel:"noopener noreferrer"},b=n(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">behaviors</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 属性定义(详情参见下文)</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">myProperty</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 属性名</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">myProperty2</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token comment">// 简化的定义方式</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 私有数据，可用于模板渲染</span>

  <span class="token literal-property property">lifetimes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 生命周期函数，可以为函数，或一个在methods段中定义的方法名</span>
    <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">moved</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">detached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">pageLifetimes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 组件所在页面的生命周期函数</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">onMyButtonTap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 更新属性和数据的方法与更新页面数据的方法类似</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 内部方法建议以下划线开头</span>
    <span class="token function">_myPrivateMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这里将 data.A[0].B 设为 &#39;myPrivateData&#39;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;A[0].B&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myPrivateData&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">_propertyChange</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=n(`<h2 id="properties-定义" tabindex="-1"><a class="header-anchor" href="#properties-定义"><span>properties 定义</span></a></h2><table><thead><tr><th>定义段</th><th>类型</th><th>是否必填</th><th>描述</th><th>最低版本</th></tr></thead><tbody><tr><td>type</td><td></td><td>是</td><td>属性的类型</td><td></td></tr><tr><td>optionalTypes</td><td>Array</td><td>否</td><td>属性的类型(可以指定多个)</td><td>2.6.5</td></tr><tr><td>value</td><td></td><td>否</td><td>属性的初始值</td><td></td></tr><tr><td>observer</td><td>Function</td><td>否</td><td>属性值变化时的回调函数</td><td></td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p>新版本基础库中不推荐使用 <code>observer</code> 字段，而是使用 Component 构造器的 <code>observers</code> 字段代替，它更加强大且性能更好。</p></div><details class="hint-container details"><summary>代码示例</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token function">observer</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 属性值变化时执行</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastLeaf</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这个属性可以是 Number 、 String 、 Boolean 三种类型中的一种</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token literal-property property">optionalTypes</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Object<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>属性的类型可以为 <code>String</code> <code>Number</code> <code>Boolean</code> <code>Object</code> <code>Array</code> 其一，也可以为 <code>null</code> 表示不限制类型。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>多数情况下，属性最好指定一个确切的类型。这样，在 WXML 中以字面量指定属性值时，值可以获得一个确切的类型，如:</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-comp</span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>此时，由于自定义组件的对应属性被规定为 <code>Number</code> 类型， min 和 max 会被赋值为 <code>1</code> 和 <code>5</code> ，而非 <code>&quot;1&quot;</code> 和 <code>&quot;5&quot;</code> ，即:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>min <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>max <span class="token operator">===</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>在 <code>properties</code> 定义段中，属性名采用驼峰写法(propertyName)；在 wxml 中，指定属性值时则对应使用连字符写法(component-tag-name property-name=&quot;attr value&quot;)，应用于数据绑定时采用驼峰写法(attr=&quot;&quot;)。</p></div><h3 id="bug-tips" tabindex="-1"><a class="header-anchor" href="#bug-tips"><span>Bug &amp; Tips</span></a></h3><ul><li>使用 <code>this.data</code> 可以获取内部数据和属性值；但直接修改它不会将变更应用到界面上，应使用 setData 修改。</li><li>生命周期函数无法在组件方法中通过 <code>this</code> 访问到。</li><li>属性名应避免以 <code>data</code> 开头，即不要命名成 <code>dataXyz</code> 这样的形式，因为在 WXML 中， <code>data-xyz=&quot;&quot;</code> 会被作为节点 dataset 来处理，而不是组件属性。</li><li>在一个组件的定义和使用时，组件的属性名和 data 字段相互间都不能冲突(尽管它们位于不同的定义段中)。</li><li>从基础库 2.0.9 开始，对象类型的属性和 data 字段中可以包含函数类型的子字段，即可以通过对象类型的属性字段来传递函数。低于这一版本的基础库不支持这一特性。</li><li>bug : 对于 type 为 Object 或 Array 的属性，如果通过该组件自身的 <code>this.setData</code> 来改变属性值的一个子字段，则依旧会触发属性 observer ，且 observer 接收到的 <code>newVal</code> 是变化的那个子字段的值，<code>oldVal</code> 为空， <code>changedPath</code> 包含子字段的字段名相关信息；目前推荐使用 <code>observers</code> 定义段代替。</li></ul>`,9);function y(g,f){const s=p("ExternalLinkIcon");return o(),d("div",null,[l,c(" more "),u,t("details",m,[k,t("p",null,[t("a",v,[a("在开发者工具中预览效果"),i(s)])]),b]),h])}const _=e(r,[["render",y],["__file","component.html.vue"]]),O=JSON.parse('{"path":"/code/mini-app/guide/custom-component/component.html","title":"框架接口","lang":"zh-CN","frontmatter":{"date":"2020-12-19T00:00:00.000Z","title":"框架接口","category":"小程序","description":"Component 构造器用于创建自定义组件，接受一个 Object 类型的参数。 参数 生成的组件实例可以在组件的方法、生命周期函数和属性 observer 中通过 this 访问。组件包含一些通用属性和方法。 代码示例 在开发者工具中预览效果 properties 定义 注意 新版本基础库中不推荐使用 observer 字段，而是使用 Compon...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/guide/custom-component/component.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"框架接口"}],["meta",{"property":"og:description","content":"Component 构造器用于创建自定义组件，接受一个 Object 类型的参数。 参数 生成的组件实例可以在组件的方法、生命周期函数和属性 observer 中通过 this 访问。组件包含一些通用属性和方法。 代码示例 在开发者工具中预览效果 properties 定义 注意 新版本基础库中不推荐使用 observer 字段，而是使用 Compon..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T18:01:12.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-12-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T18:01:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"框架接口\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T18:01:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"properties 定义","slug":"properties-定义","link":"#properties-定义","children":[{"level":3,"title":"Bug & Tips","slug":"bug-tips","link":"#bug-tips","children":[]}]}],"git":{"createdTime":1611059957000,"updatedTime":1706205672000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":6.23,"words":1870},"filePathRelative":"code/mini-app/guide/custom-component/component.md","localizedDate":"2020年12月19日","excerpt":"<p><code>Component</code> 构造器用于创建自定义组件，接受一个 Object 类型的参数。</p>\\n","autoDesc":true}');export{_ as comp,O as data};
