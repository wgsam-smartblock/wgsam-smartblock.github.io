//set default degree (360*5)
var degree = 1800;
//number of clicks = 0
var clicks = 0;

$(document).ready(function () {

    /*WHEEL SPIN FUNCTION*/
    $('#spin').click(function () {

        //add 1 every click
        clicks++;

        /*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
        var newDegree = degree * clicks;
        var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
        totalDegree = newDegree + extraDegree;
        // whatever degree the whel is at, how many degrees between 0–360 is it from it's original position.
        var remainderDegree = totalDegree % 360;
        $('.rouletteBase').css({
            'transform': 'rotate(' + totalDegree + 'deg)'
        });

        // remove name when wheel is spun
        $("#winner").html("");

        // display name when wheel finishes spinning
        function showName(name) {
            console.log(name, "?")
            setTimeout(function () {
                $("#winner").html(name + " chooses ");
            }, 6000);
        }

        // display the cooresponding person's name    
        switch (true) {
            case (remainderDegree > 0 && remainderDegree <= 36):
                showName("9");
                break;
            case (remainderDegree > 36 && remainderDegree <= 72):
                showName("8");
                break;
            case (remainderDegree > 72 && remainderDegree <= 108):
                showName("7");
                break;
            case (remainderDegree > 108 && remainderDegree <= 144):
                showName("6");
                break;
            case (remainderDegree > 144 && remainderDegree <= 180):
                showName("5");
                break;
            case (remainderDegree > 180 && remainderDegree <= 216):
                showName("4");
                break;
            case (remainderDegree > 216 && remainderDegree <= 252):
                showName("3");
                break;
            case (remainderDegree > 252 && remainderDegree <= 288):
                showName("2");
                break;
            case (remainderDegree > 288 && remainderDegree <= 324):
                showName("1");
                break;
            default:
                showName("0");
                break;
        }

        // log per click
        console.log('clicks = ' + clicks);
        console.log('newDegree = ' + newDegree);
        console.log('extraDegree = ' + extraDegree);
        console.log('totalDegree = ' + totalDegree);
        console.log('remainderDegree = ' + remainderDegree);
    }); //click

}); //DOCUMENT READY