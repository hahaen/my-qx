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

在圈 X 的「分流」资源中添加下列 Raw 链接，保留文件内的策略。它们是分流片段，不是完整配置，也不是重写资源。

| 文件 | Raw 链接 | 实际策略 |
| --- | --- | --- |
| `白名单分流.snippet` | [订阅链接](https://raw.githubusercontent.com/hahaen/my-qx/main/rules/%E7%99%BD%E5%90%8D%E5%8D%95%E5%88%86%E6%B5%81.snippet) | 三个域名直连 |
| `iOS屏蔽更新.snippet` | [订阅链接](https://raw.githubusercontent.com/hahaen/my-qx/main/rules/iOS%E5%B1%8F%E8%94%BD%E6%9B%B4%E6%96%B0.snippet) | 四个 Apple 域名直连；原文件名为“屏蔽更新”，但当前内容不屏蔽更新 |
| `Tunnelblick直连.snippet` | [订阅链接](https://raw.githubusercontent.com/hahaen/my-qx/main/rules/Tunnelblick%E7%9B%B4%E8%BF%9E.snippet) | 指定 Tunnelblick 服务器 IP 直连 |
| `MacOSUpdateBlock.snippet` | [订阅链接](https://raw.githubusercontent.com/hahaen/my-qx/main/rules/MacOSUpdateBlock.snippet) | 拒绝文件中列出的 macOS 更新相关域名 |

也可将以下四行加入现有配置的 `[filter_remote]` 段（已有该段时不要重复添加段标题）：

```ini
[filter_remote]
https://raw.githubusercontent.com/hahaen/my-qx/main/rules/%E7%99%BD%E5%90%8D%E5%8D%95%E5%88%86%E6%B5%81.snippet, tag=白名单分流, enabled=true
https://raw.githubusercontent.com/hahaen/my-qx/main/rules/iOS%E5%B1%8F%E8%94%BD%E6%9B%B4%E6%96%B0.snippet, tag=iOS更新域名直连, enabled=true
https://raw.githubusercontent.com/hahaen/my-qx/main/rules/Tunnelblick%E7%9B%B4%E8%BF%9E.snippet, tag=Tunnelblick直连, enabled=true
https://raw.githubusercontent.com/hahaen/my-qx/main/rules/MacOSUpdateBlock.snippet, tag=macOS更新屏蔽, enabled=true
```

四个片段均保留上传前的原始内容。`iOS屏蔽更新.snippet` 与 `MacOSUpdateBlock.snippet` 存在相同域名但策略相反，按设备用途选择启用，避免同时使用造成冲突。macOS 文件包含 Apple 服务相关域名，阻断范围以文件内容为准。

远程分流配置语法参考 [Quantumult X 官方示例](https://github.com/crossutility/Quantumult-X/blob/master/sample.conf)。不要将 GitHub 访问令牌写进配置链接。
