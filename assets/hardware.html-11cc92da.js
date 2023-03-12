import{_ as s,X as a,Y as n,a3 as e}from"./framework-a91f7991.js";const l={},i=e(`<h1 id="硬件操作" tabindex="-1"><a class="header-anchor" href="#硬件操作" aria-hidden="true">#</a> 硬件操作</h1><h2 id="df" tabindex="-1"><a class="header-anchor" href="#df" aria-hidden="true">#</a> df</h2><p><code>df</code> 命令查看硬盘信息。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">df</span>
Filesystem 1K-blocks Used Available Use% Mounted on
/dev/sda2 <span class="token number">15115452</span> <span class="token number">5012392</span> <span class="token number">9949716</span> <span class="token number">34</span>% /
/dev/sda5 <span class="token number">59631908</span> <span class="token number">26545424</span> <span class="token number">30008432</span> <span class="token number">47</span>% /home
/dev/sda1 <span class="token number">147764</span> <span class="token number">17370</span> <span class="token number">122765</span> <span class="token number">13</span>% /boot
</code></pre></div><h2 id="free" tabindex="-1"><a class="header-anchor" href="#free" aria-hidden="true">#</a> free</h2><p><code>free</code> 命令查看内存占用情况。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">free</span>
 total used <span class="token function">free</span> shared buffers cached
Mem: <span class="token number">513712</span> <span class="token number">503976</span> <span class="token number">9736</span> <span class="token number">0</span> <span class="token number">5312</span> <span class="token number">122916</span>
-/+ buffers/cache: <span class="token number">375748</span> <span class="token number">137964</span>
Swap: <span class="token number">1052248</span> <span class="token number">104712</span> <span class="token number">947536</span>
</code></pre></div><h2 id="硬盘" tabindex="-1"><a class="header-anchor" href="#硬盘" aria-hidden="true">#</a> 硬盘</h2><p>文件<code>/etc/fstab</code> 配置系统启动时要挂载的设备。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>LABEL=/12               /               ext3        defaults        1   1
LABEL=/home             /home           ext3        defaults        1   2
LABEL=/boot             /boot           ext3        defaults        1   2
</code></pre></div><p>输出结果一共有 6 个字段，含义依次如下。</p><ul><li>设备名: 与物理设备相关联的设备文件(或设备标签)的名字，比如说<code>/dev/hda1</code>(第一个 IDE 通道上第一个主设备分区)。</li><li>挂载点: 设备所连接到的文件系统树的目录。</li><li>文件系统类型: Linux 允许挂载许多文件系统类型。</li><li>选项: 文件系统可以通过各种各样的选项来挂载。</li><li>频率: 一位数字，指定是否和在什么时间用 dump 命令来备份一个文件系统。</li><li>次序: 一位数字，指定 fsck 命令按照什么次序来检查文件系统。</li></ul><h2 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> mount</h2><p><code>mount</code> 不带参数时，显示当前挂载的文件系统。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mount</span>
/dev/sda2 on / <span class="token builtin class-name">type</span> ext3 <span class="token punctuation">(</span>rw<span class="token punctuation">)</span>
proc on /proc <span class="token builtin class-name">type</span> proc <span class="token punctuation">(</span>rw<span class="token punctuation">)</span>
sysfs on /sys <span class="token builtin class-name">type</span> sysfs <span class="token punctuation">(</span>rw<span class="token punctuation">)</span>
devpts on /dev/pts <span class="token builtin class-name">type</span> devpts <span class="token punctuation">(</span>rw,gid<span class="token operator">=</span><span class="token number">5</span>,mode<span class="token operator">=</span><span class="token number">620</span><span class="token punctuation">)</span>
/dev/sda5 on /home <span class="token builtin class-name">type</span> ext3 <span class="token punctuation">(</span>rw<span class="token punctuation">)</span>
</code></pre></div><p>这个列表的格式是: 设备 on 挂载点 type 文件系统类型(可选的)。</p><p><code>mount</code> 带参数时，用于将设备文件挂载到挂载点，<code>-t</code> 参数用来指定文件系统类型。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mount</span> <span class="token parameter variable">-t</span> iso9660 /dev/hdc /mnt/cdrom

<span class="token comment"># 挂载一个iso文件</span>
$ <span class="token function">mount</span> <span class="token parameter variable">-t</span> iso9660 <span class="token parameter variable">-o</span> loop image.iso /mnt/iso_image
</code></pre></div><h2 id="umount" tabindex="-1"><a class="header-anchor" href="#umount" aria-hidden="true">#</a> umount</h2><p><code>umount</code> 命令用来卸载设备。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">umount</span> <span class="token punctuation">[</span>设备名<span class="token punctuation">]</span>

<span class="token function">umount</span> /dev/hdc
</code></pre></div><h2 id="fdisk" tabindex="-1"><a class="header-anchor" href="#fdisk" aria-hidden="true">#</a> fdisk</h2><p><code>fdisk</code> 命令用于格式化磁盘。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">umount</span> /dev/sdb1
<span class="token function">sudo</span> <span class="token function">fdisk</span> /dev/sdb
</code></pre></div><h2 id="mkfs" tabindex="-1"><a class="header-anchor" href="#mkfs" aria-hidden="true">#</a> mkfs</h2><p><code>mkfs</code> 命令用于在一个设备上新建文件系统。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkfs</span> <span class="token parameter variable">-t</span> ext3 /dev/sdb1
<span class="token function">sudo</span> <span class="token function">mkfs</span> <span class="token parameter variable">-t</span> vfat /dev/sdb1
</code></pre></div><h2 id="fsck" tabindex="-1"><a class="header-anchor" href="#fsck" aria-hidden="true">#</a> fsck</h2><p><code>fsck</code> 命令用于检查(修复)文件系统。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">fsck</span> /dev/sdb1
</code></pre></div><h2 id="dd" tabindex="-1"><a class="header-anchor" href="#dd" aria-hidden="true">#</a> dd</h2><p><code>dd</code> 命令用于将大型数据块，从一个磁盘复制到另一个磁盘。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>input_file <span class="token assign-left variable">of</span><span class="token operator">=</span>output_file <span class="token punctuation">[</span>bs<span class="token operator">=</span>block_size <span class="token punctuation">[</span>count<span class="token operator">=</span>blocks<span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token comment"># 将 /dev/sdb 的所有数据复制到 /dev/sdc</span>
$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sdb <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdc

<span class="token comment"># 将 /dev/sdb 的所有数据拷贝到一个镜像文件</span>
$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sdb <span class="token assign-left variable">of</span><span class="token operator">=</span>flash_drive.img

<span class="token comment"># 从cdrom制作一个iso文件</span>
$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/cdrom <span class="token assign-left variable">of</span><span class="token operator">=</span>ubuntu.iso
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dmidecode" tabindex="-1"><a class="header-anchor" href="#dmidecode" aria-hidden="true">#</a> dmidecode</h2><p><code>dmidecode</code> 命令用于输出 BIOS 信息。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dmidecode
</code></pre></div><p>以上命令会输出全部 BIOS 信息。为了便于查看，往往需要指定所需信息的类别。</p><ul><li>0 BIOS</li><li>1 System</li><li>2 Base Board</li><li>3 Chassis 4 Processor</li><li>5 Memory Controller</li><li>6 Memory Module</li><li>7 Cache</li><li>8 Port Connector</li><li>9 System Slots</li><li>10 On Board Devices</li><li>11 OEM Strings</li><li>12 System Configuration Options</li><li>13 BIOS Language</li><li>14 Group Associations</li><li>15 System Event Log</li><li>16 Physical Memory Array</li><li>17 Memory Device</li><li>18 32-bit Memory Error</li><li>19 Memory Array Mapped Address</li><li>20 Memory Device Mapped Address</li><li>21 Built-in Pointing Device</li><li>22 Portable Battery</li><li>23 System Reset</li><li>24 Hardware Security</li><li>25 System Power Controls</li><li>26 Voltage Probe</li><li>27 Cooling Device</li><li>28 Temperature Probe</li><li>29 Electrical Current Probe</li><li>30 Out-of-band Remote Access</li><li>31 Boot Integrity Services</li><li>32 System Boot</li><li>33 64-bit Memory Error</li><li>34 Management Device</li><li>35 Management Device Component</li><li>36 Management Device Threshold Data</li><li>37 Memory Channel</li><li>38 IPMI Device</li><li>39 Power Supply</li></ul><p>查看内存信息的命令如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> dmidecode <span class="token parameter variable">-t</span> <span class="token number">17</span>
<span class="token comment"># 或者</span>
$ dmidecode <span class="token parameter variable">--type</span> <span class="token number">17</span>
</code></pre></div><p>以下是其他一些选项。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看BIOS信息</span>
$ <span class="token function">sudo</span> dmidecode –t <span class="token number">0</span>

<span class="token comment"># 查看CPU信息</span>
$ <span class="token function">sudo</span> dmidecode <span class="token parameter variable">-t</span> <span class="token number">4</span>
</code></pre></div><p><code>dmidecode</code> 也支持关键词查看，关键词与类别的对应关系如下。</p><ul><li>bios 0, 13</li><li>system 1, 12, 15, 23, 32</li><li>baseboard 2, 10</li><li>chassis 3</li><li>processor 4</li><li>memory 5, 6, 16, 17</li><li>cache 7</li><li>connector 8</li><li>slot 9</li></ul><p>查看系统信息的命令如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dmidecode <span class="token parameter variable">-t</span> system
</code></pre></div><h2 id="lspci" tabindex="-1"><a class="header-anchor" href="#lspci" aria-hidden="true">#</a> lspci</h2><p><code>lspci</code> 命令列出本机的所有 PCI 设备。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>lspci
</code></pre></div><p>该命令输出信息的格式如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>03:00.0 Unassigned class <span class="token punctuation">[</span>ff00<span class="token punctuation">]</span>: Realtek Semiconductor Co., Ltd. RTS5209 PCI Express Card Reader <span class="token punctuation">(</span>rev 01<span class="token punctuation">)</span>
</code></pre></div><p>输出信息一共分成三个字段。</p><ul><li>Field 1: PCI bus slot 的编号</li><li>Field 2: PCI slot 的名字</li><li>Field 3: 设备名和厂商名</li></ul><p>如果想查看更详细信息，可以使用下面的命令。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>lspci <span class="token parameter variable">-vmm</span>
</code></pre></div><h2 id="lsusb" tabindex="-1"><a class="header-anchor" href="#lsusb" aria-hidden="true">#</a> lsusb</h2><p><code>lsusb</code> 命令用于操作 USB 端口。</p><p>下面命令列出本机所有 USB 端口。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>lsusb
</code></pre></div><p>它的输出格式如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Bus 002 Device 003: ID 0781:5567 SanDisk Corp. Cruzer Blade
</code></pre></div><p>各个字段的含义如下。</p><ul><li>Bus 002 : bus 编号</li><li>Device 003: bus 002 连接的第三个设备</li><li>ID 0781:5567: 当前设备的编号，冒号前是厂商编号，冒号后是设备编号</li><li>SanDisk Corp. Cruzer Blade: 厂商和设备名</li></ul><p>找出本机有多少个 USB 接口可用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">find</span> /dev/bus/
/dev/bus/
/dev/bus/usb
/dev/bus/usb/002
/dev/bus/usb/002/006
/dev/bus/usb/002/005
/dev/bus/usb/002/004
/dev/bus/usb/002/002
/dev/bus/usb/002/001
/dev/bus/usb/001
/dev/bus/usb/001/007
/dev/bus/usb/001/003
/dev/bus/usb/001/002
/dev/bus/usb/001/001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看某个 USB 设备的详细情况。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>lsusb <span class="token parameter variable">-D</span> /dev/bus/usb/002/005
</code></pre></div><p>查看所有设备的详细情况。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>lsusb <span class="token parameter variable">-v</span>
</code></pre></div><p>查看 USB 端口的版本。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>lsusb <span class="token parameter variable">-v</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> bcdusb
</code></pre></div>`,71),o=[i];function c(t,p){return a(),n("div",null,o)}const r=s(l,[["render",c],["__file","hardware.html.vue"]]);export{r as default};
