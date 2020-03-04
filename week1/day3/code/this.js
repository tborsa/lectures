
const dog = {
  name: 'roofus',
  age: 3,
  breed: 'shiba',
  whatDog: function() {
    console.log(`${this.stuff.friends.name()} is a ${this.age} year old ${this.breed}`);
  }
};

//friends this

dog.whatDog();

// let copy = dog.whatDog;

// copy();