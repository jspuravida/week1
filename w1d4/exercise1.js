// functions are values

function itsRainingInVancouver() {
  return true;
}

var itsRainingInVancouver = function() {
  return true;
}

var trueThings = {
  itsRainingInVancouver: function() {
    return true;
  },
  rainAmount: 10;
}

// below - its job is to call the given function (fn) and console.log the output
function saySomethingTrue(fn) {
  console.log("it is true that: ", fn());

}

//here we passed the function itself as the value. Dont put () or else it'd return 'true' here due to the 1st function.
saySomethingTrue(itsRainingInVancouver);

// can also create a new anonymous function within round brackets.
// This one is an anonymous function. when this one crashs you will see 'anonymous' in the stack trace.
saySomethingTrue(function()) {
  crash ittt;
});

// when this one crashs you will see itsRaining in the stack trace. This is a normal function.
saySomethingTrue(function itsRaining()) {
  crash ittt;
});

// HOISTING TOPIC

function foo() {
  function bar() { //  <-- declaration
    return 3;
  }
  return bar();
  function bar() {  //  <-- declaration - declarations always have higher precedence over regular code
    return 8
  }
  return bar();  // <-- regular line of code
}
console.log(foo());
// this returns 8 due to hoisting.



// EXPRESSIONS TOPIC

function foo() {  // <-- declaration
  var bar = function() { //  <-- functional expression
    return 3;
  }
  return bar();
  var bar = function() {  //  <-- declaration - declarations always have higher precedence over regular code
    return 8
  };
}
console.log(foo());
// this returns 3 due to the declaration of var = bar etc.
// whenever javascript sees a var, it pulls it directly to the top, but nothing after their = sign.



// Example to do our own hoisting::

function foo(){
  return bar();
  var bar = function() {   // <-- these variables are hoisted to the top, above return bar, but their function stays below so it returns undefined.
    return 3;
  }
  var bar = function() {   // <-- this is an expression. Use declarations such as function itsRainingInVancouver () {...
    return 8;
  };
}
console.log(foo());





