let deepComp = function(src, trg) {

    if (typeof src !== "object" || typeof trg !== "object" || src === null || trg === null) {
        return src === trg;
    }

    let srcKeys = Object.keys(src);
    let trgKeys = Object.keys(trg);

    if (srcKeys.length !== trgKeys.length) {
        return false;
    }

    for (let property in src) {
        if (!(property in trg)) {
            return false;
        }

        if (typeof src[property] === "object" && typeof trg[property] === "object") {
            if (!deepComp(src[property], trg[property])) {
                return false;
            }
        } else {
            if (src[property] !== trg[property]) {
                return false;
            }
        }
    }

    return true;
};

// Test objects
let obj1 = {
    name: "Anna",
    details: {
        age: 20,
        hobbies: ["reading", "music"]
    }
};

let obj2 = {
    name: "Anna",
    details: {
        age: 20,
        hobbies: ["reading", "music"]
    }
};

// Output result
console.log(deepComp(obj1, obj2));
