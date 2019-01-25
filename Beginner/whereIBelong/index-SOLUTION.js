// ITERATING AND COMPARING WITH A FORLOOP(BY FINDING THE IMMEDIATE LARGER VALUE)

function whereIBelong(arr, num) {
    arr.sort((a, b) => {
        return a - b
    })

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return i
        }
    }

    return arr.length

}

// ITERATING AND COMPARING WITH A FORLOOP(BY COUNTING ALL SMALLER VALUES)

function whereIBelong(arr, num) {

    var counter = 0
    for (i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
            counter++
        }
    } 

    return counter
}


// USING A WHILE LOOP

function whereIBelong(arr, num) {
    arr.sort((a, b) => {
        return a - b
    })

    let counter = 0;
    while (num > arr[counter]) {
        counter++
    }

    return counter
}


// FINDING THE NUMBER'S INDEX IN THE ARRAY

function whereIBelong(arr, num) {
    arr.push(num)

    arr.sort((a, b) => a - b)

    return arr.indexOf(num)

}