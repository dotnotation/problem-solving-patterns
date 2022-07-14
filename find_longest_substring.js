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