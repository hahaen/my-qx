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
| `ZfbTabDiagnostic.snippet`（ZFB 底栏诊断） | [订阅链接](https://raw.githubusercontent.com/hahaen/my-qx/main/rewrite/ZfbTabDiagnostic.snippet) | 通过「重写 → 规则资源」临时订阅。仅对 `mugw.alipay.com` 启用 MitM，检查响应中的底栏与理财标记并保留原响应。测试完成后停用。 |

## 脚本

每个脚本在“实际策略”列注明具体使用入口、功能及作用范围；按该脚本对应的入口使用，例如“工具 & 分析 → HTTP Backend”。

| 文件 | Raw 链接 | 实际策略 |
| --- | --- | --- |
| `ZfbTabDiagnostic.js`（ZFB 底栏标记检查） | [脚本链接](https://raw.githubusercontent.com/hahaen/my-qx/main/scripts/ZfbTabDiagnostic.js) | 使用入口：重写 → 规则资源 → `ZfbTabDiagnostic.snippet` 自动调用；功能：仅在圈 X「日志」输出状态码、响应格式及标记是否出现。 |
