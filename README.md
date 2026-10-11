# 自用 Quantumult X（圈 X）

用于维护个人 Quantumult X 配置、分流规则、重写与脚本。当前为私有仓库。

## 目录

| 目录 | 用途 |
| --- | --- |
| `config/` | 主配置文件，建议命名为 `quantumult-x.conf` |
| `rules/` | 自定义分流规则 |
| `rewrite/` | 重写配置 |
| `scripts/` | 自用脚本 |

目录中的 `.gitkeep` 仅用于保留空目录，无需导入圈 X。

## 后续放入本地配置

1. 从圈 X 导出现有配置，放入 `config/`。
2. 将独立规则、重写和脚本分别放入对应目录。
3. 检查订阅地址、节点密码、Cookie、Token 和 MITM 私钥等敏感内容；不需要同步的内容放入 `local/`。
4. 在圈 X 中导入配置并验证后，再提交更新。

本机仓库：`/Users/hahaen/mi/github/quantumult-x`。

```sh
cd /Users/hahaen/mi/github/quantumult-x
git status
git add config rules rewrite scripts README.md
git diff --cached
git commit -m "chore: 更新圈 X 配置"
git push origin main
```

私有仓库先用于备份与维护。后续如果需要免登录的远程资源链接，再单独整理可公开的规则与脚本；不要将 GitHub 访问令牌写进配置链接。
