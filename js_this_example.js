// this - ownership
// example - this global window object
function doSomething() {
  console.log(this);
  this.style.backgroundColor = 'red';
  // value of this is window
}
doSomething();

// example - this ownership changes to html element
document.body.onclick = doSomething; // value of this is document.body

document.getElementById('abc').addEventListener('click', function() {
  this.style.color = 'green';
});

// example classes - constructor - this is bound to object;
class example_class1 {

  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  add() {
    return this.x+this.y;
  }

  subtract() {
    return this.x-this.y;
  }
} 
var cls1 = new example_class1(21,1);
var p1 = cls1.add();
var q1 = cls1.subtract();

console.log(p1,q1);


// example this in object method
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // logs 37
