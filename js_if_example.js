var a = 10, b = 20, c= 30;
if (a > b ) {
  console.log('hello'); // a < b, so doesnt print
} else {
  console.log('yay');
}

if (a < b) {
  console.log('yay'); // prints
}
if (a > b) {

} else if (c > a) {

} else {

}

// ternerary operator

var result = (a > b) ? a : b;
var result = (a > b) ? a : (c > a) ? c : b;
if (a > b) {
  result = a;
 } else {
  result = b;
 }
