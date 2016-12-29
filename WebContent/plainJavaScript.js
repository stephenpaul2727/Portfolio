$(document).on('click', 'a', function(event){

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-56
    }, 1000);
});


//$(window).scroll(function() {
//
//    if ($(this).scrollTop()>20)
//     {
//        $('.navbar').fadeOut();
//     }
//    else
//     {
//      $('.navbar').fadeIn();
//     }
// });
