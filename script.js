const questions = document.querySelectorAll(".question");
const progressBar = document.getElementById("progress-bar");

let current = 0;
let scores = [0,0,0,0];

function answer(type){
scores[type]++;
questions[current].classList.remove("active");
current++;

if(current < questions.length){
questions[current].classList.add("active");
progressBar.style.width = (current / questions.length) * 100 + "%";
}else{
localStorage.setItem("scores", JSON.stringify(scores));
window.location.href = "result.html";
}
}
