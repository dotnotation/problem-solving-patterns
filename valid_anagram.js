// Given two strings
// write a function to determine if the second string is an anagram of the first
// all inputs are single words with no special characters and are lowercase
// ex. anagram("anagram", "nagaram") = true
// ex. anagram("rat", "car") = false

function validAnagram(str1, str2){
    if (str1.length !== str2.length){
        return false
    }

    let strObj1 = {}
    let strObj2 = {}

    for (let val of str1){
        strObj1[val] = (strObj1[val] || 0) + 1
    }

    for (let val of str2){
        strObj2[val] = (strObj2[val] || 0) + 1
    }
    console.log(strObj1)
    console.log(strObj2)
}

validAnagram("rat", "car")
validAnagram("anagram", "nagaram")