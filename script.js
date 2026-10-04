const lengthSlider = document.getElementById('character-length');
const lengthNumber = document.getElementById('length-number');

lengthSlider.addEventListener('input', () => {
    lengthNumber.textContent = lengthSlider.value;

    const progress = ((lengthSlider.value - lengthSlider.min) / (lengthSlider.max - lengthSlider.min)) * 100;

    lengthSlider.style.setProperty("--progress", progress + "%");

    console.log(progress)
});