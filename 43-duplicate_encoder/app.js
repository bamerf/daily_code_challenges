duplicateEnccode = word => {
  word = word.toLowerCase().split('');
  word.filter(letter => letter !== ' ');
  const letterValue = {};
  word.forEach(letter => {
    if (letterValue[letter] >= 1) {
      letterValue[letter] += 1;
    } else {
      letterValue[letter] = 1;
    }
  });
  wordMutated = word.map(letter => {
    if (letterValue[letter] > 1) {
      return (letter = ')');
    } else {
      return (letter = '(');
    }
  });
  return wordMutated.join('');
};

module.exports = duplicateEnccode;
