// Frequency Counter

// takes in two positive integers
// find if the two integers have the same frequency of digits
// must be O(n)
// ex. sameFrequency(182, 281) = true
// sameFrequency(34, 14) = false
// sameFrequency(3589578, 5879385) = true
// sameFrequency(22, 222) = false

function sameFrequency(n1, n2){
    // need to compare each number in n1 to see if all of the same numbers and amount of each number is the same as in n2
    // loop through the n1 and remove all the same numbers from n2, if the number is 0 then return true otherwise return false
    // if the length of each is not the same return false
    // store each number in a key value pair in an object?
    if (n1.toString().length !== n2.toString().length) return false

    let n1Arr = {}
    let n2Arr = {}

    for (let val of n1.toString()){
        n1Arr[val] = (n1Arr[val] || 0) + 1
    }

    for (let val of n2.toString()){
        n2Arr[val] = (n2Arr[val] || 0) + 1
    }

    console.log(n1Arr, n2Arr)

    for (let key in n1Arr){
        if (!(key in n1Arr)){
            return false
        }
        if (n1Arr[key] !== n2Arr[key]){
            return false
        }
    }
    return true
}

sameFrequency(182, 281)

// Colt's solution
function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }
  