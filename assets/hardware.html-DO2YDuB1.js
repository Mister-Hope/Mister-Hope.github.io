import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as i,b as e}from"./app-C6d_tW6U.js";const l={},n=e(`<h1 id="硬件操作" tabindex="-1"><a class="header-anchor" href="#硬件操作"><span>硬件操作</span></a></h1><h2 id="df" tabindex="-1"><a class="header-anchor" href="#df"><span>df</span></a></h2><p><code>df</code> 命令查看硬盘信息。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> df</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Filesystem</span><span style="color:#032F62;--shiki-dark:#98C379;"> 1K-blocks</span><span style="color:#032F62;--shiki-dark:#98C379;"> Used</span><span style="color:#032F62;--shiki-dark:#98C379;"> Available</span><span style="color:#032F62;--shiki-dark:#98C379;"> Use%</span><span style="color:#032F62;--shiki-dark:#98C379;"> Mounted</span><span style="color:#032F62;--shiki-dark:#98C379;"> on</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/sda2</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 15115452</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 5012392</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 9949716</span><span style="color:#032F62;--shiki-dark:#98C379;"> 34%</span><span style="color:#032F62;--shiki-dark:#98C379;"> /</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/sda5</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 59631908</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 26545424</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 30008432</span><span style="color:#032F62;--shiki-dark:#98C379;"> 47%</span><span style="color:#032F62;--shiki-dark:#98C379;"> /home</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/sda1</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 147764</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 17370</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 122765</span><span style="color:#032F62;--shiki-dark:#98C379;"> 13%</span><span style="color:#032F62;--shiki-dark:#98C379;"> /boot</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="free" tabindex="-1"><a class="header-anchor" href="#free"><span>free</span></a></h2><p><code>free</code> 命令查看内存占用情况。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> free</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> total</span><span style="color:#032F62;--shiki-dark:#98C379;"> used</span><span style="color:#032F62;--shiki-dark:#98C379;"> free</span><span style="color:#032F62;--shiki-dark:#98C379;"> shared</span><span style="color:#032F62;--shiki-dark:#98C379;"> buffers</span><span style="color:#032F62;--shiki-dark:#98C379;"> cached</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Mem:</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 513712</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 503976</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 9736</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 5312</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 122916</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">-/+</span><span style="color:#032F62;--shiki-dark:#98C379;"> buffers/cache:</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 375748</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 137964</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Swap:</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 1052248</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 104712</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 947536</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="硬盘" tabindex="-1"><a class="header-anchor" href="#硬盘"><span>硬盘</span></a></h2><p>文件<code>/etc/fstab</code> 配置系统启动时要挂载的设备。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>LABEL=/12               /               ext3        defaults        1   1</span></span>
<span class="line"><span>LABEL=/home             /home           ext3        defaults        1   2</span></span>
<span class="line"><span>LABEL=/boot             /boot           ext3        defaults        1   2</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果一共有 6 个字段，含义依次如下。</p><ul><li>设备名: 与物理设备相关联的设备文件(或设备标签)的名字，比如说<code>/dev/hda1</code>(第一个 IDE 通道上第一个主设备分区)。</li><li>挂载点: 设备所连接到的文件系统树的目录。</li><li>文件系统类型: Linux 允许挂载许多文件系统类型。</li><li>选项: 文件系统可以通过各种各样的选项来挂载。</li><li>频率: 一位数字，指定是否和在什么时间用 dump 命令来备份一个文件系统。</li><li>次序: 一位数字，指定 fsck 命令按照什么次序来检查文件系统。</li></ul><h2 id="mount" tabindex="-1"><a class="header-anchor" href="#mount"><span>mount</span></a></h2><p><code>mount</code> 不带参数时，显示当前挂载的文件系统。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> mount</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/sda2</span><span style="color:#032F62;--shiki-dark:#98C379;"> on</span><span style="color:#032F62;--shiki-dark:#98C379;"> /</span><span style="color:#032F62;--shiki-dark:#98C379;"> type</span><span style="color:#032F62;--shiki-dark:#98C379;"> ext3</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (rw)</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">proc</span><span style="color:#032F62;--shiki-dark:#98C379;"> on</span><span style="color:#032F62;--shiki-dark:#98C379;"> /proc</span><span style="color:#032F62;--shiki-dark:#98C379;"> type</span><span style="color:#032F62;--shiki-dark:#98C379;"> proc</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (rw)</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sysfs</span><span style="color:#032F62;--shiki-dark:#98C379;"> on</span><span style="color:#032F62;--shiki-dark:#98C379;"> /sys</span><span style="color:#032F62;--shiki-dark:#98C379;"> type</span><span style="color:#032F62;--shiki-dark:#98C379;"> sysfs</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (rw)</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">devpts</span><span style="color:#032F62;--shiki-dark:#98C379;"> on</span><span style="color:#032F62;--shiki-dark:#98C379;"> /dev/pts</span><span style="color:#032F62;--shiki-dark:#98C379;"> type</span><span style="color:#032F62;--shiki-dark:#98C379;"> devpts</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (rw,gid=5,mode=620)</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/sda5</span><span style="color:#032F62;--shiki-dark:#98C379;"> on</span><span style="color:#032F62;--shiki-dark:#98C379;"> /home</span><span style="color:#032F62;--shiki-dark:#98C379;"> type</span><span style="color:#032F62;--shiki-dark:#98C379;"> ext3</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (rw)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个列表的格式是: 设备 on 挂载点 type 文件系统类型(可选的)。</p><p><code>mount</code> 带参数时，用于将设备文件挂载到挂载点，<code>-t</code> 参数用来指定文件系统类型。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> mount</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="color:#032F62;--shiki-dark:#98C379;"> iso9660</span><span style="color:#032F62;--shiki-dark:#98C379;"> /dev/hdc</span><span style="color:#032F62;--shiki-dark:#98C379;"> /mnt/cdrom</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># 挂载一个iso文件</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> mount</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="color:#032F62;--shiki-dark:#98C379;"> iso9660</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -o</span><span style="color:#032F62;--shiki-dark:#98C379;"> loop</span><span style="color:#032F62;--shiki-dark:#98C379;"> image.iso</span><span style="color:#032F62;--shiki-dark:#98C379;"> /mnt/iso_image</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="umount" tabindex="-1"><a class="header-anchor" href="#umount"><span>umount</span></a></h2><p><code>umount</code> 命令用来卸载设备。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">umount</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [设备名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">umount</span><span style="color:#032F62;--shiki-dark:#98C379;"> /dev/hdc</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fdisk" tabindex="-1"><a class="header-anchor" href="#fdisk"><span>fdisk</span></a></h2><p><code>fdisk</code> 命令用于格式化磁盘。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> umount</span><span style="color:#032F62;--shiki-dark:#98C379;"> /dev/sdb1</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> fdisk</span><span style="color:#032F62;--shiki-dark:#98C379;"> /dev/sdb</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mkfs" tabindex="-1"><a class="header-anchor" href="#mkfs"><span>mkfs</span></a></h2><p><code>mkfs</code> 命令用于在一个设备上新建文件系统。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> mkfs</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="color:#032F62;--shiki-dark:#98C379;"> ext3</span><span style="color:#032F62;--shiki-dark:#98C379;"> /dev/sdb1</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> mkfs</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="color:#032F62;--shiki-dark:#98C379;"> vfat</span><span style="color:#032F62;--shiki-dark:#98C379;"> /dev/sdb1</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fsck" tabindex="-1"><a class="header-anchor" href="#fsck"><span>fsck</span></a></h2><p><code>fsck</code> 命令用于检查(修复)文件系统。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> fsck</span><span style="color:#032F62;--shiki-dark:#98C379;"> /dev/sdb1</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="dd" tabindex="-1"><a class="header-anchor" href="#dd"><span>dd</span></a></h2><p><code>dd</code> 命令用于将大型数据块，从一个磁盘复制到另一个磁盘。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> dd</span><span style="color:#032F62;--shiki-dark:#98C379;"> if=input_file</span><span style="color:#032F62;--shiki-dark:#98C379;"> of=output_file</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [bs=block_size [count=blocks]]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># 将 /dev/sdb 的所有数据复制到 /dev/sdc</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> dd</span><span style="color:#032F62;--shiki-dark:#98C379;"> if=/dev/sdb</span><span style="color:#032F62;--shiki-dark:#98C379;"> of=/dev/sdc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># 将 /dev/sdb 的所有数据拷贝到一个镜像文件</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> dd</span><span style="color:#032F62;--shiki-dark:#98C379;"> if=/dev/sdb</span><span style="color:#032F62;--shiki-dark:#98C379;"> of=flash_drive.img</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># 从cdrom制作一个iso文件</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> dd</span><span style="color:#032F62;--shiki-dark:#98C379;"> if=/dev/cdrom</span><span style="color:#032F62;--shiki-dark:#98C379;"> of=ubuntu.iso</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dmidecode" tabindex="-1"><a class="header-anchor" href="#dmidecode"><span>dmidecode</span></a></h2><p><code>dmidecode</code> 命令用于输出 BIOS 信息。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> dmidecode</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上命令会输出全部 BIOS 信息。为了便于查看，往往需要指定所需信息的类别。</p><ul><li>0 BIOS</li><li>1 System</li><li>2 Base Board</li><li>3 Chassis 4 Processor</li><li>5 Memory Controller</li><li>6 Memory Module</li><li>7 Cache</li><li>8 Port Connector</li><li>9 System Slots</li><li>10 On Board Devices</li><li>11 OEM Strings</li><li>12 System Configuration Options</li><li>13 BIOS Language</li><li>14 Group Associations</li><li>15 System Event Log</li><li>16 Physical Memory Array</li><li>17 Memory Device</li><li>18 32-bit Memory Error</li><li>19 Memory Array Mapped Address</li><li>20 Memory Device Mapped Address</li><li>21 Built-in Pointing Device</li><li>22 Portable Battery</li><li>23 System Reset</li><li>24 Hardware Security</li><li>25 System Power Controls</li><li>26 Voltage Probe</li><li>27 Cooling Device</li><li>28 Temperature Probe</li><li>29 Electrical Current Probe</li><li>30 Out-of-band Remote Access</li><li>31 Boot Integrity Services</li><li>32 System Boot</li><li>33 64-bit Memory Error</li><li>34 Management Device</li><li>35 Management Device Component</li><li>36 Management Device Threshold Data</li><li>37 Memory Channel</li><li>38 IPMI Device</li><li>39 Power Supply</li></ul><p>查看内存信息的命令如下。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> dmidecode</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 17</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># 或者</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> dmidecode</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --type</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 17</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是其他一些选项。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># 查看BIOS信息</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> dmidecode</span><span style="color:#032F62;--shiki-dark:#98C379;"> –t</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># 查看CPU信息</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> dmidecode</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 4</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>dmidecode</code> 也支持关键词查看，关键词与类别的对应关系如下。</p><ul><li>bios 0, 13</li><li>system 1, 12, 15, 23, 32</li><li>baseboard 2, 10</li><li>chassis 3</li><li>processor 4</li><li>memory 5, 6, 16, 17</li><li>cache 7</li><li>connector 8</li><li>slot 9</li></ul><p>查看系统信息的命令如下。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> dmidecode</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="color:#032F62;--shiki-dark:#98C379;"> system</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="lspci" tabindex="-1"><a class="header-anchor" href="#lspci"><span>lspci</span></a></h2><p><code>lspci</code> 命令列出本机的所有 PCI 设备。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">lspci</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令输出信息的格式如下。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">03:00.0</span><span style="color:#032F62;--shiki-dark:#98C379;"> Unassigned</span><span style="color:#032F62;--shiki-dark:#98C379;"> class</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [ff00]: Realtek Semiconductor Co., Ltd. RTS5209 PCI Express Card Reader (</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">rev</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 01</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出信息一共分成三个字段。</p><ul><li>Field 1: PCI bus slot 的编号</li><li>Field 2: PCI slot 的名字</li><li>Field 3: 设备名和厂商名</li></ul><p>如果想查看更详细信息，可以使用下面的命令。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">lspci</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -vmm</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="lsusb" tabindex="-1"><a class="header-anchor" href="#lsusb"><span>lsusb</span></a></h2><p><code>lsusb</code> 命令用于操作 USB 端口。</p><p>下面命令列出本机所有 USB 端口。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">lsusb</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它的输出格式如下。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Bus</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 002</span><span style="color:#032F62;--shiki-dark:#98C379;"> Device</span><span style="color:#032F62;--shiki-dark:#98C379;"> 003:</span><span style="color:#032F62;--shiki-dark:#98C379;"> ID</span><span style="color:#032F62;--shiki-dark:#98C379;"> 0781:5567</span><span style="color:#032F62;--shiki-dark:#98C379;"> SanDisk</span><span style="color:#032F62;--shiki-dark:#98C379;"> Corp.</span><span style="color:#032F62;--shiki-dark:#98C379;"> Cruzer</span><span style="color:#032F62;--shiki-dark:#98C379;"> Blade</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>各个字段的含义如下。</p><ul><li>Bus 002 : bus 编号</li><li>Device 003: bus 002 连接的第三个设备</li><li>ID 0781:5567: 当前设备的编号，冒号前是厂商编号，冒号后是设备编号</li><li>SanDisk Corp. Cruzer Blade: 厂商和设备名</li></ul><p>找出本机有多少个 USB 接口可用。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> find</span><span style="color:#032F62;--shiki-dark:#98C379;"> /dev/bus/</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/bus/</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/bus/usb</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/bus/usb/002</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/bus/usb/002/006</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/bus/usb/002/005</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/bus/usb/002/004</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/bus/usb/002/002</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/bus/usb/002/001</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/bus/usb/001</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/bus/usb/001/007</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/bus/usb/001/003</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/bus/usb/001/002</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/dev/bus/usb/001/001</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看某个 USB 设备的详细情况。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">lsusb</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -D</span><span style="color:#032F62;--shiki-dark:#98C379;"> /dev/bus/usb/002/005</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看所有设备的详细情况。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">lsusb</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -v</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 USB 端口的版本。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">lsusb</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -v</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> grep</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -i</span><span style="color:#032F62;--shiki-dark:#98C379;"> bcdusb</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,71),d=[n];function r(o,p){return a(),i("div",null,d)}const k=s(l,[["render",r],["__file","hardware.html.vue"]]),h=JSON.parse('{"path":"/linux/bash/archives/hardware.html","title":"硬件操作","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","description":"硬件操作 df df 命令查看硬盘信息。 free free 命令查看内存占用情况。 硬盘 文件/etc/fstab 配置系统启动时要挂载的设备。 输出结果一共有 6 个字段，含义依次如下。 设备名: 与物理设备相关联的设备文件(或设备标签)的名字，比如说/dev/hda1(第一个 IDE 通道上第一个主设备分区)。 挂载点: 设备所连接到的文件系统树...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/archives/hardware.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"硬件操作"}],["meta",{"property":"og:description","content":"硬件操作 df df 命令查看硬盘信息。 free free 命令查看内存占用情况。 硬盘 文件/etc/fstab 配置系统启动时要挂载的设备。 输出结果一共有 6 个字段，含义依次如下。 设备名: 与物理设备相关联的设备文件(或设备标签)的名字，比如说/dev/hda1(第一个 IDE 通道上第一个主设备分区)。 挂载点: 设备所连接到的文件系统树..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T05:21:25.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T05:21:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"硬件操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T05:21:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"df","slug":"df","link":"#df","children":[]},{"level":2,"title":"free","slug":"free","link":"#free","children":[]},{"level":2,"title":"硬盘","slug":"硬盘","link":"#硬盘","children":[]},{"level":2,"title":"mount","slug":"mount","link":"#mount","children":[]},{"level":2,"title":"umount","slug":"umount","link":"#umount","children":[]},{"level":2,"title":"fdisk","slug":"fdisk","link":"#fdisk","children":[]},{"level":2,"title":"mkfs","slug":"mkfs","link":"#mkfs","children":[]},{"level":2,"title":"fsck","slug":"fsck","link":"#fsck","children":[]},{"level":2,"title":"dd","slug":"dd","link":"#dd","children":[]},{"level":2,"title":"dmidecode","slug":"dmidecode","link":"#dmidecode","children":[]},{"level":2,"title":"lspci","slug":"lspci","link":"#lspci","children":[]},{"level":2,"title":"lsusb","slug":"lsusb","link":"#lsusb","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1712467285000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":3.9,"words":1169},"filePathRelative":"linux/bash/archives/hardware.md","localizedDate":"2020年6月4日","excerpt":"","autoDesc":true}');export{k as comp,h as data};
