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



























//extra content


JS
// SideNav Button Initialization
$(".button-collapse").sideNav();
// SideNav Scrollbar Initialization
var sideNavScrollbar = document.querySelector('.custom-scrollbar');
Ps.initialize(sideNavScrollbar);



JS
// SideNav Options
$('.button-collapse').sideNav({
  edge: 'right', // Choose the horizontal origin
  closeOnClick: true, // Closes side-nav on &lt;a&gt; clicks, useful for Angular/Meteor
  breakpoint: 1200 // Breakpoint for button collapse
});



JQUERY
// Show sideNav
$('.button-collapse').sideNav('show');
// Hide sideNav
$('.button-collapse').sideNav('hide');


HTML

<ul id="slide-out" class="side-nav fixed">
 
  <!-- SideNav slide-out button -->
<a href="#" data-activates="slide-out" class="btn btn-primary p-3 button-collapse"><i class="fas fa-bars"></i></a>

<!-- Sidebar navigation -->
<div id="slide-out" class="side-nav fixed wide sn-bg-1">
  <ul class="custom-scrollbar">
    <!-- Logo -->
    <li>
      <div class="logo-wrapper sn-ad-avatar-wrapper">
        <a href="#"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle"><span>Anna Deynah</span></a>
      </div>
    </li>
    <!--/. Logo -->
    <!-- Side navigation links -->
    <li>
      <ul class="collapsible collapsible-accordion">
        <li><a class="collapsible-header waves-effect arrow-r active"><i class="sv-slim-icon fas fa-chevron-right"></i> Submit blog<i class="fas fa-angle-down rotate-icon"></i></a>
          <div class="collapsible-body">
            <ul>
              <li><a href="#" class="waves-effect active">
                <span class="sv-slim"> SL </span>
                <span class="sv-normal">Submit listing</span></a>
              </li>
              <li><a href="#" class="waves-effect">
                <span class="sv-slim"> RF </span>
                <span class="sv-normal">Registration form</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li><a class="collapsible-header waves-effect arrow-r"><i class="sv-slim-icon far fa-hand-point-right"></i> Instruction<i class="fas fa-angle-down rotate-icon"></i></a>
          <div class="collapsible-body">
            <ul>
              <li><a href="#" class="waves-effect">
                <span class="sv-slim"> FB </span>
                <span class="sv-normal">For bloggers</span></a>
              </li>
              <li><a href="#" class="waves-effect">
                <span class="sv-slim"> FA </span>
                <span class="sv-normal">For authors</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li><a class="collapsible-header waves-effect arrow-r"><i class="sv-slim-icon fas fa-eye"></i> About<i class="fas fa-angle-down rotate-icon"></i></a>
          <div class="collapsible-body">
            <ul>
              <li><a href="#" class="waves-effect">
                <span class="sv-slim"> I </span>
                <span class="sv-normal">Introduction</span></a>
              </li>
              <li><a href="#" class="waves-effect">
                <span class="sv-slim"> MM </span>
                <span class="sv-normal">Monthly meetings</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li><a class="collapsible-header waves-effect arrow-r"><i class="sv-slim-icon far fa-envelope"></i> Contact me<i class="fas fa-angle-down rotate-icon"></i></a>
          <div class="collapsible-body">
            <ul>
              <li><a href="#" class="waves-effect">
                <span class="sv-slim"> F </span>
                <span class="sv-normal">FAQ</span></a>
              </li>
              <li><a href="#" class="waves-effect">
                <span class="sv-slim"> W </span>
                <span class="sv-normal">Write a message</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li><a id="toggle" class="waves-effect"><i class="sv-slim-icon fas fa-angle-double-left"></i>Minimize menu</a>
        </li>
      </ul>
    </li>
    <!--/. Side navigation links -->
  </ul>
  <div class="sidenav-bg rgba-blue-strong"></div>
</div>
<!--/. Sidebar navigation -->
  
  
  
  css
  
  header, main, footer {
  padding-left: 240px;
}

@media only screen and (max-width : 992px) {
  header, main, footer {
    padding-left: 0;
  }
}



//Customization



<div class="sidenav-bg rgba-blue-strong"></div>
<ul id="slide-out" class="side-nav side-nav-light">
  
  
  <!-- SideNav slide-out button -->
<a href="#" data-activates="slide-out" class="btn btn-primary p-3 button-collapse"><i class="fas fa-bars"></i></a>

<!-- Sidebar navigation -->
<div id="slide-out" class="side-nav fixed wide sn-bg-1">
  <ul class="custom-scrollbar">
    <!-- Logo -->
    <li>
      <div class="logo-wrapper sn-ad-avatar-wrapper">
        <a href="#"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle"><span>Anna Deynah</span></a>
      </div>
    </li>
    <!--/. Logo -->
    <!-- Side navigation links -->
    <li>
      <ul class="collapsible collapsible-accordion">
        <li><a class="collapsible-header waves-effect arrow-r active"><i class="sv-slim-icon fas fa-chevron-right"></i> Submit blog<i class="fas fa-angle-down rotate-icon"></i></a>
          <div class="collapsible-body">
            <ul>
              <li><a href="#" class="waves-effect active">
                <span class="sv-slim"> SL </span>
                <span class="sv-normal">Submit listing</span></a>
              </li>
              <li><a href="#" class="waves-effect">
                <span class="sv-slim"> RF </span>
                <span class="sv-normal">Registration form</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li><a class="collapsible-header waves-effect arrow-r"><i class="sv-slim-icon far fa-hand-point-right"></i> Instruction<i class="fas fa-angle-down rotate-icon"></i></a>
          <div class="collapsible-body">
            <ul>
              <li><a href="#" class="waves-effect">
                <span class="sv-slim"> FB </span>
                <span class="sv-normal">For bloggers</span></a>
              </li>
              <li><a href="#" class="waves-effect">
                <span class="sv-slim"> FA </span>
                <span class="sv-normal">For authors</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li><a class="collapsible-header waves-effect arrow-r"><i class="sv-slim-icon fas fa-eye"></i> About<i class="fas fa-angle-down rotate-icon"></i></a>
          <div class="collapsible-body">
            <ul>
              <li><a href="#" class="waves-effect">
                <span class="sv-slim"> I </span>
                <span class="sv-normal">Introduction</span></a>
              </li>
              <li><a href="#" class="waves-effect">
                <span class="sv-slim"> MM </span>
                <span class="sv-normal">Monthly meetings</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li><a class="collapsible-header waves-effect arrow-r"><i class="sv-slim-icon far fa-envelope"></i> Contact me<i class="fas fa-angle-down rotate-icon"></i></a>
          <div class="collapsible-body">
            <ul>
              <li><a href="#" class="waves-effect">
                <span class="sv-slim"> F </span>
                <span class="sv-normal">FAQ</span></a>
              </li>
              <li><a href="#" class="waves-effect">
                <span class="sv-slim"> W </span>
                <span class="sv-normal">Write a message</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li><a id="toggle" class="waves-effect"><i class="sv-slim-icon fas fa-angle-double-left"></i>Minimize menu</a>
        </li>
      </ul>
    </li>
    <!--/. Side navigation links -->
  </ul>
  <div class="sidenav-bg rgba-blue-strong"></div>
</div>
<!--/. Sidebar navigation -->
