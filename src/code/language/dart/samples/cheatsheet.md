---
title: dart 概要
icon: form
date: 2020-05-30
category: dart
---

Dart 语言旨在让其他语言的编码人员易于学习，但具有一些独特功能。

<!-- more -->

## 字符串插值

要将表达式的值放在字符串中，请使用 `${expression}`。如果表达式是标识符，则可以省略 `{}`。

以下是一些使用字符串插值的示例:

| 串                           | 结果                       |
| ---------------------------- | -------------------------- |
| `'\${3 + 2}'`                | `'5'`                      |
| `'\${"word".toUpperCase()}'` | `'WORD'`                   |
| `'$myObject'`                | `myObject.toString()` 的值 |

## 空感知运算符

Dart 提供了一些方便的运算符来处理可能为 null 的值。一种是 `??=` 赋值运算符，它仅在该变量当前为 null 时才为该变量赋值:

```dart
int a; // The initial value of a is null.
a ??= 3;
print(a); // <-- Prints 3.

a ??= 5;
print(a); // <-- Still prints 3.
```

另一个可识别空值的运算符是 `??`，只有左侧表达式的值为 null，它将求值并在其右侧返回表达式，否则它将在返回左侧表达式:

```dart
print(1 ?? 3); // <-- Prints 1.
print(null ?? 12); // <-- Prints 12.
```

## 受控的属性访问

为了保护对可能为空的对象的属性或方法的访问，请在点 `.` 之前添加问号 `?`:

```dart
myObject?.someProperty
```

上面的代码等效于以下代码:

```dart
(myObject != null) ? myObject.someProperty : null
```

您可以在单个表达式中将多个 `?.` 链接在一起:

```dart
myObject?.someProperty?.someMethod()
```

如果 `myObject` 或 `myObject.someProperty` 为 null，则代码返回 null(并且从不调用 `someMethod()`) 。

## 集合

Dart 内置了对列表，地图和集合的支持。您可以使用文字创建它们:

```dart
final aListOfStrings = ['one', 'two', 'three'];
final aSetOfStrings = {'one', 'two', 'three'};
final aMapOfStringsToInts = {
  'one': 1,
  'two': 2,
  'three': 3,
};
```

Dart 的类型推断可以为您为这些变量分配类型。在这种情况下，推断的类型 `List<String>`， `Set<String>` 和 `Map<String, int>`。

或者您可以自己指定类型:

```dart
final aListOfInts = <int>[];
final aSetOfInts = <int>{};
final aMapOfIntToDouble = <int, double>{};
```

当您想使用子类型的内容初始化列表但仍然希望列表为 `List<BaseType>` 时，指定类型很方便:

```dart
final aListOfBaseType = <BaseType>[SubType(), SubType()];
```

## 箭头语法

您可能已经在 Dart 代码中看到了该符号 `=>`。此箭头语法是一种定义函数的方法，该函数将在其右侧执行表达式并返回其值。

例如，考虑这个对 `List` 类的 `any()` 方法的调用:

```dart
bool hasEmpty = aListOfStrings.any((s) {
  return s.isEmpty;
});
```

这是编写该代码的一种更简单的方法:

```dart
bool hasEmpty = aListOfStrings.any((s) => s.isEmpty);
```

## 级联

要对同一对象执行一系列操作，请使用级联(`..`)。我们都看到过这样的表达式:

```dart
myObject.someMethod()
```

它调用 `myObject` 上的 `someMethod()` ，和表达的结果是的返回值 `someMethod()`。

这是带有级联的相同表达式:

```dart
myObject..someMethod()
```

尽管它仍然调用 `myObject` 上的 `someMethod()` ，但表达式的结果不是返回值，而是对 `myObject` 的引用。使用级联，可以将原本需要单独语句的操作链接在一起。例如，考虑以下代码:

```dart
var button = querySelector('#confirm');
button.text = 'Confirm';
button.classes.add('important');
button.onClick.listen((e) => window.alert('Confirmed!'));
```

使用层叠时，代码变得更短，并且您不需要 `button` 变量:

```dart
querySelector('#confirm')
..text = 'Confirm'
..classes.add('important')
..onClick.listen((e) => window.alert('Confirmed!'));
```

## Getter 和 Setter

只要您对一个字段进行特殊的控制要求，就可以定义 getter 和 setter。

例如，您可以确保属性的值有效:

```dart
class MyClass {
  int _aProperty = 0;

  int get aProperty => _aProperty;

  set aProperty(int value) {
    if (value >= 0) {
      _aProperty = value;
    }
  }
}
```

您还可以使用 getter 来定义计算属性:

```dart
class MyClass {
  List<int> _values = [];

  void addValue(int value) {
    _values.add(value);
  }

  // A computed property.
  int get count {
    return _values.length;
  }
}
```

## 可选的位置参数

Dart 具有两种函数参数: 基于位置的和具名的。位置参数是您可能熟悉的一种:

```dart
int sumUp(int a, int b, int c) {
  return a + b + c;
}
// ···
  int total = sumUp(1, 2, 3);
```

使用 Dart，您可以将这些位置参数包装在方括号中，以使其成为可选参数:

```dart
int sumUpToFive(int a, [int b, int c, int d, int e]) {
  int sum = a;
  if (b != null) sum += b;
  if (c != null) sum += c;
  if (d != null) sum += d;
  if (e != null) sum += e;
  return sum;
}
// ···
  int total = sumUpToFive(1, 2);
  int otherTotal = sumUpToFive(1, 2, 3, 4, 5);
```

可选的位置参数始终位于函数的参数列表的最后。除非您提供另一个默认值，否则它们的默认值为 null:

```dart
int sumUpToFive(int a, [int b = 2, int c = 3, int d = 4, int e = 5]) {
// ···
}
// ···
  int newTotal = sumUpToFive(1);
  print(newTotal); // <-- prints 15
```

## 可选的命名参数

使用大括号语法，可以定义具有名称的可选参数。

```dart
void printName(String firstName, String lastName, {String suffix}) {
  print('$firstName $lastName ${suffix ?? ''}');
}
// ···
  printName('Avinash', 'Gupta');
  printName('Poshmeister', 'Moneybuckets', suffix: 'IV');
```

如您所料，默认情况下，这些参数的值为 null，但是您可以提供默认值:

```dart
void printName(String firstName, String lastName, {String suffix = ''}) {
  print('$firstName $lastName $suffix');
}
```

函数不能同时具有可选的位置参数和可选的命名参数。

## 异常

Dart 代码可以引发并捕获异常。与 Java 相反，Dart 的所有异常都是未经检查的异常。方法需要制订它们可能引发哪些异常，您也不被强制捕获任何异常。

Dart 提供 `Exception` 和 `Error` 类型，但是您可以抛出任何非 null 对象:

```dart
throw Exception('Something bad happened.');
throw 'Waaaaaaah!';
```

使用 `try`，`on` 以及 `catch` 处理异常时的关键字:

```dart
try {
  breedMoreLlamas();
} on OutOfLlamasException {
  // A specific exception
  buyMoreLlamas();
} on Exception catch (e) {
  // Anything else that is an exception
  print('Unknown exception: $e');
} catch (e) {
  // No specified type, handles all
  print('Something really unknown: $e');
}
```

`try` 的作用和大多数其他语言一样。使用 `on` 关键字按类型过滤特定的异常，并使用 `catch` 关键字获取对异常对象的引用。

如果您不能完全处理该异常，请使用 `rethrow` 关键字传播该异常:

```dart
try {
  breedMoreLlamas();
} catch (e) {
  print('I was just trying to breed llamas!.');
  rethrow;
}
```

要执行代码(无论是否引发异常)，请使用 `finally`:

```dart
try {
  breedMoreLlamas();
} catch (e) {
  // ... handle exception ...
} finally {
  // Always clean up, even if an exception is thrown.
  cleanLlamaStalls();
}
```

## 在构造函数种使用 `this`

Dart 提供了一个方便的快捷方式，用于将值分配给构造函数中的属性: `this.propertyName` 在声明构造函数时使用:

```dart
class MyColor {
  int red;
  int green;
  int blue;

  MyColor(this.red, this.green, this.blue);
}

final color = MyColor(80, 80, 128);
```

该技术也适用于命名参数。属性名称成为参数的名称:

```dart
class MyColor {
  ...

  MyColor({this.red, this.green, this.blue});
}

final color = MyColor(red: 80, green: 80, blue: 80);
```

对于可选参数，默认值可以按预期运行:

```dart
MyColor([this.red = 0, this.green = 0, this.blue = 0]);
// or
MyColor({this.red = 0, this.green = 0, this.blue = 0});
```

## 初始化列表

有时在实现构造函数时，需要在构造函数主体执行之前进行一些设置。例如，在构造函数主体执行之前，final 字段必须具有值。您可以在构造函数的签名及其主体之间的初始化器列表中执行此操作:

```dart
Point.fromJson(Map<String, num> json)
    : x = json['x'],
      y = json['y'] {
  print('In Point.fromJson(): ($x, $y)');
}
```

初始化器列表也是放置断言的方便位置，断言仅在开发期间运行:

```dart
NonNegativePoint(this.x, this.y)
    : assert(x >= 0),
      assert(y >= 0) {
  print('I just made a NonNegativePoint: ($x, $y)');
}
```

## 命名构造函数

为了允许类具有多个构造函数，Dart 支持命名构造函数:

```dart
class Point {
  double x, y;

  Point(this.x, this.y);

  Point.origin() {
    x = 0;
    y = 0;
  }
}
```

要使用命名构造函数，请使用其全名调用它:

```dart
final myPoint = Point.origin();
```

## 工厂构造函数

Dart 支持工厂构造函数，该构造函数可以返回子类型，甚至可以返回 null。要创建工厂构造函数，请使用 `factory` 关键字:

```dart
class Square extends Shape {}

class Circle extends Shape {}

class Shape {
  Shape();

  factory Shape.fromTypeName(String typeName) {
    if (typeName == 'square') return Square();
    if (typeName == 'circle') return Circle();

    print('I don\'t recognize $typeName');
    return null;
  }
}
```

## 重定向构造函数

有时，构造函数的唯一目的是重定向到同一类中的另一个构造函数。重定向构造函数的主体为空，构造函数调用出现在冒号(`:`)之后。

```dart
class Automobile {
  String make;
  String model;
  int mpg;

  // The main constructor for this class.
  Automobile(this.make, this.model, this.mpg);

  // Delegates to the main constructor.
  Automobile.hybrid(String make, String model) : this(make, model, 60);

  // Delegates to a named constructor
  Automobile.fancyHybrid() : this.hybrid('Futurecar', 'Mark 2');
}
```

## const 构造函数

如果您的类产生了永不改变的对象，则可以使这些对象具有编译时常量。为此，请定义一个 `const` 构造函数，并确保所有实例变量都是最终变量。

```dart
class ImmutablePoint {
  const ImmutablePoint(this.x, this.y);

  final int x;
  final int y;

  static const ImmutablePoint origin = ImmutablePoint(0, 0);
}
```
