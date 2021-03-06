const layerSpeeds = [
    0.3,
    0.4,
    0.5,
    0.65,
    0.75,
    0.85,
    1
];

const parallaxLayers = document.querySelectorAll(".parallax-background__layer");

let previousScrollPosition = null;
let currentScrollPosition = getScrollTop();


function animationFrame() {
    currentScrollPosition = getScrollTop();
    if(currentScrollPosition !== previousScrollPosition) {
        previousScrollPosition = currentScrollPosition;        
        updateParallax();
    }

    requestAnimationFrame(animationFrame);
}

function updateParallax() {
    parallaxLayers.forEach(function(layer, index) {
        const amountToMove = (1 - layerSpeeds[index]) * currentScrollPosition;
        layer.style.transform = `translate3d(0, ${amountToMove}px, 0)`;
    });
}

function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}

requestAnimationFrame(animationFrame);