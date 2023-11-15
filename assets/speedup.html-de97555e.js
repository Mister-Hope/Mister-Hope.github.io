import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as t,b as a}from"./app-0f8c396e.js";const r={},d=a('<p>由于天朝墙的存在，GitHub 的访问速度在大部分国内地区都很慢。如果需要克隆体积比较大的项目，可能需要很长时间，也很大概率会在中途因为网络波动、终端问题导致克隆失败。</p><p>本文介绍如何使用 Gitee 加快 GitHub 项目克隆。</p><h2 id="gitee" tabindex="-1"><a class="header-anchor" href="#gitee" aria-hidden="true">#</a> Gitee</h2><p>Gitee 又称码云，是一个国内的代码托管商，国内访问 Gitee 的速度是十分 Amazing 的。</p><h3 id="注册" tabindex="-1"><a class="header-anchor" href="#注册" aria-hidden="true">#</a> 注册</h3><p>Gitee 账户可以很方便的通过 GitHub 账户 + 绑定手机号注册。</p><h3 id="添加公钥" tabindex="-1"><a class="header-anchor" href="#添加公钥" aria-hidden="true">#</a> 添加公钥</h3><p>完成注册后，您需要上传本地公钥，以保证可以从 Gitee 上拉取或克隆，其步骤与 GitHub 大致相同。</p><h3 id="导入-github-仓库" tabindex="-1"><a class="header-anchor" href="#导入-github-仓库" aria-hidden="true">#</a> 导入 GitHub 仓库</h3><p>码云的企业专线访问 GitHub 的速度很快，而码云在新建仓库的时候提供了导入选项，这就给我们的加速提供了方式。</p><p>我们只需要在码云上新建仓库，选择导入，然后输入自己想要克隆的 GitHub 仓库地址，交给码云完成导入即可。</p><p>稍等片刻后，码云即会将 GitHub 的仓库同步到自己的服务器上，此时我们只需要克隆码云上的这个仓库地址，就可以高速克隆这个项目。</p><h3 id="远程库地址修改" tabindex="-1"><a class="header-anchor" href="#远程库地址修改" aria-hidden="true">#</a> 远程库地址修改</h3><p>在克隆完毕后，本地的 origin 远程库会默认为 Gitee 的仓库，此时我们需要使用 <code>git remote rename origin gitee</code> 命令，将码云的远程仓库重命名为 <code>gitee</code>，并使用 <code>git remote add origin &lt;github url&gt;</code> 命令重新添加 GitHub 的远程仓库为 origin。</p><p>这样我们稍后在做出本地提交后，即可直接推送到 GitHub 仓库。</p><h3 id="同步仓库" tabindex="-1"><a class="header-anchor" href="#同步仓库" aria-hidden="true">#</a> 同步仓库</h3><p>如果以导入的形式创建码云仓库。则可以随时点击仓库页面上的同步图标，让码云随时拉取最新的 gitee 代码，以便在本地通过 <code>git fetch gitee</code>，通过码云服务器高速拉取最新代码。</p>',17),h=[d];function c(o,n){return i(),t("div",null,h)}const u=e(r,[["render",c],["__file","speedup.html.vue"]]);export{u as default};
