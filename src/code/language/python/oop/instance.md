---
title: 类和实例
author: 廖雪峰
icon: class
date: 2021-03-28
category: Python
---

面向对象最重要的概念就是类 (Class) 和实例 (Instance) ，必须牢记类是抽象的模板，比如 `Student` 类，而实例是根据类创建出来的一个个具体的“对象”，每个对象都拥有相同的方法，但各自的数据可能不同。

<!-- more -->

仍以 `Student` 类为例，在 Python 中，定义类是通过 class 关键字:

```py
class Student(object):
    pass
```

class 后面紧接着是类名，即 `Student`，类名通常是大写开头的单词，紧接着是(object)，表示该类是从哪个类继承下来的，继承的概念我们后面再讲，通常，如果没有合适的继承类，就使用 object 类，这是所有类最终都会继承的类。

定义好了 `Student` 类，就可以根据 `Student` 类创建出 `Student` 的实例，创建实例是通过 `className()` 实现的:

```py
>>> bart = Student()
>>> bart
<__main__.Student object at 0x10a67a590>
>>> Student
<class '__main__.Student'>
```

可以看到，变量 `bart` 指向的就是一个 Student 的实例，后面的 `0x10a67a590` 是内存地址，每个 object 的地址都不一样，而 `Student` 本身则是一个类。

可以自由地给一个实例变量绑定属性，比如，给实例 `bart` 绑定一个 `name` 属性:

```py
>>> bart.name = 'Bart Simpson'
>>> bart.name
'Bart Simpson'
```

由于类可以起到模板的作用，因此，可以在创建实例的时候，把一些我们认为必须绑定的属性强制填写进去。通过定义一个特殊的 **init** 方法，在创建实例的时候，就把 `name`，`score` 等属性绑上去:

```py
class Student(object):

    def __init__(self, name, score):
        self.name = name
        self.score = score
```

::: warning

特殊方法 `__init__` 前后分别有两个下划线!!!

:::

由于 **init** 方法的第一个参数永远是 `self`，表示创建的实例本身，因此，在 **init** 方法内部，就可以把各种属性绑定到 `self`，因为 `self` 就指向创建的实例本身。

有了 **init** 方法，在创建实例的时候，就不能传入空的参数了，必须传入与 **init** 方法匹配的参数，但 self 不需要传，Python 解释器自己会把实例变量传进去:

```py
>>> bart = Student('Bart Simpson', 59)
>>> bart.name
'Bart Simpson'
>>> bart.score
59
```

和普通的函数相比，在类中定义的函数只有一点不同，就是第一个参数永远是实例变量 self，并且，调用时，不用传递该参数。除此之外，类的方法和普通函数没有什么区别，所以，您仍然可以用默认参数、可变参数、关键字参数和命名关键字参数。

## 数据封装

面向对象编程的一个重要特点就是数据封装。在上面的 Student 类中，每个实例就拥有各自的 name 和 score 这些数据。我们可以通过函数来访问这些数据，比如打印一个学生的成绩:

```py
>>> def print_score(std):
...     print('%s: %s' % (std.name, std.score))
...
>>> print_score(bart)
Bart Simpson: 59
```

但是，既然 Student 实例本身就拥有这些数据，要访问这些数据，就没有必要从外面的函数去访问，可以直接在 Student 类的内部定义访问数据的函数，这样，就把“数据”给封装起来了。这些封装数据的函数是和 Student 类本身是关联起来的，我们称之为类的方法:

```py
class Student(object):

    def __init__(self, name, score):
        self.name = name
        self.score = score

    def print_score(self):
        print('%s: %s' % (self.name, self.score))
```

要定义一个方法，除了第一个参数是 self 外，其他和普通函数一样。要调用一个方法，只需要在实例变量上直接调用，除了 self 不用传递，其他参数正常传入:

```py
>>> bart.print_score()
Bart Simpson: 59
```

这样一来，我们从外部看 Student 类，就只需要知道，创建实例需要给出 name 和 score，而如何打印，都是在 Student 类的内部定义的，这些数据和逻辑被“封装”起来了，调用很容易，但却不用知道内部实现的细节。

封装的另一个好处是可以给 Student 类增加新的方法，比如 get_grade:

```py
class Student(object):
    ...

    def get_grade(self):
        if self.score >= 90:
            return 'A'
        elif self.score >= 60:
            return 'B'
        else:
            return 'C'
```

同样的，get_grade 方法可以直接在实例变量上调用，不需要知道内部实现细节:

```py
# -*- coding: utf-8 -*-
class Student(object):
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def get_grade(self):
        if self.score >= 90:
            return 'A'
        elif self.score >= 60:
            return 'B'
        else:
            return 'C'

lisa = Student('Lisa', 99)
bart = Student('Bart', 59)
print(lisa.name, lisa.get_grade())
# Lisa A
print(bart.name, bart.get_grade())
# Bart C
```

## 实例属性和类属性

由于 Python 是动态语言，根据类创建的实例可以任意绑定属性。

给实例绑定属性的方法是通过实例变量，或者通过 `self` 变量:

```py
class Student(object):
    def __init__(self, name):
        self.name = name

s = Student('Bob')
s.score = 90
```

但是，如果 `Student` 类本身需要绑定一个属性呢？可以直接在 class 中定义属性，这种属性是类属性，归 `Student` 类所有:

```py
class Student(object):
    name = 'Student'
```

当我们定义了一个类属性后，这个属性虽然归类所有，但类的所有实例都可以访问到。来测试一下:

```py
>>> class Student(object):
...     name = 'Student'
...
>>> s = Student() # 创建实例s
>>> print(s.name) # 打印name属性，因为实例并没有name属性，所以会继续查找class的name属性
Student
>>> print(Student.name) # 打印类的name属性
Student
>>> s.name = 'Michael' # 给实例绑定name属性
>>> print(s.name) # 由于实例属性优先级比类属性高，因此，它会屏蔽掉类的name属性
Michael
>>> print(Student.name) # 但是类属性并未消失，用Student.name仍然可以访问
Student
>>> del s.name # 如果删除实例的name属性
>>> print(s.name) # 再次调用s.name，由于实例的name属性没有找到，类的name属性就显示出来了
Student
```

从上面的例子可以看出，在编写程序的时候，千万**不要对实例属性和类属性使用相同的名字**，因为相同名称的实例属性将屏蔽掉类属性，但是当您删除实例属性后，再使用相同的名称，访问到的将是类属性。

## 小结

- 类是创建实例的模板，而实例则是一个一个具体的对象，各个实例拥有的数据都互相独立，互不影响；

- 方法就是与实例绑定的函数，和普通函数不同，方法可以直接访问实例的数据；

- 通过在实例上调用方法，我们就直接操作了对象内部的数据，但无需知道方法内部的实现细节。

- 和静态语言不同，Python 允许对实例变量绑定任何数据，也就是说，对于两个实例变量，虽然它们都是同一个类的不同实例，但拥有的变量名称都可能不同:

  ```py
  >>> bart = Student('Bart Simpson', 59)
  >>> lisa = Student('Lisa Simpson', 87)
  >>> bart.age = 8
  >>> bart.age
  8
  >>> lisa.age
  Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
  AttributeError: 'Student' object has no attribute 'age'
  ```

- 实例属性属于各个实例所有，互不干扰；

- 类属性属于类所有，所有实例共享一个属性；

- 不要对实例属性和类属性使用相同的名字，否则将产生难以发现的错误。
