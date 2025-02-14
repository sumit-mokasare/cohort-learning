// ---------------- P0 challenge-0 ----------------

// Create a function that adds two numbers (representing cupcakes on each tray) and returns the total.

function totalCupcakes(trayOne, trayTwo) {
    // Return the sum of trayOne and trayTwo
    return trayOne + trayTwo;
}

// console.log(totalCupcakes(12 , 20));

// ---------------- P0 challenge-1 ----------------

// Write a function that subtracts the number of apples given away from the total apples you started with, then returns the remaining apples.

function remainingApples(totalApples, givenAway) {
    // Return totalApples minus givenAway 
    return totalApples - givenAway;
}
// console.log(remainingApples(20 , 5));

// ---------------- P0 challenge-2 ----------------

// Create a function that multiplies two numbers (chocolate bars per box and number of boxes) and returns the total number of chocolate bars needed.

function totalChocolateBars(barsPerBox, numberOfBoxes) {
    // Return barsPerBox multiplied by numberOfBoxes
    return barsPerBox * numberOfBoxes;
}
// console.log(totalChocolateBars(5,10));


// ---------------- Conditionals Challenge 1 ----------------
// check if is even of odd
function checkEvenOdd(num) {
    // Return "Even" if num is even, otherwise return "Odd"
    if (num % 2 == 0) {
        return 'Even'
    } else {
        return 'Odd'
    }

}
// console.log(checkEvenOdd(4));
// console.log(checkEvenOdd(7));
// console.log(checkEvenOdd(0));

// ---------------- Conditionals Challenge 2 ----------------

// Write a function that takes three numbers and returns the largest useing if-else

function findLargest(a, b, c) {
    // Return the largest among a, b, and c
    if (a >= b && a >= c) {
        return a
    } else if (b >= a && b >= c) {
        return b
    } else {
        return c;
    }
}
// console.log(findLargest(10,20,15));
// console.log(findLargest(50,30,40));


// ---------------- Conditionals Challenge 3 ----------------

// Write a function that checks if a person is eligible to vote and return "Eligible" or "NotEligible"

function checkVotingEligibility(age) {
    // Return "Eligible" if age is 18 or more, otherwise return "Not Eligible"
    if (age >= 18) {
        return "Eligible"
    } else {
        return "Not Eligible"
    }
}
// console.log(checkVotingEligibility(20));
// console.log(checkVotingEligibility(16));
// console.log(checkVotingEligibility(18));


// ---------------- Conditionals Challenge 4 ----------------

// Given a student’s marks, determine their grade based on this scale
// 90+ → A<br>•	80-89 → B<br>•	70-79 → C<br>•	60-69 → D<br>•	Below 60 → F
//  Problem Statement Write a function that returns the corresponding grade using if-else

function calculateGrade(marks) {
    // Return grade based on the marks
    if (marks >= 90) {
        return "A"
    } else if (marks >= 80) {
        return "B"
    } else if (marks >= 70) {
        return "C"
    } else if (marks >= 60) {
        return "D"
    } else {
        return "F"
    }
}
// console.log(calculateGrade(85));
// console.log(calculateGrade(45));
// console.log(calculateGrade(92));

// ---------------- Conditionals Challenge 5 ----------------

//A leap year is divisible by 4, but not by 100 unless also divisible by Problem Statement Write a function to check if a year is a leap year.

function isLeapYear(year) {
    // Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 == 0 ? "Leap Year" : "Not Leap Year"
        }
        return "Leap Year"
    }
    return "Not Leap Year"
}
// console.log(isLeapYear(2020));
// console.log(isLeapYear(1900));
// console.log(isLeapYear(2000));


// ---------------- Conditionals Challenge 6 ----------------

// You need to determine what action to take based on traffic light colors:"Red" → Stop "Yellow" → Slow Down "Green" → Go “Blue” → Invalid Color
// Problem Statement Write a function that uses switch-case to return the correct action.


function trafficLightAction(color) {
    // Return "Stop", "Slow Down", or "Go" based on the traffic light color
    switch (color) {
        case 'Red':
            return "Stop"
        case 'Yellow':
            return "Slow Down"
        case 'Green':
            return "Go"
        case 'Blue':
            return "Invalid Color"
        default:
            break;
    }
}
// console.log(trafficLightAction("Red"));
// console.log(trafficLightAction("Yellow"));
// console.log(trafficLightAction("Green"));


// ---------------- Conditionals Challenge 7 ----------------

// Problem Statement Write a function that uses switch-case to return the day name for valid inputs otherwise “Invalid Day”

function getDayOfWeek(day) {
    // Return he corresponding day of the week based on the input number
    switch (day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid Day";
    }
}
// console.log(getDayOfWeek(1));
// console.log(getDayOfWeek(5));
// console.log(getDayOfWeek(7));

// ---------------- Conditionals Challenge 8 ----------------

//  Determine if a number is positive, negative, or zero Problem Statement Write a function that uses if-else to classify a number.

function checkNumberType(num) {
    // Return "Positive", "Negative", or "Zero" based on the input number
    if (num > 0) {
        return "Positive"
    } else if (num < 0) {
        return "Negative"
    } else if (num == 0) {
        return "Zero"
    }
}
// console.log(checkNumberType(5));
// console.log(checkNumberType(-3));
// console.log(checkNumberType(0));


// ---------------- Conditionals Challenge 9 ----------------

//  Given a temperature and a scale ("C" or "F"), convert it to the other scale. Problem Statement Write a function that uses switch-case to convert temperature

function convertTemperature(value, scale) {
    // Convert temperature based on the scale ("C" to "F" or "F" to "C")
    switch (scale.toUpperCase()) {
        case 'C': // Celsius to Fahrenheit
            return (value * 9 / 5) + 32 + " °F";
        case 'F': // Fahrenheit to Celsius
            return (value - 32) * 5 / 9 + " °C";
        default:
            return "Invalid Scale"; // Invalid scale input
    }
}
// console.log(convertTemperature(0 , "c"));
// console.log(convertTemperature(100 , "c"));
// console.log(convertTemperature(32 , "f"));

// ---------------- Conditionals Challenge 10 ----------------

// Create a basic calculator that performs +, -, *, / based on user input.  Problem Statement Write a function that uses switch-case to perform arithmetic operations. Handle the edge case of “Cannot divide by zero”. 

function calculator(num1, num2, operator) {
    // Perform basic arithmetic operations using switch case
    switch (operator) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num2 === 0 ? "Cannot Divide By Zero" : num1 / num2
        default:
            break;
    }
}
//   console.log(calculator(10 , 5 , '+'));
//   console.log(calculator(10 , 5 , '-'));
//   console.log(calculator(10 , 5 , '*'));

// ---------------- Loop Challenge 1 ----------------

//  Problem Statement: Write a function to distribute gifts to your friends one by one. It should stop once all your friends have received a gift.

function distributeGifts(totalGifts, friends) {
    // write your code here
    let gift = 0
    for (let i = 0; i < totalGifts; i++) {
        gift++
        if (gift === friends) {
            break;
        }
    }
    return gift
}
// console.log(distributeGifts(10,5));
// console.log(distributeGifts(2,4));


// ---------------- Loop Challenge 2 ----------------

//  Problem Statement: Create a function that counts the number of apples in the basket using a loop. 

function countApples(apples) {
    let count = 0
    for (let i = 0; i < apples; i++) {
        count++
    }
    return count
}
// console.log(countApples(5));
// console.log(countApples(3));

// ---------------- Loop Challenge 3 ----------------

//  Problem Statement: Create a function that counts how many boxes you need based on the total number of chocolate bars and the number of chocolate bars per box, using a loop. 


function countBoxes(totalBars, barsPerBox) {
    let count = 0
    for (let i = 0; i <= totalBars; i++) {
        count++
        totalBars -= barsPerBox
    }

    return count

}
// console.log(countBoxes(20,4));
// console.log(countBoxes(17,5));


// ---------------- Loop Challenge 4 ----------------

//  Problem Statement: Create a function that takes an array of water amounts (in liters) for each bottle and adds them up. The function should return the total amount of water you've filled in all the bottles.                                 

function totalWater(waterAmounts) {
    let amounts = 0
    for (let i = 0; i < waterAmounts.length; i++) {
        amounts += waterAmounts[i]
    }
    return amounts
}
// console.log(totalWater([1,2,3,4]));


// ---------------- Loop Challenge 5 ----------------

//  Problem Statement: Create a function that uses a loop to count the number of steps during a workout. The loop should continue until you reach the target step count 

function countSteps(targetSteps) {
    let steps = 0
    for (let i = 0; i < targetSteps; i++) {
        steps++
    }
    return steps
}
// console.log(countSteps(5));

// ---------------- Loop Challenge 6 ----------------

// Problem Statement: Create a function that takes an array of days (e.g.,["Monday", "Tuesday", "Friday"]  and returns the number of days you're working. "Saturday" and "Sunday" are not working days.                       

function workingDays(days) {
    // your code here
    let totelDays = 0
    for (let i = 0; i < days.length; i++) {
        totelDays++
    }
    return totelDays
}
// console.log(workingDays(['Monday', 'Tuesday', 'Friday']));

// ---------------- Loop Challenge 7 ----------------

//  Problem Statement: Create a function that takes an array of arrays (representing the number of stars in each level) and returns the total number of stars. 

function totalStars(starLevels) {
    let totalNumberOfStar = 0
    for (let i = 0; i < starLevels.flat().length; i++) {
        totalNumberOfStar++
    }
    return totalNumberOfStar
}
// console.log(totalStars([['*', '*' , '*'], ['*', '*'], ['*']]));

// ---------------- Loop Challenge 8 ----------------

//  Problem Statement: Create a function that takes an array of item prices and returns the total cost. 

function totalPrice(prices) {
    let totalCost = 0
    for (let i = 0; i < prices.length; i++) {
        totalCost += prices[i]
    }
    return totalCost
}
// console.log(totalPrice([1.5, 2.3, 3.7]));
// console.log(totalPrice([5, 10, 15]));




// ---------------- Loop Challenge 9 ----------------

//  Problem Statement: Create a function shinyDiamondRug(n)  that prints a shiny diamond shape made of stars. The number  n represents the size of the diamond, with the middle of the diamond having  2n - 1  stars. 


function shinyDiamondRug(n) {
    let pattern = ''.trim();
    for (let i = 1; i <= n * 2 - 1; i += 2) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += "*";
        }
        pattern += row + '\n';
    }
    for (let i = n * 2 - 3; i >= 1; i -= 2) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += "*";
        }
        pattern += row + '\n';
    }
    return pattern
}
// console.log(shinyDiamondRug(3));


// ---------------- Loop Challenge 10 ----------------

// Problem Statement: Create a function  invertedMountain(n)  that prints an inverted mountain made of stars. The number  n  represents the number of stars at the top, and the pattern should reduce by one star each line until only one star is left at the bottom. 

function invertedMountain(n) {
    let pattern = ''
    for (let i = n; i >= 1; i--) {
        let row = ""
        for (let j = i - 1; j >= 0; j--) {
            row += "*"
        }
        pattern += row + '\n'
    }
    return pattern
}
// console.log(invertedMountain(4));



// ---------------- javascript Array Challenge 1 ----------------

//  Problem Statement Create a function that adds a new guest list and returns the updated list. 

function addGuest(guestList, newGuest) {
    // Add the newGuest to guestList and return the updated list
    guestList.push(newGuest)
    return guestList

}
// console.log(addGuest(['Anududh' , 'Mukul'] , 'Radhika'));


// ---------------- javascript Array Challenge 2 ----------------

//Problem Statement Create a function that removes the last candy from the jar and returns the updated jar. 

function eatCandy(candyJar) {
    // Remove the last candy from the jar and return the updated jar
    candyJar.pop()
    return candyJar
}
// console.log(eatCandy(['Lolipop' , 'Gum', 'Chocolate']));

// ---------------- javascript Array Challenge 3 ----------------


//Problem Statement Create a function that adds a puppy to the front of the queue and returns the updated queue                       

function addPuppy(queue, puppyName) {
    // Add puppyName at the beginning of queue and return updated queue
    queue.unshift(puppyName)
    return queue
}
// console.log(addPuppy(['Tom','Jerry','spike'], 'Max'));


// ---------------- javascript Array Challenge 4 ----------------
// Problem StatementCreate a function that removes the first student from the bus and returns the updated list.


function removeStudent(bus) {
    // Remove the first student and return the updated bus list
    bus.shift()
    return bus
}
// console.log(removeStudent(['John','sahar','mike','Emma']))


// ---------------- javascript Array Challenge 5 ----------------

//  Problem Statement Create a function that sorts the books alphabetically and returns the updated list. 

function sortBooks(books) {
    // Sort the books alphabetically and return the updated list
    books.sort()
    return books
}
// console.log(sortBooks(['Math','English','Science','History']));



// ---------------- javascript Array Challenge 6 ----------------

// Problem statement Create a function that removes unhealthy food items (those containing "Burger") and returns the updated list.

function filterHealthy(foodList) {
    // Remove unhealthy food and return updated list
    const list =foodList.filter((item)=> item !== "Burger")
    return list
}
// console.log(filterHealthy(["Salad", "Burger", "Apple", "Pizza", "Banana"])) 

// ---------------- javascript Array Challenge 7 ----------------

// Problem Statement Create a function that finds the index of "Phone" in the list of items and returns the index. 

 function findPhone(items) {
     // Return the index of "Phone" in the items array
     return items.indexOf('phone')
}
// console.log(findPhone(['Wallet','key','phone','glasses']));


// ---------------- javascript Array Challenge 8 ----------------

//  Problem Statement Create a function that inserts the partner's name at the start of the message and returns the updated message.

function writeLoveLetter(message, name) {
    // Add name at the start of the message and return updated array
    message.unshift(name)
    return message
}
// console.log(writeLoveLetter(['I','Love','You'] , 'Aarav'));

// ---------------- javascript Array Challenge 9 ----------------

// Problem Statement Create a function that adds a VIP guest to the front of the queue and returns the updated list.

function addVIP(queue, vipGuest) {
    // Add vipGuest at the beginning of queue and return updated queue
    queue.unshift(vipGuest)
    return queue
    
}
// console.log(addVIP(["Aarav", "Ishaan", "Reyansh"], "Zoya" ));


// ---------------- javascript Array Challenge 10 ----------------

//  Problem Statement Create a function that returns the number of movies in the movie list. 

function countMovies(movieList) {
    // Return the number of movies in the movieList
    return movieList.length
}

// console.log(countMovies(["Inception", "Avatar", "Titanic"]));


