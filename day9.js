/* toTitleCase
Write a function that will capitalize every word in a sentence.

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/*
First, write a function that takes in one word and
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
    const firstLetter = word.substr(0, 1).toUpperCase()
    const restOfWord = word.substr(1, word.length)
    return `${firstLetter}${restOfWord}`
}

/*
Now write a function that capitalizes every word in a sentence.
How can you reuse the function you just wrote?
*/

function toTitleCase(str){
    const strArray = str.split(" ")
    let newWord = ""
    for (let i = 0; i < strArray.length; i++) {
        newWord += `${capitalizeWord(strArray[i])} `
    }
    return newWord
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
