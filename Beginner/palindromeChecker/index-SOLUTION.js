// AN INTUITIVE APPROACH

function palindromeChecker(text) {

    var reversedText = text.toLowerCase()
        .split('').reverse().join('')

    return text === reversedText
}


// LOOPING THROUGH AND COMPARING CHARACTERS


function palindromeChecker(text) {
    let charArray = text.toLowerCase().split('')

    let result = charArray.every((letter, index) => {
        return letter === charArray[charArray.length - index - 1];
    })

    return result
}

// LOOPING THROUGH AND COMPARING CHARACTERS(OPTIMIZED)


function palindromeChecker(text) {
    var textLen = text.length;
    for (var i = 0; i < textLen / 2; i++) {
        if (text[i] !== text[textLen - 1 - i]) {
            return false;
        }
    }
    return true;
}