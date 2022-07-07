function breakPalindrome(palindromeStr) {
    // exchange one character of the string for another character from the alphabet
    // assuming that only lowercase inputs
    // the new character does NOT have to be in the original string
    // 3 conditions:
        // new string is lower alphabetically
        // lowest value string alphabetically after making only one change
        // new string is NOT a palindrome
    // if not possible return "IMPOSSIBLE"
        // not possible includes a string length of 1, "aaa", palindrome when switched
        // palindromeStr[0] === palindromeStr[palindromeStr.length -1])
    if (palindromeStr.length === 1 || palindromeStr === undefined || palindromeStr === "aaa") {
        console.log(palindromeStr[0], palindromeStr[palindromeStr.length -1])
        return "IMPOSSIBLE"
    }
    
    for (let i = 0; i < Math.floor(palindromeStr.length / 2); i++){
        if (palindromeStr[i] !== 'a'){
            console.log(palindromeStr[0], palindromeStr[palindromeStr.length -1])
            return palindromeStr.substr(0, i) + "a" + palindromeStr.substr(i + 1)
        }
    }
    console.log(palindromeStr[0], palindromeStr[palindromeStr.length -1])
    return palindromeStr.substr(0, palindromeStr.length -1) + "b"

}