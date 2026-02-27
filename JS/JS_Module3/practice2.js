let width = Number(prompt("Enter box width:"));
let height = Number(prompt("Enter box height:"));
let length = Number(prompt("Enter box length:"));

if (!isNaN(width) && !isNaN(height) && !isNaN(length)) {
    let volume = width * height * length;
    alert(`Calculated box volume is ${volume}`);
} else {
    alert("Invalid input. Please enter valid numbers.");
}