function generateBirthMonth() {
    return Math.floor(Math.random() * 12) + 1;
}

function findBirthMonthGroups() {
    const birthMonthGroups = new Map();
    for (let i = 0; i < 50; i++) {
        const birthMonth = generateBirthMonth();
        if (birthMonthGroups.has(birthMonth)) {
            birthMonthGroups.set(birthMonth, birthMonthGroups.get(birthMonth) + 1);
        } else {
            birthMonthGroups.set(birthMonth, 1);
        }
    }

    return birthMonthGroups;
}

const birthMonthGroups = findBirthMonthGroups();
console.log("Birth Month Groups:");
for (const [month, count] of birthMonthGroups) {
    console.log(`${month}: ${count} individuals`);
}
