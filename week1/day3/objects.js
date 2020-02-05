//reference variables
const replace = function(ref) {
  ref = {};           // this code does _not_ affect the object passed
};

const update = function(ref) {
  ref.key = 'newvalue';  // this code _does_ affect the _contents_ of the object
};

const a = { key: 'value' };
replace(a);  // a still has its original value - it's unmodified
update(a);   // the _contents_ of 'a' are changed


// keyword called this

console.log(this);

let parent = {
  dog: 'fluff',
  whatDog: function() {
    console.log('what is this', this);
    console.log(`the dog is a good boi named ${this.dog}`);
  }
};

parent.whatDog();

let copyWhatDog = parent.whatDog;

copyWhatDog();