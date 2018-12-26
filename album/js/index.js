/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-12-24 17:47:31
 * @version $Id$
 */

setTimeout(function() {
    $('.wrapper').removeClass('init');
}, 200)

$('.item').on('click', function(event) {
    $(this).addClass('active');
    $('.wrapper').addClass('actwrap');
});

$('.close').on('click', function(event) {

    event.stopPropagation();
    $(".item").removeClass('active');
    $('.wrapper').removeClass('actwrap');
});