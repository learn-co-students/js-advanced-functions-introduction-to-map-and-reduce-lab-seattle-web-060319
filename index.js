// Your code here
function mapToNegativize(sourceArray) {
  return sourceArray.map(x => x * -1);
}

function mapToNoChange(sourceArray) {
  return sourceArray;
}

function mapToDouble(sourceArray) {
  return sourceArray.map(x => x * 2); 
}

function mapToSquare(sourceArray) {
  return sourceArray.map(x => x * x);
}

function reduceToTotal(sourceArray, startingPoint=0) {
  return sourceArray.reduce((total, x) => total + x, startingPoint);
}

function reduceToAllTrue(sourceArray) {
  if (sourceArray.reduce((bool, x) => bool&&x)) {
    return true;
  }else {
    return false;
  }
}

function reduceToAnyTrue(sourceArray) {
  if (sourceArray.reduce((bool, x) => bool || x)) {
    return true;
  } else {
    return false;
  }
}
