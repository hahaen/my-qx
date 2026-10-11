# my-qx

用于维护个人 Quantumult X 配置、分流规则、重写与脚本。当前为公开仓库，可通过 Raw 链接提供远程资源。

## 目录

| 目录 | 用途 |
| --- | --- |
| `config/` | 主配置文件，建议命名为 `quantumult-x.conf` |
| `rules/` | 自定义分流规则 |
| `rewrite/` | 重写配置 |
| `scripts/` | 自用脚本 |

目录中的 `.gitkeep` 仅用于保留空目录，无需导入圈 X。

## 后续放入本地配置

1. 从圈 X 导出现有配置，去除敏感内容后放入 `config/`。
2. 将独立规则、重写和脚本分别放入对应目录。
3. 订阅地址、节点密码、Cookie、Token 和 MITM 私钥等敏感内容保留在圈 X 本地或被 Git 忽略的 `local/` 目录，不提交到公开仓库。
4. 在圈 X 中导入配置并验证后，再提交更新。

本机仓库：`/Users/hahaen/mi/github/my-qx`。

```sh
cd /Users/hahaen/mi/github/my-qx
git status
git add config rules rewrite scripts README.md
git diff --cached
git commit -m "chore: 更新圈 X 配置"
git push origin main
```

## 远程资源链接

上传文件后，可在 GitHub 文件页面点击 **Raw**，将链接用于圈 X 对应的远程资源。

链接格式：`https://raw.githubusercontent.com/hahaen/my-qx/main/<目录>/<文件名>`。

当前目录仅有占位文件；实际配置、规则、重写和脚本上传后才能使用相应链接。不要将 GitHub 访问令牌写进配置链接。
