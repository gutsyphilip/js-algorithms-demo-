// CHAINING BUILT-IN METHODS

function reverseString(text) {
    return text.split("").reverse().join("");
}

//  CHAINING BUILT-IN METHODS USING ES6

function reverseString(text) {
    return [...text].reverse().join('');
}

// USING A FOR LOOP

function reverseString(text) {
    let result = "";
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    return result;
}

// USING A FOR..OF LOOP IN ES6

function reverseString(text) {
    let result = "";
    for (let char of text) {
        result = char + result
    }
    return result;
}

// RECURSIVE METHOD

function reverseString(text) {
    if (text === "") {
        return ""
    } else {
        return reverseString(text.substr(1)) + text[0]
    }
}


// USING .REDUCE()

function reverseString(text) {
    return text.split("").reduce((acc, char) => char + acc);
}