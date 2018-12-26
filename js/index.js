/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-12-24 17:47:31
 * @version $Id$
 */
(function($) {

    $(".box").on('mouseenter', function(event) {

        var dotX = event.pageX - $(this).width() / 2 - $(this).offset().left,
            dotY = event.pageY - $(this).height() / 2 - $(this).offset().top,
            dotNum = Math.round(((Math.atan2(dotY, dotX) * (180 / Math.PI) + 180) / 90) + 3) % 4;

        console.log(dotNum)

        switch (dotNum) {
            case 0:
                $(this).attr('class', 'inTop on');
                break;
            case 1:
                $(this).attr('class', 'inRight on');
                break;
            case 2:
                $(this).attr('class', 'inBottom on');
                break;
            case 3:
                $(this).attr('class', 'inLeft on');
                break;
        }
    });

    $(".box").on('mouseleave', function(event) {

        var dotX = event.pageX - $(this).width() / 2 - $(this).offset().left,
            dotY = event.pageY - $(this).height() / 2 - $(this).offset().top,
            dotNum = Math.round(((Math.atan2(dotY, dotX) * (180 / Math.PI) + 180) / 90) + 3) % 4;

        console.log(dotNum)

        switch (dotNum) {
            case 0:
                $(this).attr('class', 'outTop on');
                break;
            case 1:
                $(this).attr('class', 'outRight on');
                break;
            case 2:
                $(this).attr('class', 'outBottom on');
                break;
            case 3:
                $(this).attr('class', 'outLeft on');
                break;
        }
    });



})(jQuery)