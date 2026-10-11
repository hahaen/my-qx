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

## 远程资源链接

在圈 X 的「分流」资源中添加下列 Raw 链接，保留文件内的策略。它们是分流片段，不是完整配置，也不是重写资源。

| 文件 | Raw 链接 | 实际策略 |
| --- | --- | --- |
| `WhitelistDirect.snippet`（白名单分流（直连）） | [订阅链接](https://raw.githubusercontent.com/hahaen/my-qx/main/rules/WhitelistDirect.snippet) | 三个域名直连 |
| `iOSUpdateBlock.snippet`（iOS 更新屏蔽） | [订阅链接](https://raw.githubusercontent.com/hahaen/my-qx/main/rules/iOSUpdateBlock.snippet) | 拒绝连接四个 Apple 更新相关域名 |
| `TunnelblickDirect.snippet`（Tunnelblick 直连） | [订阅链接](https://raw.githubusercontent.com/hahaen/my-qx/main/rules/TunnelblickDirect.snippet) | 指定 Tunnelblick 服务器 IP 直连 |
| `MacOSUpdateBlock.snippet`（macOS 更新屏蔽） | [订阅链接](https://raw.githubusercontent.com/hahaen/my-qx/main/rules/MacOSUpdateBlock.snippet) | 拒绝文件中列出的 macOS 更新相关域名 |

也可将以下四行加入现有配置的 `[filter_remote]` 段（已有该段时不要重复添加段标题）：

```ini
[filter_remote]
https://raw.githubusercontent.com/hahaen/my-qx/main/rules/WhitelistDirect.snippet, tag=WhitelistDirect, enabled=true
https://raw.githubusercontent.com/hahaen/my-qx/main/rules/iOSUpdateBlock.snippet, tag=iOSUpdateBlock, enabled=true
https://raw.githubusercontent.com/hahaen/my-qx/main/rules/TunnelblickDirect.snippet, tag=TunnelblickDirect, enabled=true
https://raw.githubusercontent.com/hahaen/my-qx/main/rules/MacOSUpdateBlock.snippet, tag=MacOSUpdateBlock, enabled=true
```
