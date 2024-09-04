console.log("This is executed first");
var x="Hello World";
 function calculateSum(a,b){
    const sum=a+b;
    console.log(sum);
}
  // 2 ways of exports

//module.exports={
  //  x:x,
  //  calculateSum:calculateSum,};

  // module.exports.x=x;
  //module.exports.calculateSUM=calculateSum;

 module.exports={x,calculateSum};