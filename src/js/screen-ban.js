// Screen ban 测试屏幕分辨率是否达到需求
// Author: crrashh1542 / Date: 2022-9-2 / Version: 1.0

export default function banUser(std) {
    let resolution = document.body.clientWidth;
    if (resolution >= std) {
        console.log("[Screen Ban] 屏幕分辨率通过！");
    } else {
        let isAccess = confirm("我还未对您的屏幕分辨率进行适配呐~\n一定要继续吗？");
        if (isAccess) {
            console.log("[Screen Ban] 屏幕分辨率不通过！");
        } else {
            location.href="./error/screen.html"
        }
    }
}