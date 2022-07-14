// Sliding Window

// takes in a string
// returns the length of the longest substring of distinct characters
// if string is empty, return 0
// the string doesn't have breaks or unique characters
// string is all lower case 
// ex. findLongestSubstring('') = 0
// findLongestSubstring('rithmsc*hool') = 7
// findLongestSubstring('thisis*awesom*e') = 6
// findLongestSubstring('b*bbbbb') = 1
// findLongestSubstring('thecat*intheha*t') = 7
// * denotes the break in the distinct characters


// need two counters
// one for temporary storage of the substring
// one that is the longest substring
// compare the string and reassign value of longest if the length of the substring is longer than the temp storage number
// since we can't repeat characters, store in an object
// it the key already exists, then that is the number to store in the temp

function findLongestSubstring(str){
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
}