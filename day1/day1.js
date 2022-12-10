/* Panic function
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods.

If the string is a phrase or sentence, add a 😱 emoji in between each word.

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/

// Test your function
console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"))
console.log(panic("hello"))

// My solution
function panic(phrase) {
    let splitPhrase = phrase.split(" ")

    if (splitPhrase.length === 1) {
        return `${splitPhrase.join().toUpperCase()}!`
    } else {
        let newPhrase = ""
        for (let i = 0; i < splitPhrase.length; i++) {
            if (i === splitPhrase.length - 1) {
                newPhrase += `${splitPhrase[i].toUpperCase()}!`
            } else {
                newPhrase += `${splitPhrase[i].toUpperCase()} 😱 `
            }
        }
        return newPhrase
    }
}
