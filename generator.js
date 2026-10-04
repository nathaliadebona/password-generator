const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

    lowercase: "abcdefghijklmnopqrstuvwxyz",

    numbers: "0123456789",

    symbols: "!@#$%^&*"
};

function generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols) {
    let pool = "";

    if (useUppercase) {
        pool += characters.uppercase;
    }

    if (useLowercase) {
        pool += characters.lowercase;
    }

    if (useNumbers) {
        pool += characters.numbers;
    }

    if (useSymbols) {
        pool += characters.symbols;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        password += pool[randomIndex];
    }

    return password;
}

function calculatePasswordStrength(length, useUppercase, useLowercase, useNumbers, useSymbols) {
    let score = 0;

    if (length >= 12) {
        score += 10;
    } else if (length >= 8) {
        score += 5;
    }

    if (useUppercase) {
        score += 3;
    }

    if (useLowercase) {
        score += 3;
    }

    if (useNumbers) {
        score += 3;
    }

    if (useSymbols) {
        score += 6;
    }

    if (score >= 19) {
        return 4;
    }

    if (score >= 13) {
        return 3;
    }

    if (score >= 7) {
        return 2;
    }

    return 1;
}
