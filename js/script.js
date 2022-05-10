$(function () {
    $(".owl-carouse2l").owlCarousel({
        autoplay: true,
        autoplayTimeout: 800,
        autoplayHoverPause: true,
        items: 8,
        loop: true,
        lazyLoadEager: 3
    });


    $('.slide-three').owlCarousel({
        loop:true,
        margin:140,
        nav:false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoWidth: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    })

    $('.slide-four').owlCarousel({
        loop:true,
        margin:140,
        nav:false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoWidth: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    })

  

     $('.tabs-triggers__item').click(function (e) {
        e.preventDefault();
        $('.tabs-triggers__item').removeClass('tabs-content__item--active');
        $('.tabs-content__item').removeClass('tabs-content__item--active');
        $(this).addClass('tabs-content__item--active')
        $($(this).attr('href')).addClass('tabs-content__item--active')
    })
    $('.tabs-triggers__item:first').click();

    $(".burger").click(function(){
        this.classList.toggle('active')
        $(".navbar").toggleClass('active')
        this.classList.toggle('active')
        $(".navbar-buttons").toggleClass('active')
         this.classList.toggle('active')
        $(".navbar-logo").toggleClass('active')
        $('.remove').attr("style", "display: flex");
    })
    
   

});


$(function () {
    let width = $(window).width();
    if (width < 992) {
        $('.toggleButton').attr("style", "display: block");
        $('.remove').attr("style", "display: none");
    } else {
        $('.toggleButton').attr("style", "display: none");
        $('.remove').attr("style", "display: flex");
    }

   
});


