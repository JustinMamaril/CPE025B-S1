let teamDirectory = [
    {
        name: "Leo Brooks",
        role: "Designer",
        skills: ["UI", "UX", "Figma"],
        available: true
    },
    {
        name: "Sasha Ivana",
        role: "Developer",
        skills: ["HTML", "CSS", "JS"],
        available: false
    },
    {
        name: "Jordan Lee",
        role: "Manager",
        skills: ["Planning", "Agile"],
        available: true
    }
];

teamDirectory.push({
    name: "Casey Moore",
    role: "QA Engineer",
    skills: ["Testing", "Debugging"],
    available: true
});

teamDirectory[1].available = true;

// Name and first skill of the first team member
console.log(teamDirectory[0].name + " - First Skill: " + teamDirectory[0].skills[0]);

// Name and total number of skills of the last team member
let lastIndex = teamDirectory.length - 1;
console.log(
    teamDirectory[lastIndex].name +
    " - Total Skills: " +
    teamDirectory[lastIndex].skills.length
);

// Total number of people in the directory
console.log("Total Team Members: " + teamDirectory.length);