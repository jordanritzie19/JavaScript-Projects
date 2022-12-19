function concatenate() { //combines the 4 sections into 1 sentence
    var section_1 = "I wonder if ";
    var section_2 = "the person who is ";
    var section_3 = "reading this code ";
    var section_4 = "is doing well?";
    var message = section_1.concat(section_2, section_3, section_4);
    document.getElementById("one_message").innerHTML = message;
}

function slice() { //shows a specified portion of a string
    var message = "I wonder if the person who is reading this code is doing well?";
    document.getElementById("slicer").innerHTML = message.slice(23, 47) + "???"; //23-47 is <who is reading this code> added ??? for flavor
}

function upper() { //takes a string and converts it to all-caps
    var message = "who is reading this code???";
    document.getElementById("uppercase").innerHTML = message.toUpperCase();
}

function who_asked() {  //in console, writes the index 'who' is first seen. this case should show '0'
    var message = "who is reading this code???"
    console.log(message.search("who"))
}

function success() {
    var x = "it worked!";
    x = x.toString()
    console.log("this is a test: "+x)
}

function nobody() { //in console, shows 0 out to 4 digits (0.000 in this case even though only the 0 is shown initially)
    var people_who_asked = "0"; 
    people_who_asked = Number(people_who_asked).toPrecision(4); //converts string to a number with given precision (4)
    console.log(people_who_asked)
}

function pi() { //rounds to the nearest 10^-4 place
    var pi = 3.141592653589793238462643383279502
    console.log(pi.toFixed(4));
}

function you_are_great() { //gives the value of the string-- you are irreplaceable.
    var value = "irreplaceable";
    console.log(value.valueOf()) //not actually needed though, as valueOf() is already built into strings in JS
}

who_asked(); //this is just running stuff thats not in the HTML into the console
nobody();
pi();
you_are_great();
success();