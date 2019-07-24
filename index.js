const mapToNegativize = function(arr) {
    let newArr = arr.map( e => e * -1)
    return newArr
}

const mapToNoChange = function(arr) {
    let newArr = arr.map(e => e)
    return newArr
}

const mapToDouble = function(arr) {
    let newArr = arr.map(e => e * 2)
    return newArr
}

const mapToSquare = function(arr) {
    let newArr = arr.map(e => Math.pow(e,2))
    return newArr
}

const reduceToTotal = function(arr, starting=0) {
    let reducer = (acc, curr) => acc + curr
    return arr.reduce(reducer, starting)
}

const reduceToAllTrue = function(arr) {
    let reducer = (acc, curr) => {
        if (!!curr == true) {
            acc = true
        } else {
            acc = false
        }
        return acc
    }
    return arr.reduce(reducer)
}

const reduceToAnyTrue = function(arr) {
    let reducer = (acc, curr) => {
        if (!!curr == true) {
            acc = true
        } else {
            acc = false
        }
        return acc
    }
    return arr.reduce(reducer)
}