import{ac as t,M as d,N as e,ae as o}from"./framework-6fc096bd.js";const r={},c=o('<h2 id="linux-文件目录结构" tabindex="-1"><a class="header-anchor" href="#linux-文件目录结构" aria-hidden="true">#</a> Linux 文件目录结构</h2><p>学习 Linux，不仅限于学习各种命令，了解整个 Linux 文件系统的目录结构以及各个目录的功能同样至关重要。</p><p>使用 Linux 时，通过命令行输入 <code>ls -l /</code> 可以看到，在 Linux 根目录 (/) 下包含很多的子目录(称为一级目录)，例如 <code>bin</code>、<code>boot</code>、<code>dev</code> 等。同时，各一级目录下还含有很多子目录(称为二级目录)，比如 <code>/bin/bash</code>、<code>/bin/ed</code> 等。Linux 文件系统目录总体呈现树形结构，<code>/</code> 根目录就相当于树根。</p><p>由于 Linux 系统免费开源，使得 Linux 发行版本有很多，利用 Linux 开发产品的团队也有很多，如果任由每个人都按照自己的想法来配置 Linux 系统文件目录，后期可能会产生诸多的管理问题。试想，如果您进入一家公司，所用 Linux 系统的文件目录结构与所学的完全不同，实在令人头疼。</p><p>为了避免诸多使用者对 Linux 系统目录结构天马行空，Linux 基金会发布了 FHS 标准。多数 Linux 发行版系统都遵循这一标准。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>FHS(Filesystem Hierarchy Standard)，文件系统层次化标准，该标准规定了 Linux 系统中所有一级目录以及部分二级目录(<code>/usr</code> 和 <code>/var</code>)的用途。发布此标准的主要目的就是为了让用户清楚地了解每个目录应该存放什么类型的文件。</p></div><h2 id="linux-根目录" tabindex="-1"><a class="header-anchor" href="#linux-根目录" aria-hidden="true">#</a> Linux 根目录(/)</h2><p>FHS 认为，Linux 系统的根目录 (/) 最为重要(没有之一)，其原因有以下 2 点:</p><ul><li>所有目录都是由根目录衍生出来的；</li><li>根目录与系统的开机、修复、还原密切相关；</li></ul><p>因此，根目录必须包含开机软件、核心文件、开机所需程序、函数库、修复系统程序等文件。</p><table><thead><tr><th>一级目录</th><th>功能(作用)</th></tr></thead><tbody><tr><td>/bin/</td><td>存放系统命令，普通用户和 root 都可以执行。放在 <code>/bin</code> 下的命令在单用户模式下也可以执行</td></tr><tr><td>/boot/</td><td>系统启动目录，保存与系统启动相关的文件，如内核文件和启动引导程序(grub)文件等</td></tr><tr><td>/dev/</td><td>设备文件保存位置</td></tr><tr><td>/etc/</td><td>配置文件保存位置。系统内所有采用默认安装方式(rpm 安装)的服务配置文件全部保存在此目录中，如用户信息、服务的启动脚本、常用服务的配置文件等</td></tr><tr><td>/home/</td><td>普通用户的主目录(也称为家目录)。在创建用户时，每个用户要有一个默认登录和保存自己数据的位置，就是用户的主目录，所有普通用户的主目录是在 <code>/home/</code> 下建立一个和用户名相同的目录。如用户 liming 的主目录就是 <code>/home/liming</code></td></tr><tr><td>/lib/</td><td>系统调用的函数库保存位置</td></tr><tr><td>/media/</td><td>挂载目录。系统建议用来挂载媒体设备，如软盘和光盘</td></tr><tr><td>/mnt/</td><td>挂载目录。早期 Linux 中只有这一个挂载目录，并没有细分。系统建议这个目录用来挂载额外的设备，如 U 盘、移动硬盘和其他操作系统的分区</td></tr><tr><td>/misc/</td><td>挂载目录。系统建议用来挂载 NFS 服务的共享目录。虽然系统准备了三个默认挂载目录 <code>/media/</code>、<code>/mnt/</code>、<code>/misc/</code>，但是到底在哪个目录中挂载什么设备可以由管理员自己决定。例如，笔者在接触 Linux 的时候，默认挂载目录只有 /mnt/，所以养成了在 <code>/mnt/</code> 下建立不同目录挂载不同设备的习惯，如 <code>/mnt/cdrom/</code> 挂载光盘、<code>/mnt/usb/</code> 挂载 U 盘，都是可以的</td></tr><tr><td>/opt/</td><td>第三方安装的软件保存位置。这个目录是放置和安装其他软件的位置，手工安装的源码包软件都可以安装到这个目录中。不过笔者还是习惯把软件放到 <code>/usr/local/</code> 目录中，也就是说，<code>/usr/local/</code> 目录也可以用来安装软件</td></tr><tr><td>/root/</td><td>root 的主目录。普通用户主目录在 <code>/home/</code> 下，root 主目录直接在“/”下</td></tr><tr><td>/sbin/</td><td>保存与系统环境设置相关的命令，只有 root 可以使用这些命令进行系统环境设置，但也有些命令可以允许普通用户查看</td></tr><tr><td>/srv/</td><td>服务数据目录。一些系统服务启动之后，可以在这个目录中保存所需要的数据</td></tr><tr><td>/tmp/</td><td>临时目录。系统存放临时文件的目录，在该目录下，所有用户都可以访问和写入。建议此目录中不能保存重要数据，最好每次开机都把该目录清空</td></tr></tbody></table><p>FHS 针对根目录中包含的子目录仅限于上表，但除此之外，Linux 系统根目录下通常还包含下表中的几个一级目录。</p><table><thead><tr><th>一级目录</th><th>功能(作用)</th></tr></thead><tbody><tr><td>/lost+found/</td><td>当系统意外崩溃或意外关机时，产生的一些文件碎片会存放在这里。在系统启动的过程中，fsck 工具会检查这里，并修复已经损坏的文件系统。这个目录只在每个分区中出现，例如，<code>/lost+found</code> 就是根分区的备份恢复目录，<code>/boot/lost+found</code> 就是 <code>/boot</code> 分区的备份恢复目录</td></tr><tr><td>/proc/</td><td>虚拟文件系统。该目录中的数据并不保存在硬盘上，而是保存到内存中。主要保存系统的内核、进程、外部设备状态和网络状态等。如 <code>/proc/cpuinfo</code> 是保存 CPU 信息的，<code>/proc/devices</code> 是保存设备驱动的列表的，<code>/proc/filesystems</code> 是保存文件系统列表的，<code>/proc/net</code> 是保存网络协议信息的......</td></tr><tr><td>/sys/</td><td>虚拟文件系统。和 <code>/proc/</code> 目录相似，该目录中的数据都保存在内存中，主要保存与内核相关的信息</td></tr></tbody></table><h2 id="linux-usr-目录" tabindex="-1"><a class="header-anchor" href="#linux-usr-目录" aria-hidden="true">#</a> Linux /usr 目录</h2><p>usr(注意不是 user)，全称为 Unix Software Resource，此目录用于存储系统软件资源。FHS 建议所有开发者，应把软件产品的数据合理的放置在 <code>/usr</code> 目录下的各子目录中，而不是为他们的产品创建单独的目录。</p><p>Linux 系统中，所有系统默认的软件都存储在 <code>/usr</code> 目录下，<code>/usr</code> 目录类似 Windows 系统中 <code>C:\\Windows\\</code> + <code>C:\\Program files\\</code> 两个目录的综合体。</p><p>FHS 建议，<code>/usr</code> 目录应具备下表所示的子目录。</p><table><thead><tr><th>子目录</th><th>功能(作用)</th></tr></thead><tbody><tr><td>/usr/bin/</td><td>存放系统命令，普通用户和超级用户都可以执行。这些命令和系统启动无关，在单用户模式下不能执行</td></tr><tr><td>/usr/sbin/</td><td>存放根文件系统不必要的系统管理命令，如多数服务程序，只有 root 可以使用。</td></tr><tr><td>/usr/lib/</td><td>应用程序调用的函数库保存位置</td></tr><tr><td>/usr/XllR6/</td><td>图形界面系统保存位置</td></tr><tr><td>/usr/local/</td><td>手工安装的软件保存位置。我们一般建议源码包软件安装在这个位置</td></tr><tr><td>/usr/share/</td><td>应用程序的资源文件保存位置，如帮助文档、说明文档和字体目录</td></tr><tr><td>/usr/src/</td><td>源码包保存位置。我们手工下载的源码包和内核源码包都可以保存到这里。不过笔者更习惯把手工下载的源码包保存到 <code>/usr/local/src/</code> 目录中，把内核源码保存到 <code>/usr/src/linux/</code> 目录中</td></tr><tr><td>/usr/include</td><td>C/C++ 等编程语言头文件的放置目录</td></tr></tbody></table><h2 id="linux-var-目录" tabindex="-1"><a class="header-anchor" href="#linux-var-目录" aria-hidden="true">#</a> Linux /var 目录</h2><p><code>/var</code> 目录用于存储动态数据，例如缓存、日志文件、软件运行过程中产生的文件等。通常，此目录下建议包含如下表所示的这些子目录。</p><table><thead><tr><th>/var 子目录</th><th>功能(作用)</th></tr></thead><tbody><tr><td>/var/lib/</td><td>程序运行中需要调用或改变的数据保存位置。如 MySQL 的数据库保存在 <code>/var/lib/mysql/</code> 目录中</td></tr><tr><td>/var/log/</td><td>登陆文件放置的目录，其中所包含比较重要的文件如 <code>/var/log/messages</code>, <code>/var/log/wtmp</code> 等。</td></tr><tr><td>/var/run/</td><td>一些服务和程序运行后，它们的 PID(进程 ID)保存位置</td></tr><tr><td>/var/spool/</td><td>里面主要都是一些临时存放，随时会被用户所调用的数据，例如 <code>/var/spool/mail/</code> 存放新收到的邮件，<code>/var/spool/cron/</code> 存放系统定时任务。</td></tr><tr><td>/var/www/</td><td>RPM 包安装的 Apache 的网页主目录</td></tr><tr><td>/var/nis 和/var/yp</td><td>NIS 服务机制所使用的目录，nis 主要记录所有网络中每一个 client 的连接信息；yp 是 linux 的 nis 服务的日志文件存放的目录</td></tr><tr><td>/var/tmp</td><td>一些应用程序在安装或执行时，需要在重启后使用的某些文件，此目录能将该类文件暂时存放起来，完成后再行删除</td></tr></tbody></table><p>根据以上各表列举的各目录及作用，如果我们要做一些实验和练习，需要创建一些临时文件，应该保存在哪里呢?</p><p>答案是用户的主目录或 <code>/tmp/</code> 临时目录。但是要小心有些目录中不能直接修改和保存数据，比如 <code>/proc/fn/sys/</code> 目录，因为它们是保存在内存中的，如果在这里写入数据，那么您的内存会越来越小，直至死机；<code>/boot/</code> 目录也不能保存额外数据，因为 <code>/boot/</code> 目录会单独分区作为启动分区，如果没有空闲空间，则会导致系统不能正常启动。</p><p>总之，Linux 要在合理的目录下进行操作和修改。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>目录名或文件名都是区分大小写的，如 dog、DOG 和 Dog 为 3 个不同的目录或文件。完整的目录或文件路径是由一连串的目录名所组成的，其中每一个目录由 <code>/</code> 来分隔。如 cat 的完整路径是 <code>/home/cat</code>。</p></div><h2 id="硬件设备名称" tabindex="-1"><a class="header-anchor" href="#硬件设备名称" aria-hidden="true">#</a> 硬件设备名称</h2><table><thead><tr><th>硬件设备</th><th>文件名称</th></tr></thead><tbody><tr><td>IDE 设备</td><td><code>/dev/hd[a-d]</code>，现在的 IDE 设备已经很少见了，因此一般的硬盘设备会以 <code>/dev/sd</code> 开头。</td></tr><tr><td>SCSI/SATA/U 盘</td><td><code>/dev/sd[a-p]</code>，一台主机可以有多块硬盘，因此系统采用 a~p 代表 16 块不同的硬盘。</td></tr><tr><td>软驱</td><td><code>/dev/fd[0-1]</code></td></tr><tr><td>打印机</td><td><code>/dev/lp[0-15]</code></td></tr><tr><td>光驱</td><td><code>/dev/cdrom</code></td></tr><tr><td>鼠标</td><td><code>/dev/mouse</code></td></tr><tr><td>磁带机</td><td><code>/dev/st0</code> 或 <code>/dev/ht0</code></td></tr></tbody></table>',27),a=[c];function i(n,s){return d(),e("div",null,a)}const l=t(r,[["render",i],["__file","dir.html.vue"]]);export{l as default};
