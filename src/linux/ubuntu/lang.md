---
icon: language
date: 2019-11-22
category: Linux
---

# 语言切换

查看当前语言包: `locale -a`

中文语言是: `zh_CN.utf8`

## 安装中文语言包

```bash
sudo apt-get install language-pack-zh-hans
```

之后修改 `/etc/default/locale`，将 `LANG` 改为 `zh_CN.utf8`
