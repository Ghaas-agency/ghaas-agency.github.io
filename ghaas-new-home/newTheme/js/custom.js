  wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  })
  wow.init();

 $(function() {
    $('.mousey').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          var scrolltop =  target.offset().top; //(($("#header-sticky").hasClass("sticky-menu")) ? target.offset().top - 84 : target.offset().top - 190);
          $('html, body').animate({
            scrollTop: scrolltop
          }, 800);
          return false;
        }
      }
 
    });
 });