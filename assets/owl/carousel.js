const home = $('#home');
const homeNext = $("#home-next");
const homePrev = $("#home-prev");

    home.owlCarousel({
        loop: true, 
        margin: 0,
        autoplay: true,
        rewind: true,
        dots: false,
        nav: false,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
        }
    });

    homeNext.click(function() {
        home.trigger('next.owl.carousel', [500]);
    })
    homePrev.click(function() {
        home.trigger('prev.owl.carousel', [500]);
    });
