// Your code here
let mapToNegativize = (sourceArray) =>{
    let returnArray = []
    for (let index = 0; index < sourceArray.length; index++) {
        const element = sourceArray[index];
        returnArray.push(-element)
    }
    return returnArray
}
let mapToNoChange = (sourceArray) => {
    let returnArray = []
    for (let index = 0; index < sourceArray.length; index++) {
        const element = sourceArray[index];
        returnArray.push(element)
    }
    return returnArray
}
let mapToDouble = (sourceArray) => {
    let returnArray = []
    for (let index = 0; index < sourceArray.length; index++) {
        const element = sourceArray[index];
        returnArray.push(element * 2)
    }
    return returnArray
}
let mapToSquare = (sourceArray) => {
    let returnArray = []
    for (let index = 0; index < sourceArray.length; index++) {
        const element = sourceArray[index];
        returnArray.push(element * element)
    }
    return returnArray
}
let reduceToTotal = (sourceArray, startingPoint=0) => {
    for (let index = 0; index < sourceArray.length; index++) {
        const element = sourceArray[index];
        startingPoint = startingPoint + element
    }
    return startingPoint
}
let reduceToAllTrue = (sourceArray) => {
    let check = true
    for (let index = 0; index < sourceArray.length; index++) {
        const element = sourceArray[index];
        if(!element){
            check = false
        }
    }
    return check
}
let reduceToAnyTrue = (sourceArray) => {
    let check = false
    for (let index = 0; index < sourceArray.length; index++) {
        const element = sourceArray[index];
        if(element === true){
            check = true
        }
    }
    return check
}