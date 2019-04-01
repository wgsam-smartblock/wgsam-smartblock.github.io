TweenMax.from(".logo", 1.6, {
    delay: 0.2,
    opacity: 0,
    x: -10,
    rotation: 180,

    ease: Expo.easeInOut
});

TweenMax.from(".wrapper", 1.6, {
    delay: 0.3,
    opacity: 0,
    y: -50,
    ease: Expo.easeInOut
});

TweenMax.from(".feature-box h1", 1.6, {
    delay: 0.7,
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut
});

TweenMax.from(".feature-box p", 1.6, {
    delay: 0.8,
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut
});

TweenMax.from(".feature-img", 1.6, {
    delay: 0.85,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
});

TweenMax.from(".wave-img", 2, {
    delay: 0.2,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".navbar-collapse ul li", 2, {
    delay: 0.7,
    opacity: 0,
    y: -30,
    ease: Expo.easeInOut
}, 0.2);