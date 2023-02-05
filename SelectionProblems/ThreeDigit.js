let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;

for (let i = 0; i < 5; i++) {
  let num = Math.floor(Math.random() * 900) + 100;
  console.log("Random number: " + num);
  if (num > max) {
    max = num;
  }
  if (num < min) {
    min = num;
  }
}

console.log("Minimum value: " + min);
console.log("Maximum value: " + max);
