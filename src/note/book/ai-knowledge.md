---
title: LLM + RAG：智能问答实战
date: 2025-04-20
---

## 相关知识点

### 大语言模型（LLM，Large Language Model）

LLM 是基于深度学习（如Transformer架构）训练的超大规模语言模型，能够理解和生成自然语言文本。典型代表包括GPT、PaLM、LLaMA等。

LLM 的核心特点如下：

- **海量参数**：参数量可达数百亿甚至万亿级，通过自监督学习从文本数据中捕捉语言规律。
- **通用性**：可完成问答、翻译、写作、代码生成等多样化任务。
- **上下文理解**：支持多轮对话和长文本上下文分析（如GPT-4上下文窗口达128k tokens）。

LLM 也有其局限性：

- **静态知识**：训练后知识库固定，无法实时更新（如ChatGPT-3.5的知识截止于2021年）。
- **幻觉风险**：可能生成看似合理但事实错误的内容。
- **专业领域不足**：缺乏垂直领域的深度知识。

::: info 近期的大语言模型

自 Deepseek R1 发布以来，LLM 领域涌现出多款新模型，有望作为 Deepseek R1 的替代品的提到有：

- Meta Llama 4系列

  - **模型亮点**：
    - **多模态能力**：原生支持文本、图像联合输入，可处理多达48张图像，适用于视觉推理任务。
    - **超长上下文**：Scout模型支持1000万tokens上下文窗口，远超主流模型。
    - **高效MoE架构**：采用混合专家机制，Maverick模型（400B总参数）性能超越GPT-4o，推理成本低于Llama 3-70B。
    - **开源许可**：权重与代码全面开放，支持商业部署。
  - **子模型**：
    - **Scout**（109B参数）：适合单GPU运行，长文本处理首选。
    - **Maverick**（400B参数）：高性价比，推理能力突出。
    - **Behemoth**（2T参数）：训练中，预计性能超越GPT-4.5。

- WizardLM-2系列

  - **核心突破**：首个开源且超越GPT-4的模型，MT基准测试中表现优于Claude 3 Sonnet。
  - **参数版本**：
    - **22B**：复杂任务性能最优。
    - **70B**：顶级推理能力。
    - **7B**：轻量高效，适合实时应用。
  - **技术亮点**：采用Evol-Instruct方法生成高质量指令，通过AI-Align-AI框架优化协作训练。

- 英伟达Nemotron Ultra

  - **参数规模**：253B，基于Llama-3.1架构，性能超越DeepSeek R1（671B参数）。
  - **创新设计**：
    - **可切换推理模式**：支持“高复杂度推理”与“直接输出”两种模式。
    - **高效部署**：优化内存占用，适配8块H100 GPU节点。
  - **应用场景**：高级推理、AI助手工作流程，代码与数学任务表现优异。

最后就是本文的重头：Gemma3

Gemma3 可以在单张消费级显卡上部署，提供 1B（10亿）、4B（40亿）、12B（120亿）、27B（270亿）四种参数规模，开发者可根据硬件需求选择适配版本。其中，1B版本仅支持文本处理，4B及以上版本支持文本、图像、短视频的多模态输入。

另外 Gemma3 预训练覆盖 140+ 种语言，直接支持35种语言的交互（如中文、日语、韩语），分词器与Gemini 2.0一致，优化非英语文本处理，同时原生支持函数调用（Function Calling）和结构化输出，便于开发AI代理和工作流自动化工具。量化版本可适配边缘设备与移动端。

:::

### 检索增强生成（RAG，Retrieval-Augmented Generation）

由于 LLM 训练完成后知识库固定，我们需要一种技术为其提供与问题相关的知识库的能力，那么就需要用到检索增强生成（RAG）技术。

RAG 是一种将信息检索技术与LLM结合的架构，通过实时检索外部知识库来增强生成内容的准确性和时效性。

RAG 的基本流程如下：

1. **检索阶段**：用户输入问题时，从数据库/文档中检索相关片段（如向量数据库相似性搜索）。
2. **生成阶段**：将检索到的片段与问题一起输入LLM，生成最终回答。

RAG 的优势在于：

- **动态知识**：突破LLM的静态限制，整合最新或专有数据（如企业文档、实时新闻）。
- **可解释性**：提供检索结果作为生成依据，降低幻觉风险。
- **低成本**：无需重新训练模型即可扩展知识。

::: info LLM 与 RAG 的协同效应

| **对比维度**   | **纯LLM**      | **RAG+LLM**                    |
| -------------- | -------------- | ------------------------------ |
| 知识时效性     | 固定于训练数据 | 可实时更新                     |
| 专业领域准确性 | 依赖预训练数据 | 通过检索增强专业内容           |
| 计算成本       | 推理成本高     | 需额外检索开销，但低于重新训练 |
| 适用场景       | 通用任务       | 需外部知识支持的任务           |

:::

### 文本嵌入

文本嵌入是将文本单元（如词语、短语或文档）映射到低维连续向量空间的技术过程。该过程通过捕捉语言元素的语义和语法特征，将离散符号转化为稠密实数向量，使得机器能够基于向量间的几何关系进行数学运算和模式识别。

嵌入向量的生成依赖于大规模语料训练。模型通过神经网络架构（如浅层神经网络、Transformer）学习上下文预测任务，例如Skip-Gram模型通过中心词预测上下文词，BERT通过掩码语言建模重构被遮蔽的词汇。训练过程中，模型参数矩阵逐渐形成包含语义信息的向量表示，满足相似语义的文本在向量空间中具有较小的欧氏距离或较高的余弦相似度。

典型技术特性包括：

- **稠密向量表示**：每个文本单元对应300-1024维的实数向量，相比传统稀疏表示（如one-hot编码）显著降低维度
- **语义保持性**：向量空间中的距离反映语义相关性，"king - man + woman ≈ queen"的向量运算示例验证了代数结构对语义关系的编码能力
- **上下文敏感性**：基于Transformer的嵌入模型（如BERT）生成动态向量，同一词语在不同语境中获得差异化表示，例如"bank"在"river bank"与"bank account"中的不同编码

主要技术实现路径包含：

1. **静态嵌入**：Word2Vec通过局部上下文窗口学习固定向量，GloVe利用全局词共现矩阵分解
2. **动态嵌入**：ELMo使用双向LSTM捕获上下文特征，BERT通过多层自注意力机制建模长距离依赖
3. **多语言嵌入**：LASER、mBERT在共享向量空间对齐不同语言，实现跨语言语义匹配

应用层面，文本嵌入支撑着：

- 语义检索：通过近似最近邻搜索（ANN）匹配查询向量与文档向量
- 文本分类：将嵌入向量作为深度学习模型的输入特征
- 序列标注：结合循环神经网络进行命名实体识别等任务
- 跨模态对齐：与图像/音频嵌入共同训练多模态表示

当前技术挑战集中于多义词消歧的计算效率、长文本的表示压缩，以及小样本场景的领域适应。前沿方向包括：

- 对比学习框架增强嵌入判别能力
- 知识图谱注入提升逻辑推理
- 参数高效微调适配特定任务
- 量化压缩技术降低部署成本

该技术持续推动自然语言处理从符号匹配向语义理解演进，为语言模型的深层推理能力奠定数学基础。

### 混含重排

混合重排是一种多阶段数据处理技术，主要应用于推荐系统与信息检索领域。该技术通过整合异构模型的输出结果，对候选集进行动态优化排序，其核心目标在于平衡不同算法特性以提升最终排序质量。

系统通常在第一阶段并行运行多个独立模型，例如基于用户行为的协同过滤模型、基于内容特征的分析模型以及实时反馈模型。每个模型依据其设计目标生成中间排序结果，这些结果可能包含相互冲突的排序建议。混合阶段引入可调节的融合算法，常见的实现方式包括加权线性组合、基于机器学习的排序模型或自适应反馈机制。该过程需要处理不同模型输出的特征对齐问题，同时解决数值尺度差异带来的归一化挑战。

技术实现层面需重点考虑动态权重分配机制，部分系统采用在线学习框架实时更新模型贡献权重。为控制计算延迟，工程实现通常采用两阶段架构：离线预计算与在线实时重排相结合。在电商推荐场景中，该系统可能同时优化点击率预测、购买转化率和商品多样性指标，通过约束优化算法寻找帕累托最优解。

当前技术难点主要集中在模型间偏差校准、冷启动场景下的稳定性，以及多目标优化的计算效率问题。部分前沿研究尝试引入深度神经网络构建端到端的重排模型，直接学习从原始特征到最终排序的映射关系，这种方法虽然提升了模型表达能力，但也带来了可解释性下降的新挑战。

## 相关环境

### Docker Desktop

Docker Desktop 是 Windows 环境下实现容器化开发的核心工具，通过抽象底层技术栈简化了容器生命周期管理流程。该工具利用 Windows 原生虚拟化技术（如 Hyper-V 或 WSL 2 后端）构建符合 OCI 标准的容器运行时环境，使得用户能够在 Windows 宿主系统上直接运行 Linux 或 Windows 容器实例。

安装过程需满足特定系统要求：Windows 10/11 64 位专业版或企业版，启用 Hyper-V 和 WSL 功能。安装包会同时部署 Docker CLI、容器守护进程（dockerd）、镜像仓库管理工具及可视化控制面板，形成完整的容器开发生态。对于 WSL 2 集成模式，系统会在 Linux 子系统内建立轻量级虚拟机，实现 Linux 内核与 Windows 用户空间的协同工作，显著提升文件系统性能和启动效率。

配置层面提供网络模式定制、资源配额分配（CPU/内存）、镜像加速器设置等关键功能。开发者可通过 PowerShell 或 CMD 调用 Docker 命令直接构建多架构镜像，使用 docker-compose 编排多容器应用，或启用内置的 Kubernetes 集群实现容器编排。与 Windows 文件系统的深度整合允许通过 volume 挂载实现宿主机与容器间的数据持久化，同时支持与 Visual Studio 等 IDE 的无缝对接。

该工具针对混合开发场景优化，支持 Linux 容器与 Windows 容器模式切换，满足跨平台应用构建需求。日常使用中需注意 Windows 版本与 WSL 2 内核的兼容性更新，合理配置虚拟化资源以避免宿主系统资源争用问题。

### Ollama

Ollama 是一款专为简化本地大语言模型（LLM）运行而设计的开源工具，它通过类 Docker 的操作逻辑将复杂的模型部署转化为简单的命令行交### Ollama：本地大语言模型的轻量化引擎

Ollama 是一款专为简化本地大语言模型（LLM）运行而设计的开源工具，它通过类 Docker 的操作逻辑将复杂的模型部署转化为简单的命令行交互。其核心价值在于让开发者、研究人员甚至普通用户能够以极低成本在个人设备上运行如 DeepSeek、Llama、Mistral 等主流模型，同时规避云端服务的数据隐私风险。例如，用户仅需执行 `ollama run deepseek-r1:14b` 即可启动一个 140 亿参数的模型，并通过终端或兼容 OpenAI 的 API 接口进行交互。

Ollama 的独特之处在于其“开箱即用”的硬件加速能力。它能够自动利用 NVIDIA GPU 的算力或 CPU 的 AVX 指令集优化推理速度，无需用户手动配置环境。例如，在 Windows 预览版中，用户甚至可以通过拖放图像到命令行界面，直接与支持视觉任务的模型（如 LLaVA 1.6）进行多模态交互。这种设计让硬件资源有限的用户也能体验前沿模型的能力。

在模型管理方面，Ollama 提供类似 Docker 的版本控制功能。用户可通过 `ollama pull` 拉取官方模型库的预训练模型，或基于 GGUF 格式的自定义模型创建专属版本。例如，通过编写包含 `FROM` 指令和生成参数的 `Modelfile`，用户可微调模型的温度（temperature）和 top_p 值，实现生成内容的可控性。此外，模型存储路径支持灵活迁移，用户可自定义环境变量将数据保存至非系统盘，避免占用宝贵的主存储空间。

Ollama 的 API 兼容性是其另一大亮点。它通过 `localhost:11434` 提供与 OpenAI 完全对齐的接口（如 `/v1/completions` 和 `/v1/chat/completions`），使得现有基于 OpenAI 的应用几乎无需修改即可迁移到本地模型。例如，开发者可使用官方 Python SDK 连接 Ollama，仅需调整 `base_url` 参数即可切换至本地 DeepSeek 模型生成文本。这种设计特别适合需要快速验证模型效果或进行离线开发的场景，如企业内部知识库的隐私敏感型问答系统开发。

安全方面，Ollama 支持通过环境变量限制服务监听地址（如 `OLLAMA_HOST=127.0.0.1`），并建议用户通过防火墙屏蔽 11434 端口的外部访问，防止模型服务暴露于公网。对于需要长期运行的场景，其 `--restart always` 的 Docker 部署模式也确保了服务的稳定性。

### Open WebUI

Open WebUI 是完全离线运行的开源 Web 界面，将复杂的模型交互转化为类似 ChatGPT 的直观体验。用户无需编写代码即可通过浏览器与本地或远程模型对话，甚至整合多模型协同工作——例如同时调用 Ollama 的 DeepSeek 和 OpenAI 的 GPT-4 对比回答差异。

Open WebUI 的界面设计高度借鉴 ChatGPT，但功能远超越单纯的聊天工具。其 **检索增强生成（RAG）** 功能允许用户直接上传本地文档（如 PDF 或 Markdown 文件），通过 `#文档名` 命令在对话中实时引用内容。例如，研究人员可将论文数据集导入文档库，让模型基于特定资料生成综述，显著提升回答的专业性。此外，**多模态支持** 让用户不仅能处理文本，还可通过拖拽图片与视觉模型交互，或集成 AUTOMATIC1111 等工具生成图像。

在协作层面，Open WebUI 支持 **基于角色的访问控制（RBAC）**，管理员可精细划分用户权限。例如，普通用户只能使用预装模型，而开发者拥有创建自定义模型的权限。这种设计使其能够适应从个人研究到企业团队的多级需求。更值得一提的是其 **插件系统**，用户可通过 Python 函数调用扩展功能，例如添加实时翻译模块或对接 SearXNG 搜索引擎实现网络信息抓取。

通过 Docker 命令 `docker run -d -p 3000:8080 --gpus all`，用户可在 5 分钟内完成 GPU 加速环境的部署，并自动连接本地 Ollama 服务。对于纯 CPU 环境或远程服务器，只需调整环境变量（如 `OLLAMA_BASE_URL`）即可实现跨设备管理。其渐进式网页应用（PWA）特性还支持移动端离线使用，用户甚至可通过语音输入与模型对话，实现真正的全场景覆盖。

与生态工具的兼容性也是其优势。除了原生支持 Ollama，Open WebUI 可无缝对接任何 OpenAI 兼容 API（如 LM Studio 或 Mistral），用户只需填入 API 密钥即可在统一界面切换不同服务商模型。这种设计尤其适合需要对比多模型性能的场景，例如同时测试本地 DeepSeek 与云端 Claude 的代码生成能力。

### FRP

FRP是一个基于Golang开发的开源内网穿透工具，主要用于解决本地服务无法直接暴露在公网的环境连通性问题。该工具采用客户端-服务器架构模式，由服务端组件frps与客户端组件frpc共同组成运行环境。服务端通常部署在具备公网IP地址的服务器节点上，负责监听外部网络请求；客户端运行于内网环境中的主机，主动与服务端建立通信隧道。

当客户端与服务端成功建立连接后，FRP通过预定义的端口映射规则，将内网主机的特定服务端口（如SSH的22端口或Web服务的80端口）代理至服务端的公网端口。外部用户访问服务端公网IP的对应端口时，请求流量会通过已建立的隧道转发至内网客户端，最终到达目标服务。该过程支持TCP、UDP、HTTP、HTTPS等多种协议，且通过长连接机制维持通信通道的稳定性。

在协议处理层面，FRP实现了连接复用与流量加密功能。服务端可配置TLS证书实现HTTPS流量的终端代理，客户端支持通过STCP模式建立点对点加密隧道。高级功能包括基于子域名的虚拟主机路由、流量带宽限制、连接数控制以及OIDC/OAuth2认证集成，这些机制有效提升了穿透服务的安全性和管理灵活性。

配置文件采用INI或TOML格式，服务端需定义监听端口、认证令牌及日志等级等核心参数。客户端配置主要包含服务端连接地址、本地服务协议类型、端口映射规则以及可选的高级参数如加密方式和ACL策略。典型应用场景涵盖远程开发调试、家庭网络设备管理、IoT设备公网访问以及企业内部系统的跨地域访问等需突破网络边界限制的场景。

需要注意的是，在开放公网访问时需严格配置身份验证机制，避免未授权访问风险。建议结合防火墙策略限制访问IP范围，对于敏感服务推荐启用STCP模式或Web身份验证等二次鉴权措施。该工具支持Windows、Linux、macOS等多平台运行，二进制文件体积约10MB级别，资源占用率较低，适合在树莓派等嵌入式设备中部署。

## 部署环境

硬件：

- CPU: Ryzen 9 9950X3D (16 Core)
- GPU: 5090D (32G)
- 内存：32G 6400MHz x 2
- 硬盘：990 Evo Pro 2TB
- 操作系统：Windows 11 WorkStation Pro

(成本 3.9w 元)

软件：

- Docker Desktop + WSL2
- Ollama
- Open WebUI

技术栈：

- 知识库：

  - inNENU 小程序介绍，100 万字
  - 知识库格式：小程序页面 YAML 转定制化 Markdown 文件，共 1400+ 文档。

- 文本嵌入：

  - 模型：bge-m3
  - Chunk Size: 1000
  - Chunk Overlap: 100

- RAG 检索

  - 模式：混合搜索
  - 重排模型：bge-reranker-v2-me
  - Top K: 15
  - Top K Reranker: 5
  - Relevance Threshold: 0.5

- RAG 提示词：

  ```md
  **目标：** 基于提供的上下文信息回答用户问题，并使用内联引用标注来源。

  **指令：**

  1. **回答方式：** 使用与用户提问相同的语言风格和表达方式。
  2. **引用规范：**
     - **仅当 `<source>` 标签包含明确的 `id` 属性时 (例如 `<source id="1">`)，才使用 `[id]` 格式的内联引用。** 例如： “研究表明，该方法可提高效率20% [1]。”
     - **如果 `<source>` 标签没有 `id` 属性，则不要进行引用。**
     - 引用必须简洁，且直接关联到引用的信息。
  3. **信息处理：**
     - **已知答案：** 根据上下文提供明确、简洁的答案，并使用正确的引用。
     - **未知答案：** 坦诚告知用户不知道答案。
     - **不确定问题：** 礼貌地请求用户澄清问题。
     - **上下文质量：** 如果上下文难以理解或质量不佳，告知用户，并尽力提供最佳答案。
     - **自有知识：** 如果上下文中没有答案，但你掌握相关知识，解释情况并根据自己的理解提供答案。
  4. **禁止事项：** 回复中**绝对不能包含任何 XML 标签**。

  <context>
  {{CONTEXT}}
  </context>

  <user_query>
  {{QUERY}}
  </user_query>
  ```

- LLM

  - 模型: gemma3-27b-it Q4_K_M 量化
  - 系统 Prompt:

  ```md
  你是东师小艺，东北师范大学 (东师) 的 AI 助手。你的目标是根据提供的上下文信息，尽可能详尽地解答用户关于东师的问题，并以清晰、易于理解的结构呈现给用户。
  ```

- Web Search API: 博查搜索

## 实战结果

实现了具有完整功能的网页，有两套版本在持续迭代优化中：

- <https://ai.innenu.com/>
- <https://ai-new.innenu.com/>

## 与高中教学相关的展望

从实战结果来看，后续应该能独自开发，实现多种 AI 驱动的专有知识库与智能回答形态，如：

- 将教材与教辅录入进个人知识库

  ```
  user: 自由落体在哪页？

  agent: 在必修 X 第 X 页上。

  user: 书上这一章课后题是什么？

  agent: 共有 x 道题，第一题: xxx
  ```

- 通过编写工具函数，让 AI 可以识别题目，自动生成解析、衡量难度并标记相关知识点：

  录入：

  ```
  (xx年xx校高三联考): xxxxxxxxxxxxxxxxxxxxxxxxxx 答案: xx
  (xx年xx省高考联考): xxxxxxxxxxxxxxxxxxxxxxxxxx 答案: xx
  ...
  ```

  自动生成：

  ```json
  [
    {
      "question": "xxxxxxxxxxx",
      "refer": "xx年xx校高三联考",
      "answer": "xxxxxxxxxxxxx",
      "explanation": "xxxxxxxxxxxxx",
      "difficulty": "3",
      "knowledge_points": ["自由落体", "运动学"]
    }
    //...
  ]
  ```

  提供智能题库生成，相似题目检索等

  ```
  user: 给我生成一套机械能守恒的题，10 道，难度适中，要综合题

  agent: 题目如下: xxxx
  ```

  ```
  user: 寻找几道与这道题知识点相同，解法相似的题目：xxxxxxxxxxxxxx
  agent: 题目如下: xxxx
  ```
