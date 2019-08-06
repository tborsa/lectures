

const callbackExample = function(num1, num2, callback){
    let total = num1 +num2;
    callback();

}


callbackExample( 5, 8,function(){
    console.log("hello world");
});

