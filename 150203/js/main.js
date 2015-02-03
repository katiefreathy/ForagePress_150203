
$(document).ready(function(e){


  


  $(window).scroll(function(){
    switch(true) {
    case $(window).scrollTop() > 120:
        console.info('scrolled more than 120 pixels down');
        // $('.logo').removeClass('').addClass('logo-small').removeClass('logo-large'); // also look into using "toggle class" on jquery documentation
        $('header').removeClass('large-header').addClass('small-header').removeClass('large-header'); // also look into using "toggle class" on jquery documentation
        break;
    case $(window).scrollTop() <= 90:
        console.info('scrolled less than 90 pixels down');
        // $('.logo').removeClass('').removeClass('logo-small').addClass('logo-large');
        $('header').removeClass('').removeClass('small-header').addClass('large-header');
    //default:
      //  default code block
  }
  });

  if($(window).width() < 1024) {
      // code to be executed if condition is true
      $('.main-menu').addClass('hidden');
    } 
  else {
    // code to be executed if condition is false
    $('.main-menu').removeClass('hidden');
   
  }

  

});	
