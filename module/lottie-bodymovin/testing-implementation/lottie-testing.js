var vid = document.getElementById("myVideo");

function enableLoop() {
    vid.loop = true;
    vid.play();
}

var loader = document.getElementById("lottie");

var animation = bodymovin.loadAnimation({
    container: loader,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/delivery.json'
});
loader.addEventListener("mouseenter", function () {
    animation.play();
});
loader.addEventListener("mouseleave", function () {
    animation.stop();
});