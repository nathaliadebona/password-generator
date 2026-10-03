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
