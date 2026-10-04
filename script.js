const lengthSlider = document.getElementById('character-length');
const lengthNumber = document.getElementById('length-number');

lengthSlider.addEventListener('input', () => {
    lengthNumber.textContent = lengthSlider.value;
});