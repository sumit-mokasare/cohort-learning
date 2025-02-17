// Challenge. 
// Implement a constructor function Animal that initializes the name property.
// Attach a method  makeSound  to its prototype that returns "Some generic sound". 

function Animal(name) {
    // Initialize name property
    this.name = name
}

// Define makeSound method on Animal's prototype
Animal.prototype.makeSound = function(){
    return `Some generic sound`
}

const sound = new Animal();
// console.log(sound.makeSound());

// challenge 2 
// Implement a constructor function Robot that initializes name and batteryLevel.
// Attach a method charge() to its prototype that increases batteryLevel by 20, ensuring it does not go above 100

function Robot(name, batteryLevel) {
    // Initialize name and batteryLevel properties
    this.name= name
    this.batteryLevel = batteryLevel
}

// Define charge method on Robot's prototype
Robot.prototype.charge = function(){
    return Math.min(this.batteryLevel+20 , 100)
}

const getBattryLevel = new Robot('chitte' , 50)
// console.log(getBattryLevel.charge());

// // challenge 3
//   Impliment a constructor function counter that initialize count to 0
//   attach increment() and decrement() method to tha prototype

function Counter() {
    // Initialize count property
    this.count = 0
}

// Define increment method on Counter's prototype
Counter.prototype.increment = function(){
    return this.count += 1
}

// Define decrement method on Counter's prototype

Counter.prototype.decrement = function(){
    return this.count -= 1
}

const count = new Counter(0);
// console.log(count.increment());
// console.log(count.decrement());

// challenge 4

// Implement a constructor function  Playlist  that initializes an empty songs  array. 
// Attach a method  addSong(song)  to its prototype that adds the song to the ongs  

function Playlist() {
    // Initialize songs property
    this.songs = []
}

// Define addSong method on Playlist's prototype
Playlist.prototype.addSong = function(song){
  this.songs.push(song)
}
 
const song = new Playlist();
song.addSong('tumi hi hoo-aashiqui-2');
song.addSong('tera chehra-sanam tari kasam ');
// console.log(song.songs);

// challenge 5
// Implement a constructor function ShoppingCart that initializes an empty items array.
// Attach addItem(price) to the prototype to add items.
// Attach getTotalPrice() to calculate the total price of items.
function ShoppingCart() {
    // Initialize items property
    this.items = []
}

// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function(items){
  this.items.push(items)
}

// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice = function(){
  return  this.items.reduce((acc , price)=> acc + price,0)
}

const getItem = new ShoppingCart()
getItem.addItem(10)
getItem.addItem(20)
getItem.addItem(30)
// console.log(getItem.getTotalPrice());




 