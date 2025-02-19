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
console.log(countProperties({}));





