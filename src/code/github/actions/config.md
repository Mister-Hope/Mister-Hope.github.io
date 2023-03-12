---
title: Action 配置
icon: config
date: 2021-02-18
category: GitHub
tag:
  - action
  - workflow
order: 2
---

GitHub Actions 的配置文件叫做 `workflow` 文件，存放在代码仓库的 `.github/workflows` 目录。

`workflow` 文件采用 `YAML` 格式，文件名可以任意取，但是后缀名统一为 `.yml`，比如`foo.yml`。

一个库可以有多个 `workflow` 文件。GitHub 只要发现 `.github/workflows` 目录里面有 `.yml` 文件，就会自动运行该文件。

<!-- more -->

## 常见字段

`workflow` 文件的配置字段非常多。下面是一些基本字段。

### name

`name` 字段是 `workflow` 的名称。如果省略该字段，默认为当前 `workflow` 的文件名。

```yml
name: GitHub Actions Demo
```

### on

`on` 字段指定触发 `workflow` 的时机，通常是某些事件。

```yml
# 指定 push 事件触发 workflow。
on: push
```

`on` 字段也可以是事件的数组。

```yml
# 指定 push 事件或 pull_request 事件都可以触发 workflow。
on: [push, pull_request]
```

完整的事件列表，请查看官方文档。
除了代码库事件，GitHub Actions 也支持外部事件触发，或者定时运行。

#### on.<push|pull_request>.<tags|branches>

指定触发事件时，可以限定分支或标签。

```yml
# 指定只有 main 分支发生 push 事件时，才会触发 workflow。
on:
  push:
    branches:
      - main
```

### jobs

`workflow` 文件的主体是 `jobs` 字段，表示要执行的一项或多项任务。

`jobs` 字段里面，需要写出每一项任务的 `job_id`，具体名称自定义。

#### jobs.<job_id>.name

`job_id` 里面的 `name` 字段是任务的说明(可填可不填)。

```yml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```

上面代码的 `jobs` 字段包含两项任务，`job_id` 分别是 `my_first_job` 和 `my_second_job`。

#### jobs.<job_id>.needs

`needs` 字段指定当前任务的依赖关系，即运行顺序。

```yml
# 这个 workflow 的运行顺序依次为: job1、job2、job3。
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

#### jobs.<job_id>.runs-on

`runs-on` 字段指定运行所需要的虚拟机环境。
它是**必填字段**。目前可用的虚拟机如下。

`ubuntu-latest`，`ubuntu-18.04` 或 `ubuntu-16.04`

`windows-latest`，`windows-2019` 或 `windows-2016`

`macOS-latest` 或 `macOS-10.14`

```yml
# 代码指定虚拟机环境为 ubuntu-18.04。
runs-on: ubuntu-18.04
```

#### jobs.<job_id>.steps

`steps` 字段指定每个 `Job` 的运行步骤，可以包含一个或多个步骤。每个步骤都可以指定以下三个字段。

- `jobs.<job_id>.steps.name`: 步骤名称。
- `jobs.<job_id>.steps.run`: 该步骤运行的命令或者 action。
- `jobs.<job_id>.steps.env`: 该步骤所需的环境变量。

下面是一个完整的 `workflow` 文件的范例。

```yml
name: Greeting from Mona
on: push

jobs:
  my-job:
    name: My Job
    runs-on: ubuntu-latest
    steps: # steps 字段只包括一个步骤。该步骤先注入四个环境变量，然后执行一条 Bash 命令。
      - name: Print a greeting
        env:
          MY_VAR: Hi there! My name is
          FIRST_NAME: Mona
          MIDDLE_NAME: The
          LAST_NAME: Octocat
        run: |
          echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.
```

## 官方文档

关于完整的工作流程语法，详见 [GitHub 操作的工作流程语法](https://docs.github.com/cn/actions/reference/workflow-syntax-for-github-actions)
