let age = 80
//so if age is 17 or below it will print underage
//if its greater than equal to 18 AND less than or 
//equal to 65 will print insurable. anything else out of range

if (age <= 17) {
    console.log("Underage");
} else if (age >= 18 && age <= 65) {
    console.log("Insurable");
}
else {
    console.log("out of range");
}


