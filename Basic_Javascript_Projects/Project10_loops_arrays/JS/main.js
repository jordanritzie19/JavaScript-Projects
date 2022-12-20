function Call_Loop() {
    quote = "";
    shoes = 2;           //initialize shoes
    while(shoes > 0) {  //check if both shoes are off feet
        quote += "<br>" + (document.getElementById("Loop").innerHTML = "Please take off both of your shoes"); //adds a line to quote "take off shoes"
        shoes--;  //decrements number of shoes by 1
    }
    quote += "<br>" + (document.getElementById("Loop").innerHTML = "Thank you, now you may enter"); //after while loops closes, adds confirmation message
    document.getElementById("Loop").innerHTML = quote; //sends the variable quote thats been modified throughout the loops
}

instruments = ["Glockenspiel","Vibraphone","Xylophone","Marimba","Synthesizer","Drum Set", "Auxilleries"]; //global list of instruments

function for_Loop() { //example for loop
    var content = ""; //initializes string
    var i; //in hindsight, this could be removed with a slight alteration
    for (i = 0; i < instruments.length; i++) { //from item 0, list each item in 'instruments' list
        content += instruments[i] + "<br>"; //starts a new line after each list item
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

function array_Function() { //can specify an element of an array like so:
    document.getElementById("Array").innerHTML = instruments[2]
}

function constant_Function() { //properties of constants can be changed, but constants cannot be re-declared
    const door = {material:"metal", style:"single", purpose:"emergency"}
    door.material = "wooden" //example changing property
    door.location = "main lab" //example adding this.location property
    document.getElementById("Constant").innerHTML = "Please exit out the " + door.style + " " + door.material + " " + door.purpose + " door located in the " + door.location + " as soon as possible."
}

function scope() { //let has an additional scope, referred to as 'block' scope illustrated here
    fruit = "apple";
    {
        let fruit = "banana";
        console.log(fruit);  //should return block variable fruit "banana"
    }
    console.log(fruit); //fruit being banana cannot be accessed outside 
                        //of brackets, should read "apple"
}

scope(); //just runs the above function

let pass_play = {  //creating class pass_play
    route_concept: "989", //assigning properties
    QB_alignment: "shotgun", 
    formation: "11",
    play_action: true,  
    phrasing : function() { //utilizing return to give phrasing a value through a function
        let phrase //initializing variable
        if (this.play_action == true) { //if its a play action play, make note of that
            phrase = " Play Action";
        } else {
            phrase = ""; //this is the false case, nothing needs added
        }
        return phrase; //this is the value for phrasing()
    },
    description : function() { //utilizes return to give description a value through a function
        return "The staple play of the offense is a" + this.phrasing() + " " + this.QB_alignment + " pass out of " + this.formation + " personnel utilizing the " + this.route_concept + " concept.";
    }
};
document.getElementById("staple_play").innerHTML = pass_play.description();


let text = ""; //initializing blank text
for (let i = 1; i < 10; i++) { //starting from 1, add 1 until you reach 10
    if (i === 3) { continue; } //skips 3 in the loop
    if (i === 7) { break; } //stops the loop when it reaches 7
    text += i + "<br>"; //writes down the number, and creates a new line
}

document.getElementById("count").innerHTML = text
