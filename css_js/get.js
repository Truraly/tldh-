//公用函数
//向服务器指定文件请求数据，然后将内容输出导函数上
function get(str,fun) {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp = new XMLHttpRequest();
  }
  else {
    // IE6, IE5 浏览器执行代码
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      //传出数据
      fun(xmlhttp.responseText);
    }
  }
  xmlhttp.open("GET", "/" + str + "?" + ti_td_s(), true);
  xmlhttp.send();
}
