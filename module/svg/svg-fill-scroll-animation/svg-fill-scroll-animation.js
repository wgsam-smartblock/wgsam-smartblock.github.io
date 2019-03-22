$(document).ready(function () {
    //cache window
    $window = $(window);
    var $tick = $("#ticker span"),
        $top = $(window).scrollTop();

    hideSVGPaths($('svg'));

    $(window).bind('scroll', function (e) {
        $top = $(window).scrollTop();
        $tick.html($top);

        if ($top > 0 && $top < 1000) { //SLIDE 1
            //grab existing element offset top value
            var $v1top = $('#v1').offset().top;

            $('#v1').css({
                "top": (300 - (-$top * .1)) + "px",
                "opacity": (1 - ($top * .001))
            })
        }
        if ($top < 100000) { //SLIDE 2
            var $slide2 = $top;
            $('#v2').css({
                "top": (($slide2 * .01)) + "px"
            })
            scrollSVGPaths($('svg'), $slide2);
        }
    });

});

//Reset if needed for manual animations..
function hideSVGPaths(parentElement) {

    var paths = $(parentElement).find('path');

    //for each PATH..
    $.each(paths, function () {

        //get the total length
        var totalLength = this.getTotalLength();

        //set PATHs to invisible
        $(this).css({
            'stroke-dashoffset': totalLength,
            'stroke-dasharray': totalLength + ' ' + totalLength
        });
    });
}

function scrollSVGPaths(_parentElement, scroll) {
    //capture PATH..
    var paths = $(_parentElement).find('path');

    //for each PATH..
    $.each(paths, function (i) {

        //get the total length
        var totalLength = this.getTotalLength();
        var appearDampener = .05;
        var singlePercent = (totalLength * 0.01) * scroll;
        var singlePoint = Math.max(0, Math.min(singlePercent * appearDampener, totalLength));
        //Reset: set PATHs to invisible
        $(this).css({
            'stroke-dashoffset': totalLength - singlePoint,
            'stroke-dasharray': totalLength
        });

    });
}