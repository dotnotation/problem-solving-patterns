// function called averagePair
// takes in a sorted array of integers and a target average
// see if there is a pair of values where it equals the target average
// can be more than one pair
// can take in negative numbers
// returns true or false
// need to account for an empty array
// use multiple pointers
// Time: O(n) Space: O(1)
// ex. averagePair([1, 2, 3], 2.5) = true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)
// averagePair([-1, 0, 3, 4, 5, 6], 4.1) = false
// averagePair([], 4) = false

function averagePair(arr, target){
    console.log(arr.length, target)
    if (arr.length === 0){
        return false
    }

    
    for (let i = 0; i < arr.length; i++){
        let temp = 0

        for (let j = 0; j < arr.length; j++){
            temp += (arr[i + j] / 2)
            console.log("temp", temp)
            if (temp === target){
                return true
            }
        }
    }

    return false
    
}

// Colt's Solution
function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
}