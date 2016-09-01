
$(function(){             // Punkt 2
  
    // Punkt 1

$('ul').parent().addClass('tabs');
    
    
    // Punkt 3
    
var links = $('ul').find('li');
var divs = $('.tabs').find('div');
    
    console.log(links);
    console.log(divs);
    
    
    
    // Punkt 4
    
    
links.click(function(){
//    console.log($(this).text()+' został klikniety'); 
    var linksIndex = $(this).index();
//    console.log(linksIndex);
    
    divs.not(divs.eq(linksIndex)).hide();   // wybieramy sobie wszystkie POZA tym jedym w nawiasie !
    divs.eq(linksIndex).show();
    

});
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});