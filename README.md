## 分流规则

在圈 X 的「分流」资源中添加下列 Raw 链接，保留文件内的策略。它们是分流片段，不是完整配置，也不是重写资源。

| 文件 | Raw 链接 | 实际策略 |
| --- | --- | --- |
| `WhitelistDirect.snippet`（白名单分流（直连）） | [订阅链接](https://raw.githubusercontent.com/hahaen/my-qx/main/rules/WhitelistDirect.snippet) | 三个域名直连 |
| `iOSUpdateBlock.snippet`（iOS 更新屏蔽） | [订阅链接](https://raw.githubusercontent.com/hahaen/my-qx/main/rules/iOSUpdateBlock.snippet) | 拒绝连接四个 Apple 更新相关域名 |
| `MacOSUpdateBlock.snippet`（macOS 更新屏蔽） | [订阅链接](https://raw.githubusercontent.com/hahaen/my-qx/main/rules/MacOSUpdateBlock.snippet) | 拒绝文件中列出的 macOS 更新相关域名 |

## 重写配置

| 文件 | Raw 链接 | 实际策略 |
| --- | --- | --- |
| 暂无 | — | — |

## 脚本

每个脚本在“实际策略”列注明具体使用入口、功能及作用范围；按该脚本对应的入口使用，例如“工具 & 分析 → HTTP Backend”。

| 文件 | Raw 链接 | 实际策略 |
| --- | --- | --- |
| 暂无 | — | — |
