$(document).ready( function(){


$(".smallGridBug div:first-child p").hide();



$("#_hide").click(function(){
  $(".gridContent div:first-child p").hide(3000);
});

$("#_show").click(function(){
  $(".gridContent div:first-child p").show(3000);
});

$("#_toggle").click( function(){
  $(".gridContent div:nth-child(2) p").toggle();
});


$("#_html").click(function() {
  $(".gridContent div:nth-child(3) p").html("Hello <strong>World</strong>");
});

$("#_css").click(function(){
  $(".box").css({"background-color": "lightblue", "width": "100px", "height": "100px"});
});


$("footer").mouseover(function(){
  $("footer p").html("Yeah, it's over me");
});

$("footer").mouseleave(function(){
  $("footer p").html("Don't go!!");
});


$("#show1").click(function(){
  $(".smallGridBug div:first-child p").show();
});

$("#hide1").click(function(){
  $(".smallGridBug div:first-child p").hide();
});

$("#toggle1").click(function(){
   $(".smallGridBug div:nth-child(2) p").toggle();
});

$("#html1").click(function() {
   $(".smallGridBug div:nth-child(3) p").html(" <h1>Hello World! </h1>");

});

$("#css1").click(function(){

  $(".smallGridBug div:nth-child(3) p").css("color", "lightblue");
  $(".smallGridBug div:nth-child(4) p").css({"color": "pink", "font-size": "8px", "font-family": "serif"});



});







}); //end of document ready
