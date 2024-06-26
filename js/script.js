document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll('.js-nums p');
    let currentSlide = 0;

    function showSlide(index) {
        // Скрыть текущий активный слайд
        paragraphs.forEach((p, i) => {
            if (i === currentSlide) {
                p.classList.remove('active');
            }
        });

        // Показать новый слайд
        paragraphs[index].classList.add('active');
        currentSlide = index;
    }

    // Автоматический переход к следующему слайду каждые 3 секунды
    setInterval(() => {
        let nextSlide = (currentSlide + 1) % paragraphs.length;
        showSlide(nextSlide);
    }, 3000); // Интервал в миллисекундах (здесь 3000 мс = 3 секунды)
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop:true,
    slidesPerView: 'auto',   
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".cripto-box .swiper-pagination",
      clickable: true,
    } 
  });
  var swiper = new Swiper(".reviewsSwiper", {
    spaceBetween: 30,
    loop:true,
    slidesPerView: 'auto',   
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".reviews .swiper-pagination",
      clickable: true,
    } 
  }); 