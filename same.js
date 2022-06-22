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
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}
// O(n^2)