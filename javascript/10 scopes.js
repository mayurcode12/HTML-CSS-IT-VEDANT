var globalVariable = 10;
console.log("Global variable", globalVariable);

function show() {
  var localVariable = 20;

  console.log("Global variable", globalVariable);

  console.log("Local variable", localVariable);

  // closer or functional scope
  function show2() {
    var innerFunctionVariable = 30;
    console.log("Global variable", globalVariable);
    console.log("Local variable inside inner function", localVariable);
    console.log("local variable of inner function", innerFunctionVariable);
  }
  show2();

  //   block scope
  if (localVariable > 5) {
    console.log("global scope to block scope before changing", globalVariable);
    var globalVariable = 100;
    console.log("global scope to block scope after changing", globalVariable);
  }
}
show();
