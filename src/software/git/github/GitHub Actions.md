#Github Action介绍

##概念
GitHub 把组成持续集成的操作称为 actions。

GitHub 允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。

如果你需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action 即可，整个持续集成过程，就变成了一个 actions 的组合。这就是 GitHub Actions 最特别的地方。

GitHub 做了一个官方市场，可以搜索到他人提交的 actions。另外，还有一个 awesome actions 的仓库，也可以找到不少 action。

##基本概念
GitHub Actions 有一些自己的术语。

1. **workflow （工作流程）：** 持续集成一次运行的过程，就是一个 workflow。

2. **job （任务）：** 一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。

3. **step（步骤）：** 每个 job 由多个 step 构成，一步步完成。

4. **action （动作）：** 每个 step 可以依次执行一个或多个命令（action）。

##workflow 文件

GitHub Actions 的配置文件叫做 `workflow` 文件，存放在代码仓库的`.github/workflows`目录。

`workflow` 文件采用 `YAML` 格式，文件名可以任意取，但是后缀名统一为`.yml`，比如`foo.yml`。一个库可以有多个 `workflow` 文件。GitHub 只要发现`.github/workflows`目录里面有`.yml`文件，就会自动运行该文件。

`workflow` 文件的配置字段非常多，详见官方文档。下面是一些基本字段。

1. name

`name`字段是 `workflow` 的名称。如果省略该字段，默认为当前 `workflow` 的文件名。
```yml
name: GitHub Actions Demo
```
2. on

`on`字段指定触发 `workflow` 的时机，通常是某些事件。
```yml
on: push
```
>上面代码指定，push事件触发 workflow。

on字段也可以是事件的数组。
```yml
on: [push, pull_request]
```
>上面代码指定，push事件或pull_request事件都可以触发 workflow。

完整的事件列表，请查看官方文档。除了代码库事件，GitHub Actions 也支持外部事件触发，或者定时运行。

3. on.<push|pull_request>.<tags|branches>

指定触发事件时，可以限定分支或标签。
```yml
on:
  push:
    branches:    
      - master
```
>上面代码指定，只有master分支发生push事件时，才会触发 workflow。

4. jobs.<job_id>.name

workflow文件的主体是`jobs`字段，表示要执行的一项或多项任务。

`jobs`字段里面，需要写出每一项任务的`job_id`，具体名称自定义。
`job_id`里面的`name`字段是任务的说明(可填可不填)。
```yml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```
>上面代码的`jobs`字段包含两项任务，`job_id`分别是`my_first_job`和`my_second_job`。

5. jobs.<job_id>.needs

needs字段指定当前任务的依赖关系，即运行顺序。
```yml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```
>上面代码中，`job1`必须先于`job2`完成，而`job3`等待`job1`和`job2`的完成才能运行。
>因此，这个 `workflow` 的运行顺序依次为：`job1`、`job2`、`job3`。

1. jobs.<job_id>.runs-on

`runs-on`字段指定运行所需要的虚拟机环境。
它是**必填字段**。目前可用的虚拟机如下。

`ubuntu-latest`，`ubuntu-18.04`或`ubuntu-16.04`
`windows-latest`，`windows-2019`或`windows-2016`
`macOS-latest`或`macOS-10.14`

>下面代码指定虚拟机环境为ubuntu-18.04。
```yml
runs-on: ubuntu-18.04
```
7. jobs.<job_id>.steps

`steps`字段指定每个 `Job` 的运行步骤，可以包含一个或多个步骤。每个步骤都可以指定以下三个字段。

>jobs.<job_id>.steps.name：步骤名称。
>jobs.<job_id>.steps.run：该步骤运行的命令或者 action。
>jobs.<job_id>.steps.env：该步骤所需的环境变量。


下面是一个完整的 workflow 文件的范例。
```yml
name: Greeting from Mona
on: push

jobs:
  my-job:
    name: My Job
    runs-on: ubuntu-latest
    steps:
    - name: Print a greeting
      env:
        MY_VAR: Hi there! My name is
        FIRST_NAME: Mona
        MIDDLE_NAME: The
        LAST_NAME: Octocat
      run: |
        echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.

上面代码中，`steps`字段只包括一个步骤。
该步骤先注入四个环境变量，然后执行一条 `Bash` 命令。
```