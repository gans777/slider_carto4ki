$(document).ready(function($){

	var ukazatel=0;
	var scrollSlider_left="-=280";
	var scrollSlider_right="+=280";
    var is_animate=false;

	  function autoplay_left(){
   if(!is_animate){
    is_animate = true;
     $("#slider_down>ul").animate({left: "-=280"}, 500, function(){
     
      $('#slider_down>ul>li:first').appendTo($("#slider_down>ul"));
      
      $("#slider_down>ul").css({'left': 0});
     is_animate = false;
    });
   }
  }
    function autoplay_right(){
   if(!is_animate){
    is_animate = true;
     $("#slider_down>ul").animate({left: "+=280"}, 500, function(){
     
      $('#slider_down>ul>li:last').prependTo($("#slider_down>ul"));
      
      $("#slider_down>ul").css({'left': 0});
     is_animate = false;
    });
   }
  }

  
  var timerId = setTimeout(function tick() {
   autoplay_left();
  timerId = setTimeout(tick, 5000);
}, 5000);

	$( ".strelki:eq(0)" ).click(function() {
  
 
  $( "#slider_down>ul" ).animate({
    
    left: "-=280",
   
  }, 500, function() {
    // Animation complete.
     $('#slider_down>ul>li:first').appendTo($("#slider_down>ul"));
      
      $("#slider_down>ul").css({'left': 0});
     is_animate = false;
  });
  
});
$( ".strelki:eq(1)" ).click(function() {
  
  $('#slider_down>ul>li:last').prependTo($("#slider_down>ul"));
  $("#slider_down>ul").css({'left': -280});
 $( "#slider_down>ul" ).animate({
    
    left: "+=280",
   
  }, 500, function() {
    // Animation complete.
     //$('#slider_down>ul>li:last').prependTo($("#slider_down>ul"));
      
     // $("#slider_down>ul").css({'left': -280});
     is_animate = false;
  });
});


});// последняя скобка ready 
