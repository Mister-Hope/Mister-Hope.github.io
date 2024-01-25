---
date: 2021-00-27
title: axios
category: Node.js
tag:
  - Node.js
---

> GitHub 地址: [https://github.com/axios/axios](https://github.com/axios/axios)

axois 是一个基于 Promise 的 HTTP 客户端，用于浏览器和 node.js

<!-- more -->

## 特点

- 从浏览器发出 XMLHttpRequests
- 从 Node.js 发出 HTTP 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- JSON 数据的自动转换
- 客户端防止 XSRF 支持

## 安装

```sh
npm install axois
```

或

```sh
yarn add axios
```

## 使用

::: info CommonJS 用法

为了在将 CommonJS 导入与 `require()` 一起使用时获得 TypeScript 类型(用于智能感知/自动完成)，请使用以下方法:

```js
const axios = require("axios").default;

// axios.<method> will now provide autocomplete and parameter typings
```

:::

进行 GET 请求:

```js
const axios = require("axios");

// Make a request for a user with a given ID
axios
  .get("/user?ID=12345")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios
  .get("/user", {
    params: {
      ID: 12345,
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get("/user?ID=12345");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

::: warning

`async` / `await` is part of ECMAScript 2017 and is not supported in Internet Explorer and older browsers, so use with caution.

:::

进行 POST 请求:

```js
axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

执行多个并发请求:

```js
function getUserAccount() {
  return axios.get("/user/12345");
}

function getUserPermissions() {
  return axios.get("/user/12345/permissions");
}

axios.all([getUserAccount(), getUserPermissions()]).then(
  axios.spread(function (acct, perms) {
    // Both requests are now complete
  }),
);
```

## API

可以通过将相关配置传递给 `axios` 来发出请求。

### axios(config)

```js
// Send a POST request
axios({
  method: "post",
  url: "/user/12345",
  data: {
    firstName: "Fred",
    lastName: "Flintstone",
  },
});
```

```js
// GET request for remote image
axios({
  method: "get",
  url: "http://bit.ly/2mTM3nY",
  responseType: "stream",
}).then(function (response) {
  response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
});
```

### axios(url\[, config\])

```js
// Send a GET request (default method)
axios("/user/12345");
```

### 请求别名

为了方便起见，已为所有受支持的请求方法提供了别名。

- `axios.request(config)`
- `axios.get(url[, config])`
- `axios.delete(url[, config])`
- `axios.head(url[, config])`
- `axios.options(url[, config])`
- `axios.post(url[, data[, config]])`
- `axios.put(url[, data[, config]])`
- `axios.patch(url[, data[, config]])`

::: tip

当使用别名时，`url`, `method` 和 `data` 属性不需要再配置中指定。

:::

### 并发

一些用于处理并发请求的有用函数:

- `axios.all(iterable)`

- `axios.spread(callback)`

### 创建实例

您可以使用自定义配置创建 axios 的新实例。

- `axios.create([config])`

```js
const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
```

### 实例方法

可用的实例方法在下面列出。指定的配置将与实例配置合并。

- `axios#request(config)`
- `axios#get(url[, config])`
- `axios#delete(url[, config])`
- `axios#head(url[, config])`
- `axios#options(url[, config])`
- `axios#post(url[, data[, config]])`
- `axios#put(url[, data[, config]])`
- `axios#patch(url[, data[, config]])`
- `axios#getUri([config])`

## 请求配置

These are the available config options for making requests. Only the `url` is required. Requests will default to `GET` if `method` is not specified.

这些是发出请求的可用配置选项。只有 `url` 是必填的。如果未指定 `method`，则请求将默认为 `GET`。

```js
{
  // `url` is the server URL that will be used for the request
  url: '/user',
  // `method` is the request method to be used when making the request
  method: 'get', // default
  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'https://some-domain.com/api/',
  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData or Stream
  // You may modify the headers object.
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data
    return data;
  }],
  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [function (data) {
    // Do whatever you want to transform the data
    return data;
  }],
  // `headers` are custom headers to be sent
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  params: {
    ID: 12345
  },
  // `paramsSerializer` is an optional function in charge of serializing `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },
  // `data` is the data to be sent as the request body
  // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // When no `transformRequest` is set, must be of one of the following types:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream, Buffer
  data: {
    firstName: 'Fred'
  },

  // syntax alternative to send data into the body
  // method post
  // only the value is sent, not the key
  data: 'Country=Brasil&City=Belo Horizonte',
  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000, // default is `0` (no timeout)
  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default
  // `adapter` allows custom handling of requests which makes testing easier.
  // Return a promise and supply a valid response (see lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },
  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  // Please note that only HTTP Basic auth is configurable through this parameter.
  // For Bearer tokens and such, use `Authorization` custom headers instead.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },
  // `responseType` indicates the type of data that the server will respond with
  // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
  //   browser only: 'blob'
  responseType: 'json', // default
  // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default
  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // default
  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default
  // `onUploadProgress` allows handling of progress events for uploads
  // browser only
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },
  // `onDownloadProgress` allows handling of progress events for downloads
  // browser only
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },
  // `maxContentLength` defines the max size of the http response content in bytes allowed
  maxContentLength: 2000,
  // `maxBodyLength` (Node only option) defines the max size of the http request content in bytes allowed
  maxBodyLength: 2000,
  // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },
  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 5, // default
  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  socketPath: null, // default
  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
  // `proxy` defines the hostname and port of the proxy server.
  // You can also define your proxy using the conventional `http_proxy` and
  // `https_proxy` environment variables. If you are using environment variables
  // for your proxy configuration, you can also define a `no_proxy` environment
  // variable as a comma-separated list of domains that should not be proxied.
  // Use `false` to disable proxies, ignoring environment variables.
  // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
  // supplies credentials.
  // This will set an `Proxy-Authorization` header, overwriting any existing
  // `Proxy-Authorization` custom headers you have set using `headers`.
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },
  // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (see Cancellation section below for details)
  cancelToken: new CancelToken(function (cancel) {
  }),
  // `decompress` indicates whether or not the response body should be decompressed
  // automatically. If set to `true` will also remove the 'content-encoding' header
  // from the responses objects of all decompressed responses
  // - Node only (XHR cannot turn off decompression)
  decompress: true // default
}
```

## 相应模式

请求的响应包含以下信息。

```js
{
  // `data` is the response that was provided by the server
  data: {},
  // `status` is the HTTP status code from the server response
  status: 200,
  // `statusText` is the HTTP status message from the server response
  statusText: 'OK',
  // `headers` the HTTP headers that the server responded with
  // All header names are lower cased and can be accessed using the bracket notation.
  // Example: `response.headers['content-type']`
  headers: {},
  // `config` is the config that was provided to `axios` for the request
  config: {},
  // `request` is the request that generated this response
  // It is the last ClientRequest instance in Node.js (in redirects)
  // and an XMLHttpRequest instance in the browser
  request: {}
}
```

使用 `then` 时，您将收到如下响应:

```js
axios.get("/user/12345").then(function (response) {
  console.log(response.data);
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers);
  console.log(response.config);
});
```

当使用 `catch` 或传递 [拒绝回调](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 作为 `then` 的第二个参数时， 如 [处理错误](#处理错误)部分中所述，响应将通过 `error` 对象提供。

## 配置默认值

您可以指定将应用于每个请求的配置默认值。

### 全局 axios 默认值

```js
axios.defaults.baseURL = "https://api.example.com";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
```

### 自定义实例默认值

```js
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "https://api.example.com",
});
// Alter defaults after instance has been created
instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
```

### 配置优先顺序

Config 将以优先顺序合并。顺序是在 [lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults.js#L28) 中找到的库默认值，然后是实例的 `defaults` 属性，以及 最后是请求的 `config` 参数。后者将优先于前者。这是一个例子。

```js
// Create an instance using the config defaults provided by the library
// At this point the timeout config value is `0` as is the default for the library
const instance = axios.create();
// Override timeout default for the library
// Now all requests using this instance will wait 2.5 seconds before timing out
instance.defaults.timeout = 2500;
// Override timeout for this request as it's known to take a long time
instance.get("/longRequest", {
  timeout: 5000,
});
```

## 拦截器

您可以先拦截请求或响应，然后再由 `then` 或 `catch` 处理。

```js
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
```

您可以在以后需要时删除拦截器。

```js
const myInterceptor = axios.interceptors.request.use(function () {
  /*...*/
});
axios.interceptors.request.eject(myInterceptor);
```

您可以将拦截器添加到 axios 的自定义实例中。

```js
const instance = axios.create();
instance.interceptors.request.use(function () {
  /*...*/
});
```

## 处理错误

```js
axios.get("/user/12345").catch(function (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error", error.message);
  }
  console.log(error.config);
});
```

使用 `validateStatus` 配置选项，您可以定义应该抛出错误的 HTTP 代码。

```js
axios.get("/user/12345", {
  validateStatus: function (status) {
    return status < 500; // Resolve only if the status code is less than 500
  },
});
```

使用 `toJSON`，您将获得一个对象，其中包含有关 HTTP 错误的更多信息。

```js
axios.get("/user/12345").catch(function (error) {
  console.log(error.toJSON());
});
```

## 取消

您可以使用*取消令牌*取消请求。

> axios 取消令牌 API 是基于撤消的 [可取消承诺提案](https://github.com/tc39/proposal-cancelable-promises).

您可以使用 `CancelToken.source` 工厂函数创建一个取消令牌，如下所示:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
axios
  .get("/user/12345", {
    cancelToken: source.token,
  })
  .catch(function (thrown) {
    if (axios.isCancel(thrown)) {
      console.log("Request canceled", thrown.message);
    } else {
      // handle error
    }
  });
axios.post(
  "/user/12345",
  {
    name: "new name",
  },
  {
    cancelToken: source.token,
  },
);
// cancel the request (the message parameter is optional)
source.cancel("Operation canceled by the user.");
```

您还可以通过将执行程序函数传递给 `CancelToken` 构造函数来创建取消令牌:

```js
const CancelToken = axios.CancelToken;
let cancel;
axios.get("/user/12345", {
  cancelToken: new CancelToken(function executor(c) {
    // An executor function receives a cancel function as a parameter
    cancel = c;
  }),
});
// cancel the request
cancel();
```

::: tip

您可以使用相同的取消令牌取消多个请求。

:::

## Using application/x-www-form-urlencoded format

默认情况下，axios 将 JavaScript 对象序列化为 `JSON`。要改为以 `application/x-www-form-urlencoded` 格式发送数据，可以使用以下选项之一。

### 浏览器

在浏览器中，您可以按以下方式使用 [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) API:

```js
const params = new URLSearchParams();
params.append("param1", "value1");
params.append("param2", "value2");
axios.post("/foo", params);
```

### Node.js

#### Query string

在 Node.js 中，您可以按照如下方式使用 [`querystring`](https://nodejs.org/api/querystring.html) 模块:

```js
const querystring = require("querystring");
axios.post("http://something.com/", querystring.stringify({ foo: "bar" }));
```

您也可以使用 [`qs`](https://github.com/ljharb/qs) 库.

::: warning

如果需要对嵌套对象进行字符串化处理，则最好使用 qs 库，因为 `querystring` 方法在该用例中存在已知问题(<https://github.com/nodejs/node-v0.x-archive/issues/1665>)

:::

#### 表格数据

在 Node.js 中，您可以使用 [`form-data`](https://github.com/form-data/form-data) 库，如下所示:

```js
const FormData = require("form-data");

const form = new FormData();
form.append("my_field", "my value");
form.append("my_buffer", new Buffer(10));
form.append("my_file", fs.createReadStream("/foo/bar.jpg"));
axios.post("https://example.com", form, { headers: form.getHeaders() });
```

或者，使用拦截器:

```js
axios.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```
