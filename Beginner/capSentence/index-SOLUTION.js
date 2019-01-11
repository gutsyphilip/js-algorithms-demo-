// USING A FOREACH LOOP
function capSentence(text) {
    let wordArray = text.toLowerCase().split(' ')
    let capArray = []

    wordArray.forEach(word => {
        capArray.push(word[0].toUpperCase() + word.slice(1))
    });

    return capArray.join(' ')
}


// USING .MAP() AND .SLICE()

function capSentence(text) {
    let wordArray = text.toLowerCase().split(' ')
    let capArray = []

    wordArray.map((word)=>{
        capArray.push(word[0].toUpperCase() + word.slice(1))
    })

    return capArray.join(' ')
}


// USING .MAP() AND .REPLACE()


function capSentence(text) {
    let wordArray = text.toLowerCase().split(' ')
    let capArray = []

    wordArray.map((word)=>{
        capArray.push( word.replace(word[0], word[0].toUpperCase() ))
    })

    return capArray.join(' ')
}
