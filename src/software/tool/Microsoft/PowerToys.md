![](https://pic1.zhimg.com/v2-04a3bf05a35e194d9c5c63aafede4a8a_1440w.jpg?source=172ae18b)
#PowerToys 0.25
标题图来源：By Source (WP:NFCC#4), Fair use, https://en.wikipedia.org/w/index.php?curid=62463816
##写在前面
感谢知乎大佬@旅客君提供的开源使用攻略(0.17版),感谢知乎大佬@量子位提供的图片和部分介绍。
本文涉及两个版本内容，部分操作存在出入，尽请谅解。
##一、前言

首先，你会问，什么是PowerToys？PowerToys是微软最初发布于Windows 95平台的系统增强工具，直至2002年比尔盖茨调整研发重心，提升系统安全性，PowerToys 这一项目在当时因为Bug 多，功能不稳定，测试不严格，在安全审查中未能幸免，被微软从Windows系统移除。直到2019年，微软宣布开源PowerToys实用工具。（以上摘自百度百科）
##二、下载、安装与启动

###1）下载PowerToys
下载并安装PowerToys十分简单，只要你的Win10系统版本在1803以上，同时系统中安装有.NET Core 3.1 Desktop Runtime
第一种安装方法是通过PowerToys的Github主页,找到最新版本下的Assets,直接下载.exe安装文件。
![](https://pic3.zhimg.com/80/v2-ac1005a1ed2a6b64ca3634e8c4518d2a_720w.jpg)
地址如下：
https://github.com/microsoft/PowerToys


第二种方法是在WinGet中运行如下代码：


	WinGet install powertoys

还可以通过软件包管理工具Chocolatey，运行代码安装：


	choco install powertoys

更新PowerToys通过以下代码实现：


	choco upgrade powertoys

目前，PowerToys可以支持X64、X86、ARM架构。

###2）安装PowerToys

虽然安装界面为英语（暂无中文选项），但是你可以结合我的详细步骤完成安装。

第一步，双击运行安装程序，得到界面如下，此时点击「Next」下一步。

![](https://pic4.zhimg.com/80/v2-20d86cf9b0598980bb70c9bf30ae9903_720w.jpg)
第一步

第二步，继续点击「Next」接受相关许可协议后下一步。

![](https://pic4.zhimg.com/80/v2-9b81cf8e778b88dc7436d396c38749ff_720w.jpg)
第二步

第三步，选择安装位置及相关附加选项，安装位置默认保持不变，也可根据自己需求适当调整。后面两项带复选框的选项翻译如下。

![](https://pic1.zhimg.com/80/v2-0224860e58ff1a824b295f8bd92f51f8_720w.jpg)
第三步

第四步，此时点击「Install」即可开始安装。当出现用户账户控制时，点击「是」以许可安装。

![](https://pic4.zhimg.com/80/v2-4e709c1b399950882720516fa9c51e0b_720w.jpg)
第四步

第五步，安装完成。可自由选择是否立即启动。若不想启动则取消勾选。

![](https://pic2.zhimg.com/80/v2-3b7f1310ff54a54859e2d130626bfa85_720w.jpg)
第五步

###3）启动PowerToys

如何打开这款小工具？如果你已勾选「为PowerToys创建桌面快捷方式」选项，那么你将在你的桌面上找到它。若没有，你也可以在开始菜单中找到它。

![](https://pic3.zhimg.com/80/v2-3853196eb35680fdd66fce8390602706_720w.jpg)
开始菜单截图

启动后系统界面不会有任何提示，但是你可以在右下角找到该小工具的图标。
![](https://pic3.zhimg.com/80/v2-d6162266dc8eb86eefc977d615b6b6de_720w.jpg)
右下角状态栏截图

双击该图标后，即可看到这个小工具的主要界面。

![](https://pic2.zhimg.com/80/v2-a2213aa4ec08ec45c7bcf0df872203f1_720w.jpg)
PowerToys软件界面

##三、功能详细翻译或介绍
###1）General Settings（通用设置）

打开即看到PowerToys的通用设置，以下该截图中对这个小工具主要的功能的详细说明都做了翻译。PowerToys能帮助你做些什么便一目了然，以下会对这些功能做进一步的详解。
![](https://pic3.zhimg.com/80/v2-d7f6dcba665b089a54badd6a206b71e2_720w.jpg)

继续往下翻这个页面，看到的是一些简单的通用设置，不过我想大部分人应该都能看得懂，但是我仍然做了翻译，截图如下。
![](https://pic4.zhimg.com/80/v2-66ffcad1f3dea0fe6007a790d49f1223_720w.jpg)

我们可以看到左侧带有各个功能名称的选项栏，点击各个选项栏将进入该功能的具体设置。至此，通用设置部分结束。
###2）Color Picker
Color Picker是一个可以在Win10系统全场景下使用的颜色提取工具，通过按键Win+Shift+c启动。

你可以用光标在当前桌面上任意色块提取颜色，系统会自动复制颜色的HEX或RGB值。
![](https://pic2.zhimg.com/v2-80c0fd41f5b447dcc0338a640ae8eb21_b.jpg)

有用户反映，目前Color Picker在以管理员身份运行时无法正常使用，开发人员正在解决这个问题。
###3）FancyZones（多功能的区域）

GitHub官方说明文档：
https://github.com/microsoft/PowerToys/wiki/FancyZones-Overview

功能简介：FancyZones是一个窗口管理器，它的设计目的是为了你的工作流程，很容易和快速地安排窗口到一个相对高效的布局，并快速恢复这些布局。FancyZones允许用户为桌面定义一组窗口位置，这些位置是窗口的拖动目标。当用户将一个窗口拖到一个区域中时，窗口将被重新调整大小并重新定位以填充该区域。应用界面相关翻译如下。
![](https://pic4.zhimg.com/80/v2-e573c5361a6dcd61b6a75d89198168df_720w.jpg)

![](https://pic1.zhimg.com/80/v2-33bb544bfd3042668301ef7e06f3ecc4_720w.jpg)

![](https://pic3.zhimg.com/80/v2-ac3f30dc551e920e7fc5a43e9f3f1e96_720w.jpg)
其中，当点击热键（默认为Win+`）后界面的翻译截图如下。
![](https://pic1.zhimg.com/80/v2-3de664187e444da86b38d7118c81873c_720w.jpg)

![](https://pic3.zhimg.com/80/v2-3bc3cbcdd0ae995dc716036897ebe642_720w.jpg)
###4）File Explorer（资源管理器）

GitHub官方说明文档：
https://github.com/microsoft/PowerToys/blob/master/src/modules/previewpane/README.md

功能简介：虽然名字叫做资源管理器，但是在PowerToys中所实现的功能仅仅只有实现svg文件(.svg)以及markdown文件(.md)在右侧窗格预览的功能。对于一般用户无实际作用，翻译截图如下。
![](https://pic4.zhimg.com/80/v2-ab60bae5c5d555508aa5d981f3e82b03_720w.jpg)

###5）Image Resizer（图片缩放器）

GitHub官方说明文档：
https://github.com/microsoft/PowerToys/blob/master/src/modules/previewpane/README.md
功能简介：图片缩放器是一个为多个图像调整大小的Windows Shell扩展插件。安装PowerToys之后，在文件资源管理器中右键单击一个或选定多个图像文件，然后从右键菜单中选择「调整图片大小」。 图片缩放器还允许您通过鼠标右键拖放选定的文件来调整图像的大小，这样你就可以把调整后的图片保存在另一个文件夹里。
![](https://pic1.zhimg.com/v2-280a487100c0d04303637a36f30c8fa4_b.jpg)
软件预设了大/中/小/手机等不同的常用模版，单击确定即可一键完成图片尺寸的批量调整。你也可以点击Settings进入设置，按自己需求的尺寸大小、是否转换格式等来配置自己的常用“模版”。

对于经常有多张图片的大小需要处理，而对专业性要求不高的用户来说，这款工具能替代专门的图像处理器软件。
PowerToys该功能的设置翻译截图如下。
![](https://pic1.zhimg.com/80/v2-232568c05b0a63e5286d9ce43364dbd4_720w.jpg)
在资源管理器的界面中，若将系统语言设置为中文，那么该界面的语言也应当显示为中文，故直接查看即可理解如何使用。
![](https://pic2.zhimg.com/80/v2-d87022450222d3a1582eab04b088ad31_720w.jpg)
同样的，图片缩放器还允许用户配置如下设置。

关于尺寸，用户可以添加新的预设大小。可以配置为填充，适合或拉伸。用于调整大小的单位也可以设置为厘米、英寸、百分比和像素。

关于编码，用户可以更改回滚编码器(当不能保存为原始格式时使用的编码器)并修改PNG、JPEG和TIFF的设置。

关于文件，用户可以修改调整大小后的图像文件名的格式，也可以选择保留原来最后修改日期的调整后的图像。
###6）Keyboard Manager
Keyboard Manager是一款简单而又实用的键盘键位修改小工具。
![](https://pic1.zhimg.com/80/v2-c93c9d945c8243a0fa0940b2c51c80f4_720w.jpg)
它能帮你将键盘上的某个按键映射为另一个按键，甚至还能将一组快捷键映射为另一组。在一些特殊的情况下，它能帮你的大忙。
![](https://pic4.zhimg.com/80/v2-36ad45f83951d5bd27752d406f0cec9b_720w.jpg)
修改键盘键位如果没有软件的帮助，需要修改注册表才能完成，比较复杂而且不好管理。而且Keyboard Manager修改键位之后无需重启电脑即可立即生效，你只需让它保留在后台运行即可 (占用资源极小)。

###7）PowerRename（强大的文件重命名）

GitHub官方说明文档：
https://github.com/microsoft/PowerToys/wiki/PowerRename-Overview

功能简介：您是否曾经需要修改大量文件的文件名，但又不想将所有文件重命名为相同的名称？想要对不同文件名的一部分进行简单的搜索/替换吗？想要对多个项执行正则表达式重命名？PowerRename就是一个用于使用搜索和替换或正则表达式进行更高级的批量重命名的Windows Shell扩展插件。
![](https://pic2.zhimg.com/v2-bef77f2e17ed6798f0e2ec8c92de0a65_b.webp)
首先先放上截图翻译。
![](https://pic1.zhimg.com/80/v2-994f1312294d5c82990314fe5f02e240_720w.jpg)
接下来是当选中一些文件后，右键打开PowerRename的界面翻译。
![](https://pic1.zhimg.com/80/v2-910e4792b3ed85c9f32025254594c470_720w.jpg)
下面对该界面的选项或设置做详细介绍。

####1. Search for（搜索）

要在项名称中匹配的文本或正则表达式。

####2. Replace with（替换为）

要替换与搜索文本匹配的项名称中的实例的文本。

####3. Use Regular Expressions（使用正则表达式）

如果勾选此项，搜索字段将被解释为正则表达式。「替换为」字段还可以包含正则表达式变量(参见下面的示例)。如果没有选中，搜索字段将被用作替换字段中的文本。

####4. Case Sensitive（区分大小写）

如果勾选此项，搜索字段中指定的文本将仅在文本相同的情况下与项中的文本匹配。默认情况下，不区分大小写。

####5. Match All Occurrences（全字匹配）

如果勾选此项，搜索字段中所有匹配的文本将被更改为「替换为」字段的文本。否则，将只替换项目中搜索文本的第一个实例（从左到右）。

####6. Exclude Files（排除文件）

文件将不被包括在本次重命名操作中。

####7. Exclude Folders（排除文件夹）

文件夹将不被包括在重命名操作中。

####8. Exclude Subfolder Items（排除子文件夹项目）

文件夹中的项将不包括在重命名操作中。默认情况下，所有子文件夹项也将被重命名。

####9. Enumerate Items（枚举项目）

在操作中修改的文件名后追加一个数字后缀。例如：foo.jpg -> foo (1).jpg

####10. Item Name Only（仅项目名称）

该操作只修改文件名部分（而不修改文件扩展名）。例如：txt.txt -> NewName.txt

####11. Item Extension Only（仅项目扩展名）

该操作只修改文件扩展名部分（而不是文件名）。例如：txt.txt -> txt.NewExtension

这个重命名功能，除了普通表面上的文件名替换，还可以通过使用正则表达式来完成更加高级的文件名替换（针对高级用户）。什么是正则表达式，百度百科如下解释：正则表达式，又称规则表达式。（英语：Regular Expression，在代码中常简写为regex、regexp或RE），计算机科学的一个概念。正则表达式通常被用来检索、替换那些符合某个模式(规则)的文本。这里列出了GitHub中所给出的例子。
![](https://pic3.zhimg.com/80/v2-f15991a831fdec8fe47da9647734da1a_720w.jpg)
需要注意的是，为能够完全使用这些表达式，务必勾选「全字匹配」选项！

以下是对这些表达式的一些具体举例。
![](https://pic1.zhimg.com/80/v2-723e58d41156f65bea96a35d30b244ec_720w.jpg)
###8）Shortcut Guide（快捷方式向导）

GitHub官方说明文档：
https://github.com/microsoft/PowerToys/wiki/Shortcut-Guide-Overview
功能简介：实际使用中，用户难以把大量热键组合一一背下来，而Windows Key Shortcut Guide工具则可以让你以最直观的方式，清晰地列出当前应用全部可以操作的快捷键以及对应的功能说明。
Shortcut Guide相当于一个可以随时呼出的热键说明书

先放上相关截图翻译。
![](https://pic2.zhimg.com/80/v2-b92eeec2f7672c8412ffbf8e3ef9e2a5_720w.jpg)
按住键盘上的Windows键大约1秒钟（默认设置为900毫秒），会出现一个显示和Windows快捷键相关的叠加层。其中包含：

更改活动窗口位置的快捷方式。

常见的Windows快捷方式

任务栏快捷方式。

按住Win键的界面如下。
![](https://pic1.zhimg.com/80/v2-33cee2a08ca74f2fec026479cdc45b90_720w.jpg)
使用方法也很简单，按住Windows键即可查看相关信息，并跟着这个叠加层上的信息操作即可。若不想使用，松开Windows键会自动消失。注意，若该叠加层的显示时间少于1秒，可能会呼出开始菜单。

###9）PowerToys Run

GitHub官方说明文档：
https://github.com/microsoft/PowerToys#powertoys-run

功能简介：PowerToys Run是一款快速启动器工具，类似于Mac系统自带的Spotlight以及Windows上的Listary、Wox、everything等工具。按下“Alt+空格”即可随时呼出输入框，输入名字后，它能快速找到对应的软件、搜索文件/文件夹，并回车迅速打开它们。
![](https://pic2.zhimg.com/v2-7e6760d57085b2b77f6a3d49df37e65d_b.webp)
搜索到的结果之后，可以回车打开，也可以按下“Ctrl+C“”复制文件或文件夹所在的路径，也能按下“Ctrl+Shift+E”打开文件所在的目录 。

它也能快速搜索当前正在运行的软件，并切换到它们的窗口去。如果你经常打开大量软件，窗口太多太乱，那么现在你只需要呼出PowerToys Run，输入软件名称，比如“Chrome”，即可立即快速跳转到谷歌浏览器的窗口，而不必来来回回用鼠标切换。
![](https://pic4.zhimg.com/v2-3b6aab127e71a0fcbd442e7374b32073_b.webp)
另外，PowerToys Run支持插件扩展，目前自带功能也已经可以进行一些额外操作了，例如进行数字计算，输入“>”来执行命令、调用控制面板等等。
![](https://pic3.zhimg.com/v2-2770e661640d458f969a21e9822f1e96_b.webp)



##结语
因为目前版本新于此介绍所涉及的版本，部分内容存在出入，尽请谅解。