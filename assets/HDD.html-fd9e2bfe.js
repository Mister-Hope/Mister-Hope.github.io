import{ac as e,G as p,H as l,ae as t}from"./framework-931f0218.js";const i={},o=t("<p>现代计算机大部分文件存储功能都是由机械硬盘这种设备提供的。(现在的 SSD 和闪存从概念和逻辑上都部分继承自机械硬盘，所以使用机械硬盘来进行理解也是没有问题的)</p><p>机械硬盘能实现信息存储的功能基于: 磁性存储介质能够被磁化，且磁化后会长久保留被磁化的状态，这种被磁化状态能够被读取出来，同时这种磁化状态还能够不断被修改，磁化正好有两个方向，所以可以表示 0 和 1。 于是硬盘就是把这种磁性存储介质做成一个个盘片，每一个盘片上都分布着数量巨大的磁性存储单位，使用磁性读写头对盘片进行写入和读取(从原理上类似黑胶唱片的播放)。</p><p>一个硬盘中的磁性存储单位数以亿计(1T 硬盘就有约 80 亿个)，所以需要一套规则来规划信息如何存取(比如一本存储信息的书我们还会分为页，每一页从上到下从左到右读取，同时还有章节目录) 于是就有了这些物理、逻辑概念:</p><ol><li><p>一个硬盘有多张盘片叠成，不同盘片有编号</p></li><li><p>每张盘片上的存储颗粒成环形一圈圈地排布，每一圈称为磁道，有编号</p></li><li><p>每条磁道上都有一圈存储颗粒，每 512 * 8(512 字节，0.5KB)个存储颗粒作为一个扇区，扇区是硬盘上存储的最小物理单位</p></li><li><p>N 个扇区可以组成簇，N 取决于不同的文件系统或是文件系统的配置，簇是此文件系统中的最小存储单位</p></li><li><p>所有盘面上的同一磁道构成一个圆柱，称为柱面，柱面是系统分区的最小单位</p></li></ol><p>磁头读写文件的时候，首先是分区读写的，由 inode 编号(区内唯一的编号)找到对应的磁道和扇区，然后一个柱面一个柱面地进行读写。机械硬盘的读写控制系统是一个令人叹为观止的精密工程(一个盘面上有几亿个存储单位，每个磁道宽度不到几十纳米，磁盘每分钟上万转)，同时关于读写的逻辑也是有诸多细节(比如扇区的编号并不是连续的)，非常有意思，可以自行搜索文章拓展阅读。</p>",5),c=[o];function _(n,s){return p(),l("div",null,c)}const r=e(i,[["render",_],["__file","HDD.html.vue"]]);export{r as default};
