// Takes in a sorted array of integers and a value
// accepts a value and returns the index where the value passed in is located
// if the value isn't found, return -1
// ex. search([1, 2, 3, 4, 5, 6], 4) = 3
// search([1, 2, 3, 4, 5, 6], 6) = 5
// search([1, 2, 3, 4, 5, 6], 11) = -1

function search(arr, val){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val){
            return i
        }
    }
    return -1
}

// linear search
// Time: O(n)

//Refactor:

function search(arr, val){
    let min = 0
    let max = arr.length - 1

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        let currentElement = arr[middle]
        // this loop allows us to divide the array in half and check if the value is in the first or second half of the array 
        // then you continue chopping the array in half 
        // this way you are checking less values and dividing and conquering 
        if (arr[middle] < val) {
            min = middle + 1
        } else if (arr[middle] > val){
            max = middle - 1
        } else {
            return middle
        }
    }

    return -1
}

// Time: Log(N)