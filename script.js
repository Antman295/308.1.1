// Part One: Math Problems --------------------------------------------------

    // Starter Code
    // The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(`The sum of all 4 numbers equal 50: ${isSum50}`);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(`There are at least 2 odd numbers from the 4 numbers: ${isTwoOdd}`);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(`All 4 numbers are over 25: ${isOver25}`);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(`All 4 numbers are unique: ${isUnique}`);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(`All 4 numbers are valid according to the criteria: ${isValid}`);


// Finally, log the results.
//console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Check if all numbers are divisible by 5. Cache the result in a variable.
const divByFive = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0
console.log(`All 4 numbers are divisible by 5: ${divByFive}`);

// Check if the first number is larger than the last. Cache the result in a variable.
const numLarger = n1 > n4;
console.log(`The first number is larger than the last number: ${numLarger}`);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
const ariChain = ((n2 - n1) * n3) / n4
console.log(`The result from the arithmetic chain: ${ariChain}`)

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(`All 4 numbers are under 25: ${isUnder25}`);

const isValidCheck = isSum50 && isTwoOdd && isUnder25 && isUnique;
console.log(`All 4 numbers are valid according to the criteria: ${isValidCheck}`);

// Part Two: Practical Math -------------------------------------------------

// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
    // At 55 miles per hour, you get 30 miles per gallon.
    // At 60 miles per hour, you get 28 miles per gallon.
    // At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

// How many gallons of fuel will you need for the entire trip?
const gallons = (30 + 28 + 23)
console.log(`The amount of gas needed for the trip: ${gallons}`)

// Will your budget be enough to cover the fuel expense?
const budget = (gallons * 3) > 175
console.log(`The budget will be enough to cover fuel expense: ${budget}`)

// How long will the trip take, in hours?
const hours = (1500 / gallons)
console.log(`How long the trip will take ${hours} hours`)

// Average of mileage
const average = (55 + 60 + 75) / 3
console.log(`The average of the miles: ${average}`)