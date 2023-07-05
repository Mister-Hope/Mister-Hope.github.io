import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as d,f as r}from"./app-27839578.js";const n={},l=r('<p><img src="https://img.shields.io/badge/版本-V5-blue.svg?style=for-the-badge" alt="版本: V5" loading="lazy"></p><h2 id="总体结构" tabindex="-1"><a class="header-anchor" href="#总体结构" aria-hidden="true">#</a> 总体结构</h2><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td style="text-align:center;">title</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>导航栏标题</td><td>一般不超过八个字，六字及以下为佳</td></tr><tr><td style="text-align:center;">desc</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>页面描述</td><td>会显示在页脚</td></tr><tr><td style="text-align:center;">author</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>页面的作者</td><td>会显示在页脚</td></tr><tr><td style="text-align:center;">time</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>页面更新时间</td><td>会显示在页脚</td></tr><tr><td style="text-align:center;">grey</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>boolean</code></td><td>使用灰色背景</td><td>默认为白色背景</td></tr><tr><td style="text-align:center;">cite</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string | string[]</code></td><td>页面引用链接</td><td></td></tr><tr><td style="text-align:center;">content</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>ComponentConfig[]</code></td><td>页面的内容</td><td>数组的每个对象会最终渲染为一个组件</td></tr><tr><td style="text-align:center;">outdated</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>boolean</code></td><td>是否已过时</td><td>可展示一条“页面过时”提示</td></tr><tr><td style="text-align:center;">shareable</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>boolean</code></td><td>是否可被分享</td><td>是否可以使用小程序的界面分享，默认为 <code>false</code></td></tr></tbody></table><h2 id="支持的组件" tabindex="-1"><a class="header-anchor" href="#支持的组件" aria-hidden="true">#</a> 支持的组件</h2><p><code>content</code> 的每个元素都为一个对象，该对象会最终渲染为一个组件。</p><p>每个配置对象有一个固定的键 <code>tag</code> 来决定渲染的组件。有效的 <code>tag</code> 值及对应的渲染结果如下:</p><ul><li><a href="#title">title</a>: 标题</li><li><a href="#text">text</a>: 文字 (可设置标题与样式)</li><li><a href="#p">p</a>: 段落 (可设置标题与样式)</li><li><a href="#ol">ol</a>: 有序列表 (可设置标题与样式)</li><li><a href="#ul">ul</a>: 无序列表 (可设置标题与样式)</li><li><a href="#list">list</a>: 带有跳转功能的列表 (列表项可包含文字、图标、描述)</li><li><a href="#img">img</a>: 图片组件 (可附带说明，点击可预览，支持放大与下载)</li><li><a href="#doc">doc</a>: 文档组件 (常见文档的查看与下载)</li><li><a href="#phone">phone</a>: 电话组件 (支持拨打电话与快速保存联系人)</li><li><a href="#copy">copy</a>: 复制组件 (快速复制指定文字)</li><li><a href="#account">account</a>: 账号组件 (用于主体 Logo、网址、媒体号、口号展示)</li><li><a href="#location">location</a>: 地理位置组件 (用于在地图上展示地点，提供地点详情与导航)</li><li><a href="#carousel">carousel</a>: 图片轮播图</li><li><a href="#card">card</a>: 卡片组件 (卡片形式，可跳转到指定页面、打开公众号图文或复制链接)</li><li><a href="#grid">grid</a>: 九宫格 (分类展示与跳转)</li><li><a href="#media">media</a>: 媒体组件 (展示音频和视频)</li></ul><h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h2><p>标题</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th></tr></thead><tbody><tr><td>text</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>大标题文字</td></tr></tbody></table><h2 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h2><p>文字块，可设置标题与样式</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>heading</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string | boolean</code></td><td>标题</td><td></td></tr><tr><td>text</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string | string[]</code></td><td>文字内容</td><td></td></tr><tr><td>type</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>&#39;tip&#39; | &#39;warn&#39; | &#39;danger&#39; | &#39;info&#39; | &#39;none&#39;</code></td><td>文字块样式</td><td>默认为 <code>&#39;none&#39;</code></td></tr><tr><td>align</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>&#39;left&#39; | &#39;right&#39; | &#39;center&#39; | &#39;justify&#39;</code></td><td>段落对齐方式</td><td>默认为 <code>&#39;justify&#39;</code></td></tr></tbody></table><h2 id="p" tabindex="-1"><a class="header-anchor" href="#p" aria-hidden="true">#</a> p</h2><p>段落，可设置标题与样式</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>heading</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string | boolean</code></td><td>标题</td><td></td></tr><tr><td>text</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string | string[]</code></td><td>段落文字内容</td><td></td></tr><tr><td>type</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>&#39;tip&#39; | &#39;warn&#39; | &#39;danger&#39; | &#39;info&#39;</code></td><td>文字块样式</td><td>不填无额外样式</td></tr><tr><td>path</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>对应页面的路径</td><td>仅设置 <code>type</code> 时可用</td></tr><tr><td>align</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>&#39;left&#39; | &#39;right&#39; | &#39;center&#39; | &#39;justify&#39;</code></td><td>段落对齐方式</td><td>默认为 <code>&#39;justify&#39;</code></td></tr></tbody></table><h2 id="ul" tabindex="-1"><a class="header-anchor" href="#ul" aria-hidden="true">#</a> ul</h2><p>无序列表，可设置标题与样式</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>heading</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string | boolean</code></td><td>标题</td><td></td></tr><tr><td>text</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string | string[]</code></td><td>无序列表项文字内容</td><td></td></tr><tr><td>type</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>&#39;tip&#39; | &#39;warn&#39; | &#39;danger&#39; | &#39;info&#39;</code></td><td>文字块样式</td><td>不填无额外样式</td></tr><tr><td>path</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>对应页面的路径</td><td>仅设置 <code>type</code> 时可用</td></tr><tr><td>align</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>&#39;left&#39; | &#39;right&#39; | &#39;center&#39; | &#39;justify&#39;</code></td><td>段落对齐方式</td><td>默认为 <code>&#39;justify&#39;</code></td></tr></tbody></table><h2 id="ol" tabindex="-1"><a class="header-anchor" href="#ol" aria-hidden="true">#</a> ol</h2><p>有序列表，可设置标题与样式</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>heading</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string | boolean</code></td><td>标题</td><td></td></tr><tr><td>text</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string | string[]</code></td><td>有序列表项文字内容</td><td></td></tr><tr><td>type</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>&#39;tip&#39; | &#39;warn&#39; | &#39;danger&#39; | &#39;info&#39;</code></td><td>文字块样式</td><td>不填无额外样式</td></tr><tr><td>path</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>对应页面的路径</td><td>仅设置 <code>type</code> 时可用</td></tr><tr><td>align</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>&#39;left&#39; | &#39;right&#39; | &#39;center&#39; | &#39;justify&#39;</code></td><td>段落对齐方式</td><td>默认为 <code>&#39;justify&#39;</code></td></tr></tbody></table><h2 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h2><p>带有跳转功能的列表，列表项可包含文字、图标、描述</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>header</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string | boolean</code></td><td>头部标题</td><td>不填会在标题所在处留空占位，设置为 <code>false</code> 来取消留空占位</td></tr><tr><td>footer</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>尾部标题</td><td></td></tr><tr><td>items</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>SimpleList[]</code></td><td>列表内容</td><td></td></tr></tbody></table><p>列表每一项参数如下:</p><h3 id="通用参数" tabindex="-1"><a class="header-anchor" href="#通用参数" aria-hidden="true">#</a> 通用参数</h3><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th></tr></thead><tbody><tr><td>icon</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>列表图标的简称或在线网址</td></tr><tr><td>text</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>列表项文字</td></tr><tr><td>desc</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>列表项描述，显示在尾部</td></tr><tr><td>path</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>对应配置文件的相对或绝对路径(不带后缀名)，以 <code>/</code> 结尾默认为 <code>index</code></td></tr></tbody></table><h2 id="img" tabindex="-1"><a class="header-anchor" href="#img" aria-hidden="true">#</a> img</h2><p>图片组件，可附带说明。点击可预览、支持放大与下载。</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>src</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>图片地址</td><td></td></tr><tr><td>res</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>图片预览地址</td><td>预览时需要高清图片的时候使用</td></tr><tr><td>desc</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>图片的描述文字</td><td>填入后会自动最前加入一个三角号，不填则没有描述文字</td></tr></tbody></table><h2 id="doc" tabindex="-1"><a class="header-anchor" href="#doc" aria-hidden="true">#</a> doc</h2><p>文档组件，支持查看与下载</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>name</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>文档名称</td><td></td></tr><tr><td>url</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>文档在线路径</td><td></td></tr><tr><td>header</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>组件标题</td><td></td></tr></tbody></table><div class="hint-container info"><p class="hint-container-title">支持情况</p><p>仅支持 doc、docx、ppt、pptx、xls、xlsx、pdf、jpg、jpeg、png、gif。</p></div><h2 id="phone" tabindex="-1"><a class="header-anchor" href="#phone" aria-hidden="true">#</a> phone</h2><p>电话组件，支持拨打电话与快速保存联系人。</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th></tr></thead><tbody><tr><td>num</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string | number</code></td><td>联系人电话号码</td></tr><tr><td>header</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>组件标题</td></tr><tr><td>fName</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>联系人的名</td></tr><tr><td>lName</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>联系人的姓</td></tr><tr><td>org</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>联系人所在公司</td></tr><tr><td>remark</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>联系人的备注</td></tr><tr><td>workNum</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string | number</code></td><td>联系人的工作电话</td></tr><tr><td>hostNum</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string | number</code></td><td>联系人的公司电话</td></tr><tr><td>homeNum</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string | number</code></td><td>联系人的住宅电话</td></tr><tr><td>nick</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>联系人的昵称</td></tr><tr><td>avatar</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>联系人头像图片路径(仅限本地路径)</td></tr><tr><td>title</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>联系人的职位</td></tr><tr><td>site</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>联系人的网站</td></tr><tr><td>mail</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>联系人的电子邮件</td></tr><tr><td>wechat</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>联系人的微信号</td></tr><tr><td>province</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>联系人的地址省份</td></tr><tr><td>city</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>联系人的地址城市</td></tr><tr><td>street</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>联系人的地址街道</td></tr><tr><td>postCode</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string | number</code></td><td>联系人的地址邮政编码</td></tr></tbody></table><h2 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> action</h2><p>动作组件，允许快速复制文字或跳转网页</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th></tr></thead><tbody><tr><td>content</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>动作内容</td></tr><tr><td>header</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>可选的组件标题</td></tr></tbody></table><h2 id="account" tabindex="-1"><a class="header-anchor" href="#account" aria-hidden="true">#</a> account</h2><p>介绍组件，用于主体 Logo、网址、媒体号、口号展示。</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th></tr></thead><tbody><tr><td>name</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>主体名称</td></tr><tr><td>logo</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>头像图标在线地址</td></tr><tr><td>detail</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>主体的全称</td></tr><tr><td>desc</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>主体描述</td></tr><tr><td>qq</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>number</code></td><td>主体的 QQ 号</td></tr><tr><td>qqid</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>主体的 QQ Openid</td></tr><tr><td>qqcode</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>主体的 QQ 二维码地址</td></tr><tr><td>wxid</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>主体的微信公众号 ID</td></tr><tr><td>wxcode</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>主体的微信二维码地址</td></tr><tr><td>account</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>主体的微信公众号配置文件 ID</td></tr><tr><td>location</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>LocationConfig</code></td><td>主体的地址</td></tr><tr><td>site</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>主体的网站地址</td></tr></tbody></table><h3 id="locationconfig" tabindex="-1"><a class="header-anchor" href="#locationconfig" aria-hidden="true">#</a> LocationConfig</h3><p>地点配置</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th></tr></thead><tbody><tr><td>longtidude</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>number</code></td><td>经度</td></tr><tr><td>latitude</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>number</code></td><td>维度</td></tr></tbody></table><h2 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h2><p>位置组件，用于在地图上显示位置并允许详情与导航。</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>title</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>位置展示的内容</td><td></td></tr><tr><td>points</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>Point[]</code></td><td>展示地点</td><td>数组的每个元素对应一个地点</td></tr><tr><td>navigate</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>false</code></td><td>是否允许导航</td><td>仅在企业主体微信小程序上可用</td></tr></tbody></table><h3 id="point" tabindex="-1"><a class="header-anchor" href="#point" aria-hidden="true">#</a> Point</h3><p>点位配置</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>longtidude</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>number</code></td><td>经度</td><td></td></tr><tr><td>latitude</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>number</code></td><td>维度</td><td></td></tr><tr><td>name</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>点位名称</td><td>默认同 <code>title</code></td></tr><tr><td>detail</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>点位详情文字</td><td>默认为 <code>详情</code></td></tr><tr><td>path</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>地点详情路径</td><td>基于 <code>function/map</code></td></tr></tbody></table><h2 id="carousel" tabindex="-1"><a class="header-anchor" href="#carousel" aria-hidden="true">#</a> carousel</h2><p>轮播图</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>images</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string[]</code></td><td>展示的图片地址</td><td>将所有图片按顺序设置为数组元素</td></tr><tr><td>fill</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>boolean</code></td><td>组件是否填满屏幕宽度</td><td>默认为 <code>false</code></td></tr></tbody></table><h2 id="card" tabindex="-1"><a class="header-anchor" href="#card" aria-hidden="true">#</a> card</h2><p>卡片组件，可跳转到指定页面、打开公众号图文或复制链接</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th></tr></thead><tbody><tr><td>url</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>跳转的路径</td></tr><tr><td>src</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>卡片图片地址</td></tr><tr><td>type</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>&#39;page&#39; | &#39;web&#39;</code></td><td>卡片类型</td></tr><tr><td>title</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>卡片标题</td></tr><tr><td>desc</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>卡片描述</td></tr><tr><td>logo</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>卡片 logo 地址</td></tr><tr><td>name</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>卡片 logo 名称</td></tr><tr><td>options</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>小程序卡片选项</td></tr></tbody></table><h2 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> grid</h2><p>九宫格组件，用于分类展示与跳转</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th></tr></thead><tbody><tr><td>header</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>九宫格的标题文字</td></tr><tr><td>footer</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>九宫格的尾部文字</td></tr><tr><td>items</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>GridItem[]</code></td><td>该数组的每个元素均为一个格子内容</td></tr></tbody></table><h3 id="griditem" tabindex="-1"><a class="header-anchor" href="#griditem" aria-hidden="true">#</a> GridItem</h3><p>九宫格项目配置</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th></tr></thead><tbody><tr><td>icon</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>九宫格的图标的简称或在线网址</td></tr><tr><td>text</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>九宫格文字</td></tr><tr><td>color</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>&#39;blue&#39; | &#39;orange&#39; | &#39;red&#39; | &#39;purple&#39; | &#39;cyan&#39; | &#39;olive&#39; | &#39;mauve&#39; | &#39;grey&#39;</code></td><td>Android 主题下的颜色</td></tr><tr><td>name</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>对应的英文文字</td></tr><tr><td>path</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>对应配置文件的相对或绝对路径(不带后缀名)，以 <code>/</code> 结尾默认为 <code>index</code></td></tr></tbody></table><h2 id="media" tabindex="-1"><a class="header-anchor" href="#media" aria-hidden="true">#</a> media</h2><p>媒体组件，可展示音频和视频。</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>&#39;audio&#39; | &#39;video&#39;</code></td><td>媒体类型</td><td></td></tr><tr><td>src</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>媒体文件地址</td><td></td></tr></tbody></table><h3 id="audio" tabindex="-1"><a class="header-anchor" href="#audio" aria-hidden="true">#</a> audio</h3><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>name</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>音频名字</td><td>controls 为 <code>false</code> 时无效</td></tr><tr><td>author</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>音频作者</td><td>controls 为 <code>false</code> 时无效</td></tr></tbody></table><h3 id="video" tabindex="-1"><a class="header-anchor" href="#video" aria-hidden="true">#</a> video</h3><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>poster</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>视频封面的图片网络资源地址</td><td>controls 为 <code>false</code> 时无效</td></tr></tbody></table>',72),a=[l];function c(i,o){return e(),d("div",null,a)}const g=t(n,[["render",c],["__file","tag-list.html.vue"]]);export{g as default};
