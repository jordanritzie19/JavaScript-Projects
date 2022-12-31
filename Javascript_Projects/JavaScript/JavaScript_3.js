function displayExample(flavor) {
    var flavorExample = flavor.getAttribute("data-example");
    alert(flavorExample + " tastes " + flavor.innerHTML);
}