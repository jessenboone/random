
// This statements
var plus = {
  operator: ' + '
}
var minus = {
  operator: ' - '
}
function test(a, b) {
  return a + this.operator + b
}
test.call(plus, 10, 15)


// Ex
var plus = {
  operator: ' + '
}
var minus = {
  operator: ' - '
}
function test(a, b) {
  return a + this.operator + b
}
test.apply(plus, [10, 15])

apply is used for arrays


// Ex
function func(arg1, arg2) {
        console.log(this['0']); // a
        console.log(arg1); // b
        console.log(arg2); // c
}

func.call('a', 'b', 'c')

// Ex
function func(arg1, arg2) {
        console.log(this['0']); // a
        console.log(arg1); // b
        console.log(arg2); // c
}

var ayy = 'a'
var bee = 'b'
var cee = 'c'
func.apply(ayy, [bee, cee])


function func(arg1, arg2) {
        console.log(this['0']); // a
        console.log(arg1); // b
        console.log(arg2); // c
}

func.apply('a', ['b', 'c'])

// Ex
function func(arg1, arg2) {
        console.log(this['0']); // a
        console.log(arg1); // b
        console.log(arg2); // c
}

var ayy = 'a'
var beecee = ['b', 'c']
func.apply(ayy, beecee)

// Ex
function average() {
  var Object {
    x: ,
    y:
  }

    return (this.x + this.y) / 2;
}

average.apply

// Ex
//Explicit
function add(){
console.log(this.count)
	return this.count++;
}

var counter = {
    count: 0
}
var counter2 = {
    count: 0
}

var counter3 = {
    count: 0
}
// Ex
//These don't work
var boundOne = add.bind(counter)
boundOne();
var boundTwo = add.bind(counter2);
boundTwo();
boundTwo();
var boundThree = add.bind(counter3);
boundThree();
boundThree();
boundThree();

// Ex
//Explicit
function callIt(func) {
	 func();
}

var counter = {
        count: 0,
        // Sloppy-mode method
        inc: function () {
            this.count++;
        }
}

callIt(counter.inc.bind(counter));

// Didn’t work:
console.log(counter.count); // 0

console.log(count);  // NaN

// Ex
var obj = {
  test: 'test',
  func: function() {
    console.log(this)
  }
}
obj.func()

// Ex
function animal(name, legs, tail) {
  this.name = name;
  this.legs = legs;
  this.tail = tail;
}

var Lion = new animal('Lion', 4, true)
console.log(Lion)

function deets() {
  console.log('the name is', this.name)
}
var theLion = deets.bind(Lion)
theLion()

// Ex this will show how every name entered will be bound to animal
function animal(name, legs, tail) {
  this.name = name;
  this.legs = legs;
  this.tail = tail;
}

var Lion = new animal('Lion', 4, true)
var Snake = new animal('Lion', 0, true)

Animal.prototype.deets = function() {
  console.log('the name is ', this.name)
}

Lion.deets()
Snake.deets()
