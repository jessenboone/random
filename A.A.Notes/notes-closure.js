// Ex
function outer(num){

  return function(num2) {
    return num + num2;
  }
}
var inner = outer(12);
inner(5)
inner(3)

var innerTwo = outer(100)
innerTwo(300)

inner(250)
innerTwo(12)


// Ex
function storeCreator(name){
  var products = []
  return function(product) {
   products.push(product)
   console.log(name, products)
  }
}
var walmart = storeCreator('walmart');
var sams = storeCreator('sams club');
var target = storeCreator('target');

walmart('Oranges')
sams('tvs')
target('clothes')
walmart('bananas')
walmart('lightbulbs')

// Ex
function teamCreator(name){
  var players = []
  return function(player) {
  players.push(player)
  console.log(name, players)
  }
}
var Jazz = teamCreator('Jazz');
Jazz('Gordon Hayward')
Jazz('Rudy Gobert')
Jazz('George Hill')
Jazz('Rodney Hood')
Jazz('Derrick Favors')
Jazz('Joe Johnson')
Jazz('Joe Ingles')
Jazz('Alec Burks')
Jazz('Boris Diaw')
Jazz('Trey Lyles')
Jazz('Shelvin Mack')
var Bulls = teamCreator('Bulls')
Bulls('Jordan')
Bulls('Pippen')
Bulls('Butler')
Bulls('Wade')


// Ex
add(2)(7)

function add(num1) {
return function(num2) {
  return num1 + num2
  }
}



// Ex
// Fully functional calculator

function calculator(start) {
 var total = start
 return  {
  add: function(numToAdd) {
     return total += numToAdd
    },
  subtract: function(numToSubtract) {
     return total -= numToSubtract
    },
  multiply: function(numToMultiply) {
     return total *= numToMultiply
    },
  divide: function(numToDivide) {
     return total /= numToDivide
    },
  enter: function(){
  console.log(total)
  }
 }
}

var myCal = calculator(0)
myCal.add(10)
myCal.add(10)

myCal.subtract(8)
myCal.subtract(8)

myCal.multiply(6)
myCal.multiply(6)

myCal.divide(4)
myCal.divide(4)
myCal.enter()
myCal.subtract(1)
// myCal.enter() Not always necessary

// Ex
var obj = {
  name: 'scott',
  func: function(){
    console.log(this.name)
  }
}

function person(name) {
  this.name = name;

}

person.prototype.func = function() {
  console.log(this.name)
}

var me = new person('scott')
var you = new person('students')
me.func()
you.func()

// Ex
String.prototype.title = function() {
  var string = this;
  var a = string.split(' ')
  for(var i = 0; i < a.length; i++) {
    var up = a[i][0].toUpperCase()
    a[i] = up + a[i].slice(1)
  }
  return a.join(' ')
}
var greeting = 'hello my name is scott'
greeting.title()

// Ex
Array.prototype.sum = function() {
  return this.reduce(function(p, c) {
    return p + c
  })
}
var a = [1, 2, 3];
a.sum()

// Ex


// Ex
