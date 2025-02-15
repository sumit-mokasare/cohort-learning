// creating my polyfills 
let numbers = [1, 2, 3, 4]

// mymap 

// real signtuer of map method => return new Array , takes tow argument index and value

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
        let arr = []
        for (let i = 0; i < this.length; i++) {
            let element = callback(this[i], i)
            arr.push(element)
        }
        return arr
    }
}

const double = numbers.myMap(num => num * 2)
// console.log(double);


// myForEch()
// real signtuer of forEch method => no return , take tree arg index , value , array

if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this)
        }
    }
}

// numbers.myForEach((item) => { console.log(item);})

// filter()

// real signtuer of filter method => return new array , take three arg index , value , array , if contion is true tan it return other waise false

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (callback) {
        let newArr = []
        for (let i = 0; i < this.length; i++) {
            let values = callback(this[i], i, this)
            if (values) {
                newArr.push(this[i])
            }
        }
        return newArr
    }
}

// let filterArr = numbers.myFilter((item)=> item !== 3)
// console.log(filterArr);


// Array.find()

// real signtuer of find method => only return fist element  only the first match will be returned , taks tow arg index and value  


if (!Array.prototype.myFind) {
    Array.prototype.myFind = function (callback) {
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i)) {
                return this[i]
            }
        }
    }
}

const found = numbers.myFind((find) => {
    return find > 3
})
// console.log(found);

// array.findIndex()

// real signtuer of findIndex method => return index value taks index . value

if (!Array.prototype.myFindIndex) {
    Array.prototype.myFindIndex = function (callback) {
        for (let i = 0; i < this.length; i++) {

            if (callback(this[i], i, this)) {
                return i
            }
        }
        return -1;
    }
}

const people = [
    { name: "Sumit", age: 16 },
    { name: "Amit", age: 22 },
    { name: "Ravi", age: 17 }
];

const adultIndex = people.myFindIndex(person => person.age >= 16);
// console.log(adultIndex);

const words = ["Apple", "banana", "Cherry", "date"];

const searchTerm = "cherry";
const index = words.myFindIndex(word => word.toLowerCase() === searchTerm.toLowerCase());

// console.log(index);

// Array.some()

// real signtuer of some method => only return boolen value if contion is satisfies return true and false otherWise , taks tow arg index and value  

if (!Array.prototype.mySome) {
    Array.prototype.mySome = function (callback) {
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                return true
            }
        }
        return false
    }
}

// const valuseT = [1,2,3,'hello',4];
// const hasSting = valuseT.mySome(value => typeof value === 'string')
// console.log(hasSting);

// Array.every()
// real signtuer of every() method => return boolen value if every array element satisfie contion return true if tha list of on is noth pass return false ,

if (!Array.prototype.myEvery) {
    Array.prototype.myEvery = function (callback) {
        for (let i = 0; i < this.length; i++) {
            // console.log(callback(this[i]));
            if (!callback(this[i], i, this)) {
                console.log(this[i], i);
                return false
            }
        }
        return true
    }
}

const passwords = ["password123", "12345678", "password789"];
const isPassCorect = passwords.myEvery(pass => pass.length >= 8)
// console.log(isPassCorect);
const formField = ["John", "email@example.com", "123-456-7890"];
const allFieldFilled = formField.myEvery(field => field !== '')
// console.log(allFieldFilled);
const cartItems = [
    { name: "Laptop", inStock: true },
    { name: "Phone", inStock: true },
    { name: "Tablet", inStock: false }
];

const isStock = cartItems.every(item => item.inStock)
// console.log(isStock); // return false becus tablet is false 


// Array.reduce()

// real signtuer of reduce() method => it taks tha arg accumulator, currentValue, index, array ,initialValue (optional) → This is where you want to pass a callback instead of a normal value.

if (!Array.prototype.myreduce) {
    Array.prototype.myreduce = function (callback, accumulator) {
        for (let i = 0; i < this.length; i++) {
            accumulator = callback(accumulator, this[i], i, this);
        }
        return accumulator
    }
}

const sum = numbers.myreduce((accumulator, currentValue) => {
    // console.log('acuumulator === ', accumulator);
    // console.log('acuumulator === ', currentValue);
    return accumulator + currentValue
}, 0)
// console.log(sum);

const people2 = [
    { name: "Alice", 'city': "New York" },
    { name: "Bob", 'city': "LosAngeles" },
    { name: "Charlie", 'city': "New York" },
    { name: "David", 'city': "Chicago" }
];

const groupByCity = people2.myreduce((accumulator, currentValue) => {
    const cities = currentValue.city
    if (!accumulator[cities]) {
        accumulator[cities] = []
    }
    accumulator[cities].push(currentValue)
    return accumulator
}, {})
//   console.log(groupByCity);

// adding important javascript polyfills 

// Array.prototype.includes()
// signatuer -> return boolen values , take tow input one searchString and second for position
if (!Array.prototype.myIncludes) {
    Array.prototype.myIncludes = function (value, fromIndex = 0) {
        for (let i = fromIndex; i < this.length; i++) {
            if (this[i] === value) {
                return true;
            }
        }
        return false;
    };
}
if (!String.prototype.myIncludes) {
    String.prototype.myIncludes = function (value, fromIndex = 0) {
        return this.indexOf(value, fromIndex) !== -1;
    };
}


let str = "Hello JavaScript";
// console.log(str.myIncludes("JavaScript")); // true
let anotherNumbers = [1, 2, 3, 4];
// console.log(anotherNumbers.myIncludes(3, 2));     // true

// Object.entries()
// signature -> return array with key value paire where each pair is an array [key, value].

if (!Object.myentries) {
    Object.myentries = function (obj) {
        let result = []
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                result.push([key, obj[key]])
            }
        }
        return result
    }
}

const obj = { name: "Sumit", age: 20, country: "India" };
// console.log(Object.myentries(obj));

// Array.flatMap()
// signature -> take 3 input currentValue , index , array ,  return new array 

if (!Array.prototype.myFlatMap) {
    Array.prototype.myFlatMap = function (callback, thisArg) {
        return this.reduce((acc, value, index, array) => {
            const mapValue = callback.call(thisArg, value, index, array)
            return acc.concat(Array.isArray(mapValue) ? mapValue : [mapValue])
        }, [])
    }
}

const arr = [1, 2, 3];
const result = arr.myFlatMap(x => [x, x * 2]);
console.log(result);
// ✅ Output: [1, 2, 2, 4, 3, 6]




