//获取刷新网站内容
//文件：网站整理.mds

//向服务器请求数据
function loadXMLDoc() {
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
      print_out(xmlhttp.responseText);
    }
  }
  xmlhttp.open("GET", "/网站整理.md?" + ti_td_s(), true);
  xmlhttp.send();
}

//将内容输出到网页
function print_out(str) {
  //确定2个要输出的地方
  var ulll = document.getElementsByClassName("ul_s")[0];
  var wwws = document.getElementsByClassName("wws")[0];

  var strr = str.split("\n");

  var out_ulll = "";
  var out_wwws = "";

  //获取内容行数
  var i = 0;
  for (; strr[i] != ""; i++) {
    //console.log("emm");
  }

  var yu = true;
  for (var j = 0; j <= i; j++) {
    var k = strr[j].split(" ");
    if (k[0] == "#") {
      if (yu == true) {
        yu = false;
      }
      else{
        //第一栏不用补
        out_wwws = out_wwws + '</div></div>';
      }
      out_ulll = out_ulll + '<div class="l_l_i"><a href="#' +  k[1]+'"><img src="'+strr[j + 1] + '"><p>' +k[1] + '</p></a></div>';
      out_wwws = out_wwws + '<div class="cli"><div class="cli_t"><img src="' + strr[j + 1] + '"><a id="' + k[1] + '"><h3>' + k[1] + '</h3></a></div><div class="cli_s">';
    }
    else if (k[0] == "##") {
      out_wwws = out_wwws +'<div class="cli_s_d"><a href="' + strr[j + 3] + '" target="_blank">'+'<img src="' + strr[j + 1] + '"><div class="cli_s_d_s"><strong>' + k[1] + '</strong><p>' + strr[j + 2] + '</p></div></a></div>';
    }
  }
  out_wwws=out_wwws+'</div></div>';
  //out_ulll=out_ulll+'<li><strong>功能不断更新中……</strong></li>';
  ulll.innerHTML = out_ulll;
  wwws.innerHTML = out_wwws;
}