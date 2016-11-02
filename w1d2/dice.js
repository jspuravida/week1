var dice = process.argv.slice(2);


function diceRoll(min, max) {
  var output = "";

  for (var i = 0; i < process.argv.slice(2); i += 1) {
    min = Math.ceil(1);
    max = Math.floor(6);
    var currentRoll = Math.floor(Math.random() * (max - min + 1)) + min;
    output += currentRoll+", ";
  }
  return output.slice(0, -2);
}

console.log("Rolled " + dice + " dice: " + diceRoll(1, 6));

