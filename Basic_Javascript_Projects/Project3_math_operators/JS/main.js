function subtract() {  //subtracts 5 and 2
    var subtraction = 5 - 2;
    document.getElementById("subtract").innerHTML = "5 - 2 = " + subtraction;
}

function multiply() {  //multiplies 6 and 8
    var multiplication = 6 * 8;
    document.getElementById("multiply").innerHTML = "6 x 8 = " + multiplication;
}

function divide() {  //divides 48 by 6
    var division = 48 / 6;
    document.getElementById("divide").innerHTML = "48 / 6 = " + division;
}

function arithmetic() { // 1/2 * (3+6)
    var math = .5*(3+6);
    document.getElementById("arithmetic").innerHTML = "1/2 * (3 + 6) = " + math;
}

function remainder() { // 7 % 2
    var modulation = 7 % 2;
    document.getElementById("remainder").innerHTML = "The remainder after 7 over 2 = " + modulation;
}

function negate() { // 'negative' 16
    var negation = 16;
    document.getElementById("negate").innerHTML = -negation;
}

function increment() {   //increment 5 one step
    var increment = 5;
    increment++;
    document.getElementById("increment").innerHTML = increment;
}


function decrement() {   //decrement 5 one step
    var decrement = 5;
    decrement--;
    document.getElementById("decrement").innerHTML = decrement;
}

function randint() {    //grabs a random number between 0 and 10
    var randint = (Math.random() * 10);
    document.getElementById("randint").innerHTML = Math.round(randint);
}