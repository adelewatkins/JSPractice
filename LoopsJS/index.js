// // This will print hello 10x

for (let i = 1; i <= 10; i++) {
    console.log("Hello")
};


// Create an array of numbers and loop
// through and fizzbuzz

let arr = [1, 15, 33, 85, 93, 94, 123, 300];
for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
        console.log("FizzBuzz")
    } else if (arr[i] % 3 == 0) {
        console.log("Fizz")
    } else if (arr[i] % 5 == 0) {
        console.log("Buzz")
    }
    else console.log(arr[i])

}


// Task1 sum of 1-10
let TaskSum = 0
for (let num0 = 1; num0 <= 10; num0++){
TaskSum = TaskSum + num0;
console.log("Task Sum", TaskSum)
}
console.log("total", TaskSum)

//Loops refresher task1. sum of 1-10 as an array
let fig = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//set a sum of 0 as first as first sum is 1+0
let sum = 0;

//code for how to go through the array
for (let i = 0; i < fig.length; i++) {

    //assign the word numbers to each array input
    let numbers = fig[i]

    // sum is now previous sum value of 0 + each number
    sum = sum + numbers;

    //log it as Sum:followed by the running total figure
    console.log("Sum:", sum);
}



// refresher task 2 array of numbers and add together.
let odds = [1, 3, 5, 7, 9, 11, 13]
let additional = 0;
for (let i = 0; i < odds.length; i++) {
    let adds = odds[i]
    additional = additional + adds
    console.log("totals:", additional)
}


// Task 3, for of loop to get the sum of array
let odds1 = [1, 3, 5, 7, 9, 11, 13]
let additional1 = 0;
for (let numb of odds1) {
    additional1 = additional1 + numb
    console.log("equals;", additional1)
}
console.log("Final Total", additional1);
