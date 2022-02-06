---
title: 实战
icon: exercise
date: 2019-09-18
category: JavaScript
tag:
  - 快速上手
---

在初步进入 JavaScript 的世界后，实战是十分重要的。本章是一些经典的案例，可以进行总结与测试。

<!-- more -->

## 成年判断

请给出一个函数 `isAdult`。该函数接受一个数字参数，值为年龄，返回一个布尔值，为对应年龄是否成年。

```js
isAdult(6); // false
isAdult(18); // true
isAdult(50); // true
```

答案解析[^成年判断]。

[^成年判断]: 答案

    这道题的逻辑是: 如果 `age >=18` 返回 `true`，反之返回 `false`。

    逻辑图如下:

    ```flow
    st=>start: 开始执行函数
    getage=>inputoutput: 获得 age
    adult=>condition: age > 18?
    true=>inputoutput: return true
    false=>inputoutput: return false
    end=>end: 结束

    st->getage->adult
    adult(yes)->true->end
    adult(no)->false->end

    ```

    最简单的想法肯定是使用 if 条件判断，把上面的流程图写下来:

    ```js
    const isAdult = function (age) {
      if (age >= 18) return true;
      else return false;
    };
    ```

    果然，它正常工作了:grin:。开心的您准备去交差。

    突然，您想起了文档上有这么一句话:flushed::


    :::center

    JavaScript 引擎遇到 `return` 语句，就直接返回 `return` 后面的那个表达式的值，

    后面即使还有语句，也不会得到执行。

    :::

    :::right

    [文档地址](../function/declare.md#return)

    :::

    于是乎，您去掉了 `else`:open_mouth:

    ```js
    const isAdult = function (age) {
      if (age >= 18) return true;

      return false;
    };
    ```

    接着，懒惰的您想起了箭头函数

    ```js
    const functionName = (arg1, arg2, ...) => value;
    ```


    :::right

    的写法。决定投个懒:smirk:

    :::

    ```js
    const isAdult = (age) => {
      if (age >= 18) return true;

      return false;
    };
    ```

    成了! 现在函数更简洁了，但是这还不够。

    您又想起了条件表达式就是布尔值， 也就是说 `age >= 18` 本身就是一个布尔值。:wink:

    现在当它是 `true` 就 `return true`，是 `false` 就 `return false` 看起来就变成了一个愚蠢的主意:expressionless:，于是乎您又改写了一下:

    ```js
    const isAdult = (age) => {
      return age >= 18;
    };
    ```

    这不就变成了只有一条语句的箭头函数了么? 我们当然可以直接返回它!:laughing:

    ```js
    const isAdult = (age) => age >= 18;
    ```

    最后，是时候去掉那个愚蠢的括号了!

    ```js
    const isAdult = age => age >= 18;
    ```

    恭喜您，您已经得到了最简形式! :satisfied:

## 买书

请给出一个函数 `bookPrice`。该函数接受两个数字参数，第一个是书的价格，第二个是书的单价。作为一个精明的老板，您决定:

- 买 10 本以下，不打折
- 满 10 本，打九折
- 满 20 本，打八折
- ~~不给钱就打骨折:unamused:~~

该函数返回您要让他付的钱。

```js
bookPrice(20，5); // 100
bookPrice(12，12); // 129.6
bookPrice(6，30); // 144
```

答案解析[^买书]。

[^买书]: 答案

    判断顾客买书的个数。

    如果 `ammount < 10` 不打折，`10 <= ammount < 20` 打九折，`ammount > 20` 打八折

    同时 $\text{顾客最终付款} = \text{书的个数} × \text{书的价格} × \text{打折力度}$

    很简单，只是需要用多次 if 判断，我们把它逻辑图描述如下:

    ```flow
    st=>start: 开始执行函数
    percent=>operation: 声明打折力度 percent
    result=>operation: 声明最终价格 result
    get=>inputoutput: 获得 price, ammount
    func1=>condition: ammount < 10?
    p1=>operation: percent = 1
    func2=>condition: 10 <= ammount < 20?
    p0.9=>operation: percent = 0.9
    func3=>condition: ammount > 20?
    p0.8=>operation: percent = 0.8
    cal=>operation: result = price × ammount × percent
    return=>inputoutput: 返回 result
    end=>end: 结束

    st->percent->get->func1
    func1(yes,right)->p1->cal
    func1(no)->func2
    func2(yes,right)->p0.9->cal
    func2(no)->func3
    func3(yes,right)->p0.8->cal
    cal->return->end
    ```

    照着写，您得到了:

    ```js
    const bookPrice = (price, ammount) => {
      let percent;
      let result;

      if (ammount < 10) percent = 1;
      else if (10 <= ammount && ammount <= 20) percent = 0.9;
      else if (ammount >= 20) percent = 0.8;

      result = price * ammount * percent;

      return result;
    };
    ```

    与此同时，您发现您的 if 逻辑判断有重复，当第 6 行执行的时候， `ammount` 已经不可能小于 10 了，否则它会执行第 5 行。最后一个判断也是没有必要的

    您还发现，如果直接返回 `price * ammount * percent` 就无需声明 `result`。

    您想了想，重新画了流程图:

    ```flow
    st=>start: 开始执行函数
    percent=>operation: 声明打折力度 percent
    get=>inputoutput: 获得 price, ammount
    func1=>condition: ammount < 10?
    p1=>operation: percent = 1
    func2=>condition: ammount < 20?
    p0.9=>operation: percent = 0.9
    p0.8=>operation: percent = 0.8
    return=>inputoutput: 返回 price × ammount × percent
    end=>end: 结束

    st->percent->get->func1
    func1(yes,right)->p1->return
    func1(no)->func2
    func2(yes,right)->p0.9->return
    func2(no)->p0.8->return
    return->end
    ```

    对应的函数为:

    ```js
    const bookPrice = (price, ammount) => {
      let percent;

      if (ammount < 10) percent = 1;
      else if (ammount <= 20) percent = 0.9;
      else percent = 0.8;

      return price * ammount * percent;
    };
    ```

    接着您突发奇想，突然不想声明 `percent` 了，您又改了流程图:

    ```flow
    st=>start: 开始执行函数
    get=>inputoutput: 获得 price, ammount
    func1=>condition: ammount < 10?
    func2=>condition: ammount < 20?
    return1=>inputoutput: price × ammount × 1
    return2=>inputoutput: price × ammount × 0.9
    return3=>inputoutput: price × ammount × 0.8
    end=>end: 结束

    st->get->func1
    func1(yes,right)->return1->end
    func1(no)->func2
    func2(yes,right)->return2->end
    func2(no)->return3->end
    ```

    您得到了:

    ```js
    const bookPrice = (price, ammount) => {
      if (ammount < 10) return price * ammount;
      else if (ammount <= 20) return price * ammount * 0.9;

      return price * ammount * 0.8;
    };
    ```

    您突然响起了 Mr.Hope 说过的单行代码挑战，结合[三元运算符](./condition.md#三元运算符)，您又一次压缩了代码:

    ```js
    const bookPrice = (price, ammount) =>
      ammount < 10
        ? price * ammount
        : ammount <= 20
        ? price * ammount * 0.9
        : price * ammount * 0.8;
    ```

    结合运算符顺序，您去掉了没用的括号，并将它写在一行:

    ```js
    const bookPrice = (price, ammount) =>
      ammount < 10
        ? price * ammount
        : ammount <= 20
        ? price * ammount * 0.9
        : price * ammount * 0.8;
    ```

    它太长了，为什么不把公共的 `price * ammount` 提取出来呢?

    ```js
    const bookPrice = (price, ammount) =>
      price * ammount * (ammount < 10 ? 1 : ammount <= 20 ? 0.9 : 0.8);
    ```

    我们也可以用更简洁的参数把它变得更短:

    ```js
    const bookPrice = (p, a) => p * a * (a < 10 ? 1 : a <= 20 ? 0.9 : 0.8);
    ```

## 数组中特定元素出现次数

请给出一个函数 `getTimes`。该函数有两个参数，第一个参数是一个未知长度的装满数字的数组，第二个参数是一个数字。函数返回这个数字在数组中出现的次数。

```js
getTimes([1, 1, 2, 3, 4, 4, 4], 1); // 2
getTimes([1, 1, 2, 3, 4, 4, 4], 5); // 0
getTimes([1, 1, 2, 3, 4, 4, 4], 4); // 3
```

答案解析[^数组中特定元素出现次数答案]。

[^数组中特定元素出现次数答案]: 答案

    我们最简单的想法就是将想要统计 element 与数组的每一个 x 进行比较，如果匹配默默的记一个数，当全部比较完成后返回这个数。

    用流程图就是:

    ```flow
    st=>start: 开始执行函数
    get=>inputoutput: 获得 arr, element
    letcount=>operation: 声明出现次数 count = 0
    getfirst=>operation: 循环数组，得到第一个元素 x
    equal=>condition: element === x?
    addcount=>operation: count = count + 1
    equal=>condition: element === x?
    islast=>condition: x 是数组的最后一个元素么?
    movex=>operation: 让 x 成为下一个元素
    return=>inputoutput: 返回 count
    end=>end: 结束

    st->get->letcount->getfirst->equal
    equal(yes)->addcount->islast
    equal(no)->islast
    islast(yes)->return->end
    islast(no)->movex(top)->equal
    ```

    接下来，我们就要细化了。我们希望循环数组，从第一个元素 `arr[0]` 到 最后一个元素。

    回忆一下，如果数组有 $x$ 个元素，那么数组的索引值是 $0$ 到 $x - 1$。所以最后一个元素是 `arr[arr.length - 1]`。

    我们只需要创建一个变量 i，让它从 0 循环到 `arr.length - 1` 即可，这样我们就可以在每次循环中通过访问 `arr[i]` 来依次访问数组的每一个元素了。

    所以新的流程图是:

    ```flow
    st=>start: 开始执行函数
    get=>inputoutput: 获得 arr, element
    letcount=>operation: 声明出现次数 count = 0
    leti=>operation: 声明循环变量 i = 0
    equal=>condition: element === arr[i]?
    addcount=>operation: count = count + 1
    equal=>condition: element === x?
    islast=>condition: i <= arr.length - 1?
    movex=>operation: i = i + 1
    return=>inputoutput: 返回 count
    end=>end: 结束

    st->get->letcount->leti->equal
    equal(yes,left)->addcount->islast
    equal(no)->islast
    islast(yes)->return->end
    islast(no)->movex(top)->equal
    ```

    ```js
    const getTimes = (arr, element) => {
      let count = 0;
      let i = 0;

      while (i <= arr.length - 1) {
        if (element === arr[i]) count = count + 1;
        i = i + 1;
      }

      return count;
    };
    ```

    您想起了自加自减运算符，同时您发现由于 i 是整数，`i <= arr.length - 1` 和 `i < arr.length` 等价，于是您做了一些改动:

    ```js
    const getTimes = (arr, element) => {
      let count = 0;
      let i = 0;

      while (i < arr.length) {
        if (element === arr[i]) count += 1;
        i += 1;
      }

      return count;
    };
    ```

    经验告诉您，用 for 循环体将循环变量的处理写在一起更好一些:

    ```js
    const getTimes = (arr, element) => {
      let count = 0;

      for (let i = 0; i <= arr.length; i++) if (element === arr[i]) count++;

      return count;
    };
    ```

    单行挑战:

    ```js
    const getTimes = (a, e, c = 0) =>
      a.length === 0 ? c : getTimes(a, e, c + Number(a.pop() === e));
    ```

    ```js
    const getTimes = (a, e, c = 0) =>
      a.length === 0 ? c : getTimes(a, e, c + (a.pop() === e ? 1 : 0));
    ```

    思路:

    ```flow
    start=>start: 开始执行函数
    get=>inputoutput: 获得 arr, element, count(默认为 0)
    equal=>condition: 数组长度是 0?
    return=>inputoutput: 返回 count
    operate=>operation: 传入第一个参数为 arr
    传入第二个参数为 element
    传入第三个参数为 count + Number(a.pop() === e))
    (这还会同时把 arr 的最后一个元素删掉)
    returnfunc=>subroutine: 将新的参数传入本函数并返回这个函数
    end=>end: 结束

    start->get->equal
    equal(yes)->return->end
    equal(no)->operate->returnfunc(left)
    ```

    或

    ```js
    const getTimes = (a, e, c = 0, p = 0) =>
      p === a.length ? c : getTimes(a, e, c + (a[p] === e ? 1 : 0), p + 1);
    ```

    ```js
    const getTimes = (a, e, c = 0, p = 0) =>
      p === a.length ? c : getTimes(a, e, c + Number(a[p] === e), p + 1);
    ```

    思路:

    ```flow
    start=>start: 开始执行函数
    get=>inputoutput: 获得 arr, element, count(默认为 0),position(默认为 0)
    equal=>condition: position === arr.length?
    return=>inputoutput: 返回 count
    operate=>operation: 传入第一个参数为 arr
    传入第二个参数为 element
    传入第三个参数为 count + (a[p] === e ? 1 : 0)
    传入第四个参数为 position + 1
    returnfunc=>subroutine: 将新的参数传入本函数并返回这个函数
    end=>end: 结束

    start->get->equal
    equal(yes)->return->end
    equal(no)->operate->returnfunc(left)
    ```

## 小九九

请给出一个函数 `nineNine`。该函数通过遍历返回一个小九九，该小九九不重复。

> 即一一得一，一二得二，二二得四，一三得三，二三得六...

```js
nineNine(); // ['1 × 1 = 1', '1 × 2 = 2','2 × 2 = 4','1 × 3 = 3', ...,'9 × 9 = 81']
```

答案解析[^小九九]。

[^小九九]: 答案

    思路:

    这个函数显然要用两层循环，设置第一个变量从 $1$ 到 $9$ 循环，在这个循环之中让第二个变量从 $1$ 到 `第一个变量` 循环。然后在每次循环中向数组新增一项对应的字符串。

    流程图:

    ```flow
    start=>start: 开始执行函数
    operate=>operation: let arr = [];
    let i = 1;
    initj=>operation: let j = 1;
    push=>operation: 向数组输入小九九
    arr.push(`${i} × ${j} = ${i * j}`);
    ji=>condition: j <= i?
    plusj=>operation: j++
    i9=>condition: i <= 9?
    plusi=>operation: i++
    return=>inputoutput: 返回 arr
    end=>end: 结束

    start->operate->initj->push->ji
    ji(yes,right)->plusj(top)->push
    ji(no)->i9
    i9(yes)->plusi(left)->initj
    i9(no)->return->end
    ```

    所以很容易就可以写出:

    ```js
    const nineNine = () => {
      const arr = [];

      for (let i = 1; i <= 9; i++)
        for (let j = 1; j <= i; j++) arr.push(`${i} × ${j} = ${i * j}`);

      return arr;
    };
    ```

## 扩展

请给出一个函数 `pickNumber`。该函数返回传入字符串中的所有数字。

```js
pickNumber("zhangbowang"); // ''
pickNumber("z1han2g"); // '12'
pickNumber("1234"); // '1234'
```

答案解析[^扩展]。

[^扩展]: 答案

    这道题真的很简单，就是把[数组中特定元素出现次数](#数组中特定元素出现次数)中判断元素相等的表达式换成判断是否是数字就可以了。所以答案在此省略。
