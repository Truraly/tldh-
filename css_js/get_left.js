//将内容输出到网页
function print_out_left(str) {
  //获取1个要输出的地方
  var ulll = document.getElementsByClassName("left_list")[0];
  //将字符串按行分割
  var strr = str.split("\n");
  //初始化要输出的东西
  var out_ulll = "";
 
  //获取内容行数
  var i = 0;
  for (; strr[i] != ""; i++) {
    //console.log("emm");
  }
  //按行判断并输出
  var yu = true;
  for (var j = 0; j <= i; j += 2) {
    var k = strr[j].split(" ");
    if (k[0] == "#") {
      out_ulll = out_ulll + '<div class="l_l_i"><a href="http://tls.truraly.icu#' + k[1] + '"><img src="' + strr[j + 1] + '"><p>' + k[1] + '</p></a></div>';
    }
  }
  //输出内容
  ulll.innerHTML = out_ulll;
}

