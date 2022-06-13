$(function() {
  let header = $('.header');
  let hederHeight = header.height();

  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('fixed');
     $('body').css({
        'paddingTop': hederHeight+'px'
     });
    } else {
     header.removeClass('fixed');
     $('body').css({
      'paddingTop': 0
     })
    }
  });

  let show = $('.show');
  let cancel = $('.cancel');
  let style = $('.style');

  $(show).click(function() {
    $('link').remove();
    $('body').addClass('fixed');
    cancel.removeClass('none');
  });

  $(cancel).click(function() {
    $('head').append('<link rel="stylesheet" href="css/normalize.css">','<link class="style" rel="stylesheet" href="css/style.css">');
    $('body').removeClass('fixed');
    cancel.addClass('none');
  });

});

const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrSlide = ind => {
    activeSlide(index);
    activeDot(index);
}

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrSlide();
    } else {
        index++;
        prepareCurrSlide();
    }
}

const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepareCurrSlide();
    } else {
        index--;
        prepareCurrSlide();
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () =>{
        index = indexDot;
        prepareCurrSlide(index);
    })
})


const self__prev = document.getElementById('self__btn-prev'),
  self__next = document.getElementById('self__btn-next'),
  self__slides = document.querySelectorAll('.self__slide'),
  self__dots = document.querySelectorAll('.self__dot');

let self__index = 0;

const self__activeSlide = n => {
    for(slide of self__slides) {
        slide.classList.remove('active');
    }
    self__slides[n].classList.add('active');
}

const self__activeDot = n => {
    for(dot of self__dots) {
        dot.classList.remove('active');
    }
    self__dots[n].classList.add('active');
}

const self__prepareCurrSlide = ind => {
  self__activeSlide(self__index);
  self__activeDot(self__index);
}

const self__nextSlide = () => {
    if(self__index == self__slides.length - 1){
        self__index = 0;
        self__prepareCurrSlide();
    } else {
        self__index++;
        self__prepareCurrSlide();
    }
}

const self__prevSlide = () => {
    if(self__index == 0){
        self__index = self__slides.length - 1;
        self__prepareCurrSlide();
    } else {
        self__index--;
        self__prepareCurrSlide();
    }
}

self__dots.forEach((self__item, self__indexDot) => {
        self__item.addEventListener('click', () => {
        self__index = self__indexDot;
        self__prepareCurrSlide(self__index);
    })
})


self__next.addEventListener('click', self__nextSlide);
self__prev.addEventListener('click', self__prevSlide);

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
