let inputArea = document.getElementById('number');
let convertBtn = document.getElementById('convert-btn');
let outputArea = document.getElementById('output');

convertBtn.addEventListener('click', function () {
    let number = parseInt(inputArea.value);

    if (inputArea.value === '') {
        outputArea.textContent = "Please enter a valid number";
    }
    else if (inputArea.value < 1) {
        outputArea.textContent = "Please enter a number greater than or equal to 1";
    }
    else if (inputArea.value >= 4000) {
        outputArea.textContent = "Please enter a number less than or equal to 3999";
    } 
    else {
        outputArea.textContent = convertToRoman(number);
    }
});

function convertToRoman(num) {
    let romanNumeral = '';
    let romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = "";

    for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
            romanNumeral += key;
            num -= romanNumerals[key];
        } 
    }
    return romanNumeral;
}