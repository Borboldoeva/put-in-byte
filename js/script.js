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

    const deg = 6;
    const hr = document.querySelector('#hr');
    const sc = document.querySelector('#sc');
    
    
    setInterval(() => {
        let day = new Date();
    let hh = day.getHours() * 100;
    let mm = day.getMinutes() * 80;
    let ss = day.getSeconds() * deg;
        
        hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
    })

    const deg2 = 6;
    const hr2 = document.querySelector('#hr2');
    const sc2 = document.querySelector('#sc2');
    
    setInterval(() => {
        let day2 = new Date();
        let hh = day2.getHours() * 95;
        let mm = day2.getMinutes() + 60 * deg;
        let ss = day2.getSeconds() * deg;
        
        hr2.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
        mn2.style.transform = `rotateZ(${mm}deg)`;
        sc2.style.transform = `rotateZ(${ss}deg)`;
    })

    const deg3 = 6;
    const hr3 = document.querySelector('#hr3');
    const sc3 = document.querySelector('#sc3');
    
    setInterval(() => {
    let day =  new Date();
    let hh = day.getHours() * 170;
    let mm = day.getMinutes() + 60 * deg;
    let ss = day.getSeconds() * deg;
    
    hr3.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn3.style.transform = `rotateZ(${mm}deg)`;
    sc3.style.transform = `rotateZ(${ss}deg)`;
    })

    const deg4 = 6;
    const hr4 = document.querySelector('#hr4');
    const sc4 = document.querySelector('#sc4');
    
    setInterval(() => {
        let day =  new Date();
    let hh = day.getHours() * 56;
    let mm = day.getMinutes() + 30 * deg;
    let ss = day.getSeconds() * deg;
    
    hr4.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn4.style.transform = `rotateZ(${mm}deg)`;
    sc4.style.transform = `rotateZ(${ss}deg)`;
    })

});


