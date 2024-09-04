require("./xyz");

//const utils= require("node:utils")
// util.
//import { calculateSum } from "./sum.js";
//const obj= require("./sum")
 const {x,calculateSum}=require("./sum");
 const {calculateMultiply}=require("./calculate/multiply");
 const data=require("./data.json");

 console.log(JSON.stringify(data));

var a=10;
var b=20;
//var x=100;
calculateSum(a,b); // Don't Execute the module directly
console.log(x);
calculateMultiply(a,b);