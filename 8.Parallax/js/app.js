$(function(){             // DOM Content Loaded w jQUery
  
    
 /* Punkt 2 */
    var scene = $('.scene');
    var elements = $('.element');
   
//    console.log(scene);
//    console.log(elements);
 
    var oldMousePositionX = 0;      
    var oldMousePositionY = 0;
  
    
  /* Punkt 3 */  
  elements.each(function(){
      $(this).css('z-index', $(this).data('z')).css('left', $(this).data('x')).css('top', $(this).data('y'));
    
  });  
    

 
  /* Punkt 4 */  
    
    scene.on('mouseenter', function(event){
        //console.log('mouseenter');
        

        
        oldMousePositionX = event.clientX;
        oldMousePositionY = event.clientY;
        
//        console.log(oldMousePositionX);
//        console.log(oldMousePositionY);
    
    });
    
    scene.on('mousemove', function(event){
        //console.log('mousemove');
        
        var currentMousePositionX = event.clientX;              // Punkt 5
        var currentMousePositionY = event.clientY;
//        console.log(currentMousePositionX);
//        console.log(currentMousePositionY);
        
        
             if ($(event.target).hasClass('element')) {      // Punkt 6
            
        
            currentMousePositionX+=($(event.target).css('top'));
            currentMousePositionY+=($(event.target).css('left'));
         
      }; 
        
        var mouseMoveX = currentMousePositionX-oldMousePositionX;           // Punkt 7
        var mouseMoveY = currentMousePositionY-oldMousePositionY;
//        console.log(mouseMoveX);
//        console.log(mouseMoveY);
      
 
        /* Punkt 8 */
            
        elements.each(function(){
                 
                $(this).css('left', '+='+(mouseMoveX*$(this).data('speed'))).css('top', '+='+(mouseMoveY*$(this).data('speed')));
             
                
//            console.log(currentMousePositionX+(mouseMoveX*$(this).data('speed'))); 
//            console.log(currentMousePositionY+(mouseMoveY*$(this).data('speed')));
//            console.log($(this).data('speed')); 
            
  
        });
           
            oldMousePositionX = currentMousePositionX;
            oldMousePositionY = currentMousePositionY;     

    });
    
   
 

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});