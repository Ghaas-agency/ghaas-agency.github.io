$(document).ready(function(){
  $('.enable-mobile-form').on('click',function(e){
    e.preventDefault();
    $(this).hide();
    $('.ebook-form-wrap').slideDown(400);
  })

  $('.scroll-to').on('click',function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    var targetScrollTop = $(target).offset().top;
    $("html, body").animate({scrollTop : targetScrollTop},400);
  });
})