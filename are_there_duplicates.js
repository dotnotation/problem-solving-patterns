// Frequency Counter/ Multiple Pointers

// function called areThereDuplicates
// accepts a variable number of arguments
// check to see if there are duplicates in the arguments
// use the frequency counter pattern or multiple pointers pattern
// the arguments could be integers or strings 
// ex. areThereDuplicates(1, 2, 3) = false
// areThereDuplicates(1, 2, 2) = true
// areThereDuplicates('a', 'b', 'c', 'a') = true
// needs to be Time: O(n) Space: O(n)
// Bonus: Time: O(n log n) Space: O(1)

function areThereDuplicates(){
    let argObj = {}
    
    for (let val in arguments){
        argObj[arguments[val]] = (argObj[arguments[val]] || 0) + 1
    }

    console.log("Obj", argObj)

    for (let key in argObj){
        if (argObj[key] > 1){
            return true
        }
    }
    return false
}

// Colt's Solution using Multiple Pointers
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
}

// Colt's Solution: One Linear Solution

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}
