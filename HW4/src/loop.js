// Цикл while від 0 до 9
console.log("\n while (0-9):");
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

// Цикл do...while
console.log("\n do...while (від 50 до 40):");
let k = 50;
do {
    console.log(k);
    k -= 2;
} while (k >= 40);

// Цикл for...of для масиву
console.log("\n for...of (масив чисел від 1 до 5):");
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}
