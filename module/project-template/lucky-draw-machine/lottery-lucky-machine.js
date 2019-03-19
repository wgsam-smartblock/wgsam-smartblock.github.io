$(function () {
    $("#lottery a").luckyDraw({
        id: 'lottery',
        speed: 20,
        cycle: 80,
        beforeSend: function () {
            console.log('Start Lucky Draw！');
        },
        success: function (winingPrizeImg, drawTime) {
            console.log('Finish Lucky Draw！', drawTime);
            showDialog(winingPrizeImg, drawTime);
            $('#remainingDraw').text('剩余' + drawTime + "次");
        }
    });
});

function showDialog(winingPrizeImg, drawTime) {
    var tempStr = "<div class='Dialog'><div><div><div class='centre-text'><h2>恭喜 ！</h2><p>你获得</p></div><img src=" + winingPrizeImg + "><div><button class='btnCloseDialog'>Congrats!</button></div></div></div></div>";
    $("body").css({ overflow: 'hidden' })
    $(".firework-container").css("display", "block");
    $("body").append(tempStr).find(".Dialog").find("button").on("click", function () {
        DestroyDialog();
        listWonPrize(winingPrizeImg, drawTime)
    });
}

function DestroyDialog() {
    $(".Dialog").remove();
    $('body').css('overflow', 'scroll');
    $(".firework-container").css("display", "none");

}

function listWonPrize(winingPrizeImg, drawTime) {
    var prizeImg = "<img class='fadeIn' src=" + winingPrizeImg + " width='88' height='88'>";

    if (drawTime == 3) {
        $("#fsrtPrizeBox").append($(prizeImg));
    } else if (drawTime == 2) {
        $("#scndPrizeBox").append($(prizeImg));
    } else if (drawTime == 1) {
        $("#thrdPrizeBox").append($(prizeImg));
    } else if (drawTime == 0) {
        $("#frthPrizeBox").append($(prizeImg));
    }
}



