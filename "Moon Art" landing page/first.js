const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
const fullscreenBg = document.querySelector('.bg-fullscreen');

function setActive(index) {
    // 1. Remove active class from everything
    cards.forEach(c => c.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    // 2. Add active class to clicked card and dot
    if (cards[index]) cards[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');

    // 3. Grab the custom CSS property image from the active card
    const selectedImg = cards[index].style.getPropertyValue('--img');
    
    // 4. Set it as the background of the fullscreen div
    fullscreenBg.style.backgroundImage = selectedImg;
}

// Initialize with the first image
setActive(0);

// Event Listeners for Cards
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        setActive(index);
    });
});

// Event Listeners for Dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        setActive(index);
    });
});