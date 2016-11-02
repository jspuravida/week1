// Objects

var myStringObject = {
  value: "Don",
  howLongIsIt: function() {
    return this.value.length;
  },
  floop: function() {
    console.log("Wheee");
  }

  concat: function(text) {
    return this.value + text;
  }
  randomValue: function() {
    var rand = Math.random()*100;
    var key = (rand > 50) ? this.value : this.value2;
    console.log("I picked " + key);
    return this[key];
    // cannot do this.key, because that property doesn't exist on that object.
  }

};

console.log("The string is of length: ", myStringObject.howLongIsIt());

console.log("The string has the value: ", myStringObject.value);
console.log("The definition of floop: ", myStringObject.floop);
console.log("The execution of floop: ", myStringObject.floop());

// return this.value will bring up the property of value. This approach (dot notation) is always preferred.
// return this["value"] will look up the property of value.

// Above is defined as making an object by object literal. eg: var objLiteral = {}; (called a singleton)

// Another way to create an object

// function Cat() {
//   this.name = "fluffy";
// }
// var fluffy = new Cat();

// mixin is a programming term about mixing behaviours to create a result
// eg
// var a = {a: 1, b: 2};
// var b = {b: 14, c: 5};
// var c = Object.assign({}, a, b);


// Last thing...

// var complexObj = {
//   property: {
//     w: "what",
//     t: "the",
//     f: "frack"
//   }
// };

// console.log(complexObj.property.w);

//   }
// }
