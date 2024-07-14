import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,d as l,e as a,f as t,b as o}from"./app-DHOHoluL.js";const Q={},p=a("p",null,"一个脚本语言少不了与用户进行交互，就一定涉及到输入输出。",-1),r=o(`<h2 id="输出" tabindex="-1"><a class="header-anchor" href="#输出"><span>输出</span></a></h2><p>用 <code>print()</code> 在括号中加上字符串，就可以向屏幕上输出指定的文字。比如输出 <code>&#39;hello, world&#39;</code>，用代码实现如下:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&gt;&gt;&gt;</span><span style="color:#88C0D0;"> print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">hello, world</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span></code></pre></div><p><code>print()</code> 函数也可以接受多个字符串，用逗号 “,” 隔开，就可以连成一串输出:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&gt;&gt;&gt;</span><span style="color:#88C0D0;"> print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">The quick brown fox</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">jumps over</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">the lazy dog</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">The quick brown fox jumps over the lazy dog</span></span></code></pre></div><p><code>print()</code> 会依次打印每个字符串，遇到逗号“,”会输出一个空格。</p><p><code>print()</code> 也可以打印整数，或者计算结果:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&gt;&gt;&gt;</span><span style="color:#88C0D0;"> print</span><span style="color:#ECEFF4;">(</span><span style="color:#B48EAD;">300</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#B48EAD;">300</span></span>
<span class="line"><span style="color:#81A1C1;">&gt;&gt;&gt;</span><span style="color:#88C0D0;"> print</span><span style="color:#ECEFF4;">(</span><span style="color:#B48EAD;">100</span><span style="color:#81A1C1;"> +</span><span style="color:#B48EAD;"> 200</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#B48EAD;">300</span></span></code></pre></div><p>因此，我们可以把计算 <code>100 + 200</code> 的结果打印得更漂亮一点:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&gt;&gt;&gt;</span><span style="color:#88C0D0;"> print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">100 + 200 =</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;"> 100</span><span style="color:#81A1C1;"> +</span><span style="color:#B48EAD;"> 200</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#B48EAD;">100</span><span style="color:#81A1C1;"> +</span><span style="color:#B48EAD;"> 200</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 300</span></span></code></pre></div><p>注意，对于 <code>100 + 200</code>，Python 解释器自动计算出结果 300，但是，<code>&#39;100 + 200 =&#39;</code> 是字符串而非数学公式，Python 把它视为字符串，请自行解释上述打印结果。</p><h2 id="输入" tabindex="-1"><a class="header-anchor" href="#输入"><span>输入</span></a></h2><p>如果需要用户从电脑输入一些字符，Python 提供了一个 <code>input()</code>，可以让用户输入字符串，并存放到一个变量里。比如输入用户的名字:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&gt;&gt;&gt;</span><span style="color:#D8DEE9FF;"> name </span><span style="color:#81A1C1;">=</span><span style="color:#88C0D0;"> input</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Mr</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">Hope</span></span></code></pre></div><p>当您输入 <code>name = input()</code> 并按下回车后，Python 交互式命令行就在等待您的输入了。这时，您可以输入任意字符，然后按回车后完成输入。</p><p>输入完成后，不会有任何提示，Python 交互式命令行又回到 <code>&gt;&gt;&gt;</code> 状态了。那我们刚才输入的内容到哪去了? 答案是存放到 <code>name</code> 变量里了。可以直接输入 <code>name</code> 查看变量内容:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&gt;&gt;&gt;</span><span style="color:#D8DEE9FF;"> name</span></span>
<span class="line"><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">Mr.Hope</span><span style="color:#ECEFF4;">&#39;</span></span></code></pre></div>`,17),c={class:"hint-container tip"},d=a("p",{class:"hint-container-title"},"变量",-1),T=a("p",null,"请回忆初中数学所学的代数基础知识:",-1),i={class:"MathJax",jax:"SVG",style:{position:"relative"}},h={style:{"vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.197ex",height:"1.02ex",role:"img",focusable:"false",viewBox:"0 -441 529 451","aria-hidden":"true"},m=a("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[a("g",{"data-mml-node":"math"},[a("g",{"data-mml-node":"mi"},[a("path",{"data-c":"1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"})])])],-1),g=[m],y=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"a")])],-1),E={class:"MathJax",jax:"SVG",style:{position:"relative"}},u={style:{"vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.159ex",height:"1.133ex",role:"img",focusable:"false",viewBox:"0 -491 2280.4 501","aria-hidden":"true"},f=o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></g><g data-mml-node="mo" transform="translate(751.2,0)"><path data-c="D7" d="M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"></path></g><g data-mml-node="mi" transform="translate(1751.4,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></g></g></g>',1),F=[f],C=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"a"),a("mo",null,"×"),a("mi",null,"a")])],-1),_={class:"MathJax",jax:"SVG",style:{position:"relative"}},x={style:{"vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.197ex",height:"1.02ex",role:"img",focusable:"false",viewBox:"0 -441 529 451","aria-hidden":"true"},M=a("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[a("g",{"data-mml-node":"math"},[a("g",{"data-mml-node":"mi"},[a("path",{"data-c":"1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"})])])],-1),L=[M],w=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"a")])],-1),v={class:"MathJax",jax:"SVG",style:{position:"relative"}},H={style:{"vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.197ex",height:"1.02ex",role:"img",focusable:"false",viewBox:"0 -441 529 451","aria-hidden":"true"},D=a("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[a("g",{"data-mml-node":"math"},[a("g",{"data-mml-node":"mi"},[a("path",{"data-c":"1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"})])])],-1),V=[D],Z=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"a")])],-1),k={class:"MathJax",jax:"SVG",style:{position:"relative"}},A={style:{"vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.345ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 2362.6 748","aria-hidden":"true"},B=o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></g><g data-mml-node="mo" transform="translate(806.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mn" transform="translate(1862.6,0)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g></g></g>',1),b=[B],j=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"a"),a("mo",null,"="),a("mn",null,"2")])],-1),S={class:"MathJax",jax:"SVG",style:{position:"relative"}},J={style:{"vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"17.353ex",height:"1.717ex",role:"img",focusable:"false",viewBox:"0 -677 7670 759","aria-hidden":"true"},P=o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></g><g data-mml-node="mo" transform="translate(751.2,0)"><path data-c="D7" d="M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"></path></g><g data-mml-node="mi" transform="translate(1751.4,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></g><g data-mml-node="mo" transform="translate(2558.2,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mn" transform="translate(3614,0)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="mo" transform="translate(4336.2,0)"><path data-c="D7" d="M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"></path></g><g data-mml-node="mn" transform="translate(5336.4,0)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="mo" transform="translate(6114.2,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mn" transform="translate(7170,0)"><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path></g></g></g>',1),G=[P],N=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"a"),a("mo",null,"×"),a("mi",null,"a"),a("mo",null,"="),a("mn",null,"2"),a("mo",null,"×"),a("mn",null,"2"),a("mo",null,"="),a("mn",null,"4")])],-1),z={class:"MathJax",jax:"SVG",style:{position:"relative"}},O={style:{"vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.105ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 3140.6 748","aria-hidden":"true"},I=o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></g><g data-mml-node="mo" transform="translate(806.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mn" transform="translate(1862.6,0)"><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" transform="translate(500,0)"></path><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" transform="translate(778,0)"></path></g></g></g>',1),q=[I],R=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"a"),a("mo",null,"="),a("mn",null,"3.5")])],-1),W={class:"MathJax",jax:"SVG",style:{position:"relative"}},K={style:{"vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"24.896ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 11004 748","aria-hidden":"true"},U=o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></g><g data-mml-node="mo" transform="translate(751.2,0)"><path data-c="D7" d="M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"></path></g><g data-mml-node="mi" transform="translate(1751.4,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></g><g data-mml-node="mo" transform="translate(2558.2,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mn" transform="translate(3614,0)"><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" transform="translate(500,0)"></path><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" transform="translate(778,0)"></path></g><g data-mml-node="mo" transform="translate(5114.2,0)"><path data-c="D7" d="M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"></path></g><g data-mml-node="mn" transform="translate(6114.4,0)"><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" transform="translate(500,0)"></path><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" transform="translate(778,0)"></path></g><g data-mml-node="mo" transform="translate(7670.2,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mn" transform="translate(8726,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" transform="translate(500,0)"></path><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" transform="translate(1000,0)"></path><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" transform="translate(1278,0)"></path><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" transform="translate(1778,0)"></path></g></g></g>',1),X=[U],Y=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"a"),a("mo",null,"×"),a("mi",null,"a"),a("mo",null,"="),a("mn",null,"3.5"),a("mo",null,"×"),a("mn",null,"3.5"),a("mo",null,"="),a("mn",null,"12.25")])],-1),$=o(`<p>在计算机程序中，变量不仅可以为整数或浮点数，还可以是字符串，因此，<code>name</code> 作为一个变量就是一个字符串。</p><p>要打印出 <code>name</code> 变量的内容，除了直接写 <code>name</code> 然后按回车外，还可以用 <code>print()</code> 函数:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&gt;&gt;&gt;</span><span style="color:#88C0D0;"> print</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">name</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Mr</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">Hope</span></span></code></pre></div>`,3),a1=o(`<p>有了输入和输出，我们就可以把上次打印 <code>&#39;hello, world&#39;</code> 的程序改成有点意义的程序了:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">name </span><span style="color:#81A1C1;">=</span><span style="color:#88C0D0;"> input</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#88C0D0;">print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">hello,</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> name</span><span style="color:#ECEFF4;">)</span></span></code></pre></div><p>运行上面的程序，第一行代码会让用户输入任意字符作为自己的名字，然后存入 <code>name</code> 变量中；第二行代码会根据用户的名字向用户说 <code>hello</code>，比如输入 <code>Mr.Hope</code></p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">C:/Workspace</span><span style="color:#D8DEE9FF;">&gt; </span><span style="color:#A3BE8C;">python</span><span style="color:#A3BE8C;"> hello.py</span></span>
<span class="line"><span style="color:#88C0D0;">Mr.Hope</span></span>
<span class="line"><span style="color:#88C0D0;">hello,</span><span style="color:#A3BE8C;"> Mr.Hope</span></span></code></pre></div><p>但是程序运行的时候，没有任何提示信息告诉用户:“嘿，赶紧输入您的名字”，这样显得很不友好。所以 <code>input()</code> 可以让您显示一个字符串来提示用户，于是我们把代码改成:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">name </span><span style="color:#81A1C1;">=</span><span style="color:#88C0D0;"> input</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">please enter your name: </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#88C0D0;">print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">hello,</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> name</span><span style="color:#ECEFF4;">)</span></span></code></pre></div><p>再次运行这个程序，您会发现，程序一运行，会首先打印出 <code>please enter your name:</code>，这样，用户就可以根据提示，输入名字后，得到 <code>hello, xxx</code> 的输出:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">C:/Workspace</span><span style="color:#D8DEE9FF;">&gt; </span><span style="color:#A3BE8C;">python</span><span style="color:#A3BE8C;"> hello.py</span></span>
<span class="line"><span style="color:#88C0D0;">please</span><span style="color:#A3BE8C;"> enter</span><span style="color:#A3BE8C;"> your</span><span style="color:#A3BE8C;"> name:</span><span style="color:#A3BE8C;"> Mr.Hope</span></span>
<span class="line"><span style="color:#88C0D0;">hello,</span><span style="color:#A3BE8C;"> Mr.Hope</span></span></code></pre></div><p>每次运行该程序，根据用户输入的不同，输出结果也会不同。</p><p>在命令行下，输入和输出就是这么简单。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>任何计算机程序都是为了执行一个特定的任务，有了输入，用户才能告诉计算机程序所需的信息，有了输出，程序运行后才能告诉用户任务的结果。</p><p>输入是 Input，输出是 Output，因此，我们把输入输出统称为 Input/Output，或者简写为 IO。</p><p><code>input()</code> 和 <code>print()</code> 是在命令行下面最基本的输入和输出，但是，用户也可以通过其他更高级的图形界面完成输入和输出，比如，在网页上的一个文本框输入自己的名字，点击“确定”后在网页上看到输出信息。</p>`,14);function t1(s1,e1){return s(),e("div",null,[p,l(" more "),r,a("div",c,[d,T,a("p",null,[t("设正方形的边长为 "),a("mjx-container",i,[(s(),e("svg",h,g)),y]),t(" ，则正方形的面积为 "),a("mjx-container",E,[(s(),e("svg",u,F)),C]),t(" 。把边长 "),a("mjx-container",_,[(s(),e("svg",x,L)),w]),t(" 看做一个变量，我们就可以根据 "),a("mjx-container",v,[(s(),e("svg",H,V)),Z]),t(" 的值计算正方形的面积，比如:")]),a("p",null,[t("若 "),a("mjx-container",k,[(s(),e("svg",A,b)),j]),t(" ，则面积为 "),a("mjx-container",S,[(s(),e("svg",J,G)),N]),t(" ；")]),a("p",null,[t("若 "),a("mjx-container",z,[(s(),e("svg",O,q)),R]),t("，则面积为 "),a("mjx-container",W,[(s(),e("svg",K,X)),Y]),t(" 。")]),$]),a1])}const l1=n(Q,[["render",t1],["__file","io.html.vue"]]),Q1=JSON.parse('{"path":"/code/language/python/guide/io.html","title":"输入和输出","lang":"zh-CN","frontmatter":{"title":"输入和输出","icon":"IO","author":"廖雪峰","date":"2020-05-20T00:00:00.000Z","category":"Python","description":"一个脚本语言少不了与用户进行交互，就一定涉及到输入输出。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/python/guide/io.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"输入和输出"}],["meta",{"property":"og:description","content":"一个脚本语言少不了与用户进行交互，就一定涉及到输入输出。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"输入和输出\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-20T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"输出","slug":"输出","link":"#输出","children":[]},{"level":2,"title":"输入","slug":"输入","link":"#输入","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":3.53,"words":1058},"filePathRelative":"code/language/python/guide/io.md","localizedDate":"2020年5月20日","excerpt":"<p>一个脚本语言少不了与用户进行交互，就一定涉及到输入输出。</p>\\n","autoDesc":true}');export{l1 as comp,Q1 as data};
