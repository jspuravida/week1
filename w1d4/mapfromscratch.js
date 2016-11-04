var favouriteFoods = ["PIZZA", "SALAd", "SuSHi", "SteaK", "Ice-CrEam"];

var mapped = favouriteFoods.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };

})

console.log(mapped);

///////////////////////////

function myForEachFunction(array, callback) {
  for(var item of array) {
    callback(item);
  }
}

var listOfFavouriteFoods = ["PIZZA", "SALAd", "SuSHi", "SteaK", "Ice-CrEam"];

var lowercasedFavouriteFoods = [];

myForEachFunction(listOfFavouriteFoods, function(foodType){
  lowercasedFavouriteFoods.push(foodType.toLowerCase())
});
console.log(lowercasedFavouriteFoods);


/////////////////////////////

function myMap(array, cb) {
  var sum = [];
  array.forEach(function(item) {
    sum.push(cb(item));
  });
  return sum;
};

function lengthfinder(array) {
  return array.length;
}

console.log(myMap(["pizza", "lasagna", "fettucini"], lengthfinder));
