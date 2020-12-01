const numbers = [900, -200, 310, 1006, 8, 9, 3630, 5, 52, 603, 59, 81, 500, 897, -500];

//yes yes, I know... this doesn't _return_ the numbers and instead outputs them to console. This isn't meant to be production code!
const sleepSort = function(nums, callback) {
 for (const num of nums) {
     const sorted = [];
   setTimeout(() => {
      process.stdout.write(`${num}, `);
      process.stdout.write(`\n`);
   }, num);
 }
}

sleepSort(numbers, function(sorted){

});
