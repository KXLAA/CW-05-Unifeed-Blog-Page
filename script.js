const btnNavEl = document.querySelector('.nav__mobile');
const navEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function(){
     navEl.classList.toggle('nav-open');
});

