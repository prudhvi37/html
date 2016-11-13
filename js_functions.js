// example function
function abc() {
  console.log('hello');
}
abc();


// example 1 function hoisting
xyz();

function xyz(){
  console.log('xyz');
}

// example 2 arguments
function pqr(a,b) {
  console.log(a + b);
}
pqr(3,4);

// example 3 return
function returnex(x,y) {
  console.log(y);
  return x + y; // exits with return value of x+y
  console.log(x); // will not execute
}
var returnedvalue = returnex(2,3);
console.log(returnedvalue); // 5

// example 4 call
function call_and_apply(x,y) {
  console.log(x+y); 
}
call_and_apply.call(this, 2,3);

// example 5 apply
call_and_apply.apply(this, [2,3]);

// example 6 function expression
var funex = function funex1 () {
  console.log('function expression');
};
console.log(funex.name);
funex();

// example 7 anonymous functions
document.addEventListener('click', function() {
  console.log('document clicked- anonymous example');
});

// example 8 callbacks/closures
function example8(){
  return function() {
    console.log('callback called');
  }
}
example8();

// example 8a callbacks/closeures more
function example8a(x,y,cb) {
  console.log('example 8a');
  console.log('do some calculations');
  var l = x * y;
  console.log(l);
  // api to fetch some data
  // after api executes run this closure/callback
  // statements below will get executed - doesnt wait for api to finish
  cb(x,y);
}
function cb(x,y) {
  console.log(x+y);
  return x+y;
}
example8a(5,6,cb);
