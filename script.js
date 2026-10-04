const lengthSlider = document.getElementById('character-length');
const lengthNumber = document.getElementById('length-number');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');
const passwordBox = document.getElementById('password');
const feedbackPill = document.getElementById('feedback-pill');
const copyBtn = document.getElementById('copy-btn');
const strengthInfo = document.getElementById('strength-info');
const strengthBars = document.querySelectorAll('.strength-bar');
const strengthText = [
    "TO WEAK",
    "WEAK",
    "MEDIUM",
    "STRONG"
]

function updateSlider() {
    lengthNumber.textContent = lengthSlider.value;

    const progress = ((lengthSlider.value - lengthSlider.min) / (lengthSlider.max - lengthSlider.min)) * 100;

    lengthSlider.style.setProperty("--progress", progress + "%");
}

lengthSlider.addEventListener('input', updateSlider);

function handleGenerate() {
    const hasSelectedType = uppercaseCheckbox.checked || lowercaseCheckbox.checked || numbersCheckbox.checked || symbolsCheckbox.checked;

    if (!hasSelectedType) {
        showFeedbackMessage("Select at least one option");
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

    const strengthLevel = calculatePasswordStrength(lengthSlider.value, uppercaseCheckbox.checked, lowercaseCheckbox.checked, numbersCheckbox.checked, symbolsCheckbox.checked);

    strengthInfo.textContent = strengthText[strengthLevel - 1];
    updateStrengthBars(strengthLevel);
}

generateBtn.addEventListener('click', handleGenerate);


function updateStrengthBars(level) {
    strengthBars.forEach((bar, index) => {
        bar.classList.remove("level-1", "level-2", "level-3", "level-4");

        if (index < level) {
            bar.classList.add("level-" + level);
        }
    });
}

function handleCopy() {
    navigator.clipboard.writeText(passwordBox.textContent);
    showFeedbackMessage("Copied!");
}

copyBtn.addEventListener('click', handleCopy);

function showFeedbackMessage(message) {
    feedbackPill.textContent = message;
    feedbackPill.classList.add("show");

    setTimeout(() => {
        feedbackPill.classList.remove("show");
    }, 2000);
}

updateSlider();