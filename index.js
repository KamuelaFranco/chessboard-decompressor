const unpackChessboardString = require('./lib');

const compressedChessboardString = process.argv[2];

try {
  const unpackedChessboardString = unpackChessboardString(compressedChessboardString);
  console.log(unpackedChessboardString);
} catch (error) {
  console.error(`Validation failure: ${error.message}`);
}
