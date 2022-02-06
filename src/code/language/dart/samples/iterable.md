---
title: 可迭代的集合
icon: refresh
date: 2020-05-30
category: dart
---

本节教您如何使用实现 [Iterable](https://api.dart.dev/stable/dart-core/Iterable-class.html) 类的集合 - 例如 [List](https://api.dart.dev/stable/dart-core/List-class.html) 和 [Set](https://api.dart.dev/stable/dart-core/Set-class.html)。可迭代对象是各种 Dart 应用程序的基本构建块，即使您没有注意到，您可能已经在使用它们。

本节包含以下内容:

- 如何读取 Iterable 的元素。
- 如何检查 Iterable 的元素是否满足条件。
- 如何过滤 Iterable 的内容。
- 如何将 Iterable 的内容映射到其他值。

<!-- more -->

## 什么是集合

集合是代表一组对象(称为元素)的对象。可迭代对象是一种集合。

集合可以为空，也可以包含许多元素。根据目的，集合可以具有不同的结构和实现。这些是一些最常见的集合类型:

- [List](https://api.dart.dev/stable/dart-core/List-class.html): 用于按元素索引读取元素。
- [Set](https://api.dart.dev/stable/dart-core/Set-class.html): 用于包含只能出现一次的元素。
- [Map](https://api.dart.dev/stable/dart-core/Map-class.html): 用于使用键读取元素。

## 什么是可迭代的

一个 `Iterable` 是可以顺序访问的元素的集合。

在 Dart 中，一个 `Iterable` 是一个抽象类，这意味着您不能直接实例化它。但是，您可以 `Iterable` 通过创建新的 `List` 或来创建新的 `Set`。

`List` 和 `Set` 都是 `Iterable`，所以它们具有和 `Iterable` 类相同的方法和属性。

一个 `Map` 在其内部使用不同的数据结构，这取决于它的实现。例如，[HashMap](https://api.dart.dev/stable/dart-collection/HashMap-class.html) 使用一个哈希表，其中的元素(也称为 values)是使用键获得的。`Map` 也可以使用 `Iterable` 上的 `entries` 或 `values` 属性读取他的元素。

此示例显示 `List` 的 `int`，也为 `Iterable` 的 `int`:

```dart
Iterable<int> iterable = [1, 2, 3];
```

一个 List 的不同之处 在于，使用 `Iterable`，您不能保证按索引读取元素将是有效的。`Iterable` 相对 `List`，没有 `[]` 运算符。

例如，考虑以下代码，该代码无效:

```dart
Iterable<int> iterable = [1, 2, 3];
int value = iterable[1];
```

如果您使用 `[]` 读取元素，则编译器会告诉您 `Iterable` 类上未定义运算符 '`[]`'，这意味着您不能在这种情况下使用 `[index]`。

您可以改为使用读取元素 `elementAt()`，该元素将逐步浏览可迭代的元素，直到到达该位置为止。

```dart
Iterable<int> iterable = [1, 2, 3];
int value = iterable.elementAt(1);
```

## 读取元素

您可以使用 `for-in` 循环依次读取可迭代的元素。

```dart
void main() {
  var iterable = ['Salad', 'Popcorn', 'Toast'];
  for (var element in iterable) {
    print(element);
  }
}
```

::: tip

在后台，`for-in` 循环使用迭代器。但是，您很少看到直接使用 `Iterator` API 的情况，因为 `for-in` 它更易于阅读和理解，并且不易出错。

:::

::: tip 关键词

- Iterable: Dart Iterable 类。
- Iterator: 用于使用 for-in 从 Iterable 对象读取元素的对象。
- `for-in` 循环: 一种简单的按顺序读取 `Iterable` 元素的方法。

:::

### 使用 `fist` 和 `last`

在某些情况下，您只想访问 `Iterable` 的第一个或最后一个元素。

使用 `Iterable` 类，您无法直接访问元素，因此无法调用 `iterable[0]` 来访问第一个元素。相反，您可以使用 `first` 获取第一个元素的。

同样，对于 Iterable 类，您不能使用运算符 `[]` 来访问最后一个元素，但是可以使用该 `last` 属性。

```dart
void main() {
  var iterable = ['Salad', 'Popcorn', 'Toast'];
  print('The first element is ${iterable.first}');
  print('The last element is ${iterable.last}');
}
```

::: warning

因为访问 `Iterable` 的最后一个元素需要逐步浏览所有其他元素， 所以 `last` 可能很慢。使用 `first` 或 `last` 在一个空 `Iterable` 会产生 `StateError`。

:::

### 使用 `firstWhere()`

您已经看到您可以按顺序访问 `Iterable` 元素，并且可以轻松获取第一个或最后一个元素。

现在，您将学习如何使用 `firstWhere()` 来找到满足某些条件的第一个元素。此方法要求您传递一个谓词(predicate)，该谓词是一个在输入满足特定条件时返回 true 的函数。

```dart
String element = iterable.firstWhere((element) => element.length > 5);
```

例如，如果要查找第一个字符数超过 5 个的 String，则必须传递一个在元素大小大于 5 时返回 true 的谓词。

```dart
bool predicate(String element) {
  return element.length > 5;
}

main() {
  var items = ['Salad', 'Popcorn', 'Toast', 'Lasagne'];

  // You can find with a simple expression:
  var element1 = items.firstWhere((element) => element.length > 5);
  print(element1);

  // Or try using a function block:
  var element2 = items.firstWhere((element) {
    return element.length > 5;
  });
  print(element2);

  // Or even pass in a function reference:
  var element3 = items.firstWhere(predicate);
  print(element3);

  // You can also use an `orElse` function in case no value is found!
  var element4 = items.firstWhere(
    (element) => element.length > 10,
    orElse: () => 'None!',
  );
  print(element4);
}
```

在此示例中，您可以看到三种不同的方式来编写谓词:

- 作为表达式: 测试代码的一行使用箭头语法(`=>`)。
- 作为一个块: 测试代码在方括号和 `return` 语句之间有多行。
- 作为函数: 测试代码位于 `firstWhere()` 作为参数传递给方法的外部函数中。

没有正确或错误的方法。使用最适合您的方式，使您的代码更易于阅读和理解。

在示例中，`firstWhereWithOrElse()` 使用可选的 named 参数 `orElse` 调用了 `firstWhere()`。当找不到元素时，该参数提供了替代方法。在这种情况下，由于没有元素满足提供的条件，因此返回了文本 `'None!'`。

::: warning

如果没有元素满足测试谓词，并且 `orElse` 未提供参数，则 `firstWhere()` 抛出 `StateError`。

:::

::: tip 快速回顾

- Iterable 中的元素必须被依次访问。
- 遍历所有元素的最简单方法是使用 `for-in` 循环。
- 您可以使用 `first` 和 `last` getter 获取第一个和最后一个元素。
- 您还可以通过找到第一个满足条件的元素 `firstWhere()`。
- 您可以将测试谓词编写为表达式，块或函数。

关键词:

- 谓词(Predicate): 满足特定条件时返回 true 的函数。

:::

### singleWhere

`singleWhere()` 工作方式与 `firstWhere()` 相似，但是在这种情况下，它只期望 Iterable 的一个元素满足谓词。如果 Iterable 满足谓词条件的元素超过一个或全部不满足，则该方法将引发 `StateError` 异常。

::: warning

`singleWhere()` 依次执行直到 Iterable 的最后一个元素，如果 Iterable 数量为无限或包含大量元素，可能会导致问题。

:::

## 条件检查

使用 Iterable 时，有时您需要验证集合的所有元素都满足某些条件。

您可能很想使用这样的 `for-in` 循环来编写解决方案:

```dart
for (var item in items) {
  if (item.length < 5) {
    return false;
  }
}
return true;
```

但是，您可以使用 `every()` 方法完成相同操作:

```dart
return items.every((element) => element.length >= 5);
```

使用 `every()` 方法可以使代码更易读，更紧凑且更不易出错。

### 使用 any() 和 every()

Iterable 类提供了两个方法，您可以用它来验证条件:

- any(): 如果至少一个元素满足条件，则返回 true。
- every(): 如果所有元素都满足条件，则返回 true。

```dart
void main() {
  var items = ['Salad', 'Popcorn', 'Toast'];

  if (items.any((element) => element.contains('a'))) {
    print('At least one element contains "a"');
  }

  if (items.every((element) => element.length >= 5)) {
    print('All elements have length >= 5');
  }
}
```

在示例中，`any()` 验证至少一个元素包含字符 `a`，`every()` 验证所有元素的长度等于或大于 5。

运行代码后，尝试更改 `any()` 的谓词，使其返回 false:

```dart
if (items.any((element) => element.contains('Z'))) {
  print('At least one element contains "Z"');
} else {
  print('No element contains "Z"');
}
```

您还可以 `any()` 用来验证 Iterable 中没有任何元素满足特定条件。

::: tip 快速回顾

- 尽管可以使用 `for-in` 循环来检查条件，但是有更好的方法可以执行此操作。
- any() 允许您检查是否有任何元素满足条件。
- every() 允许您检查所有元素均满足条件。

:::

## 筛选

前面的部分介绍了 `firstWhere()` 与 `singleWhere()` 这些可以帮助您找到满足特定谓词的元素的方法。

但是，如果要查找满足特定条件的所有元素怎么办? 您可以使用 `where()` 方法来完成。

```dart
var evenNumbers = numbers.where((number) => number.isEven);
```

在此示例中， numbers 是包含多个 int 值的 Iterable，`where()` 会查找所有偶数。

`where()` 的输出是另一个 Iterable，您可以使用它来对其进行迭代或应用其他 Iterable 方法。在下一个示例中，where() 的输出直接在 `for-in` 循环内部使用。

```dart
var evenNumbers = numbers.where((number) => number.isEven);
for (var number in evenNumbers) {
  print('$number is even');
}
```

### 使用 where()

此示例真是如何将 `where()` 与其他方法(例如 `any()`)一起使用。

在此示例中，`where()` 用于查找所有偶数，然后 `any()` 用于检查结果是否包含负数。

在示例的后面，`where()` 再次用于查找所有大于 1000 的数字。由于没有数字，结果为空 Iterable。

::: tip

如果没有元素满足 `where()` 中的谓词 ，则该方法返回 null Iterable。不同于 `singleWhere()` 或 `firstWhere()`， `where()` 不会引发 StateError 异常。

:::

### 使用 takeWhile

方法 `takeWhile()` 和 `skipWhile()` 还可以帮助您从 Iterable 中过滤元素。

这个例子展示了 `takeWhile()` 和 `skipWhile()` 是如何拆分包含数字的 Iterable。

```dart
main() {
  var numbers = [1, 3, -2, 0, 4, 5];

  var numbersUntilZero = numbers.takeWhile((number) => number != 0);
  print('Numbers until 0: $numbersUntilZero');

  var numbersAfterZero = numbers.skipWhile((number) => number != 0);
  print('Numbers after 0: $numbersAfterZero');
}
```

在此示例中，`takeWhile()` 返回一个 Iterable，其中包含所有导致满足谓词的元素的元素。另一方面，`skipWhile()` 返回一个移除了满足谓词的元素及它之前的所有元素的 Iterable。注意，包括满足谓词的元素。

::: tip 快速回顾

- 使用 `where()` 过滤 Iterable 的元素。
- `where()` 的输出是另一个 Iterable。
- 使用 `takeWhile()` 和 `skipWhile()` 获取元素，直到满足条件为止。
- 这些方法的输出可以为空 Iterable。

:::

## 映射

Iterables 使用 `map()` 方法进行映射。您可以在每个元素上应用功能，并用新元素替换每个元素。

```dart
Iterable<int> output = numbers.map((number) => number * 10);
```

在此示例中，Iterable 数字的每个元素都乘以 10。

您还可以使用 `map()` 将元素转换为其他对象，例如，将 int 全部转换为 String，如下面的示例所示。

```dart
Iterable<String> output = numbers.map((number) => number.toString());
```

::: tip

`map()` 返回一个惰性的 Iterable，这意味着仅在迭代元素时才调用提供的函数。

:::

::: tip 快速回顾

- `map()` 将对应函数应用于 Iterable 的所有元素。
- `map()` 的输出是另一个 Iterable。
- 在 Iterable 迭代之前，不会调用该函数。

:::
