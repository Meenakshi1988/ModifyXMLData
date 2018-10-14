const assert = require('chai').assert;
const fs = require('fs');
const inputFilePath = './input.xml';
const outputFilePath = './output.xml';

describe('Unit tests for modifying XML data', function (){
    // verify if file exists
    it('Check if file exists', function (){
        assert(fs.existsSync(inputFilePath), true, "Error: Input file doesn't exist");
    });
    // verify if input file has valid data
    it('Check if valid data present in input file', function (){
        fs.readFileSync(inputFilePath, 'utf8', function(response){
            assert(JSON.stringify(response)).to.contain('Wipro', "Error: Input file doesn't have valid data");
        });
    });
    // Check whether data was modified 
    it('Check if data is modified as per requirement ', function (){
        fs.readFileSync(inputFilePath, 'utf8', function(response){
            let stringifiedData = JSON.stringify(response);
			stringifiedData = stringifiedData.replace('Wipro', 'Wipro Ltd');
			parsedData = JSON.parse(stringifiedData);
            assert(parsedData).to.contain('Wipro Ltd', "Error: Data isn't modified");
        });
    });
    // verfiy the modified data writtento file
    it('Check whether modified data was written to the file', function (){
        fs.readFileSync(inputFilePath, 'utf8', function(response){
            let stringifiedData = JSON.stringify(response);
			stringifiedData = stringifiedData.replace('Wipro', 'Wipro Ltd');
            parsedData = JSON.parse(stringifiedData);
            fs.writeFileSync(outputFilePath, parsedData, 'utf8');
            assert(fs.existsSync(outputFilePath), true, "Error: Output file doesn't exist");
        });
    });
});