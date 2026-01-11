exports.isValidJSON = (value) => {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
};
