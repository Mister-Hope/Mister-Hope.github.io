import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as r,f as e}from"./app-27839578.js";const a={},h=e('<h2 id="运行限制" tabindex="-1"><a class="header-anchor" href="#运行限制" aria-hidden="true">#</a> 运行限制</h2><p>基于安全考虑，小程序中不支持动态执行 JS 代码，即:</p><ul><li>不支持使用 <code>eval</code> 执行 JS 代码</li><li>不支持使用 <code>new Function</code> 创建函数</li></ul><h2 id="客户端-es6-api-支持情况" tabindex="-1"><a class="header-anchor" href="#客户端-es6-api-支持情况" aria-hidden="true">#</a> 客户端 ES6 API 支持情况</h2><p>微信小程序已经支持了绝大部分的 ES6 API，已支持的 API 如下(部分 API 依赖系统版本):</p><table><thead><tr><th>String</th><th>iOS10+</th><th>Android</th></tr></thead><tbody><tr><td>codePointAt</td><td></td><td></td></tr><tr><td>normalize</td><td></td><td></td></tr><tr><td>includes</td><td></td><td></td></tr><tr><td>startsWith</td><td></td><td></td></tr><tr><td>endsWith</td><td></td><td></td></tr><tr><td>repeat</td><td></td><td></td></tr><tr><td>String.fromCodePoint</td><td></td><td></td></tr></tbody></table><table><thead><tr><th>Array</th><th>iOS10+</th><th>Android</th></tr></thead><tbody><tr><td>copyWithin</td><td></td><td></td></tr><tr><td>find</td><td></td><td></td></tr><tr><td>findIndex</td><td></td><td></td></tr><tr><td>fill</td><td></td><td></td></tr><tr><td>entries</td><td></td><td></td></tr><tr><td>keys</td><td></td><td></td></tr><tr><td>values</td><td></td><td>✘</td></tr><tr><td>includes</td><td></td><td></td></tr><tr><td>Array.from</td><td></td><td></td></tr><tr><td>Array.of</td><td></td><td></td></tr></tbody></table><table><thead><tr><th>Number</th><th>iOS10+</th><th>Android</th></tr></thead><tbody><tr><td>isFinite</td><td></td><td></td></tr><tr><td>isNaN</td><td></td><td></td></tr><tr><td>parseInt</td><td></td><td></td></tr><tr><td>parseFloat</td><td></td><td></td></tr><tr><td>isInteger</td><td></td><td></td></tr><tr><td>EPSILON</td><td></td><td></td></tr><tr><td>isSafeInteger</td><td></td><td></td></tr><tr><td>Math</td><td>iOS10+</td><td>Android</td></tr><tr><td>trunc</td><td></td><td></td></tr><tr><td>sign</td><td></td><td></td></tr><tr><td>cbrt</td><td></td><td></td></tr><tr><td>clz32</td><td></td><td></td></tr><tr><td>imul</td><td></td><td></td></tr><tr><td>fround</td><td></td><td></td></tr><tr><td>hypot</td><td></td><td></td></tr><tr><td>expm1</td><td></td><td></td></tr><tr><td>log1p</td><td></td><td></td></tr><tr><td>log10</td><td></td><td></td></tr><tr><td>log2</td><td></td><td></td></tr><tr><td>sinh</td><td></td><td></td></tr><tr><td>cosh</td><td></td><td></td></tr><tr><td>tanh</td><td></td><td></td></tr><tr><td>asinh</td><td></td><td></td></tr><tr><td>acosh</td><td></td><td></td></tr><tr><td>atanh</td><td></td><td></td></tr></tbody></table><table><thead><tr><th>Object</th><th>iOS10+</th><th>Android</th></tr></thead><tbody><tr><td>is</td><td></td><td></td></tr><tr><td>assign</td><td></td><td></td></tr><tr><td>getOwnPropertyDescriptor</td><td></td><td></td></tr><tr><td>keys</td><td></td><td></td></tr><tr><td>getOwnPropertyNames</td><td></td><td></td></tr><tr><td>getOwnPropertySymbols</td><td></td><td></td></tr></tbody></table><table><thead><tr><th>Other</th><th>iOS10+</th><th>Android</th></tr></thead><tbody><tr><td>Symbol</td><td></td><td></td></tr><tr><td>Set</td><td></td><td></td></tr><tr><td>Map</td><td></td><td></td></tr><tr><td>Proxy</td><td></td><td>✘</td></tr><tr><td>Reflect</td><td></td><td></td></tr><tr><td>Promise</td><td></td><td></td></tr></tbody></table>',10),o=[h];function i(n,s){return d(),r("div",null,o)}const b=t(a,[["render",i],["__file","js-support.html.vue"]]);export{b as default};
