let x = document.querySelector('.slider')
var z = document.documentElement.clientWidth;

 if (document.documentElement.clientWidth < 768) { 
    x.classList.add('swiper');
 }
    const mySwiper = new Swiper('.swiper', {

        breakpoints: {
            20: {
                slidesPerView: 1.3,
                // spaceBetween: 500,
                breakpointsBase: 'container',
                // centeredSlides: true
            },
          },
          
        // loop: true,
      
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
       
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
      
    
   
        
      
      