const forEachInReverse = function(items, func) {
  for (let i = items.length - 1; i >= 0; i--) {
    func(items[i]);
  }
};

forEachInReverse(['hello', 'Lighthouse Labs', 'and', 'world'], (word) => {
  console.log(word);
});
Once implemented, add a second parameter to the callback to support index passing (i).

const forEachInReverse = function(items, func) {
  for (let i = items.length - 1; i >= 0; i--) {
    func(items[i], i);
  }
};

forEachInReverse(['hello', 'lighthouse labs', 'and', 'world'], (word, index) => {
  console.log(`The word at index ${index} is "${word}"`);
});