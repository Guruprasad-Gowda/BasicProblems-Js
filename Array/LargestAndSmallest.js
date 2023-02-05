let arr = [];

// Generate 10 random 3 digit numbers and store them in an array
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * (999 - 100 + 1) + 100));
}

//console.log(arr);

// Function to find the 2nd largest and 2nd smallest elements
function secondLargestAndSmallest(arr) {
  let max1 = Number.MIN_SAFE_INTEGER, max2 = Number.MIN_SAFE_INTEGER;
  let min1 = Number.MAX_SAFE_INTEGER, min2 = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }

    if (arr[i] < min1) {
      min2 = min1;
      min1 = arr[i];
    } else if (arr[i] < min2) {
      min2 = arr[i];
    }
  }

  return [max2, min2];
}

// Call the function and store the result
let result = secondLargestAndSmallest(arr);

// Display the result
console.log(`The 2nd largest element is: ${result[0]}`);
console.log(`The 2nd smallest element is: ${result[1]}`);
