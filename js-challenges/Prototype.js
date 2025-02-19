// Challenge. 
// Implement a constructor function Animal that initializes the name property.
// Attach a method  makeSound  to its prototype that returns "Some generic sound". 

function Animal(name) {
  // Initialize name property
  this.name = name
}

// Define makeSound method on Animal's prototype
Animal.prototype.makeSound = function () {
  return `Some generic sound`
}

const sound = new Animal();
// console.log(sound.makeSound());

// challenge 2 
// Implement a constructor function Robot that initializes name and batteryLevel.
// Attach a method charge() to its prototype that increases batteryLevel by 20, ensuring it does not go above 100

function Robot(name, batteryLevel) {
  // Initialize name and batteryLevel properties
  this.name = name
  this.batteryLevel = batteryLevel
}

// Define charge method on Robot's prototype
Robot.prototype.charge = function () {
  return Math.min(this.batteryLevel + 20, 100)
}

const getBattryLevel = new Robot('chitte', 50)
// console.log(getBattryLevel.charge());

// // challenge 3
//   Impliment a constructor function counter that initialize count to 0
//   attach increment() and decrement() method to tha prototype

function Counter() {
  // Initialize count property
  this.count = 0
}

// Define increment method on Counter's prototype
Counter.prototype.increment = function () {
  return this.count += 1
}

// Define decrement method on Counter's prototype

Counter.prototype.decrement = function () {
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
Playlist.prototype.addSong = function (song) {
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
ShoppingCart.prototype.addItem = function (items) {
  this.items.push(items)
}

// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice = function () {
  return this.items.reduce((acc, price) => acc + price, 0)
}

const getItem = new ShoppingCart()
getItem.addItem(10)
getItem.addItem(20)
getItem.addItem(30)
// console.log(getItem.getTotalPrice());


// challenge 6

// Implement BankAccount constructor with balance and transactions.
// Attach deposit(amount), withdraw(amount), and getTransactionHistory() methods to the prototype.

function BankAccount(balance) {
  // Initialize balance and transactions properties
  this.balance = balance
  this.transactions = [];
  console.log(this.transactions);

}
// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount
  this.transactions.push(`Deposited ${amount}`)
}
// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function (amount) {
  if (amount > 0 && amount <= this.balance) {
    this.balance -= amount
    this.transactions.push(`Withdrew ${amount}`)
  } else {
    this.transactions.push(`Insufficient balance`)
  }
}
// Define getTransactionHistory method on BankAccount's prototype
BankAccount.prototype.getTransactionHistory = function () {
  return this.transactions
}


// challenge 7

// Implement Employee constructor with name, position, and salary
// Attach applyBonus(percent) to the prototype to increase salary.

function Employee(name, position, salary) {
  // Initialize name, position, and salary properties
  this.name = name
  this.position = position
  this.salary = salary
}

// Define applyBonus method on Employee's prototype
Employee.prototype.applyBonus = function (percent) {
  this.salary = Math.round(this.salary + this.salary * (percent / 100))
  return this.salary
}

// challenge 8

/* <Implement Library constructor with a books array.
<Attach addBook(book) and findBook(title) methods to the prototype. */
function Library() {
  // Initialize books property
  this.books = []
}
// Define addBook method on Library's prototype
Library.prototype.addBook = function (book) {
  this.books.push(book)
}
// Define findBook method on Library's prototype
Library.prototype.findBook = function (title) {
  return this.books.includes(title) ? 'Book found' : 'Book not found';
}

// challenge 9

// Implement BankAccount constructor with accountNumber, holderName, and balance.
// Attach deposit(amount), withdraw(amount), and transfer(amount, targetAccount) methods to the prototype.

function BankAccount(accountNumber, holderName, balance) {
  // Initialize accountNumber, holderName, and balance properties
  this.accountNumber = accountNumber
  this.holderName = holderName
  this.balance = balance;
}

// Define deposit method on BankAccount's prototype
//   BankAccount.prototype.deposit = function (amount) {
//     this.balance += amount
//   }

// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function (amount) {
  if (this.balance >= amount) {
    this.balance -= amount
  }
}

// Define transfer method on BankAccount's prototype
BankAccount.prototype.transfer = function (amount, targetAccocunt) {
  if (this.balance >= amount) {
    this.withdraw(amount)
    targetAccocunt.deposit(amount)
  }
}

// challenge 10 

// Implement the Product constructor with name, price, and stock properties.
// Attach applyDiscount(percent) and purchase(quantity) methods to the prototype (for memory efficiency).
// Ensure integer values for price after applying a discount.
// Handle edge cases like zero stock or excessive purchases.


function Product(name, price, stock) {
  // Initialize name, price, and stock properties
  this.name = name;
  this.price = price;
  this.stock = stock;
}

// Define applyDiscount method on Product's prototype
Product.prototype.applyDiscount = function (percent) {
  this.price = Math.round(this.price - this.price * (percent / 100));
}

// Define purchase method on Product's prototype
Product.prototype.purchase = function (quantity) {
  if (quantity > 0 && quantity <= this.stock) {
    this.stock -= quantity
    return this.stock
  } else {
    return 'Not enough stock'
  }
}
