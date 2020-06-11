---
category: 物理
tags:
  - 热统
---

# 第一章

## $\text{\S 1.1}$

### 知识点

- 孤立系: 与其他物体既没有物质交换也没有能量交换的系统。
- 闭系: 与外界没有物质交换，但有能量交换的系统
- 开系: 与外界既有物质交换，又有能量交换的系统

热力学平衡态: 系统的各种宏观性质在长时间内不发生任何变化。

弛豫时间: 系统由其初始状态达到平衡状态所经历的时间称为弛豫时间。

## $\text{\S 1.2}$

### 知识点

热平衡定律 (热力学第零定律): 如果物体 A 和 物体 B 各自与处在同一状态的物体 C 达到热平衡，若令 A 与 B 进行接触，它们也将处在热平衡。

热力学温标: 不依赖于任何具体物质特性的温标。

## $\text{\S 1.3}$

### 公式

简单系统的一般物态方程形式:

$$ f(p, V, T) = 0$$

三个重要的物理量

$$\tag*{体胀系数} \alpha = \frac{1}{V}(\frac{\partial V}{\partial T})_p$$

$$\tag*{压强系数} \beta = \frac{1}{p}(\frac{\partial p}{\partial T})_V$$

$$\tag*{等温压缩系数} \kappa_T = - \frac{1}{V}(\frac{\partial V}{\partial p})_T$$

满足关系

$$ \alpha = \kappa _T \beta p$$

一个重要的推导:

$$\frac{dV}{V}= \alpha dT - \kappa_Tdp$$

理想气体的物态方程为 $pV =nRT$，更精确的范德瓦尔斯方程形式为

$$(p + \frac{an^2}{V^2})(V - nb) = nRT$$

### 习题

1. 由理想气体的物态方程推导出理想气体的 $\alpha$, $\beta$, $\kappa _T$。

2. 证明物态关系满足

   $$ln V = \int(\alpha dT - \kappa _Tdp)$$

3. 如果认为固体和液体在一定范围内可以把 $\alpha$ 和 $\kappa _T$ 视为常量，则有:

   $$V(T, p) - V_0 (T_0, 0) [1+ \alpha (T - T_0)-\kappa_Tp]$$

## $\text{\S 1.4}$

- 体积功:

  $$\delta W = -pdV$$

- 表面功: (液膜有两层)

  $$\delta W = \sigma dA$$

- 电介质:

  $$\delta W = Udq$$

  $$\delta W = VEdD$$

  $$\delta W = Vd(\frac{\epsilon_0E^2}{2})+VEdP$$

- 磁介质:

  $$\delta W = UIdt$$

  $$\delta W = VHdB$$

  $$\delta W = Vd(\frac{\mu_0H^2}{2})+\mu_0VHdM$$
