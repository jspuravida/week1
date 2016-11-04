// var input = [
//   { x: 3, y: 4 },
//   { x: 12, y: 5 },
//   { x: 8, y: 15 }
// ];
// var result = input.map(function(squared) {
//   var mappedObjects = {};
//   mappedObjects[squared.key] = [squared.value]^2;



//   return mappedObjects;


// });

// console.log(result[0] === 5);
// console.log(result[1] === 13);
// console.log(result[2] === 17);

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(values) {
  var zSquaredValue = Math.pow(values.x, 2) + Math.pow(values.y, 2);
  var result = Math.sqrt(zSquaredValue);

  return result;

});

console.log(result);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);