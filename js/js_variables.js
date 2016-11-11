// var, let, const


console.log("=============Example 1 - Variable Scope=============");
// scope of a & b
var a = 10; // global
console.log(a);
function abc() {
  c = 30; // since we did not use var for c, the scope becomes global
  var b = 20; // local variable, scope within function
  console.log(a);
  console.log(b);
}
abc();
var a = 20; // a is declared above, but it doesnt throw an error.
console.log(c);
// console.log(b); // throws error
// this.a works, as a global variable

console.log("=============Example 2 - Variable Hoisting=============");
// variable hoisting
x = 10;
console.log(x);
var x;
// bad practice... declare variables at the top of function or file or etc.
k = 20;
let k; // throws error as you cannot hoist with let

console.log("=============Example 3 - Variable types=============");
var str = "String";
var num = 10;
var bool = true;
console.log(str,' -----> ',typeof str);
console.log(num,' -----> ',typeof num);
console.log(bool,' -----> ',typeof bool);

var arr = [10, 20, 30];
console.log(arr, ' -----> ', typeof arr);

var obj = {x: 10, y: 20};
console.log(obj,' -----> ',typeof obj);

var map1 = new Map();
map1.set('a','2');
console.log(map1,' -----> ',typeof map1);



console.log("=============Example 4 - Let =============");
let y = 20;
console.log(y);
function let_example() {
  let z = 10;
  console.log(z);
}
//let y = 30; // let does not allow declaring the same variable twice.
let_example();
//console.log(z); // throws error
// this.y does not work, as you cannot create global variables with let



console.log("=============Example 5 - Const =============");
const NUM = 10;
NUM = 20; // throws error as you cannot reassign a new value to const.
const STR; // throws error as const should always be initialized; ex: const STR = 'John'
console.log(NUM);


console.log("=============Example 5 - Deleting a property in an object =============");

var obj={x:20};
console.log(obj);
delete obj.x;
console.log(obj);
var g = 30;
delete g; // returns false as variables declared with var are non configurable
