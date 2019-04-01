

var checkForPalindromes = function(word) {
    var inputToLowercase = word.toLowerCase();
    var characterSplit = inputToLowercase.split('');
    // var reverseString = word.split('').reverse().join("")
    var charSplitToSting = characterSplit.join("");
    var reverseCharacters = characterSplit.reverse()
    var reverseCharSplitToString = reverseCharacters.join("")
    
    if (charSplitToSting === reverseCharSplitToString) {
        console.log('This word is a Palindrome')
    } else {
        console.log('This word is not a Palindrome')
    }
}

checkForPalindromes('book');
   





