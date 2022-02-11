/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme

let blue = true;

function button1Clicked() {
    console.log("Button 1 was clicked");

    let num = Math.round(Math.random() * 10)

    let rand_num_div = document.getElementById("random_num");

    rand_num_div.innerHTML = num;
}

function button2Clicked() {
    let circle = document.getElementById("changing_circle");

    if (blue) {
        circle.style.fill="green";
        blue = false;
    } else {
        circle.style.fill="blue";
        blue = true;
    }
}