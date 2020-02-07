// JavaScript Document


//make sure that all document is loaded first before applying js
$(document).ready(function(){
//loader function
	$(function(){
		$("#loader").fadeOut(600, function(){
			$("main").removeClass("d-none");
			$("#loader").remove();
		});
	});


$("#local-button").click(function(){
// toggle heroImage
	$("#hero").toggleClass("hero-img");
//toggle to tab 2
$("#hero-info").toggle();
$("#local-info").toggle();
//toggle animation class
$("#local-info").toggleClass("fadeInLeft");
$("body").toggleClass("bg-1 bg-2");
$("#heroes-select-container").toggleClass("d-none");
//toggle texts
$("#local-text").text($("#local-text").text() == 'LOCAL INFO' ? 'HERO INFO' : 'LOCAL INFO');

});



});
