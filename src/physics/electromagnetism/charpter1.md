---
title: 第一章
date: 2020-12-27
category: 物理
tag:
  - 电磁学
---

## 电场与电势

$$
k = \frac{1}{4\pi\varepsilon_0} = \frac{\mu_0}{4\pi}
$$

$$
F_{12} = k \frac{q_1q_2}{r^2}\overrightharpoon{e_{12}}
$$

$$
E = \frac{F}{q_0}
$$

$$
\overrightharpoon{E} = - \nabla U
$$

$$
U = \int_P^\infty\overrightharpoon{E}\cdot\overrightharpoon{dl}
$$

### 点电荷

$$
E = \frac{Q}{4\pi\varepsilon_0r^2}
$$

$$
U = \frac{Q}{4\pi\varepsilon_0r}
$$

### 电偶极子

$\overrightharpoon{p} = q \overrightharpoon{l}$, $l$ 由 $-q$ 到 $q$

$$
U = \frac{1}{4\pi\varepsilon_0}\frac{\overrightharpoon{p}\cdot\overrightharpoon{e_r}}{r^2}
$$

$$
E = \begin{cases}
  \frac{1}{4\pi\varepsilon}\frac{2p}{r^3} &\text{中垂线}\\
  \frac{1}{4\pi\varepsilon}\frac{p}{r^3} &\text{延长线}
\end{cases}
$$

::: tip

对于电偶极子、电四极子这类题，主要利用 $a \gg b$ 的条件，将结果变为包含 $\frac{b}{a}$，合理舍去高阶小量。

虚功原理也可以用来解决电偶极子一类题:

$$
F_l = \frac{\partial w}{\partial l}
$$

$$
L_\theta = \frac{\partial w}{\partial\theta}
$$

:::

## 高斯定理

$$
\varPhi_E = \oiint_s \overrightharpoon{E}\cdot\overrightharpoon{dS} = \frac{1}{\varepsilon_0}\sum_iq_i
$$

对于无限长线电荷密度为 $\eta_e$ 的线，其电场强度

$$E = \frac{\eta_e}{2\pi\varepsilon_0r}$$

对于无限大面电荷密度为 $\sigma_e$ 的线，其电场强度

$$E = \frac{\sigma_e}{2\varepsilon_0}$$

静电场的环路定理:

$$
\oint_LE\cdot dl = 0
$$

## 相互作用能

$$
W_{\text{互}} = \frac{1}{4\pi\varepsilon_0}\sum_{i=1}^n\sum_{j=1}^{i-1}\frac{q_iq_j}{r_{ij}} \\= \frac{1}{8\pi\varepsilon_0}\sum_{i=1}^n\sum_{j=1}^n\frac{q_iq_j}{r_{ij}} (i\ne j) \\= \frac{1}{2}\sum_iq_iU_i
$$

对于连续分布:

$$
W_e = \frac{1}{2}\int_V\rho_eUdV \tag{体}
$$

$$
W_e = \frac{1}{2}\int_S\sigma_eUdS \tag{面}
$$

$$
W_e = \frac{1}{2}\int_l\eta_eUdl \tag{线}
$$
