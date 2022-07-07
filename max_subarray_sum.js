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
        temp = 0
        for (let j = 0; j < num; j++){
            temp += arr[i + j]
        }
        if (temp > max){
            max = temp
        }
    }
    return max
}
