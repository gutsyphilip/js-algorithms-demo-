/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/


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

module.exports = factorial