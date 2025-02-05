new Swiper('.swiper-0', {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        draggable: false,
        swiper: false,
        grabCursor: false,
    },

    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrillbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    slidesPerView: 'auto', // Important: So cards don't stretch
    spaceBetween: 20, // Adjust spacing between cards
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    },
});


new Swiper('.swiper-1', {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        draggable: false,
        swiper: false,
        grabCursor: false,
    },

    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrillbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    slidesPerView: 'auto', // Important: So cards don't stretch
    spaceBetween: 20, // Adjust spacing between cards
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});


new Swiper('.swiper-2', {
    loop: true,
    autoplay: {
        delay: 2000,
    },

    slidesPerView: 'auto', // Important: So cards don't stretch
    spaceBetween: 10, // Adjust spacing between cards
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 10
        }
    }
});



new Swiper('.swiper-3', {
    loop: true,
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrillbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    slidesPerView: 'auto', // Important: So cards don't stretch
    spaceBetween: 20, // Adjust spacing between cards
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 40
        }
    }
});

new Swiper('.swiper-4', {
    loop: true,
    autoplay: {
        delay: 2000,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrillbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    slidesPerView: 'auto', // Important: So cards don't stretch
    spaceBetween: 20, // Adjust spacing between cards
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});




new Swiper('.swiper-5', {
    loop: true,
    autoplay: {
        delay: 2000,
    },

    slidesPerView: 'auto', // Important: So cards don't stretch
    spaceBetween: 20, // Adjust spacing between cards
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});



//Car Insurance
const rangeInput1 = document.getElementById('carInsurance-myRangeInput');
const valueDisplay1 = document.getElementById('carInsurance-rangeValueDislay');

rangeInput1.addEventListener('input', function(){
    const currentValue = rangeInput1.value;
    valueDisplay1.innerHTML = '$' + currentValue;
})

//Car Insurance
const rangeInput2 = document.getElementById('lifeInsurance-myRangeInput');
const valueDisplay2 = document.getElementById('lifeInsurance-rangeValueDislay');

rangeInput2.addEventListener('input', function(){
    const currentValue = rangeInput2.value;
    valueDisplay2.innerHTML = '$' + currentValue;
})

//Car Insurance
const rangeInput3 = document.getElementById('homeInsurance-myRangeInput');
const valueDisplay3 = document.getElementById('homeInsurance-rangeValueDislay');

rangeInput3.addEventListener('input', function(){
    const currentValue = rangeInput3.value;
    valueDisplay3.innerHTML = '$' + currentValue;
})

//Car Insurance
const rangeInput4 = document.getElementById('healthInsurance-myRangeInput');
const valueDisplay4 = document.getElementById('healthInsurance-rangeValueDislay');

rangeInput4.addEventListener('input', function(){
    const currentValue = rangeInput4.value;
    valueDisplay4.innerHTML = '$' + currentValue;
})



