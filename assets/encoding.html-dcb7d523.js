import{_ as T}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as a,c as Q,e as c,a as r,b as t,d,f as e}from"./app-d1a44583.js";const i={},s=e("<p>计算机，不能直接存储文字，存储的是编码。</p><p>计算机只能处理二进制的数据，也就是说计算机只能处理数字。如果要处理文本，比如: <code>0-9</code>、<code>a-z</code>、<code>A-Z</code>，就必须先把文本转换为数字才能处理。对于这些字符，可以定义一套规则来显示，比如: <code>A</code> 用 <code>110</code> 表示，<code>B</code> 用 <code>111</code> 表示等。</p>",2),p=e('<h2 id="字符编码" tabindex="-1"><a class="header-anchor" href="#字符编码" aria-hidden="true">#</a> 字符编码</h2><p>最早的计算机在设计时采用 8 个比特(bit)作为一个字节(byte)，所以，一个字节能表示的最大的整数就是 255(二进制 11111111=十进制 255)，如果要表示更大的整数，就必须用更多的字节。比如两个字节可以表示的最大整数是 <code>65535</code>，4 个字节可以表示的最大整数是 <code>4294967295</code>。</p><p>由于计算机是美国人发明的，因此，最早只有 127 个字符被编码到计算机里，也就是大小写英文字母、数字和一些符号，这个编码表被称为 ASCII 编码，比如大写字母 A 的编码是 65，小写字母 z 的编码是 122。</p><p>但是要处理中文显然一个字节是不够的，至少需要两个字节，而且还不能和 ASCII 编码冲突，所以，中国制定了 GB2312 编码，用来把中文编进去。</p><p>您可以想得到的是，全世界有上百种语言，日本把日文编到 Shift_JIS 里，韩国把韩文编到 Euc-kr 里，各国有各国的标准，就会不可避免地出现冲突，结果就是，在多语言混合的文本中，显示出来会有乱码。</p><p>因此，Unicode 应运而生。Unicode 把所有语言都统一到一套编码里，这样就不会再有乱码问题了。</p><p>Unicode 标准也在不断发展，但最常用的是用两个字节表示一个字符(如果要用到非常偏僻的字符，就需要 4 个字节)。现代操作系统和大多数编程语言都直接支持 Unicode。</p><p>现在，捋一捋 ASCII 编码和 Unicode 编码的区别: ASCII 编码是 1 个字节，而 Unicode 编码通常是 2 个字节。</p><p>字母 A 用 ASCII 编码是十进制的 65，二进制的 01000001；</p><p>字符 0 用 ASCII 编码是十进制的 48，二进制的 00110000，注意字符 <code>&#39;0&#39;</code> 和整数 <code>0</code> 是不同的；</p><p>汉字中已经超出了 ASCII 编码的范围，用 Unicode 编码是十进制的 20013，二进制的 01001110 00101101。</p><p>您可以猜测，如果把 ASCII 编码的 A 用 Unicode 编码，只需要在前面补 0 就可以，因此，A 的 Unicode 编码是 00000000 01000001。</p><p>新的问题又出现了: 如果统一成 Unicode 编码，乱码问题从此消失了。但是，如果您写的文本基本上全部是英文的话，用 Unicode 编码比 ASCII 编码需要多一倍的存储空间，在存储和传输上就十分不划算。</p><p>所以，本着节约的精神，又出现了把 Unicode 编码转化为“可变长编码”的 UTF-8 编码。UTF-8 编码把一个 Unicode 字符根据不同的数字大小编码成 1-6 个字节，常用的英文字母被编码成 1 个字节，汉字通常是 3 个字节，只有很生僻的字符才会被编码成 4-6 个字节。如果您要传输的文本包含大量英文字符，用 UTF-8 编码就能节省空间:</p><table><thead><tr><th>字符</th><th>ASCII</th><th>Unicode</th><th>UTF-8</th></tr></thead><tbody><tr><td>A</td><td>01000001</td><td>00000000 01000001</td><td>01000001</td></tr><tr><td>中</td><td>x</td><td>01001110 00101101</td><td>11100100 10111000 10101101</td></tr></tbody></table><p>从上面的表格还可以发现，UTF-8 编码有一个额外的好处，就是 ASCII 编码实际上可以被看成是 UTF-8 编码的一部分，所以，大量只支持 ASCII 编码的历史遗留软件可以在 UTF-8 编码下继续工作。</p><p>搞清楚 ASCII、Unicode 和 UTF-8 的关系，现在可以总结计算机系统通用的字符编码工作方式:</p><p>在计算机内存中，统一使用 Unicode 编码，当需要保存到硬盘或者需要传输的时候，就转换为 UTF-8 编码。</p><p>用编辑器编辑的时候，从文件读取的 UTF-8 字符被转换为 Unicode 字符到内存里，编辑完成后，保存的时候再把 Unicode 转换为 UTF-8 保存到文件:</p>',19),h=e('<p>浏览网页的时候，服务器会把动态生成的 Unicode 内容转换为 UTF-8 再传输到浏览器:</p><p>所以您看到很多网页的源码上会有类似 <code>&lt;meta charset=&quot;UTF-8&quot; /&gt;</code> 的信息，表示该网页正是用的 UTF-8 编码。</p><h2 id="ascii-码" tabindex="-1"><a class="header-anchor" href="#ascii-码" aria-hidden="true">#</a> ASCII 码</h2><p>美国发布的，用 1 个字节 (8 位二进制) 来表示一个字符，共可以表示 2<sup>8</sup>=256 个字符。</p><p>美国的国家语言是英语，只要能表示 0-9、a-z、A-Z、特殊符号。</p><h2 id="ansi-编码" tabindex="-1"><a class="header-anchor" href="#ansi-编码" aria-hidden="true">#</a> ANSI 编码</h2>',6),l=t("strong",null,"每个国家为了显示本国的语言，都对 ASCII 码进行了扩展",-1),m={class:"MathJax",jax:"SVG",style:{position:"relative"}},U={style:{"vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.592ex",height:"2.072ex",role:"img",focusable:"false",viewBox:"0 -833.9 5123.7 915.9","aria-hidden":"true"},u=e('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mn"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z" transform="translate(500,0)"></path></g></g></g><g data-mml-node="mo" transform="translate(1567.9,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mn" transform="translate(2623.7,0)"><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"></path><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" transform="translate(500,0)"></path><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" transform="translate(1000,0)"></path><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" transform="translate(1500,0)"></path><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z" transform="translate(2000,0)"></path></g></g></g>',1),g=[u],I=t("mjx-assistive-mml",{unselectable:"on",display:"inline"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mn",null,"2"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"16")])]),t("mo",null,"="),t("mn",null,"65536")])],-1),f=e('<ul><li>中国的 ANSI 编码是 GB2312 编码(简体)，对 6763 汉字进行编码，含 600 多特殊字符。另外还有 GBK(简体)。</li><li>日本的 ANSI 编码是 JIS 编码。</li><li>台湾的 ANSI 编码是 BIG5 编码(繁体)。</li></ul><h3 id="gbk" tabindex="-1"><a class="header-anchor" href="#gbk" aria-hidden="true">#</a> GBK</h3><p>对 GB2312 进行了扩展，用来显示罕见的、古汉语的汉字。现在已经收录了 2.1 万左右。并提供了 1890 个汉字码位。<code>K</code> 的含义就是“扩展”。</p><h2 id="unicode-编码-统一编码" tabindex="-1"><a class="header-anchor" href="#unicode-编码-统一编码" aria-hidden="true">#</a> Unicode 编码(统一编码)</h2><p>用 4 个字节 (32 位二进制) 来表示一个字符，想法不错，但效率太低。例如，字母 A 用 ASCII 表示的话一个字节就够，可用 Unicode 编码的话，得用 4 个字节表示，造成了空间的极大浪费。A 的 Unicode 编码是 <code>0000 0000 0000 0000 0000 0000 0100 0000</code></p><h2 id="utf-8-unicode-transform-format-编码" tabindex="-1"><a class="header-anchor" href="#utf-8-unicode-transform-format-编码" aria-hidden="true">#</a> UTF-8 (Unicode Transform Format)编码</h2><p>根据字符的不同，选择其编码的长度。比如:一个字符 A 用 1 个字节表示，一个汉字用 2 个字节表示。</p><p>毫无疑问，开发中，都用 <strong>UTF-8</strong> 编码吧，准没错。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>中文能够使用的字符集两种:</strong></p><ul><li><p>第一种:UTF-8。UTF-8 是国际通用字库，里面涵盖了所有地球上所有人类的语言文字，比如阿拉伯文、汉语、老挝语……</p></li><li><p>第二种:GBK (对 GB2312 进行了扩展)。gb2312 是国标，是中国的字库，里面<strong>仅</strong>涵盖了汉字和一些常用外文，比如日文片假名，和常见的符号。</p></li></ul><p>字库规模: UTF-8 (字全) &gt; gb2312 (只有汉字)</p><p>保存大小: UTF-8 (更臃肿、加载更慢) &gt; gb2312 (更小巧，加载更快)</p></div>',9);function _(A,S){const o=n("FlowChart");return a(),Q("div",null,[s,c(" more "),p,r(o,{id:"flowchart-109",code:"eJwrLrG1Ky5NKsovLcnMS7VSCM3LTM5PSVV4vmfa8wWNXMWJZam2dvkFqUWJJZn5eVYKT/bPfbp2hpXCi71rnvUuetG+WSE0xE3XgisnPzEFReGL9buf9k9DUQgxmistMwdoJrKlz6a1P9m9DWIS3OYSI7wuAyrQtQM5T9cOZKCuHcgFQJESIy4AfO5b7g==",preset:"vue"}),h,t("p",null,[l,d("。用 2 个字节 (16 位二进制) 来表示一个汉字，共可以表示 "),t("mjx-container",m,[(a(),Q("svg",U,g)),I]),d(" 个汉字。例如:")]),f])}const F=T(i,[["render",_],["__file","encoding.html.vue"]]);export{F as default};
