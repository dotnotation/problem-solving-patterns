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

    for (let key in strObj1){
        if (!(key in strObj2)){
            return false
        }
        if (strObj1[key] !== strObj2[key]){
            return false
        }
    }
    return true
}

validAnagram("rat", "car")
validAnagram("anagram", "nagaram")

// Colt Steele's Solution
function validAnagram(first, second){
    if (first.length !== second.length){
        return false
    }

    const lookup = {}

    for (let i = 0; i < first.length; i++){
        let letter = first[i]
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
        // does the lookup object already have the letter in it?
        // if the letter is already there, add 1
        // if the letter isn't there, assign it a value of 1
    }

    for (let i = 0; i < second.length; i++){
        let letter = second[i]
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]){
            return false
        } else {
            lookup[letter] -= 1
            // if all the letters exist then by the end all the values of the keys will be 0 meaning that we found all the letters in the second string
        }
    }
    return true
}