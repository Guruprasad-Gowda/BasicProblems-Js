let n = parseInt(process.argv[2]);
let power = 1;

console.log("Powers of 2:");
while (power <= 256) {
    console.log(power);
    power *= 2;
    if (power > Math.pow(2, n)) {
        break;
    }
}
