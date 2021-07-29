$(window).scroll(function(){
    if ( $(this).scrollTop() > 100) {
        $('.header__fixed').addClass('active');
    } else {
        $('.header__fixed').removeClass('active');
    }
});

document.querySelector('.header__burgir').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.catalog_menu').classList.toggle('active');
});
document.querySelector('.catalog-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.catalog_menu').classList.toggle('active');
});