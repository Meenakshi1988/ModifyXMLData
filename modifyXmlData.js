const fs = require('fs');
const inputFilePath = './input.xml';
const outputFilePath = './output.xml';

let readAndModifyDataFromXMLFile = function (inputFilePath, outputFilePath) {
	if(fs.existsSync(inputFilePath)){
		fs.readFile(inputFilePath, 'utf8', function(err, response){
			console.log(`Content of the input as it is: \n${response}`);
			let stringifiedData = JSON.stringify(response);
			stringifiedData = stringifiedData.replace('Wipro', 'Wipro Ltd');
			parsedData = JSON.parse(stringifiedData);
			writeDataToOutputXMLFile(parsedData, outputFilePath);
		});
	} else {
		console.log(`Error: Make sure that file you are trying to read exists`);
	}
}

let writeDataToOutputXMLFile = function(parsedData, outputFilePath){
	try {
		console.log(`Writing the modified data to output.xml...`);
		fs.writeFileSync(outputFilePath, parsedData, 'utf8');
	} catch (err) {
		console.log(`Error: Failed to write data to output.xml`);
	}
}

readAndModifyDataFromXMLFile(inputFilePath, outputFilePath);