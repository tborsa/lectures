


//  What are callbacks?

// function called by another function (passed as another parameter)


// WHY?

// for asynchronous behaviour we want an action to happen after the asynchronous
// task is completed. 

// Can make code more DRY, flexible
// recursion
// 

const assertEquals = (val1, val2, expected, comparisonFunction) => {
    // return output to user if values are the same
    if (comparisonFunction(val1, val2) === expected) {
        //true
    }
}

// const namedFunction = () => {
//     console.log("DING!!!!")
// }   
// setTimeout(namedFunction, 2000);

// setTimeout(() => {
//     console.log("DING!!!!")
// }, 2000);

// assertEquals([1], [1,2], false, eqArrays);
// assertEquals({a: 1}, {a:1}, true, eqObjects);

const myFunc = () => {
}

const mySecondFunc = () => {
    myFunc(); // <== not a callback
}

const higherOrderFunction = (callback) => {
    callback(); // to do this later
}

// higherOrderFunction(myFunc);


const printMathResults = (val1, val2, mathCallback, outputString) => {
    // let mathCallback =  (val1, val2) => { <== this is what happens in Travis' mind
    //     return val1 - val2;
    // }    
    
    // do a math operation (specified by the function call)
    let result = mathCallback(val1, val2);
    // print the results with the output string
    console.log(outputString + ' ' + result);
}

let sum = (val1, val2) => {
    return val1 + val2;
}

let subtract = (val1, val2) => {
    return val1 - val2;
}

printMathResults(5, 4, sum, 'The sum of the two numbers is...');
printMathResults(5, 4, subtract, 'The difference of the two numbers is...');