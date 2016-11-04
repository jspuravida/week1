// map is a higher order function that takes in an array, applies a transformation, returns another array with the transformation applied

var list = ["Apples", "Cheese", "Milk"];

// goal : write code that takes in the list and returns the same list but with all items in lower case.

var lowerCaseList = list.map(function(foodItem){
  return foodItem.toLowerCase();
});
console.log(lowerCaseList);

/////////

// Now using forEach
var lowerCaseList = [];

list.forEach(function(foodItem){
  lowerCaseList.push(foodItem.toLowerCase());
});
console.log(lowerCaseList);

/////////////

// Goal: Implement the forEach function for loops
// given an array and a callback function, myForEach should call the callback function on every element in the array.

function myForEach(array, callback) {
  for( var item of array) {
    callback(item);
  }
}

var list = ["milk", "apple", "cheese"];
// myForEach is going to need a list. It also needs a callback function

var reversedList = [];
myForEach(list, function(foodItem){
  reversedList.push(foodItem.split("").reverse().join(""))
});
console.log(reversedList);
///////////
// Count all the items in the list
var totalItems = 0;
myForEach(list, function(foodItem) {
  totalItems += 1;
})
console.log(totalItems);








