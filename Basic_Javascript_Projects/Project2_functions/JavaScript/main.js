var popup = "Please, for the love of god. All I ask of you is to not push the button that says \"Do not click me\""
    
alert(popup)

function Button_Text() {  //when called, changes text with id Button_Text
    var warning = "what is wrong with you? good thing the first button press does nothing... do NOT push it again";
    
    document.getElementById("Button_Text").innerHTML = warning;
}

function Another_Warning() {
    var sentence = "I should warn you, pressing the button below..."  //initializes variable
    sentence += " likely means our demise."                           //concatenates variable with another string
    
    document.getElementById("concatenate").innerHTML = sentence;      //when called, changes element text to the 'sentence' variable text
}