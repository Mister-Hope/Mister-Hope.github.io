const e=JSON.parse('{"key":"v-38d41630","path":"/software/mysql/compare.html","title":"5.7 与 8","lang":"zh-CN","frontmatter":{"title":"5.7 与 8","icon":"compare","author":"李欣桐","description":"MySql 5.7 和 MySql 8 的区别 NoSql 存储 Mysql 从 5.7 版本提供了 NoSQL 的存储功能,在 8.0 中这部分得到一些修改。 关系型数据库 (SQL) 通过外键关联来建立表与表之间的关系 非关系型数据库 (NOSQL) 通常指数据以对象的形式存储在数据库中，而对象之间的关系通过每个对象自身的属性来决定 隐藏索引 隐藏索引的特性对于性能调试非常有用,在 8.0 中,索引可以被隐藏和显示,当一个索引隐藏时,他不会被查询优化器所使用 也就是说可以隐藏一个索引,然后观察对数据库的影响.如果性能下降,就说明这个索引是有效的,于是将其”恢复显示”即可;如果数据库性能看不出变化,说明这个索引是多于的,可以删掉了 设置持久化 MySQL 的设置可以在运行时通过 SET GLOBAL 命令来更改，但是这种更改只会临时生效，到下次启动时数据库又会从配置文件中读取。 MySQL 8.0 新增了 SET PERSIST 命令， 例如: SET PERSIST max_connections = 500; MySQL 会将该命令的配置保存到数据目录下的 mysqld-auto.cnf 文件中，下次启动时会读取该文件，用其中的配置来覆盖缺省的配置文件。 UTF-8 编码 从 MySQL 8.0 开始，数据库的缺省编码将改为 utf8mb4，这个编码包含了所有 emoji 字符。 多少年来我们使用 MySQL 都要在编码方面小心翼翼，生怕忘了将缺省的 latin 改掉而出现乱码问题。从此以后就不用担心了。 通用表表达式 (Common Table Expressions) 看上去层次和区域都更加分明，改起来也更清晰的知道要改哪一部分。 窗口函数 (Window Functions) 从 8.0 开始，MySQL 新增了一个叫窗口函数的概念，它可以用来实现若干新的查询方式。 窗口函数有点像是 SUM()、COUNT() 那样的集合函数，但它并不会将多行查询结果合并为一行，而是将结果放回多行当中。也就是说，窗口函数是不需要 GROUP BY 的。 新的系统字典表 整合了存储有关数据库对象信息的事务数据字典，所有的元数据都用 InnoDB 引擎进行存储 安全和用户管理 新增 caching_sha2_password 认证插件，并且是默认的身份认证插件。性能和安全方面加强 权限支持 role 新增密码历史记录功能，限制重复使用以前的密码 innodb 增强 新增 INFORMATION_SCHEMA.INNODB_CACHED_INDEXES，查看每个索引缓存在 InnoDB 缓冲池中的索引页数 新增 INFORMATION_SCHEMA.INNODB_TABLESPACES_BRIEF 视图 新增了动态配置项 innodb_deadlock_detect，用来禁用死锁检查，因为在高并发系统中，当大量线程等待同一个锁时，死锁检查会大大拖慢数据库 支持使用 innodb_directories 选项在服务器脱机时将表空间文件移动或恢复到新位置 新增 innodb_dedicated_server，让 InnoDB 根据服务器上检测到的内存量自动配置 innodb_buffer_pool_size, innodb_log_file_size，innodb_flush_method。 innodb_dedicated_server: 自动配置缓冲池大小 直方图 MySQL 8.0 版本开始支持期待已久直方图。优化器会利用 column_statistics 的数据，判断字段的值的分布，得到更准确的执行计划。 可以使用 ANALYZE TABLE table_name [UPDATE HISTOGRAM on col_name with N BUCKETS |DROP HISTOGRAM ON clo_name] 来收集或者删除直方图信息 支持会话级别 SET_VAR 动态调整部分参数，有利于提升语句性能。 InnoDB 性能提升 废除 buffer pool mutex, 将原来一个 mutex 拆分成多个，提高并发拆分 LOCK_thd_list 和 LOCK_thd_remove 这两个 mutex，大约可提高线程链接效率 5%。 行缓存 MySQL 8.0 的优化器可以估算将要读取的行数，因此可以提供给存储引擎一个合适大小的 row buffer 来存储需要的数据。大批量的连续数据扫描的性能将受益于更大的 record buffer。 改进扫描性能 改进 InnoDB 范围查询的性能，可提升全表查询和范围查询 5-20%的性能。 成本模型 InnoDB 缓冲区可以估算缓存区中的有多少表和索引，这可以让优化器选择访问方式时知道数据是否可以存储在内存中还是必须存储到磁盘上。","head":[["meta",{"property":"og:url","content":"https://mrhope.site/software/mysql/compare.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"5.7 与 8"}],["meta",{"property":"og:description","content":"MySql 5.7 和 MySql 8 的区别 NoSql 存储 Mysql 从 5.7 版本提供了 NoSQL 的存储功能,在 8.0 中这部分得到一些修改。 关系型数据库 (SQL) 通过外键关联来建立表与表之间的关系 非关系型数据库 (NOSQL) 通常指数据以对象的形式存储在数据库中，而对象之间的关系通过每个对象自身的属性来决定 隐藏索引 隐藏索引的特性对于性能调试非常有用,在 8.0 中,索引可以被隐藏和显示,当一个索引隐藏时,他不会被查询优化器所使用 也就是说可以隐藏一个索引,然后观察对数据库的影响.如果性能下降,就说明这个索引是有效的,于是将其”恢复显示”即可;如果数据库性能看不出变化,说明这个索引是多于的,可以删掉了 设置持久化 MySQL 的设置可以在运行时通过 SET GLOBAL 命令来更改，但是这种更改只会临时生效，到下次启动时数据库又会从配置文件中读取。 MySQL 8.0 新增了 SET PERSIST 命令， 例如: SET PERSIST max_connections = 500; MySQL 会将该命令的配置保存到数据目录下的 mysqld-auto.cnf 文件中，下次启动时会读取该文件，用其中的配置来覆盖缺省的配置文件。 UTF-8 编码 从 MySQL 8.0 开始，数据库的缺省编码将改为 utf8mb4，这个编码包含了所有 emoji 字符。 多少年来我们使用 MySQL 都要在编码方面小心翼翼，生怕忘了将缺省的 latin 改掉而出现乱码问题。从此以后就不用担心了。 通用表表达式 (Common Table Expressions) 看上去层次和区域都更加分明，改起来也更清晰的知道要改哪一部分。 窗口函数 (Window Functions) 从 8.0 开始，MySQL 新增了一个叫窗口函数的概念，它可以用来实现若干新的查询方式。 窗口函数有点像是 SUM()、COUNT() 那样的集合函数，但它并不会将多行查询结果合并为一行，而是将结果放回多行当中。也就是说，窗口函数是不需要 GROUP BY 的。 新的系统字典表 整合了存储有关数据库对象信息的事务数据字典，所有的元数据都用 InnoDB 引擎进行存储 安全和用户管理 新增 caching_sha2_password 认证插件，并且是默认的身份认证插件。性能和安全方面加强 权限支持 role 新增密码历史记录功能，限制重复使用以前的密码 innodb 增强 新增 INFORMATION_SCHEMA.INNODB_CACHED_INDEXES，查看每个索引缓存在 InnoDB 缓冲池中的索引页数 新增 INFORMATION_SCHEMA.INNODB_TABLESPACES_BRIEF 视图 新增了动态配置项 innodb_deadlock_detect，用来禁用死锁检查，因为在高并发系统中，当大量线程等待同一个锁时，死锁检查会大大拖慢数据库 支持使用 innodb_directories 选项在服务器脱机时将表空间文件移动或恢复到新位置 新增 innodb_dedicated_server，让 InnoDB 根据服务器上检测到的内存量自动配置 innodb_buffer_pool_size, innodb_log_file_size，innodb_flush_method。 innodb_dedicated_server: 自动配置缓冲池大小 直方图 MySQL 8.0 版本开始支持期待已久直方图。优化器会利用 column_statistics 的数据，判断字段的值的分布，得到更准确的执行计划。 可以使用 ANALYZE TABLE table_name [UPDATE HISTOGRAM on col_name with N BUCKETS |DROP HISTOGRAM ON clo_name] 来收集或者删除直方图信息 支持会话级别 SET_VAR 动态调整部分参数，有利于提升语句性能。 InnoDB 性能提升 废除 buffer pool mutex, 将原来一个 mutex 拆分成多个，提高并发拆分 LOCK_thd_list 和 LOCK_thd_remove 这两个 mutex，大约可提高线程链接效率 5%。 行缓存 MySQL 8.0 的优化器可以估算将要读取的行数，因此可以提供给存储引擎一个合适大小的 row buffer 来存储需要的数据。大批量的连续数据扫描的性能将受益于更大的 record buffer。 改进扫描性能 改进 InnoDB 范围查询的性能，可提升全表查询和范围查询 5-20%的性能。 成本模型 InnoDB 缓冲区可以估算缓存区中的有多少表和索引，这可以让优化器选择访问方式时知道数据是否可以存储在内存中还是必须存储到磁盘上。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2021-02-20T13:07:02.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"李欣桐"}],["meta",{"property":"article:modified_time","content":"2021-02-20T13:07:02.000Z"}]]},"headers":[{"level":2,"title":"MySql 5.7 和 MySql 8 的区别","slug":"mysql-5-7-和-mysql-8-的区别","link":"#mysql-5-7-和-mysql-8-的区别","children":[]},{"level":2,"title":"MySql 5.7 和 8 的选择","slug":"mysql-5-7-和-8-的选择","link":"#mysql-5-7-和-8-的选择","children":[]}],"git":{"createdTime":1613645542000,"updatedTime":1613826422000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2}]},"readingTime":{"minutes":5.07,"words":1522},"filePathRelative":"software/mysql/compare.md","localizedDate":"2021年2月18日","excerpt":"<h2> MySql 5.7 和 MySql 8 的区别</h2>\\n<ol>\\n<li>\\n<p>NoSql 存储</p>\\n<p>Mysql 从 5.7 版本提供了 NoSQL 的存储功能,在 8.0 中这部分得到一些修改。</p>\\n<ul>\\n<li>\\n<p>关系型数据库 (SQL)\\n通过外键关联来建立表与表之间的关系</p>\\n</li>\\n<li>\\n<p>非关系型数据库 (NOSQL)\\n通常指数据以对象的形式存储在数据库中，而对象之间的关系通过每个对象自身的属性来决定</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>隐藏索引</p>\\n<p>隐藏索引的特性对于性能调试非常有用,在 8.0 中,索引可以被隐藏和显示,当一个索引隐藏时,他不会被查询优化器所使用</p>\\n<p>也就是说可以隐藏一个索引,然后观察对数据库的影响.如果性能下降,就说明这个索引是有效的,于是将其”恢复显示”即可;如果数据库性能看不出变化,说明这个索引是多于的,可以删掉了</p>\\n</li>\\n<li>\\n<p>设置持久化</p>\\n<p>MySQL 的设置可以在运行时通过 <code>SET GLOBAL</code> 命令来更改，但是这种更改只会临时生效，到下次启动时数据库又会从配置文件中读取。</p>\\n<p>MySQL 8.0 新增了 <code>SET PERSIST</code> 命令，\\n例如: <code>SET PERSIST max_connections = 500;</code>\\nMySQL 会将该命令的配置保存到数据目录下的 <code>mysqld-auto.cnf</code> 文件中，下次启动时会读取该文件，用其中的配置来覆盖缺省的配置文件。</p>\\n</li>\\n<li>\\n<p>UTF-8 编码</p>\\n<p>从 MySQL 8.0 开始，数据库的缺省编码将改为 utf8mb4，这个编码包含了所有 emoji 字符。\\n多少年来我们使用 MySQL 都要在编码方面小心翼翼，生怕忘了将缺省的 latin 改掉而出现乱码问题。从此以后就不用担心了。</p>\\n</li>\\n<li>\\n<p>通用表表达式 (Common Table Expressions)</p>\\n<p>看上去层次和区域都更加分明，改起来也更清晰的知道要改哪一部分。</p>\\n</li>\\n<li>\\n<p>窗口函数 (Window Functions)</p>\\n<p>从 8.0 开始，MySQL 新增了一个叫窗口函数的概念，它可以用来实现若干新的查询方式。</p>\\n<p>窗口函数有点像是 <code>SUM()</code>、<code>COUNT()</code> 那样的集合函数，但它并不会将多行查询结果合并为一行，而是将结果放回多行当中。也就是说，窗口函数是不需要 <code>GROUP BY</code> 的。</p>\\n</li>\\n<li>\\n<p>新的系统字典表</p>\\n<p>整合了存储有关数据库对象信息的事务数据字典，所有的元数据都用 <code>InnoDB</code> 引擎进行存储</p>\\n</li>\\n<li>\\n<p>安全和用户管理</p>\\n<p>新增 <code>caching_sha2_password</code> 认证插件，并且是默认的身份认证插件。性能和安全方面加强</p>\\n<p>权限支持 role</p>\\n<p>新增密码历史记录功能，限制重复使用以前的密码</p>\\n</li>\\n<li>\\n<p>innodb 增强</p>\\n<p>新增 <code>INFORMATION_SCHEMA.INNODB_CACHED_INDEXES</code>，查看每个索引缓存在 <code>InnoDB</code> 缓冲池中的索引页数</p>\\n<p>新增 <code>INFORMATION_SCHEMA.INNODB_TABLESPACES_BRIEF</code> 视图</p>\\n<p>新增了动态配置项 <code>innodb_deadlock_detect</code>，用来禁用死锁检查，因为在高并发系统中，当大量线程等待同一个锁时，死锁检查会大大拖慢数据库</p>\\n<p>支持使用 <code>innodb_directories</code> 选项在服务器脱机时将表空间文件移动或恢复到新位置</p>\\n<p>新增 <code>innodb_dedicated_server</code>，让 <code>InnoDB</code> 根据服务器上检测到的内存量自动配置 <code>innodb_buffer_pool_size</code>, <code>innodb_log_file_size，innodb_flush_method</code>。</p>\\n<p><code>innodb_dedicated_server</code>: 自动配置缓冲池大小</p>\\n</li>\\n<li>\\n<p>直方图</p>\\n<p>MySQL 8.0 版本开始支持期待已久直方图。优化器会利用 <code>column_statistics</code> 的数据，判断字段的值的分布，得到更准确的执行计划。</p>\\n<p>可以使用 <code>ANALYZE TABLE table_name [UPDATE HISTOGRAM on col_name with N BUCKETS |DROP HISTOGRAM ON clo_name]</code> 来收集或者删除直方图信息</p>\\n<p>支持会话级别 <code>SET_VAR</code> 动态调整部分参数，有利于提升语句性能。</p>\\n</li>\\n<li>\\n<p>InnoDB 性能提升</p>\\n<p>废除 <code>buffer pool mutex</code>, 将原来一个 <code>mutex</code> 拆分成多个，提高并发拆分 <code>LOCK_thd_list</code> 和 <code>LOCK_thd_remove</code> 这两个 <code>mutex</code>，大约可提高线程链接效率 5%。</p>\\n<ol>\\n<li>\\n<p>行缓存</p>\\n<p>MySQL 8.0 的优化器可以估算将要读取的行数，因此可以提供给存储引擎一个合适大小的 <code>row buffer</code> 来存储需要的数据。大批量的连续数据扫描的性能将受益于更大的 <code>record buffer</code>。</p>\\n</li>\\n<li>\\n<p>改进扫描性能</p>\\n<p>改进 <code>InnoDB</code> 范围查询的性能，可提升全表查询和范围查询 5-20%的性能。</p>\\n</li>\\n<li>\\n<p>成本模型</p>\\n<p><code>InnoDB</code> 缓冲区可以估算缓存区中的有多少表和索引，这可以让优化器选择访问方式时知道数据是否可以存储在内存中还是必须存储到磁盘上。</p>\\n</li>\\n</ol>\\n</li>\\n</ol>","autoDesc":true}');export{e as data};
