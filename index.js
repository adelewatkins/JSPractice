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
