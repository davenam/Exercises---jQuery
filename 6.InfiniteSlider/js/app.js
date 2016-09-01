
$(function(){             // DOM Content Loaded w jQUery
  

    var prev = $('#prevPicture'); // Punkt 2 (1)
    var next = $('#nextPicture'); // Punkt 2 (2)

    var list = $('li').toArray(); // Punkt 2 (3)

        console.log(list);
        
    var ul = $('ul');

    var index = 0; // Punkt 2 (4)    

    var picWidth = $('img').first().width(); // Punkt 2 (5)

    console.log(list.length);
    var container = $('.slider');

    container.css('width', picWidth); // Punkt 3
    ul.css('width', picWidth * list.length);

    var ulPos = ul.position().left;
    var ulPos2 = ul.position().right;

    
    
     ul.find('li:last').clone(true).prependTo(ul).find('li');  
     ul.find('li:first').clone(true).appendTo(ul).find('li');
    
    
     ul.css('left', '-400px');     // przesuwamy o 1 w lewo zeby nie byl na klonie
    
    
    
    
    next.click(function () {


        if (index < list.length) {

            index++,
            ul.animate({
                left: '-=400px'
            }, 500, function(){
               if ( index > list.length - 1){
                
                ul.animate({left: ulPos}, 0),
               index=0;
                   
               } 
                
                
            });

        }
    });


   
    prev.click(function () {
              
        if (index => 0) {
            index--,
            ul.animate({left: '+=400px'}, 500, function (){ 
            
             if (index < 0){
                ul.animate({left: '-2400px'}, 0),
                index=6
                
            };
      
    });
   

   };
        
        
});
    
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});    



