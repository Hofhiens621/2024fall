document.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;

    // Adjust the transform property of each layer based on the scroll position
    document.querySelector('#hero_img_layer:nth-child(1)').style.transform = 'translateX(' + (-scrollPosition * 0.5) + 'px)';
    // Add more layers and adjust the multiplier as needed
});