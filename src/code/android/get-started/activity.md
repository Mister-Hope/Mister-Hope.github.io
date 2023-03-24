---
title: 启动另一个 activity
icon: info
date: 2022-04-01
category:
  - Android
  - 快速上手
tag:
  - 快速上手
---

在本课中，您将向 MainActivity 添加一些代码，以便在用户点按 Send 按钮时启动一个显示消息的新 activity。

<!-- more -->

## 响应“Send”按钮

您可按照以下步骤，向 MainActivity 类添加一个在用户点按 Send 按钮时调用的方法：

1. 在 app > java > com.example.myfirstapp > MainActivity 文件中，添加以下 sendMessage() 方法桩：

   ::: code-tabs#android

   @tab Kotlin

   ```kotlin
   class MainActivity : AppCompatActivity() {
       override fun onCreate(savedInstanceState: Bundle?) {
           super.onCreate(savedInstanceState)
           setContentView(R.layout.activity_main)
       }

       /** Called when the user taps the Send button */
       fun sendMessage(view: View) {
           // Do something in response to button
       }
   }
   ```

   @tab Java

   ```java
   public class MainActivity extends AppCompatActivity {
       @Override
       protected void onCreate(Bundle savedInstanceState) {
           super.onCreate(savedInstanceState);
           setContentView(R.layout.activity_main);
       }

       /** Called when the user taps the Send button */
       public void sendMessage(View view) {
           // Do something in response to button
       }
   }
   ```

   :::

   您可能会看到一条错误，因为 Android Studio 无法解析用作方法参数的 View 类。若要清除错误，请点击 View 声明，将光标置于其上，然后按 `Alt + Enter`（在 Mac 上则按 `Option + Enter`）进行快速修复。如果出现一个菜单，请选择 Import class。

1. 返回到 activity_main.xml 文件，并从该按钮调用此方法:

   1. 选择布局编辑器中的相应按钮。
   1. 在 Attributes 窗口中，找到 onClick 属性，并从其下拉列表中选择 `sendMessage [MainActivity]`。

   现在，当用户点按该按钮时，系统将调用 `sendMessage()` 方法。

   请注意此方法中提供的详细信息。系统需要这些信息来识别此方法是否与 android:onClick 属性兼容。具体来说，此方法具有以下特性：

   1. 公开。
   1. 返回值为空，或在 Kotlin 中为隐式 Unit。
   1. View 是唯一的参数。这是您在第 1 步结束时点击的 View 对象。

1. 接下来，填写此方法，以读取文本字段的内容，并将该文本传递给另一个 activity。

## 构建一个 intent

`Intent` 是在相互独立的组件（如两个 activity）之间提供运行时绑定功能的对象。Intent 表示应用执行某项操作的意图。您可以使用 intent 执行多种任务，但在本课中，您的 intent 将用于启动另一个 activity。

在 MainActivity 中，添加 EXTRA_MESSAGE 常量和 sendMessage() 代码，如下所示：

::: code-tabs#android

@tab Kotlin

```kotlin
const val EXTRA_MESSAGE = "com.example.myfirstapp.MESSAGE"

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    /** Called when the user taps the Send button */
    fun sendMessage(view: View) {
        val editText = findViewById<EditText>(R.id.editTextTextPersonName)
        val message = editText.text.toString()
        val intent = Intent(this, DisplayMessageActivity::class.java).apply {
            putExtra(EXTRA_MESSAGE, message)
        }
        startActivity(intent)
    }
}
```

@tab Java

```java
public class MainActivity extends AppCompatActivity {
    public static final String EXTRA_MESSAGE = "com.example.myfirstapp.MESSAGE";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    /** Called when the user taps the Send button */
    public void sendMessage(View view) {
        Intent intent = new Intent(this, DisplayMessageActivity.class);
        EditText editText = (EditText) findViewById(R.id.editTextTextPersonName);
        String message = editText.getText().toString();
        intent.putExtra(EXTRA_MESSAGE, message);
        startActivity(intent);
    }
}

```

:::

预计 Android Studio 会再次遇到 Cannot resolve symbol 错误。如需清除这些错误，请按 Alt+Enter（在 Mac 上则按 Option+Return）。您最后应导入以下内容：

::: code-tabs#android

@tab Kotlin

```kotlin
import androidx.appcompat.app.AppCompatActivity
import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.EditText
```

@tab Java

```java
import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
```

:::

DisplayMessageActivity 仍有错误，但没有关系。您将在下一部分中修复该错误。

sendMessage() 将发生以下情况：

- Intent 构造函数会获取两个参数：Context 和 Class。

  首先使用 Context 参数，因为 Activity 类是 Context 的子类。

  在本例中，系统将 Intent, 传递到的应用组件的 Class 参数是要启动的 activity。

- putExtra() 方法将 EditText 的值添加到 intent。Intent 能够以称为“extra”的键值对形式携带数据类型。

  您的键是一个公共常量 EXTRA_MESSAGE，因为下一个 activity 将使用该键检索文本值。为 intent extra 定义键时，最好使用应用的软件包名称作为前缀。这样可以确保这些键是独一无二的，这在您的应用需要与其他应用进行交互时会很重要。

- startActivity() 方法将启动一个由 Intent 指定的 DisplayMessageActivity 实例。接下来，您需要创建该类。

::: tip

导航架构组件允许您使用导航编辑器将一个 activity 与另一个 activity 相关联。建立这种关联后，您可以利用 API 在用户触发关联的操作（例如，用户点击某个按钮时）时启动第二个 activity。如需了解详情，请参阅导航。

:::

## 创建第二个 activity

若要创建第二个 activity，请按以下步骤操作：

1. 在 Project 窗口中，右键点击 app 文件夹，然后依次选择 New > Activity > Empty Activity。
1. 在 Configure Activity 窗口中，输入“DisplayMessageActivity”作为 Activity Name。将所有其他属性保留为默认设置，然后点击 Finish。

Android Studio 会自动执行下列三项操作：

1. 创建 DisplayMessageActivity 文件。
1. 创建 DisplayMessageActivity 文件对应的布局文件 activity_display_message.xml。
1. 在 AndroidManifest.xml 中添加所需的 `<activity>` 元素。

如果您运行应用并点按第一个 activity 上的按钮，将启动第二个 activity，但它为空。这是因为第二个 activity 使用模板提供的空布局。

## 添加文本视图

新 activity 包含一个空白布局文件。请按以下步骤操作，在显示消息的位置添加一个文本视图：

1. 打开 app > res > layout > activity_display_message.xml 文件。
1. 点击工具栏中的 Enable Autoconnection to Parent 。系统将启用 Autoconnect。参见图 1。
1. 在 Palette 面板中，点击 Text，将 TextView 拖动到布局中，然后将其放置在靠近布局顶部中心的位置，使其贴靠到出现的垂直线上。Autoconnect 将添加左侧和右侧约束条件，以便将该视图放置在水平中心位置。
1. 再创建一个从文本视图顶部到布局顶部的约束条件，使该视图如图 1 中所示。

或者，您可以对文本样式进行一些调整，方法是在 Attributes 窗口的 Common Attributes 面板中展开 textAppearance，然后更改 textSize 和 textColor 等属性。

## 显示消息

在此步骤中，您将修改第二个 activity 以显示第一个 activity 传递的消息。

1. 在 DisplayMessageActivity 中，将以下代码添加到 `onCreate()` 方法中：

   ::: code-tabs#android

   @tab Kotlin

   ```kotlin
   override fun onCreate(savedInstanceState: Bundle?) {
       super.onCreate(savedInstanceState)
       setContentView(R.layout.activity_display_message)

       // Get the Intent that started this activity and extract the string
       val message = intent.getStringExtra(EXTRA_MESSAGE)

       // Capture the layout's TextView and set the string as its text
       val textView = findViewById<TextView>(R.id.textView).apply {
           text = message
       }
   }
   ```

   @tab Java

   ```java
   @Override
   protected void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);
       setContentView(R.layout.activity_display_message);

       // Get the Intent that started this activity and extract the string
       Intent intent = getIntent();
       String message = intent.getStringExtra(MainActivity.EXTRA_MESSAGE);

       // Capture the layout's TextView and set the string as its text
       TextView textView = findViewById(R.id.textView);
       textView.setText(message);
   }
   ```

   :::

1. 按 `Alt + Enter`（在 Mac 上则按 `Option + Return`）导入其他所需的类：

   ::: code-tabs#android

   @tab Kotlin

   ```kotlin
   import androidx.appcompat.app.AppCompatActivity
   import android.content.Intent
   import android.os.Bundle
   import android.widget.TextView
   ```

   @tab Java

   ```java
   import androidx.appcompat.app.AppCompatActivity;
   import android.content.Intent;
   import android.os.Bundle;
   import android.widget.TextView;
   ```

   :::

## 添加向上导航功能

在您的应用中，不是主入口点的每个屏幕（所有不是主屏幕的屏幕）都必须提供导航功能，以便将用户引导至应用层次结构中的逻辑父级屏幕。为此，请在应用栏中添加向上按钮。

若要添加向上按钮，您需要在 `AndroidManifest.xml` 文件中声明哪个 activity 是逻辑父级。打开 app > manifests > AndroidManifest.xml 文件，找到 DisplayMessageActivity 的 `<activity>` 标记，然后将其替换为以下代码：

```xml
<activity android:name=".DisplayMessageActivity"
          android:parentActivityName=".MainActivity">
    <!-- The meta-data tag is required if you support API level 15 and lower -->
    <meta-data
        android:name="android.support.PARENT_ACTIVITY"
        android:value=".MainActivity" />
</activity>
```

Android 系统现在会自动向应用栏添加向上按钮。

## 运行应用

点击工具栏中的 Apply Changes 以运行应用。当应用打开后，在文本字段中输入一条消息，点按 Send 即会看到该消息显示在第二个 activity 中。
