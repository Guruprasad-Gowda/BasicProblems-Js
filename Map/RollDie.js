function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function findMaxAndMin(numRolls) {
    const frequency = new Map();
    for (let i = 0; i < numRolls; i++) {
        const result = rollDie();
        if (frequency.has(result)) {
            frequency.set(result, frequency.get(result) + 1);
        } else {
            frequency.set(result, 1);
        }
        if (frequency.get(result) === 10) {
            break;
        }
    }

    let maxNum = 0;
    let maxCount = 0;
    let minNum = 0;
    let minCount = Number.MAX_SAFE_INTEGER;
    for (const [num, count] of frequency) {
        if (count > maxCount) {
            maxNum = num;
            maxCount = count;
        }
        if (count < minCount) {
            minNum = num;
            minCount = count;
        }
    }

    return { maxNum, maxCount, minNum, minCount };
}

const result = findMaxAndMin(100);
console.log(`Max number: ${result.maxNum} (${result.maxCount} times)`);
console.log(`Min number: ${result.minNum} (${result.minCount} times)`);
