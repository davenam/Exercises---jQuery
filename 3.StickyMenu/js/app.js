
$(function(){             // DOM Content Loaded w jQUery
  
    
var menu = $('.menu');
var nav = menu.parent();
var top = nav.offset().top; 

    
//    console.log(menu);
//    console.log(nav);
//    console.log(top); 
    
    
 $(window).scroll(function(){
     
     var scroll = $(document).scrollTop();
     
//     
//     if (scroll > top) {
//         menu.addClass('sticky');
//     } else {
//         menu.removeClass('sticky');
//     };
     
     
     scroll>top ? menu.addClass('sticky') : menu.removeClass('sticky');
     

       // console.log(scroll);
       // console.log('uwaga, skrolowanie') ;
    });
    
    
         
$(window).resize(function(e){    // Punkt 7
                 
        var top = nav.offset().top; 
    
        scroll>top ? menu.addClass('sticky') : menu.removeClass('sticky');
        
    
                 
    });
     
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});