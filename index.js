function mapToNegativize(sourceArray) {
  return sourceArray.map(x => x* -1)
}


function mapToNoChange(sourceArray){
  return sourceArray.map(x => x)
}

function  mapToDouble(sourceArray){
  return sourceArray.map(x=> x*2)
}

function mapToSquare(sourceArray){
  return sourceArray.map(x => x*x)
}

function reduceToTotal(sourceArray, start=0){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return sourceArray.reduce(reducer, start)
}

function reduceToAllTrue(sourceArray){
  const reducer = (accumulator, currentValue) => {
      if (!!currentValue == true){
        accumulator = true;
      }
      else {
        accumulator = false;
      }
      return accumulator;
  }
  return sourceArray.reduce(reducer)
}


function reduceToAnyTrue(sourceArray){
  const reducer = (accumulator, currentValue) => {
    if (currentValue == true) {
       accumulator = true;
    }
    else {
      accumulator = false;
    }
    return accumulator;
  }
  return sourceArray.reduce(reducer)

}
