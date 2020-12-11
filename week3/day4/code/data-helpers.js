const bcrypt = require('bcrypt');

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
    username: 'test@gmail.com',
    id: 'passwordId'
  },
  'passwordId2': {
    restrictions: /[1-9]/,
    symbols: true,
    length: 20,
    domain: 'youtube.com',
    password: 'kjlksf',
    username: 'test@gmail.com',
    id: 'passwordId2'
  },
  'passwordId3': {
    restrictions: /[1-9]/,
    symbols: false,
    length: 30,
    domain: 'compass.ca',
    password: 'sdfsdf',
    username: 'tr0vis',
    id: 'passwordId3'
  }
};

const users = {
  'tr0vis': {
    username: 'tr0vis',
    password: bcrypt.hashSync('iliketurtles', 2)
  }
}

// what actions do we need to do on the data 

const getPasswords = (email) => {
  let usersPasswords = [];
  for(let passwordId in passwords) {
    if (passwords[passwordId].username === email) {
      usersPasswords.push(passwords[passwordId]);
    }
  }
  return usersPasswords; //all of a users passwords
}

const getPassword = (id) => {
  return  passwords[id];// return the password object
}

const addPassword = (password) => {
  password.username = "test@gmail.com";
  password.id = serialId;
  passwords[serialId] = password;
  serialId ++;
  return true;
}

const removePassword = (passwordId) => {
  delete passwords[passwordId];
  return true;
}

// USER HELPERS

const authenticateUser = (username, password) => {
  return users[username] && bcrypt.compareSync(password, users[username].password);
}

const addUser = (username, password) => {
  if (!users[username]) {
    // add the user
    // do any validation
    users[username] = {
      username, 
      password: bcrypt.hashSync(password, 2)
    };
    return true;
  } else {
    return false;
  }

}

module.exports = {
  getPassword,
  getPasswords,
  addPassword,
  removePassword,
  authenticateUser,
  addUser
}