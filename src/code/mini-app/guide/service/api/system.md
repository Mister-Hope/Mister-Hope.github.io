---
date: 2020-10-09
title: 系统相关 API
icon: OS
category: 小程序
---

## wx.getSystemInfo(Object object)

获取系统信息

### 参数

Object object

| 属性     | 类型     | 必填 | 说明                                           |
| -------- | -------- | ---- | ---------------------------------------------- |
| success  | function | 否   | 接口调用成功的回调函数                         |
| fail     | function | 否   | 接口调用失败的回调函数                         |
| complete | function | 否   | 接口调用结束的回调函数(调用成功、失败都会执行) |

### object.success 回调函数

参数

Object res

| 属性                        | 类型    | 说明                                                                                                                                                 | 最低版本 |
| --------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| brand                       | string  | 设备品牌                                                                                                                                             | 1.5.0    |
| model                       | string  | 设备型号                                                                                                                                             |          |
| pixelRatio                  | number  | 设备像素比                                                                                                                                           |          |
| screenWidth                 | number  | 屏幕宽度，单位 px                                                                                                                                    | 1.1.0    |
| screenHeight                | number  | 屏幕高度，单位 px                                                                                                                                    | 1.1.0    |
| windowWidth                 | number  | 可使用窗口宽度，单位 px                                                                                                                              |          |
| windowHeight                | number  | 可使用窗口高度，单位 px                                                                                                                              |          |
| statusBarHeight             | number  | 状态栏的高度，单位 px                                                                                                                                | 1.9.0    |
| language                    | string  | 微信设置的语言                                                                                                                                       |          |
| version                     | string  | 微信版本号                                                                                                                                           |          |
| system                      | string  | 操作系统及版本                                                                                                                                       |          |
| platform                    | string  | 客户端平台                                                                                                                                           |          |
| fontSizeSetting             | number  | 用户字体大小(单位 px)。以微信客户端「我-设置-通用-字体大小」中的设置为准                                                                             | 1.5.0    |
| SDKVersion                  | string  | 客户端基础库版本                                                                                                                                     | 1.1.0    |
| benchmarkLevel              | number  | 设备性能等级(仅 Android 小游戏)。<br />取值为: -2 或 0(该设备无法运行小游戏)，-1(性能未知)，>=1(设备性能值，该值越高，设备性能越好，目前最高不到 50) | 1.8.0    |
| albumAuthorized             | boolean | 允许微信使用相册的开关(仅 iOS 有效)                                                                                                                  | 2.6.0    |
| cameraAuthorized            | boolean | 允许微信使用摄像头的开关                                                                                                                             | 2.6.0    |
| locationAuthorized          | boolean | 允许微信使用定位的开关                                                                                                                               | 2.6.0    |
| microphoneAuthorized        | boolean | 允许微信使用麦克风的开关                                                                                                                             | 2.6.0    |
| notificationAuthorized      | boolean | 允许微信通知的开关                                                                                                                                   | 2.6.0    |
| notificationAlertAuthorized | boolean | 允许微信通知带有提醒的开关(仅 iOS 有效)                                                                                                              | 2.6.0    |
| notificationBadgeAuthorized | boolean | 允许微信通知带有标记的开关(仅 iOS 有效)                                                                                                              | 2.6.0    |
| notificationSoundAuthorized | boolean | 允许微信通知带有声音的开关(仅 iOS 有效)                                                                                                              | 2.6.0    |
| bluetoothEnabled            | boolean | 蓝牙的系统开关                                                                                                                                       | 2.6.0    |
| locationEnabled             | boolean | 地理位置的系统开关                                                                                                                                   | 2.6.0    |
| wifiEnabled                 | boolean | Wi-Fi 的系统开关                                                                                                                                     | 2.6.0    |
| safeArea                    | Object  | 在竖屏正方向下的安全区域                                                                                                                             | 2.7.0    |

#### res.safeArea 的结构

| 属性   | 类型   | 说明                         |
| ------ | ------ | ---------------------------- |
| left   | number | 安全区域左上角横坐标         |
| right  | number | 安全区域右下角横坐标         |
| top    | number | 安全区域左上角纵坐标         |
| bottom | number | 安全区域右下角纵坐标         |
| width  | number | 安全区域的宽度，单位逻辑像素 |
| height | number | 安全区域的高度，单位逻辑像素 |

示例代码

```js
wx.getSystemInfo({
  success: (res) => {
    console.log(res.model);
    console.log(res.pixelRatio);
    console.log(res.windowWidth);
    console.log(res.windowHeight);
    console.log(res.language);
    console.log(res.version);
    console.log(res.platform);
  },
});
```

## Object wx.getSystemInfoSync()

`wx.getSystemInfo` 的同步版本

直接返回异步版本的 `res`

示例代码

```js
try {
  const res = wx.getSystemInfoSync();

  console.log(res.model);
  console.log(res.pixelRatio);
  console.log(res.windowWidth);
  console.log(res.windowHeight);
  console.log(res.language);
  console.log(res.version);
  console.log(res.platform);
} catch (err) {
  // Do something when catch error
}
```

## UpdateManager wx.getUpdateManager()

获取全局唯一的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档。

返回值: UpdateManager

## UpdateManager

更新管理器对象，用来管理更新，可通过 `wx.getUpdateManager` 接口获取实例。UpdateManager 有多个方法

### UpdateManager.applyUpdate()

强制小程序重启并使用新版本。在小程序新版本下载完成后(即收到 `onUpdateReady` 回调)调用。

### UpdateManager.onCheckForUpdate(function callback)

监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。

Function callback

向微信后台请求检查更新结果事件的回调函数

参数

Object res

| 属性      | 类型    | 说明         |
| --------- | ------- | ------------ |
| hasUpdate | boolean | 是否有新版本 |

### UpdateManager.onUpdateReady(function callback)

监听小程序有版本更新事件。客户端主动触发下载(无需开发者触发)，下载成功后回调

### UpdateManager.onUpdateFailed(function callback)

监听小程序更新失败事件。小程序有新版本，客户端主动触发下载(无需开发者触发)，下载失败(可能是网络原因等)后回调

示例代码

```js
const updateManager = wx.getUpdateManager();

updateManager.onCheckForUpdate((res) => {
  // 请求完新版本信息的回调
  console.log(res.hasUpdate);
});

updateManager.onUpdateReady(() => {
  wx.showModal({
    title: "更新提示",
    content: "新版本已经准备好，是否重启应用? ",
    success: (res) => {
      if (res.confirm)
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate();
    },
  });
});

updateManager.onUpdateFailed(() => {
  // 新版本下载失败
});
```
