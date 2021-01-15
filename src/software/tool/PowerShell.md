---
title: Windows PowerShell
icon: tool
---

## 简介

Powershell(Windows Powershell)是Microsoft为Windows设计的新的命令行程序，这个Windows内置的命令行shell包括交互式提示和脚本环境，它们可以独立使用也可以交互使用。

我们平时所见的大多数的脚本(bat,perl,bash,sh)，接受(输入)和返回(输出)的都是文本。Powershell是在 .Net公共语言运行时(CLR-Common Language Runtime)和.Net Framework的基础上构建的，所以Powershell可以接受和返回.Net对象。也就是说，Powershell是面向对象的脚本语言。

举个例子，如果其它的脚本语言是C语言(低级)，那么Powershell就是Java或是C#(高级)。面向对象的能力使Powershell相比其它脚本语言有更高的开发效率，脚本更容易维护，更容易实现模块化和复用。   

PowerShell 引入了 cmdlet的概念（cmdlet读作“command-let”,一看就是cmd的超集，事实也是如此，所有cmd命令都可以在Powershell中执行），这是内置到 shell 中的一个简单的单一功能命令行工具。相比其它shell，PowerShell 除了可以对计算机上文件系统的访问。还可以访问其他数据存储，如注册表和数字签名证书存储，就像访问文件系统一样容易。

## 特点

Powershell提供了丰富的内置命令，相比其它shell尤其独特的优势：你不必抛弃自己惯用的工具、命令，在Powershell中可以使用所有的cmd命令。 

Powershell不处理文本(不把文本当做文本处理，当做.Net对象处理)，相反，它处理基于.Net Framework平台的对象。

Powershell附带了具有一致格式(动词-名词)的大量内置命令。

所有的Powershell命令都使用同一命令分析程序，而不是每个工具(命令)使用不同的分析程序，可以同时学习大量的命令。

## 教程

详细教程请参考[https://docs.microsoft.com/zh-cn/powershell/scripting/learn/ps101/01-getting-started?view=powershell-7.1
]