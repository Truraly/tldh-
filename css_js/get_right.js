//获取刷新网站内容（右侧主体）
//文件：网站整理.mds


//将内容输出到网页
function print_out_right(str) {
  //确定要输出的地方
  var wwws = document.getElementsByClassName("wws")[0];
  //将字符串按行分割
  var strr = str.split("\n");
  //初始化要输出的东西
  var out_wwws = "";

  //获取内容行数
  var i = 0;
  for (; strr[i] != ""; i++) {
    //console.log("emm");
  }
  //按行判断并输出
  var yu = true;
  for (var j = 0; j <= i; j +=2) {
    var k = strr[j].split(" ");
    if (k[0] == "#") {
      if (yu == true) {
        yu = false;
      }
      else {
        //第一栏不用补
        out_wwws = out_wwws + '</div></div>';
      }
      //out_ulll = out_ulll + '<div class="l_l_i"><a href="http://tls.truraly.icu#' + k[1] + '"><img src="' + strr[j + 1] + '"><p>' + k[1] + '</p></a></div>';
      out_wwws = out_wwws + '<div class="cli"><div class="cli_t"><img src="' + strr[j + 1] + '"><a id="' + k[1] + '"><h3>' + k[1] + '</h3></a></div><div class="cli_s">';
    }
    else if (k[0] == "##") {
      if(k[2] == "0"){
        out_wwws = out_wwws + '<div class="cli_s_d"><a href="' + strr[j + 3] + '" target="root">' + '<img src="' + strr[j + 1] + '"><div class="cli_s_d_s"><strong>' + k[1] + '</strong><p>' + strr[j + 2] + '</p></div></a></div>';
      }
      else{
        out_wwws = out_wwws + '<div class="cli_s_d"><a href="' + strr[j + 3] + '" target="_blank">' + '<img src="' + strr[j + 1] + '"><div class="cli_s_d_s"><strong>' + k[1] + '</strong><p>' + strr[j + 2] + '</p></div></a></div>';
      }
      
    }
  }
  out_wwws = out_wwws + '</div></div>';
  //输出内容
  //ulll.innerHTML = out_ulll;
  wwws.innerHTML = out_wwws;
}


//修改建议通过在loadXMLDoc()添加参数决定执行不同的函数，来输出不同的界面