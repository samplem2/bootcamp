function max(x,y){
   var t;
   x > y ? t =  x : t = y;   
   return t;
}

function max3(x,y,z)
{
  var t = max ( max(x,y), z );
  return t;
}

console.log("Max of 11, 55, and 7 is: " + max3(11, 55, 7));
console.log("Max of 0, -5, and 5 is: " + max3(0, -5, 5));