// undefined
// NaN
// null
// Infinity

console.log("=============Example - Undefined===============");
var a; // a is undefined
console.log(a);
if(a == undefined) {
  console.log('a is undefined');
}
// best practice
if(typeof a == 'undefined') {
  console.log('a is undefined - check with typeof');
}


console.log("=============Example - NaN===============");
console.log(Math.round('abc'));


console.log("=============Example - null===============");
var a = null; // a is defined but does not hold any value
console.log(a);
console.log(null == undefined); // true
console.log(null === undefined); // false
/*
1 == '1'
true
1 === '1'
false
*/



console.log("=============Example - Infinity===============");
console.log(Infinity);
console.log(Infinity-1);
console.log(Infinity+1);
console.log(1/0);
