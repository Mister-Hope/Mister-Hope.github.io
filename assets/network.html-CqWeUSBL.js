import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,b as a}from"./app-DHOHoluL.js";const n={},l=a(`<h2 id="wx-request-object-object" tabindex="-1"><a class="header-anchor" href="#wx-request-object-object"><span>wx.request(Object object)</span></a></h2><p>发起 HTTPS 网络请求。使用前请注意阅读相关说明。</p><h3 id="request-参数" tabindex="-1"><a class="header-anchor" href="#request-参数"><span>request 参数</span></a></h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>url</td><td>string</td><td></td><td>是</td><td>开发者服务器接口地址</td><td></td></tr><tr><td>data</td><td>string/object/ArrayBuffer</td><td></td><td>否</td><td>请求的参数</td><td></td></tr><tr><td>header</td><td>Object</td><td></td><td>否</td><td>设置请求的 header，header 中不能设置 Referer。</td><td></td></tr><tr><td>content-type</td><td></td><td>application/json</td><td></td><td></td><td></td></tr><tr><td>method</td><td>string</td><td>GET</td><td>否</td><td>HTTP 请求方法</td><td></td></tr><tr><td>dataType</td><td>string</td><td>json</td><td>否</td><td>返回的数据格式</td><td></td></tr><tr><td>responseType</td><td>string</td><td>text</td><td>否</td><td>响应的数据类型</td><td>1.7.0</td></tr><tr><td>success</td><td>function</td><td></td><td>否</td><td>接口调用成功的回调函数</td><td></td></tr><tr><td>fail</td><td>function</td><td></td><td>否</td><td>接口调用失败的回调函数</td><td></td></tr><tr><td>complete</td><td>function</td><td></td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td><td></td></tr></tbody></table><p>object.method 的合法值</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>OPTIONS</td><td>HTTP 请求 OPTIONS</td></tr><tr><td>GET</td><td>HTTP 请求 GET</td></tr><tr><td>HEAD</td><td>HTTP 请求 HEAD</td></tr><tr><td>POST</td><td>HTTP 请求 POST</td></tr><tr><td>PUT</td><td>HTTP 请求 PUT</td></tr><tr><td>DELETE</td><td>HTTP 请求 DELETE</td></tr><tr><td>TRACE</td><td>HTTP 请求 TRACE</td></tr><tr><td>CONNECT</td><td>HTTP 请求 CONNECT</td></tr></tbody></table><p>object.dataType 的合法值</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>json</td><td>返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse</td></tr><tr><td>其他</td><td>不对返回的内容进行 JSON.parse</td></tr></tbody></table><p>object.responseType 的合法值</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>text</td><td>响应的数据为文本</td></tr><tr><td>arraybuffer</td><td>响应的数据为 ArrayBuffer</td></tr></tbody></table><p>object.success 回调函数</p><p>参数</p><p>Object res</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>data</td><td>string/Object/Arraybuffer</td><td>开发者服务器返回的数据</td><td></td></tr><tr><td>statusCode</td><td>number</td><td>开发者服务器返回的 HTTP 状态码</td><td></td></tr><tr><td>header</td><td>Object</td><td>开发者服务器返回的 HTTP Response Header</td><td>1.2.0</td></tr></tbody></table><h3 id="request-返回值" tabindex="-1"><a class="header-anchor" href="#request-返回值"><span>request 返回值</span></a></h3><p>RequestTask</p><p>请求任务对象</p><h3 id="data-参数说明" tabindex="-1"><a class="header-anchor" href="#data-参数说明"><span>data 参数说明</span></a></h3><p>最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下:</p><ul><li>对于 GET 方法的数据，会将数据转换成 query string(encodeURIComponent(k)=encodeURIComponent(v)&amp;encodeURIComponent(k)=encodeURIComponent(v)...)</li><li>对于 POST 方法且 <code>header[&#39;content-type&#39;]</code> 为 application/json 的数据，会对数据进行 JSON 序列化</li><li>对于 POST 方法且 <code>header[&#39;content-type&#39;]</code> 为 application/x-www-form-urlencoded 的数据，会将数据转换成 query string (encodeURIComponent(k)=encodeURIComponent(v)&amp;encodeURIComponent(k)=encodeURIComponent(v)...)</li></ul><p>示例代码</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">wx</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">request</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  url</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">test.php</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#616E88;"> //仅为示例，并非真实的接口地址</span></span>
<span class="line"><span style="color:#88C0D0;">  data</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    x</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">    y</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  header</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#A3BE8C;">content-type</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">application/json</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#616E88;"> // 默认值</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  success</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> =&gt;</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">    console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">data</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-downloadfile-object-object" tabindex="-1"><a class="header-anchor" href="#wx-downloadfile-object-object"><span>wx.downloadFile(Object object)</span></a></h2><p>下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径，单次下载允许的最大文件为 50MB。使用前请注意阅读相关说明。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请在服务端响应的 header 中指定合理的 Content-Type 字段，以保证客户端正确处理文件类型。</p></div><h3 id="downloadfile-参数" tabindex="-1"><a class="header-anchor" href="#downloadfile-参数"><span>downloadFile 参数</span></a></h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>是</td><td>下载资源的 url</td><td></td></tr><tr><td>header</td><td>Object</td><td>否</td><td>HTTP 请求的 Header，Header 中不能设置 Referer</td><td></td></tr><tr><td>filePath</td><td>string</td><td>否</td><td>指定文件下载后存储的路径</td><td>1.8.0</td></tr><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td><td></td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td><td></td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td><td></td></tr></tbody></table><p>object.success 回调函数</p><p>参数</p><p>Object res</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>tempFilePath</td><td>string</td><td>临时文件路径。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件</td></tr><tr><td>filePath</td><td>string</td><td>用户文件路径。传入 filePath 时会返回，跟传入的 filePath 一致</td></tr><tr><td>statusCode</td><td>number</td><td>开发者服务器返回的 HTTP 状态码</td></tr></tbody></table><h3 id="downloadfile-返回值" tabindex="-1"><a class="header-anchor" href="#downloadfile-返回值"><span>downloadFile 返回值</span></a></h3><p>DownloadTask</p><p>一个可以监听下载进度变化事件和取消下载的对象</p><p>示例代码</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">wx</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">downloadFile</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  url</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">https://example.com/audio/123</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#616E88;"> //仅为示例，并非真实的资源</span></span>
<span class="line"><span style="color:#88C0D0;">  success</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> =&gt;</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容</span></span>
<span class="line"><span style="color:#81A1C1;">    if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">statusCode</span><span style="color:#81A1C1;"> ===</span><span style="color:#B48EAD;"> 200</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9;">      wx</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">playVoice</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">        filePath</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9;"> res</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">tempFilePath</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">      }</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-uploadfile-object-object" tabindex="-1"><a class="header-anchor" href="#wx-uploadfile-object-object"><span>wx.uploadFile(Object object)</span></a></h2><p>将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 <code>multipart/form-data</code>。使用前请注意阅读相关说明。</p><h3 id="uploadfile-参数" tabindex="-1"><a class="header-anchor" href="#uploadfile-参数"><span>uploadFile 参数</span></a></h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>是</td><td>开发者服务器地址</td></tr><tr><td>filePath</td><td>string</td><td>是</td><td>要上传文件资源的路径</td></tr><tr><td>name</td><td>string</td><td>是</td><td>文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容</td></tr><tr><td>header</td><td>Object</td><td>否</td><td>HTTP 请求 Header，Header 中不能设置 Referer</td></tr><tr><td>formData</td><td>Object</td><td>否</td><td>HTTP 请求中其他额外的 form data</td></tr><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>object.success 回调函数</p><p>参数</p><p>Object res</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>string</td><td>开发者服务器返回的数据</td></tr><tr><td>statusCode</td><td>number</td><td>开发者服务器返回的 HTTP 状态码</td></tr></tbody></table><h3 id="uploadfile-返回值" tabindex="-1"><a class="header-anchor" href="#uploadfile-返回值"><span>uploadFile 返回值</span></a></h3><p>UploadTask</p><p>一个可以监听上传进度进度变化的事件和取消上传的对象</p><p>示例代码</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">wx</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">chooseImage</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  success</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> =&gt;</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">    const</span><span style="color:#D8DEE9;"> tempFilePaths</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> res</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">tempFilePaths</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">    wx</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">uploadFile</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">      url</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">https://example.weixin.qq.com/upload</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#616E88;"> //仅为示例，非真实的接口地址</span></span>
<span class="line"><span style="color:#88C0D0;">      filePath</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9;"> tempFilePaths</span><span style="color:#D8DEE9FF;">[</span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">      name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">file</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">      formData</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span><span style="color:#88C0D0;"> user</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">test</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;"> },</span></span>
<span class="line"><span style="color:#88C0D0;">      success</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;"> =&gt;</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">        const</span><span style="color:#D8DEE9;"> data</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> res</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">data</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#616E88;">        //do something</span></span>
<span class="line"><span style="color:#ECEFF4;">      },</span></span>
<span class="line"><span style="color:#ECEFF4;">    }</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),o=[l];function d(p,r){return s(),e("div",null,o)}const E=t(n,[["render",d],["__file","network.html.vue"]]),y=JSON.parse('{"path":"/code/mini-app/guide/service/api/network.html","title":"网络 API","lang":"zh-CN","frontmatter":{"date":"2020-10-09T00:00:00.000Z","title":"网络 API","icon":"network","category":"小程序","description":"wx.request(Object object) 发起 HTTPS 网络请求。使用前请注意阅读相关说明。 request 参数 Object object object.method 的合法值 object.dataType 的合法值 object.responseType 的合法值 object.success 回调函数 参数 Object res...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/guide/service/api/network.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"网络 API"}],["meta",{"property":"og:description","content":"wx.request(Object object) 发起 HTTPS 网络请求。使用前请注意阅读相关说明。 request 参数 Object object object.method 的合法值 object.dataType 的合法值 object.responseType 的合法值 object.success 回调函数 参数 Object res..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T18:01:12.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-10-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T18:01:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网络 API\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-10-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T18:01:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"wx.request(Object object)","slug":"wx-request-object-object","link":"#wx-request-object-object","children":[{"level":3,"title":"request 参数","slug":"request-参数","link":"#request-参数","children":[]},{"level":3,"title":"request 返回值","slug":"request-返回值","link":"#request-返回值","children":[]},{"level":3,"title":"data 参数说明","slug":"data-参数说明","link":"#data-参数说明","children":[]}]},{"level":2,"title":"wx.downloadFile(Object object)","slug":"wx-downloadfile-object-object","link":"#wx-downloadfile-object-object","children":[{"level":3,"title":"downloadFile 参数","slug":"downloadfile-参数","link":"#downloadfile-参数","children":[]},{"level":3,"title":"downloadFile 返回值","slug":"downloadfile-返回值","link":"#downloadfile-返回值","children":[]}]},{"level":2,"title":"wx.uploadFile(Object object)","slug":"wx-uploadfile-object-object","link":"#wx-uploadfile-object-object","children":[{"level":3,"title":"uploadFile 参数","slug":"uploadfile-参数","link":"#uploadfile-参数","children":[]},{"level":3,"title":"uploadFile 返回值","slug":"uploadfile-返回值","link":"#uploadfile-返回值","children":[]}]}],"git":{"createdTime":1591204114000,"updatedTime":1706205672000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":4.14,"words":1243},"filePathRelative":"code/mini-app/guide/service/api/network.md","localizedDate":"2020年10月9日","excerpt":"","autoDesc":true}');export{E as comp,y as data};
