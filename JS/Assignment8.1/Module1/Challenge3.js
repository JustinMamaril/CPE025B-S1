// Image constructor
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// images object
let images = {
    list: [],

    contains: function(title) {
        for (let image of this.list) {
            if (image.title === title) {
                return true;
            }
        }
        return false;
    },

    add: function(title, artist, date) {
        if (!this.contains(title)) {
            this.list.push(new Image(title, artist, date));
        }
    },

    show: function() {
        this.list.forEach(image => {
            console.log(`${image.title} (${image.artist}, ${image.date})`);
        });
    },

    clear: function() {
        this.list = [];
    }
};

// Test sequence
images.add("Mona Lisa", "Leonardo da Vinci", 1503);
images.add("The Starry Night", "Vincent van Gogh", 1889);
images.add("The Scream", "Edvard Munch", 1893);

images.show();

images.clear();
console.log("After clearing:");
images.show();
