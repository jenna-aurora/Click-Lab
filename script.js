


let quizReaction = document.getElementById("quiz-reaction");
let greeting = document.getElementById("greeting");


let answer0 = document.getElementById("answer-0");
let answer1 = document.getElementById("answer-1");
let answer2 = document.getElementById("answer-2");

let answer3 = document.getElementById("answer-3");
let answer4 = document.getElementById("answer-4");
let answer5 = document.getElementById("answer-5");

let answer6 = document.getElementById("answer-6");
let answer7 = document.getElementById("answer-7");
let answer8 = document.getElementById("answer-8");


let hintButton1 = document.getElementById("hint-button-1");
let hintButton2 = document.getElementById("hint-button-2");
let hintButton3 = document.getElementById("hint-button-3");


let greetings = [
    "Ready to test your spy knowledge?",
    "Your mission begins now",
    "Think carefully - the interrogators did."
];

greeting.textContent = greetings[Math.floor(Math.random() * greetings.length)];



answer0.addEventListener("click", function () {
    quizReaction.textContent = "Misguided - her Sparrow Instructors weren't the focus of the interrogation.";
    flashRed();
});
answer1.addEventListener("click", function () {
    quizReaction.textContent = "Erroneous - her location wasn't what the interrogators wanted.";
    flashRed();
});
answer2.addEventListener("click", function () {
    quizReaction.textContent = "Definitive, they pressured her to reveal Boucher, the mole inside Russian Intelligence.";
    clearFlash();
});

hintButton1.addEventListener("click", function () {
    quizReaction.textContent = "Hint: They wanted the name of a mole inside the American intelligence community.";
});



answer3.addEventListener("click", function () {
    quizReaction.textContent = "Not quite - she wasn't trying to flee the country.";
    flashRed();
});
answer4.addEventListener("click", function () {
    quizReaction.textContent = "Correct - she joins the program to secure medical care for her mother.";
    clearFlash();
});
answer5.addEventListener("click", function () {
    quizReaction.textContent = "No. she never wanted to become a spy.";
    flashRed();
});

hintButton2.addEventListener("click", function () {
    quizReaction.textContent = "Hint: She didn't choose espionag.. she chose to help someone who needed her.";
});



answer6.addEventListener("click", function () {
    quizReaction.textContent = "Correct ! Sparrows are trained to control and influence targets.";
    clearFlash();
});
answer7.addEventListener("click", function () {
    quizReaction.textContent = "No. combat isn't the core of Sparrow training.";
    flashRed();
});
answer8.addEventListener("click", function () {
    quizReaction.textContent = "Nope. hacking isn't part of their curriculum.";
    flashRed();
});

hintButton3.addEventListener("click", function () {
    quizReaction.textContent = "Hint: Their training focuses on controlling situations without ever throwing a punch.";
});



function flashRed() {
    document.body.style.backgroundColor = "crimson";
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 300);
}

function clearFlash() {
    document.body.style.backgroundColor = "";
}
