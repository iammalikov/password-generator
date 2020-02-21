function getNumber(min = 0, max = 99) {
  const randomNumber = min + Math.random() * (max + 1 - min);

  return Math.floor(randomNumber);
}

function getCharacterForRange(firtCharacter, lastCharacter) {
  const randomCode = getNumber(firtCharacter, lastCharacter);

  return String.fromCharCode(randomCode);
}

// "A-Z"
function getUppercaseLetter() {
  const firstLetterCode = 65;
  const lastLetterCode = 90;

  return getCharacterForRange(firstLetterCode, lastLetterCode);
}

// "a-z"
function getLowercasLetter() {
  const firstLetterCode = 97;
  const lastLetterCode = 122;

  return getCharacterForRange(firstLetterCode, lastLetterCode);
}

// "0-9"
function getDigitCharacter() {
  const firstDigitCode = 48;
  const lastDigitCode = 57;

  return getCharacterForRange(firstDigitCode, lastDigitCode);
}

// "!”#$"
function getSpecialCharacter() {
  const characterRanges = [
    [33, 47],
    [58, 64],
    [91, 96],
    [123, 126]
  ];
  const currentRange = characterRanges[getNumber(0, characterRanges.length - 1)];
  const firstCharacterCode = currentRange[0];
  const lastCharacterCode = currentRange[1];

  return getCharacterForRange(firstCharacterCode, lastCharacterCode);
}

export { getNumber, getCharacterForRange, getUppercaseLetter, getLowercasLetter, getDigitCharacter, getSpecialCharacter };