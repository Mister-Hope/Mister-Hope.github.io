---
title: 第三章
date: 2020-12-28
category: 物理
tag:
  - 热统
---

## 稳定平衡条件

在等温等容的条件下，自由能 $F$ 永不增加。在稳定状态下 $F$ 为极小(即 $\delta F =0, \delta^2F\geqslant 0$)

在等温等压的条件下，吉布斯函数 $G$ 永不增加。在稳定状态下 $G$ 为极小(即 $\delta G =0, \delta^2G\geqslant 0$)

稳定性条件要求: $C_V>0, (\cfrac{\partial p}{\partial V})_T< 0$

## 化学势

化学式 $\mu = (\cfrac{\partial G}{\partial n})_{T,p}$，即在温度压强不变的情况下，增加 1mol 物质后吉布斯函数的变化值。

$$
\begin{aligned}
  dG = & -SdT&+Vdp+&\mu dn\\
  dU = & TdS&-pdV+&\mu dn\\
  dH = & TdS&+Vdp+&\mu dn\\
  dF = & -SdT&-pdV+&\mu dn
\end{aligned}
$$

定义 $J = F-\mu n$，叫做巨热力势，满足 $dJ=-SdR=pdV-nd\mu$

## 两相平衡条件

$T,P,\mu$ 相等。

## 克拉帕龙方程

$$
\frac{dp}{dT}=\frac{S_m^\beta-S_m^\alpha}{V_m^\beta-V_m^\alpha}= \frac{L}{T(V_m^\beta - V_m^\alpha)}
$$

$L = T(S_m^\beta-S_m^\alpha)$ 称为相变潜热。

在忽略液相体积、并将气相视为理想气体的情况下，可由该方程导出蒸汽压方程， 即 $\cfrac{1}{p}\cfrac{dp}{dT}=\cfrac{L}{RT^2}$。

解得 $lnp=-\cfrac{L}{RT}+A$
