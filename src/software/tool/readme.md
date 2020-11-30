# Githook(Git钩子)

**钩子：在某些操作之前或之后运行的简单脚本。**

钩子分为两种，客户端钩子与服务器钩子

客户端钩子：提交和合并等操作；服务器钩子：接收和被推送等联网操作

## Git钩子的安装

钩子被储存在Git目录下的hooks子目录下（.git/hooks),当你`git init`初始化一个新库时，git会自动生成一些示例脚本。

### 部分示例钩子

ClientSide hooks（客户端钩子）：

*1 `pre-commit`，当执行commit动作时先执行此hook，可以用此hook做一些检查，比如代码风格检查，或者先跑测试。

*2`prepare-commit-msg`， 当commit时需要输入message前会触发此hook，可以用此hook来定制自己的default message信息*。

*3 `commit-msg`，当用户输入commit的message后被触发，可以用此hook校验message的信息，比如是否符合规定，有没有cr等。*

*4 `post-commit`, 当commit完成后被触发，可以用此hook发送notification等。*

*5 `pre-rebase`, rebase之前会被触发，可以用此hook来拒绝所有的已经push的commits进行rebase操作。*

*6 `post-merge`, 当merge成功后，会触发此hook。*

*7 `pre-push`, 当push时，remote refs被更新，但是在所有的objects传输前被触发。*

*8 `pre-auto-gc`, 当git gc --auto执行前被触发。在垃圾回收之前做一些验证或备份是挺不错的。*

ServerSide hooks（服务器钩子）:

*1 `pre-receive`, 当收到push动作之前会被执行。*

*2 `update`, 也是收到push动作之前被执行，但是有可能被执行多次，每个branch一次。*

*3 `post-receive`, 当push动作已经完成的时候会被触发，可以用此hook来push notification等，比如发邮件，通知持续构建服务器等。*

[Git钩子](http://https://www.git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90 "Git钩子")

### 安装钩子的示例

钩子带有.simple的扩展名是不能默认执行的，想安装一个钩子或手写一个新脚本，只需删除.simple即可。

例：安装一个`pre-commit`钩子
`chmod+x pre-commit`

### 脚本语言

内置的脚本多是 shell 或 perl 脚本，但是只要我们编写的脚本能够执行，就可以使用任何喜欢的脚本语言。每个脚本文件的事务行定义了该文件的解释方式。因此想要使用其他的脚本语言，我们只需要改变事务行中解释器的路径就可以了。
所以，我们可以使用我们喜欢的脚本语言来编译。

### 本地钩子

本地钩子只影响它们所在的仓库。
常见的本地钩子
`pre-commit`
`prepare-commit-msg`
`commit-msg`
`post-commit`
`post-checkout`
`pre-rebase`
所有的以 pre- 为前缀的钩子都允许我们在后缀的行为 即将发生 的时候改变这些行为；而以 post- 为前缀的钩子 仅用于通知。

**具体部分钩子的使用**
[部分Git钩子详细使用](http://http://malcolmyu.github.io/malnote/2015/10/16/Git-Hooks/#%E5%AE%89%E8%A3%85%E9%92%A9%E5%AD%90 "部分Git钩子详细使用")

## 钩子示例：验证PHP语法

[示例](http://https://blog.csdn.net/culi4814/article/details/108342453?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522160656183719721942251893%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=160656183719721942251893&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_v2~rank_v28_p-3-108342453.pc_first_rank_v2_rank_v28p&utm_term=%E5%AE%89%E8%A3%85git%E9%92%A9%E5%AD%90 "示例")

## 客服端钩子

### 提交工作流挂钩

*一般有四个钩子*
`pre-commit`   `prepare-commit-msg`   `commit-msg`   `post-commit`
pre-commit挂钩在键入提交信息前运行，被用来检查即将提交的快照，例如，检查是否有东西被遗漏，确认测试是否运行，以及检查代码。

prepare-commit-msg挂钩在提交信息编辑器显示之前，默认信息被创建之后运行。
commit-msg挂钩接收一个参数，此参数是包含最近提交信息的临时文件的路径。

post-commit挂钩在整个提交过程完成后运行，他不会接收任何参数，但可以运行git log -1 HEAD来获得最后的提交信息。

**提交工作流的客户端挂钩脚本可以在任何工作流中使用，他们经常被用来实施某些策略，但值得注意的是，这些脚本在clone期间不会被传送。可以在服务器端实施策略来拒绝不符合某些策略的推送，但这完全取决于开发者在客户端使用这些脚本的情况。所以，这些脚本对开发者是有用的，由他们自己设置和维护，而且在任何时候都可以覆盖或修改这些脚本。**

### E-mail工作流挂钩

1，`git am`  2， `applypatch-msg`  3， `pre-applypatch`

首先运行的是applypatch-msg挂钩，他接收一个参数：包含被建议提交信息的临时文件名。如果该脚本非零退出，Git 放弃此补丁。可以使用这个脚本确认提交信息是否被正确格式化，或让脚本编辑信息以达到标准化。

下一个在git am运行期间调用是pre-applypatch挂钩。该挂钩不接收参数，在补丁被运用之后运行，因此，可以被用来在提交前检查快照。你能用此脚本运行测试，检查工作树。如果有些什么遗漏，或测试没通过，脚本会以非零退出，放弃此次git am的运行，补丁不会被提交。

最后在git am运行期间调用的是post-applypatch挂钩。你可以用他来通知一个小组或获取的补丁的作者，但无法阻止打补丁的过程。

## 服务器端挂钩

### pre-receive 和 post-receive

处理来自客户端的推送（push）操作时最先执行的脚本就是 pre-receive 。它从标准输入（stdin）获取被推送引用的列表；如果它退出时的返回值不是0，所有推送内容都不会被接受。利用此挂钩脚本可以实现类似保证最新的索引中不包含非fast-forward类型的这类效果；抑或检查执行推送操作的用户拥有创建，删除或者推送的权限或者他是否对将要修改的每一个文件都有访问权限。

post-receive 挂钩在整个过程完结以后运行，可以用来更新其他系统服务或者通知用户。它接受与 pre-receive 相同的标准输入数据。应用实例包括给某邮件列表发信，通知实时整合数据的服务器，或者更新软件项目的问题追踪系统 —— 甚至可以通过分析提交信息来决定某个问题是否应该被开启，修改或者关闭。该脚本无法组织推送进程，不过客户端在它完成运行之前将保持连接状态；所以在用它作一些消耗时间的操作之前请三思。

### update

update 脚本和 pre-receive 脚本十分类似。不同之处在于它会为推送者更新的每一个分支运行一次。假如推送者同时向多个分支推送内容，pre-receive 只运行一次，相比之下 update 则会为每一个更新的分支运行一次。它不会从标准输入读取内容，而是接受三个参数：索引的名字（分支），推送前索引指向的内容的 SHA-1 值，以及用户试图推送内容的 SHA-1 值。如果 update 脚本以退出时返回非零值，只有相应的那一个索引会被拒绝,其余的依然会得到更新。
