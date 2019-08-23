// Your code here
function mapToNegativize(arr) {
  let newArr = [];
  let i;
  for(i = 0; i < arr.length; i++){
    newArr.push(-(arr[i]))
  }
  return newArr;
}

function mapToNoChange(arr) {
  let i;
  let newArr = [];
  for(i = 0; i < arr.length; i++){
    newArr.push(arr[i]);
  }
  return newArr;
}

function mapToDouble(arr) {
  let i;
  let newArr = [];
  for(i = 0; i < arr.length; i++){
    newArr.push(arr[i]*2)
  }
  return newArr;
}

function mapToSquare(arr) {
  let i;
  let newArr = [];
  for(i = 0; i < arr.length; i++){
    newArr.push(arr[i]**2)
  }
  return newArr;
}

function reduceToTotal(arr, start=0) {
  let i;
  for(i = 0; i < arr.length; i++){
    start += arr[i]
  }
  return start
}

function reduceToAllTrue(arr) {
  let i;
  for(i = 0; i < arr.length; i++){
    if(!arr[i]){return false}
  }
  return true
}

function reduceToAnyTrue(arr) {
  let i;
  for(i = 0; i < arr.length; i++){
    if(arr[i]){return true}
  }
  return false
}
