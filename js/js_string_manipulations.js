console.log("===============Example - String Manipulations=================");
var str = "John Smith";
console.log(str);
console.log(str.length);
console.log(str+' is a legend');
console.log(str.indexOf('Smith'));
console.log("i am a lazy boy".indexOf('lazy'));
console.log("i am a lazy boy".substring(3,5));
console.log("i am a lazy boy".substring(7));
console.log("i am a lazy boy".substring(7, 11));
console.log("i am a lazy boy".replace(' ', '-'));
console.log("i am a lazy boy".replace(/' '/g, '-'));
console.log("i am a lazy boy".replace(/ /g, '-'));
console.log("i am a lazy boy".replace('a', 'b'));
console.log("i am a lazy boy".replace(/a/g, 'b'));
console.log(str.charAt(2));
console.log(str[2]);
console.log(str.valueOf());
console.log(typeof str);

var str1 = new String('abc');
console.log(str1);
//String {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}
console.log(typeof str1);
console.log(str1.valueOf());

str = "abc";
console.log(str == str1); // true
console.log(str === str1); // false


console.log("===============Example - Booleans=================");
var a = new Boolean();
console.log(a.valueOf());
var x = new Boolean(-1);
console.log(x.valueOf());
var x = new Boolean(0);
console.log(x.valueOf());
var x = new Boolean(true);
console.log(x.valueOf());
var x = new Boolean(false);
console.log(x.valueOf());
var x = new Boolean( );
console.log(x.valueOf());
var x = new Boolean(' ');
console.log(x.valueOf());
var x = new Boolean('false');
console.log(x.valueOf());
