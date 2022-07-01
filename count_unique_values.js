// write a function called countUniqueValues
// takes in a sorted array
// the function counts the unique values in the array
// there can be negative numbers
// if the array is empty, it should return 0
// use the two pointer pattern
// you would compare the first and second value to each other to see if they are equal
// use the array itself to store unique values
// the second pointer will be moving until the value doesn't match the first pointer
// then the first pointer will move forward and take the value of the second pointer and put it in its current position
// once the second pointer reaches the end of the array, then we have our first pointer on the last unique value in the array
// then you can return the index + 1 of the first pointer and that will be the number of unique values
// ex. countUniqueValues([1, 1, 1, 1, 1, 2]) = 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) = 7
// countUniqueValues([-2, -1, -1, 0, 1]) = 4

function countUniqueValues(arr){
    let firstPointer = arr[0]
    let secondPointer = arr[1]
    console.log("first:", firstPointer)
    if (firstPointer === secondPointer){
        secondPointer++
        console.log("second:", secondPointer)
    } else if (firstPointer !== secondPointer){
        firstPointer = secondPointer
        firstPointer++
        secondPointer++
        console.log("else first:", firstPointer)
        console.log("else second:", secondPointer)
        console.log(arr)
    } else {
        return 0
    }
}

countUniqueValues([-2, -1, -1, 0, 1])

