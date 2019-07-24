// Your code here
function mapToNegativize(array){
    return array.map(x => x * -1)
}

function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    return array.map(x => x * 2)
}

function mapToSquare(array){
    return array.map(x => x * x)
}

function reduceToTotal(array, starting=0){
    return array.reduce((total, x) => total + x, starting)
}

function reduceToAllTrue(array){
    if (array.reduce((total, x) => total && x)){
        return true
    }else {
        return false
    }
}

function reduceToAnyTrue(array){
    if (array.reduce((total, x) => total || x)){
        return true
    }else {
        return false
    }
}