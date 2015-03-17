// 確認必填資料
function checkRequireData(value) {
    return (value != null && value.replace(/ /gi, "").replace(/　/gi, "").length > 0)
}
// 確認是否為數值
function checkIsNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
// 檢查Email
function validateEmail(email) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}
// 檢查上傳檔案類型
// filename: xxx.jpg
// allowExtensions: "jpg, png"
function checkFileExtension(filename, allowExtensions)
{
    var extension = filename.split(".").pop().toLowerCase();
    var allow = checkExtensions.split(",");

    if (allow != null && allow.length > 0)
    {
        for (var i = 0; i < allow.length; i++) {
            if (extension == allow[i]) { return true; }
        }
    }
    
    return false;
}
