// Sample dataset (from previous task)
let images = [
    { title: "Mona Lisa", artist: "Leonardo da Vinci", date: 1503 },
    { title: "The Starry Night", artist: "Vincent van Gogh", date: 1889 },
    { title: "The Scream", artist: "Edvard Munch", date: 1893 }
];

// Constructor function
let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
};

// Factory function
let getImage = function(title, artist, date) {
    return {
        title: title,
        artist: artist,
        date: date
    };
};

let images1 = [];
let images2 = [];

// Create images1 using the constructor
images.forEach(image => {
    images1.push(new Image(image.title, image.artist, image.date));
});

// Create images2 using the factory function
images1.forEach(image => {
    images2.push(getImage(image.title, image.artist, image.date));
});

// Display contents of images2
images2.forEach(image => {
    console.log(`${image.title} (${image.artist}, ${image.date})`);
});
