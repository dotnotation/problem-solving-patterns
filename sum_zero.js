// Write a function named sumZero
// takes in an array
// the array contains sorted integers
// the function should find the first pair where the sum is 0
// returns an array that includes both values that sum to zero or undefined if a pair doesn't exist
// ex. sumZero([-3, -2, -1, 0, 1, 2, 3]) = [-3, 3]
// ex. sumZero([-2, 0, 1, 3]) = undefined

function sumZero(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}
// time: O(n^2)
// space: O(1)

sumZero([-3, -2, -1, 0, 1, 2, 3])

// Refactor:
// need to get rid of nested loop