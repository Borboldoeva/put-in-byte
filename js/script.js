

$('.crsl-item').hover(function(){
    $(this).removeClass('activeted');
});

$('.crsl-item').mouseover(function(){
    $(this).addClass('activeted');
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

// $('.slide-two').owlCarousel({
//     loop:false,
//     nav:true,
//     autoplay: false,
//     autoplayTimeout: 1000,
//     responsive:{
//         0:{
//             items:1
//         },
//         500:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })

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
            items:1
        },
        1000:{
            items:3
        }
    }
})

$(".burger").click(function(){
    console.log("hi")
    this.classList.toggle('active')
    $(".navbar").toggleClass('active')
})



$('.carousel').carousel({
    interval:2000
})

$(function () {
    let width = $(window).width();
    if (width < 992) {
        $('.toggleButton').attr("style", "display: block");
        $('.remove').attr("style", "display: none");
    } else {
        $('.toggleButton').attr("style", "display: none");
        $('.remove').attr("style", "display: flex");
    }

    const deg = 6;
    const hr = document.querySelector('#hr');
    const sc = document.querySelector('#sc');
    
    setInterval(() => {
        let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
        
        hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
    })

    const deg2 = 6;
    const hr2 = document.querySelector('#hr2');
    const sc2 = document.querySelector('#sc2');
    
    setInterval(() => {
        let day =  new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() + 30 * deg;
    let ss = day.getSeconds() + 30 * deg;
    
    hr2.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn2.style.transform = `rotateZ(${mm}deg)`;
    sc2.style.transform = `rotateZ(${ss}deg)`;
    })

    const deg3 = 6;
    const hr3 = document.querySelector('#hr3');
    const sc3 = document.querySelector('#sc3');
    
    setInterval(() => {
        let day =  new Date();
    let hh = day.getHours() * 60;
    let mm = day.getMinutes() + 60 * deg;
    let ss = day.getSeconds() + 60 * deg;
    
    hr3.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn3.style.transform = `rotateZ(${mm}deg)`;
    sc3.style.transform = `rotateZ(${ss}deg)`;
    })

    const deg4 = 6;
    const hr4 = document.querySelector('#hr4');
    const sc4 = document.querySelector('#sc4');
    
    setInterval(() => {
        let day =  new Date();
    let hh = day.getHours() * -30;
    let mm = day.getMinutes() + -30 * deg;
    let ss = day.getSeconds() + -30 * deg;
    
    hr4.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn4.style.transform = `rotateZ(${mm}deg)`;
    sc4.style.transform = `rotateZ(${ss}deg)`;
    })

});

$(simple).resize(function(){
    let width = $(simple).width();
   if (width < 600){
    $('.simple::after').attr("style", "display: block");
    $('.remove').attr("img::after");
   }
   else{
    $('.')
   }
})



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

