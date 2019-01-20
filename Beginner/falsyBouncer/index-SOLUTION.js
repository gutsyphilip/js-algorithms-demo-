// USING A FOR OF LOOP

function falsyBouncer(array) {
    let result =[]
    
    for (value of array){
        if(value){
            result.push(value)
        }
    }
    
    return result
}

// USING .FILTER()

function falsyBouncer(array) {
    return array.filter((value) =>{
      return Boolean(value)  
    })
}

