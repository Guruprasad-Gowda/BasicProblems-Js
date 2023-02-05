const day = 2;
const month = 'May';

if (month === 'March' && day >= 20) {
  console.log(true);
} else if (month === 'April' || month === 'May') {
  console.log(true);
} else if (month === 'June' && day <= 20) {
  console.log(true);
} else {
  console.log(false);
}
