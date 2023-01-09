import{ac as a,G as t,H as o,L as r,E as e,ae as d}from"./framework-931f0218.js";const i={},n=e("p",null,"本部分介绍如何构建简单的 Android 应用。首先，您将了解如何通过 Android Studio 创建“Hello, World!”项目并运行它。然后，您将为应用创建一个新界面，该界面会接受用户输入，并切换到应用中的一个新屏幕以显示用户输入内容。",-1),c=e("p",null,"开始之前，您需要了解有关 Android 应用的两个基本概念：它们如何提供多个入口点，以及它们如何适应不同的设备。",-1),s=d('<h2 id="应用提供多个入口点" tabindex="-1"><a class="header-anchor" href="#应用提供多个入口点" aria-hidden="true">#</a> 应用提供多个入口点</h2><p>Android 应用都是将各种可单独调用的组件加以组合构建而成。例如，activity 是提供界面 (UI) 的一种应用组件。</p><p>“主”activity 在用户点按您的应用图标时启动。您还可以将用户从其他位置（例如，从通知中，甚至从其他应用中）引导至某个 activity。</p><p>其他组件（如 WorkManager）可使应用能够在没有界面的情况下执行后台任务。</p><p>构建您的首个应用后，请参阅 [应用基础知识][] 来详细了解其他应用组件。</p><h2 id="应用可适应不同的设备" tabindex="-1"><a class="header-anchor" href="#应用可适应不同的设备" aria-hidden="true">#</a> 应用可适应不同的设备</h2><p>Android 允许您为不同的设备提供不同的资源。例如，您可以针对不同的屏幕尺寸创建不同的布局。系统会根据当前设备的屏幕尺寸确定要使用的布局。</p><p>如果应用的任何功能需要使用特定的硬件（例如摄像头），您可以在运行时查询该设备是否具有该硬件，如果没有，则停用相应的功能。您可以指定应用需要使用特定的硬件，这样，Google Play 就不会允许在没有这些硬件的设备上安装应用。</p><p>构建您的首个应用后，请参阅 [设备兼容性概览][] 来详细了解设备配置。</p>',9);function l(p,h){return t(),o("div",null,[n,c,r(" more "),s])}const u=a(i,[["render",l],["__file","intro.html.vue"]]);export{u as default};
