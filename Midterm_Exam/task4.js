const memo = {};
function power(base, exp) {
// Code Here
const key = base + "," + exp;

    if (memo[key] !== undefined) {
        return memo[key];
    }

    if (exp === 0) return 1;

    if (exp < 0) {
        memo[key] = 1 / power(base, -exp);
        return memo[key];
    }

    memo[key] = base * power(base, exp - 1);
    return memo[key];
}

// Test Code
console.log(power(2, 5));
console.log(power(2, -2));
