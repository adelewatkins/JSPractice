
// function that logs happy friday to the console
function friday(){
    console.log('Happy Friday!');
}

// function on a button that when clicked adds 1 
// to input value
function plusOne(){
     let zeroBox = document.getElementById("zeroBox");
     zeroBox.value++;
}

// exercise two
// input with 5 buttons that change the value
function addOne(){
    let boxTwo = document.getElementById("boxTwo");
    boxTwo.value++;
}
// set boxTwo as a variable so we dont have to get element by
// ID each time

const boxTwo = document.getElementById("boxTwo");

function addFive(){
    boxTwo.value-=-5;
}
function reset(){
    boxTwo.value= 0;
}
function minusOne(){
    boxTwo.value--;
}
function minusFive(){
    boxTwo.value-=5;
}