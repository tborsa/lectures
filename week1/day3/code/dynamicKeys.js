const dogs = {charlie: 'a good boi', figgins: 'excitable doggie', huckleberry: 'adventours gal', dogFromUser: 'this is not a real dog'};

const dogFromUser = process.argv[2];

console.log(`${dogFromUser} is ${dogs[dogFromUser]}`); //=>dogs["charlie"] => dogs.charlie => "a good boi"