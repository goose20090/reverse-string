function reverseString(str) {
  // type your code here
  strArr = str.split("")
  rvArr = []
  strArr.forEach(char => rvArr.unshift(char));
  rvStr= rvArr.join("")
  return rvStr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("Expecting: 'sugnA'")
  console.log("=>", reverseString("Angus"))

  console.log("Expecting: '54321'")
  console.log("=>", reverseString('12345'))
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution


/* 

THE PROBLEM

- Write a function/method that receives one argument, a string

- It returns a string, with the original string's letters reversed

PSEUDOCODE

Step one, split the string into array of characters with .split("")

iterate over each character of string and add each to beginning of array

join arrray with .join("")

return final string


*/