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

// Colt's Solution - Iterative
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// Colt's Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}
