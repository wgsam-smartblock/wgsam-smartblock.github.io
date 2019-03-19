var send = document.querySelector('.chatbox__input .sendMsg');
var body = document.querySelector('.chatbox__body')
var input = document.querySelector('input');

var messageController = (function () {

  var starkQuotes = [
    "Hi there, I\'m Wg Sam and you?",
    "Nice to meet you",
    "How are you doing?",
    "Pretty good",
    "How\'s life been treating you?",
    "It could be worse, thanks",
    "I\'ve gotta go now",
    "It was a pleasure chat with you",
    "Bye 666 :)"
  ];

  return {
    sendMessage: function () {
      var message_container = document.createElement("div");
      var message = `<img src='https://d2gcv4sxt84gxu.cloudfront.net/uploads/avatars/995064/original.png?1450125781'>
      <div class="message_text"> ${input.value} </div>`;
      message_container.className = "message sender";
      message_container.innerHTML = message;
      body.insertBefore(message_container, body.firstChild);
      input.value = "";
    },
    fakeMsgReply: function () {
      var message_container = document.createElement("div");
      var typing_loading = `<img src='https://scontent.fkul2-1.fna.fbcdn.net/v/t1.0-1/p160x160/43612951_1983102335068647_8550882288328507392_n.jpg?_nc_cat=109&_nc_ht=scontent.fkul2-1.fna&oh=e636a858570664839777c954ad4d47f6&oe=5CBF62EB' />
      <div class="message_text"><span></span><span></span><span></span></div>`;
      message_container.className = "message receive typing";
      message_container.innerHTML = typing_loading;
      body.insertBefore(message_container, body.firstChild);

      setTimeout(function () {
        $(".typing").remove();
        var reply = starkQuotes[Math.floor(Math.random() * starkQuotes.length - 1) + 1];
        var message_container = document.createElement("div");
        var message = `<img src="https://scontent.fkul2-1.fna.fbcdn.net/v/t1.0-1/p160x160/43612951_1983102335068647_8550882288328507392_n.jpg?_nc_cat=109&_nc_ht=scontent.fkul2-1.fna&oh=e636a858570664839777c954ad4d47f6&oe=5CBF62EB" />
      <div class="message_text"> ${reply} </div>`;
        message_container.className = "message receive";
        message_container.innerHTML = message;
        body.insertBefore(message_container, body.firstChild);
      }, 1500 + (Math.random() * 10) * 100);
    }
  }
})();

var init = (function (messageController) {
  ['click', 'keyup'].forEach(event => document.addEventListener(event, handler));

  function handler(e) {
    if (e.keyCode == 13) {
      if (!input.value == null || input.value.trim() !== '') {
        messageController.sendMessage();
        setTimeout(messageController.fakeMsgReply, 1000);
      } else {
        console.log('is empty');
      }
    }
  }

})(messageController);

window.expand = function () {
  $("#chat-circle").toggle('scale');
  $(".chatbox").toggle('scale');
  scrollToBottom();
};

function scrollToBottom() {
  $('.chatbox__body').animate({
    scrollTop: $('.chatbox__body')[0].scrollHeight
  }, 500);
}

function sendMsg() {
  if (!input.value == null || input.value.trim() !== '') {
    messageController.sendMessage();
    setTimeout(messageControlzler.fakeMsgReply, 1000);

  } else {
    console.log('is empty');
  }
}
