function countLetters(str) {
  var combine = str.split(" ").join(""); // eliminates spaces
  var tracker = {};
  var current = [];

  for (var i = 0; i < combine.length; i += 1) {

    current = combine[i]; //sets current to the current letter

    if (tracker[current]) {  // checks if the current letter exists in object
      tracker[current] = tracker[current] + 1  // adds one to the count if so
    } else {
      tracker[current] = 1 // sets it to one, if it doesn't exist
    }
  }
  console.log(tracker);


}

countLetters("lighthouse in the house");