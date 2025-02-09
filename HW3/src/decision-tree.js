const score = 78;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Ваша оцінка:", grade);

const age = 22;
let message;

if (age < 18 && age > 0) {
    message = "Ви неповнолітній.";
} else if (age >= 18 && age < 65) {
    message = "Ви дорослий.";
} else if (age >= 65) {
    message = "Ви пенсіонер.";
} else {
    message = "Некоректний вік.";
}

console.log(message);

