// Frequency Counter

// Write a function called same
// accepts two arrays
// should return true if every value in the array has a value that is the squared of that value in the second array
// the frequency of values must be the same
// ex. same([1,2,3], [4,1,9]) = true (although the order is mixed up it is ok)
// ex. same([1,2,3], [1,9]) = false
// ex. same([1,2,1], [4,4,1]) = false (must be same frequency because we need 1 in the second array twice and 4 only once)

function same(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false
    }
    for (let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2) // indexOf does loop which is causing a nested loop
        if (correctIndex === -1) { // -1 means that the index is not in the array
            return false
        }
        console.log(arr2) // as the loop goes, arr 2 will become [9,4,4], then [9,4], then [4] and then will return true
        arr2.splice(correctIndex, 1) // if the index is in the array which returns 1, then we want to splice a that correct index which removes it and if we never return false and all the values of the second array are gone then we return true
    }
    return true
}
// O(n^2)
same([1,2,3,2], [9,1,4,4])

// Refactor:
// Fix nested loop
// loop over each array one time individually 
// 2 loops are better than a nested loop

function same(arr1, arr2){
    if (arr1.length !== arr2.length){
        // if the length of the arrays are not the same return false
        return false
    }
    let frequencyCounter1 = {} 
    // each object is going to count the frequency of the individual values in the array
    // ex. {1: 1, 2: 2, 3: 1}
    // so we have a key value pair showing the frequency of each number in the array
    let frequencyCounter2 = {}
    for (let val of arr1){
        // for of is a great way to loop over a string or array
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
        // for each element in the array we are going to set a key and the value is either going to be initialized or 1 will be added to the value
    }
    for (let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)

    for (let key in frequencyCounter1){
        // for each key in the object
        if (!(key ** 2 in frequencyCounter2)){
            // !(is the key squared from frequency1 a key in frequency2?)
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            // do the values correspond?
            return false
        }
    }
    return true
}
// O(n)