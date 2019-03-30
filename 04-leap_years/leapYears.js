// 1. Print out all the leap years in the last 100 years.
// var startingYear = 1919;

// for (i = 0; i < 100; i++) {
//     startingYear += 1
//     if (startingYear % 4 === 0) {
//         console.log(startingYear)
//     }
// }


// 2a. Print out multiples of 7
var numbers = 0;

// for (i = 0; i < 200; i++) {
//     numbers += 1
//     if (numbers % 7 === 0) {
//         console.log(numbers)
//     }
// }

// 2b. Print out every second odd number

var numbers = 0
var oddNumbers = [];
for (i = 0; i < 200; i++) {
    numbers += 1
    if (numbers % 2 !== 0) {
        oddNumbers.push(numbers)
    }
}


for (i = 0; i < oddNumbers.length; i++) {
    if (oddNumbers[i] % 2 !== 0 ) {
        console.log(oddNumbers[i])
    }
}
