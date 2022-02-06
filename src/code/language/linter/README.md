---
title: linter 介绍
icon: linter
date: 2020-10-21
tag:
  - linter
---

linter 用来检查程序的语法错误，并即时标注和指出来 (例如，把声明了但没使用的多余变量指出来，向错误语句添加红色波浪线)，是程序开发的辅助工具。同时，linter 也有统一规范代码书写方式的功能。

在大型项目中，编码需要统一的风格，比如在 JavaScript 中使用单引号还是双引号包裹字符串，在何时进行折行等。目前各种语言基本都有自己的出色 linter，能够确保相同的使用不同换行方式、缩进、标记代码会最终格式化为相同的输出。

<!-- more -->

## Prettier

Prettier 是一个前端知名的 linter，它可以代码规范根据设置为唯一的排列格式。它支持 markdown, html, css, js, ts, jsx, tsx, json, vue 等多种文件格式。

## ESlint

ESlint 是一个知名的 JavaScript linter，借助插件它也可以提供其他扩展语言的支持，如 jsx, ts, tsx, vue 等。

## clang-format

clang-format 是 C/ C++ / Object-C 最流行的代码格式化工具，提供多种预设的代码风格。

- [查看详情](clang-format.md)

## checkStyle

checkStyle 是比较流行的 Java linter
