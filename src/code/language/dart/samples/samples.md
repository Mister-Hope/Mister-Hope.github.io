---
title: dart 语言范例
icon: discover
date: 2020-05-30
category: dart
---

该章内容并不全面，只是为喜欢通过示例学习的人们简要介绍了该语言。您可能还需要查看语言和库导览，或 [Dart 概要](cheatsheet.md)。

<!-- more -->

## Hello World

每个应用都有 `main()` 函数。要在控制台上显示文本，可以使用顶级 `print()` 函数:

```dart
void main() {
  print('Hello, World!');
}
```

## 变量

即使在类型安全的 Dart 代码中，由于类型推断，大多数变量也不需要显式类型:

```dart
var name = 'Voyager I';
var year = 1977;
var antennaDiameter = 3.7;
var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
var image = {
  'tags': ['saturn'],
  'url': '//path/to/saturn.jpg'
};
```

[阅读有关 Dart 中变量的更多信息](https://dart.dev/guides/language/language-tour#variables)，包括默认值，`final` 和 `const` 关键字以及静态类型。

## 控制语句

Dart 支持通常的控制语句:

```dart
if (year >= 2001) {
  print('21st century');
} else if (year >= 1901) {
  print('20th century');
}

for (var object in flybyObjects) {
  print(object);
}

for (int month = 1; month <= 12; month++) {
  print(month);
}

while (year < 2016) {
  year += 1;
}
```

[阅读有关 Dart 中控制流语句的更多信息](https://dart.dev/guides/language/language-tour#control-flow-statements)，包括 `break` 和 `continue`，`switch` 和 `case`，和 `assert`。

## 函数

[我们建议](https://dart.dev/guides/language/effective-dart/design#types) 指定每个函数的参数和返回值的类型:

```dart
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var result = fibonacci(20);
```

简写 `=>`(箭头)语法对于包含单个语句的函数很方便。当将匿名函数作为参数传递时，此语法特别有用:

```dart
flybyObjects.where((name) => name.contains('turn')).forEach(print);
```

除了显示匿名函数(`where()` 的参数)之外，此代码还显示您可以将函数用作参数: 顶级 `print()` 函数是 `forEach()` 的参数。

[阅读有关](https://dart.dev/guides/language/language-tour#functions) Dart 中函数的更多信息，包括可选参数，默认参数值和词法范围。

## 注释

Dart 注释通常以开头 `//`。

```dart
// This is a normal, one-line comment.

/// This is a documentation comment, used to document libraries,
/// classes, and their members. Tools like IDEs and dartdoc treat
/// doc comments specially.

/*Comments like these are also supported.*/
```

[阅读有关](https://dart.dev/guides/language/language-tour#comments) Dart 中注释的更多信息，包括文档工具的工作方式。

## 导入

要访问其他库中定义的 API，请使用 `import`。

```dart
// Importing core libraries
import 'dart:math';

// Importing libraries from external packages
import 'package:test/test.dart';

// Importing files
import 'path/to/my_other_file.dart';
```

[阅读有关](https://dart.dev/guides/language/language-tour#libraries-and-visibility) Dart 中库和可见性的更多信息，包括库前缀 `show` 和 `hide`，以及通过 `deferred` 关键字的延迟加载。

## 类

这是一个具有三个属性，两个构造函数和一个方法的类的示例。其中一个属性不能直接设置，因此是使用 `getter` 方法(而不是变量)定义的。

```dart
class Spacecraft {
  String name;
  DateTime launchDate;

  // Constructor, with syntactic sugar for assignment to members.
  Spacecraft(this.name, this.launchDate) {
    // Initialization code goes here.
  }

  // Named constructor that forwards to the default one.
  Spacecraft.unlaunched(String name) : this(name, null);

  int get launchYear =>
      launchDate?.year; // read-only non-final property

  // Method.
  void describe() {
    print('Spacecraft: $name');
    if (launchDate != null) {
      int years =
          DateTime.now().difference(launchDate).inDays ~/
              365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}
```

您可以使用这样的 `Spacecraft` 类:

```dart
var voyager = Spacecraft('Voyager I', DateTime(1977, 9, 5));
voyager.describe();

var voyager3 = Spacecraft.unlaunched('Voyager III');
voyager3.describe();
```

[阅读有关](https://dart.dev/guides/language/language-tour#classes) Dart 中类的更多信息，包括初始化列表，可选 `new` 和 `const`，重定向构造函数，`factory` 构造函数，getter，setter 等。

## 遗产

Dart 具有单一继承。

```dart
class Orbiter extends Spacecraft {
  double altitude;
  Orbiter(String name, DateTime launchDate, this.altitude)
      : super(name, launchDate);
}
```

[阅读有关](https://dart.dev/guides/language/language-tour#extending-a-class) 扩展类，可选 `@override` 注释等的更多信息。

## 混入

Mixins 是在多个类层次结构中重用代码的一种方式。以下类可以充当 mixin:

```dart
class Piloted {
  int astronauts = 1;
  void describeCrew() {
    print('Number of astronauts: $astronauts');
  }
}
```

要将 mixin 的功能添加到类中，只需使用 mixin 扩展类即可。

```dart
class PilotedCraft extends Spacecraft with Piloted {
  // ···
}
```

`PilotedCraft` 现在具有 `astronauts` 字段和 `describeCrew()` 方法。

[阅读有关](https://dart.dev/guides/language/language-tour#adding-features-to-a-class-mixins) mixin 的更多信息。

## 接口和抽象类

Dart 没有 `interface` 关键字。相反，所有类都隐式定义一个接口。因此，您可以实现任何类。

```dart
class MockSpaceship implements Spacecraft {
  // ···
}
```

[阅读有关](https://dart.dev/guides/language/language-tour#implicit-interfaces) 隐式接口的更多信息。

您可以创建要由具体类扩展(或实现)的抽象类。抽象类可以包含抽象方法(具有空主体)。

```dart
abstract class Describable {
  void describe();

  void describeWithEmphasis() {
    print('=========');
    describe();
    print('=========');
  }
}
```

任何扩展类 `Describable` 都具有 `describeWithEmphasis()` 方法，该方法调用扩展程序的实现 `describe()`。

[阅读有关](https://dart.dev/guides/language/language-tour#abstract-classes) 抽象类和方法的更多信息。

## 异步

避免陷入回调地狱，您可以使用 `async` 和 `await` 来提高代码的可读性。

```dart
const oneSecond = Duration(seconds: 1);
// ···
Future<void> printWithDelay(String message) async {
  await Future.delayed(oneSecond);
  print(message);
}
```

上面的方法等效于:

```dart
Future<void> printWithDelay(String message) {
  return Future.delayed(oneSecond).then((_) {
    print(message);
  });
}
```

如下例所示，`async` 和 `await` 有助于使异步代码易于阅读。

```dart
Future<void> createDescriptions(Iterable<String> objects) async {
  for (var object in objects) {
    try {
      var file = File('$object.txt');
      if (await file.exists()) {
        var modified = await file.lastModified();
        print(
            'File for $object already exists. It was modified on $modified.');
        continue;
      }
      await file.create();
      await file.writeAsString('Start describing $object in this file.');
    } on IOException catch (e) {
      print('Cannot create description for $object: $e');
    }
  }
}
```

您还可以使用 `async*`，它为您提供了一种很好的，易于阅读的方式来构建流。

```dart
Stream<String> report(Spacecraft craft, Iterable<String> objects) async* {
  for (var object in objects) {
    await Future.delayed(oneSecond);
    yield '${craft.name} flies by $object';
  }
}
```

[阅读更多](https://dart.dev/guides/language/language-tour#asynchrony-support) 关于异步支持，包括 `async` 功能 `Future`，`Stream` 和异步循环(await for)。

## 异常

要引发异常，请使用 `throw`:

```dart
if (astronauts == 0) {
  throw StateError('No astronauts.');
}
```

要捕获异常，请使用 `try` 带有 `on` 或 `catch`(或两者)的语句:

```dart
try {
  for (var object in flybyObjects) {
    var description = await File('$object.txt').readAsString();
    print(description);
  }
} on IOException catch (e) {
  print('Could not describe object: $e');
} finally {
  flybyObjects.clear();
}
```

注意上面的代码是异步的； `try` 适用于同步代码和 `async` 函数中的代码。

阅读有关异常的更多信息，包括堆栈跟踪 `rethrow`，和错误与异常之间的区别。

## 其他话题

更多的代码示例在 [语言示例](https://dart.dev/guides/language/language-tour) 和 [库示例](https://dart.dev/guides/libraries/library-tour) 中。另请参阅 [Dart API 参考](https://api.dart.dev/)， 其中通常包含示例。
