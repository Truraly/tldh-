//修改顶部固定栏的配色
//通过window.pageYOffset确定移动的范围并修改
var k = true;
function scroll() {
  if (k == true) {
    if (window.pageYOffset > 100) {
      document.getElementsByClassName("top")[0].className = "top_w"
      k = false;
      // document.getElementsByClassName("top")[0].
    }
  }
  else {
    if (window.pageYOffset < 100) {
      document.getElementsByClassName("top_w")[0].className = "top"
      k = true;
    }
  }
}