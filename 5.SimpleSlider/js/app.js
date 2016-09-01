$(function () { // DOM Content Loaded w jQUery


    var prev = $('#prevPicture'); // Punkt 2 (1)
    var next = $('#nextPicture'); // Punkt 2 (2)

    var list = $('li').toArray(); // Punkt 2 (3)

    //    console.log(list);

    var ul = $('ul');

    var index = 0; // Punkt 2 (4)    

    var picWidth = $('img').first().width(); // Punkt 2 (5)

    console.log(list.length);
    var container = $('.slider');

    container.css('width', picWidth); // Punkt 3
    ul.css('width', picWidth * list.length);

    // Punkt 4
    next.click(function () {

//        console.log('Next');

        if (index < list.length - 1) {

            index++,
            ul.animate({
                left: '-=400px'
            }, 500);

        };


    });




    prev.click(function () {

//        console.log('Prev');

        if (index > 0) {

            index--,
            ul.animate({
                left: '+=400px'
            }, 500);

        };

    });







});