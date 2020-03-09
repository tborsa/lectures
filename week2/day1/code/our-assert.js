
const assertEquals = (actual, expected) => {
  const result = actual === expected;
  if (result) {
    console.log(`✅ expected ${expected} to equal ${actual}`);
  } else {
    console.log(`🛑 expected ${expected} to equal ${actual}`);
  }
  return result;
};



module.exports = {
  assertEquals: assertEquals,
};

module.exports.dog = 'roofus';
