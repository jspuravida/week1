var cookieCount = 0;

function eatCookie() { // <__ the closure function
  cookieCount += 1;   //  <--- Evidence of a closure
  console.log("You had " + cookieCount + " cookie(s)")
}

eatCookie();
eatCookie();

// closure is a function that makes use of a function in its parent scope
// same code as above, but without using closures.


function eatCookie(previousCount) {
  var cookieCount = previousCount + 1;
  console.log("You had " + cookieCount + " cookies.");
  return cookieCount;
}
eatCookie(eatCookie(eatCookie(0)));


///// Now pretend we want a function that creates HTML elements

function spanTag(content) {
  return "<span>" + content + "</span>";
}

function divTag(content) {
  return "<div>" + content + "</div>";
}

function articleTag(content) {
  return "<article>" + content + "</article>";
}

console.log(spanTag("I am a span!"));

// Now we can create a function for a specific kind of text.

function tagCreator(tagName, content) {
  return "<" + tagName + ">" + content;
}