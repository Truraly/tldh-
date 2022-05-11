//获取8位数日期
//使用中，勿轻易改
//加减天数以及是否需要8位
function ti_td(c){
  date=new Date();
  date.setDate(date.getDate()+c);
  now_y=date.getFullYear();
  now_m=date.getMonth()+1;
  now_d=date.getDate();
  return now_y+(now_m<10?"0"+now_m:now_m)+(now_d<10?"0"+now_d:now_d);
}

//将ti_td(c)的输出改为去除前置0再以.分割
function ti_ch(c){
  var x=Number(c);
  var d=String(Math.round(x/10000))+".";
  //console.log(d);
  x=Math.round(x%10000);
  d+=Math.round(x/100)+".";
  //console.log(d);
  x=Math.round(x%100);
  d+=x;
  return d;
}

//获取秒数，添加在地址后面更新缓存
function ti_td_s(){
  date=new Date();
  now_s=date.getSeconds();
  //console.log(now_h*100+now_m*10+now_s);
  return now_s;
}