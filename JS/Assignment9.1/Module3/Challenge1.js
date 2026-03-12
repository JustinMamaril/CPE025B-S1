function getRandomSet(m, n, uniq, sorted) {
    let retVal = uniq ? new Set() : [];
    let push = (e) => uniq ? retVal.add(e) : retVal.push(e);
    let length = () => uniq ? retVal.size : retVal.length;

    while (length() < m) {
        // Generate random numbers between 0 and n-1
        let randNum = Math.floor(Math.random() * n);
        push(randNum);
    }

    // If sorted flag is true, return sorted array, otherwise return unsorted
    return sorted ? [...retVal].sort((n1, n2) => n1 - n2) : [...retVal];
}

// Testing the function
console.log(getRandomSet(10, 20, false, false)); // Non-unique, unsorted
console.log(getRandomSet(10, 20, false, true));  // Non-unique, sorted
console.log(getRandomSet(10, 20, true, false));  // Unique, unsorted
console.log(getRandomSet(10, 20, true, true));   // Unique, sorted