let nameRegExp = /^[A-Z][a-z]+$/;
let emailRegExp = /^([a-zA-Z]+\.)*[a-zA-Z]+@([a-zA-Z]+\.)+[a-zA-Z]{2,3}$/;

class User {
    #name;
    #surname;
    #email;

    constructor(name, surname, email) {
        this.setName(name);
        this.setSurname(surname);
        this.setEmail(email);
    }

    setName(name) {
        if (!nameRegExp.test(name)) {
            throw new Error("Invalid first name format");
        }
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setSurname(surname) {
        if (!nameRegExp.test(surname)) {
            throw new Error("Invalid last name format");
        }
        this.#surname = surname;
    }

    getSurname() {
        return this.#surname;
    }

    setEmail(email) {
        if (!emailRegExp.test(email)) {
            throw new Error("Invalid email format");
        }
        this.#email = email;
    }

    getEmail() {
        return this.#email;
    }
}

class Users {
    #users;

    constructor() {
        this.#users = new Map();
    }

    add(name, surname, email) {
        try {
            if (!this.#users.has(email)) {
                this.#users.set(email, new User(name, surname, email));
            } else {
                console.log('User with this email already exists.');
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    delete(email) {
        return this.#users.delete(email);
    }

    get(email) {
        return this.#users.get(email);
    }

    getAll(sortBy) {
        const validFields = ['name', 'surname', 'email'];
        if (!validFields.includes(sortBy)) {
            throw new Error('Invalid sort field');
        }

        return [...this.#users].sort((u1, u2) => {
            if (u1[1][sortBy] < u2[1][sortBy]) return -1;
            if (u1[1][sortBy] > u2[1][sortBy]) return 1;
            return 0;
        }).map(u => u[1]);
    }
}

// Example test usage
let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com"); // This should be ignored since email is a duplicate
users.add("Xxxx", "Oooo", "dddd@gmail.com");

console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map(u => u.getName()));
console.log(users.getAll("surname").map(u => u.getSurname()));
console.log(users.getAll("email").map(u => u.getEmail()));