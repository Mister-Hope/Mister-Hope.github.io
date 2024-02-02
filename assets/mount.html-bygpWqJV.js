import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as e,b as o}from"./app-odku2cZ-.js";const c={},n=o('<h1 id="linux-挂载" tabindex="-1"><a class="header-anchor" href="#linux-挂载"><span>Linux 挂载</span></a></h1><p>前面讲过，Linux 系统中“一切皆文件”，所有文件都放置在以根目录为树根的树形目录结构中。在 Linux 看来，任何硬件设备也都是文件，它们各有自己的一套文件系统(文件目录结构)。</p><p>因此产生的问题是，当在 Linux 系统中使用这些硬件设备时，只有将 Linux 本身的文件目录与硬件设备的文件目录合二为一，硬件设备才能为我们所用。合二为一的过程称为“挂载”。</p><p>如果不挂载，通过 Linux 系统中的图形界面系统可以查看找到硬件设备，但命令行方式无法找到。</p><p>挂载，指的就是将设备文件中的顶级目录连接到 Linux 根目录下的某一目录(最好是空目录)，访问此目录就等同于访问设备文件。</p><p>纠正一个误区，并不是根目录下任何一个目录都可以作为挂载点，由于挂载操作会使得原有目录中文件被隐藏，因此根目录以及系统原有目录都不要作为挂载点，会造成系统异常甚至崩溃，挂载点最好是新建的空目录。</p><p>举个例子，我们想通过命令行访问某个 U 盘中的数据，我们要在根目录下新建一个目录 <code>/sdb-u</code>，通过挂载命令将 U 盘文件系统挂载到此目录，</p><p>前面讲过，根目录下的 <code>/dev/</code> 目录文件负责所有的硬件设备文件，事实上，当 U 盘插入 Linux 后，系统也确实会给 U 盘分配一个目录文件(比如 sdb1)，就位于 <code>/dev/</code> 目录下 (<code>/dev/sdb1</code>)，但无法通过 <code>/dev/sdb1/</code> 直接访问 U 盘数据，访问此目录只会提供给您此设备的一些基本信息(比如容量)。</p><p>总之，Linux 系统使用任何硬件设备，都必须将设备文件与已有目录文件进行挂载。</p><h2 id="linux-硬件设备文件名称" tabindex="-1"><a class="header-anchor" href="#linux-硬件设备文件名称"><span>Linux 硬件设备文件名称</span></a></h2><table><thead><tr><th>硬件设备</th><th>文件名称</th></tr></thead><tbody><tr><td>IDE 设备</td><td><code>/dev/hd\\[a-d]</code>，现在的 IDE 设备已经很少见了，因此一般的硬盘设备会以 <code>/dev/sd</code> 开头。</td></tr><tr><td>SCSI / SATA / U 盘</td><td><code>/dev/sd\\[a-p]</code>，一台主机可以有多块硬盘，因此系统采用 a~p 代表 16 块不同的硬盘。</td></tr><tr><td>软驱</td><td><code>/dev/fd\\[0-1]</code></td></tr><tr><td>打印机</td><td><code>/dev/lp\\[0-15]</code></td></tr><tr><td>光驱</td><td><code>/dev/cdrom</code></td></tr><tr><td>鼠标</td><td><code>/dev/mouse</code></td></tr><tr><td>磁带机</td><td><code>/dev/st0</code> 或 <code>/dev/ht0</code></td></tr></tbody></table>',11),r=[n];function a(s,p){return t(),e("div",null,r)}const u=d(c,[["render",a],["__file","mount.html.vue"]]);export{u as default};
