function mapToNegativize(sourceArray) {
  return sourceArray.map(element => element * -1);
}

function mapToNoChange(sourceArray) {
  return sourceArray;
}

function mapToDouble(sourceArray) {
  return sourceArray.map(element => element * 2);
}

function mapToSquare(sourceArray) {
  return sourceArray.map(element => element * element);
}

function reduceToTotal(sourceArray) {
  let total = 0;
  let i = 0;
  for (i = 0; i < sourceArray.length; i++) {
    total += sourceArray[i];
  }
  return total;
}

function reduceToAllTrue(sourceArray, startingPoint = 0) {
  sourceArray.forEach(function(element){
    startingPoint += element
  })
  return startingPoint
}
