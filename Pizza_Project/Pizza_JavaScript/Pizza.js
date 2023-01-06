function getReceipt() {
    //initializing string
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    //this for loop parses through the list of pizza sizes, and adds the selected size to text1 array
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;  
            text1 = text1 + selectedSize + "<br>"; 
        }
    }
    //depending on size of the pizza selected, sets the price of the base pizza
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 12;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 14;
    }
    runningTotal = sizeTotal; 
    console.log(selectedSize+" = $"+ sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal, text1);
};

//this function adds the price of toppings to the price of the base pizza and passes it on to veggies
function getTopping(runningTotal, text1) {
    //initializing topping variables
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    var free_topping = null;
    //this for loop parses through the list of toppings, and adds each one to the running list of selected options
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    //subtracts one of the toppings as the first one is free
    var toppingCount = selectedTopping.length;
    if (toppingCount > 0) {
        free_topping = false;  //since a topping has been selected, there is no longer a free one remaining
        toppingTotal = (toppingCount - 1);
    } else {
        free_topping = true;   //no topping has been selected, so a free one still remains
        toppingTotal = 0;  //this is to cover the case where no toppings are selected, as we don't want to reduce the price
    }
    
    runningTotal = (runningTotal + toppingTotal); //add topping total to the running total to be passed on
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total so far: "+"$" + runningTotal + ".00");
    console.log("You would get a free veggie: " + free_topping)
    getVeggies(runningTotal, text1, free_topping) //sends running variables over to getVeggies()
};

//this function takes the running variables and sends it through to the HTML document
function getVeggies(runningTotal, text1, free_topping) {
    //initializing veggie variables
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("Veggies");
    //this for loop parses through the list of veggies, adding selected veggies to the running list
    for (var k = 0; k < veggieArray.length; k++) {
        if (veggieArray[k].checked) {
            selectedVeggie.push(veggieArray[k].value);
            console.log("selected veggie item: (" + veggieArray[k].value + ")");
            text1 = text1 + veggieArray[k].value + "<br>";
        }
    }
    
    var veggieCount = selectedVeggie.length;
    if ((veggieCount > 0) && (free_topping == true)) { //if veggies have been selected AND there is a free topping available still:
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = veggieCount;  //this is to cover cases where you wouldn't be granted a free topping, either due to no selection or you've already gotten one for free
    }
    
    runningTotal = (runningTotal + veggieTotal); //adds veggie total to the running total to be sent through
    console.log("total selected veggie items: " + veggieCount);
    console.log(veggieTotal + " veggie items = " + "$" + veggieTotal + ".00");
    console.log("veggie text1: " + text1);
    console.log("Purchase Total: "+"$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1; //sends through all the selected options
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + 
        ".00" + "</strong></h3>";  //sends through the final price
}