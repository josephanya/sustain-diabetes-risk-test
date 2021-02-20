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

const ageLess40 = document.getElementById(">40");
const age4049 = document.getElementById("40-49");
const age5059 = document.getElementById("50-59");
const age60Plus = document.getElementById("60>");

const female = document.getElementById("female");
const male = document.getElementById("male");


const gesYes = document.getElementById("ges-d-yes");
const gesNo = document.getElementById("ges-d-no");

const familyYes = document.getElementById("family-yes");
const familyNo = document.getElementById("family-no");

const hbpYes = document.getElementById("hbp-yes");
const hbpNo = document.getElementById("hbp-no");

const exerciseLittle = document.getElementById("exercise-little");
const exerciseHigh = document.getElementById("exercise-high");

const heightOptions = document.getElementById("height-options");

const weightOptions = document.getElementById("weight-options");

var count = 0;
var heightInt;

const weightOptNormweight = (height) => {
    var lowerRange = height * height * 24.9
    return `Less than ${Math.floor(lowerRange)}kg`
}

const weightOptOverweight = (height) => {
    var lowerRange = height * height * 25
    var higherRange = height * height * 29.7
    return `${Math.floor(lowerRange)} - ${Math.floor(higherRange)}kg`
}

const weightOptObese1 = (height) => {
    var lowerRange = height * height * 30
    var higherRange = height * height * 34.7
    return `${Math.floor(lowerRange)} - ${Math.floor(higherRange)}kg`
}

const weightOptObese2 = (height) => {
    var lowerRange = height * height * 35
    return `More than ${Math.floor(lowerRange)}kg`
}

startButton.addEventListener('click', () => {
    age.style.display = "block";
    intro.style.display = "none";
});

ageLess40.addEventListener('click', () => {
    gender.style.display = "block";
    age.style.display = "none";
    count += 0
});

age4049.addEventListener('click', () => {
    gender.style.display = "block";
    age.style.display = "none";
    count += 1
});

age5059.addEventListener('click', () => {
    gender.style.display = "block";
    age.style.display = "none";
    count += 2
});

age60Plus.addEventListener('click', () => {
    gender.style.display = "block";
    age.style.display = "none";
    count += 3
});

female.addEventListener('click', () => {
    genderFemale.style.display = "block";
    count += 0
});

male.addEventListener('click', () => {
    family.style.display = "block";
    gender.style.display = "none";
    count += 1
});

gesYes.addEventListener('click', () => {
    family.style.display = "block";
    gender.style.display = "none";
    count += 1
});

gesNo.addEventListener('click', () => {
    family.style.display = "block";
    gender.style.display = "none";
    count += 0
});

familyYes.addEventListener('click', () => {
    hbp.style.display = "block";
    family.style.display = "none";
    count += 1
});

familyNo.addEventListener('click', () => {
    hbp.style.display = "block";
    family.style.display = "none";
    count += 0
});

hbpYes.addEventListener('click', () => {
    exercise.style.display = "block";
    hbp.style.display = "none";
    count += 1
});

hbpNo.addEventListener('click', () => {
    exercise.style.display = "block";
    hbp.style.display = "none";
    count += 0
});

exerciseLittle.addEventListener('click', () => {
    height.style.display = "block";
    exercise.style.display = "none";
    count += 1
});

exerciseHigh.addEventListener('click', () => {
    height.style.display = "block";
    exercise.style.display = "none";
    count += 0
});

heightOptions.addEventListener('change', () => {
    weight.style.display = "block";
    height.style.display = "none";
    var selectedHeight = document.getElementById('height-options').value;
    heightInt = Number(selectedHeight);

    var select = document.getElementById('weight-options');

    var option0 = document.createElement('option');
    var option1 = document.createElement('option');
    var option2 = document.createElement('option');
    var option3 = document.createElement('option');
    option0.appendChild(document.createTextNode(weightOptNormweight(heightInt)));
    option1.appendChild(document.createTextNode(weightOptOverweight(heightInt)));
    option2.appendChild(document.createTextNode(weightOptObese1(heightInt)));
    option3.appendChild(document.createTextNode(weightOptObese2(heightInt)));
    option0.setAttribute('value', weightOptNormweight(heightInt));
    option1.setAttribute('value', weightOptOverweight(heightInt));
    option2.setAttribute('value', weightOptObese1(heightInt));
    option3.setAttribute('value', weightOptObese2(heightInt));
    select.appendChild(option0);
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
});

weightOptions.addEventListener('change', () => {
    var selectedWeight = document.getElementById('weight-options').value;

    if (selectedWeight == weightOptNormweight(heightInt)) {
        count += 0
    } else if (selectedWeight == weightOptOverweight(heightInt)) {
        count += 1
    } else if (selectedWeight == weightOptObese1(heightInt)) {
        count += 2
    } else if (selectedWeight == weightOptObese2(heightInt)) {
        count += 3
    }

    if (count>=5) {
        resultHigh.style.display = "block";
        weight.style.display = "none";
    } else if (count<5) {
        resultLow.style.display = "block";
        weight.style.display = "none";
    } 
});