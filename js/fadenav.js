(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 600) {
                $('nav').fadeIn(500);
            } else {
                $('nav').fadeOut(500);
            }
        });
    });
})(jQuery);
