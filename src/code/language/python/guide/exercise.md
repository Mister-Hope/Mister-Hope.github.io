---
title: 练习
icon: exercise
author: 廖雪峰
date: 2020-06-02
category: Python
---

## BMI

小明的成绩从去年的 72 分提升到了今年的 85 分，请计算小明成绩提升的百分点，并用字符串格式化显示出 'xx.x%'，只保留小数点后 1 位:

答案[^exercise1]

[^exercise1]:
    ```py
    score1 = 72

    score2 = 85

    result = (score2 - score1) / score1 * 100

    print('小明成绩提升了%.1f%%' % result)
    ```
