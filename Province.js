const gthrones = require("./GoldenThrones");

class Province{
    constructor (name, animal){
        this.name = name;
        this.animal = animal;
        this.holdup = "";
    }

    reciveTenor(from, tenor){
        if (gthrones.decrypttenor(this.animal, tenor) && ! this.holdup) this.holdup = from;
        return true;
    }
}

module.exports = Province;