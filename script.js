   window.addEventListener('DOMContentLoaded', function () {

     let tab = document.getElementsByClassName('info-header-tab'),
       tabContent = document.getElementsByClassName('info-tabcontent'),
       info = document.getElementsByClassName('info-header')[0];

     function hideTabContent(a) {
       for (let i = a; i < tabContent.length; i++) {
         tabContent[i].classList.remove('show');
         tabContent[i].classList.add('hide');
       }
     }

     hideTabContent(1)

     function showTabContent(b) {
       if (tabContent[b].classList.contains('hide')) {
         hideTabContent(0);
         tabContent[b].classList.remove('hide');
         tabContent[b].classList.add('show');
       }
     }

     info.addEventListener('click', function (event) {
       let target = event.target;
       if (target.className == 'info-header-tab') {
         for (let i = 0; i < tab.length; i++) {

           if (target == tab[i]) {
             showTabContent(i);
             break;
           }

         }
       };


     })


   });




   //Timer

   let deadline = '2020-12-27';

   function getTimeRemaining(endtime) {
     let t = Date.parse(endtime) - Date.parse(new Date()),
       seconds = Math.floor((t / 1000) % 60),
       minutes = Math.floor((t / 1000 / 60) % 60),
       hours = Math.floor((t / (1000 * 60 * 60)));

     return {
       'total': t,
       'hours': hours,
       'minutes': minutes,
       'seconds': seconds
     };
   };


   function setClock(id, endtime) {

     let timer = document.getElementById(id),
       hours = timer.querySelector('.hours'),
       minutes = timer.querySelector('.minutes'),
       seconds = timer.querySelector('.seconds');


     function updateClock() {
       let t = getTimeRemaining(endtime);
       hours.innerHTML = t.hours;
       minutes.innerHTML = t.minutes;
       seconds.innerHTML = t.seconds;

       if (t.total <= 0) {
         clearInterval(timeInterval);
       }

     };




     updateClock();
     let timeInterval = setInterval(updateClock, 1000);

   };


   setClock('timer', deadline);

   //slider

   // 1 часть кода (мы задаём все переменные)
   let slideIndex = 1,
     slides = document.getElementsByClassName("slider-item"),
     prev = document.querySelector(".prev"),
     next = document.querySelector(".next"),
     dotsWrap = document.querySelector(".slider-dots"),
     dots = document.getElementsByClassName("dot");

   // 2 часть кода(при прокрутке слайдера не было сбоев)
   showSlides(slideIndex);

   function showSlides(n) {
     if (n > slides.length) {
       slideIndex = 1;
     }
     if (n < 1) {
       slideIndex = slides.length
     }

     // 3 часть кода(скрыть все слайды, но показать только один)
     for (let i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
     }
     for (let i = 0; i < dots.length; i++) {
       dots[i].classList.remove("dot-active");
     }
     // 4 часть кода(показать активный слайд и доавить класс к нужному кружочку)
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].classList.add("dot-active");
   }
   // 5 часть кода(функция которая отнимает или добавляет кол-во слайдов)
   function plusSlides(n) {
     showSlides((slideIndex += n));
   }
   // 7.1 часть кода(при клике на точки, слайды меняются)
   function currentSlide(n) {
     showSlides((slideIndex = n));
   }

   // 6 часть кода(навесим события на кнопку PREV И NEXT )
   prev.addEventListener("click", function () {
     plusSlides(-1);
   });
   next.addEventListener("click", function () {
     plusSlides(1);
   });
   // 7.2 часть кода(при клике на точки, слайды меняются)
   dotsWrap.addEventListener("click", function (event) {
     for (let i = 0; i < dots.length + 1; i++) {
       if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
         currentSlide(i);
       }
     }
   });