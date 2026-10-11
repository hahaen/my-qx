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

文件名使用英文，每个片段开头均有中文用途说明；iOS 文件的四条规则使用 `reject`。两个更新屏蔽文件的重叠域名均使用 `reject`，按设备用途选择启用。规则会拒绝连接列出的域名，尚未在设备上验证完整的系统更新屏蔽效果。macOS 文件包含 Apple 服务相关域名，阻断范围以文件内容为准。

之前使用中文文件名的订阅，请改用以上英文文件名的链接。

远程分流配置语法参考 [Quantumult X 官方示例](https://github.com/crossutility/Quantumult-X/blob/master/sample.conf)。不要将 GitHub 访问令牌写进配置链接。
