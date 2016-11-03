// Higher Order functions AKA -  Very very useful functions

// forEach was designed to iterate over every single element

var list = ["apples", "feta cheese", "milk", "tomatoes"];

// goal: write a shopping list reminder program

console.log("don't forget to buy: ");

for(item of list) {
  var lowerCaseItem = item.toLowerCase();
  console.log("- ", item);
}


///////
list.forEach(prettyPrint);


function prettyPrint(item, index) {
   var lowerCaseItem = item.toLowerCase();
  console.log(index + 1, lowerCaseItem);

}

for(item of list) {
  prettyPrint(item);
}

list.forEach(prettyPrint);
//////////

// Callback just refers to a function that is passed to another function

////////////////////

var list = [
  {id: 1, name: "Bob"},
  {id: 2, name: "Sailor Moon"},
  {id: 3, name: "Daffy Duck"},
]

//find first user whose name starts with B / FIND is a pre-defined function.

var userWithB = users.find(function(userObj) {   // <--- callback function (anonymous)
  return userObj.name.startsWith("B")
});
console.log(userWithB.name);
// get all users that starts with B
console.log(userWithB);






