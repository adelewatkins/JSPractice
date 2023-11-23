// function to do addition with a log
function sum(num, num2) {
    console.log('Sum', num + num2);
}
// This then provides the variables for the function
// and they get logged
sum(12, 100)
sum(40, 6)


//  function to do a multiplication as a return
function multiply(num, num2) {
    return num * num2;
}
// This then logs the return
console.log(multiply(5, 5))


// function to do a division as a return
function divide(num, num2) {
    return num / num2;
}
// This would then log the return
console.log(divide(30, 2))


// FizzBuzz with a return rather than a log
function FizzBuzz(numb) {
    if (numb % 3 == 0 && numb % 5 == 0) {
        return "FizzBuzz";
    } else if (numb % 3 == 0) {
        return "Fizz";
    } else if (numb % 5 == 0) {
        return "Buzz";
    }
    else return numb;
}


// ext task
function largest(fig1, fig2) {
    if (fig1 > fig2) {
        return fig1
    } else return fig2
}

function smallest(fig1, fig2, fig3) {
    if (fig1 < fig2 && fig1 < fig3) {
        return fig1;
    } else if (fig2 < fig1 && fig2 < fig3) {
        return fig2;
    } else return fig3;
}