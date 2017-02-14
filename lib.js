const os = require('os');

const unpackChessboardRow = (chessBoardRowString) => {
  let unpackedRow = '';
  for (let i = 0, len = chessBoardRowString.length; i < len; i += 1) {
    if (isNaN(parseInt(chessBoardRowString.charAt(i), 10))) {
      unpackedRow += chessBoardRowString.charAt(i);
    } else {
      const numberOfDots = parseInt(chessBoardRowString.charAt(i), 10);
      for (let j = 0; j < numberOfDots; j += 1) {
        unpackedRow += '.';
      }
    }
  }
  return unpackedRow;
};

const getSquareCount = (chessBoardRowString) => {
  let count = 0;
  for (let i = 0, len = chessBoardRowString.length; i < len; i += 1) {
    if (isNaN(parseInt(chessBoardRowString.charAt(i), 10))) {
      count += 1;
    } else {
      count += parseInt(chessBoardRowString.charAt(i), 10);
    }
  }
  return count;
};

const isNumberOfRowsValid = (chessBoardString) => {
  if (chessBoardString) {
    if (chessBoardString.replace(/[^/]/g, '').length !== 7) {
      return false;
    }
    return true;
  }
  return false;
};

const isNumberOfSquaresValid = (chessBoardString) => {
  if (chessBoardString) {
    let isValid = true;
    chessBoardString.split('/').forEach((row) => {
      if (getSquareCount(row) !== 8) {
        isValid = false;
      }
    });
    return isValid;
  }
  return false;
};

const areAllPiecesValid = (chessBoardString) => {
  if (chessBoardString) {
    let isValid = true;
    for (let i = 0, len = chessBoardString.length; i < len; i += 1) {
      if (chessBoardString.charAt(i).match(/[1-8]|\/|p|k|q|r|n|b/i) === null) {
        isValid = false;
      }
    }
    return isValid;
  }
  return false;
};

const unpackChessboardString = (chessBoardString) => {
  if (typeof chessBoardString !== 'string') {
    throw new TypeError('Expected argument to be a string');
  }
  if (!isNumberOfRowsValid(chessBoardString)) {
    throw new Error('Invalid number of rows');
  }
  if (!isNumberOfSquaresValid(chessBoardString)) {
    throw new Error('Invalid number of squares');
  }
  if (!areAllPiecesValid(chessBoardString)) {
    throw new Error('Invalid encoded position : Unexpected character');
  }
  const tokenisedArrayOfRows = chessBoardString.split('/');
  const unpackedChessboardArray = tokenisedArrayOfRows.map(row => unpackChessboardRow(row));
  const unpackedChessboard = unpackedChessboardArray.join(os.EOL); // Platform-specific EOL
  return unpackedChessboard;
};

module.exports = unpackChessboardString;
