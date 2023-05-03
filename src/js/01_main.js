
'use strict'

console.log('Hello console!')

$(document).ready(function() {
    $('.ourSkills__slider').slick({
        arrows: true,
        dots: false,
        adaptiveHight: true,
        slidesToShow: 4,
        infinite: false,
        swipe: true,
        responsive:[
            {
                breakpoint: 1000,
                    settings: {
                    slidesToShow: 3
                }

            }, {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 2
                }
            }, {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 1
                }
            }
        ]

    });
});
