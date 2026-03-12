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

// Testing the User class
try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
console.log(user1.getName()); // Logs the first name
console.log(user1.getSurname()); // Logs the surname
console.log(user1.getEmail()); // Logs the email
    
    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // -> Error
} catch(err) {
    console.log(err.message);
}