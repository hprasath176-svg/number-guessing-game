var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var btn = document.getElementById("btn");
var result = Math.floor(Math.random() * 10)+1;
var no_of_guess = 0;
var guessed = [];

btn.addEventListener("click", () => {

    var user = document.getElementById("game");
    var userval = Number(user.value.trim());

    no_of_guess = no_of_guess + 1;

    if (userval < 1 || userval > 10) {
        alert("Enter numbers between 1-10");
    }
    else {

        guessed.push(userval);

        if (userval > result) {
            p1.textContent = "your number is high";
        }
        else if (userval < result) {
            p1.textContent = "your number is low";
        }
        else {
            p1.textContent = "you won the game";
            p2.textContent = "guessed number is " + result;
        }

        p2.textContent = "Number of guesses " + no_of_guess;
        p3.textContent = "guessed numbers " + guessed;
    }

    user.value = "";
});