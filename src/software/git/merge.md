---
date: 2022-08-08
title: 高级合并
icon: merge
order: 17
category: Git
tag:
  - Git
  - 软件
---

## Squash merge

通过使用 `--squash` 选项，你可以在合并中将多个 commit 合并为一个。

也就是对于以下的例子

```git-graph
commit id:"main1"
branch feature
commit id:"feature1"
checkout main
commit id:"main2"
checkout feature
commit id:"feature2"
checkout main
merge feature
```

`git merge feature` 得到的结果为:

```git-graph
commit id:"main1"
commit id:"feature1"
commit id:"main2"
commit id:"feature2"
commit id:"merge commit"
```

而如果 `feature` 分支意在实现一个完成的特性，两个 commit 只是工作进度实际上并不重要的时候，我们可以通过 `git merge --squash feature` 得到:

```git-graph
commit id:"main1"
commit id:"main2"
commit id:"squash merge result"
```

## Cherry pick

有些时候，我们可能需要提取其他分支的某个 commit，这个时候我们可以用 cherry pick 进行操作。

```git-graph
commit
branch mrhope
commit id:"featureA 20%"
commit id:"featureA 40%"
commit id:"bug fix"
commit id:"featureA 60%"
commit id:"featureA 80%"
checkout main
cherry-pick id:"bug fix"
checkout mrhope
commit id:"featureA 100%"
checkout main
merge mrhope
```

在这种情况下，我们可以回到 main 分支，执行 `git cherry-pick <commit id>` 来挑拣某个提交，当然，你可以一并在命令中提交挑拣多个 commit。

```git-graph
commit
branch mrhope
commit id:"featureA 20%"
commit id:"featureA 40%"
commit id:"bug fix1"
commit id:"featureA 60%"
commit id:"bug fix2"
commit id:"featureA 80%"
checkout main
cherry-pick id:"bug fix1"
cherry-pick id:"bug fix2"
checkout mrhope
commit id:"featureA 100%"
checkout main
merge mrhope
```

- `git cherry-pick <commit id 1> <commit id 2>` 表示挑拣 commit id 1 和 commit id 2
- `git cherry-pick <commit id 1>...<commit id 2>` 表示挑拣 commit id 1 与 commit id 2 之间 (包括两者) 的所有提交
- `git cherry-pick <branch>` 表示挑拣该分支最新的提交
