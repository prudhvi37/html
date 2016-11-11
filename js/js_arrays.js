console.log("=============Example - Arrays=============");
var arr = [10, 20, 30, 'abc', true];
console.log(arr);
var len = arr.length;
console.log(len); // array length
for (var i = 0; i < len; i++) {
  console.log(arr[i]);
}
arr.pop();// removes last
console.log(arr);
arr.push('hello'); // adds to last
console.log(arr);
arr.unshift(40);// adds first
console.log(arr);
arr.shift(); // removes first
console.log(arr);
console.log(arr.indexOf(2));
console.log(arr.indexOf(10));
console.log(arr.indexOf(30));
console.log(arr);
console.log(arr.indexOf('abc'));
console.log(arr.splice(2));
