const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
// Delete the build folder
fs.removeSync(buildPath);


const edsPath = path.resolve(__dirname, 'contracts', 'Endorsement.sol');
// Read Endorsement.sol from contracts folder
const source = fs.readFileSync(edsPath,'utf8');

//Compile the contract
const output = solc.compile(source, 1 ).contracts;

//check if dir exists, if not create it
fs.ensureDirSync(buildPath);

for (let contract in output ) {
	fs.outputJsonSync(
		path.resolve(buildPath,contract.replace(':','') + '.json'),
		output[contract ]
	);
}

