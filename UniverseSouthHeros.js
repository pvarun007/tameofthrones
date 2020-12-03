const Province = require("./Province");

class UniverseSouthHeros {
    constructor(){
        this.Provinces =[
            new Province('SPACE', 'GORILLA'), 
            new Province('LAND', 'PANDA'),
            new Province('WATER', 'OCTOPUS'),
            new Province('ICE', 'MAMMOTH'),
            new Province('AIR', 'OWL'),
            new Province('FIRE', 'DRAGON')
        ]
    }
    
    exporter(from, to, tenor){
        if(!this.Provinces.map(x => x.name).includes(from)) return true;
        const index = this.Provinces.findIndex(x => x.name === to);
        if(index > -1){
            this.Provinces[index].reciveTenor(from,tenor);
        }
        return true;
    }
     
}

module.exports = new UniverseSouthHeros();