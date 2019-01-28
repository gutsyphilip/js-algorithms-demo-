// USING A FOR LOOP

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

// USING A WHILE LOOP

function factorial(n) {
    var result = n
    if (n <= 1) {
        return 1
    }
    while (n > 1) {
        n--
        result *= n
    }
    return result
}

// USING RECURSION

function factorial(n) {
    if (n === 0) {
        return 1
    }
    return n * factorial(n - 1)
}

// USING MEMOIZATION

function factorial(n, memo) {
    memo = memo || {}
    if(memo[n]){
        return memo[n]
    }  
    if (n === 0) {
        return 1
    }
    return memo[n] = n * factorial(n - 1, memo)
}