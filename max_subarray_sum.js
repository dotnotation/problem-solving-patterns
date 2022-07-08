// write a function called maxSubarraySum
// takes in an array of integers and a number call n
// the function should calculate the maximum sum of n consecutive elements in the array
// if n = 4, then you are calculating the max sum of 4 elements in the array that are side by side 
// ex. maxSubarraySum([1, 2, 5, 2*, 8*, 1, 5], 2) = 10
// maxSubarraySum([1, 2*, 5*, 2*, 8*, 1, 5], 4) = 17
// maxSubarraySum([4, 2, 1, 6*], 1) = 6
// maxSubarraySum([4*, 2*, 1*, 6*, 2], 4) = 13 
// maxSubarraySum([], 4) = null
// * denotes the elements with the highest sum

function maxSubarraySum(arr, num){
    if (num > arr.length){
        return null
    }

    var max = -Infinity

    for (let i = 0; i < arr.length - num + 1; i++){
        // arr.length - num + 1 because we don't want to get all the way to the end of the array
        // we just want to get to the last possible number in the array that we can start counting at
        // for instance if the number was 3 we would want to stop at the third to last number
        // [2, 6, 9, 8, 2, 1, 7, 8*, 9, 1], 3 
        // the asterisk indicates the last number we would want to start our check at
        temp = 0
        // temp will store our sum so we can compare it to the max
        for (let j = 0; j < num; j++){
            // this is checking only the num amount of elements next to our i element in the array
            temp += arr[i + j]
        }
        if (temp > max){
            max = temp
            // if the temp sum is greater than max, then we reassign max to be the sum 
        }
    }
    return max
}

// this isn't an efficient way especially for large arrays or large num
// O(n^2)

// Refactor:

function maxSubarraySum(arr, num) {
    let maxSum = 0
    let tempSum = 0

    if (arr.length < num) return null

    for (let i = 0; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum
}

// Time: 0(n)