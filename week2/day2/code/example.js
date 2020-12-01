// When will each output show?
// What will result be equal to?
// How do we get the updated data back? Can we just return it?
// When does higherOrderFunc "end" (finish running) ?
// Since higherOrderFunc finishes "running" before our setTimeout fires, how can the setTimeout callback modify the data local variable?

const higherOrderFunc = function(callback) {
  const data = { initials: "YV" };

  console.log('BEFORE TIMEOUT CALL'); //2
  setTimeout(() => {
    data.initials = "YAV";
    callback(data);
    // as per question 3, what if we return data below? Like so:
    // return data;
  });
 
  console.log('AFTER TIMEOUT CALL'); //3
  // okay, if not in the setTimeout callback above, as per question 3, what if we return data here? So that result below is set to the data. Like so:
  return data;
 };
 
 console.log('BEFORE MAIN CALL'); // 1
 const result = higherOrderFunc((outcome) => {
  console.log('outcome', outcome); //6
 })

 console.log('this is result', result); //4
 console.log('AFTER MAIN CALL'); //5