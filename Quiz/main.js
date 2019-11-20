"use strict";

// Event Listener
document.getElementById('btn').addEventListener('click', markExam);

// Event Function
function markExam() {
    // Variables
    let an1 = document.getElementById('ans1').value;
    let an2 = document.getElementById('ans2').value;
    let an3 = document.getElementById('ans3').value;

    // If Statement
    if (an1 == "acute triangle") {
        document.getElementById('re1').innerHTML = 'correct';
    } else {
        document.getElementById('re1').innerHTML = 'incorrect';
    }

    if (an2 == "()") {
        document.getElementById('re2').innerHTML = "correct";
    } else {
        document.getElementById('re2').innerHTML = "incorrect";
    }

    if (an3 == "Toy Story") {
        document.getElementById('re3').innerHTML = "correct";
    } else {
        document.getElementById('re3').innerHTML = "incorrect";
    }
}