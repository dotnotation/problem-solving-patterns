// Multiple Pointers

// takes in two strings
// check to see if the characters in the first string form a subsequence of the second string
// see if the characters in the first string appear anywhere in the second string in the same order
// Time: O(N + M) Space: O(1)
// ex. isSubsequence('hello', 'hello world') = true
// isSubsequence('sing', 'string') = true
// isSubsequence('abc', 'abracadabra') = true
// isSubsequence('abc', 'acb') = false

function isSubsequence(str1, str2) {
    const compare = {}
    
    for (let i = 0; i < str2.length; i++){
        let letter = str2[i]
        
        compare[letter] ? compare[letter] += 1 : compare[letter] = 1
    }
    
    for (let i = 0; i < str1.length; i++){
        let letter = str1[i]
        console.log(compare)
        
        if (!compare[letter]){
            return false
        } else {
            compare[letter] -= 1
        }
    }
    
    return true
  }