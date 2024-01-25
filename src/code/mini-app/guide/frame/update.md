---
date: 2021-00-19
title: 小程序更新机制
icon: update
category: 小程序
---

## 未启动时更新

开发者在管理后台发布新版本的小程序之后，如果某个用户本地有小程序的历史版本，此时打开的可能还是旧版本。微信客户端会有若干个时机去检查本地缓存的小程序有没有更新版本，如果有则会静默更新到新版本。总的来说，开发者在后台发布新版本之后，无法立刻影响到所有现网用户，但最差情况下，也在发布之后 24 小时之内下发新版本信息到用户。用户下次打开时会先更新最新版本再打开。

## 启动时更新

小程序每次冷启动时，都会检查是否有更新版本，如果发现有新版本，将会异步下载新版本的代码包，并同时用客户端本地的包进行启动，即新版本的小程序需要等下一次冷启动才会应用上。

如果需要马上应用最新版本，可以使用 [`wx.getUpdateManager`](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html) API 进行处理。

```js
const updateManager = wx.getUpdateManager();

updateManager.onCheckForUpdate((res) => {
  // 请求完新版本信息的回调
  console.log(res.hasUpdate);
});

updateManager.onUpdateReady(() => {
  wx.showModal({
    title: "更新提示",
    content: "新版本已经准备好，是否重启应用？",
    success(res) {
      if (res.confirm) {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate();
      }
    },
  });
});

updateManager.onUpdateFailed(() => {
  // 新版本下载失败
});
```
