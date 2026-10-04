const lengthSlider = document.getElementById('character-length');
const lengthNumber = document.getElementById('length-number');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');
const passwordBox = document.getElementById('password');

function updateSlider() {
    lengthNumber.textContent = lengthSlider.value;

    const progress = ((lengthSlider.value - lengthSlider.min) / (lengthSlider.max - lengthSlider.min)) * 100;

    lengthSlider.style.setProperty("--progress", progress + "%");
}

lengthSlider.addEventListener('input', updateSlider);

function handleGenerate() {
    const hasSelectedType = uppercaseCheckbox.checked || lowercaseCheckbox.checked || numbersCheckbox.checked || symbolsCheckbox.checked;

    if (!hasSelectedType) {
        return;
    }

    const password = generatePassword(
        lengthSlider.value,
        uppercaseCheckbox.checked,
        lowercaseCheckbox.checked,
        numbersCheckbox.checked,
        symbolsCheckbox.checked
    );

    passwordBox.textContent = password;
}

generateBtn.addEventListener('click', handleGenerate);

updateSlider();