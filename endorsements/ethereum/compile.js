const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
//1.Delete entire build folder
fs.removeSync(buildPath);


const edsPath = path.resolve(__dirname, 'contracts', 'Endorsement.sol');
//2. Read Endorsement.sol from contracts folder
const source = fs.readFileSync(edsPath,'utf8');

//3. Use solidity compiler to compile the contract
const output = solc.compile(source, 1 ).contracts;

//check if dir exists, if not create it
fs.ensureDirSync(buildPath);

for (let contract in output ) {
	fs.outputJsonSync(
		path.resolve(buildPath,contract.replace(':','') + '.json'),
		output[contract ]
	);
}

