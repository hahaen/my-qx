// 检查 ZFB 网关响应格式与底栏相关标记，仅向圈 X 本地日志写入检查结果。
const body = $response.body;
const status = Number.isInteger($response.statusCode) ? $response.statusCode : "unknown";
let format = "non-text";
let tab = false;
let wealth = false;

try {
    if (typeof body === "string" && body.length > 0) {
        format = "text";
        try {
            JSON.parse(body);
            format = "json";
        } catch {
            // 保留文本分类，仍可检查可读标记。
        }
        tab = /"(?:tabbar|tab[_-]?list|home[_-]?tabs?|bottom[_-]?(?:nav(?:igation)?|tabs?))"\s*:/i.test(body);
        wealth = /理财|\\u7406\\u8d22|\b(?:wealth|licai)\b/i.test(body);
    }
    console.log(`[ZfbTabDiagnostic] status=${status} format=${format} tab=${tab} wealth=${wealth}`);
} finally {
    $done();
}
