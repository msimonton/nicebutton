//map
//filter
//Filther takes an array and callback function that will call for each element if the callbackfunction turns truthy, keep the element otherwise don't.
var vietnameseFoods=['Pho','Dong hKang','bahn Mi','bun','boba tea']
/*function myFilter(arr,fn) {
  var newArray=[];
  for (var i = 0; i < arr.length; i++) {
    if(fn(arr[i], i, arr))  {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

var newArr= myFilter(vietnameseFoods, function(el, i, arr)  {
  if(el[0]=== 'b') {
    return true;
  }
});
console.log(newArr);*/
function blah(arr, fn) {
  var mop=[];
  for (var i = 0; i < arr.length; i++) {
    if(fn(arr[i], i,arr)) {
      mop.push(arr[i]);
    }
  }
  return mop;
}

var test=blah(vietnameseFoods,function(el,i,arr)  {
  if(el[0]==='b') {
    return true;
  }
});
console.log(test)

//forEach
//reduce



/*vietnameseFoods.forEach(vietnameseFoods,function(element, i, arr) {
  console.log('element is: ',name);
  console.log('index is: ', i);
  console.log('array is: ', arr);
});

function forEach(arr, fn) {
  for (var i=0;i<arr.length; i++) {
    fn(arr[i],i,arr)
  }
}

//forEach
//Takes an array and for each element in the array, pass that element into a callback function.
*/
