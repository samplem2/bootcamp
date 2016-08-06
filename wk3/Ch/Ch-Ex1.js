function sum(x){
   var s = 0;
   for (var i=0; i<x.length; i++)
       s += x[i];   
   return s; 
}

function multiply(x){
   var p = 1;
   for (var i=0; i<x.length; i++)
       p *= x[i];
   return p; 
}

console.log("Challenge 1");

var a = [44, 7, 22, 9, 4, 211];
console.log("sum of array a is " + sum(a));
console.log("product of array a is " + multiply(a));

var b = [2, 2, 2, 2, 2];
console.log("sum of array b is " + sum(b));
console.log("product of array b is " + multiply(b));