import{_ as c,X as o,Y as u,Z as t,a2 as e,a3 as l,$ as n,a0 as s,H as i}from"./framework-e3372978.js";const p={},r=l('<p>在网站布局中，应当以 normal flow, flex 和 grid 布局为主。只有在需要特殊样式无法满足时，再考虑 float 布局。</p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>把一个元素“浮动”(float)起来，会改变该元素本身和在正常布局流(normal flow)中跟随它的其他元素的行为。这一元素会浮动到左侧或右侧，并且从正常布局流(normal flow)中移除，这时候其他的周围内容就会在这个被设置浮动(float)的元素周围环绕。</p><p><code>float</code> 属性有四个可能的值:</p><ul><li><code>inherit</code>: 继承父元素的浮动属性。</li><li><code>left</code>: 将元素浮动到左侧。</li><li><code>right</code>: 将元素浮动到右侧。</li><li><code>none</code>: 默认值, 不浮动。</li></ul>',5),k=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Simple float example"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Float"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),d=n("div",{class:"language-css","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 150px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 150px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),s(" 30px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),m=n("p",null,"注意浮动内容仍然遵循盒子模型诸如外边距和边界。",-1),v=n("h2",{id:"首字下沉",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#首字下沉","aria-hidden":"true"},"#"),s(" 首字下沉")],-1),b=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  This is my very important paragraph. I am a distinguished gentleman of such
  renown that my paragraph needs to be styled in a manner befitting my majesty.
  Bow before my splendour, dear students, and go forth and learn CSS!
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),g=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"p"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 400px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0 auto"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"p::first-line"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"text-transform"),n("span",{class:"token punctuation"},":"),s(" uppercase"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"p::first-letter"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 3em"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid black"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 2px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),s(" 4px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("h2",{id:"多列浮动布局",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多列浮动布局","aria-hidden":"true"},"#"),s(" 多列浮动布局")],-1),f=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("2 column layout example"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("First column"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
      Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
      convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
      Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas
      augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut
      id ornare felis, eget fermentum sapien.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Second column"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra
      quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-css","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".container > div:nth-of-type(1)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 48%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".container > div:nth-of-type(2)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 48%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" right"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),x=n("p",null,"所有列使用宽度百分比会创建一个流式布局(liquid layout)。请尝试调整浏览器窗口的宽度，以便自己查看。需要注意的一件事是，当它们变得非常窄时，列就会变得很糟糕。切换回窄屏幕的单列布局通常是有意义的 (如手机)，使用媒体查询可以实现这一功能。",-1),q=n("p",null,"另一种选择是将宽度设置为一个固定的单位如 rem 或像素，这就是固定宽度布局(fixed-width layout)",-1),N=n("h2",{id:"清除浮动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#清除浮动","aria-hidden":"true"},"#"),s(" 清除浮动")],-1),E=n("p",null,"有些情况下，浮动元素内容过多会错乱排版。",-1),V=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Float disaster"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("First column"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Second column"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Third column"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
      Nam consequat scelerisque mattis. Duis pulvinar dapibus magna, eget congue
      purus mollis sit amet. Sed euismod lacus sit amet ex tempus, a semper
      felis ultrices. Maecenas a efficitur metus. Nullam tempus pharetra
      pharetra. Morbi in leo mauris. Nullam gravida ligula eros, lacinia
      sagittis lorem fermentum ut. Praesent dapibus eros vel mi pretium, nec
      convallis nibh blandit. Sed scelerisque justo ac ligula mollis laoreet. In
      mattis, risus et porta scelerisque, augue neque hendrerit orci, sit amet
      imperdiet risus neque vitae lectus.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("footer")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("©2020 Mr.Hope A very handsooooooooooooooooome man."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("footer")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".container"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 90%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),s(" 900px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0 auto"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".container > div:nth-of-type(1)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 36%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".container > div:nth-of-type(2)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 30%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),s(" 4%"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".container > div:nth-of-type(3)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 26%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" right"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=l(`<p>为了解决这个问题，您需要在页脚清除浮动。</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">footer</span> <span class="token punctuation">{</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>clear 可以取三个值:</p><ul><li><code>left</code>: 停止任何活动的左浮动</li><li><code>right</code>: 停止任何活动的右浮动</li><li><code>both</code>: 停止任何活动的左右浮动</li></ul>`,4),C=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Float disaster"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("First column"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Second column"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Third column"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
      Nam consequat scelerisque mattis. Duis pulvinar dapibus magna, eget congue
      purus mollis sit amet. Sed euismod lacus sit amet ex tempus, a semper
      felis ultrices. Maecenas a efficitur metus. Nullam tempus pharetra
      pharetra. Morbi in leo mauris. Nullam gravida ligula eros, lacinia
      sagittis lorem fermentum ut. Praesent dapibus eros vel mi pretium, nec
      convallis nibh blandit. Sed scelerisque justo ac ligula mollis laoreet. In
      mattis, risus et porta scelerisque, augue neque hendrerit orci, sit amet
      imperdiet risus neque vitae lectus.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("footer")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("©2020 Mr.Hope A very handsooooooooooooooooome man."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("footer")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".container"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 90%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),s(" 900px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0 auto"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".container > div:nth-of-type(1)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 36%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".container > div:nth-of-type(2)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 30%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),s(" 4%"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".container > div:nth-of-type(3)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 26%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" right"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"footer"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"clear"),n("span",{class:"token punctuation"},":"),s(" both"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=l(`<p>您通常只想设定一个 <code>clear: both</code> 在您想让浮动停止的元素上。在某些情况下，您会想要只取消 left 或 right 引用。</p><h2 id="其他浮动问题" tabindex="-1"><a class="header-anchor" href="#其他浮动问题" aria-hidden="true">#</a> 其他浮动问题</h2><h3 id="宽度计算" tabindex="-1"><a class="header-anchor" href="#宽度计算" aria-hidden="true">#</a> 宽度计算</h3><p>到目前为止，我们的例子是没有应用样式的浮动框——这很容易。当您开始给这些框加上样式时，比如添加背景、外边距、内边距等等，问题就来了。</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div,
footer</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1%<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid black<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>有两个方法可以解决问题，最好的方法是给您的 HTML 加上下面的 CSS。</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>box-sizing</code> 通过更改盒模型将宽度取值为 <code>content + padding + border</code>，而不仅是之前的 <code>content</code>。所以当增加内边距或边界的宽度时，不会使盒子更宽——而是会使内容调整得更窄。</p><p>我们有另一个问题: 页脚正压在最长列上。但是如果试着清除页脚浮动的同时给出一些顶部外边距 <code>margin-top</code></p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">footer</span> <span class="token punctuation">{</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 4%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>您会发现它们不起作用。</p><p>浮动元素有以下性质:</p><ul><li>他们在父元素中所占的面积的有效高度为 0</li><li>非浮动元素的外边距不能用于它们和浮动元素之间来创建空间</li></ul><p>为了解决这个问题，我们需要添加新的 <code>&lt;div&gt;</code> 元素，位于在 <code>&lt;footer&gt;</code> 标签的上方:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clearfix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>如果您没有一个可用的元素来清除您的浮动(比如我们的页脚)，在您想要清除的浮动之后添加一个看不见的“clearfix div”是非常有用的，但是在这里页脚也要用到。接下来我们要做的是，移除页脚样式规则中的 <code>clear: both;</code> 声明，取而代之将其放在 clearfix div 中:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这个时候页脚现顶部外边距就会生效。</p><p>但是这会造成另一个问题: clearfix div 背景、内边距和边界与我们的列和页脚相同</p><p>为了解决这个问题，让我们先给每个列块一个类( class )column:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>column<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>之后改变应用盒子样式的规则到这些块和页脚，这样只有列块被样式化:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.column,
footer</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1%<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid black<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,23),A=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Fixed layout border-box"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("column"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("First column"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("column"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Second column"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("column"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("Third column"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
      Nam consequat scelerisque mattis. Duis pulvinar dapibus magna, eget congue
      purus mollis sit amet. Sed euismod lacus sit amet ex tempus, a semper
      felis ultrices. Maecenas a efficitur metus. Nullam tempus pharetra
      pharetra. Morbi in leo mauris. Nullam gravida ligula eros, lacinia
      sagittis lorem fermentum ut. Praesent dapibus eros vel mi pretium, nec
      convallis nibh blandit. Sed scelerisque justo ac ligula mollis laoreet.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("clearfix"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("footer")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("©2020 Mr.Hope A very handsooooooooooooooooome man."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("footer")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".container"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 90%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),s(" 900px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0 auto"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".container > div:nth-of-type(1)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 36%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".container > div:nth-of-type(2)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 30%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),s(" 4%"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".container > div:nth-of-type(3)"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 26%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" right"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"footer"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 4%"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".clearfix"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"clear"),n("span",{class:"token punctuation"},":"),s(" both"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},`.column,
footer`),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 1%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 2px solid "),n("span",{class:"token function"},"rgb"),n("span",{class:"token punctuation"},"("),s("255"),n("span",{class:"token punctuation"},","),s(" 84"),n("span",{class:"token punctuation"},","),s(" 104"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("255"),n("span",{class:"token punctuation"},","),s(" 84"),n("span",{class:"token punctuation"},","),s(" 104"),n("span",{class:"token punctuation"},","),s(" 0.3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"*"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"box-sizing"),n("span",{class:"token punctuation"},":"),s(" border-box"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function P(M,Q){const a=i("CodeDemo");return o(),u("div",null,[r,t(a,{id:"code-demo-34",type:"normal",title:"float%20%E6%A1%88%E4%BE%8B",code:"eJxFk0GL3DAMhf+KyDnNdim9bKcLpaWwUEph6W0uGkeTCBzbteV0Ydn/3udkpnMytuVPT0/yazfb4ruH7jDfPz7rkrzQ2Uc2khduu8MdLo7hGA6jruQ8l/L52J3iy7F7/N4CD3e42CMSFqIfMctCmkpdaIw+ZipqxItYTy6GIs7EaiYeNWlxGiYSrzbQz+o9k6/OaiH2+qfy0oAbpCep5BnhipgtRcJWMqSu1adqbDLQt6qFzuAVitlpT6n6VQNn0pEgoZZGrJCSq2UovKRrwQN9zVwoxWymBt2wQ/KoYhRqcD0hVfWW1akUMvF+p3mGHARdyxzoWUZigMFwNRfwF/jGDdDoPNBTMJkkk9epoujNrb7BgC+G0uU/btNGq/ieVl0lZyY8LQap+2vorplP2kxdZVbXiDd5QUCDeAcQjBB0FnK8lMojUJD7FEA2ltaelX0zD9bWMtCXvQvUbG6sNfpqiVuJtSQJo5YiDX2zCirQVjyVIBzojIadYECJ4DpoHDUAFzdpaYYeQ0FIPNVr+64yL0VyxRVadmnVQL9yBOPkGemNNn1B3N4JqKaVs2JxcVniGFEhMVUwB/ptbQwu/G1KMFYTAs6SFwmGeSicVMKAab5r49z1nSsF/2PAyNNrS7J9jwfycrZPbf9XR5sf6P7j+/SyHcyi04yI28nCedLwLu/nH/bjN9Df/gEnEkEa"},{default:e(()=>[k,d]),_:1}),m,v,t(a,{id:"code-demo-44",type:"normal",title:"%E9%A6%96%E5%AD%97%E4%B8%8B%E6%B2%89",code:"eJxlkD9PAzEMxb+KubmF8mcKiAEmZhi7uI3vEkicyPHRFsR3xzkkJISUIXn2+8XPn0PQnAY33NX7LQO8hNjATj7BO8kJYq5FFFmhouAkWMM5PAFmQPCxaeRpji2Qh4lYE2VkKCO0eR86TojLgUEDakf+MoCJfAMtsCNoekoGiGxM8zOJqWPUDu+ujK9kPecd+FAOvViEeqXVROzLLCvwhGKk2dsYbQXINlEBa9SwPJLVGR6fn8+2fHfRww6rYd+aRa/w2dGH6DU4uNls6vG2CxlliuxgAzhrMelry1uuzo1Rmq5TZPpxKh11rYLc7L/sYK6VZI+N/ntI1eItrrGwrlv8IAfXlJcfd0U8iYPLeoRWUvSwS7h/+6nZZZIys3e2Vr9oYyqozrKNurwrem9Lc3D1J8Ja4hSs72ZRbaLh6xvxabB0"},{default:e(()=>[b,g]),_:1}),h,t(a,{id:"code-demo-51",type:"normal",title:"%E5%A4%9A%E5%88%97%E6%B5%AE%E5%8A%A8%E5%B8%83%E5%B1%80",code:"eJx9VF2LFEkQ/CvJwMEdjL243MOxNy7IiiCoCKJP+5JTlTOTUF3VVmW1ivjfjeqvQZB92pmdzMjIiMj6sbtYH3Z3u4PXkVzgUl487lyKxholP+7uHyPR4fL8/pZcCrWPFPh7qkbyjfshyOEGv001AJg+tPLb+9eaiy0tqLldfxqWD0RvU5aedCi1J59CylTUiHuxPfpiEWdiNRN7HbQ4jWeSoNbR+xoCU6jOalnBOOiXygvQnqSCJloUddOYAV8ls9FYw1CNTTp6VbXQCZiFUna6X7GGGkaNnEk9gU0tVEEpV8tgOo+dGjp6yFxoSNlMDfy1HyR7FaNYo9vwMLUGy+pUCpmEgP7AoIXCdeWOPoonBjhwXM0FNT3M4NbdJnC3wr2JJmfJFPRcocMk4J6AXwwayAY5caRRwp5GHSVnJvQVA+W5dUN8qJmP2rQe5aKuoS40owBxT+wABkUEroNWkFLZAw6030SgG8uKBedGDk1TKF5LRy8XZ2b1kQcbuK1byyDRaynS4K/SgQbs3ri9lCgc6QQvjyBUErAduHqNgEyQ/wJehuUw+VxXW1e688KbExUVcHNxsaMPOQHnGBhMjCaeUdxMnUbOij8u9X3yCdsSUwVuR59sRUREllFTkJC8M+pOknuJhrgUHlTiss3hZk7/4Wa+lT+czUfBGv7Ju3kPkluKyevC2aRHTuioR8hae+iQplXmvM6bT+Q2/1bAOZzS5LhwmY2fXSCot0f8ShVsuAXLY6lmRjuLE84Mi6O2iF8R0YYzBTHIg1yi9EszhZFclDWrf7vwidZ6wdO9dvRZR+6v932Nd3sD1jPHSBrgvkLp+VIxy+G5QNIkdPSOK/qu17eiBUxuxWgP6Yjrag/BnLBtcntDmtszO8ABdDnM5ZxWtGm3ETujH7a1Da+xN41OfY14MBvOUDMAkDmFFnny6aG1JKe60Ytsqa2KA+EGCi7NtnPEHFwMDZwhG3KF/+KlFsQucnGTlll9u+D2fGCZP+du/bvb71wpePy77cGne0wY76JdnqXTM/s+yN/P/6Efrfurervc0b///fV/+3oKie0OUp4M33+2ND8Jc/skTNbzZcHZ/fwFj/JHyA=="},{default:e(()=>[f,y]),_:1}),x,q,N,E,t(a,{id:"code-demo-67",type:"normal",title:"%E4%B8%80%E4%B8%AA%E7%B3%9F%E7%B3%95%E7%9A%84%E6%B5%AE%E5%8A%A8%E5%B8%83%E5%B1%80",code:"eJyNVe2KG0cQfJVGEEhAtyfLIRDlchASTAI5Y3DIr/vT2m1pO8zHej6UM8YP5Nfwk7lmd2d1Ooxt/dLsTtdUV1XPvlv1yZrVbnXT6YlawzH+er9qvUusTsL96vbeEd30z25fGM+JOo0ck4Sbazy6d+NLVI67yr7t7QsNMVHrTbYOu7b11TD/IfrbB7GkQ8yWOm98oKiJ2Epao85FaZOkHIg7HTS26o4kRlNDL7MxTCa3KccKxkbfZJ6B1iSZDKNEsW88ZsBSApifshly4iQN/ZE10gGYkXxodV2xhmxO6jiQdgQ2OVIGpZBTANPp2LGgod8DRxp8SEkT+KsdJHQqiVx27YKHU7NJQVuVSEmMQb1h0MLG2nJDr6UjBjhw2hwi9li4wKW6nMDNLOD1pODN9aT3Z6R/LZCv+6L2LyHVogTcxNJJC3IWZ9Fe9+K6bCGRL4/nnjkfs5AcQduykZi54wo4NSixoVc9x6lHmAfjSCLUG3zMEmTplzoedD9Le4BVcAF7o3QVEWWwGsTgQtCix5viFzsQjuAp0OlRSkZaNQWj5w39qye254yAYUzYgB6QoxoVHElDkKQwd3IbZ7WIHLIipqE7zqg7O1jRDE4um1Fu/B4OlTAhcWjq2636p9fwxKnPejV2itYQmFaMgFBpwzKCB8nHIC+prcpaPjrGKBRhUA/vzgEP5b03JfqXCRRAWY+WuC3NVbfkYcxGjmviWf0KNg3Q2f87llYc5oJJDgdIVtwZhZ0n185QNPQM3cOSoboGhg97JXUQ2aOPYsBSfAx80g5zrceMa0CCB6l52CtS5KMWaebhP0iw4hIMzmjzVWCJWC5CFYjiNVmtSViXcahoEO/Eo1Zwt6e9YdeVe6jo9diO/3JMnhjzMlGbBZ5HvaG/Zm9pNg53yphr6DtO+GMw6DxOm4PrQj3GMeBNmi6qxZeKd754JsSp6qSJZc7plyJ58B5X+fmS+Phhu9lu6C40f/pB6DdoE95Sj66jf/qzJYWuOeMuYPWI1XrVxohPS7N8Tuhd2fu/dqnf0c+b734pS8sPV8ujzfAwPwxHdTvaQI7k8eh94fwI6RaX12nnUn/lD1fp7SDfP/vhAv75TxP8oXy3dlDjkL4JZvsEZmZ5CVMJXpX1jn4se74O/fwSenvJMOixnymu3n8CNoeYkA=="},{default:e(()=>[V,w]),_:1}),J,t(a,{id:"code-demo-95",type:"normal",title:"%E6%94%B9%E8%BF%9B%E5%90%8E%E7%9A%84%E6%B5%AE%E5%8A%A8%E5%B8%83%E5%B1%80",code:"eJyNVduKG0cQ/ZVCEEhAOyvLIRBlsxASTAJZY3DI076UZkqaCn0Z90VZY/xB/g1/mU/PTI9Wi7GtJ3V31emqc071vFv1yZrVbnXT6YlawzH+er9qvUusTsL96vbeEd30z25fGM+JOo0ck4Sba2zdu/EQmWNUidvevtAQE7XeZOsQta1Hw/yH6G8fxJIOMVvqvPGBoiZiK2mNPBelTZJyIO500NiqO5IYTQ29zMYwmdymHCsYG32TeQZak2QyjBRF3HjNgKUEVH7KZsiJkzT0R9ZIB2BG8qHVdcUasjmp40DaEarJkTJKCjkFVDpdOyY09HvgSIMPKWlC/WoHCZ1KIpddu+Dh1mxS0FYlUhJjkG8YZSGwttzQa+mIAQ6cNoeIGAsVuGSXG7iZCbyeGLy5nvj+DPWvBfR1X+T+JahamICaWDppUZzFXbTXvbguW1Dky/bcM+djFpIjyrZsJGbuuAJODUps6FXPceoR4kE4kgj2Bh+zBFn6pY4H3c/UHiAVVEBslK4iIg1SozCoELTw8aboxQ4FR9Qp4OmRS8ayqgtGzRv6V09szx5BhTEhAD3AR9UquJKGIEkh7qQ27mphOXhFTEN3nJF3VrCiGdxcgpFu/B4KFTPBcWjq26X6p9fwRKnPajV2itZgmFaMoKDShmUYD5SPRl5cW5m1fHSMUSjEIB/anQ0eyrk3xfqXDhRAWY+WuC3NVbXkYfRGjmvimf0KNg3QWf87llYc5oJJDgdQVtQZiZ0n185QNPQM3sPioboGhg97JXUg2aOPIsCSfAx80g5zrceMZ0CCR1HzsFekyEct1MzDf5BgxSUInNHmq8ASsVyIKhBFa7JanbAu41DRQN6JR66gbk97w64r71Dh67Ec/+WYPDHmZSptJnge9Yb+mrWlWTi8KaOvwe844Y/BwPM4bQ6qC/UYx4CTND1Uiy4V7/zwTIhT1kkTy+zTL1ny4D2e8vMj8fHDdrPd0F1o/vSD0G/gJrylHl1H//Rniwtdc8ZdwOoVq/WqjRGflmb5nNC7Evu/dqnf0c+b734pS8sPV8vWZniYN8NR3Y42oCN5bL0vNT9CusXjddq51F/5w1V6O8j3z364gH/+0wR/KN+tHdg4pG+C2T6Bmau8hKkFXpX1jn4sMV+Hfn4Jvb2sMOixX0qc2JzCWyMcdrT3qZ+OV+8/AWqho+g="},{default:e(()=>[C,B]),_:1}),S,t(a,{id:"code-demo-163",type:"normal",title:"%E6%9C%80%E7%BB%88%E7%BB%93%E6%9E%9C",code:"eJylVduOG0UQ/ZWSJaQE2Y7Xu0FglpUQCPFAokhBPO1LzUzNTEFP96QvxkuUD+I3+DJOz83rFYKV8JN7uvrUqXOquj+u2tiZ1WF1W+mRSsMhfHO/Kp2NrFb8/eru3hLdtld3P+hJKjL84FKkwvlK/KZwp9tX2Lu3Q9QlhEmdnc5nhD0QfIg0buDYft7qpz9EPzkvHWkfUkeVM85T0EjcSVzjnA1SRonJE1faayjVNiRG45beJmOYTCpjCjMYG/2QeAJakySQxxFF3JCmx1I8Rzom06fIUbb0fdJANTADOV/qesbqkzmqZU9aEdikQAmUfIoeTMe0w4Etfec5UO98jBrBX7tefKUSySZbLnjImkz0WqoEimIMzhsGLQTOJW8neV6N+ty+grzPVPq9QK3qX6V+C2WWwqlSLK2U4NKBPBVaiK1SB0Vc/jyVyKlJQtKAZcdGQuKKZ8CxHglbetdyGEuCV/CJJECs3oUkXpbyqOJei0nJGs5AdMQGqWZEHIOzIAbRvQaEfsj2sAXhAJ7iL5pioDWbPli8pV/0yN25JcAwRASgBrTN3BlISb2XqPByNBe5SnQYWkPM/7Dh51b9Exf+0YehCtCG96UYAclMsWP0EOQcenJpwFm1jhvL6OpcNM7Dl3Ov+rzvTO7ipZnoPaoUQHUuT3GZq5ydkNPgewpr4knZGWychbO3b1hKsWhxJqlr9G9WfhBtGsJugqK+ZWjql/6Y18BwvlBSS0Yc6kiodznceD5qhRHVJmGixTuQmuZ2RgrcaJZmmuNafCc2wryEMt95loDlIlSGyD5Sp7PL69zqMxrEO/KgldWipcKwrfKVkvV6bMevKURHjFkYqU0CT1P77C4xwr7WE/rkIqZ2Loo/j+lff+53+x298dsfXS/0LSrwD9SCW3BPf13uFbs9517A5hSr9aoMAbf8drnZ6WOO/V2r2B7oq91nX+dlx6fN8mnXn6aPvlF7oB3GPzp8+pQ5P0K6w/VxPNjYbly9iQ+9vLh6eQF//cUIXxvH8QDb6/gsmP0TmInlJcxMcJPXB7rJMf8NfX0Jvb9k6LVpF4qjmmP4lCq6/jLT5OoYNKwOeCNj+4hLvgRw/z9G67mq8IYd6GrMPr6qYNOfKDiTr72meLF//XpNX96s6Wp383KM4/K3xrtkK1BtCr4IWdNue53jhsSfj5nwUG+C/jEkO7/dY9Dq098xNbjk"},{default:e(()=>[A,D]),_:1})])}const G=c(p,[["render",P],["__file","float.html.vue"]]);export{G as default};
