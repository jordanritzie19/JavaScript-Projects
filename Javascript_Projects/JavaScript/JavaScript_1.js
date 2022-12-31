function select_number() {
    var number_selection;
    var input = document.getElementById("number").value;
    var pretext = "You selected the number "
    switch(input) {
        case "1":
            number_selection = pretext + "1"
        break;
        case "2":
            number_selection = pretext + "2";
        break;
        case "3":
            number_selection = pretext + "3";
        break;
        case "4":
            number_selection = pretext + "4";
        break;
        case "5":
            number_selection = pretext + "5";
        break;
        case "6":
            number_selection = pretext + "6";
        break
        case "7":
            number_selection = pretext + "7";
        break;
        case "8":
            number_selection = pretext + "8";
        break;
        case "9":
            number_selection = pretext + "9";
        break;
        case "10":
            number_selection = pretext + "10";
        break;
        default:
            number_selection = "Please pick a whole number between 1 and 10, with its arabic symbol e.g: 3";
    }
    document.getElementById("output").innerHTML = number_selection;
} //I can't help but think theres a better way to do this specific case using a loop and number type

var mickey_mouse = document.getElementsByClassName("assignment");
mickey_mouse[0].innerHTML = "Hotdog Hotdog Hot-diggity-dog";

var canvas = document.getElementById("imagination");
var diag1 = canvas.getContext("2d");
diag1.moveTo(0, 0);
diag1.lineTo(250, 250);
diag1.stroke();

var diag2 = canvas.getContext("2d");
diag2.moveTo(250, 0);
diag2.lineTo(0, 250);
diag2.stroke();

var gradienty = canvas.getContext("2d");
var gradientx = canvas.getContext("2d");


// create gradient block
var grdy = gradienty.createLinearGradient(0, 0, 177.777, 0); //top+bottom
grdy.addColorStop(0, "lightblue");
grdy.addColorStop(1, "pink");
var grdx = gradientx.createLinearGradient(0, 0, 0, 177.777); //left+right
grdx.addColorStop(0, "lightblue");
grdx.addColorStop(1, "pink");

// fill with gradient
gradienty.fillStyle = grdy;
gradienty.fillRect(72.223, 177.777, 103.553, 72.223); //bottom
gradienty.fillRect(72.223, 72.223, 103.553, -72.223); //top
gradientx.fillStyle = grdx;
gradientx.fillRect(177.777, 72.223, 72.223, 103.553); //right
gradientx.fillRect(72.223, 72.223, -72.223, 103.553); //left