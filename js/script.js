const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar-nav')
burger.addEventListener('click', () => {
    console.log("hi")
    burger.classList.toggle('active')
    navbar.classList.toggle('active')
})

//   const hover = document.getElementsByClassName('.crsl-item')
//   hover.addEventListener('mouseenter', function(event) => {
      
//   })
const tabs = document.querySelector('.tabs')
tabs.addEventListener('click', () => {
    console.log('tabs')
})

// $('.tabs-triggers').click(function(){
//     $(this).addClass('activeted');
// });

// $('.tabs-triggers').click(function(){
//     $(this).removeClass('activeted');
// });

$('.crsl-item').hover(function(){
    $(this).addClass('activeted');
});

$('.crsl-item').mouseover(function(){
    $(this).removeClass('activeted');
});

$('.tabs').hover(function(){
    $(this).addClass('activeted');
})
$('.tabs').mouseover(function(){
    $(this).removeClass('activeted');
});
$(document).ready(function () {
    $(".owl-carouse2l").owlCarousel({
        autoplay: true,
        autoplayTimeout: 800,
        autoplayHoverPause: true,
        items: 8,
        loop: true,
        lazyLoadEager: 3
    });

});


$(document).ready(function () {
    $('.tabs-triggers__item').click(function (e) {
        e.preventDefault();
        $('.tabs-triggers__item').removeClass('tabs-content__item--active');
        $('.tabs-content__item').removeClass('tabs-content__item--active');
        $(this).addClass('tabs-content__item--active')
        $($(this).attr('href')).addClass('tabs-content__item--active')
    })
    $('.tabs-triggers__item:first').click();
})

$('.slide-one').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 4000,
    width: 30,
    autoWidth: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

$('.slide-two').owlCarousel({
    loop:true,
    nav:true,
    margin: 40,
    autoplay: false,
    autoplayTimeout: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:8
        },
        1000:{
            items:3
        }
    }
})

$('.slide-three').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 4000,
    width: 30,
    autoWidth: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

// $(".burger").click(function(){
//     console.log("hi")
//     this.classList.toggle('active')
//     $(".navbar").toggleClass('active')
// })
// $('.carousel').carousel({
//     interval:2000
// })

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

// $(window).resize(function(){
//     let width = $(window).width();
//     if (width < 576){
//         $('.toggleButton').attr("style", "display: block");
//         $('.remove').attr("style", "display: none");
//     }
//     else{
//         $('.toggleButton').attr("style", "display: none");
//         $('.remove').attr("style", "display: flex");
//     }
// });

