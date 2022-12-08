var alpha = 1;
var beta = "beta";

document.write(typeof alpha);
document.write(2E400);
document.write(-2E400);

document.write(5>4);
document.write(5<4);

console.log(9-4)
console.log(9<4)
console.log(9==5+4)
console.log(9==5-4)

console.log(5===5)
console.log(5==="3")
console.log(5==="5")
console.log(5===3)

console.log(5>4 && 5<4)
console.log(5>4 || 5<4)

function test() {
    document.getElementById("test").innerHTML = 0/0
}

function NaN_False() {
    document.getElementById("testFalse").innerHTML = isNaN(14)
}

function NaN_True() {
    document.getElementById("testTrue").innerHTML = isNaN("legendary")
}

function not_true() {
    document.getElementById("notTrue").innerHTML = !(5>4)
}

function not_false() {
    document.getElementById("notFalse").innerHTML = !(5<4)
}