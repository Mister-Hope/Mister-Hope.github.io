---
date: 2020-10-09
title: 网络 API
icon: network
category: 小程序
---

## wx.request(Object object)

发起 HTTPS 网络请求。使用前请注意阅读相关说明。

### request 参数

Object object

| 属性         | 类型                      | 默认值           | 必填 | 说明                                           | 最低版本 |
| ------------ | ------------------------- | ---------------- | ---- | ---------------------------------------------- | -------- |
| url          | string                    |                  | 是   | 开发者服务器接口地址                           |          |
| data         | string/object/ArrayBuffer |                  | 否   | 请求的参数                                     |          |
| header       | Object                    |                  | 否   | 设置请求的 header，header 中不能设置 Referer。 |          |
| content-type |                           | application/json |      |                                                |          |
| method       | string                    | GET              | 否   | HTTP 请求方法                                  |          |
| dataType     | string                    | json             | 否   | 返回的数据格式                                 |          |
| responseType | string                    | text             | 否   | 响应的数据类型                                 | 1.7.0    |
| success      | function                  |                  | 否   | 接口调用成功的回调函数                         |          |
| fail         | function                  |                  | 否   | 接口调用失败的回调函数                         |          |
| complete     | function                  |                  | 否   | 接口调用结束的回调函数(调用成功、失败都会执行) |          |

object.method 的合法值

| 值      | 说明              |
| ------- | ----------------- |
| OPTIONS | HTTP 请求 OPTIONS |
| GET     | HTTP 请求 GET     |
| HEAD    | HTTP 请求 HEAD    |
| POST    | HTTP 请求 POST    |
| PUT     | HTTP 请求 PUT     |
| DELETE  | HTTP 请求 DELETE  |
| TRACE   | HTTP 请求 TRACE   |
| CONNECT | HTTP 请求 CONNECT |

object.dataType 的合法值

| 值   | 说明                                                       |
| ---- | ---------------------------------------------------------- |
| json | 返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse |
| 其他 | 不对返回的内容进行 JSON.parse                              |

object.responseType 的合法值

| 值          | 说明                     |
| ----------- | ------------------------ |
| text        | 响应的数据为文本         |
| arraybuffer | 响应的数据为 ArrayBuffer |

object.success 回调函数

参数

Object res

| 属性       | 类型                      | 说明                                    | 最低版本 |
| ---------- | ------------------------- | --------------------------------------- | -------- |
| data       | string/Object/Arraybuffer | 开发者服务器返回的数据                  |          |
| statusCode | number                    | 开发者服务器返回的 HTTP 状态码          |          |
| header     | Object                    | 开发者服务器返回的 HTTP Response Header | 1.2.0    |

### request 返回值

RequestTask

请求任务对象

### data 参数说明

最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下:

- 对于 GET 方法的数据，会将数据转换成 query string(encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...)
- 对于 POST 方法且 `header['content-type']` 为 application/json 的数据，会对数据进行 JSON 序列化
- 对于 POST 方法且 `header['content-type']` 为 application/x-www-form-urlencoded 的数据，会将数据转换成 query string (encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...)

示例代码

```js
wx.request({
  url: "test.php", //仅为示例，并非真实的接口地址
  data: {
    x: "",
    y: "",
  },
  header: {
    "content-type": "application/json", // 默认值
  },
  success: (res) => {
    console.log(res.data);
  },
});
```

## wx.downloadFile(Object object)

下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径，单次下载允许的最大文件为 50MB。使用前请注意阅读相关说明。

::: tip

请在服务端响应的 header 中指定合理的 Content-Type 字段，以保证客户端正确处理文件类型。

:::

### downloadFile 参数

Object object

| 属性     | 类型     | 必填 | 说明                                           | 最低版本 |
| -------- | -------- | ---- | ---------------------------------------------- | -------- |
| url      | string   | 是   | 下载资源的 url                                 |          |
| header   | Object   | 否   | HTTP 请求的 Header，Header 中不能设置 Referer  |          |
| filePath | string   | 否   | 指定文件下载后存储的路径                       | 1.8.0    |
| success  | function | 否   | 接口调用成功的回调函数                         |          |
| fail     | function | 否   | 接口调用失败的回调函数                         |          |
| complete | function | 否   | 接口调用结束的回调函数(调用成功、失败都会执行) |          |

object.success 回调函数

参数

Object res

| 属性         | 类型   | 说明                                                                                     |
| ------------ | ------ | ---------------------------------------------------------------------------------------- |
| tempFilePath | string | 临时文件路径。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件 |
| filePath     | string | 用户文件路径。传入 filePath 时会返回，跟传入的 filePath 一致                             |
| statusCode   | number | 开发者服务器返回的 HTTP 状态码                                                           |

### downloadFile 返回值

DownloadTask

一个可以监听下载进度变化事件和取消下载的对象

示例代码

```js
wx.downloadFile({
  url: "https://example.com/audio/123", //仅为示例，并非真实的资源
  success: (res) => {
    // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
    if (res.statusCode === 200)
      wx.playVoice({
        filePath: res.tempFilePath,
      });
  },
});
```

## wx.uploadFile(Object object)

将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 `multipart/form-data`。使用前请注意阅读相关说明。

### uploadFile 参数

Object object

| 属性     | 类型     | 必填 | 说明                                                                |
| -------- | -------- | ---- | ------------------------------------------------------------------- |
| url      | string   | 是   | 开发者服务器地址                                                    |
| filePath | string   | 是   | 要上传文件资源的路径                                                |
| name     | string   | 是   | 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 |
| header   | Object   | 否   | HTTP 请求 Header，Header 中不能设置 Referer                         |
| formData | Object   | 否   | HTTP 请求中其他额外的 form data                                     |
| success  | function | 否   | 接口调用成功的回调函数                                              |
| fail     | function | 否   | 接口调用失败的回调函数                                              |
| complete | function | 否   | 接口调用结束的回调函数(调用成功、失败都会执行)                      |

object.success 回调函数

参数

Object res

| 属性       | 类型   | 说明                           |
| ---------- | ------ | ------------------------------ |
| data       | string | 开发者服务器返回的数据         |
| statusCode | number | 开发者服务器返回的 HTTP 状态码 |

### uploadFile 返回值

UploadTask

一个可以监听上传进度进度变化的事件和取消上传的对象

示例代码

```js
wx.chooseImage({
  success: (res) => {
    const tempFilePaths = res.tempFilePaths;

    wx.uploadFile({
      url: "https://example.weixin.qq.com/upload", //仅为示例，非真实的接口地址
      filePath: tempFilePaths[0],
      name: "file",
      formData: { user: "test" },
      success: (res) => {
        const data = res.data;
        //do something
      },
    });
  },
});
```
