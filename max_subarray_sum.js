// Sliding Window

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

    for (let i = 0; i < num; i++){
        maxSum += arr[i]
        // storing our initial num amount of elements
    }

    tempSum = maxSum
    // setting initial sum to our maxSum so it can be compared in the next loop

    for (let i = 0; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        // we are taking our first sum and subtracting the first element and then adding the element that would be next to check
        // so instead of adding a new set of three numbers, we are just switching one element
        // ex. [2, 6, 9, 4, 1, 8], 3
            // we would first store 2 + 6 + 9
            // then with the next loop, we would subtract the first element(2) and then add the next element(4)
            // with a large num, this saves a lot of time instead of adding together 20 elements, you would just be doing two operators
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum
}

// Time: O(n)

// Other solution
function maxSubarraySum(arr, num) {
    let maxSum = 0
    let tempSum = 0

    if (arr.length < num) return null

    for (let i = 0; i < num; i++){
        maxSum += arr[i]
        // storing our initial num amount of elements
    }

    tempSum = maxSum
    // setting initial sum to our maxSum so it can be compared in the next loop

    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        // we are taking our first sum and subtracting the first element and then adding the element that would be next to check
        // so instead of adding a new set of three numbers, we are just switching one element
        // ex. [2, 6, 9, 4, 1, 8], 3
            // we would first store 2 + 6 + 9
            // then with the next loop, we would subtract the first element(2) and then add the next element(4)
            // with a large num, this saves a lot of time instead of adding together 20 elements, you would just be doing two operators
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum
}

// Another solution from Colt
function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}
