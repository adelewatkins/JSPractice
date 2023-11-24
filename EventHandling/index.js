function friday(){
    console.log('Happy Friday!');
}

// function on a button that when clicked adds 1 
// to input value
function plusOne(){
     let zeroBox = document.getElementById("zeroBox");
     zeroBox.value++;
}

function addOne(){
    let boxTwo = document.getElementById("boxTwo");
    boxTwo.value++;
}
function addFive(){
    let boxTwo = document.getElementById("boxTwo");
    boxTwo.value++;
    boxTwo.value++;
    boxTwo.value++;
    boxTwo.value++;
    boxTwo.value++;
}
function reset(){
    let boxTwo = document.getElementById("boxTwo");
    boxTwo.value= 0;
}
function minusOne(){
    let boxTwo = document.getElementById("boxTwo");
    boxTwo.value--;
}
function minusFive(){
    let boxTwo = document.getElementById("boxTwo");
    boxTwo.value-=5;
}