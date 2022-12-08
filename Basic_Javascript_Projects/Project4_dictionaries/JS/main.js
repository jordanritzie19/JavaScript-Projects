function my_Dictionary() {      // creating dictionary
    var ice_cream = {           //defining variable
        Flavor: "Chocolate",    // key-value pairs
        Cone: "Waffle",
        Topping: "M&M\'s",
        Number_of_dips: "2",
    };
    delete ice_cream.Flavor     //removes Flavor: "Chocolate" kvp
    document.getElementById("Dictionary").innerHTML = ice_cream.Flavor   //attempts to return ice cream flavor, but fails as it has been deleted
}