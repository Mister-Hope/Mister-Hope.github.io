---
title: 创建项目
icon: info
date: 2022-04-01
category:
  - Android
  - 快速上手
tag:
  - 快速上手
---

本课将介绍如何使用 Android Studio 创建新的 Android 项目，并介绍该项目中的一些文件。

如需创建新的 Android 项目，请按以下步骤操作：

1. 安装最新版 Android Studio。
1. 在 Welcome to Android Studio 窗口中，点击 Create New Project。

   如果您已打开一个项目，请依次选择 File > New > New Project。

1. 在 Select a Project Template 窗口中，选择 Empty Activity，然后点击 Next。
1. 在 Configure your project 窗口中，完成以下操作：

   - 在 Name 字段中输入“My First App”。

   - 在 Package name 字段中输入“com.example.myfirstapp”。

   - 如果您想将项目放在其他文件夹中，请更改其 Save 位置。

   - 从 Language 下拉菜单中选择 Java 或 Kotlin。

   - 在 Minimum SDK 字段中选择您希望应用支持的最低 Android 版本。

   ::: tip

   点击 Help me choose 链接可打开 Android Platform/API Version Distribution 对话框。此对话框会提供有关各 Android 版本在设备间的分布情况的信息。您需要权衡的主要因素是，您想支持的 Android 设备所占的百分比，以及在这些设备所搭载的各个不同版本上维护应用所需的工作量。例如，如果您选择让应用与多个不同 Android 版本兼容，那么维护最旧版本与最新版本之间的兼容性所需的工作量就会增大。

   :::

   - 如果您的应用需要旧版库支持，请选中 Use legacy android.support libraries 复选框。

   - 其他选项保持原样。

1. 点击 Finish。

经过一段时间的处理后，Android Studio 主窗口会出现。

下面花一点时间了解一下最重要的文件。

首先，确保已打开 Project 窗口（依次选择 View > Tool Windows > Project），并从该窗口顶部的下拉列表中选择 Android 视图。随后，您可以看到以下文件：

- app > java > com.example.myfirstapp > MainActivity

  这是主 activity。它是应用的入口点。当您构建和运行应用时，系统会启动此 Activity 的实例并加载其布局。

- app > res > layout > activity_main.xml

  此 XML 文件定义了 activity 界面 (UI) 的布局。它包含一个 TextView 元素，其中具有“Hello, World!”文本

- app > manifests > AndroidManifest.xml

  清单文件描述了应用的基本特性并定义了每个应用组件。

- Gradle Scripts > build.gradle

  有两个使用此名称的文件：一个针对项目“Project: My First App”，另一个针对应用模块“Module: My_First_App.app”。每个模块均有自己的 build.gradle 文件，但此项目当前仅有一个模块。使用每个模块的 build.gradle 文件控制 Gradle 插件构建应用的方式。如需详细了解此文件，请参阅配置 build。
