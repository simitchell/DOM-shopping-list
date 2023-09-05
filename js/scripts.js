'use strict';

const a = "Your shopping list will generate here!";         // appears on page load
const b = "We hope you enjoy shopping with us"              // appears on button click

window.onload = function() {
    document.getElementById('myStuffDefault').innerHTML = a;
    document.getElementById('hidden').style.visibility = "hidden";
}

generateList.addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById('hidden').style.visibility = "visible";
    document.getElementById('myStuffDefault').innerHTML = b;
    let x = document.querySelector("#item1").value;
    let y = document.querySelector("#item2").value;
    let z = document.querySelector("#item3").value;
    let q = document.querySelector("#item4").value;
    document.getElementById('myStuff1').innerHTML = x;
    document.getElementById('myStuff2').innerHTML = y;
    document.getElementById('myStuff3').innerHTML = z;
    document.getElementById('myStuff4').innerHTML = q;
})