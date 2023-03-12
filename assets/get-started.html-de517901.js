import{_ as n,X as s,Y as a,a3 as t}from"./framework-a91f7991.js";const p={},e=t(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Vue Router 是 Vue 官方出品的路由组件，托管整个 Vue 项目路由。</p><h2 id="配置文件说明" tabindex="-1"><a class="header-anchor" href="#配置文件说明" aria-hidden="true">#</a> 配置文件说明</h2><p>配置文件会引入 Node.js 模块 <code>vue-router</code>，并配置信息，最终向外暴露一个添加了配置信息的 <code>Router对象</code>。</p><p>在日常开发中，我们只需要关注默认暴露对象的 <code>route</code> 属性。(其他属性已经在下方用注释简要说明)</p><p>在 inNENU Website 项目中，其配置文件位于 <code>src/routes</code> 文件夹下，名称为 <code>router.ts</code>。</p><h3 id="route-属性" tabindex="-1"><a class="header-anchor" href="#route-属性" aria-hidden="true">#</a> Route 属性</h3><p>在 inNENU Website 中，route 属性由同文件夹下的 <code>route.ts</code> 导入。</p><p>route 属性是一个数组，其每一个元素是一个对象，对象会包含 <code>path</code>，<code>component</code> 两个必填属性与 <code>meta</code> 和 <code>name</code> 两个可选属性。</p><ul><li><p><code>path</code>: 填入需要配置的网站页面的 <code>url</code></p></li><li><p><code>conponent</code>: 导入需要显示的 Vue 文件组件</p></li><li><p><code>name</code>(可选): 指定该组件与 <code>url</code> 的别名</p></li><li><p><code>meta</code>(可选): 该属性可以填入该界面的额外信息(比如 <code>title</code>、<code>author</code> 等)</p></li></ul><p>也就是说，Vue 项目网站能够访问到的地址都能够被 <code>route</code> 数组中的某个元素的 <code>path</code> 值所匹配，此时页面展示的是该元素 <code>component</code> 属性对应的 vue 文件视图。</p><p>当希望在 Vue 项目中添加新的界面的时候，只需制作好其组件文件，并在 <code>route</code> 数组中添加新项，指定的带设定 <code>url</code> 路径为响应 vue 文件即可。</p><hr><p>下面是目前项目中使用的 Vue-router 配置文件—— <code>router.ts</code> 文件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: router配置文件
 * @Date: 2019-02-26 23:43:23
 * @LastEditTime: 2019-05-05 14:35:43
 */</span>

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">&quot;./route&quot;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Router<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用官方Router</span>

<span class="token comment">// tslint:disable-next-line: no-var-requires</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;vue-wechat-title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 启用wechat客户端内对title属性的支持。</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 暴露Router对象
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>router<span class="token punctuation">}</span> router配置
 * <span class="token keyword">@return</span>: router对象
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 设置路由配置</span>
  routes<span class="token punctuation">,</span>

  <span class="token comment">// 使用html5的history API</span>
  mode<span class="token operator">:</span> <span class="token string">&quot;history&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// 设置根目录为环境变量BASE_URL</span>
  base<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 保存滚动位置
   *
   * <span class="token keyword">@param</span> <span class="token parameter">to</span> 新页面route对象
   * <span class="token keyword">@param</span> <span class="token parameter">from</span> 旧页面route对象
   * <span class="token keyword">@param</span> <span class="token parameter">savedPosition</span> 上次保存的滚动位置
   * <span class="token keyword">@returns</span> 返回网页滚动位置
   */</span>
  <span class="token function-variable function">scrollBehavior</span><span class="token operator">:</span> <span class="token punctuation">(</span>to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> savedPosition<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> savedPosition <span class="token operator">||</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是目前项目中使用的路由配置文件—— <code>route.ts</code> 文件:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: 路由配置文件
 * @Date: 2019-03-25 12:27:33
 * @LastEditTime: 2019-05-05 14:40:14
 */</span>
<span class="token keyword">import</span> Main <span class="token keyword">from</span> <span class="token string">&quot;@/views/Main.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Page404 <span class="token keyword">from</span> <span class="token string">&quot;@/views/Page404.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    alias<span class="token operator">:</span> <span class="token string">&quot;/index.html&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Main<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/handbook&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;handbook&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;东师攻略&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 使用 import 来进行异步调用实现懒加载，打包时，webpack 会识别 webpackChunkName 注释，将相同的一起打包一同执行懒加载</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;handbook&quot; */</span> <span class="token string">&quot;@/views/Handbook.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/page/:path&quot;</span><span class="token punctuation">,</span>
    alias<span class="token operator">:</span> <span class="token string">&quot;/handbook/:path&quot;</span><span class="token punctuation">,</span>
    props<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;东师指南&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;page&quot; */</span> <span class="token string">&quot;@/views/Page.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/lecture&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;lecture&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;讲座信息&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;handbook&quot; */</span> <span class="token string">&quot;@/views/Lecture.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/lecture/:school&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;lectureDetail&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;讲座信息&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;handbook&quot; */</span> <span class="token string">&quot;@/views/Lecture.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/tool/calendar&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;calendar&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;东师校历&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;calendar&quot; */</span> <span class="token string">&quot;@/views/tools/Calendar.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/tool/calendar/:time&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;calendarDetail&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;校历详情&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span>
        <span class="token comment">/* webpackChunkName: &quot;calendar&quot; */</span> <span class="token string">&quot;@/views/tools/CalendarDetail.vue&quot;</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/tool/schoolGzh&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;schoolGzh&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;学院矩阵&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;tool&quot; */</span> <span class="token string">&quot;@/views/tools/SchoolGzh.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/tool/NetCharge&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;NetCharge&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;网费充值&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;tool&quot; */</span> <span class="token string">&quot;@/views/tools/NetCharge.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/scence&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;scence&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;东师风貌&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;scence&quot; */</span> <span class="token string">&quot;@/views/scence/Scence.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/scence/benbu&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;benbuScence&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;本部风貌&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;scence&quot; */</span> <span class="token string">&quot;@/views/scence/Benbu.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/scence/jingyue&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;jingyueScence&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;净月风貌&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;scence&quot; */</span> <span class="token string">&quot;@/views/scence/Jingyue.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/intro/studentUnion&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;su&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;校学生会简介&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;about&quot; */</span> <span class="token string">&quot;@/views/about/SU.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/intro/department&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;department&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;校学生会部门简介&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;about&quot; */</span> <span class="token string">&quot;@/views/about/Department.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;about&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;关于我们&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;about&quot; */</span> <span class="token string">&quot;@/views/about/About.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/about/Mr-Hope&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;mrhope&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;Mr.Hope简介&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;about&quot; */</span> <span class="token string">&quot;@/views/about/MrHope.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/about/question&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;question&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;其他问题&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;about&quot; */</span> <span class="token string">&quot;@/views/about/Question.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;404&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;未找到界面&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Page404<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> route<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导航" tabindex="-1"><a class="header-anchor" href="#导航" aria-hidden="true">#</a> 导航</h2><p>使用 Vue Router 进行界面间导航有两种方式。一种是通过在视图层定义，一种在脚本中定义。</p><h3 id="视图层" tabindex="-1"><a class="header-anchor" href="#视图层" aria-hidden="true">#</a> 视图层</h3><p>使用 <code>router-link</code> 标签进行导航。</p><p><code>router-link</code> 标签可以设置以下几个属性:</p><ul><li><p><code>to</code>: 填入想要导航的地址，可以是绝对路径也可以是相对路径。</p></li><li><p><code>tag</code>(可选): 控制 <code>router-link</code> 最终渲染的标签，默认渲染为 <code>a</code> 标签。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 点击导航至guide --&gt;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>在使用 Vue-cli 构建的项目中，在组件内部访问 <code>this.$router</code> 即是路由管理器对象。</p><p>如:</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>navigate<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>张伯望很帅<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
  export default{
    methods:{
      navigate(){
        this.$router.push(&#39;/zhang/is/handsome&#39;);
        }
    }
  }
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编程式导航对动态导航是十分有用的，比如需要根据不同人的名字导航到不同界面，这个时候就可以通过在 js 中进行字符串处理，再使用 <code>router.push</code> 函数导航到相应界面。</p>`,29),o=[e];function c(i,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","get-started.html.vue"]]);export{r as default};
