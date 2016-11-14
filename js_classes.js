// example classes
class example_class {

  constructor() {
  }

  add(x,y) {
    return x+y;
  }

  subtract(x,y) {
    return x-y;
  }
} 
var cls = new example_class();
var p = cls.add(3,2);
var q = cls.subtract(3,2);

console.log(p,q);

// example classes - constructor
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

// example classes - extends
class example_class2 extends example_class1 {

  constructor(x,y) {
    super(x,y);
  }

  multiply() {
    return this.x*this.y;
  }
} 
var cls2 = new example_class2(21,1);
var p2 = cls2.add();
var q2 = cls2.subtract();
var r2 = cls2.multiply();

console.log(p2,q2,r2);
