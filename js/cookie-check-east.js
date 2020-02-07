$(document).ready(function(){

// check on EAST START

// check on ukung tewu
var ukung =  Cookies.get("ukung");
if(ukung){
  $("#hero1img").wrap("<a href='east/ukung-tewu.html'></a>");
  $("#hero1img").attr("src","images/Thumbnail/Character/Timur/ukung-tewu.png");
}

// check on hasanuddin
var hasanuddin =  Cookies.get("hasanuddin");
if(hasanuddin){
  $("#hero2img").wrap("<a href='east/hasanuddin.html'></a>");
  $("#hero2img").attr("src","images/Thumbnail/Character/Timur/hasanuddin.png");
}

// check on pattimura
var pattimura =  Cookies.get("pattimura");
if(pattimura){
  $("#hero3img").wrap("<a href='east/pattimura.html'></a>");
  $("#hero3img").attr("src","images/Thumbnail/Character/Timur/pattimura.png");
}

// check on wona kaka
var wonakaka =  Cookies.get("wonakaka");
if(wonakaka){
  $("#hero4img").wrap("<a href='east/wona-kaka.html'></a>");
  $("#hero4img").attr("src","images/Thumbnail/Character/Timur/wona-kaka.png");
}

// check on gurabesi
var gurabesi =  Cookies.get("gurabesi");
if(gurabesi){
  $("#hero5img").wrap("<a href='east/gurabesi.html'></a>");
  $("#hero5img").attr("src","images/Thumbnail/Character/Timur/gurabesi.png");
}
// check o EAST ENDS
});
