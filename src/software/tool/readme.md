# Githook(Git钩子)
**钩子：在某些操作之前或之后运行的简单脚本。**
**钩子分为两种，客户端钩子与服务器钩子**
**客户端钩子：提交和合并等操作；服务器钩子：接收和被推送等联网操作**

## Git钩子的安装

钩子被储存在Git目录下的hooks子目录下（.git/hooks),当你`git init`初始化一个新库时，git会自动生成一些示例脚本。
#### 部分示例钩子
ClientSide hooks（客户端钩子）：

*1 `pre-commit`，当执行commit动作时先执行此hook，可以用此hook做一些检查，比如代码风格检查，或者先跑测试。
*
*2` prepare-commit-msg`， 当commit时需要输入message前会触发此hook，可以用此hook来定制自己的default message信息*。

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
###安装钩子的示例
钩子带有.simple的扩展名是不能默认执行的，想安装一个钩子或手写一个新脚本，只需删除.simple即可。

例：安装一个`pre-commit`钩子
`chmod+x pre-commit`
###脚本语言
内置的脚本多是 shell 或 perl 脚本，但是只要我们编写的脚本能够执行，就可以使用任何喜欢的脚本语言。每个脚本文件的事务行定义了该文件的解释方式。因此想要使用其他的脚本语言，我们只需要改变事务行中解释器的路径就可以了。
所以，我们可以使用我们喜欢的脚本语言来编译。
###本地钩子
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
##钩子示例：验证PHP语法
[示例](http://https://blog.csdn.net/culi4814/article/details/108342453?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522160656183719721942251893%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=160656183719721942251893&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_v2~rank_v28_p-3-108342453.pc_first_rank_v2_rank_v28p&utm_term=%E5%AE%89%E8%A3%85git%E9%92%A9%E5%AD%90 "示例")
### End