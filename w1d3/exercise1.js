var myStringObject = {
  value: "Don",
  howLongIsIt: function() {
    return.this.value.length;
  },
  floop: function() {
    console.log("Wheee");
  }
};

console.log("The string is of length: ", myStringObject.howLongIsIt());

console.log("The string has the value: ", myStringObject.value);
console.log("The definition of floop: ", myStringObject.floop);
console.log("The execution of floop: ", myStringObject.floop());
