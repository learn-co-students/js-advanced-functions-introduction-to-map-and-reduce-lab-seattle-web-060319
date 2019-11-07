import { truncate } from "fs";

// Your code here
function mapToNegativize(sourceArray) {
    let result = sourceArray.map(element => {
        return element * -1
    });
    return result
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    let result = sourceArray.map(element => element * 2)
    return result
}

function mapToSquare(sourceArray) {
    let result = sourceArray.map(element => element ** 2)
    return result
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let rfx = (memo, element) => memo + element
    let result = sourceArray.reduce(rfx, startingPoint)
    return result
}

function reduceToAllTrue(sourceArray) {
    let rfx = (memo, element) => {
        if (!!element == false) {
            memo = false
        } else if (!!element == true) {
            memo = true
        }
        return memo
    }
    let result = sourceArray.reduce(rfx)
    return result
}

function reduceToAnyTrue(sourceArray) {
    let rfx = (memo, element) => {
        if (!!element == false) {
            memo = false;
        } else if (!!element == true) {
            memo = true;
        }
        return memo
    }
    let result = sourceArray.reduce(rfx)
    return result
}