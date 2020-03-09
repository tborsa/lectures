
const camelCase = (input) => {
  if (typeof input !== "string") {
    return "";
  }
  const camel = [];
  const words = input.trim().toLowerCase().split(' ');
  camel.push(words[0]);
  for (let i = 1; i < words.length; i ++) {
    let titleCharacter = words[i][0].toUpperCase();
    let restOfWord = words[i].slice(1);
    camel.push(`${titleCharacter}${restOfWord}`);
  }
  return camel.join('');
};

module.exports = camelCase;