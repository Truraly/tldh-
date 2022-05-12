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
  for (var j = 0; j <= i; j++) {
    var k = strr[j].split(" ");
    if (k[0] == "#") {
      if (yu == true) {
        yu = false;
      }
      else {
        //第一栏不用补
        out_wwws = out_wwws + '</div></div>';
      }
      out_wwws = out_wwws + '<div class="cli"><div class="cli_t"><img src="' + strr[j + 1] + '"><a id="' + k[1] + '"><h3>' + k[1] + '</h3></a></div><div class="cli_s">';
    }
    else if (k[0] == "##") {
      console.log("1");
      out_wwws = out_wwws + '<div class="cli_s_d"><div class="a_" ><img src="' + strr[j + 1] + '"><div class="cli_s_d_s"><strong>' + k[1] + '</strong>';
      j += 2;
      var kk = strr[j].split(" ");
      while (kk[0] != "#" && kk[0] != "##" && kk[0] != "+") {
        out_wwws = out_wwws + '<p>' + strr[j] + '</p>';
        j++;
        kk = strr[j].split(" ");
      }
      out_wwws = out_wwws + '</div></div></div>';
      if (k[0] == "+") {
        break;
      }
      j--;
    }
  }
  out_wwws = out_wwws + '</div></div>';
  //输出内容
  wwws.innerHTML = out_wwws;
}
