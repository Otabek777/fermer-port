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

const catalogLink = document.querySelectorAll('.catalog_menu__li p');
const catalogClose = document.querySelector('.catalog_menu__close');
const catalogBack = document.querySelectorAll('.catalog_menu__back');

for(let i = 0; i < catalogLink.length; i++) {
    catalogLink[i].addEventListener('click', function() {
        this.classList.add('active');
    });
};

for(let i = 0; i <catalogBack.length; i++) {
    catalogBack[i].addEventListener('click', function() {
        for(let i = 0; i < catalogLink.length; i++) {
            catalogLink[i].classList.remove('active');
        };
    });
}

catalogClose.addEventListener('click', function() {
    for(let i = 0; i < catalogLink.length; i++) {
        catalogLink[i].classList.remove('active');
    };
    document.querySelector('.catalog_menu').classList.remove('active');
    document.querySelector('.catalog-btn').classList.remove('active');
});