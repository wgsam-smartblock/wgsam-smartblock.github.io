TweenMax.from(".logo", 1.6, {
    delay: 0.2,
    opacity: 0,
    y: -30,
    ease: Expo.easeInOut
});

TweenMax.from(".text-container", 1.6, {
    delay: 0.4,
    opacity: 0,
    y: -30,
    ease: Expo.easeInOut
});

TweenMax.from(".qr-android-img", 1.6, {
    delay: 0.6,
    opacity: 0,
    y: -30,
    ease: Expo.easeInOut
});

TweenMax.from(".qr-ios-img", 1.6, {
    delay: 0.6,
    opacity: 0,
    y: -35,
    ease: Expo.easeInOut
});

TweenMax.from(".qr-android-link", 1.6, {
    delay: 0.8,
    opacity: 0,
    y: -35,
    ease: Expo.easeInOut
});

TweenMax.from(".qr-ios-link", 1.6, {
    delay: 0.8,
    opacity: 0,
    y: -40,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".info-container p,li", 2, {
    delay: 0.3,
    opacity: 0,
    x: 60,
    ease: Expo.easeInOut
}, 0.1);

TweenMax.from(".right-content img", 1.6, {
    delay: 1,
    opacity: 0,
    y: 60,
    ease: Expo.easeInOut
});

