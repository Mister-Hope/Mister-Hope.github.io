---
date: 2021-00-27
title: Windows PowerShell
author: 沈启民
icon: shell
---

Powershell (Windows Powershell)是 Microsoft 为 Windows 设计的新的命令行程序，这个 Windows 内置的命令行 shell 包括交互式提示和脚本环境，它们可以独立使用也可以交互使用。

<!-- more -->

我们平时所见的大多数的脚本(bat,perl,bash,sh)，接受(输入)和返回(输出)的都是文本。Powershell 是在 .Net 公共语言运行时(CLR-Common Language Runtime)和.Net Framework 的基础上构建的，所以 Powershell 可以接受和返回.Net 对象。也就是说，Powershell 是面向对象的脚本语言。

举个例子，如果其它的脚本语言是 C 语言(低级)，那么 Powershell 就是 Java 或是 C\#(高级)。面向对象的能力使 Powershell 相比其它脚本语言有更高的开发效率，脚本更容易维护，更容易实现模块化和复用。

PowerShell 引入了 cmdlet 的概念(cmdlet 读作“command-let”,一看就是 cmd 的超集，事实也是如此，所有 cmd 命令都可以在 Powershell 中执行)，这是内置到 shell 中的一个简单的单一功能命令行工具。相比其它 shell，PowerShell 除了可以对计算机上文件系统的访问。还可以访问其他数据存储，如注册表和数字签名证书存储，就像访问文件系统一样容易。

## 特点

Powershell 提供了丰富的内置命令，相比其它 shell 尤其独特的优势: 您不必抛弃自己惯用的工具、命令，在 Powershell 中可以使用所有的 cmd 命令。

Powershell 不处理文本(不把文本当做文本处理，当做.Net 对象处理)，相反，它处理基于 .Net Framework 平台的对象。

Powershell 附带了具有一致格式(动词-名词)的大量内置命令。

所有的 Powershell 命令都使用同一命令分析程序，而不是每个工具(命令)使用不同的分析程序，可以同时学习大量的命令。

## 官方教程

- [官方教程](https://docs.microsoft.com/zh-cn/powershell/scripting/learn/ps101/01-getting-started?view=powershell-7.1)
