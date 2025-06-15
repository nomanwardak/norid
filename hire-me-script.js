const category = document.getElementById('category');
const otherInput = document.getElementById('otherInput');


if (category.value === 'other') {
    otherInput.classList.add('active');
}