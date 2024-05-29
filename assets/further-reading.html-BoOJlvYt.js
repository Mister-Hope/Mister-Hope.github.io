import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as n,d as a,e,f as t,b as p}from"./app-C6d_tW6U.js";const i={},s=e("p",null,[t("此处记录了"),e("a",{href:"http://www.typescriptlang.org/docs/handbook/basic-types.html",target:"_blank",rel:"noopener noreferrer"},"官方手册"),t("("),e("a",{href:"https://zhongsp.gitbooks.io/typescript-handbook/content/",target:"_blank",rel:"noopener noreferrer"},"中文版"),t(")中包含，但是本书未涉及的概念。")],-1),l=p('<p>我认为它们是一些不重要或者不属于 TypeScript 的概念，所以这里只给出一个简单的释义，详细内容可以点击链接深入理解。</p><ul><li><a href="http://www.typescriptlang.org/docs/handbook/basic-types.html#never" target="_blank" rel="noopener noreferrer">Never</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#never" target="_blank" rel="noopener noreferrer">中文版</a>): 永远不存在值的类型，一般用于错误处理函数</li><li><a href="http://www.typescriptlang.org/docs/handbook/variable-declarations.html" target="_blank" rel="noopener noreferrer">Variable Declarations</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Variable%20Declarations.html" target="_blank" rel="noopener noreferrer">中文版</a>): 使用 <code>let</code> 和 <code>const</code> 替代 <code>var</code>，这是 <a href="http://es6.ruanyifeng.com/#docs/let" target="_blank" rel="noopener noreferrer">ES6 的知识</a></li><li><a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Functions.html#this" target="_blank" rel="noopener noreferrer"><code>this</code></a>: 箭头函数的运用，这是 <a href="http://es6.ruanyifeng.com/#docs/function" target="_blank" rel="noopener noreferrer">ES6 的知识</a></li><li><a href="http://www.typescriptlang.org/docs/handbook/generics.html#using-class-types-in-generics" target="_blank" rel="noopener noreferrer">Using Class Types in Generics</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Generics.html#%E5%9C%A8%E6%B3%9B%E5%9E%8B%E9%87%8C%E4%BD%BF%E7%94%A8%E7%B1%BB%E7%B1%BB%E5%9E%8B" target="_blank" rel="noopener noreferrer">中文版</a>): 创建工厂函数时，需要引用构造函数的类类型</li><li><a href="http://www.typescriptlang.org/docs/handbook/type-inference.html#best-common-type" target="_blank" rel="noopener noreferrer">Best common type</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html#%E6%9C%80%E4%BD%B3%E9%80%9A%E7%94%A8%E7%B1%BB%E5%9E%8B" target="_blank" rel="noopener noreferrer">中文版</a>): 数组的类型推论</li><li><a href="http://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-type" target="_blank" rel="noopener noreferrer">Contextual Type</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html#%E4%B8%8A%E4%B8%8B%E6%96%87%E7%B1%BB%E5%9E%8B" target="_blank" rel="noopener noreferrer">中文版</a>): 函数输入的类型推论</li><li><a href="http://www.typescriptlang.org/docs/handbook/type-compatibility.html" target="_blank" rel="noopener noreferrer">Type Compatibility</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Compatibility.html" target="_blank" rel="noopener noreferrer">中文版</a>): 允许不严格符合类型，只需要在一定规则下兼容即可</li><li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types" target="_blank" rel="noopener noreferrer">Advanced Types</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E4%BA%A4%E5%8F%89%E7%B1%BB%E5%9E%8B(intersection-types)" target="_blank" rel="noopener noreferrer">中文版</a>): 使用 <code>&amp;</code> 将多种类型的共有部分叠加成一种类型</li><li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types" target="_blank" rel="noopener noreferrer">Type Guards and Differentiating Types</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E7%B1%BB%E5%9E%8B%E4%BF%9D%E6%8A%A4%E4%B8%8E%E5%8C%BA%E5%88%86%E7%B1%BB%E5%9E%8B(type-guards-and-differentiating-types)" target="_blank" rel="noopener noreferrer">中文版</a>): 联合类型在一些情况下被识别为特定的类型</li><li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions" target="_blank" rel="noopener noreferrer">Discriminated Unions</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%8F%AF%E8%BE%A8%E8%AF%86%E8%81%94%E5%90%88(discriminated-unions)" target="_blank" rel="noopener noreferrer">中文版</a>): 使用 <code>|</code> 联合多个接口的时候，通过一个共有的属性形成可辨识联合</li><li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#polymorphic-this-types" target="_blank" rel="noopener noreferrer">Polymorphic <code>this</code> types</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%A4%9A%E6%80%81%E7%9A%84this%E7%B1%BB%E5%9E%8B" target="_blank" rel="noopener noreferrer">中文版</a>): 父类的某个方法返回 <code>this</code>，当子类继承父类后，子类的实例调用此方法，返回的 <code>this</code> 能够被 TypeScript 正确的识别为子类的实例。</li><li><a href="http://www.typescriptlang.org/docs/handbook/symbols.html" target="_blank" rel="noopener noreferrer">Symbols</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Symbols.html" target="_blank" rel="noopener noreferrer">中文版</a>): 新原生类型，这是 <a href="http://es6.ruanyifeng.com/#docs/symbol" target="_blank" rel="noopener noreferrer">ES6 的知识</a></li><li><a href="http://www.typescriptlang.org/docs/handbook/iterators-and-generators.html" target="_blank" rel="noopener noreferrer">Iterators and Generators</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Iterators%20and%20Generators.html" target="_blank" rel="noopener noreferrer">中文版</a>): 迭代器，这是 <a href="http://es6.ruanyifeng.com/#docs/iterator" target="_blank" rel="noopener noreferrer">ES6 的知识</a></li><li><a href="http://www.typescriptlang.org/docs/handbook/namespaces.html" target="_blank" rel="noopener noreferrer">Namespaces</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Namespaces.html" target="_blank" rel="noopener noreferrer">中文版</a>): 避免全局污染，现在已被 <a href="http://es6.ruanyifeng.com/#docs/module" target="_blank" rel="noopener noreferrer">ES6 Module</a> 替代</li><li><a href="http://www.typescriptlang.org/docs/handbook/decorators.html" target="_blank" rel="noopener noreferrer">Decorators</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Decorators.html" target="_blank" rel="noopener noreferrer">中文版</a>): 修饰器，这是 <a href="http://es6.ruanyifeng.com/#docs/decorator" target="_blank" rel="noopener noreferrer">ES2016 的一个提案</a></li><li><a href="http://www.typescriptlang.org/docs/handbook/mixins.html" target="_blank" rel="noopener noreferrer">Mixins</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Mixins.html" target="_blank" rel="noopener noreferrer">中文版</a>): 一种编程模式，与 TypeScript 没有直接关系，可以参考 <a href="http://es6.ruanyifeng.com/#docs/class#Mixin%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%AE%9E%E7%8E%B0" target="_blank" rel="noopener noreferrer">ES6 中 Mixin 模式的实现</a></li></ul>',2);function c(h,d){return o(),n("div",null,[s,a(" more "),l])}const m=r(i,[["render",c],["__file","further-reading.html.vue"]]),f=JSON.parse('{"path":"/code/language/typescript/advanced/further-reading.html","title":"扩展阅读","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"扩展阅读","icon":"quote","category":"TypeScript","description":"此处记录了官方手册(中文版)中包含，但是本书未涉及的概念。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/typescript/advanced/further-reading.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"扩展阅读"}],["meta",{"property":"og:description","content":"此处记录了官方手册(中文版)中包含，但是本书未涉及的概念。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"扩展阅读\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":2.21,"words":664},"filePathRelative":"code/language/typescript/advanced/further-reading.md","localizedDate":"2020年5月4日","excerpt":"<p>此处记录了<a href=\\"http://www.typescriptlang.org/docs/handbook/basic-types.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方手册</a>(<a href=\\"https://zhongsp.gitbooks.io/typescript-handbook/content/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">中文版</a>)中包含，但是本书未涉及的概念。</p>\\n","autoDesc":true}');export{m as comp,f as data};
