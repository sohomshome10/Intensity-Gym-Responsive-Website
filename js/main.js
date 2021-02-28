$(function(){
    
    //hamburger
    $('.hamburger').click(function(){
        $('.hamburger .burger').toggleClass('burger-toggle');
        $('.navbar ul').slideToggle();
    });

    //accordion
    $('.slide').hide();
    $('.active-slide').show();
    $(".achead").on("click", function() {
        if ($(this).hasClass("acactive")) {
          $(this).removeClass("acactive");
          $(this).siblings(".slide").slideUp(400);
        } else {
          $(".achead").removeClass("acactive");
          $(this).addClass("acactive");
          $(".slide").slideUp(400);
          $(this).siblings(".slide").slideDown(400);
        }
      });

      //back to top
      $('body').append('<a href="#" class="top scroll"><i class="fas fa-chevron-up"></i></a>');
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.top').fadeIn('slow');
        }else{
             $('.top').fadeOut('slow');
        }
    });
    $('.top').click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        },500);
        return false;
    });
});