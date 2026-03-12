let getPromiseArray = function(args) {
    let promises = args.map(arg => new Promise(function(resolve, reject) {
        if (Number.isInteger(arg) && arg > 0) {
            setTimeout(() => resolve(arg), arg); // Correctly use setTimeout
        } else {
            reject(new Error(`${arg} is not a positive integer`)); // Reject with an error if not a positive integer
        }
    }));
    return promises;
};

// Test the function
let promises1 = getPromiseArray([10, 30, 5, 20, 'a']);
Promise.all(promises1)
    .then(a => console.log(`all: ${a}`))
    .catch(e => console.log(`all: ${e.message}`)); // -> all: a is not a positive integer

Promise.any(promises1)
    .then(a => console.log(`any: ${a}`))
    .catch(e => console.log(`any: ${e.message}`)); // -> any: a is not a positive integer