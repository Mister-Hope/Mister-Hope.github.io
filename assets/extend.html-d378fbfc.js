import{_ as n,X as s,Y as a,a3 as e}from"./framework-a91f7991.js";const p={},t=e(`<p>在 OOP 程序设计中，当我们定义一个 class 的时候，可以从某个现有的 class 继承，新的 class 称为子类 (Subclass) ，而被继承的 class 称为基类、父类或超类 (Base class、Super class) 。</p><p>比如，我们已经编写了一个名为 Animal 的 class，有一个 <code>run()</code> 方法可以直接打印:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Animal is running...&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>当我们需要编写 Dog 和 Cat 类时，就可以直接从 Animal 类继承:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre></div><p>对于 Dog 来说，Animal 就是它的父类，对于 Animal 来说，Dog 就是它的子类。Cat 和 Dog 类似。</p><p>继承有什么好处？最大的好处是子类获得了父类的全部功能。由于 Animial 实现了 <code>run()</code> 方法，因此，Dog 和 Cat 作为它的子类，什么事也没干，就自动拥有了 <code>run()</code> 方法:</p><div class="language-python" data-ext="py"><pre class="language-python"><code>dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
dog<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>

cat <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token punctuation">)</span>
cat<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>运行结果如下:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Animal is running...
Animal is running...
</code></pre></div><p>当然，也可以对子类增加一些方法，比如 Dog 类:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Dog is running...&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Eating meat...&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>继承的第二个好处需要我们对代码做一点改进。您看到了，无论是 Dog 还是 Cat，它们 <code>run()</code> 的时候，显示的都是 <code>Animal is running...</code>，符合逻辑的做法是分别显示 <code>Dog is running...</code> 和 <code>Cat is running...</code>，因此，对 Dog 和 Cat 类改进如下:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Dog is running...&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Cat is running...&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>再次运行，结果如下:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Dog is running...
Cat is running...
</code></pre></div><p>当子类和父类都存在相同的 <code>run()</code> 方法时，我们说，子类的 <code>run()</code> 覆盖了父类的 <code>run()</code>，在代码运行的时候，总是会调用子类的 <code>run()</code>。这样，我们就获得了继承的另一个好处: 多态。</p><p>要理解什么是多态，我们首先要对数据类型再作一点说明。当我们定义一个 class 的时候，我们实际上就定义了一种数据类型。我们定义的数据类型和 Python 自带的数据类型，比如 <code>str</code>、<code>list</code>、<code>dict</code> 没什么两样:</p><div class="language-python" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># a是list类型</span>
b <span class="token operator">=</span> Animal<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># b是Animal类型</span>
c <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># c是Dog类型</span>
</code></pre></div><p>判断一个变量是否是某个类型可以用 <code>isinstance()</code> 判断:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token builtin">list</span><span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> Animal<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> Dog<span class="token punctuation">)</span>
<span class="token boolean">True</span>
</code></pre></div><p>看来 a、b、c 确实对应着 <code>list</code>、<code>Animal</code>、<code>Dog</code> 这 3 种类型。</p><p>但是等等，试试:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> Animal<span class="token punctuation">)</span>
<span class="token boolean">True</span>
</code></pre></div><p>看来 c 不仅仅是 <code>Dog</code>，c 还是 <code>Animal</code>!</p><p>不过仔细想想，这是有道理的，因为 Dog 是从 Animal 继承下来的，当我们创建了一个 Dog 的实例 c 时，我们认为 c 的数据类型是 Dog 没错，但 c 同时也是 Animal 也没错，Dog 本来就是 Animal 的一种!</p><p>所以，在继承关系中，如果一个实例的数据类型是某个子类，那它的数据类型也可以被看做是父类。但是，反过来就不行:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> b <span class="token operator">=</span> Animal<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> Dog<span class="token punctuation">)</span>
<span class="token boolean">False</span>
</code></pre></div><p>Dog 可以看成 Animal，但 Animal 不可以看成 Dog。</p><p>要理解多态的好处，我们还需要再编写一个函数，这个函数接受一个 Animal 类型的变量:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">run_twice</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    animal<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
    animal<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>当我们传入 Animal 的实例时，<code>run_twice()</code> 就打印出:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> run_twice<span class="token punctuation">(</span>Animal<span class="token punctuation">(</span><span class="token punctuation">))</span>
Animal is running<span class="token punctuation">..</span>.
Animal is running<span class="token punctuation">..</span>.
</code></pre></div><p>当我们传入 Dog 的实例时，<code>run_twice()</code> 就打印出:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> run_twice<span class="token punctuation">(</span>Dog<span class="token punctuation">(</span><span class="token punctuation">))</span>
Dog is running<span class="token punctuation">..</span>.
Dog is running<span class="token punctuation">..</span>.
</code></pre></div><p>当我们传入 Cat 的实例时，<code>run_twice()</code> 就打印出:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> run_twice<span class="token punctuation">(</span>Cat<span class="token punctuation">(</span><span class="token punctuation">))</span>
Cat is running<span class="token punctuation">..</span>.
Cat is running<span class="token punctuation">..</span>.
</code></pre></div><p>看上去没啥意思，但是仔细想想，现在，如果我们再定义一个 <code>Tortoise</code> 类型，也从 <code>Animal</code> 派生:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Tortoise</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Tortoise is running slowly...&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>当我们调用 <code>run_twice()</code> 时，传入 <code>Tortoise</code> 的实例:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> run_twice<span class="token punctuation">(</span>Tortoise<span class="token punctuation">(</span><span class="token punctuation">))</span>
Tortoise is running slowly<span class="token punctuation">..</span>.
Tortoise is running slowly<span class="token punctuation">..</span>.
</code></pre></div><p>您会发现，新增一个 Animal 的子类，不必对 <code>run_twice()</code> 做任何修改，实际上，任何依赖 Animal 作为参数的函数或者方法都可以不加修改地正常运行，原因就在于多态。</p><p>多态的好处就是，当我们需要传入 Dog、Cat、Tortoise……时，我们只需要接收 Animal 类型就可以了，因为 Dog、Cat、Tortoise……都是 Animal 类型，然后，按照 Animal 类型进行操作即可。由于 Animal 类型有 <code>run()</code> 方法，因此，传入的任意类型，只要是 Animal 类或者子类，就会自动调用实际类型的 <code>run()</code> 方法，这就是多态的意思:</p><p>对于一个变量，我们只需要知道它是 Animal 类型，无需确切地知道它的子类型，就可以放心地调用 <code>run()</code> 方法，而具体调用的 <code>run()</code> 方法是作用在 Animal、Dog、Cat 还是 Tortoise 对象上，由运行时该对象的确切类型决定，这就是多态真正的威力: 调用方只管调用，不管细节，而当我们新增一种 Animal 的子类时，只要确保 <code>run()</code> 方法编写正确，不用管原来的代码是如何调用的。这就是著名的“开闭”原则:</p><p>对扩展开放: 允许新增 Animal 子类；</p><p>对修改封闭: 不需要修改依赖 Animal 类型的 <code>run_twice()</code> 等函数。</p><p>继承还可以一级一级地继承下来，就好比从爷爷到爸爸、再到儿子这样的关系。而任何类，最终都可以追溯到根类 object，这些继承关系看上去就像一颗倒着的树。比如如下的继承树:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                ┌───────────────┐
                │    object     │
                └───────────────┘
                        │
           ┌────────────┴────────────┐
           │                         │
           ▼                         ▼
    ┌─────────────┐           ┌─────────────┐
    │   Animal    │           │    Plant    │
    └─────────────┘           └─────────────┘
           │                         │
     ┌─────┴──────┐            ┌─────┴──────┐
     │            │            │            │
     ▼            ▼            ▼            ▼
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│   Dog   │  │   Cat   │  │  Tree   │  │ Flower  │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态语言-vs-动态语言" tabindex="-1"><a class="header-anchor" href="#静态语言-vs-动态语言" aria-hidden="true">#</a> 静态语言 vs 动态语言</h2><p>对于静态语言 (例如 Java) 来说，如果需要传入 Animal 类型，则传入的对象必须是 Animal 类型或者它的子类，否则，将无法调用 <code>run()</code> 方法。</p><p>对于 Python 这样的动态语言来说，则不一定需要传入 Animal 类型。我们只需要保证传入的对象有一个 <code>run()</code> 方法就可以了:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Start...&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>这就是动态语言的“鸭子类型”，它并不要求严格的继承体系，一个对象只要“看起来像鸭子，走起路来像鸭子”，那它就可以被看做是鸭子。</p><p>Python 的 “file-like object“ 就是一种鸭子类型。对真正的文件对象，它有一个 <code>read()</code> 方法，返回其内容。但是，许多对象，只要有 <code>read()</code> 方法，都被视为 “file-like object“。许多函数接收的参数就是 “file-like object“，您不一定要传入真正的文件对象，完全可以传入任何实现了 <code>read()</code> 方法的对象。</p><h2 id="多重继承" tabindex="-1"><a class="header-anchor" href="#多重继承" aria-hidden="true">#</a> 多重继承</h2><p>继承是面向对象编程的一个重要的方式，因为通过继承，子类就可以扩展父类的功能。</p><p>回忆一下 <code>Animal</code> 类层次的设计，假设我们要实现以下 4 种动物:</p><ul><li>Dog - 狗狗；</li><li>Bat - 蝙蝠；</li><li>Parrot - 鹦鹉；</li><li>Ostrich - 鸵鸟。</li></ul><p>如果按照哺乳动物和鸟类归类，我们可以设计出这样的类的层次:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                ┌───────────────┐
                │    Animal     │
                └───────────────┘
                        │
           ┌────────────┴────────────┐
           │                         │
           ▼                         ▼
    ┌─────────────┐           ┌─────────────┐
    │   Mammal    │           │    Bird     │
    └─────────────┘           └─────────────┘
           │                         │
     ┌─────┴──────┐            ┌─────┴──────┐
     │            │            │            │
     ▼            ▼            ▼            ▼
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│   Dog   │  │   Bat   │  │ Parrot  │  │ Ostrich │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果按照“能跑”和“能飞”来归类，我们就应该设计出这样的类的层次:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                ┌───────────────┐
                │    Animal     │
                └───────────────┘
                        │
           ┌────────────┴────────────┐
           │                         │
           ▼                         ▼
    ┌─────────────┐           ┌─────────────┐
    │  Runnable   │           │   Flyable   │
    └─────────────┘           └─────────────┘
           │                         │
     ┌─────┴──────┐            ┌─────┴──────┐
     │            │            │            │
     ▼            ▼            ▼            ▼
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│   Dog   │  │ Ostrich │  │ Parrot  │  │   Bat   │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要把上面的两种分类都包含进来，我们就得设计更多的层次:</p><ul><li>哺乳类: 能跑的哺乳类，能飞的哺乳类；</li><li>鸟类: 能跑的鸟类，能飞的鸟类。</li></ul><p>这么一来，类的层次就复杂了:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                ┌───────────────┐
                │    Animal     │
                └───────────────┘
                        │
           ┌────────────┴────────────┐
           │                         │
           ▼                         ▼
    ┌─────────────┐           ┌─────────────┐
    │   Mammal    │           │    Bird     │
    └─────────────┘           └─────────────┘
           │                         │
     ┌─────┴──────┐            ┌─────┴──────┐
     │            │            │            │
     ▼            ▼            ▼            ▼
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│  MRun   │  │  MFly   │  │  BRun   │  │  BFly   │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
     │            │            │            │
     │            │            │            │
     ▼            ▼            ▼            ▼
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│   Dog   │  │   Bat   │  │ Ostrich │  │ Parrot  │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要再增加“宠物类”和“非宠物类”，这么搞下去，类的数量会呈指数增长，很明显这样设计是不行的。</p><p>正确的做法是采用多重继承。首先，主要的类层次仍按照哺乳类和鸟类设计:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token comment"># 大类:</span>
<span class="token keyword">class</span> <span class="token class-name">Mammal</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token comment"># 各种动物:</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Mammal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">Bat</span><span class="token punctuation">(</span>Mammal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">Parrot</span><span class="token punctuation">(</span>Bird<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">Ostrich</span><span class="token punctuation">(</span>Bird<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们要给动物再加上 <code>Runnable</code> 和 <code>Flyable</code> 的功能，只需要先定义好 <code>Runnable</code> 和 <code>Flyable</code> 的类:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Running...&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Flyable</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">fly</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Flying...&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>对于需要 <code>Runnable</code> 功能的动物，就多继承一个 <code>Runnable</code>，例如 <code>Dog</code>:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Mammal<span class="token punctuation">,</span> Runnable<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre></div><p>对于需要 <code>Flyable</code> 功能的动物，就多继承一个 <code>Flyable</code>，例如 <code>Bat</code>:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Bat</span><span class="token punctuation">(</span>Mammal<span class="token punctuation">,</span> Flyable<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre></div><p>通过多重继承，一个子类就可以同时获得多个父类的所有功能。</p><h2 id="mixin" tabindex="-1"><a class="header-anchor" href="#mixin" aria-hidden="true">#</a> MixIn</h2><p>在设计类的继承关系时，通常，主线都是单一继承下来的，例如，<code>Ostrich</code> 继承自 <code>Bird</code>。但是，如果需要“混入”额外的功能，通过多重继承就可以实现，比如，让 <code>Ostrich</code> 除了继承自 <code>Bird</code> 外，再同时继承 <code>Runnable</code>。这种设计通常称之为 MixIn。</p><p>为了更好地看出继承关系，我们把 <code>Runnable</code> 和 <code>Flyable</code> 改为 <code>RunnableMixIn</code> 和 <code>FlyableMixIn</code>。类似的，您还可以定义出肉食动物<code>CarnivorousMixIn</code> 和植食动物 <code>HerbivoresMixIn</code>，让某个动物同时拥有好几个 MixIn:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Mammal<span class="token punctuation">,</span> RunnableMixIn<span class="token punctuation">,</span> CarnivorousMixIn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre></div><p>MixIn 的目的就是给一个类增加多个功能，这样，在设计类的时候，我们优先考虑通过多重继承来组合多个 MixIn 的功能，而不是设计多层次的复杂的继承关系。</p><p>Python 自带的很多库也使用了 MixIn。举个例子，Python 自带了 TCPServer 和 UDPServer 这两类网络服务，而要同时服务多个用户就必须使用多进程或多线程模型，这两种模型由 ForkingMixIn 和 ThreadingMixIn 提供。通过组合，我们就可以创造出合适的服务来。</p><p>比如，编写一个多进程模式的 TCP 服务，定义如下:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyTCPServer</span><span class="token punctuation">(</span>TCPServer<span class="token punctuation">,</span> ForkingMixIn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre></div><p>编写一个多线程模式的 UDP 服务，定义如下:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyUDPServer</span><span class="token punctuation">(</span>UDPServer<span class="token punctuation">,</span> ThreadingMixIn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre></div><p>如果您打算搞一个更先进的协程模型，可以编写一个 CoroutineMixIn:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyTCPServer</span><span class="token punctuation">(</span>TCPServer<span class="token punctuation">,</span> CoroutineMixIn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre></div><p>这样一来，我们不需要复杂而庞大的继承链，只要选择组合不同的类的功能，就可以快速构造出所需的子类。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>继承可以把父类的所有功能都直接拿过来，这样就不必重零做起，子类只需要新增自己特有的方法，也可以把父类不适合的方法覆盖重写。</p><p>动态语言的鸭子类型特点决定了继承不像静态语言那样是必须的。</p><p>由于 Python 允许使用多重继承，因此，MixIn 就是一种常见的设计。</p><p>只允许单一继承的语言 (如 Java) 不能使用 MixIn 的设计。</p>`,94),c=[t];function o(l,i){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","extend.html.vue"]]);export{d as default};
