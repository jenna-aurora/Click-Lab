//console.log("hello world");

//let headline = document.getElementById("headline-1");
//console.log(headline);

// -->Elements
let quizReaction = document.getElementById("reaction");
let answer1 = document.getElementById("answer-1");
let answer2 = document.getElementById("answer-2");
let answer3 = document.getElementById("answer-3);
// -->Incorrect #1
answer1.addEventListener("click", function () {
	quizReaction.textContent =
		"No - her location wasn't what the interrogators wanted.";
});
// -->Incorrect #2
answer2.addEventListener("click", function () {
	quizReaction.textContent = 
		"Not quite - her Sparrow Instructors weren't the focus of the interrogation.";
});		
// -->Correct Answer
answer3.addEventListener("click", function () {
	quizReaction.textContent =
		"Correct!" //they pressured her to reveal Boucher, the mole inside Russian Intelligence.";
}); 
