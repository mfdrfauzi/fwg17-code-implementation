// tanpa built-in
// const isPalindrome = (kata) => {
//     let reversed = ""
//     for (let i = kata.length - 1; i >= 0; i--) {
//         reversed += kata[i]
//     }

//     if (reversed === kata) {
//         return kata + " adalah kata palindrom"
//     } else {
//         return kata + " bukan kata palindrom"
//     }
// }

// const inputKata = "malam"

// console.log(isPalindrome(inputKata))


// dengan built-in

const isPalindrome = (kata) => {
    kata = kata.toLowerCase().replace(' ' , '')
    const reversed = kata.split('').reverse().join('')
    if (reversed === kata) {
        return kata + " adalah kata palindrom"
    } else {
        return kata + " bukan kata palindrom"
    }
}

const inputKata = "malam"

console.log(isPalindrome(inputKata))
