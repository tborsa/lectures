

const callbackExample = function(num1, num2, callback){
    let total = num1 +num2;
    callback(total);

}


callbackExample( 5, 8,function(total){
    console.log("hello world " + total);
});

