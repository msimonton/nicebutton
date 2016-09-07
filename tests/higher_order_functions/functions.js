function add (a,b)  {
  return a+b;
}
function multiply (fn,c) {
  return fn(3,4)*c

}
function total (fn) {
  console.log(multiply(add,4))
}

console.log(total(multiply(add)))
