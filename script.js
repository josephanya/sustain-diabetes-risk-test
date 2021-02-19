const startButton = document.getElementById("start-button");
const intro = document.getElementById("intro");
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const genderFemale = document.getElementById("gender-female");
const family = document.getElementById("family");
const hbp = document.getElementById("hbp");
const exercise = document.getElementById("exercise");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const resultHigh = document.getElementById("result-high");
const resultLow = document.getElementById("result-low");

var count = 0;

const calculate = () => {

}

startButton.addEventListener('click', () => {
    gender.style.display = "block";
    intro.style.display = "none";
});