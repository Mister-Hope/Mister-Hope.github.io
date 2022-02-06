---
title: 第二章
category: 物理
date: 2020-12-28
tag:
  - 热统
---

## 四个热力学函数

$$
\begin{aligned}
  H =& U + pV\\
  F =& U - TS\\
  G =& U - TS + pV
\end{aligned}
$$

微分形式:

$$U = TdS - pdV$$

$$F = -SdT - pdV$$

$$H = TdS + Vdp$$

$$G = -SdT + Vdp$$

$$H=G-T\frac{\partial G}{\partial T}$$

$$U=F-T\frac{\partial F}{\partial T} =G-T\frac{\partial G}{\partial T}-p\frac{\partial G}{\partial p}$$

## 麦克斯韦关系

$$
\Big(\frac{\partial T}{\partial V}\Big)_S = -\Big(\frac{\partial p}{\partial S}\Big)_V
$$

$$
\Big(\frac{\partial T}{\partial p}\Big)_S = \Big(\frac{\partial V}{\partial S}\Big)_p
$$

$$
\Big(\frac{\partial S}{\partial V}\Big)_T = \Big(\frac{\partial p}{\partial T}\Big)_V
$$

$$
\Big(\frac{\partial S}{\partial p}\Big)_T = -\Big(\frac{\partial V}{\partial T}\Big)_p
$$

一些扩展:

$$
C_v = \Big(\frac{\partial U}{\partial T}\Big)_V = T \Big(\frac{\partial S}{\partial T}\Big)_V
$$

$$
C_p = \Big(\frac{\partial U}{\partial T}\Big)_p + p \Big(\frac{\partial V}{\partial T}\Big)_p = \Big(\frac{\partial H}{\partial T}\Big)_p = T \Big(\frac{\partial S}{\partial T}\Big)_p
$$

$$
\Big(\frac{\partial U}{\partial V}\Big)_T = T\Big(\frac{\partial p}{\partial T}\Big)_V - p = \frac{T}{p}\beta - p
$$

$$
(\frac{\partial H}{\partial p})_T = V - T(\frac{\partial V}{\partial T})_p = V - \frac{T}{V}\alpha
$$

## 节流过程

气体在节流过程中焓不变。

$\mu=\Big(\cfrac{\partial T}{\partial p}\Big)_H = \cfrac{V}{C_p}(T\alpha - 1)=\cfrac{1}{C_p}\Big[T\Big(\cfrac{\partial V}{\partial T}\Big)_p -V\Big]$ 称为焦汤系数。

可以利用节流过程中 $\mu > 0$ 一侧制冷区，利用节流过程使得液体降温而液化。

## 内能与焓的积分形式

$$
U = \int\{C_vdT+[T(\frac{\partial p}{\partial T})_V -p]dV\}+U_0
$$

$$
S = \int[\frac{C_v}{T}dT+(\frac{\partial p}{\partial T}dV)]+S_0
$$

## 热辐射

辐射压强 $p=\cfrac{1}{3}u$，而能态密度 $u=aT^4$。

$S=\cfrac{4}{3}aT^3V$ (可逆绝热下有 $T^3V$ 常数)

辐射通量密度 $J_u=\cfrac{1}{4}CU$

## 磁介质

$m=MV$ 是介质的总磁矩

所做的功为 $dW =\mu_0Hdm$

磁介质的内能满足 $dU=TdS+\mu_0hdm$

磁介质的吉布斯函数满足 $dG=-SdT-\mu_0mdH$

磁介质的热容 $C_H=T(\cfrac{\partial S}{\partial T})_H$ 则 $(\cfrac{\partial T}{\partial H})_S=-\cfrac{\mu_0T}{C_H}(\cfrac{\partial m}{\partial T})_M$

居里定律: $m=\cfrac{C_V}{T}H$ 可以得出: $(\cfrac{\partial T}{\partial H})_S=\cfrac{C_V}{C_HT}\mu_0H$ 和 $TdS =C_VdT+T\cfrac{\alpha}{\kappa_T}dV$

## 重要习题

1. 证明 $\cfrac{\kappa_s}{\kappa_T} = \cfrac{C_v}{C_p}$

1. 证明 $C_p - C_V = -T\cfrac{(\cfrac{\partial p}{\partial T})_V^2}{(\cfrac{\partial p}{\partial V})_T}$
