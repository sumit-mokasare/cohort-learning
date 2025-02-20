function createStudentProfile(name, age, grade) {
    // Return an object with name, age, and grade
    if (typeof name != 'string' || name.trim() === '') {
        return 'Inavlid string'
    } else if (typeof age != 'number' || age <= 5) {
        return 'Invalid Number'
    } else if (typeof grade != 'string' || grade.trim() === '') {
        return 'Invalid string'
    }
    return { name, age, grade }
}
// console.log(createStudentProfile('sumit' , 18 , 'A'));


function addCarColor(car, color) {
    // Add color property to the car object
    if (typeof color != 'string' || color.trim() === '') {
        return 'Invalid color'
    }
    car.color = color
    return car
}
// console.log(addCarColor({  brand: "Toyoto",   model: 'corolla'} , 'red'));

function hasDiscount(product) {
    // Check if product has discount property
    let hasDiscount = "discount" in product;
    if (hasDiscount) {
        return true
    } else {
        return false
    }
}
// console.log(hasDiscount({name:'laptop', price: '10000' , discount: 10}));

function removePassword(user) {
    // Remove password property
    delete user.password;
    return user
}
// console.log(removePassword({username: 'sumit', password: 123456}))

function countProperties(user) {
    // Return the number of properties in user
    if (Object.keys(user).length === 0) {
        return 0
    }
    return Object.keys(user).length
}
// console.log(countProperties({name:'sumit',age:18, email:"sumit@.com"}));
// console.log(countProperties({}));

function mergeObjects(obj1, obj2) {
    // Merge obj1 and obj2 into a single object
    if (Object.keys(obj1).length === 0) return obj2;
    if (Object.keys(obj2).length === 0) return obj1;

    if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0) {
        return {};
    }
    return { ...obj1, ...obj2 }
}
// console.log(mergeObjects({ name: "Alice" }, { age: 25 }));

function objectToArray(obj) {
    // Convert the object into an array of key-value pairs
    if (Object.keys(obj).length === 0) {
        return [];
    }
    return Object.entries(obj)
}
// console.log(objectToArray({name:'sumit',age:18, email:'sumit@.com'}));

function cleanObject(obj) {
    // Remove all properties with null or undefined values
    if (Object.keys(obj).length == 0) return {};
    for (let key in obj) {
        if (obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }
    }
    return obj;
}
// console.log(cleanObject({name:"hitehs", age:25 , email:null, id:undefined}));


function deepClone(obj) {
    // Return a deep copy of obj
    let deepClone = structuredClone(obj)
    return deepClone
}
// console.log(deepClone({name:"hitehs", age:25 , email:"sumit@122.com", id:"_sumit"}));

function getNestedValue(obj, keyPath) {
    // Return the value from the nested object based on keyPath
    let keys = keyPath.split('.')
    let current = obj
    for (const key of keys) {
        if (!current || !current.hasOwnProperty(key)) return "Key not found";
        current = current[key]
    }
    return current
}
const input = { 
    obj: { user: { address: { city: "New York" } } }, 
    keyPath: "user.address.city"
};
// console.log(getNestedValue( input.obj, input.keyPath));











