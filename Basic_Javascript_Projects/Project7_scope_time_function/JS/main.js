var a = 420;
function nice() {
    var thoughts; var b = 351;
    var a = document.getElementById("thoughts").value; //pulls from input value
    thoughts = (a-b == 69) ? "nice":"booooriiiing";
    console.log(thoughts + "<br>") //was document.write, replaced so HTML would print properly
    document.getElementById("question").innerHTML = thoughts
}

function lame() { //same as nice() just here to demonstrate local variables
    var thoughts;
    thoughts = (a-b == 69) ? "nice":"boooooriiiing";
    console.log(thoughts)
}

nice();
lame(); 

function go_home() { //if its past 5:30p.m replace text with "Go Home"
    if(new Date().getHours() > 17.5) {
        document.getElementById("working").innerHTML = "GO HOME!!!";
    }
}

function soup() {
    var soup_cadence, soup_confirmation; //find out if its soup time + message if it is/isn't
    soup_cadence = ((new Date().getTime() - 1670927400000) % 12600000); //see below for explanation
    if(soup_cadence == 0 && soup_cadence >= 0) { 
        soup_confirmation = "Its time for soup!"; //yes its soup time
    }
    else {
        soup_confirmation = "Go Fishing, not time for soup :("; //not soup time
    }
    document.getElementById("souptime").innerHTML = soup_confirmation
}

// 1670927400000 = 5:00am (est) 12/13/2022 in ms since epoch
// 12600000 = 3.5 hours in milliseconds

// soup_cadence determines if the current time
// is some factor of 3.5 hours after known soup time
// of 12/13/2022 at 5:30 am est inspired by actual
// timers of a world event in World of Warcraft


function Time_function() { //gives time of day morning/afternoon/evening
    var Time = new Date().getHours;
    var Reply;
    if (Time < 12 == Time > 0) { //anytime before 12:00p.m
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { //between 12:00p.m and 6:00p.m
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening."; //after 6:00p.m
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}