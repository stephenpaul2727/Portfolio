$(document).on('click', 'a', function(event){

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-56
    }, 1000);
});


$(document).ready(function(){
    $(".dropdown-toggle").dropdown("toggle");
});