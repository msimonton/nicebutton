
function calcTotal (a,b) {
  return a+b;
}

function higherOrder(fn) {
  return fn(3,4);

}
function higherestOrder (fn)  {
return fn(2,2)
}
higherestOrder(higherOrder(calcTotal))
