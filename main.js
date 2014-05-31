$(document).ready(function(){

$(".item").hover(function() {
	$(this).children(".caption").stop().animate({opacity: "1"}, 1000);
	},
	function() {
	$(this).children(".caption").stop().animate({opacity: "0"}, 200);
	});

$(".button").hover(function() {
	$(this).children(".label").stop().animate({opacity: "1"}, 1000);
	},
	function() {
	$(this).children(".label").stop().animate({opacity: "0"}, 200);
	});
	
$(".inquiries").click(function() {
	$("#inquiries").slideDown(1200, function () {
		$(this).prev().slideDown(1200, arguments.callee);
		});  
	});  

$("#closebutton").click(function () {
    $("#inquiries").slideUp(1200);
    });
	
$("#print").click(function() {
	$(this).children("img").attr("src","imgs/_printactive.png");
	$(this).siblings("#digital").children("img").attr("src","imgs/_digital.png");
	$(this).siblings("#both").children("img").attr("src","imgs/_both.png");
	$(".digital").css("opacity","0.05");
	$(".print").css("opacity","1");
	});

$("#digital").click(function() {
	$(this).children("img").attr("src","imgs/_digitalactive.png");
	$(this).siblings("#print").children("img").attr("src","imgs/_print.png");
	$(this).siblings("#both").children("img").attr("src","imgs/_both.png");
	$(".print").css("opacity","0.05");
	$(".digital").css("opacity","1");
	});

$("#both").click(function() {
	$(this).children("img").attr("src","imgs/_bothactive.png");
	$(this).siblings("#digital").children("img").attr("src","imgs/_digital.png");
	$(this).siblings("#print").children("img").attr("src","imgs/_print.png");
	$(".print").css("opacity","1");
	$(".digital").css("opacity","1");
	});


});


$(window).unload( function () {} );
	
/*	

$(".button").hover(function() {
	$(this).children(".label").toggleClass("display");
	});

*/
