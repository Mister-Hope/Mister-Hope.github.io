import{ac as e,M as p,N as a,U as l,L as i,ae as r}from"./framework-6fc096bd.js";const t={},n=i("p",null,"持续集成 (Continuous Integration) 指的是，频繁地 (一天多次) 将代码集成到主干，每次集成都通过自动化的构建 (包括编译，发布，自动化测试) 来验证，从而尽早地发现集成错误。",-1),o=i("p",null,"持续集成的目的让产品可以快速迭代，同时还能保持高质量。就是说每完成一个完整的部分，就向下个环节交付，发现问题可以马上调整，使得问题不会放大到其他部分和后面的环节。",-1),h=r('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>持续集成 (CI) 是一种需要频繁提交代码到共享仓库的软件实践。频繁提交代码能较早检测到错误，减少在查找错误来源时开发者需要调试的代码量。 频繁的代码更新也更便于从软件开发团队的不同成员合并更改。 这对开发者非常有益，他们可以将更多时间用于编写代码，而减少在调试错误或解决合并冲突上所花的时间。</p><p>提交代码到仓库时，可以持续创建并测试代码，以确保提交未引入错误。 您的测试可以包括代码语法检查 (检查样式格式) 、安全性检查、代码覆盖率、功能测试及其他自定义检查。</p><p>创建和测试代码需要服务器。 您可以在推送代码到仓库之前在本地创建并测试更新，也可以使用 CI 服务器检查仓库中的新代码提交。</p><h3 id="要点" tabindex="-1"><a class="header-anchor" href="#要点" aria-hidden="true">#</a> 要点</h3><p>它的核心措施是，代码集成到主干之前，必须通过自动化测试。只要有一个测试用例失败，就不能集成。</p><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ol><li><p>提高开发效率</p></li><li><p>快速发现并定位 Bugs</p></li><li><p>更快速发布更新</p></li></ol><hr><p>与持续集成相关的，还有两个概念，分别是持续交付和持续部署。</p><h2 id="持续交付" tabindex="-1"><a class="header-anchor" href="#持续交付" aria-hidden="true">#</a> 持续交付</h2><p><strong>持续交付 (Continuous Delivery) 指的是，频繁地将软件的新版本，交付给质量团队或者用户，以供评审。</strong> 如果评审通过，代码就进入生产阶段。</p><p>持续交付可以看作持续集成的下一步。它强调的是，不管怎么更新，软件是随时随地可以交付的。</p><p>持续交付意味着所有的变更都可以被部署到生产环境中，如果代码没有问题，可以继续手动部署到生产环境中。</p><h2 id="持续部署" tabindex="-1"><a class="header-anchor" href="#持续部署" aria-hidden="true">#</a> 持续部署</h2><p><strong>持续部署 (Continuous Deployment) 是持续交付的下一步，指的是代码通过评审以后，自动部署到生产环境。</strong></p><p>持续部署的目标是，代码在任何时刻都是可部署的，可以进入生产阶段。</p><h2 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程</h2><p>一个大型项目严格的流程如下:</p><ol><li><p>提交</p><p>流程的第一步，是开发者向代码仓库提交代码。所有后面的步骤都始于本地代码的一次提交 (commit)。</p></li><li><p>测试 (第一轮)</p><p>代码仓库对 commit 操作配置了钩子 (hook) ，只要提交代码或者合并进主干，就会跑自动化测试。</p><p>测试分为好几种,</p><ul><li>单元测试: 针对函数或模块的测试</li><li>集成测试: 针对整体产品的某个功能的测试，又称功能测试</li><li>端对端测试: 从用户界面直达数据库的全链路测试</li></ul><p>第一轮至少要跑单元测试。</p></li><li><p>构建</p><p>通过第一轮测试，代码就可以合并进主干，就算可以交付了。</p><p>交付后，就先进行构建 (build)，再进入第二轮测试。所谓构建，指的是将源码转换为可以运行的实际代码，比如安装依赖，配置各种资源 (样式表、JS 脚本、图片) 等等。</p><p>常用的构建工具如下,</p><ul><li>Jenkins</li><li>Travis</li><li>Codeship</li><li>Strider</li></ul><p>Jenkins 和 Strider 是开源软件， Travis 和 Codeship 对于开源项目可以免费使用。它们都会将构建和测试，在一次运行中执行完成。</p></li><li><p>测试 (第二轮)</p><p>构建完成，就要进行第二轮测试。如果第一轮已经涵盖了所有测试内容，第二轮可以省略，当然，这时构建步骤也要移到第一轮测试前面。</p><p>第二轮是全面测试，单元测试和集成测试都会跑，有条件的话，也要做端对端测试。所有测试以自动化为主，少数无法自动化的测试用例，就要人工跑。</p><p>需要强调的是，新版本的每一个更新点都必须测试到。如果测试的覆盖率不高，进入后面的部署阶段后，很可能会出现严重的问题。</p></li><li><p>部署</p><p>通过了第二轮测试，当前代码就是一个可以直接部署的版本 (artifact)。将这个版本的所有文件打包 (tar filename.tar *) 存档，发到生产服务器。</p><p>生产服务器将打包文件，解包成本地的一个目录，再将运行路径的符号链接 (symlink) 指向这个目录，然后重新启动应用。这方面的部署工具有 Ansible， Chef， Puppet 等。</p></li><li><p>回滚</p><p>一旦当前版本发生问题，就要回滚到上一个版本的构建结果。最简单的做法就是修改一下符号链接，指向上一个版本的目录。</p></li></ol>',20);function s(d,c){return p(),a("div",null,[n,o,l(" more "),h])}const _=e(t,[["render",s],["__file","ci.html.vue"]]);export{_ as default};
