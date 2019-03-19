// Side Menu Bar collapse  	
$('#cd-menu-trigger').on('click', function openMainMenu() {
    $('#cd-side-menu')[0].style.width = '330px';
    $('#cd-menu-trigger')[0].style.display = 'none';

});

// Menu list "X" close  
$('#cd-x-trigger').on('click', function closeMainMenu() {
    $('#cd-side-menu')[0].style.width = '0';
    setTimeout(function () {
        $('#cd-menu-trigger')[0].style.display = 'block';
    }, 200);
});

// Chat menu
var preloadbg = document.createElement("img");
preloadbg.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/timeline1.png";

$(".chat-friend-container").each(function () {
    $(this).click(function () {
        var childOffset = $(this).offset();
        var parentOffset = $(this).parent().parent().offset();
        var childTop = childOffset.top - parentOffset.top;
        var clone = $(this).find('img').eq(0).clone();
        var top = childTop + 12 + "px";

        $(clone).css({ 'top': top }).addClass("floatingImg").appendTo("#chat-container");

        setTimeout(function () { $("#profile p").addClass("animate"); $("#profile").addClass("animate"); }, 100);
        setTimeout(function () {
            $(".messages").addClass("animate");
            $('.cx, .cy').addClass('s1');
            setTimeout(function () { $('.cx, .cy').addClass('s2'); }, 100);
            setTimeout(function () { $('.cx, .cy').addClass('s3'); }, 200);
        }, 150);

        $('.floatingImg').animate({
            'z-index': '5',
            'width': '68px',
            'left': '135px',
            'top': '20px',
        }, 200);

        var name = $(this).find("p strong").html();
        var email = $(this).find("p span").html();
        $("#profile p").html(name);
        $("#profile span").html(email);

        $(".message").not(".right").find("img").attr("src", $(clone).attr("src"));
        $('#chat-list-container').fadeOut();
        $('#chatbox-container').fadeIn();
        $('#mCSB_1').animate({
            scrollTop: $('#mCSB_1_container')[0].scrollHeight
        }, 500);

        $('#close').unbind("click").click(function () {
            $(".messages, #profile, #profile p").removeClass("animate");
            $('.cx, .cy').removeClass("s1 s2 s3");
            $('.floatingImg').animate({
                'width': "40px",
                'top': top,
                'left': '12px'
            }, 200, function () { $('.floatingImg').remove() });

            setTimeout(function () {
                $('#chatbox-container').fadeOut();
                $('#chat-list-container').fadeIn();
            }, 50);
        });

        // submit message 
        $('.message-submit').click(function () {
            insertMessage();
        });
    });
});

var $messages = $('.messages-content'), d, h, m, i = 0;

var Fake = [
    'Hi there, I\'m Fabio and you?',
    'Nice to meet you',
    'How are you?',
    'Not too bad, thanks',
    'What do you do?',
    'That\'s awesome',
    'Codepen is a nice place to stay',
    'I think you\'re a nice person',
    'Why do you think that?',
    'Can you explain?',
    'Anyway I\'ve gotta go now',
    'It was a pleasure chat with you',
    'Time to make a new codepen',
    'Bye',
    ':)'
];

$(window).load(function () {
    $messages.mCustomScrollbar();
    setTimeout(function () {
        fakeMessage();
    }, 100);
});

$(window).on('keydown', function (e) {
    if (e.which == 13) {
        insertMessage();
        return false;
    }
});

function updateScrollbar() {
    $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 10,
        timeout: 0
    });
}

function setDate() {
    d = new Date()
    if (m != d.getMinutes()) {
        m = d.getMinutes();
        $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    }
}

function fakeMessage() {
    if ($('.message-input').val() != '') {
        return false;
    }
    $('<div class="message loading new"><figure class="avatar"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();

    setTimeout(function () {
        $('.message.loading').remove();
        $('<div class="message new"><figure class="avatar"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
        setDate();
        updateScrollbar();
        i++;
    }, 500 + (Math.random() * 20) * 100);
}

function insertMessage() {
    msg = $('.message-input').val();
    if ($.trim(msg) == '') {
        return false;
    }
    $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    $('.message-input').val(null);
    updateScrollbar();
    setTimeout(function () {
        fakeMessage();
    }, 1000 + (Math.random() * 20) * 100);
}

