const passwordLength = document.getElementById("passwordLength").value;
const generatedPassword = document.getElementById("password");
const generateButton = document.getElementById("generate");


function generatePassword(length) {

    const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
    const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const numbers = "1234567890";
    const specialChars = "~!@#$%^&*()_+";
    const allChars = lowerCase + upperCase + numbers + specialChars;

    let password = '';

    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}

generateButton.onclick = function () {
    const newPassword = generatePassword(passwordLength);
    generatedPassword.textContent = newPassword;
}