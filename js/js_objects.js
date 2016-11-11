var obj = {
  x: 10,
  y: {
    z: 20
  },
  p: [10, 20, 30],
  q: function() { console.log('hello world'); },
  r: 'ABC'
};

console.log(obj);
console.log(obj.x);
console.log(obj.r);
console.log(obj.y.z);
console.log(obj.y);
var t = obj.y;
console.log(t.z);
console.log(obj.q);
console.log(obj.q());
console.log(obj.p);
console.log(obj.p[0]);

obj.a = 200;
console.log(obj);

delete obj.r;
console.log(obj);
