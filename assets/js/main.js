// Preloader area
const preloader = document.getElementById("preloader");
function preloder_function() {
    preloader.style.display = "none";
}

// add bg to nav
window.addEventListener("scroll", function () {
    let scrollpos = window.scrollY;
    const header = document.querySelector("nav");
    const headerHeight = header.offsetHeight;

    if (scrollpos >= headerHeight) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});


$(document).ready(function () {
    // owl carousel dashboard card
    $('.carousel-area1').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 10,
        nav: true,
        dots: false,
        // rtl:true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            991: {
                items: 2
            }
        }
    });

    // What's New carousel
    $('.carousel-area2').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 20,
        nav: true,
        dots: false,
        // rtl:true,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 3
            },
            1000: {
                items: 4
            },
            1400: {
                items: 5
            },
            1620: {
                items: 6
            },
        }
    });
    // Stream channel What's New carousel
    $('.carousel-area3').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 20,
        nav: true,
        dots: false,
        // rtl:true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            800: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });
    // responsive-filter
    $('.carousel-area4').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 20,
        nav: true,
        dots: false,
        // rtl:true,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 2
            },
            550: {
                items: 3
            },
            720: {
                items: 4
            },
        }
    });

    // Swiper-slider livestream-swiper
    var swiper = new Swiper(".livestream-swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,

    });
    // Testimonial section start
    // Owl carousel 
    $(function (e) {
        "use strict";
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            autoplay: false,
            center: true,
            margin: 10,
            nav: false,
            dots: true,
            // rtl:true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });
    // Testimonial section start


    // noUiSlider1 start pricing plan
    var nonLinearSlider = document.getElementById('slider');

    noUiSlider.create(nonLinearSlider, {
        // connect: true,
        behaviour: 'tap',
        start: [10],
        range: {
            // Starting at 500, step the value by 500,
            // until 4000 is reached. From there, step by 1000.
            'min': [0],
            'max': [100]
        }
    });
    var nodes = [
        document.getElementById('slider-value'),
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
        nodes[handle].innerHTML = values[handle] + ', ';
    });
    // noUiSlider end





    // select2 filter sidebar
    $(".js-example-basic-single").select2({
        maximumSelectionLength: 2
    });
    $(".modal-select2").select2({
        dropdownParent: $("#formModal"),
    });
    $(".modal-select3").select2({
        dropdownParent: $("#formModal2"),
    });





});




// input file preview
const previewImage = (id) => {
    document.getElementById(id).src = URL.createObjectURL(event.target.files[0]);
};

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// // Dark theme start
// const toggleBtn = document.getElementById("toggle-btn");
// const body = document.querySelector("body");
// toggleBtn.addEventListener("click", function () {
//     document.body.classList.toggle("dark-theme");
//     if (document.body.classList.contains("dark-theme")) {
//         localStorage.setItem("dark-theme", 1);
//     } else {
//         localStorage.setItem("dark-theme", 0);
//     }
//     setTheme();
// });

// function setTheme() {
//     const isDarkTheme = localStorage.getItem("dark-theme");
//     if (isDarkTheme == 1) {
//         document.querySelector('body').classList.add('dark-theme');
//         document.getElementById("moon").style.display = "none";
//         document.getElementById("sun").style.display = "block";
//     } else {
//         document.querySelector('body').classList.remove('dark-theme');
//         document.getElementById("moon").style.display = "block";
//         document.getElementById("sun").style.display = "none";
//     }
// }
// setTheme();
// // Dark theme end


