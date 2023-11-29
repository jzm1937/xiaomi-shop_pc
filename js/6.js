let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow_inbox a');
const prevBtn = document.querySelector('.slideshow .up');
const nextBtn = document.querySelector('.slideshow .down');
let slideInterval;

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    clearInterval(slideInterval);
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    clearInterval(slideInterval);
});

function startSlide() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 3000); // 每隔3秒切换一次图片
}

startSlide();

const container = document.querySelector('.slideshow');

container.addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

container.addEventListener('mouseout', () => {
    startSlide();
});
