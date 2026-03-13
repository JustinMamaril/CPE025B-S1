function sumDeepStrictNumbers(arr) {
    let total = 0;
    for (const item of arr) {
        if (Array.isArray(item)) {
            total += sumDeepStrictNumbers(item);
        } else if (typeof item === 'number' && !isNaN(item)) {
            total += item;
        }
    }
    return total;
}

// Test Code
const testArray1 = [10, ['5', [true, 5]], null, [undefined, [10, NaN]]];
console.log(sumDeepStrictNumbers(testArray1));