function Ride_Function() {   //with given height, determine if tall enough to ride
    var Height, Can_ride;
    Height = document.getElementById("Height").value; //height given in document
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";  //checks height VS required, sending appropriate string
    document.getElementById("Ride").innerHTML = Can_ride + " to ride" //in HTML, 'ride' is replaced by the appropriate answer
}

function Ice_Cream(Flavor, number_of_dips, Cone) {  //creating ice cream class
    this.Ice_Cream_Flavor = Flavor;
    this.number_of_dips= number_of_dips;
    this.plural = (number_of_dips > 1) ? "s ":" "  //needed for wording: 1 dip VS multiple dips of ice cream
    this.Ice_Cream_Cone = Cone;
}
var Jordan = new Ice_Cream("Mint Chocolate", 3, "Waffle");   //instantiations of ice cream class
var Seth = new Ice_Cream("Vanilla", 1, "Sugar");
var Leland = new Ice_Cream("Chocolate", 2, "Chocolate-Dipped");

function New_and_This() {  //the relevant statement based on variable values is inserted in 'Ice_Cream' id of html
    document.getElementById("Ice_Cream").innerHTML= "Leland would like " + Leland.number_of_dips + " dip" + Leland.plural + " of " + Leland.Ice_Cream_Flavor + " ice cream in a " + Leland.Ice_Cream_Cone + " cone.";
}

function find_out() {  //this gets called
    document.getElementById("Nested_Function").innerHTML = Surprise() + "!" //writes down the value of Surprise() and !
    function Surprise() { 
        var word = "Sur"; //initialize variable
        function concatenate() { //function that adds "prise" to end of word
            word += "prise";
        }
        concatenate(); //Surprise() calling the nested concatenate()
        return word;  //value sent out from Surprise()
    }
}