function findDuplicateDigits(rangeStart, rangeEnd) {
    const duplicates = [];
    for (let i = rangeStart; i <= rangeEnd; i++) {
        const num = i.toString();
        if (num[0] === num[1]) {
            duplicates.push(parseInt(num));
        }
    }
    return duplicates;
}

const duplicates = findDuplicateDigits(0, 100);
console.log(`Duplicate digits in the range 0-100: ${duplicates}`);
