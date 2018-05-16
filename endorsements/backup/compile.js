const path = require('path');
const fs = require('fs');
const solc = require('solc');

const endorsementPath = path.resolve(__dirname,'contracts','endorsement.sol');

const source = fs.readFileSync(endorsementPath, 'utf8');

//solc.compile(source, 1); //number of differnt contract we are attempting to compile

//console.log(solc.compile(source,1));

//console.log(solc.compile(source,1).contracts[':Endorsement']);
module.exports = solc.compile(source,1).contracts[':Endorsement'];



