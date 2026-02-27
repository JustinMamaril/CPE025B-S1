let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

// input
let newName = prompt("Enter contact name:");
let newPhone = prompt("Enter contact phone:");
let newEmail = prompt("Enter contact email:");

// new contact
contacts.push({
    name: newName,
    phone: newPhone,
    email: newEmail
});

let last = contacts.length - 1;

// Display
console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);