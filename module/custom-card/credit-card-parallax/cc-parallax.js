function parallaxScroll() {
    var scrolledY = $(window).scrollTop();
    var cardHeight = 100;
    var cardHeight2 = 200;
    if (scrolledY >= cardHeight && scrolledY <= cardHeight2) {
        $('.creditCards').css('right', ((scrolledY - cardHeight) * .95 - 100) + 'px');
        $('.master').css('transform', 'rotate(' + (0 + (scrolledY - cardHeight) * 0.2) + 'deg)');
        $('.visa').css('transform', 'rotate(' + (0 - (scrolledY - cardHeight) * 0.2) + 'deg)');
    } else if (scrolledY > cardHeight2) {
        $('.creditCards').css('right', ((cardHeight2 - cardHeight) * .95 - 100) + 'px');
        $('.master').css('transform', 'rotate(' + (0 + (cardHeight2 - cardHeight) * 0.2) + 'deg)');
        $('.visa').css('transform', 'rotate(' + (0 - (cardHeight2 - cardHeight) * 0.2) + 'deg)');
    } else if (scrolledY < cardHeight) {
        $('.creditCards').css('right', (0 * .95 - 100) + 'px');
        $('.master').css('transform', 'rotate(' + (0 + 0 * 0.2) + 'deg)');
        $('.visa').css('transform', 'rotate(' + (0 - 0 * 0.2) + 'deg)');
    }
}

$(document).ready(function () {
    $(window).bind('scroll', function (e) {
        parallaxScroll();
    });
});