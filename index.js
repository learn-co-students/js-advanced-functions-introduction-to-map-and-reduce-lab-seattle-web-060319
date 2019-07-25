// my own 'map-like' methods

//turn all positive numbers negative
function mapToNegativize(inputArray) {
  let resultArray = []
  inputArray.forEach(element => {
    let newElement = element * (-1)
    resultArray.push(newElement)
  });
  return resultArray
}

// return an unchanged array
function mapToNoChange(testArray) {
  let resultArray = []
  testArray.forEach(element => {
    resultArray.push(element)
  });
  return resultArray
}

// double each element
function mapToDouble(testArray) {
  let resultArray = []
  testArray.forEach(element => {
    let newElement = element * 2
    resultArray.push(newElement)
  })
  return resultArray
}

// square each element
function mapToSquare(input) {
  const resultArray = []
  input.forEach(element => {
    let newElement = element * element
    resultArray.push(newElement)
  })
  return resultArray
}

// my own 'reduce-like' methods

// return a running total when not given a starting point (how is this not being given a starting point?)
function reduceToTotal(input, startPoint = 0) {
  let total = startPoint
  for (let i = 0; i < input.length; i++) {
    total = total + input[i]
  }
  return total
}

// returns false when any value is falsy
function reduceToAllTrue(input) {
  for (let i = 0; i < input.length; i++) {
    if (!input[i]) {
      return false
    }
  }
  return true
}

// returns true when a true value is present
function reduceToAnyTrue(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i]) {
      return true
    }
  }
  return false
}