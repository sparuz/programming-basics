const prompt = require('prompt-sync')();

let phrase = prompt("Check if your Phrase is palindrome: ")
const arrayPhrase = []

for (i = 0; i < phrase.length; i++) {
    arrayPhrase.push(phrase[i])
}
const arrayReverse = arrayPhrase.slice().reverse()

const a = arrayPhrase.toString()
const b = arrayReverse.toString()


if (a != b) {
    console.log("Phrase is not palindrome")
} else {
    console.log("Phrase palindrome")

}