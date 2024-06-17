const fs = require('fs');

function printFileContents(filePath) {
  // TODO: Use fs.readFile to read the file contents
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(`Error: Column '${filePath}' not found in the CSV.`);
      } else {
        console.error(`Error reading file: ${err.message}`);
      }
      return;
    }
    //console.log('File contents:');
    console.log(data.trim());
  });
}

// TODO: Call printFileContents with the command-line argument
const filePath = process.argv[2];
//console.log('File path:', filePath);

if (!filePath) {
  console.error('Error: Please provide the file path as a command-line argument');
  process.exit(1);
}

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`Error: Column '${filePath}' not found in the CSV.`);
    return;
  }
  printFileContents(filePath);
});