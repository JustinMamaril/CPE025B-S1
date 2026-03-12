class MyIterable {
    constructor() {
        this.data = [];
    }

    // Property to get the number of elements in the collection
    get length() {
        return this.data.length;
    }

    // Method to check if an element exists in the collection
    has(n) {
        return this.data.includes(n);
    }

    // Method to add a new element (ignores if already exists)
    add(n) {
        if (!this.has(n)) {
            this.data.push(n);
        }
    }

    // Method to delete an element from the collection
    del(n) {
        let index = this.data.indexOf(n);
        if (index !== -1) {
            this.data.splice(index, 1);
        }
    }

    // Make the object iterable using the Symbol.iterator method
    [Symbol.iterator] = function* () {
        for (let index = 0; index < this.length; index++) {
            yield this.data[index];
        }
    }
}

// Example test usage
let iterable = new MyIterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2); // Duplicate, won't be added
iterable.del(3);

console.log(iterable.length); // -> 2
console.log(iterable.has(2)); // -> true
console.log(iterable.has(3)); // -> false
console.log(...iterable); // -> 2 5