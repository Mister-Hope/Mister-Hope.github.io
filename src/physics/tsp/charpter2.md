---
category: 物理
time: 2020-12-28
tags:
  - 热统
---

# 第二章

## $\text{\S 2.1}$

### 四个热力学函数

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
(\frac{\partial T}{\partial V})_S = -(\frac{\partial p}{\partial S})_V
$$

$$
(\frac{\partial T}{\partial p})_S = (\frac{\partial V}{\partial S})_p
$$

$$
(\frac{\partial S}{\partial V})_T = (\frac{\partial p}{\partial T})_V
$$

$$
(\frac{\partial S}{\partial p})_T = -(\frac{\partial V}{\partial T})_p
$$

一些扩展:

$$
C_v = (\frac{\partial U}{\partial T})_V = T (\frac{\partial S}{\partial T})_V
$$

$$
C_p = (\frac{\partial U}{\partial T})_p + p (\frac{\partial V}{\partial T})_p = (\frac{\partial H}{\partial T})_p = T (\frac{\partial S}{\partial T})_p
$$

$$
(\frac{\partial U}{\partial V})_T = T(\frac{\partial p}{\partial T})_V - p = \frac{T}{p}\beta - p
$$

$$
(\frac{\partial H}{\partial p})_T = V - T(\frac{\partial V}{\partial T})_p = V - \frac{T}{V}\alpha
$$

## 节流过程

气体在节流过程中焓不变。

$\mu=(\cfrac{\partial T}{\partial p})_H = \cfrac{V}{C_p}(T\alpha - 1)=\cfrac{1}{C_p}[T(\cfrac{\partial V}{\partial T})_p -V]$ 称为焦汤系数。

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

磁介质的热容 $C_H=T(\cfrac{\partial S}{\partial T})_H$

$(\cfrac{\partial T}{\partial H})_S=-\cfrac{\mu_0T}{C_H}(\cfrac{\partial m}{\partial T})_M$

居里定律: $m=\cfrac{C_V}{T}H$

有: $(\cfrac{\partial T}{\partial H})_S=\cfrac{C_V}{C_HT}\mu_0H$

和 $TdS =C_VdT+T\cfrac{\alpha}{\kappa_T}dV$
