$(function () { // DOM Content Loaded w jQUery


    var form = $('#contactForm');
    var nameInput = $('#nameInput');
    var emailInput = $('#emailInput');
    var messageInput = $('#messageInput');
    var errorDiv = $('.error');
    var submitBtn = $('input').last();

    nameInput.addClass('error');
    emailInput.addClass('error');
    messageInput.addClass('error');


    form.submit('click', function (e) {

       
        var nameVal = nameInput.val();
        var emailVal = emailInput.val();
        var messageVal = messageInput.val();
//        console.log(nameVal);
//        console.log(emailVal);
//        console.log(messageVal);
        var hasError = false;


        if (nameVal.length < 6) {
                
            $('.error').append('<p>Name zrobiłeś źle</p>')
            e.preventDefault();
            hasError = true;
        }


        if (emailVal.indexOf("@") < 0)  {
            
            $('.error').append('<p>Email zrobiłeś źle - brak @</p>')
            e.preventDefault();
            hasError = true;
        } 
        
        if (emailVal.indexOf(".") < 0 ) {
            
            $('.error').append('<p>Email zrobiłeś źle - brak kropki</p>')
            e.preventDefault();
            hasError = true;
        } 


        if (messageVal.length < 11) {

            $('.error').append('<p>Message zrobiłeś źle</p>')
            e.preventDefault();
            hasError = true;
             
        } 
        
        if (hasError != true) {
            
            $('.error').append('<p>Formularz wysłany !</p>')
            
        };
            



    });






});