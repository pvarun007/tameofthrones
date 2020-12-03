const fs = require('fs');

const SouthThrones = require('./GoldenThrones');
const universeofheros = require("./UniverseSouthHeros")
const fileerror = require("./error");

try{
    const argu = process.argv.slice(2);
    if(argu.length !== 1) throw new Error(fileerror.FILE_ERROR)
    const file = fs.readFileSync(argu[0],'utf8');
    const data = file.split('\n').map(a => a.trim()).filter(b => b);
    data.forEach((str,i) => {universeofheros.exporter('SPACE', str.substring(0, str.indexOf(" ")), str.substring(str.indexOf(" ")+1))});
    console.log(SouthThrones.getAlliancesByName(universeofheros, 'SPACE'));
}

catch(e){
    console.log(e);
}