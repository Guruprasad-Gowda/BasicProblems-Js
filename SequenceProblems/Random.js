//1.Use REPL – Random Function Math.floor(Math.random() * 10); to get Single Digit.
console.log(Math.floor(Math.random() * 10));

//2.Use REPL – Use Random to get Dice Number between 1 to 6
console.log(Math.floor(Math.random() * 6) + 1);

//3.Use REPL – Add two Random Dice Number and Print the Result
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  let dice1 = rollDice();
  let dice2 = rollDice();
  
  console.log("Dice 1: " + dice1);
  console.log("Dice 2: " + dice2);
  console.log("Sum: " + (dice1 + dice2));

//4.Use Script & Debug – Write a program that reads 5 Random 2 Digit values , then find their sum and the average
let numbers = [];
let sum = 0;
for (let i = 0; i < 5; i++) {
  let number = Math.floor(Math.random() * 90) + 10;
  numbers.push(number);
  sum += number;
}

let average = sum / numbers.length;

console.log("Numbers: " + numbers);
console.log("Sum: " + sum);
console.log("Average: " + average);

  