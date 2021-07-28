$(window).scroll(function(){
    if ( $(this).scrollTop() > 100) {
        $('.header__fixed').addClass('active');
    } else {
        $('.header__fixed').removeClass('active');
    }
});