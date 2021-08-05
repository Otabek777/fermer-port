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
    document.querySelector('.header__burgir').classList.remove('active');
});

// Modal
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');
for(let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', function() {
        document.querySelector('.user-btn').classList.remove('active');
        for(m = 0; m < modal.length; m++) {
            modal[m].classList.remove('active');
        };
    });
};

document.querySelector('#open-modal').addEventListener('click', function() {
    document.querySelector('#auth').classList.add('active');
});
document.querySelector('#open-modal-reg').addEventListener('click', function() {
    document.querySelector('#auth').classList.remove('active');
    document.querySelector('#reg').classList.add('active');
});
document.querySelector('#open-modal-auth').addEventListener('click', function() {
    document.querySelector('#auth').classList.add('active');
    document.querySelector('#reg').classList.remove('active');
});

document.querySelector('.user-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('#auth').classList.toggle('active');
})