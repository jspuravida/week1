/* Adder exercise

Takes unlimited amount of arguments
Adds numbers together
Outputs the total


Get all the arguments

process.argv will give an array of a string showing the path to node & path of file

Need to split the array up, and start at index 2

*/

// Lots of bugs appear when you use ==, === is preferred.

// var numbers = process.argv.slice(2);


// // Option 1
// // Unary operator means i++ or i += 1, instead of i = i + 1

// var sum = 0;

// for(var i = 0; i < numbers.length; i += 1) {
//   debugger;
//   var number = Number(numbers[i]);
//   sum = sum + number;
// }

// console.log(sum);

// // Option 2

// // var i = 0;
// // while (i < numbers.length) {
// //   console.log(numbers[i]);
// //   i = i + 1;
// // }

// For functions, you need to know the inputs and outputs
// Inputs = array of numbers
// Outputs = returns number that is the sum

function add(numbers) {
  for (var i = 0; i < numbers.length; i += 1) {
    number = Number(numbers[i]);
    debugger;
    if ( !Number.isNan(number)) {
      sum = sum + number;
    }
  }
  return sum;
}




