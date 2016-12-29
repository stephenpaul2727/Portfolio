$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
});


$(window).scroll(function() {

    if ($(this).scrollTop()>20)
     {
        $('.navbar').fadeOut();
     }
    else
     {
      $('.navbar').fadeIn();
     }
 });
