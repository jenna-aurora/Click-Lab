//console.log("hello world");

//let headline = document.getElementById("headline-1");
//console.log(headline);


let quizReaction = document.getElementById("reaction");
let answer0 = document.getElementById("answer-0");
let answer1 = document.getElementById("answer-1");
let answer2 = document.getElementById("answer-2");
let hintButton = document.getElementById("hint-button");

answer0.addEventListener("click", function () {
	quizReaction.textContent = "Erroneous - her location wasn't what the interrogators wanted.";
	document.body.style.backgroundColor = "crimson";
	setTimeout(() => {
		document.body.style.backgroundColor = "";
	}, 300);
});

answer1.addEventListener("click", function () {
	quizReaction.textContent = "Misguided - her Sparrow Instructors weren't the focus of the interrogation.";
	document.body.style.backgroundColor = "crimson";
	setTimeOut(() => {
		document.body.style.backgroundColor = "";
	}, 300);
});		

answer2.addEventListener("click", function () {
	quizReaction.textContent = "Defenitive, they pressured her to reveal Boucher, the mole inside Russian Intelligence.";
	document.body.style.backgroundColor = "";
}); 
// -->Hint button
hintButton.addEventListener("click", function () {
	quizReaction.textContet = "Hint: They wanted the name of a mole inside the American intelligence community.";
});