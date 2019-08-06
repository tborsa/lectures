// - What will be the order of the logs?
// - What will result be equal to?
// - How do we get the updated data back? Can we just return it?
// - When does higherOrderFunc "end" (finish running) ?
// - Since higherOrderFunc finishes "running" before our setTimeout fires, 
//   how can the setTimeout callback modify the data local variable?


const higherOrderFunc = function(callback) {
  const data = { initials: "YV" };

  console.log('BEFORE TIMEOUT CALL');
  setTimeout(() => {
    data.initials = "YAV";
    callback(data);
    // as per question 3, what if we return data below? Like so:
    // return data;
  });

  console.log('AFTER TIMEOUT CALL');
  // okay, if not in the setTimeout callback above, as per question 3, what if we return data here? So that result below is set to the data. Like so:
}
  
console.log('BEFORE MAIN CALL');
const result = higherOrderFunc((data) => {
  console.log('INSIDE CALLBACK', data);
})
console.log('AFTER MAIN CALL');
console.log('result ', result);
