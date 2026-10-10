# Password Generator 🔐

A customizable password generator: choose the length and the types of characters, generate a random password, see how strong it is, and copy it with one click.

Based on a [Frontend Mentor](https://www.frontendmentor.io/) challenge, built as a front-end learning project with plain HTML, CSS, and JavaScript (no frameworks).

https://nathaliadebona.github.io/password-generator/

## Features

- Adjustable length from 5 to 20 characters, with a slider that fills up to the thumb as you drag
- Four character options: uppercase letters, lowercase letters, numbers, and symbols
- Strength indicator with four levels (too weak, weak, medium, strong), shown as text and colored bars
- One-click copy to clipboard, with a feedback message
- Warning message when no character type is selected
- A password is generated as soon as the page loads
- Dark theme, responsive layout (mobile and desktop)
- Accessibility basics: labels linked to inputs, an `aria-label` on the icon-only button, and an `aria-live` region for feedback messages

## How the strength is calculated

The strength is a score based on the password length and the character types used.

**Length**
- Up to 7 characters: 0 points
- 8 to 11 characters: 5 points
- 12 or more: 10 points

**Character types**
- Lowercase letters: 3 points
- Uppercase letters: 3 points
- Numbers: 3 points
- Symbols: 6 points

**Score to level** (maximum score is 25)
- 0 to 6: too weak (1 bar, red)
- 7 to 12: weak (2 bars, orange)
- 13 to 18: medium (3 bars, yellow)
- 19 to 25: strong (4 bars, green)

## Tech stack

- HTML5, CSS3, and JavaScript, no frameworks
- [Font Awesome](https://fontawesome.com/) (icons)
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Google Fonts)

## Project structure

- `index.html`: page structure
- `style.css`: styles, with colors and font as CSS variables
- `generator.js`: logic only (password generation and strength calculation)
- `script.js`: interface (events, slider, strength bars, feedback message)

`generator.js` has to be loaded before `script.js`, since the interface calls its functions.

## Running locally

1. Clone the repository.
2. Open `index.html` in your browser (or use a local server such as VS Code's "Live Server" extension).

No build step or dependencies needed.

## Note

Passwords are generated with `Math.random()`, which is fine for a learning project but is not cryptographically secure. For real-world use, a generator based on `crypto.getRandomValues()` is the right choice.

## Screenshots

<img width="1824" height="1082" alt="nathaliadebona github io_password-generator_" src="https://github.com/user-attachments/assets/bf80c1ff-be56-44e5-a0f3-3a9782e51e7d" />

---

Personal learning project, built by [Nathalia](https://github.com/nathaliadebona).
