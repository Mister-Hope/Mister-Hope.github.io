#自动部署 Github Pages 和服务器

##生成配置GitHub Actions Token

* 生成Token：https://github.com/settings/tokens

* 或者可以点击，头像 -> Settings -> Developer settings -> Personal access tokens -> Generate new Token

* Token名称填写Token，Select scopes勾选repo，然后滚动到网页最下面点击提交按钮。生成了Token，复制保存（该Token只显示一次，忘记了就再生成）

* 配置到项目的Secrets中：进入项目-> Settings -> Secrets -> New secret
    * Name：建议和刚才生成Token保持一致
    * Value：为刚才生成的Token

* 除了配置Token，还要配置服务器的HOST、USERNAME、PASSWORD、PORT，这些配置在GitHub把项目部署到服务器的时候使用到

##自动部署 Github Pages

```yml
name: Publish And Deploy Demo # 自动部署的名称

#自动部署的条件
on:
  push:
    branches:
      - master


jobs:
  build-production:

    runs-on: ubuntu-latest   #运行环境

    steps:  # 步骤

    # 第一步：下载源码（CI/CD拉取代码到自己的本地）
    - name: Checkout
      uses: actions/checkout@master #如果你使用 action/checkout@v2 须将 persist credentials设置为 false，部署才能正常工作。

    # 第二步，安装依赖
    - name: Install dependencies  
      run: npm install

    # 第三步，打包代码
    - name: Build                 
      run: npm run build --if-present

    #第四步，部署
    - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages
          FOLDER: dist
```

##自动部署服务器

```yml
name: Publish And Deploy Demo # 自动部署的名称

#自动部署的条件
on:
  push:
    branches:
      - master

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest # 运行环境
    
    steps: # 步骤

    # 第一步：下载源码（CI/CD拉取代码到自己的本地）
    - name: Checkout
      uses: actions/checkout@master #如果你使用 action/checkout@v2 须将 persist credentials设置为 false，部署才能正常工作。

    # 第二步：构建和部署
    - name: Build 
      uses: actions/setup-node@master
    - run: npm install # 安装第三方包
    - run: npm run build # 打包
    - run: tar -zcvf release.tgz .nuxt static nuxt.config.js package.json package-lock.json pm2.config.json
      # 把.nuxt、nuxt.config.js等文件，打包压缩为release.tgz

    # 第三步：发布 Release
    - name: Create Release # 创建Release，可以在仓库看到一个个版本
      id: create_release
      uses: actions/create-release@master
      env:
        GITHUB_TOKEN: ${{ secrets.TOKEN }} # GitHub添加的Token
      with:
        tag_name: ${{ github.ref }} # (tag)标签名称
        release_name: Release ${{ github.ref }}
        draft: false # 是否是草稿
        prerelease: false # 是否是预发布

    # 第四步：上传构建结果到 Release（把打包的tgz上传到Release）
    - name: Upload Release Asset
      id: upload-release-asset
      uses: actions/upload-release-asset@master
      env:
        GITHUB_TOKEN: ${{ secrets.TOKEN }}
      with:
        upload_url: ${{ steps.create_release.outputs.upload_url }} # 上传地址，通过创建Release获取到的
        asset_path: ./release.tgz # 要上传文件
        asset_name: release.tgz # 上传后的文件名
        asset_content_type: application/x-tgz

    # 第五步：部署到服务器
    - name: Deploy
      uses: appleboy/ssh-action@master # 使用ssh链接服务器
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        password: ${{ secrets.PASSWORD }}
        port: ${{ secrets.PORT }}
        script: | # 执行命令（运行到服务器）cd：要确保服务器有这个目录； wget：下载上一步的release到服务器； tar：解压； 安装依赖；启动服务
          cd /root/realworld-nuxtjs
          wget https://github.com/YuYun95/realworld-nuxtjs/releases/latest/download/release.tgz -O release.tgz
          tar zxvf release.tgz
          npm install --production
          pm2 reload pm2.config.json
```