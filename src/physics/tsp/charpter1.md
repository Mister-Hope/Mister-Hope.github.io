---
title: 第一章
time: 2020-12-28
category: 物理
tags:
  - 热统
---

## 概念

- 孤立系: 与其他物体既没有物质交换也没有能量交换的系统。
- 闭系: 与外界没有物质交换，但有能量交换的系统
- 开系: 与外界既有物质交换，又有能量交换的系统

热力学平衡态: 系统的各种宏观性质在长时间内不发生任何变化。

弛豫时间: 系统由其初始状态达到平衡状态所经历的时间称为弛豫时间。

热平衡定律 (热力学第零定律): 如果物体 A 和 物体 B 各自与处在同一状态的物体 C 达到热平衡，若令 A 与 B 进行接触，它们也将处在热平衡。

热力学温标: 不依赖于任何具体物质特性的温标。

### 公式

简单系统的一般物态方程形式为 $f(p, V, T) = 0$

三个重要的物理量

$$\tag{体胀系数} \alpha = \frac{1}{V}(\frac{\partial V}{\partial T})_p$$

$$\tag{压强系数} \beta = \frac{1}{p}(\frac{\partial p}{\partial T})_V$$

$$\tag{等温压缩系数} \kappa_T = - \frac{1}{V}(\frac{\partial V}{\partial p})_T$$

满足关系 $\alpha = \kappa_T \beta p$

一个重要的推导: $\cfrac{dV}{V}= \alpha dT - \kappa_Tdp$

## 功

- 体积功: $\delta W = -pdV$

- 表面功: $\delta W = \sigma dA$ (液膜有两层)

- 电介质:

  $$\delta W = Udq$$

  $$\delta W = VEdD$$

  $$\delta W = Vd(\frac{\epsilon_0E^2}{2})+VEdP$$

- 磁介质:

  $$\delta W = UIdt$$

  $$\delta W = VHdB$$

  $$
  \delta W = Vd(\frac{\mu_0H^2}{2})+\mu_0VHdM
  $$

## 声速

$a = \sqrt{\cfrac{dp}{d\rho}}$

$a^2=\gamma\cfrac{p}{\rho}=\gamma pV$

式中 $v=\cfrac{1}{\rho}$ 称为比体积。

## 理想气体

理想气体的物态方程为 $pV =nRT$。

更精确的范德瓦尔斯方程形式为

$$(p + \frac{an^2}{V^2})(V - nb) = nRT$$

理想气体无相互作用，故:

$(\cfrac{\partial U}{\partial V})_T=0$

$(\cfrac{\partial H}{\partial p})_T=0$

$(\cfrac{\partial T}{\partial V})_U=0$,称为焦耳系数

对于理想气体来说，满足多方过程 $pV^\gamma = \text{常量}$，同时有 $TV^{\gamma -1}$, $\cfrac{p^{\gamma -1}}{T^\gamma}$ 也为常量。

## 熵

$$dS=\frac{dQ}{dT}$$

$$\Delta S=\int_{T_1}^{T_2}\frac{mC_pdT}{T}$$

物体吸热熵变为: $mC_pln\cfrac{T_1}{T_2}$

理想气体的熵:

$$
S = C_VlnT+nRlnV+S_0
$$

$$
S=C_plnT-nRlnV+S_0
$$

对于理想气体有:

$$
(\frac{\partial T}{\partial p})_S=\frac{VT\alpha}{C_p}
$$

## 热机与循环

对于等温过程，满足 $Q=RTln\cfrac{T_2}{T_1}$

克劳修斯不等式: $\sum\cfrac{Q_i}{T_i}\leqslant 0$

对于工作在两个物质之间的任何热机，满足: $\eta = 1 - \cfrac{Q_2}{Q_1} \leqslant 1 - \cfrac{T_2}{T_1}$

卡诺热机: $\eta =1 - \cfrac{T_2}{T_1}$

制冷机: $\eta_{\text{制冷}}= \cfrac{T_2}{T_1-T_2}$

## 习题

1. 由理想气体的物态方程推导出理想气体的 $\alpha$, $\beta$, $\kappa _T$。

1. 证明物态关系满足

   $$ln V = \int(\alpha dT - \kappa _Tdp)$$

1. 如果认为固体和液体在一定范围内可以把 $\alpha$ 和 $\kappa _T$ 视为常量，则有:

   $$
   V(T, p) - V_0 (T_0, 0) [1+ \alpha (T - T_0)-\kappa_Tp]
   $$
