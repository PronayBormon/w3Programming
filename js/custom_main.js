

if('.btn-sidebar'){
    $(document).ready(function () {
        $('.btn-sidebar').click(function () {
            $('.main_sidebar').toggleClass('open');
        })
    })

}

// scrolling filter bar 
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.categoryFilter ul');
    let isDown = false;
    let startX;
    let scrollLeft;

    // Enable dragging functionality
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.cursor = 'grabbing';
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'default';
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'default';
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; // Adjust scroll speed here
        slider.scrollLeft = scrollLeft - walk;
    });

    // Enable mouse wheel horizontal scroll
    slider.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            slider.scrollLeft += e.deltaY * 3; // Adjust scroll speed here
        }
    });
});

// counter up 
if('.counter'){
    $(document).ready(function () {
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              $(entry.target).find('.counter').each(function () {
                var $this = $(this);
                var countTo = parseInt($this.attr('data-count'));
                $({ countNum: 0 }).animate({
                  countNum: countTo
                },
                  {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                      $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                      $this.text(this.countNum);
                    }
                  });
              });
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
    
        $('.counter_box').each(function () {
          observer.observe(this);
        });
      });
}

// brand slider 
if('.brandSlider'){
    var swiper = new Swiper(".brandSlider", {
        loop: 1,
        speed: 5000,
        autoplay: {
          delay: false,
          disableOnInteraction: false,
        },
        freeMode: true,
        spaceBetween: 10,
        slidesPerView: 1,
        stopOnLastSlide: false,
        waitForTransition: false,
        breakpoints: {
          1400: {
            slidesPerView: 6,
          },
          1200: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          578: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          0: {
            slidesPerView: 3,
            spaceBetween: 5
          },
        }
      });
}

// seiper slider 
if('.m_slider'){
    var swiper = new Swiper(".m_slider", {
        navigation: {
          nextEl: ".m_slider_next",
          prevEl: ".m_slider_prev",
        },
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        breakpoints: {
          1400: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          578: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 5
          },
        }
      });  
}



// swiper slider 1
if('.m_slider1')
    var swiper = new Swiper(".m_slider1", {
        navigation: {
          nextEl: ".m_slider_next",
          prevEl: ".m_slider_prev",
        },
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        breakpoints: {
          1400: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          578: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 5
          },
        }
      });
// swiper slider 2
if('.m_slider2'){
    var swiper = new Swiper(".m_slider2", {
        navigation: {
          nextEl: ".m_slider_next",
          prevEl: ".m_slider_prev",
        },
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        breakpoints: {
          1400: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          578: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 5
          },
        }
      });
    
}