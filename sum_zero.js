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
// we want to compare the first and last numbers to help reduce the time complexity of this
// if the first and last number are a positive number, then the second pointer will move down the array
// if the second pointer is then a negative number, then we want to move the first pointer

function sumZero(arr){
    let left = 0
    let right = arr.length - 1
    // getting the last element in the array
    while (left < right){
        // this has to be less than as a failsafe and can not be less than or equal to
        // say for instance if zero was the middle number you could get a false positive
        let sum = arr[left] + arr[right]
        if (sum === 0){
            return [arr[left], arr[right]]
        } else if (sum > 0){
            right--
            // if the sum is greater than zero, then we want to check the next right element which would be a lower index than the previous value
        } else {
            left++
            // if the sum is less than zero, then we know that we need to move the left index
        }
    }
}

// Time Complexity: 0(n)
// Space Complexity: 0(1)