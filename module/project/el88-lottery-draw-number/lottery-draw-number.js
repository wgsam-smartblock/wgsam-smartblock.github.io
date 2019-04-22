const minimum_jumps = 30;
let current_index = -1;
let jumps = 0;
let speed = 20;
let timer = 0;
let prize = -1;

// For Draw Box Array
let luckDrawObj = {
    "luckyList": [{
        "id": "0",
        "number": "1234",
        "selected": false
    }, {
        "id": "1",
        "number": "2345",
        "selected": false
    }, {
        "id": "2",
        "number": "3456",
        "selected": false
    }, {
        "id": "3",
        "number": "4567",
        "selected": true
    }, {
        "id": "4",
        "number": "6789",
        "selected": false
    }, {
        "id": "5",
        "number": "9876",
        "selected": false
    }, {
        "id": "6",
        "number": "8765",
        "selected": false
    }, {
        "id": "7",
        "number": "7654",
        "selected": false
    }, {
        "id": "8",
        "number": "6543",
        "selected": true
    }, {
        "id": "9",
        "number": "1234",
        "selected": false
    }, {
        "id": "10",
        "number": "2345",
        "selected": false
    }, {
        "id": "11",
        "number": "3456",
        "selected": false
    }, {
        "id": "12",
        "number": "4567",
        "selected": true
    }, {
        "id": "13",
        "number": "6789",
        "selected": false
    }, {
        "id": "14",
        "number": "9876",
        "selected": false
    }, {
        "id": "15",
        "number": "8765",
        "selected": false
    }, {
        "id": "16",
        "number": "7654",
        "selected": false
    }, {
        "id": "17",
        "number": "6543",
        "selected": true
    }, {
        "id": "18",
        "number": "1234",
        "selected": false
    }, {
        "id": "19",
        "number": "2345",
        "selected": false
    }, {
        "id": "20",
        "number": "3456",
        "selected": false
    }, {
        "id": "21",
        "number": "4567",
        "selected": true
    }, {
        "id": "22",
        "number": "6789",
        "selected": false
    }, {
        "id": "23",
        "number": "9876",
        "selected": false
    }, {
        "id": "24",
        "number": "8765",
        "selected": false
    }, {
        "id": "25",
        "number": "7654",
        "selected": false
    }, {
        "id": "26",
        "number": "6543",
        "selected": true
    }, {
        "id": "27",
        "number": "1234",
        "selected": false
    }, {
        "id": "28",
        "number": "2345",
        "selected": false
    }, {
        "id": "29",
        "number": "3456",
        "selected": false
    }, {
        "id": "30",
        "number": "4567",
        "selected": true
    }, {
        "id": "31",
        "number": "6789",
        "selected": false
    }, {
        "id": "32",
        "number": "9876",
        "selected": false
    }, {
        "id": "33",
        "number": "8765",
        "selected": false
    }, {
        "id": "34",
        "number": "7654",
        "selected": false
    }, {
        "id": "35",
        "number": "6543",
        "selected": true
    }, {
        "id": "36",
        "number": "1234",
        "selected": false
    }, {
        "id": "37",
        "number": "2345",
        "selected": false
    }, {
        "id": "38",
        "number": "3456",
        "selected": false
    }, {
        "id": "39",
        "number": "4567",
        "selected": true
    }, {
        "id": "40",
        "number": "6789",
        "selected": false
    }, {
        "id": "41",
        "number": "9876",
        "selected": false
    }, {
        "id": "42",
        "number": "8765",
        "selected": false
    }, {
        "id": "43",
        "number": "7654",
        "selected": false
    }, {
        "id": "44",
        "number": "6543",
        "selected": true
    }, {
        "id": "45",
        "number": "1234",
        "selected": false
    }, {
        "id": "46",
        "number": "2345",
        "selected": false
    }, {
        "id": "47",
        "number": "3456",
        "selected": false
    }, {
        "id": "48",
        "number": "4567",
        "selected": true
    }, {
        "id": "49",
        "number": "6789",
        "selected": false
    }, {
        "id": "50",
        "number": "9876",
        "selected": false
    }, {
        "id": "51",
        "number": "8765",
        "selected": false
    }, {
        "id": "52",
        "number": "7654",
        "selected": false
    }, {
        "id": "53",
        "number": "6543",
        "selected": true
    }, {
        "id": "54",
        "number": "1234",
        "selected": false
    }, {
        "id": "55",
        "number": "2345",
        "selected": false
    }, {
        "id": "56",
        "number": "3456",
        "selected": false
    }, {
        "id": "57",
        "number": "4567",
        "selected": true
    }, {
        "id": "58",
        "number": "6789",
        "selected": false
    }, {
        "id": "59",
        "number": "9876",
        "selected": false
    }, {
        "id": "60",
        "number": "8765",
        "selected": false
    }, {
        "id": "61",
        "number": "7654",
        "selected": false
    }, {
        "id": "62",
        "number": "6543",
        "selected": true
    }, {
        "id": "63",
        "number": "1234",
        "selected": false
    }, {
        "id": "64",
        "number": "2345",
        "selected": false
    }, {
        "id": "65",
        "number": "3456",
        "selected": false
    }, {
        "id": "66",
        "number": "4567",
        "selected": true
    }, {
        "id": "67",
        "number": "6789",
        "selected": false
    }, {
        "id": "68",
        "number": "9876",
        "selected": false
    }, {
        "id": "69",
        "number": "8765",
        "selected": false
    }, {
        "id": "70",
        "number": "7654",
        "selected": false
    }, {
        "id": "71",
        "number": "6543",
        "selected": true
    }, {
        "id": "72",
        "number": "1234",
        "selected": false
    }, {
        "id": "73",
        "number": "2345",
        "selected": false
    }, {
        "id": "74",
        "number": "3456",
        "selected": false
    }, {
        "id": "75",
        "number": "4567",
        "selected": true
    }, {
        "id": "76",
        "number": "6789",
        "selected": false
    }, {
        "id": "77",
        "number": "9876",
        "selected": false
    }, {
        "id": "78",
        "number": "8765",
        "selected": false
    }, {
        "id": "79",
        "number": "7654",
        "selected": false
    }, {
        "id": "80",
        "number": "6543",
        "selected": true
    }, {
        "id": "81",
        "number": "1234",
        "selected": false
    }, {
        "id": "82",
        "number": "2345",
        "selected": false
    }, {
        "id": "83",
        "number": "3456",
        "selected": false
    }, {
        "id": "84",
        "number": "4567",
        "selected": true
    }, {
        "id": "85",
        "number": "6789",
        "selected": false
    }, {
        "id": "86",
        "number": "9876",
        "selected": false
    }, {
        "id": "87",
        "number": "8765",
        "selected": false
    }]
};

let randomNumSplice = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// For Selected Lucky Table
let selectedNumObj = {
    "selectedNumList": [{
        "id": 12,
        "number": "7890"
    }, {
        "id": 3,
        "number": "8123"
    }]
}

const prizes = {
    0: '1',
    1: '2',
    2: '3',
    3: '4',
    4: '5',
    5: '6',
    6: '7',
    7: '8',
    8: '9',
};

$(document).ready(() => {
    renderLuckyDrawBox();
    $('#js-start').on('click', init);
});

// Rendering Lucky Draw Box
function renderLuckyDrawBox() {
    $("#js-lotto-drawbox").html(generate_DrawBox(luckDrawObj.luckyList));
    console.log("render Lucky Draw Success");
}

function generate_DrawBox(drawBoxData) {
    let html = "<table class='container'><tr>";

    drawBoxData.forEach((item, index) => {
        let configuredIndex = index + 1;

        // checking for selected
        let isBold = item.selected ? "bold" : "";

        html += "<td class='square " + isBold + "' data-order=" + item.id + ">" +
            "<div class='square__content'>" + item.number + "</div></td>";

        // breaking calculation
        if (configuredIndex % 11 === 0 || configuredIndex === 0) {
            html += "</tr><tr>";
        }
    });

    html += "</table>";
    return html;
}
// End of Rendering Lucky Draw Box

// Start Drawing - Effect, Animation, Speed
function init() {
    jumps = 0;
    speed = 150;
    prize = -1;
    controllSpeed();
}

function controllSpeed() {
    jumps += 1;
    runRandomDraw();
    // 1. Keep Draw until get the prize
    if (jumps > minimum_jumps + 10 && prize === current_index) {
        clearTimeout(timer);
        // setTimeout(function () {
        swal({
            title: `You Have Won a Prize ${prizes[current_index]}`,
            text: 'Congratulations! Close in 3sec',
            timer: 3000,
            buttons: false,
        });
        // }, 50);

        prize = -1;
        jumps = 0;

        $(`[data-order="${current_index}"]`).addClass('bold');

        // 2. Continue draw
    } else {
        // Speed init Draw Effect
        if (jumps < minimum_jumps) {
            speed -= 5; // 加快
            // Confirm prize location
        } else if (jumps === minimum_jumps) {
            const random_number = getFinalLuckyNumber();
            prize = random_number;
        }
        // } else {
        //     // Slow Down if reach prize
        //     if ((jumps > minimum_jumps + 10) && prize === (current_index + 1)) {
        //         speed += 200;
        //     } else {
        //         speed += 20;
        //     }
        // }
        // if (speed < 100) {
        //     speed = 100;
        // }

        timer = setTimeout(controllSpeed, speed);
    }
}

// Random Draw
function runRandomDraw() {
    $(`[data-order="${current_index}"]`).removeClass('active');
    current_index = Math.floor(Math.random() * 88);
    $(`[data-order="${current_index}"]`).addClass('active');
}

// Get Final Lucky Number
function getFinalLuckyNumber() {
    var randomPosition = Math.floor(Math.random() * 88);

    // var luckyNum = randomNumSplice.splice(randomPosition, 1);
    // console.log("LuckyNumber> ", luckyNum[0]);
    // return luckyNum[0];

    console.log("LuckyNumber> ", randomPosition)
    return randomPosition;
}