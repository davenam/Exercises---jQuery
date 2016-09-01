
$(function(){             // DOM Content Loaded w jQUery
  
    

    var hs = $('.QA').find('h1');
    var ps = $('.QA').find('p');
    
    console.log(hs);
    console.log(ps);
    

    
hs.on('click', function(e){
    e.preventDefault;
    
    console.log('kliknięcie w h1')
    
  
    ps.not($(this).next()).hide();    // aby sie chowało spowrotem.
    $(this).next().toggle();
     
 
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});