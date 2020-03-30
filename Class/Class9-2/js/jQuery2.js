$(document).ready( function(){


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



});
