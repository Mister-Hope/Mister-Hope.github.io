import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as p,c as l,d as e,e as a,a as t,b as s}from"./app-odku2cZ-.js";const r={},d=e("h2",{id:"二维码生成",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#二维码生成"},[e("span",null,"二维码生成")])],-1),i={href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"我们使用 Postman 软件进行二维码的获取。",-1),h=e("h3",{id:"调用凭据获取",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#调用凭据获取"},[e("span",null,"调用凭据获取")])],-1),_=e("code",null,"access_token",-1),m={href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"请求方式为:",-1),g=e("div",{class:"language-markdown","data-ext":"md","data-title":"md"},[e("pre",{class:"language-markdown"},[e("code",null,`GET https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
`)])],-1),q=e("p",null,[a("更多详情可以见文档。"),e("code",null,"AppSecret"),a(" 由于权限很大不在此文档中直接放置。")],-1),x=e("h3",{id:"无限制二维码生成",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#无限制二维码生成"},[e("span",null,"无限制二维码生成")])],-1),f={href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html",target:"_blank",rel:"noopener noreferrer"},v=s(`<p>在获取 <code>access_token</code> 之后就可以获取小程序二维码了。</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>POST https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=ACCESS_TOKEN
</code></pre></div><p>请注意，在 Postman 软件中，首先要注意使用 <code>post</code> 方法。Body 使用 <code>raw</code>，格式选择 <code>Text</code>，需要将 <code>pretty</code> 化的 JSON 输入即可正常获取二维码。获取完二维码之后，需要在 <code>response</code> 中点击返回图片右上角的 <code>save as</code>，保存为 <code>jpg</code> 格式的文件即可保存二维码。</p><h2 id="小程序链接" tabindex="-1"><a class="header-anchor" href="#小程序链接"><span>小程序链接</span></a></h2>`,4),w={href:"https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html",target:"_blank",rel:"noopener noreferrer"},b=s(`<p>具体格式如下:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>不支持小程序时打开的网页<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-miniprogram-appid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>小程序的appid<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-miniprogram-path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>小程序路径<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>文本内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span>
<span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2);function E(S,P){const n=c("ExternalLinkIcon");return p(),l("div",null,[d,e("p",null,[a("目前小程序二维码生成选用的是"),e("a",i,[a("无限制生成二维码"),t(n)]),a("。")]),u,h,e("p",null,[a("获取任何二维码都需要先获取 "),_,a("，这是小程序全局唯一后台接口调用凭据。"),e("a",m,[a("文档地址"),t(n)])]),k,g,q,x,e("ul",null,[e("li",null,[e("a",f,[a("文档地址"),t(n)])])]),v,e("ul",null,[e("li",null,[e("a",w,[a("文档地址"),t(n)])])]),b])}const N=o(r,[["render",E],["__file","qr-code.html.vue"]]);export{N as default};
