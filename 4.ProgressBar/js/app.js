
$(function(){             // DOM Content Loaded w jQUery
  
    
// Punkt 1 
    // dodano atrybuty data- w pliku index.html
    
    
  var buttons = $('button');
  var divs = $('.progress-bar');
    
    console.log(buttons);
    console.log(divs);
    
  
//divs.animate({
//    width: '50%'
//},2000);
    
    
    
    buttons.click(function(e){
//        e.preventDefault();
//        console.log('kliknieto w przycisk')
        
         var number = $(this).data("number");      //Punkt 4  (1)
         var color = $(this).data("color");
         var width = $(this).data("width");
         var buttonClass = $(this).attr('class').split(' ')[1];  // lub mozna pobrac po data-number
        
//         console.log(buttonClass);
//        console.log(number);
//        console.log(color);
//        console.log(width);
        
        var progressBar = $('#'+buttonClass);   // Punkt 4  (2)
//        console.log(progressBar);
        var span = progressBar.find('span').first();                    // Punkt 4  (3)
//          console.log(span);
        
        span.removeClass().addClass(color).animate({
                                width: width
                            },500);
        
        
    });
    

    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});