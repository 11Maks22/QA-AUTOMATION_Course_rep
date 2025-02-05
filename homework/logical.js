
const num = 10;
const str = "Здоров був";
const bool = true;
const arr = [1, 2, 3];
const obj = { ім'я: "Тест" };

console.log("Число дорівнює 10:", num == 10);         // true
console.log("Рядок дорівнює 'Здоров був':", str === "Здоров був"); // true
console.log("Булеве значення true:", bool);             // true
console.log("Число більше за 5:", num > 5);           // true
console.log("Довжина рядка менша за 10:", str.length < 10); // true
console.log("Масив не пустий:", arr.length > 0);     // true
console.log("Об'єкт не null:", obj !== null);         // true
console.log("Число не дорівнює 5:", num != 5);         // true
console.log("Рядок не дорівнює 'світ':", str != "світ"); // true
console.log("І (true && true):", true && true);       // true
console.log("АБО (false || true):", false || true);     // true
console.log("НЕ (!false):", !false);                 // true
console.log("Порівняння різних типів (==):", num == str);   // false
console.log("Строге порівняння різних типів (===):", num === str); // false