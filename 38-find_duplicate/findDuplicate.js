const findDuplicate = array => {
  const duplicate = array.filter(
    (number, index) => array.indexOf(number) !== index
  );
  return duplicate.length === 0 ? [] : duplicate[0];
};

module.exports = findDuplicate;
