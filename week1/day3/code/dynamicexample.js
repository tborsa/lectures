const dogs = { bacon: 'excitable doggie', fluffers: 'a good boi', layla: 'a sweet girl', rover: 'good listener', userInput: 'this is not what you want'};

const userInput = process.argv[2]; //=> 'bacon'

const description = dogs[userInput];

if (description) {
  console.log(`The info on dog ${userInput} is ${description}`);
} else {
  console.log(`That was not a valid dog name try one of these`, Object.keys(dogs));
}
