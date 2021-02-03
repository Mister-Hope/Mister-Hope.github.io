# 自动部署 Github Pages 和服务器

## 生成配置 GitHub Actions Token

- 生成 Token：<https://github.com/settings/tokens>

- 或者可以点击，头像 → Settings → Developer settings → Personal access tokens → Generate new Token

- Token 名称填写 Token，Select scopes 勾选 repo，然后滚动到网页最下面点击提交按钮。生成了 Token，复制保存 (该 Token 只显示一次，忘记了就再生成)

- 配置到项目的 Secrets 中：进入项目 → Settings → Secrets → New secret

  - Name：建议和刚才生成 Token 保持一致
  - Value：为刚才生成的 Token

- 除了配置 Token，还要配置服务器的 HOST、USERNAME、PASSWORD、PORT，这些配置在 GitHub 把项目部署到服务器的时候使用到

## 自动部署 Github Pages

```yml
name: Publish And Deploy Demo # 自动部署的名称

# 自动部署的条件
on:
  push:
    branches:
      - master


jobs:
  build-production:

    runs-on: ubuntu-latest   # 运行环境

    steps:  # 步骤

    # 第一步：下载源码 (CI/CD 拉取代码到自己的本地)
    - name: Checkout
      uses: actions/checkout@master # 如果你使用 action/checkout@v2 须将 persist credentials 设置为 false，部署才能正常工作。

    # 第二步:安装依赖
    - name: Install dependencies
      run: npm install

    # 第三步，打包代码
    - name: Build
      run: npm run build --if-present

    # 第四步，部署
    - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages    # 要部署的分支
          FOLDER: dist  # 要部署的文件夹
```

## 自动部署服务器

```yml
name: Publish And Deploy Demo # 自动部署的名称

# 自动部署的条件
on:
  push:
    branches:
      - master

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest # 运行环境

    steps: # 步骤

    # 第一步：下载源码 (CI/CD 拉取代码到自己的本地)
    - name: Checkout
      uses: actions/checkout@master # 如果你使用 action/checkout@v2 须将 persist credentials 设置为 false，部署才能正常工作。

    # 第二步： 配置环境
    - name: Configuration environment
        run: |
          mkdir -p ~/.ssh/
          echo "${{ secrets.SSH_PRIVATE_KEY }}" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan mrhope.site >> ~/.ssh/known_hosts
          git config --global user.name 'Github用户名'
          git config --global user.email 'Github注册邮箱'

    # 第三步： 部署
      - name: Deploy
        run: |
          git push -f git@xxx.xxx:/www/wwwroot/xxx gh-pages
          ssh git@xxx.xxx "cd /www/wwwroot/xxx && git reset --hard HEAD"
```
