function firstUniqueChar(str) {
    //Code Here
    const freq = {};
    const lower = str.toLowerCase();

    for (let i = 0; i < lower.length; i++) {
        const char = lower[i];
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let i = 0; i < lower.length; i++) {
        if (freq[lower[i]] === 1) {
            return str[i];
        }
    }

    return null;
}

    // Test Code
    console.log(firstUniqueChar('sTreSS'));
    console.log(firstUniqueChar('aabbc'));
    