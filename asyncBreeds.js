// asyncBreeds.js
const fs = require('fs');
const breedDetails = require('./syncBreeds');

const breedDetailsFromFile = function(breed, executeAfterCall) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) {
      return executeAfterCall(data);
    } else {
      return executeAfterCall(undefined);
    }

  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const printCatData = (catData) => {
  console.log('The return value is: ', catData);
};

// breedDetailsFromFile('bombay', printCatData);

module.exports = breedDetailsFromFile;