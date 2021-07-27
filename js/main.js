const asideLi = document.querySelectorAll('.catalog__aside li p');
for(let i = 0; i < asideLi.length; i++) {
    asideLi[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
};