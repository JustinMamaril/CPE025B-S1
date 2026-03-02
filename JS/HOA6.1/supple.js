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

function printContact(c, index) {
  console.log(`${index}: ${c.name} / ${c.phone} / ${c.email}`);
}

function isFilled(value) {
  return value !== null && value.trim() !== "";
}

let choice = "";

while (choice !== "quit") {
  choice = prompt("Choose: show / all / add / search / quit");
  if (choice === null) continue;               // user cancelled → back to menu
  choice = choice.trim().toLowerCase();

  if (choice === "show") {
    let idxInput = prompt(`Enter contact index (0 to ${contacts.length - 1}):`);
    if (idxInput === null) continue;

    let idx = Number(idxInput);
    if (Number.isInteger(idx) && idx >= 0 && idx < contacts.length) {
      printContact(contacts[idx], idx);
    } else {
      console.log("Error: Index does not exist.");
    }
  }

  else if (choice === "all") {
    if (contacts.length === 0) {
      console.log("No contacts to display.");
      continue;
    }
    for (let i = 0; i < contacts.length; i++) {
      printContact(contacts[i], i);
    }
  }

  else if (choice === "add") {
    let name = prompt("Enter Name:");
    if (!isFilled(name)) { console.log("Contact not added. Name is required."); continue; }

    let phone = prompt("Enter Phone:");
    if (!isFilled(phone)) { console.log("Contact not added. Phone is required."); continue; }

    let email = prompt("Enter Email:");
    if (!isFilled(email)) { console.log("Contact not added. Email is required."); continue; }

    contacts.push({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim()
    });

    console.log("New contact added.");
  }

  else if (choice === "search") {
    let query = prompt("Enter Name to search:");
    if (query === null) continue;

    query = query.trim();
    if (query === "") { console.log("Search cancelled (empty name)."); continue; }

    let found = false;
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name.toLowerCase() === query.toLowerCase()) {
        console.log(`${contacts[i].name}: ${contacts[i].phone} / ${contacts[i].email}`);
        found = true;
        break;
      }
    }

    if (!found) {
      console.log("Contact not found.");
    }
  }

  else if (choice === "quit") {
    // loop will end
  }

  else {
    console.log("Invalid option. Try again.");
  }
}

console.log("Program ended.");