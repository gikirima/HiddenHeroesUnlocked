$(document).ready(function(){

// check on CENTER START

// check on fatahillah
var fatahillah =  Cookies.get("fatahillah");
if(fatahillah){
  $("#hero1img").wrap("<a href='center/fatahillah.html'></a>");
  $("#hero1img").attr("src","images/Thumbnail/Character/Tengah/fatahillah.png");
}

// check on diponegoro
var diponegoro =  Cookies.get("diponegoro");
if(diponegoro){
  $("#hero2img").wrap("<a href='center/diponegoro.html'></a>");
  $("#hero2img").attr("src","images/Thumbnail/Character/Tengah/diponegoro.png");
}

// check on kebo iwa
var keboiwa =  Cookies.get("keboiwa");
if(keboiwa){
  $("#hero3img").wrap("<a href='center/kebo-iwa.html'></a>");
  $("#hero3img").attr("src","images/Thumbnail/Character/Tengah/kebo-iwa.png");
}
// check on apang semangai
var apang =  Cookies.get("apang");
if(apang){
  $("#hero4img").wrap("<a href='center/apang-semangai.html'></a>");
  $("#hero4img").attr("src","images/Thumbnail/Character/Tengah/apang-semangai.png");
}

// check on tumenggung
var tumenggung =  Cookies.get("tumenggung");
if(tumenggung){
  $("#hero5img").wrap("<a href='center/tumenggung-surapati.html'></a>");
  $("#hero5img").attr("src","images/Thumbnail/Character/Tengah/tumenggung-surapati.png");
}
// check o CENTER ENDS
});
