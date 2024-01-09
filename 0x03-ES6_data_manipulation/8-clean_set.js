function cleanSet(set, startString) {
  const filteredValues = [...set].filter(value => value.startsWith(startString));

  if (startString === '') {
    return filteredValues.join('-');
  }

  return filteredValues.join('-').slice(startString.length);
}

export default cleanSet;
