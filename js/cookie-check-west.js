$(document).ready(function(){

// check on WEST START

// check on keumalahayati
var keumalahayati =  Cookies.get("keumalahayati");
if(keumalahayati){
  $("#hero1img").wrap("<a href='west/keumalahayati.html'></a>");
  $("#hero1img").attr("src","images/Thumbnail/Character/Barat/keumalahayati.png");
}

// check on sisingamangaraja
var sisingamangaraja =  Cookies.get("sisingamangaraja");
if(sisingamangaraja){

    $("#hero2img").wrap("<a href='west/sisingamangaraja.html'></a>");
    $("#hero2img").attr("src","images/Thumbnail/Character/Barat/sisingamangaraja.png");
}

// check on syarif kasim ii
var syarifkasim =  Cookies.get("syarifkasim");
if(syarifkasim){

    $("#hero3img").wrap("<a href='west/syarif-kasim-ii.html'></a>");
    $("#hero3img").attr("src","images/Thumbnail/Character/Barat/syarif-kasim-ii.png");
}
// check on badaruddin ii
var badaruddin =  Cookies.get("badaruddin");
if(badaruddin){
    $("#hero4img").wrap("<a href='west/mahmud-badaruddin-ii.html'></a>");
    $("#hero4img").attr("src","images/Thumbnail/Character/Barat/mahmud-badaruddin-ii.png");
}

// check on siliwangi
var siliwangi =  Cookies.get("siliwangi");
if(siliwangi){

    $("#hero5img").wrap("<a href='west/siliwangi.html'></a>");
    $("#hero5img").attr("src","images/Thumbnail/Character/Barat/siliwangi.png");
}
// check on  WEST ENDS
});
