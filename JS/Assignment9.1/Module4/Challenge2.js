let myDecorator = function(fn) {
    let cache = new Set();
    let included = function(...args) {
        let found = false;
        let argsString = args.toString(); // Convert args to a string to make comparison easier
        if (cache.has(argsString)) {
            found = true;
        }
        return found;
    }

    return function(...args) {
        let argsString = args.toString(); // Convert args to a string
        if (included(...args)) {
            console.log(`arguments already used: ${argsString}`);
        } else {
            cache.add(argsString); // Store the stringified arguments
        }
        fn(...args);
    }
}

let sum = function(...args) {
    let retVal = 0;
    for (let arg of args) {
        retVal += arg;
    }
    return retVal;
}

let dfn = myDecorator(sum);

dfn(2, 3, 4);
dfn(4, 5);
dfn(2, 3, 4); // -> arguments already used: 2,3,4
dfn(4, 5); // -> arguments already used: 4,5