import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as i,f as l,d as o,b as a}from"./app-S62fdHqc.js";const n="/assets/viewgroup-vB8dX0Zg.png",r="/assets/layout-editor-nmnq8Hd0.png",p="/assets/constraint-example-dGeqS1p1.png",s={},c=o("p",null,"在本节课中，您将学习如何使用 Android Studio 布局编辑器创建包含一个文本框和一个按钮的布局。这将为下一课打下基础，下节课将学习如何在点按该按钮时让应用将文本框的内容发送到其他 activity。",-1),d=a('<p>Android 应用的界面 (UI) 以布局和微件的层次结构形式构建而成。布局是 ViewGroup 对象，即控制其子视图在屏幕上的放置方式的容器。微件是 View 对象，即按钮和文本框等界面组件。</p><figure><img src="'+n+'" alt="ViewGroup" tabindex="0" loading="lazy"><figcaption>ViewGroup</figcaption></figure><p>Android 提供了 ViewGroup 和 View 类的 XML 词汇表，因此界面的大部分内容都在 XML 文件中定义。不过，本节课将向您介绍如何使用 Android Studio 的布局编辑器创建布局，而不是教您编写 XML 代码。布局编辑器会在您拖放视图构建布局时为您编写 XML 代码。</p><h2 id="打开布局编辑器" tabindex="-1"><a class="header-anchor" href="#打开布局编辑器"><span>打开布局编辑器</span></a></h2><p>首先，请按照以下步骤设置工作区：</p><ol><li>在 Project 窗口中，依次打开 app &gt; res &gt; layout &gt; activity_main.xml。</li><li>若要给布局编辑器留出空间，请隐藏 Project 窗口。为此，请依次选择 View &gt; Tool Windows &gt; Project，或直接点击 Android Studio 屏幕左侧的 Project。</li><li>如果您的编辑器显示 XML 源代码，请点击窗口右上角的 Design 标签页。</li><li>点击 (Select Design Surface)，然后选择 Blueprint。</li><li>点击布局编辑器工具栏中的 (View Options)，并确保选中 Show All Constraints。</li><li>确保 Autoconnect 处于关闭状态。当 Autoconnect 处于关闭状态时，工具栏中的提示会显示 (Enable Autoconnection to Parent)。</li><li>点击工具栏中的 (Default Margins)，然后选择 16。如果需要，您可以稍后调整每个视图的外边距。</li><li>点击工具栏中的 (Device for Preview)，然后选择 5.5, 1440 × 2560, 560 dpi (Pixel XL)。</li></ol><p>您的布局编辑器现在如下图所示。</p><figure><img src="'+r+'" alt="布局编辑器" tabindex="0" loading="lazy"><figcaption>布局编辑器</figcaption></figure><p>左下方的 Component Tree 面板显示布局的视图层次结构。在本例中，根视图是 ConstraintLayout，它仅包含一个 TextView 对象。</p><p>ConstraintLayout 是一种布局，它根据同级视图和父布局的约束条件定义每个视图的位置。这样一来，使用扁平视图层次结构既可以创建简单布局，又可以创建复杂布局。这种布局无需嵌套布局。嵌套布局是布局内的布局（如图 2 所示），会增加绘制界面所需的时间。</p><p>例如，您可以声明以下布局，如下图所示：</p><ul><li>视图 A 距离父布局顶部 16 dp。</li><li>视图 A 距离父布局左侧 16 dp。</li><li>视图 B 距离视图 A 右侧 16 dp。</li><li>视图 B 与视图 A 顶部对齐。</li></ul><figure><img src="'+p+'" alt="布局示例" tabindex="0" loading="lazy"><figcaption>布局示例</figcaption></figure><h2 id="添加文本框" tabindex="-1"><a class="header-anchor" href="#添加文本框"><span>添加文本框</span></a></h2><p>请按照下面的步骤添加文本框：</p><ol><li>首先，您需要移除布局中已有的内容。在 Component Tree 面板中点击 TextView，然后按 Delete 键。</li><li>在 Palette 面板中，点击 Text 以显示可用的文本控件。</li><li>将 Plain Text 拖动到设计编辑器中，并将其放在靠近布局顶部的位置。这是一个接受纯文本输入的 EditText 微件。</li><li>点击设计编辑器中的视图。现在，您可以在每个角上看到调整视图大小的正方形手柄，并在每个边上看到圆形约束锚点。为了更好地控制，您可能需要放大编辑器。为此，请使用布局编辑器工具栏中的 Zoom 按钮。</li><li>点击并按住顶边上的锚点，将其向上拖动，直至其贴靠到布局顶部，然后将其释放。这是一个约束条件：它会将视图约束在已设置的默认外边距内。在本例中，您将其设置为距离布局顶部 16 dp。</li><li>使用相同的过程创建一个从视图左侧到布局左侧的约束条件。</li></ol><h2 id="添加按钮" tabindex="-1"><a class="header-anchor" href="#添加按钮"><span>添加按钮</span></a></h2><ol><li>在 Palette 面板中，点击 Buttons。</li><li>将 Button 微件拖到设计编辑器中，并将其放在靠近右侧的位置。</li><li>创建一个从按钮左侧到文本框右侧的约束条件。</li><li>如需按水平对齐约束视图，请创建一个文本基线之间的约束条件。为此，请右键点击按钮，然后选择 Show Baseline 在布局编辑器中显示基准操作。基线锚点显示在按钮内部。点击并按住此锚点，然后将其拖动到相邻文本框中显示的基线锚点上。</li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>您还可以根据顶边或底边实现水平对齐。但按钮的图片周围有内边距，因此如果以这种方式对齐，那么它们看上去是没有对齐的。</p></div><h2 id="更改界面字符串" tabindex="-1"><a class="header-anchor" href="#更改界面字符串"><span>更改界面字符串</span></a></h2><p>若要预览界面，请点击工具栏中的 (Select Design Surface)，然后选择 Design。请注意，文本输入和按钮标签应设置为默认值。</p><p>若要更改界面字符串，请按以下步骤操作：</p><ol><li><p>打开 Project 窗口，然后打开 app &gt; res &gt; values &gt; strings.xml。</p><p>这是一个字符串资源文件，您可在此文件中指定所有界面字符串。您可以利用该文件在一个位置管理所有界面字符串，使字符串的查找、更新和本地化变得更加容易。</p></li><li><p>点击窗口顶部的 Open editor。此时将打开 Translations Editor，它提供了一个可以添加和修改默认字符串的简单界面。它还有助于让所有已翻译的字符串井然有序。</p></li><li><p>点击 (Add Key) 可以创建一个新字符串作为文本框的“提示文本”。此时会打开如图 7 所示的窗口。</p><p>在 Add Key 对话框中，完成以下步骤：</p><ul><li>在 Key 字段中输入“edit_message”。</li><li>在 Default Value 字段中输入“Enter a message”。</li><li>点击 OK。</li></ul></li><li><p>再添加一个名为“button_send”且值为“Send”的键。</p></li></ol><p>现在，您可以为每个视图设置这些字符串。若要返回布局文件，请点击标签页栏中的 activity_main.xml。然后，添加字符串，如下所示：</p><ol><li>点击布局中的文本框。如果右侧还未显示 Attributes 窗口，请点击右侧边栏上的 Attributes。</li><li>找到 text 属性（当前设为“Name”）并删除相应的值。</li><li>找到 hint 属性，然后点击文本框右侧的 (Pick a Resource)。在显示的对话框中，双击列表中的 edit_message。</li><li>点击布局中的按钮，找到其 text 属性（当前设为“Button”）。然后点击 (Pick a Resource)，并选择 button_send。</li></ol><h2 id="让文本框大小可灵活调整" tabindex="-1"><a class="header-anchor" href="#让文本框大小可灵活调整"><span>让文本框大小可灵活调整</span></a></h2><p>若要创建一个适应不同屏幕尺寸的布局，您需要让文本框拉伸以填充去除按钮和外边距后剩余的所有水平空间。</p><p>继续操作之前，请点击工具栏中的 (Select Design Surface)，然后选择 Blueprint。</p><p>若要让文本框大小可灵活调整，请按以下步骤操作：</p><ol><li><p>选择两个视图。若要执行此操作，请点击一个视图，在按住 Shift 键的同时点击另一个视图，然后右键点击任一视图并依次选择 Chains &gt; Create Horizontal Chain。布局随即显示出来，如图 8 所示。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>链是两个或多个视图之间的双向约束条件，可让您采用一致的方式安排链接的视图。</p></div></li><li><p>选择按钮并打开 Attributes 窗口。然后使用 Constraint Widget 将右外边距设为 16 dp。 点击文本框以查看其属性。然后，点击宽度指示器两次，确保将其设置为锯齿状线 (Match Constraints)，如图 9 中的标注 1 所示。</p></li><li><p>“Match constraints”表示宽度将延长以符合水平约束条件和外边距的定义。因此，文本框将拉伸以填充去除按钮和所有外边距后剩余的水平空间。</p></li></ol><h2 id="运行应用" tabindex="-1"><a class="header-anchor" href="#运行应用"><span>运行应用</span></a></h2><p>如果已在上一课中将您的应用安装到设备上，只需点击工具栏中的 (Apply Changes)，即可使用新布局更新应用。或者点击 Run &#39;app&#39; 以安装并运行应用。</p>',32);function h(m,u){return t(),i("div",null,[c,l(" more "),d])}const y=e(s,[["render",h],["__file","interface.html.vue"]]),_=JSON.parse('{"path":"/code/android/get-started/interface.html","title":"构建简单的界面","lang":"zh-CN","frontmatter":{"title":"构建简单的界面","icon":"info","date":"2022-04-01T00:00:00.000Z","category":["Android","快速上手"],"tag":["快速上手"],"description":"在本节课中，您将学习如何使用 Android Studio 布局编辑器创建包含一个文本框和一个按钮的布局。这将为下一课打下基础，下节课将学习如何在点按该按钮时让应用将文本框的内容发送到其他 activity。 Android 应用的界面 (UI) 以布局和微件的层次结构形式构建而成。布局是 ViewGroup 对象，即控制其子视图在屏幕上的放置方式的容...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/android/get-started/interface.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"构建简单的界面"}],["meta",{"property":"og:description","content":"在本节课中，您将学习如何使用 Android Studio 布局编辑器创建包含一个文本框和一个按钮的布局。这将为下一课打下基础，下节课将学习如何在点按该按钮时让应用将文本框的内容发送到其他 activity。 Android 应用的界面 (UI) 以布局和微件的层次结构形式构建而成。布局是 ViewGroup 对象，即控制其子视图在屏幕上的放置方式的容..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-24T09:43:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:published_time","content":"2022-04-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-24T09:43:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"构建简单的界面\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-24T09:43:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"打开布局编辑器","slug":"打开布局编辑器","link":"#打开布局编辑器","children":[]},{"level":2,"title":"添加文本框","slug":"添加文本框","link":"#添加文本框","children":[]},{"level":2,"title":"添加按钮","slug":"添加按钮","link":"#添加按钮","children":[]},{"level":2,"title":"更改界面字符串","slug":"更改界面字符串","link":"#更改界面字符串","children":[]},{"level":2,"title":"让文本框大小可灵活调整","slug":"让文本框大小可灵活调整","link":"#让文本框大小可灵活调整","children":[]},{"level":2,"title":"运行应用","slug":"运行应用","link":"#运行应用","children":[]}],"git":{"createdTime":1679651006000,"updatedTime":1679651006000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":6.91,"words":2073},"filePathRelative":"code/android/get-started/interface.md","localizedDate":"2022年4月1日","excerpt":"<p>在本节课中，您将学习如何使用 Android Studio 布局编辑器创建包含一个文本框和一个按钮的布局。这将为下一课打下基础，下节课将学习如何在点按该按钮时让应用将文本框的内容发送到其他 activity。</p>\\n","autoDesc":true}');export{y as comp,_ as data};
