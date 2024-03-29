---
title: 几何构建
icon: build
date: 2020-05-29
category: 软件
tag:
  - 仿真
  - COMSOL
---

## 2D 几何

COMSOL Multiphysics^®^ 软件提供了大量的几何操作、工具或功能来创建二维几何结构。软件中内置了可用于模拟常见形状的几何体，用于定义几何尺寸和位置的参数设置，以及可用于构建复杂几何结构的布尔运算、变换与分割几何操作。

- 您可以很轻松的添加圆和矩形对象，也可以使用参数曲线或多边形很轻松的创建您需要的形状。
- 使用并集和差集这两种布尔运算来创建如圆环形、葫芦的几何结构。
- 执行复制、阵列和镜像变换等操作来快速创建相同或相似的结合结构。

## 将二维图形扩展到三维

COMSOL Multiphysics^®^ 内置了许多强大的几何工具、操作和其他功能，为您提供多种方式来创建模型几何，其中包括一系列定制工具，用于构建对称几何等特定类型的几何。

如果一个几何对象沿某个轴具有相同的横截面。或者该对象绕轴呈旋转对称。可以先创建几何的横截面，再将其扩展成三维对象，从而大幅提高建模效率。在 COMSOL Multiphysics 中，您可以基于二维模型创建三维几何，方法是使用工作平面和平面几何，然后执行工作平面操作，例如拉伸、旋转和扫掠等操作。

- 拉伸操作用于拉伸工作平面中的平面或对象。

- 旋转操作用于绕一个轴旋转工作平面中的平面或对象，从而创建三维几何。

- 扫掠操作用于沿曲线扫掠工作平面中的平面或对象，从而创建三维实体对象。

## 三维图像

同二维图像一样，三维图像也可以使用并集和差集这两种布尔运算，并进行复制、阵列和镜像变换等操作。同时，三维图像还可以进行分割几何。

分割操作可以分离模型几何的任意部分。这一功能适用于多种情况。例如，如果您希望拆分对象、域、边界或边等几何实体，或希望从模型中移除一部分几何元素，达到清理几何结构或简化仿真的目的；或者是希望改进模型中的网格剖分，都可以使用此功能。此功能在处理结构复杂或具有高纵横比的几何时及其有用。

## 基于三维结构创建二维模型

在 COMSOL Multiphysics^®^ 中，您可以结合使用工作平面与横截面 几何操作，实现基于三维几何来创建二维模型。利用这一功能，您可以从几何中提取横截面，并基于三维模型来创建二维模型，从而大幅缩短计算时间，并降低仿真求解过程中的内存需求。该功能适用于处理以下对象:

- 三维对称或轴对称几何: 您可以大幅提高相同几何的求解速度
- 薄壁零件: 您可以使用平面应力假设来创建二维模型
- 较长零件: 您可以使用平面应变建模假设来创建二维模型

通常的做法是提取三维几何的关键横截面，创建二维的几何实体，之后通过删除实体的方式，将三维几何删除。

## “形成联合体”和“形成装配”

这个部分也是我模拟中曾经栽了一个跟头的地方，有以下的概念需要进行说明和注意:

为了方便制造成品，许多产品设计会进行组件装配。在 COMSOL Multiphysics^®^ 模型的几何序列中，这些组件对应的是几何对象。不同的几何对象的装配方式，对模型是尤为重要的。

在 COMSOL Multiphysics 中建模时，您可以。通过两种方式来定型几何: “形成联合体”和“形成装配”。“形成联合体”是默认选项，适用于大多数情况。不过，对于右下方列出的这些特定情况，“形成装配”特征则更为适用。

::: caution

在构建模型时，处理或定型对象集合的方法非常重要，必须在剖分网格和定义物理场之前执行。

在两者间进行切换后，必须要重新构建并设计网格! 该操作对部分物理场设置也会产生影响，所以务必遍历检查一遍您所有的物理场设置!

这是因为几何的表示方式会影响模型几何的网格剖分。而网格需要将模型中的单个对象连接在一起。由于网格与物理场紧密相关，因此这又会影响模型的物理场并最终影响求解结果。

:::

“形成联合体”和“形成装配”方法均用于将多个几何对象合并成单个对象。

- 使用“形成联合体”时，您可以将对象看成是粘合在一起的。相邻的域通过共享边界连接在一起。软件会生成由相互连接的域构成的复合对象，其中相邻实体的共享边界将域分隔开
- 使用“形成装配”时，可以将几何对象看作单独的实体，就像是装配的零件。软件会多个对象组合成单个对象，而单个对象中的域集合并未相互连接。由此生成的域不相连，并且不与相邻域共享边界。

简而言之:

- “形成联合体”在整个域内创建相互连接的网格
- “形成装配”创建的网格则不相连。针对这种情况，整个域内的物理场通过对接触边界自动生成一致对来保证自身的连续性。如果几何对象需要在仿真中运动，“形成装配”特征尤其适用。
