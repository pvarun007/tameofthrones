class Goldenthrones{
    decryptAlogorithm = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    decrypttenor(animal, tenor){
        let newtenor = "";
        for(let i=0; i < tenor.length; i++){
            const indexT = this.decryptAlogorithm.indexOf(tenor[i]);
            const Alength = animal.length;
            if(indexT > -1){
                newtenor += this.decryptAlogorithm[indexT - Alength >= 0? indexT -Alength: (26 - (Alength - indexT))];            
            }
            else{
                newtenor += tenor[i];
            }
        }        
        newtenor = newtenor.split("");
        for(let i =0; i < animal.length; i++){
            const index = newtenor.indexOf(animal[i]);
            if(index > -1){
                newtenor.splice(index,1);
            }
            else{                
                return false;
            }
        }
        return true;
    }

    getAlliancesByName(universe, name) {
        const holdups = universe.Provinces.filter(x => x.holdup === name).map(x => x.name);
        if(holdups.length < 3) return 'NONE';
        else return `${name} ` + holdups.join(' ');
    }
    
}

module.exports = new Goldenthrones();