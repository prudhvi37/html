do {
  // execute once & check condition

} while (a > 10);

while(a> 10) {

  // executes only when condition satisfies
}

for (var i = 10; i < 100; i+=10) {
  console.log(i); //prints i
}

for (var i = 10; i < 100; i+=10) {
  if (i === 30)
    break;
  console.log(i); //prints 10, 20 and exits the loop
}

for (var i = 10; i < 100; i+=10) {
  if (i === 30)
    continue;
  console.log(i); //prints all except 30
}

if(a>b);
{
  console.log('prints even if a < b');
}
