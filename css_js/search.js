//输入框enter键搜索
function onKeyPress(e) {
    var keyCode = null;

    if(e.which)
        keyCode = e.which;
    else if(e.keyCode)
        keyCode = e.keyCode;
        
    if(keyCode == 13) {
        if(document.getElementById("sea").value!=''){
            window.open("https://www.baidu.com/s?wd="+document.getElementById("sea").value);
        }
        return false;
    }
    return true;
}