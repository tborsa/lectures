

const userInput = process.argv[2];
const dogs = {fluffers: "a good boi", userInput: 'not a real dog', roofus: "excitable doggy", rover: "back to a good boi"}

const description = dogs[userInput]; //dynamic

if (description) {
  console.log(`The info on dog ${userInput} is: ${description}`);
} else {
  console.log('could not find dog');
}
