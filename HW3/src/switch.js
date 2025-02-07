const score = 82;
let grade;

switch (true) {
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    case score >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log("Ваша оцінка:", grade);

const age = 11;
let message;

switch (true) {
    case age < 18 && age > 0:
        message = "Ви неповнолітній.";
        break;
    case age >= 18 && age < 65:
        message = "Ви дорослий.";
        break;
    case age >= 65:
        message = "Ви пенсіонер.";
        break;
    default:
        message = "Некоректний вік.";
}

console.log(message);

