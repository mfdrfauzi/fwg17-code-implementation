// function reverseSentence(text) {
//     let kata = ""
//     let reversed = ""
//     let i = text.length - 1
//     while (i >= 0) {
//         if (text[i] !== " ") {
//             kata = text[i] + kata
//         } else {
//             reversed = reversed + kata + " "
//             kata = ""
//         }
//         i--;
//     }
//     reversed = reversed + kata
//     return reversed
// }

// const inputText = "Saya belajar pemrograman"
// const reversedText = reverseSentence(inputText)
// console.log(reversedText)

// dengan built in

const reverseSentence = (text) => {
    const words = text.split(" ")
    const reversedWords = words.map(word => {
        return word.split("").reverse().join("")
    });
    return reversedWords.join(" ")
}

const inputText = "Saya belajar pemrograman"
const reversedText = reverseSentence(inputText)
console.log(reversedText)
