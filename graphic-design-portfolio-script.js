const container = document.querySelector('.container');
document.querySelector('.slider').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
})

function syncImageDetailsWidth() {
    const imageContainer = document.querySelector('.image-container');
    const imageDetails = document.querySelector('.image-details');

    if (imageContainer && imageDetails) {
        const rect = imageContainer.getBoundingClientRect();
        imageDetails.style.width = rect.width + 'px';
    }
}

// Run on load and on resize
window.addEventListener('DOMContentLoaded', syncImageDetailsWidth);
window.addEventListener('resize', syncImageDetailsWidth);

const slideshow = document.getElementById('slideshow');
const icons = document.getElementById('icons');
const thumbnail = document.getElementById('thumbnail');
const beforeImage = document.getElementById('beforeImage');
const afterImage = document.getElementById('afterImage');
const compareBtn = document.getElementById('compare');
const beforeBtn = document.getElementById('before');
const afterBtn = document.getElementById('after');
const slider = document.getElementById('slider')
const closeIcon = document.getElementById('closeIcon');

thumbnail.addEventListener('click', () => slideshow.classList.add('active'));
thumbnail.addEventListener('click', () => icons.classList.add('active'));
closeIcon.addEventListener('click', () => slideshow.classList.remove('active'));
closeIcon.addEventListener('click', () => icons.classList.remove('active'));

closeIcon.addEventListener('onkeydown', )

compareBtn.addEventListener('click', () => {
    beforeBtn.classList.remove('active');
    afterBtn.classList.remove('active');
    compareBtn.classList.add('active');
});

beforeBtn.addEventListener('click', () => {
    compareBtn.classList.remove('active');
    afterBtn.classList.remove('active');
    beforeBtn.classList.add('active');
});

afterBtn.addEventListener('click', () => {
    compareBtn.classList.remove('active');
    beforeBtn.classList.remove('active');
    afterBtn.classList.add('active');
});

