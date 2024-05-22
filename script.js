let swiper = document.querySelector('.slider')

 if (document.documentElement.clientWidth < 768) { 
    swiper.classList.add('swiper');
 }

    const mySwiper = new Swiper('.swiper', {

        breakpoints: {
            320: {
                slidesPerView: 1.3,
               
                breakpointsBase: 'container',
                
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
      

    let all = document.querySelector('.all');
    let slider = document.querySelector('.slider--items');


    all.addEventListener('click', function(evt){
   
       
        
        
      evt.preventDefault();  
 
      if (all.textContent == 'Скрыть') { 
        all.classList.add('arrow--bottom');
          all.classList.remove('arrow--top'); 
          all.textContent = 'Показать все';  
          slider.style.height = '180px';
      } else if (all.textContent == 'Показать все') {  
          all.classList.add('arrow--top');
          all.classList.remove('arrow--bottom');
          all.textContent = 'Скрыть';  
          slider.style.height = 'auto';
      }  
      })
    
   
        

   
      
