

const dogs = {bacon: "friendly", fluffers: "a good boi", pickles: "likes food", newDog: "no name yet"};

const userInput = process.argv[2]; //dynamic 

if (dogs[userInput]) {
  console.log(`${userInput} is ${dogs[userInput]}`);
} else {
  console.log(`could not find dog ${userInput}`);
}