// what does our data look
// Passords
// - Character restrictions? Regex
// - option for symbols/numbers Boolean
// - length restrictions Number
// - What is the password for  String
let serialId = 0;
const passwords = {
  'passwordId': {
    restrictions: /[1-9]/,
    symbols: true,
    length: 20,
    domain: 'youtube.com',
    password: 'kjlksf',
    userEmail: 'test@gmail.com',
    id: 'passwordId'
  },
  'passwordId2': {
    restrictions: /[1-9]/,
    symbols: true,
    length: 20,
    domain: 'youtube.com',
    password: 'kjlksf',
    userEmail: 'test@gmail.com',
    id: 'passwordId2'
  },
  'passwordId3': {
    restrictions: /[1-9]/,
    symbols: false,
    length: 30,
    domain: 'compass.ca',
    password: 'sdfsdf',
    userEmail: 'test2@gmail.com',
    id: 'passwordId3'
  }
};

// what actions do we need to do on the data 

const getPasswords = (email) => {
  let usersPasswords = [];
  for(let passwordId in passwords) {
    if (passwords[passwordId].userEmail === email) {
      usersPasswords.push(passwords[passwordId]);
    }
  }
  return usersPasswords; //all of a users passwords
}

const getPassword = (id) => {
  return  passwords[id];// return the password object
}

const addPassword = (password) => {
  password.userEmail = "test@gmail.com";
  password.id = serialId;
  passwords[serialId] = password;
  serialId ++;
  return true;
}

const removePassword = (passwordId) => {
  delete passwords[passwordId];
  return true;
}

module.exports = {
  getPassword,
  getPasswords,
  addPassword,
  removePassword,
}